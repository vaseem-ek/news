import React from 'react'

function Card({name,src,description,url}) {
  return (
    <div className='border-none shadow  rounded w-full md:w-[240px] lg:w-[350px]'>
      <div className='relative'>
        <img src={src?src:"https://thumbs.dreamstime.com/b/news-woodn-dice-depicting-letters-bundle-small-newspapers-leaning-left-dice-34802664.jpg"} className='w-full' alt="" />
        <span className='absolute  top-1 w-full text-xs text-white italic  rounded-md px-2  py-1  backdrop-blur-xl'>{name}</span>
      </div>
      <p className='py-3 px-1 text-xs text-justify text-white'>{description?description.slice(0,50):"it all about future"} <a href={url}className='text-blue-500 hover:text-blue-400 cursor-pointer'>Read more..</a></p>
    </div>
  )
}

export default Card
