import { Container } from '@mui/material'
import React from 'react'
import './NewsContent.css'
import NewsCard from '../NewsCard/NewsCard'


const NewsContent = ({newsArray,newsResults,loadmore,setLoadmore}) => {
    //console.log("newsrs",newsResults);
  return (
    <Container maxWidth="md">
      <div className="content">
          <div className="downloadMessage">
               <span className="downloadText">
               New Bhaskar NEWS All the news you need and more  
               </span>
               <img alt="app store" height="80%" src='..\assets\istore.png'/>
               <img alt="play store" height="80%" src='..\assets\playstore.png'/>
          </div>

          {
            newsArray.map((newsItem)=>(
                 
                <NewsCard newsItem={newsItem} key={newsItem.title}/>

            ))}

            { loadmore <= newsResults && (
                   <>
                   <hr/>
            <button className='loadMore' onClick={()=>setLoadmore(loadmore+20)}> Load More</button>
                   </>
            )}

          

         
        
         
      </div>
    </Container>
  )
}

export default NewsContent