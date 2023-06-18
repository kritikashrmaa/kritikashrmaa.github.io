import React from 'react'
import { postsData } from '../components/Items'
import Blog from '../components/blog/Blog'
import { Category } from '../components/category/Category'
import '../components/blog/blog.css'

const Blogs = () => {
  return (
    <>

      <Category/>
      <h2>Recent Posts</h2>
      <section className='blog'>
      <div className='container grid3'>
      {postsData.map((post) => (
        <Blog key={post.id} post={post} />
      ))}
      </div>
      </section>
    </>
     
      
     
    
  )
}

export default Blogs
