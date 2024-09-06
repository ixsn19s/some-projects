### 1. suru ma header banayo
### 2. tyo paxi h2 text
### 3. tyo paxi category buttons
### 4. newsapi bata api ligyo

## 5. tyo api lai fetch hanyo

```js

    const [searchData, setSearchData] = useState("nepal");
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "5cc49004347c4be9b7089df23c50c01d";
    
    const getData = async() => {
        const response = await fetch (`https://newsapi.org/v2/everything?q=${searchData}&apiKey=${API_KEY}`)

        const jsonData =await response.json();
        // console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }
```



## 6. api response lai handle hanyo input field ma

```js
 const handleInput = (e) => {
        console.log(e.target.value);
        setSearchData(e.target.value)
    }
```


## 7. 5 rw 6 ko props haru pass rw get garyo

## 8. tyo paxi card component ma pass garem newsData, data haru array ko form ma aaucha so we need to iterate using map function



## 8. creating a card component

```js
import React from 'react';

const Card = ({ newsData }) => {
  if (!newsData || !Array.isArray(newsData)) {
    return <p>No news available.</p>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {newsData.map((currItem, index) => {
        return (
          <div key={index} className='card bg-white shadow-lg rounded-lg overflow-hidden w-[360px] h-[400px]'>
            <img src={currItem.urlToImage} alt={currItem.title || "News Image"} className='w-full h-44 object-cover' />
            <div className='cardContent p-2'>
              <h2 className=' font-medium leading-tight hover:text-blue-700 hover:cursor-pointer hover:font-semibold'>
                {currItem.title}
              </h2>
              <p className='text-gray-700 mt-2 mb-3 tracking-tighter leading-4'>
                {currItem.description}
              </p>
              <a href={currItem.url} target="_blank">
                <button className='bg-blue-500 text-white px-[10px] py-[6px] rounded'>
                  Read More
                </button>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;


```


## 9. 