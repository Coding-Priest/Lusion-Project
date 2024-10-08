import React, { useEffect, useRef, useState } from 'react'
import './styles.scss';
import './styles.css'
import {motion, AnimatePresence} from "framer-motion";
import SineWave from './SineWave';

const Navbar = () => {
  const [mousePos, setMousePos] = useState({posX: 0, posY: 0});
  const [circlePos, setCirclePos] = useState({left: 0, bottom: 100});
  const [sizes, setSizes] = useState([]);
  const [isHovered, setHovered] = useState(false);
  const [isMenuHovered, setMenuHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const [isCircleClicked, setCircleClicked] = useState(false);

  const btnRef = useRef(null);


  useEffect(() => {
    const handleMouseMove = (event) => {
      const newMousePos = {posX: event.clientX, posY: event.clientY};
      setMousePos(newMousePos);

      const button_ele = document.getElementById('lusion_button');
      var rect = button_ele.getBoundingClientRect();
      var rect_top = rect.top;
      var rect_left = rect.left;
      var rect_right = rect.right;
      var rect_bottom = rect.bottom;

      //* Creating the equation of the circle
      const offset = 8;
      const centerX = (rect_left + rect_right) / 2;
      const centerY = (rect_top + rect_bottom) / 2;
      const radius = ((rect_bottom - rect_top) / 2) + offset;

      var inside = (newMousePos.posX - centerX)**2 + (newMousePos.posY - centerY)**2 - radius**2;
      if(inside < 0){
        //? Pass the mouse x and y coordinates to the global variable
        var leftPercentage = (Math.abs(newMousePos.posX - rect_left) / (2*radius)) * 100
        var bottomPercentage = (Math.abs(newMousePos.posY - rect_top) / (2*radius)) * 100 * 2

        document.documentElement.style.setProperty("--leftX", leftPercentage);
        document.documentElement.style.setProperty("--bottomY", bottomPercentage);
        // console.log(leftPercentage, bottomPercentage);
        const newCirclePos = {left: leftPercentage, bottom: bottomPercentage};
        // console.log(newCirclePos);
        setCirclePos(newCirclePos);
      }      
    };

    const newSizes = [];
    for(let i = 0; i < 100; i = i + 2){
      newSizes.push(`${i}px`);
    }
    setSizes(newSizes);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }; 
  }, []);

  return (
    <div className='flex flex-row items-center justify-between p-5'>
      <div className='text-white font-medium text-4xl ml-5'>LUSION</div>
      <div className='flex flex-row position-relative items-center gap-5'>
        <div onClick = {()=>{
          setClicked(!isClicked)
          }} 
          onMouseEnter = {() =>{
            setCircleClicked(true)
          }}
          onMouseLeave={() => {
            setCircleClicked(false)
          }}
          className=' overflow-hidden rounded-full position-absolute -z-1000 flex justify-center items-center  h-fit'>
          <motion.button
            id = "lusion_button" 
            ref={btnRef}
            className= "bg-white py-2 px-3 rounded-full font-bold radial-gradient-bg text-black relative -z-1000"
            whileHover = {{
              '--size': sizes,
              '--left': [`${circlePos.left}%`],
              '--bottom': [`${circlePos.bottom}%`],
              color: ['#FFFFFF'],
              transition: {
                duration: 0.2
              }
            }}
            animate = {{
              '--size': [`100px`, '90px', '80px', '70px', '60px', '50px', '40px', '30px', '20px', '10px', '0px'],
              color: ["#000000"],
              transition: {
                duration: 0.2
              }
            }}
          >
            {isClicked ? (
            <div style={{width: `${btnRef.current ? btnRef.current.getBoundingClientRect().width-20 : 0}px`}} className=' overflow-hidden ml-[10px] left-0 h-full top-0 absolute z-20'>
            <div 
             className=' w-56 z-10 h-full '>
              <SineWave 
                isCircleClicked={isCircleClicked}
              />
            </div>
            </div>) : ("—")}
            
            
            <h1 className={` ${!isClicked ? "hidden" : "block"} opacity-0`}>—</h1>
          </motion.button>

        </div>
        <div className=''>
          <motion.button 
            style = {{backgroundColor: 'rgba(43, 46, 58, 1)'}} 
            className = 'py-3 px-5 rounded-full font-semibold text-white text-base'
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            whileHover =  {{
              backgroundColor: ["rgba(0,0,255,255)"],
              color: ["#FFFFFF"],
              transition: {
                duration: 0.5
              }   
            }}
            animate =  {{
              backgroundColor: ["rgba(43, 46, 58, 1)"],
              transition: {
                duration: 0.5
              }   
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isHovered ? "hovered" : "not-hovered"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 1}}
                transition={{duration: 0.1}}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {isHovered ? (
                  <>
                    <motion.span
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: -5, opacity: 1 }}
                      exit={{ x: -10, opacity: 0 }}
                      transition={{ duration: 0.3}}
                    >
                      🡒
                    </motion.span>
                    <motion.span
                      initial={{x: -10, opacity: 0}}
                      animate={{x: 0, opacity: 1}}
                      exit={{x: -10, opacity: 0}}
                      transition={{duration: 0.3}}
                    > 
                      LET'S TALK 
                    </motion.span>
                  </>
                ) : (
                  <span>LET'S TALK &nbsp;•</span>
                ) }
                 
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
        <div className=''>
          <motion.button 
            className='bg-white py-2 px-4 rounded-full font-semibold'
            onHoverStart={() => setMenuHovered(true)}
            onHoverEnd={() => setMenuHovered(false)}    
          >
            <AnimatePresence mode = "wait">
                <motion.div
                  key={isMenuHovered ? "MenuHovered" : "MenuNot-hovered"}
                  initial={{opacity: 1}}
                  animate={{opacity: 1}}
                  exit={{opacity: 1}}
                  transition={{duration: 0.1}}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  {isMenuHovered ? (
                    <>
                      <span>MENU &nbsp;</span>
                      <motion.span
                        initial = {{opacity: 1}}
                        animate = {{rotate: 90, opacity: 1}}
                        exit = {{rotate: 0, opacity: 1}}
                      >
                        ••
                      </motion.span>
                    </>
                  ) : (
                    <span>MENU &nbsp;••</span>
                  )}
                </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Navbar