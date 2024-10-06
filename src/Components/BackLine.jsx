import React, { useEffect, useState } from 'react'
import {motion, useScroll, useSpring, useMotionValueEvent} from "framer-motion"

const BackLine = () => {
  const [smoothScroll, setSmoothScroll] = useState(0);
  const [scroll, setScroll] = useState(0);
  const { scrollYProgress } = useScroll();
  const speed = 1;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setSmoothScroll(latest * speed);
  })

  useEffect(() => {
    const handleScroll = () => {
      const posX = window.scrollY;
      console.log(posX);
      setScroll(posX);
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  })


  return (
    <div 
      className='-z-40 fixed w-full'
      style = {{
        marginLeft: "auto",
        marginRight: "auto",
        stroke: "#d7e1ed",
        padding: "4%",
        top: '0%',
        left: '0%'
      }}
    >
      <motion.svg
        style = {{width: "100%", height: "100%"}}
        viewBox= "5 110 400 400"
        xmlns="http://www.w3.org/2000/svg" 
      >
        <motion.path 
          initial = {{pathLength: 0}}
          animate = {{pathLength: scroll > 350 ? smoothScroll: 0}}
          transition= {{
            ease: "easeInOut",
            duration: 0.2
          }}
          strokeWidth={10}
          strokeDasharray="0 1"
          fill="none"
          
          d="M 393 125 C 349 147 230 228 54 54 C 145 -60 233 -2 261 6 C 356 252 139 311 38 323 C -16 199 60 174 94 185 C 123 215 379 446 313 270 C 220 191 202 507 267 640" 
        />
      </motion.svg>
    </div>
  )
}

export default BackLine