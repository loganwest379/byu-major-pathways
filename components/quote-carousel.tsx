"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

type QuoteType = {
  text: string
  author: string
}

const quotes: QuoteType[] = [
  {
    text: "Enter to learn, go forth to serve.",
    author: "BYU Motto",
  },
  {
    text: "The world is our campus.",
    author: "BYU Motto",
  },
  {
    text: "The glory of God is intelligence.",
    author: "BYU Motto",
  },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Simon Sinek",
  },
  {
    text: "Develop leaders of faith, intellect, and character.",
    author: "BYU Marriott Mission",
  },
]

export function QuoteCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const totalQuotes = quotes.length

  // Handle navigation
  const navigate = (direction: "prev" | "next") => {
    if (isTransitioning) return

    setIsTransitioning(true)

    if (direction === "prev") {
      setActiveIndex((prev) => (prev - 1 + totalQuotes) % totalQuotes)
    } else {
      setActiveIndex((prev) => (prev + 1) % totalQuotes)
    }

    // Reset auto-play timer
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current)
    }
    startAutoPlay()
  }

  // Auto-play functionality
  const startAutoPlay = () => {
    autoPlayRef.current = setTimeout(() => {
      navigate("next")
    }, 4500) // Change every 4.5 seconds
  }

  // Set up auto-play on component mount
  useEffect(() => {
    startAutoPlay()
    return () => {
      if (autoPlayRef.current) {
        clearTimeout(autoPlayRef.current)
      }
    }
  }, [])

  // Reset transition state after animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500) // Match this to the CSS transition duration
    return () => clearTimeout(timer)
  }, [activeIndex])

  // Get the indices of the visible quotes
  const getVisibleIndices = () => {
    const prevIndex = (activeIndex - 1 + totalQuotes) % totalQuotes
    const nextIndex = (activeIndex + 1) % totalQuotes
    return [prevIndex, activeIndex, nextIndex]
  }

  const visibleIndices = getVisibleIndices()

  return (
    <div className="w-full py-16 bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#002E5D] mb-8 text-center">Words of Inspiration</h2>

        <div className="relative">
          {/* Left navigation button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-[#002E5D] text-[#002E5D] hover:bg-[#F2C94C] hover:text-[#002E5D] shadow-sm"
            onClick={() => navigate("prev")}
            disabled={isTransitioning}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous quote</span>
          </Button>

          {/* Quote cards container */}
          <div className="relative overflow-hidden mx-12">
            <div className="flex justify-center items-stretch min-h-[220px]">
              {/* Mobile view: Only show active quote with fade animation */}
              <div className="w-full block md:hidden">
                <div className={cn("transition-opacity duration-500", isTransitioning ? "opacity-0" : "opacity-100")}>
                  <Card className="border-[#002E5D] border-2 shadow-lg bg-white h-full">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <Quote className="h-8 w-8 mb-4 text-[#F2C94C]" />
                      <p className="text-center text-lg mb-4 font-medium">{quotes[activeIndex].text}</p>
                      <p className="text-center text-sm text-gray-500">{quotes[activeIndex].author}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Desktop view: Show 3 quotes with slide animation */}
              <div className="hidden md:flex w-full justify-center items-stretch">
                {visibleIndices.map((index, i) => (
                  <div
                    key={`quote-${index}`}
                    className={cn(
                      "px-4 transition-all duration-500 ease-in-out flex-shrink-0",
                      i === 0 ? "w-1/4" : i === 1 ? "w-1/2" : "w-1/4",
                    )}
                  >
                    <Card
                      className={cn(
                        "bg-white transition-all duration-500 h-full",
                        i === 1
                          ? "border-[#002E5D] border-2 shadow-lg transform scale-100"
                          : "shadow-md transform scale-95 opacity-70",
                      )}
                    >
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <Quote className={cn("h-8 w-8 mb-4", i === 1 ? "text-[#F2C94C]" : "text-gray-300")} />
                        <p className="text-center text-lg mb-4 font-medium">{quotes[index].text}</p>
                        <p className="text-center text-sm text-gray-500">{quotes[index].author}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right navigation button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-[#002E5D] text-[#002E5D] hover:bg-[#F2C94C] hover:text-[#002E5D] shadow-sm"
            onClick={() => navigate("next")}
            disabled={isTransitioning}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next quote</span>
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6">
          {quotes.map((_, index) => (
            <button
              key={`dot-${index}`}
              className={cn(
                "w-2 h-2 mx-1 rounded-full transition-all",
                index === activeIndex ? "bg-[#002E5D] w-4" : "bg-gray-300 hover:bg-[#F2C94C]",
              )}
              onClick={() => {
                setActiveIndex(index)
                if (autoPlayRef.current) {
                  clearTimeout(autoPlayRef.current)
                }
                startAutoPlay()
              }}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
