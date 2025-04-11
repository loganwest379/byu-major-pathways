import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#002E5D] mb-6 text-center">About BYU Marriott</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Learn more about the BYU Marriott School of Business and our commitment to developing leaders of faith,
            intellect, and character.
          </p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#002E5D] mb-4">Our Mission</h2>
            <p className="mb-6">
              The mission of the BYU Marriott School of Business is to prepare men and women of faith, character, and
              professional ability who will become outstanding leaders and positively influence a world we wish to
              improve.
            </p>

            <h2 className="text-2xl font-bold text-[#002E5D] mb-4">Our History</h2>
            <p className="mb-6">
              The BYU Marriott School of Business was named in honor of J. Willard and Alice S. Marriott in 1988. The
              school has a rich history of excellence in business education dating back to 1891 when Brigham Young
              Academy offered its first business classes.
            </p>

            <h2 className="text-2xl font-bold text-[#002E5D] mb-4">Accreditation</h2>
            <p className="mb-6">
              BYU Marriott is accredited by the Association to Advance Collegiate Schools of Business (AACSB), the
              highest standard of achievement for business schools worldwide. Less than 5% of the world's business
              programs have earned this prestigious accreditation.
            </p>

            <h2 className="text-2xl font-bold text-[#002E5D] mb-6">Why Choose BYU Marriott?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    BYU Marriott consistently ranks among the top business schools in the nation. Our programs are
                    recognized for their rigor, innovation, and the exceptional quality of our graduates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Values-Based Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    We integrate faith and professional preparation, developing ethical business leaders who serve with
                    integrity and make a positive impact in their communities and organizations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Career Preparation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Our students benefit from robust career services, internship opportunities, and connections with top
                    employers across industries, resulting in excellent job placement rates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Global Perspective</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    BYU Marriott offers international experiences, diverse perspectives, and a global curriculum that
                    prepares students to succeed in an increasingly interconnected business world.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-[#002E5D] mb-4">Contact Information</h2>
            <p className="mb-2">
              <strong>Address:</strong> 790 E University Pkwy, Provo, UT 84602
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> (801) 422-4121
            </p>
            <p className="mb-6">
              <strong>Email:</strong> marriottschool@byu.edu
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
