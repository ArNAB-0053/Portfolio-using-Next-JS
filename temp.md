'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor({ bg = 'bg-red-500 dark:bg-[#ff0000]' }) {
  const [mouseMoved, setMouseMoved] = useState(false);
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(window.innerWidth / 2 ),
    y: useMotionValue(window.innerHeight / 2),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setMouseMoved(true)

    // Limit the cursor coordinates to stay within the browser window
    const newX = Math.min(windowWidth - cursorSize, Math.max(0, clientX - cursorSize / 2 ));
    const newY = Math.min(windowHeight - cursorSize, Math.max(0, clientY - cursorSize / 2));

    mouse.x.set(newX);
    mouse.y.set(newY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
    };
  }, []);

  return (
    <div className='cursorContainer hidden lg:block'>
      {mouseMoved && (
        <motion.div
          style={{
            left: smoothMouse.x,
            top: smoothMouse.y,
          }}
          className={`cursor ${bg} w-[25px] h-[25px] rounded-full`}
        ></motion.div>
      )}
    </div>
  )
}