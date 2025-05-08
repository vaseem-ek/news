import React from 'react'

function Footer() {
  return (
    <div className='border-t-gray-600 mt-2 pb-2 bg-slate-800 border py-1 p-3 md:p-5 gap-5 grid grid-cols-1 md:grid-cols-3'>
        <div>
            <p className='text-3xl font-bold text-white'>News</p>
            <p className='text-justify text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad corporis accusamus </p>
        </div>
        <div className='text-xs text-white flex flex-col text-center gap-2'>
            <a className='hover:text-blue-600 hover:underline cursor-pointer'>Home</a>
            <a className='hover:text-blue-600 hover:underline cursor-pointer'>Sports</a>
            <a className='hover:text-blue-600 hover:underline cursor-pointer'>Politics</a>
            <a className='hover:text-blue-600 hover:underline cursor-pointer'>Country</a>
        </div>
        <div className='flex flex-col gap-2'>
            <textarea className='border border-white placeholder:text-sm p-4 rounded placeholder:text-white' placeholder='Your suggestions...' name="" id=""></textarea>
            <button className='text-white bg-red-600 px-3 py-1' >Send</button>
        </div>
      
    </div>
  )
}

export default Footer
