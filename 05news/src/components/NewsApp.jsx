import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Card from './Card';

const NewsApp = () => {
    const [searchData, setSearchData] = useState("lana");
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "5cc49004347c4be9b7089df23c50c01d";
    
    const getData = async() => {
        const response = await fetch (`https://newsapi.org/v2/everything?q=${searchData}&apiKey=${API_KEY}&language=en`)

        const jsonData =await response.json();
        // console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(() => {
      getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value)
    }

    const userInput = (e) => {
      setSearchData(e.target.value)
    }

  return (
    <div>
    <Navbar getData={getData} handleInput={handleInput} searchData={searchData}/>
    <Button userInput={userInput} />
    {
       newsData ?  (<div className=' w-full p-6'>
        <Card newsData={newsData} />
      </div>) : (<h1 className='mt-20 text-center text-8xl font-extrabold hover:text-red-600'>No News Available</h1>)
    }
    
  </div>
);
}

export default NewsApp