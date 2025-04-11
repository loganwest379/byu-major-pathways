"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type NavItem = {
  label: string
  href: string
}

type NavDropdown = {
  label: string
  items: NavItem[]
}

type NavItemOrDropdown = NavItem | NavDropdown

const isNavItem = (item: NavItemOrDropdown): item is NavItem => {
  return (item as NavItem).href !== undefined
}

const navItems: NavItemOrDropdown[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Majors",
    items: [
      {
        label: "Explore Majors",
        href: "/explore",
      },
      {
        label: "Compare Majors",
        href: "/compare",
      },
      {
        label: "Major Match Quiz",
        href: "/major-match-quiz",
      },
    ],
  },
  {
    label: "Careers",
    items: [
      {
        label: "Career Insights",
        href: "/careers",
      },
      {
        label: "Career Path Explorer",
        href: "/career-paths",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  // Close mobile menu when clicking outside
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleMobileDropdown = (label: string) => {
    if (openMobileDropdown === label) {
      setOpenMobileDropdown(null)
    } else {
      setOpenMobileDropdown(label)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#002E5D]">BYU Marriott</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => {
            if (isNavItem(item)) {
              // Regular nav item with direct link
              return (
                <Link
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-[#002E5D] hover:text-[#004A87] transition-colors"
                >
                  {item.label}
                </Link>
              )
            } else {
              // Dropdown menu
              return (
                <DropdownMenu key={index}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center gap-1 text-sm font-medium text-[#002E5D] hover:text-[#004A87] hover:bg-transparent focus:bg-transparent"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-white rounded-md shadow-md border border-gray-100">
                    {item.items.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} asChild className="focus:bg-[#E6F1FA] focus:text-[#002E5D]">
                        <Link href={subItem.href} className="w-full px-4 py-2 text-sm">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
          })}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-[#002E5D]" /> : <Menu className="h-6 w-6 text-[#002E5D]" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t" ref={mobileMenuRef}>
          <div className="container flex flex-col py-4">
            {navItems.map((item, index) => {
              if (isNavItem(item)) {
                // Regular nav item with direct link
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className="py-3 text-sm font-medium text-[#002E5D] hover:text-[#004A87] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              } else {
                // Collapsible dropdown
                return (
                  <div key={index} className="py-1">
                    <button
                      className="flex items-center justify-between w-full py-2 text-sm font-medium text-[#002E5D] hover:text-[#004A87]"
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openMobileDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="ml-4 mt-1 border-l-2 border-[#E6F1FA] pl-4">
                        {item.items.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2 text-sm text-[#002E5D] hover:text-[#004A87]"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
            })}
          </div>
        </div>
      )}
    </header>
  )
}
