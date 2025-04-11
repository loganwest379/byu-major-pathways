import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { PulsingIcons } from "@/components/pulsing-icons"
import { QuoteCarousel } from "@/components/quote-carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-24 text-center bg-white overflow-hidden">
        <PulsingIcons />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-[#002E5D] sm:text-5xl md:text-6xl hero-title">
            Find Your Perfect BYU Marriott Major
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl">Explore, compare, and gain confidence in your future.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-[#002E5D] hover:bg-[#001E3D] text-white px-8 py-6 text-lg glow-button shadow-md"
            >
              <Link href="/explore">Explore Majors</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 text-lg border-[#002E5D] text-[#002E5D] hover:bg-[#E6F1FA] shadow-md"
            >
              <Link href="/major-match-quiz">Take Major Match Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl font-bold text-[#002E5D] mb-8 text-center">Why Choose BYU Marriott?</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Top-Ranked Programs</h3>
                <p className="text-gray-600">
                  BYU Marriott School of Business offers nationally recognized programs that prepare students for
                  successful careers.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Industry Connections</h3>
                <p className="text-gray-600">
                  Connect with top employers through networking events, internships, and career fairs exclusive to BYU
                  Marriott students.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Values-Based Education</h3>
                <p className="text-gray-600">
                  Receive an education that integrates faith and professional preparation, developing ethical business
                  leaders.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Career Path Explorer</h3>
                <p className="text-gray-600">
                  Visualize your potential career journey with our interactive tool that maps out possible paths from
                  college to career.
                </p>
                <div className="mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#002E5D] text-[#002E5D] hover:bg-[#E6F1FA]"
                  >
                    <Link href="/career-paths">Explore Career Paths</Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#002E5D] mb-3">Major Match Quiz</h3>
                <p className="text-gray-600">
                  Not sure which major is right for you? Take our interactive quiz to discover which BYU Marriott majors
                  best match your interests and strengths.
                </p>
                <div className="mt-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#002E5D] text-[#002E5D] hover:bg-[#E6F1FA]"
                  >
                    <Link href="/major-match-quiz">Take the Quiz</Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Quote Carousel */}
      <QuoteCarousel />
    </main>
  )
}
