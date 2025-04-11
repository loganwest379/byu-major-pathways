"use client"

import Link from "next/link"
import { useState } from "react"

export function CougarIcon() {
  const [isHovered, setIsHovered] = useState(false)
  const [quote, setQuote] = useState("")

  const quotes = [
    "Enter to learn, go forth to serve.",
    "The world is our campus.",
    "Go Cougars!",
    "Aim higher in all you do.",
    "Excellence in leadership begins here.",
  ]

  const handleClick = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)

    // Hide quote after 5 seconds
    setTimeout(() => {
      setQuote("")
    }, 5000)
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {quote && (
        <div className="absolute bottom-full right-0 mb-4 p-4 bg-white rounded-lg shadow-md text-lg w-64 text-center animate-fade-in">
          {quote}
        </div>
      )}
      <Link
        href="https://marriott.byu.edu"
        target="_blank"
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={(e) => {
          e.preventDefault()
          handleClick()
        }}
      >
        <div
          className={`w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-500 ${isHovered ? "scale-110" : ""} animate-pulse-slow`}
        >
          {/* Simple Cougar Icon */}
          <svg viewBox="0 0 512 512" className="w-14 h-14 text-[#002E5D] opacity-70" fill="currentColor">
            <path
              d="M256,32c-74,0-134.2,58.7-134.2,132.7c0,25.4,12.3,39.8,20.5,48c-12.7,10.7-20.5,26.7-20.5,43.3c0,32,26,58,58,58
              c7.4,0,14.5-1.5,21-4v68c0,13.3,10.7,24,24,24h62.4c13.3,0,24-10.7,24-24v-68c6.5,2.5,13.6,4,21,4c32,0,58-26,58-58
              c0-16.6-7.8-32.6-20.5-43.3c8.2-8.2,20.5-22.6,20.5-48C390.2,90.7,330,32,256,32z M256,80c23.7,0,42.7,19,42.7,42.7
              c0,23.7-19,42.7-42.7,42.7s-42.7-19-42.7-42.7C213.3,99,232.3,80,256,80z M202.7,213.3c0-11.8,9.6-21.3,21.3-21.3h64
              c11.8,0,21.3,9.6,21.3,21.3c0,11.8-9.6,21.3-21.3,21.3h-64C212.2,234.7,202.7,225.1,202.7,213.3z M309.3,320
              c-11.8,0-21.3-9.6-21.3-21.3c0-11.8,9.6-21.3,21.3-21.3c11.8,0,21.3,9.6,21.3,21.3C330.7,310.4,321.1,320,309.3,320z M202.7,298.7
              c0-11.8,9.6-21.3,21.3-21.3c11.8,0,21.3,9.6,21.3,21.3c0,11.8-9.6,21.3-21.3,21.3C212.2,320,202.7,310.4,202.7,298.7z"
            />
          </svg>
        </div>
      </Link>
    </div>
  )
}
