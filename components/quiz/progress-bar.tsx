"use client"

interface ProgressBarProps {
  currentQuestion: number
  totalQuestions: number
}

export function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
      <div
        className="bg-[#F2C94C] h-2.5 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
