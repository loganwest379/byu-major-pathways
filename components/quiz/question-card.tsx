"use client"

import type { Question } from "@/lib/quiz-data"
import { AnswerOption } from "./answer-option"
import { Button } from "@/components/ui/button"

interface QuestionCardProps {
  question: Question
  selectedAnswerIndex: number | null
  onSelectAnswer: (index: number) => void
  onNextQuestion: () => void
  isLastQuestion: boolean
}

export function QuestionCard({
  question,
  selectedAnswerIndex,
  onSelectAnswer,
  onNextQuestion,
  isLastQuestion,
}: QuestionCardProps) {
  return (
    <div className="animate-fade-in">
      <h3 className="text-xl font-semibold mb-6 text-[#005DAA]">
        {question.id}. {question.text}
      </h3>

      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <AnswerOption
            key={index}
            text={answer.text}
            index={index}
            selected={selectedAnswerIndex === index}
            onSelect={() => onSelectAnswer(index)}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-end">
        <Button
          onClick={onNextQuestion}
          disabled={selectedAnswerIndex === null}
          className="bg-[#005DAA] hover:bg-[#004A87] text-white px-6"
        >
          {isLastQuestion ? "See Results" : "Next Question"}
        </Button>
      </div>
    </div>
  )
}
