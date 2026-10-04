import { NextResponse } from "next/server"

export const GET=async()=>{
    const product=[
        {
            id:1,
            name:"T-Shirt",
            price:5000
        },
        {
            id:2,
            name:"Shoes",
            price:5000
        },
    ];
    return NextResponse.json({
        message:"get product successfully ",
        product,
    })
}

export async function POST(request) {
  const body = await request.json();

  console.log(body);

  return NextResponse.json({
    message: "Product created",
    product: body,
  }, { status: 201 });
}