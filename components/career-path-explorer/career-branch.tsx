"use client"

import type { CareerBranch as CareerBranchType } from "@/lib/career-paths"
import { CareerNode } from "./career-node"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeInSection } from "@/components/fade-in-section"

interface CareerBranchProps {
  branch: CareerBranchType
  index: number
}

export function CareerBranch({ branch, index }: CareerBranchProps) {
  return (
    <FadeInSection delay={index * 100}>
      <Card className="mb-8">
        <CardHeader className="bg-[#002E5D] text-white">
          <CardTitle className="text-lg">{branch.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="mb-6 text-gray-600">{branch.description}</p>
          <div className="space-y-6">
            {branch.steps.map((step, stepIndex) => (
              <CareerNode key={step.id} step={step} isLast={stepIndex === branch.steps.length - 1} />
            ))}
          </div>
        </CardContent>
      </Card>
    </FadeInSection>
  )
}
