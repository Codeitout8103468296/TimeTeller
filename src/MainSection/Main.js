import React, { useState, useEffect } from 'react';
import Box from './Box';
import './main.css';
import Loading from '../Loading/Loading';
import InfiniteScroll from 'react-infinite-scroll-component';
function Main(props) {

  const [news, setNews] = useState({ "articles": [] });
  const [page, setpage] = useState(1);
  useEffect(() => {
    document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1) + "-TimeTeller";
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };
    fetchData();
  }, [props]);


  const fetchMoreData = async () => {
    try {
      setpage(page + 1);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${page + 1}`;
      const response = await fetch(url);
      const data = await response.json();
      setNews((prevNews) => ({
        ...prevNews,
        articles: [...prevNews.articles, ...data.articles],
        totalResults: data.totalResults
      }));
    } catch (error) {
      console.log("Error fetching more data", error);
    }
  };




  console.log(news.articles);

  return (<div style={{marginTop:"4rem"}}>
    <div style={{ margin: "1rem" }}>
      <div style={{ fontSize: "3rem", fontWeight: "900", fontStyle: "italic", textDecoration: "underline" }}>-:TimeTeller:-</div>
      <div style={{ fontSize: "1rem" }}>Timely Updates . Trusted News{news.totalResults}</div>
    </div>
    <InfiniteScroll
      dataLength={news.articles.length}
      next={fetchMoreData}
      hasMore={news.articles.length !== news.totalResults}
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
