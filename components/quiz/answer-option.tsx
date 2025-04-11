"use client"

import { cn } from "@/lib/utils"

interface AnswerOptionProps {
  text: string
  index: number
  selected: boolean
  onSelect: () => void
}

export function AnswerOption({ text, index, selected, onSelect }: AnswerOptionProps) {
  const options = ["A", "B", "C", "D"]

  return (
    <div
      className={cn(
        "border rounded-lg p-4 mb-3 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md",
        selected
          ? "border-[#005DAA] bg-[#005DAA] text-white"
          : "border-gray-200 hover:border-[#005DAA] hover:bg-[#E6F1FA]",
      )}
      onClick={onSelect}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-medium",
            selected ? "bg-white text-[#005DAA]" : "bg-[#F8F9FA] text-gray-700",
          )}
        >
          {options[index]}
        </div>
        <span className="text-base">{text}</span>
      </div>
    </div>
  )
}
