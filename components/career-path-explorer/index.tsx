"use client"

import { useState, useEffect } from "react"
import { careerPaths } from "@/lib/career-paths"
import { CareerPathViewer } from "./career-path-viewer"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"

export function CareerPathExplorer() {
  const [selectedMajor, setSelectedMajor] = useState(careerPaths[0]?.majorId || "")
  const [selectedPath, setSelectedPath] = useState(careerPaths[0])

  useEffect(() => {
    const path = careerPaths.find((path) => path.majorId === selectedMajor)
    if (path) {
      setSelectedPath(path)
    }
  }, [selectedMajor])

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#002E5D] mb-6 text-center">Career Path Explorer</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Visualize your potential career journey based on your chosen major at BYU Marriott.
        </p>

        <div className="mb-8">
          <label className="block text-sm font-medium mb-2">Select a Major</label>
          <Select value={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger className="w-full md:w-80">
              <SelectValue placeholder="Select a major" />
            </SelectTrigger>
            <SelectContent>
              {careerPaths.map((path) => (
                <SelectItem key={path.majorId} value={path.majorId}>
                  {path.majorName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selectedPath ? (
          <CareerPathViewer careerPath={selectedPath} />
        ) : (
          <Card className="p-8 text-center">
            <p>Please select a major to view career paths.</p>
          </Card>
        )}
      </div>
    </section>
  )
}
