import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  className
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative w-full h-full [perspective:800px] flex flex-col items-center justify-center ${className}`}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: containerHeight,
          height: containerWidth,
          rotateX,
          rotateY,
          scale,
        }}
      >
        {/* SVG Blob */}
        <motion.div className="absolute top-0 left-0">
          <svg
            className={`w-[450px] h-[450] ${className}`}
            id="sw-js-blob-svg"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stopColor="#F8A037" offset="0%"></stop>
                <stop id="stop2" stopColor="#FB621F" offset="100%"></stop>
              </linearGradient>
            </defs>
            <mask id="mask1" mask-type="alpha">
              <path
                fill="url(#sw-gradient)"
                d="M23.9,-29.1C30.5,-23,34.9,-15,37.4,-5.8C40,3.4,40.7,13.6,36.2,20.3C31.6,26.9,21.8,29.9,12.6,32.2C3.5,34.4,-5.1,35.9,-13.6,34.2C-22.2,32.5,-30.8,27.6,-34,20.4C-37.3,13.2,-35.1,3.7,-33.3,-5.8C-31.6,-15.3,-30.1,-24.8,-24.6,-31C-19.1,-37.3,-9.6,-40.4,-0.4,-39.9C8.7,-39.4,17.4,-35.2,23.9,-29.1Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                stroke="url(#sw-gradient)"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                fill="url(#sw-gradient)"
                d="M23.9,-29.1C30.5,-23,34.9,-15,37.4,-5.8C40,3.4,40.7,13.6,36.2,20.3C31.6,26.9,21.8,29.9,12.6,32.2C3.5,34.4,-5.1,35.9,-13.6,34.2C-22.2,32.5,-30.8,27.6,-34,20.4C-37.3,13.2,-35.1,3.7,-33.3,-5.8C-31.6,-15.3,-30.1,-24.8,-24.6,-31C-19.1,-37.3,-9.6,-40.4,-0.4,-39.9C8.7,-39.4,17.4,-35.2,23.9,-29.1Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                strokeWidth="0"
                stroke="url(#sw-gradient)"
              />
              <image
                className="w-84 h-84"
                x="4"
                y="10"
                href="/Images/photo.png"
                width={90}
                height={90}
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-[#2E2E2E] text-white px-6 py-2 text-[10px] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
