import React, { useEffect, useState } from 'react'
import CardSVG from './CardSVG'
import {motion, useScroll, useSpring, useMotionValueEvent} from "framer-motion"
import Strategy from './Strategy'
import Creative from './Creative'
import Tech from './Tech'
import Production from './Production'

const Cards = () => {

  const { scrollYProgress } = useScroll();
  const [scroll, setScroll] = useState(0);
  const [smoothScroll, setSmoothScroll] = useState(0);
  const [smoothScrollSlow, setSmoothScrollSlow] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [flip, setFlip] = useState(false);


  const parent_div = document.getElementById('card_holder');
  const card_div = document.getElementById('card');

  const clockwise_rotation_limit = 16;
  const anticlockwise_rotation_limit = (clockwise_rotation_limit * 25) / 60;

  const flipStartScroll = 2000;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest * clockwise_rotation_limit)
    setSmoothScroll(latest * clockwise_rotation_limit);
    setSmoothScrollSlow(latest * anticlockwise_rotation_limit);
  })

  useEffect(() => {
    const handleScroll = () => {
      const posX = window.scrollY;
      // console.log("Absolute scroll: ", posX);
      setScroll(posX);
      setIsFixed(posX > 500);

      if(smoothScroll >= clockwise_rotation_limit - 1){
        setFlip(true);
      }
      else{
        setFlip(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  })

  return (
    <div id = "card_holder" style = {{top: '10%', left: '0%'}} className={`flex justify-center items-center h-screen mt-10 z-1000 ${isFixed ? 'fixed w-full' : 'relative'}`}>

      <motion.div id = "card" 
      style = {{rotate: (Math.min(smoothScroll, clockwise_rotation_limit)), transformOrigin: scroll < flipStartScroll + 600 ? 'bottom right' : 'center center'}} 
      transition = {{ type: "spring", bounce: 0.25}} 
      className= "absolute top-0 left-2/5 z-30"
      initial = {{x: 0, opacity: 1}}
      animate = {{
        x: smoothScroll < (clockwise_rotation_limit / 5) ? 0 : smoothScroll * 35, 
        rotateY: scroll >= flipStartScroll + 600 ? 180: 0, 
        rotate: scroll >= flipStartScroll ? 0: (Math.min(smoothScroll, clockwise_rotation_limit)),
        opacity: 1,
      }}
      >
        {scroll >= flipStartScroll + 600 ? 
        (<Production />) :
        (<CardSVG />)
        }
      </motion.div>

      <motion.div 
        style = {{rotate: (Math.min(smoothScrollSlow, anticlockwise_rotation_limit)), transformOrigin: scroll < flipStartScroll + 400 ? 'bottom right' : 'center center'}} 
        transition = {{ type: "spring", bounce: 0.25}} 
        className='absolute top-0 left-2/5 z-20'
        initial = {{x: 0, opacity: 1}}
        animate = {{
          x: smoothScroll < (clockwise_rotation_limit / 5) ? 0 : smoothScroll * 12, 
          rotateY: scroll >= flipStartScroll + 400 ? 180: 0, 
          rotate: scroll >= flipStartScroll ? 0: (Math.min(smoothScrollSlow, anticlockwise_rotation_limit)),
          opacity: 1, 
        }}
      >
        {scroll >= flipStartScroll + 400 ? 
        (<Tech />) :
        (<CardSVG />)
        }
      </motion.div>

      <motion.div 
        style = {{rotate: -(Math.min(smoothScrollSlow, anticlockwise_rotation_limit)), transformOrigin: scroll < flipStartScroll + 200 ? 'bottom right' : 'center center'}} 
        transition = {{ type: "spring", bounce: 0.25}} 
        className='absolute top-0 left-2/5 z-10'
        initial = {{x: 0, opacity: 1}}
        animate = {{
          x: smoothScroll < (clockwise_rotation_limit / 5) ? 0 : -smoothScroll * 12, 
          rotateY: scroll >= flipStartScroll + 200 ? 180: 0, 
          rotate: scroll >= flipStartScroll ? 0: -(Math.min(smoothScrollSlow, anticlockwise_rotation_limit)),
          opacity: 1
        }}
      >
        {scroll >= flipStartScroll + 200 ? 
        (<Creative />) :
        (<CardSVG />)
        }
      </motion.div>
      
      <motion.div 
        style = {{rotate: -(Math.min(smoothScroll, clockwise_rotation_limit)), transformOrigin: scroll < flipStartScroll ? 'bottom right' : 'center center'}} 
        transition = {{ type: "spring", bounce: 0.25}} 
        className='absolute top-0 left-2/5 z-0'
        initial = {{x: 0, opacity: 1}}
        animate = {{
          x: smoothScroll < (clockwise_rotation_limit / 5) ? 0 : -smoothScroll * 35, 
          rotateY: scroll >= flipStartScroll ? 180: 0, 
          rotate: scroll >= flipStartScroll ? 0:  -(Math.min(smoothScroll, clockwise_rotation_limit)),
          opacity: 1
        }}
      >
        {scroll >= flipStartScroll ? 
        (<Strategy />) :
        (<CardSVG />)
        }
        
      </motion.div>

    </div>
  )
}

export default Cards