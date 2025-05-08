import React from 'react'

function Footer({setCategory}) {
  return (
    <div className='border-t-gray-600 mt-2 pb-2 bg-slate-900 border py-1 p-3 md:p-5 gap-5 grid grid-cols-1 md:grid-cols-3'>
      <div>
        <p className='text-3xl font-bold text-white'>News</p>
        <p className='text-justify text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ad corporis accusamus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, atque? Nesciunt sed aliquid vero veniam assumenda nobis, laborum itaque ipsum id deserunt magnam facere perferendis sit ut libero totam recusandae. </p>
      </div>
      <div className=''>
        <ul className='text-xs text-white flex flex-col text-center gap-2 '>
          <li><div onClick={() => setCategory("general")} className='hover:text-white transition cursor-pointer'>General</div></li>
          <li><div onClick={() => setCategory("health")} className='hover:text-white transition cursor-pointer'>Health</div></li>
          <li><div onClick={() => setCategory("science")} className='hover:text-white transition cursor-pointer'>Science</div></li>
          <li><div onClick={() => setCategory("sports")} className='hover:text-white transition cursor-pointer'>Sports</div></li>
          <li><div onClick={() => setCategory("technology")} className='hover:text-white transition cursor-pointer'>Technology</div></li>
          <li><div onClick={() => setCategory("entertainment")} className='hover:text-white transition  cursor-pointer'>Entertainment</div></li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <textarea className='border border-white placeholder:text-sm p-4 rounded placeholder:text-white' placeholder='Your suggestions...' name="" id=""></textarea>
        <button className='text-white bg-red-600 px-3 py-1' >Send</button>
      </div>

    </div>
  )
}

export default Footer
