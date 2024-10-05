import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col mt-36 w-full min-h-full'>
      <div className='flex justify-between'>
        <h1 style = {{fontSize: '13rem'}} className='text-white text-8xl ml-16 mt-5'>AREA OF</h1>
        <div className='flex flex-col justify-center align-middle'>
          <div className='mr-10 text-white font-semibold'>
            A TEAM OF EXPERIENCED PROFESSIONALS <br /> 
            WITH A WIDE RANGE OF SKILLS AND <br /> 
            KNOWLEDGE <br />
          </div>
          <div className='flex flex-row justify-start align-middle'>
            <div className='p-4 text-white px-2 py-2 border-4 border-white m-2'>S</div>
            <div className='p-4 text-white px-2 py-2 border-4 border-white m-2'>C</div>
            <div className='p-4 text-white px-2 py-2 border-4 border-white m-2'>T</div>
            <div className='p-4 text-white px-2 py-2 border-4 border-white m-2'>P</div>
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full'>
        <h1 style = {{fontSize: '13rem'}} className='text-white text-8xl mt-5'>EXPERTISE</h1>
      </div>

    </div>
  )
}

export default Hero