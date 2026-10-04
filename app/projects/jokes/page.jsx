'use client'

import { useEffect, useState } from "react"

const RandomJokes = () => {
    const [randomJokes, setRandomJokes] = useState({})
    const [showJokes, setShowJokes] = useState(true)
    const URL='http://www.official-joke-api.appspot.com/random_joke'
    const fetchRandomJokes=async()=>{
        const Response=await fetch(URL)
        const JsonResponse=await Response.json()
        console.log(JsonResponse);
        setRandomJokes(JsonResponse)
    }
    useEffect(()=>{
        fetchRandomJokes();
    },[])
  return (
  <div className="min-h-screen flex items-center justify-center bg-[#080b14] px-4 relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
  <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

  <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/[0.06] p-10 shadow-2xl shadow-black/40 backdrop-blur-2xl">

    {/* Badge */}
    <div className="mb-6 flex justify-center">
      <span className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-300">
        ✨ Random Joke
      </span>
    </div>

    {/* Setup */}
    <p className="text-center text-2xl font-semibold leading-relaxed text-white md:text-3xl">
      {randomJokes.setup}
    </p>

    {/* Punchline */}
    <div className="mt-8 min-h-[80px] flex items-center justify-center">

      {showJokes ? (
        <button
          onClick={() => setShowJokes(false)}
          className="group rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-violet-600/40"
        >
          <span className="mr-2">👀</span>
          Reveal Punchline
        </button>
      ) : (
        <div className="text-center">
          <h2 className="mb-5 text-xl font-medium leading-relaxed text-purple-300 md:text-2xl">
            😂 {randomJokes.punchline}
          </h2>

          <button
            onClick={() => setShowJokes(true)}
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Hide Punchline
          </button>
        </div>
      )}

    </div>

    {/* Divider */}
    <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Next Button */}
    <button
      onClick={() => fetchRandomJokes()}
      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-600/40 active:scale-[0.98]"
    >
      Next Joke
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

  </div>
</div>
  )
}

export default RandomJokes