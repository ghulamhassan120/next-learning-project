import React from 'react'

const ServerComponents = async() => {
    const response =await fetch('https://jsonplaceholder.typicode.com/posts')
    const jsonResponse=await response.json()
    console.log(jsonResponse);
  return (
    <div>ServerComponents</div>
  )
}

export default ServerComponents