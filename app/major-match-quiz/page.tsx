import { MajorMatchQuiz } from "@/components/quiz/major-match-quiz"

export default function MajorMatchQuizPage() {
  return (
    <main className="flex min-h-screen flex-col py-12 px-4 bg-[#F8F9FA]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#005DAA] mb-4">Major Match Quiz</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover which BYU Marriott majors best match your interests, strengths, and career goals by answering a few
            questions.
          </p>
        </div>

        <MajorMatchQuiz />
      </div>
    </main>
  )
}
