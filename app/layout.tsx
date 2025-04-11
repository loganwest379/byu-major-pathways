import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BYU Marriott School of Business",
  description: "Explore and compare different business majors at BYU Marriott School of Business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          {children}
          <footer className="bg-[#002E5D] text-white py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">BYU Marriott School of Business</h3>
                  <p className="text-sm">
                    Brigham Young University
                    <br />
                    Provo, Utah 84602
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="/" className="hover:underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/explore" className="hover:underline">
                        Explore Majors
                      </a>
                    </li>
                    <li>
                      <a href="/compare" className="hover:underline">
                        Compare Majors
                      </a>
                    </li>
                    <li>
                      <a href="/careers" className="hover:underline">
                        Career Insights
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Connect</h3>
                  <p className="text-sm mb-2">Follow us on social media for updates and insights.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-300">
                      Facebook
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      Instagram
                    </a>
                    <a href="#" className="hover:text-gray-300">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center">
                © {new Date().getFullYear()} BYU Marriott School of Business. All rights reserved.
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'