import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Hero() {
    const [news, setNews] = useState([])
    const API_KEY = "a4a1ef01ac834e3596d295655b5a6226"
    const [country,setCountry]=useState('')
    const getNews = async () => {
        const { data } = await axios.get(`https://newsapi.org/v2/everything?q=${country?country:'russia'}&apiKey=${API_KEY}`)
        // console.log(data);
        setNews(data.articles)
    }
   const changeOption=(e)=>{
    setCountry(e.target.value)
   }
    useEffect(() => {
        getNews()
    }, [country])
    return (

        <div>
            <img src="https://www.livemint.com/lm-img/img/2024/12/06/600x338/NEWS_1733464049847_1733464070835.jpg" className='w-full' alt="" />
            <p className='text-center text-red-700 underline font-extrabold md:text-4xl text-xl mb-3'>{country?country:"All"} News</p>
            <div className='grid grid-cols-[1fr_3fr]'>
                <div className='h-fit rounded  ml-5 pl-10 items-start p-3 flex flex-col gap-2 bg-black/10'>
                    <p className='flex justify-center text-gray-600 font-bold gap-2'>
                        <input type="radio" checked={country==="india"} onChange={changeOption}  className='w-5' value={'india'}  />india
                    </p>
                    <p className='flex justify-center text-gray-600 font-bold gap-2'>
                        <input type="radio"  checked={country==="tesla"} onChange={changeOption}  className='w-5' value={'tesla'}  />Tesla
                    </p>
                    <p className='flex justify-center text-gray-600 font-bold gap-2'>
                        <input type="radio"  checked={country==="us"} onChange={changeOption}  className='w-5' value={'us'}  />us
                    </p>
                    <p className='flex justify-center text-gray-600 font-bold gap-2'>
                        <input type="radio"  checked={country==="russia"} onChange={changeOption}  className='w-5' value={'russia'}  />Russia
                    </p>
                    <p className='flex justify-center text-gray-600 font-bold gap-2'>
                        <input type="radio"  checked={country==="bitcoin"} onChange={changeOption}  className='w-5' value={'bitcoin'}  />Bitcoin
                    </p>
                    
                </div>
                <div className='grid grid-cols-1 p-4 gap-4 md:grid-cols-2 lg:grid-cols-3 overflow-scroll scroll-smooth overflow-x-auto h-[400px] '>
                    {
                        news.slice(0, 8).map((item, index) => (

                            <Card key={index} name={item.title} url={item.urlToImage} description={item.description} />
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Hero
