"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { majors, type Major } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export default function CompareMajors() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const initialMajor1 = searchParams.get("major1") || ""
  const initialMajor2 = searchParams.get("major2") || ""

  const [selectedMajor1, setSelectedMajor1] = useState<string>(initialMajor1)
  const [selectedMajor2, setSelectedMajor2] = useState<string>(initialMajor2)

  const major1Data = majors.find((major) => major.id === selectedMajor1)
  const major2Data = majors.find((major) => major.id === selectedMajor2)

  useEffect(() => {
    const params = new URLSearchParams()
    if (selectedMajor1) params.set("major1", selectedMajor1)
    if (selectedMajor2) params.set("major2", selectedMajor2)

    router.push(`/compare?${params.toString()}`)
  }, [selectedMajor1, selectedMajor2, router])

  const handleMajor1Change = (value: string) => {
    setSelectedMajor1(value)
  }

  const handleMajor2Change = (value: string) => {
    setSelectedMajor2(value)
  }

  const renderComparisonSection = (title: string, field: keyof Major, formatter?: (value: any) => React.ReactNode) => {
    return (
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 text-[#002E5D]">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {major1Data && formatter
              ? formatter(major1Data[field])
              : major1Data
                ? Array.isArray(major1Data[field])
                  ? (major1Data[field] as string[]).map((item, i) => (
                      <div key={i} className="mb-1">
                        {item}
                      </div>
                    ))
                  : major1Data[field]
                : "Select a major"}
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            {major2Data && formatter
              ? formatter(major2Data[field])
              : major2Data
                ? Array.isArray(major2Data[field])
                  ? (major2Data[field] as string[]).map((item, i) => (
                      <div key={i} className="mb-1">
                        {item}
                      </div>
                    ))
                  : major2Data[field]
                : "Select a major"}
          </div>
        </div>
      </div>
    )
  }

  const renderDifficultyLevel = (level: string) => {
    const colorMap = {
      Easy: "bg-green-100 text-green-800",
      Medium: "bg-yellow-100 text-yellow-800",
      Hard: "bg-red-100 text-red-800",
    }

    const color = colorMap[level as keyof typeof colorMap] || "bg-gray-100 text-gray-800"

    return <Badge className={color}>{level}</Badge>
  }

  const renderSkills = (skills: string[]) => {
    return (
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col py-12 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold text-[#002E5D] mb-6 text-center">Compare Majors</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Select two majors to compare side by side and find the best fit for your interests and career goals.
        </p>

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div>
            <label className="block text-sm font-medium mb-2">First Major</label>
            <Select value={selectedMajor1} onValueChange={handleMajor1Change}>
              <SelectTrigger>
                <SelectValue placeholder="Select a major" />
              </SelectTrigger>
              <SelectContent>
                {majors.map((major) => (
                  <SelectItem key={major.id} value={major.id}>
                    {major.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Second Major</label>
            <Select value={selectedMajor2} onValueChange={handleMajor2Change}>
              <SelectTrigger>
                <SelectValue placeholder="Select a major" />
              </SelectTrigger>
              <SelectContent>
                {majors.map((major) => (
                  <SelectItem key={major.id} value={major.id}>
                    {major.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {selectedMajor1 && selectedMajor2 ? (
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-8 mb-8">
              <h2 className="text-2xl font-bold text-[#002E5D]">{major1Data?.name}</h2>
              <h2 className="text-2xl font-bold text-[#002E5D]">{major2Data?.name}</h2>
            </div>

            {renderComparisonSection("Major Description", "description")}
            {renderComparisonSection("Key Courses", "keyCourses")}
            {renderComparisonSection("Average Starting Salary", "averageStartingSalary")}
            {renderComparisonSection("Job Placement Rate", "jobPlacementRate")}
            {renderComparisonSection("Top Employers", "topEmployers")}
            {renderComparisonSection("Common Career Paths", "commonCareerPaths")}
            {renderComparisonSection("Difficulty Level", "difficultyLevel", renderDifficultyLevel)}
            {renderComparisonSection("Required Skills", "requiredSkills", renderSkills)}
          </div>
        ) : (
          <Card className="text-center p-8">
            <CardHeader>
              <CardTitle>Select Two Majors to Compare</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Choose a major from each dropdown menu above to see a detailed comparison.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
