"use client"

import { useState, useEffect } from "react"
import type { Major, MajorInfo } from "@/lib/quiz-data"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award } from "lucide-react"

interface ResultsCardProps {
  majorCounts: Record<Major, number>
  majorInfo: MajorInfo[]
  onReset: () => void
}

export function ResultsCard({ majorCounts, majorInfo, onReset }: ResultsCardProps) {
  const [topMajors, setTopMajors] = useState<MajorInfo[]>([])
  const [showResults, setShowResults] = useState(false)

  useEffect(() => {
    // Sort majors by count and get top 3
    const sortedMajors = Object.entries(majorCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([majorId]) => majorInfo.find((info) => info.id === majorId))
      .filter((major): major is MajorInfo => major !== undefined)

    // Delay showing results for animation
    setTimeout(() => {
      setTopMajors(sortedMajors)
      setShowResults(true)
    }, 500)
  }, [majorCounts, majorInfo])

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-[#E6F1FA] rounded-full mb-4 shadow-md">
          <Award className="h-12 w-12 text-[#005DAA]" />
        </div>
        <h2 className="text-2xl font-bold text-[#005DAA] mb-2">Your Top Matches</h2>
        <p className="text-gray-600">
          Based on your answers, here are the BYU Marriott majors that best match your interests and strengths.
        </p>
      </div>

      <div className="space-y-6">
        {showResults &&
          topMajors.map((major, index) => (
            <Card
              key={major.id}
              className={`border-l-4 transition-all duration-500 opacity-0 animate-slide-up shadow-md hover:shadow-lg`}
              style={{
                borderLeftColor: index === 0 ? "#F2C94C" : "#005DAA",
                animationDelay: `${index * 300}ms`,
                animationFillMode: "forwards",
                backgroundColor: "#F8F9FA",
              }}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span
                    className={`${index === 0 ? "bg-[#F2C94C]" : "bg-[#005DAA]"} text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm`}
                  >
                    {index + 1}
                  </span>
                  {major.name}
                </CardTitle>
                <CardDescription>{major.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full hover:bg-[#E6F1FA] hover:text-[#005DAA] hover:border-[#005DAA]"
                >
                  <Link href={major.path}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      <div className="mt-10 text-center">
        <Button
          onClick={onReset}
          variant="outline"
          className="px-6 hover:bg-[#E6F1FA] hover:text-[#005DAA] hover:border-[#005DAA]"
        >
          Retake Quiz
        </Button>
      </div>
    </div>
  )
}
