import React from 'react';
import './blog.css'
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"

const Blog = ({ post }) => {
    const {id,title,content,cover,author,date,tags}=post;
  return (
    <div className='box boxItems' key={id}>
        <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                {tags && (
        <ul className="post-tags">
          {tags.map((tag, index) => (
            <li key={index} className="post-tag">{tag}</li>
          ))}
        </ul>
      )}
                  
                </div>
                <Link to={`/details/${id}`} className='link'>
                  <h3>{title}</h3>
                  <span className="post-author">By {author}</span>
                </Link>
                <p>{content}...</p>
                
                <div className='date'>
                  <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{date}</label>
                  <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
  );
};

export default Blog;