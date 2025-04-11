import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { majors } from "@/lib/data"
import { FadeInSection } from "@/components/fade-in-section"

export default function ExploreMajors() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h1 className="text-3xl font-bold text-[#002E5D] mb-6 text-center">Explore BYU Marriott Majors</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Discover the diverse business majors offered at BYU Marriott and find the perfect fit for your interests
              and career goals.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {majors.map((major, index) => (
              <FadeInSection key={major.id} delay={index * 100}>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="bg-[#002E5D] text-white">
                    <CardTitle>{major.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardDescription className="text-gray-700 min-h-[80px]">{major.shortDescription}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline">
                      <Link href={`/careers/${major.id}`}>Learn More</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/compare?major1=${major.id}`}>Compare This Major</Link>
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
