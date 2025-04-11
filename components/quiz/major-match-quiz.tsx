"use client"

import { useState } from "react"
import { questions, majorInfo, type Major } from "@/lib/quiz-data"
import { Card, CardContent } from "@/components/ui/card"
import { ProgressBar } from "./progress-bar"
import { QuestionCard } from "./question-card"
import { ResultsCard } from "./results-card"

export function MajorMatchQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [majorCounts, setMajorCounts] = useState<Record<Major, number>>({
    finance: 0,
    accounting: 0,
    marketing: 0,
    strategy: 0,
    "information-systems": 0,
    entrepreneurship: 0,
    "global-supply-chain": 0,
    "experience-design": 0,
  })

  const handleSelectAnswer = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers]
    newSelectedAnswers[currentQuestionIndex] = answerIndex
    setSelectedAnswers(newSelectedAnswers)
  }

  const handleNextQuestion = () => {
    const selectedAnswerIndex = selectedAnswers[currentQuestionIndex]

    if (selectedAnswerIndex !== null) {
      // Update major counts based on selected answer
      const selectedMajors = questions[currentQuestionIndex].answers[selectedAnswerIndex].majors
      const newMajorCounts = { ...majorCounts }

      selectedMajors.forEach((major) => {
        newMajorCounts[major] += 1
      })

      setMajorCounts(newMajorCounts)

      // Move to next question or complete quiz
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      } else {
        setQuizCompleted(true)
      }
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers(Array(questions.length).fill(null))
    setQuizCompleted(false)
    setMajorCounts({
      finance: 0,
      accounting: 0,
      marketing: 0,
      strategy: 0,
      "information-systems": 0,
      entrepreneurship: 0,
      "global-supply-chain": 0,
      "experience-design": 0,
    })
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="shadow-md bg-[#E6F1FA] border-0">
        <CardContent className="p-6 md:p-8">
          {!quizCompleted ? (
            <>
              <div className="mb-6">
                <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={questions.length} />
                <div className="text-sm text-gray-500 text-right">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
              </div>

              <QuestionCard
                question={questions[currentQuestionIndex]}
                selectedAnswerIndex={selectedAnswers[currentQuestionIndex]}
                onSelectAnswer={handleSelectAnswer}
                onNextQuestion={handleNextQuestion}
                isLastQuestion={currentQuestionIndex === questions.length - 1}
              />
            </>
          ) : (
            <ResultsCard majorCounts={majorCounts} majorInfo={majorInfo} onReset={resetQuiz} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
