import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import News from './Component/News/News';
import Charts from './Component/Charts/Charts';

function App() {
  const key='ae8e72304ae043d6984755c80878186f';

  const [news, setNews] = useState([])
  useEffect(()=>{
    const url= `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${key}`
    const fetching= (async()=>{
    const res= await axios(url)
    setNews(res.data.articles)
    })();
  },[])

  return (
    <>
      <Charts></Charts>
      {news.map(article=><News posts={article}></News>)}
    </>
  )
}

export default App
