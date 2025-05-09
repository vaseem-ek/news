import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

function Navbar({ setCategory }) {

  
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div  className='py-2 z-40 fixed w-full  backdrop-blur-md px-4 md:px-10 lg:px-20'>
      <div className='flex justify-between items-center'>
        <div className='md:hidden flex justify-between items-center'>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U4QBP2tG0ihESL4FAeGurxb1mU01BhHGtQ&s"
            className='h-8 md:h-10 rounded-full cursor-pointer'  onClick={() => setCategory("general")}
            alt="Logo 1"
          />
          
         
        </div>
        <div className='md:hidden flex justify-center items-center text-white'>
          <button className='cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {
              isMenuOpen ?
                <IoMdClose size={25} />
                :
                <HiOutlineBars3BottomLeft size={25} />

            }

          </button>
        </div>
      </div>

      {/* Main Navigation */}
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U4QBP2tG0ihESL4FAeGurxb1mU01BhHGtQ&s"
          className='h-8 md:h-10 md:block hidden rounded-full'
          alt="Logo 1"
        />
        
        {/* Navigation Links - Hidden on mobile when menu is closed */}
        <div className={`hidden md:block w-full md:w-auto`}>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-bold text-black items-center py-4 '>
            <li><div onClick={() => setCategory("general")} className='text-white   cursor-pointer'>General</div></li>
            <li><div onClick={() => setCategory("health")} className='text-white  cursor-pointer'>Health</div></li>
            <li><div onClick={() => setCategory("science")} className='text-white  cursor-pointer'>Science</div></li>
            <li><div onClick={() => setCategory("sports")} className='text-white  cursor-pointer'>Sports</div></li>
            <li><div onClick={() => setCategory("technology")} className='text-white  cursor-pointer'>Technology</div></li>
            <li><div onClick={() => setCategory("entertainment")} className='text-white   cursor-pointer'>Entertainment</div></li>
          </ul>
        </div>
<div></div>        
      </div>
      <AnimatePresence>

        {
          isMenuOpen &&
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className='absolute top-20 left-0 w-full h-screen z-20'   >
            <div className='bg-orange-300 mx-2 rounded-2xl'>
              <ul className='flex flex-col md:flex-row gap-4 md:gap-6 font-bold text-black items-center py-4 '>
                <li><div onClick={() => setCategory("general")} className='text-white transition cursor-pointer'>General</div></li>
                <li><div onClick={() => setCategory("health")} className='text-white transition cursor-pointer'>Health</div></li>
                <li><div onClick={() => setCategory("science")} className='text-white transition cursor-pointer'>Science</div></li>
                <li><div onClick={() => setCategory("sports")} className='text-white transition cursor-pointer'>Sports</div></li>
                <li><div onClick={() => setCategory("technology")} className='text-white transition cursor-pointer'>Technology</div></li>
                <li><div onClick={() => setCategory("entertainment")} className='text-white transition  cursor-pointer'>Entertainment</div></li>
              </ul>
            </div>
          </motion.div>
        }
      </AnimatePresence>

    </div>
  );
}

export default Navbar;