import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsComponent from '../components/News/NewsComponent';
import { articles } from '../components/Items';

const News = () => {
  const [news, setNews] = useState(articles);
   

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

