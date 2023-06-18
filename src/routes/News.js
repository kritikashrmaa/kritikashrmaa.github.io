import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsComponent from '../components/News/NewsComponent';

const News = () => {
  const [news, setNews] = useState([]);
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.
let currentDate = `${year}-${month}-${day}`;

  useEffect(() => {
    // Fetch news data from an API
    axios.get('https://newsapi.org/v2/top-headlines?country=in&from='+currentDate+'&sortBy=popularity&apiKey=df5f98734a3c42e8a93ad962911315ab')
      .then(response => {
        setNews(response.data.articles);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="news-container">
      <h2 className="news-heading">News Articles</h2>
      <ul className="news-list">
        {news.map((article, index) => (
           <NewsComponent index={index} article={article}/>
        ))}
      </ul>
    </div>
  );
};

export default News;

