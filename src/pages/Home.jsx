import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import Hero from '../component/Hero'
import Footer from '../component/Footer'

function Home() {
  const [category,setCategory]=useState('general')
  return (
    <div className=' bd bg-fixed'> 
      <Navbar setCategory={setCategory} />
      <Hero category={category} />
      <Footer setCategory={setCategory} />
    </div>
  )
}

export default Home
