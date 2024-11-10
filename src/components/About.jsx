import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
    
    <motion.div
     initial={{opacity: 0,x:200}}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
     className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px32 w-full overflow-hidden bg-white " id='About'>
<h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 font-light '>Our BRand</span></h1>
<p className='text-gray-500 max-w-80 mb-8 text-center md-8'>Passionate about Properties, Dedicated to your Vision</p>

<div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
  <img src={assets.brand_img} alt="" className='w-ful sm:w-1/2 max-w-60 md:max-w-lg' />
  <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
    <div className='grid grid-cols-2  gap-7 md:gap-15 w-full 2xl:pr-28'>
       <div>
        <p className='text-4xl font-medium text-gray-800'>10+</p>
        <p>Years Of Excellence</p>
       </div>
       <div>
        <p className='text-4xl font-medium text-gray-800'>12+</p>
        <p>Project Completed</p>
       </div><div>
        <p className='text-4xl font-medium text-gray-800'>20+</p>
        <p>Mn . Sq . Ft . Delivered</p>
       </div><div>
        <p className='text-4xl font-medium text-gray-800'>25+</p>
        <p>Ongoing Projects</p>
       </div>
    </div>
    <p className='max-w-lg my-10'>
    Experience a real estate journey built around your vision. With expert guidance and a focus on quality, we’re dedicated to helping you find the perfect property.
    </p>
    <button className='bg-blue-600 text-white px-8 py-2 rounded'> Learn more</button>

  </div>
</div>
    </motion.div>
    </>
  )
}
 
export default About