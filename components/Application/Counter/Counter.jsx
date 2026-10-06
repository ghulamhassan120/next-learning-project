'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
   <div className="flex flex-col items-center gap-5 rounded-2xl bg-gray-900 p-8 text-white shadow-xl">
  <h2 className="text-2xl font-bold">
    Count: <span className="text-blue-400">{count}</span>
  </h2>

  <div className="flex gap-4">
    <button
      onClick={() => setCount(count + 1)}
      className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-white transition hover:bg-green-600 active:scale-95"
    >
      Increase Count
    </button>

    <button
      onClick={() => setCount(count - 1)}
      className="rounded-lg bg-red-500 px-5 py-2 font-semibold text-white transition hover:bg-red-600 active:scale-95"
    >
      Decrease Count
    </button>
  </div>
</div>
  )
}

export default Counter