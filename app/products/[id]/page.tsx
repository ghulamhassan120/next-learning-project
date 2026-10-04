'use client'
import React, { use } from 'react'

const ProductDetail = ({params}:{params:Promise<{id:string}>}) => {
    // const {id}=await params
    const {id}= use(params)
  return (
    <div>ProductDetail {id}</div>
  )
}

export default ProductDetail