import React from 'react'

function Card({name,url,description}) {
  return (
    <div className='border-none shadow  rounded w-[220px] md:w-[280px]'>
      <div className='relative cursor-pointer'>
        <img src={url?url:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className='w-full' alt="" />
        <span className='absolute  top-1 w-full text-xs text-white italic  rounded-md px-2  py-1  backdrop-blur-xl'>{name}</span>
      </div>
      <p className='py-3 px-1 text-xs text-justify text-slate-600'>{description?description.slice(0,50):"it all about future"} <span className='text-blue-500 hover:text-blue-400 cursor-pointer'>Read more..</span></p>
    </div>
  )
}

export default Card
