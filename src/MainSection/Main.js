import React, { useState, useEffect } from 'react';
import Box from './Box';
import './main.css';
import Loading from '../Loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
function Main({category, country}) {

  
  const [news, setNews] = useState({ "articles": [] });
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    fetchMoreData(true);
  }, [page]);
  useEffect(()=>{
    fetchMoreData(false);
  },[category, country])
  useEffect(()=>{
    document.title = category.charAt(0).toUpperCase() + category.slice(1) + "-TimeTeller";
    fetchMoreData(false);
  },[])

  const fetchMoreData = async (append) => {
    try {
      const scope={category,country, page};
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+"news",{
        method:"POST",
        body:JSON.stringify(scope),
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data = await response.json();
      if(data.articles.length === 0) {
        setHasMore(false);
      }
      if(append)
      setNews((prevNews) => ({
        ...prevNews,
        articles: [...prevNews.articles, ...data.articles],
        totalResults: data.totalResults
      }));
      else {
        setNews(data)
      }
    } catch (error) {
      console.log("Error fetching more data", error);
    }
  };




  console.log(news.articles);

  return (<div style={{marginTop:"4rem"}}>
    <div style={{ margin: "1rem" }}>
      <div style={{ fontSize: "3rem", fontWeight: "900", fontStyle: "italic", textDecoration: "underline" }}>-:TimeTeller:-</div>
      <div style={{ fontSize: "1rem" }}>Timely Updates . Trusted News</div>
    </div>
    <InfiniteScroll
      dataLength={news.articles.length}
      next={()=>{
        setpage(p=>p+1)
        console.log("newpage!!!")
      }}
      hasMore={hasMore}
      loader={<Loading />}
    >
      <div className='main'>

        {news.articles && news.articles.map((newsItem) => (
          <Box key={newsItem.url} {...newsItem} />
        ))}
       
      </div>
    </InfiniteScroll>

  </div>


  );
}

export default Main;
