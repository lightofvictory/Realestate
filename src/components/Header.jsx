import React from 'react'
import Navbar from './Navbar'
// import header from '../assets/header_img.png'
import  bg_home from '../../public/bg_home1.jpg'

import { motion } from "framer-motion";

const Header = () => {11
  return (
    <>
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center  overflow-hidden ' style={{background:`url( ${bg_home}) `,backgroundPosition:'center',backgroundSize:'cover'}}  id='header'>
    <Navbar/>
    <motion.div 
     initial={{ opacity: 0 ,y:100}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
    <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Where Your Dream Home Becomes Reality</h2>
    <div className='space-x-6 mt-16'>
        <a href="#Project" className='border border-white  px-8 py-3 rounded'>Projects</a>
        <a href="#Contact" className='bg-blue-500  border px-8 py-3 rounded'>Contact Us</a>
    </div>
    </motion.div>

    </div>


    </>

  )
}

export default Header