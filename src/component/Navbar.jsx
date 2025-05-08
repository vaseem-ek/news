import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { CiSearch, CiMenuBurger } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';
import { GiNewShoot } from 'react-icons/gi';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div className='py-2 bg-orange-300 px-4 md:px-10 lg:px-20'>
      {/* Top Section with Logos */}
      <div className='flex justify-between items-center'>
        {/* Desktop Search - Hidden on mobile */}
        <div className='md:hidden flex justify-between items-center'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_U4QBP2tG0ihESL4FAeGurxb1mU01BhHGtQ&s"
          className='h-8 md:h-10 rounded-full'
          alt="Logo 1"
        />
         <div className='bg-white ms-1 flex justify-center items-center rounded-full px-2'>
           <input
            type="text"
            className='py-1  px-4 w-32  placeholder:text-xs lg:w-64 outline-none  rounded-full'
            placeholder='search...'
          />
          <CiSearch
            size={20}
            className='ml-2 text-orange-600 cursor-pointer hover:scale-110 transition'
          />
         </div>
        </div>
        <div className='md:hidden flex justify-center items-center text-white'>
          <button className='cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {
              isMenuOpen?
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
            <li><a href="#" className='hover:text-white transition'>Home</a></li>
            <li><a href="#" className='hover:text-white transition'>Life Style</a></li>
            <li><a href="#" className='hover:text-white transition'>Latest</a></li>
            <li><a href="#" className='hover:text-white transition'>Sports</a></li>
          </ul>
        </div>

        {/* Desktop Search - Hidden on mobile */}
        <div className='hidden bg-white rounded-full px-2  md:flex items-center'>
          <input
            type="text"
            className='py-2  px-4 w-40 lg:w-64 outline-none rounded-full'
            placeholder='search...'
          />
          <CiSearch
            size={30}
            className='ml-2 text-orange-600 cursor-pointer hover:scale-110 transition'
          />
        </div>
      </div>
      <AnimatePresence>

        {
          isMenuOpen &&
          <motion.div
            initial={{ opacity: 0 ,y:-100 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0 ,y:-100}}
            className='absolute top-20 left-0 w-full h-screen z-20'   >
            <div className='bg-orange-300 mx-2 rounded-2xl'>
              <ul className='flex flex-col  gap-4  font-bold text-black items-center py-4 '>
                <li><a href="#" className='hover:text-white transition'>Home</a></li>
                <li><a href="#" className='hover:text-white transition'>Life Style</a></li>
                <li><a href="#" className='hover:text-white transition'>Latest</a></li>
                <li><a href="#" className='hover:text-white transition'>Sports</a></li>
              </ul>
            </div>
          </motion.div>
        }
      </AnimatePresence>

    </div>
  );
}

export default Navbar;