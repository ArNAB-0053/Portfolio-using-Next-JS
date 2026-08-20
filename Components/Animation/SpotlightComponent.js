import { useRef, useState, useEffect, useCallback } from "react";

const SpotlightComponent = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.4)",
  spotlightSize = 300,
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: "50%", y: "50%" });
  const [opacity, setOpacity] = useState(0);
  const lastClientPos = useRef({ x: 0, y: 0 });

  const updatePosition = useCallback((clientX, clientY) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: clientX - rect.left, y: clientY - rect.top });
  }, []);

  const handlePointerMove = (e) => {
    if (!divRef.current || isFocused) return;
    lastClientPos.current = { x: e.clientX, y: e.clientY };
    updatePosition(e.clientX, e.clientY);
    setOpacity(1);
  };

  const handleFocus = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = (e) => {
    if (e.target !== e.currentTarget) return;
    setIsFocused(false);
    setOpacity(0);
  };

  const handlePointerEnter = (e) => {
    lastClientPos.current = { x: e.clientX, y: e.clientY };
    setOpacity(1);
  };

  const handlePointerLeave = () => {
    setOpacity(0);
  };

  // Recompute position relative to the (now-moved) card during scroll,
  // using the last known cursor screen position — since the cursor itself
  // hasn't fired a pointermove, only the element under it has moved.
  useEffect(() => {
    const handleScroll = () => {
      if (opacity === 0) return; // nothing visible, skip work
      updatePosition(lastClientPos.current.x, lastClientPos.current.y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [opacity, updatePosition]);

  // Safety net: reset spotlight if window loses focus while pointer is over it
  useEffect(() => {
    const handleWindowBlur = () => setOpacity(0);
    window.addEventListener("blur", handleWindowBlur);
    return () => window.removeEventListener("blur", handleWindowBlur);
  }, []);

  return (
    <div
      ref={divRef}
      onPointerMove={handlePointerMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 transition-all duration-300 ease-out ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-all duration-300 ease-out"
        style={{
          opacity,
          background: `radial-gradient(circle ${spotlightSize}px at ${position.x}px ${position.y}px, ${spotlightColor}, transparent)`,
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightComponent;
