'use client'
import { useSearchParams } from 'next/navigation'

const Product = () => {
  // const searchparam=await searchParams
    const searchParams=useSearchParams()
    const pages=searchParams.get("pages")
    const category=searchParams.get("category")

    console.log("pages",pages);
    console.log("category",category);
    
  return (
    <div></div>
  )
}

export default Product