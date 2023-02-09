
import axios from 'axios';
import { useState,useEffect } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBhaskar from './components/NavBhaskar';
import NewsContent from './components/NewsContent/NewsContent';
import apiKey from './data/config';






function App() {
//useSta,rafce,useef,log
  const [category,setCategory] = useState("general")
  const [newsArray,setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const[loadmore,setLoadmore] = useState(20)



  const newsApi = async () => {

    try {
      const proxyURL="https://cors-anywhere.herokuapp.com/"
      
     const news = await axios.get(`https://${proxyURL}newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`)
      
     console.log("news",news)
     setNewsArray(news.data.articles)
     setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error)
    }
  }

  console.log("newsarray",newsArray);


  useEffect(() => {
  
   newsApi(); 
   // eslint-disable-next-line

   
  }, [newsResults,category,loadmore] )
  

  return (
  
    <div className="App">
   <NavBhaskar setCategory={setCategory}/>


   <NewsContent loadmore={loadmore} setLoadmore={setLoadmore} newsArray={newsArray} newsResults={newsResults}/>
   <Footer/>
    </div>

  );
}

export default App;
