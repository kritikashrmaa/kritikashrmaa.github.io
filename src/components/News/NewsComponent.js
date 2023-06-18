import React from 'react'
import './news.css'

const NewsComponent = ({index,article}) => {
  return (
    <li key={index} className="news-item">
            <h3 className="news-title" >{article.title}</h3>
            <img src={article.urlToImage} style={{ maxWidth: '300px', height: 'auto' }} alt="News Article" />
            <p className="news-description">{article.description}</p>
            <p className="news-info">Author: {article.author}</p>
            <p className="news-info">Published Date: {article.publishedAt}</p>
          </li>
  )
}

export default NewsComponent
