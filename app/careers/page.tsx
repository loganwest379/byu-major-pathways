import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { majors } from "@/lib/data"
import { Briefcase, DollarSign, Building, Clock } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function CareerInsights() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h1 className="text-3xl font-bold text-[#002E5D] mb-6 text-center">Career Insights</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Explore career opportunities, salary information, and industry insights for each BYU Marriott major.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majors.map((major, index) => (
              <FadeInSection key={major.id} delay={100 + index * 50}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="bg-[#002E5D] text-white">
                    <CardTitle>{major.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Briefcase className="h-5 w-5 text-[#002E5D] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Common Career Paths</h3>
                          <p className="text-sm text-gray-600">{major.commonCareerPaths.slice(0, 2).join(", ")}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-[#002E5D] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Salary Range</h3>
                          <p className="text-sm text-gray-600">{major.salaryRange}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Building className="h-5 w-5 text-[#002E5D] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Top Employers</h3>
                          <p className="text-sm text-gray-600">{major.topEmployers.slice(0, 2).join(", ")}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-[#002E5D] mt-0.5" />
                        <div>
                          <h3 className="font-medium">Time to First Job</h3>
                          <p className="text-sm text-gray-600">{major.timeToFirstJob}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/careers/${major.id}`}>View Detailed Insights</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
