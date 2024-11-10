import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';
const Project = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [cardToShow,setCardToShow] = useState(1);

    useEffect(()=>{
        const updateCardsToShow =()=>{
            if(window.innerWidth >= 1024){
                setCardToShow(projectsData.length);
            }
            else{
                setCardToShow(1);
            };};
            updateCardsToShow();
       
            window.addEventListener('resize',updateCardsToShow );
            return ()=>window.removeEventListener('resize',updateCardsToShow);
        }
    ,[]);


    const nextProject =()=>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
    const prevProject =()=>{
        setCurrentIndex((prevIndex) => prevIndex ===0 ? projectsData.length-1 : prevIndex -1);
    }
  return (
  <>
  <motion.div
   initial={{ opacity: 0 ,x:-400}}
   transition={{duration:1}}
   whileInView={{opacity:1,x:0}}
   viewport={{once:true}} className='Container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Project'>
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Project <span className='underline underline-offset-4 decoration-1 under font-light '>Completed</span></h1>
    <p className='text-center text-grey md-8 max-w-[350px] mx-auto'>Crafting Spaces, Bulding Legacies-Explore Our profolio</p>

    {/* Slider Buttons */}
    <div className='flex justify-end items-baseline mb-8'>
        <button onClick={prevProject}
         className='p-3 bg-gray-300 rounded mr-2' aria-label='Previous Project'>
            <img src={assets.left_arrow} alt="" />
        </button>
        <button  onClick={nextProject}
        className='p-3 bg-gray-300 rounded mr-2' aria-label='Next Project'>
            <img src={assets.right_arrow} alt="" />
        </button>
    </div>
    {/* Project slider Container */}
    <div className='overflow-hidden bg-slate-600 py-10 px-5'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform:`translateX(-${(currentIndex * 100) / cardToShow}%)`}}>
            {projectsData.map((project,index)=>(
               <div key={index}  className='relative flex-shrink-0 w-full sm:w-1/4'>
                   <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
                    <div className=' absolute left-0 right-0 bottom-5 flex justify-center'>
                       <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded'>
                         <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                         <p className='text-grey-500 text-sm'>
                            {project.price} <span className='px-1'> | </span>{project.location}
                         </p>
                       </div>
                    </div>
                </div>

                //  ------------------------------
//             <div
//   key={index}
//   className="relative flex-shrink-0 w-full sm:w-1/4 group cursor-pointer ">

//   <img src={project.image} alt={project.title} className=" rounded w-full" />
//   <div className="absolute left-0 right-0 bottom-5 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
//     <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded">
//       <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
//       <p className="text-gray-500 text-sm">
//         {project.price} <span> | </span> {project.location}
//       </p>
//     </div>
//   </div>
// </div>
            ))
            }
        </div>
    </div>
  </motion.div>
  </>

  )
}

export default Project