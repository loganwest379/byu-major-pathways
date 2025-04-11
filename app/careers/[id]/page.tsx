import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { majors } from "@/lib/data"
import { DollarSign, Building, Award, ChevronLeft } from "lucide-react"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return majors.map((major) => ({
    id: major.id,
  }))
}

export default function CareerDetail({ params }: { params: { id: string } }) {
  const major = majors.find((m) => m.id === params.id)

  if (!major) {
    notFound()
  }

  return (
    <main className="flex min-h-screen flex-col py-12 px-4">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/careers">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to All Careers
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-[#002E5D]">{major.name}</h1>
          <p className="text-lg text-gray-600 mt-2">{major.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Salary Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Average Starting Salary</h3>
                  <p className="text-2xl font-bold text-[#002E5D]">{major.averageStartingSalary}</p>
                </div>
                <div>
                  <h3 className="font-medium">Salary Range</h3>
                  <p>{major.salaryRange}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="mr-2 h-5 w-5" />
                Employment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Job Placement Rate</h3>
                  <p className="text-2xl font-bold text-[#002E5D]">{major.jobPlacementRate}</p>
                </div>
                <div>
                  <h3 className="font-medium">Time to First Job</h3>
                  <p>{major.timeToFirstJob}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#002E5D] mb-6">Career Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {major.careerPaths.map((path, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{path.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#002E5D] mb-6">Top Employers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {major.topEmployers.map((employer, index) => (
              <Card key={index} className="text-center p-6">
                <Building className="h-10 w-10 mx-auto mb-2 text-[#002E5D]" />
                <p className="font-medium">{employer}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#002E5D] mb-6">Key Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {major.keyCourses.map((course, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-[#002E5D]" />
                  <p>{course}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild className="bg-[#002E5D] hover:bg-[#00254a]">
            <Link href={`/compare?major1=${major.id}`}>Compare With Another Major</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
