import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

function Hero({ category }) {
    const [news, setNews] = useState([])
    const API_KEY = "a4a1ef01ac834e3596d295655b5a6226"
    const getNews = async () => {
        const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
        console.log(data);
        setNews(data.articles)
    }
    useEffect(() => {
        getNews()
    }, [category])
    return (

        <div className='py-5 pt-20'>
            <div className='grid grid-cols-1 gap-2 p-2 md:gap-20 md:p-10 md:grid-cols-2'>

                <img src="https://www.livemint.com/lm-img/img/2024/12/06/600x338/NEWS_1733464049847_1733464070835.jpg" className='w-full' alt="" />
                <p className='text-justify flex items-center text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt vero fuga corporis provident eaque quibusdam maiores, perspiciatis delectus totam iure, ipsum ratione maxime quam pariatur esse exercitationem ducimus? Asperiores, totam?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci tempore laudantium ex earum fugiat deleniti repellendus perspiciatis labore fuga, placeat voluptatem illum accusantium beatae assumenda sunt! Libero numquam iste distinctio.</p>
            </div>
            
            <p className='text-center text-slate-300 underline font-extrabold md:text-4xl text-xl mb-3'>{category} News</p>

            <div className='grid grid-cols-1 justify-self-center p-4 gap-4 md:grid-cols-3 lg:grid-cols-4  '>
                
                {
                    news.map((item, index) => (

                        <Card key={index} name={item.title} src={item.urlToImage} description={item.description} url={item.url} />
                    ))
                }
            </div>
        </div>

    )
}

export default Hero
