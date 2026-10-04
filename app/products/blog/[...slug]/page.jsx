import React from 'react'

const Blog = async(props) => {
    const {slug} =await props.params
    console.log(slug);
    
  return (
    <div>Blog</div>
  )
}

export default Blog