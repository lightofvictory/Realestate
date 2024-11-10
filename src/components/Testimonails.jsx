import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'
const Testimonails = () => {
  return (
    <>
    <motion.div 
     initial={{ opacity: 0 ,x:200}}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold md-2 text-center' id='Testimonails'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'> Testimonails</span></h1>
        <p className='text-center text-grey-500 mb-12 max-w-80 mx-auto'>Real Stories from Those who Found Home with Us</p>
    
<div className='flex flex-wrap justify-center gap-8 bg-slate-600 p-10'>
     {testimonialsData.map((Testimonails,index)=>(
      <div key={index} className='text-whit bg-white max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={Testimonails.image} alt={Testimonails.alt} />
        <h2 className='text-xl text-gray-700 font-medium '>{Testimonails.name}</h2>
        <p  className='text-gray-500 mb-5 text-sm'>{Testimonails.title}</p>
      
      <div className='flex justify-center gap-1 text-red-500 mb-7'>
        {Array.from({length: Testimonails.rating},(item,index)=>(
          <img key={index} src={assets.star_icon} />
        ))}
      </div>
      <p >{Testimonails.text}</p>
        </div>

     ))}
</div>

    </motion.div>
    </>
  )
}

export default Testimonails