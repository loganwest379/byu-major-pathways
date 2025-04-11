"use client"

import { useState } from "react"
import type { CareerPath } from "@/lib/career-paths"
import { CareerBranch } from "./career-branch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CareerPathViewerProps {
  careerPath: CareerPath
}

export function CareerPathViewer({ careerPath }: CareerPathViewerProps) {
  const [activeBranch, setActiveBranch] = useState(careerPath.branches[0]?.id || "")

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#002E5D] mb-2">{careerPath.majorName} Career Paths</h2>
        <p className="text-gray-600">{careerPath.description}</p>
      </div>

      <Tabs defaultValue={activeBranch} onValueChange={setActiveBranch} className="w-full">
        <TabsList className="w-full mb-6 bg-gray-100">
          {careerPath.branches.map((branch) => (
            <TabsTrigger
              key={branch.id}
              value={branch.id}
              className="flex-1 data-[state=active]:bg-[#002E5D] data-[state=active]:text-white"
            >
              {branch.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {careerPath.branches.map((branch, index) => (
          <TabsContent key={branch.id} value={branch.id} className="mt-0">
            <CareerBranch branch={branch} index={index} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
