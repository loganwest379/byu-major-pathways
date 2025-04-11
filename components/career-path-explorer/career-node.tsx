"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type { CareerStep } from "@/lib/career-paths"
import {
  BookOpen,
  Calculator,
  Building,
  TrendingUp,
  Users,
  Award,
  Search,
  FileText,
  Briefcase,
  Monitor,
  Terminal,
  Code,
  Star,
  DollarSign,
  Package,
  Lightbulb,
  Truck,
  ShoppingCart,
  Settings,
  Pen,
  PenTool,
  Calendar,
  CheckSquare,
  Coffee,
  Globe,
  Layers,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface CareerNodeProps {
  step: CareerStep
  isLast?: boolean
}

export function CareerNode({ step, isLast = false }: CareerNodeProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const getIcon = () => {
    switch (step.icon) {
      case "BookOpen":
        return <BookOpen className="h-5 w-5" />
      case "Calculator":
        return <Calculator className="h-5 w-5" />
      case "Building":
        return <Building className="h-5 w-5" />
      case "TrendingUp":
        return <TrendingUp className="h-5 w-5" />
      case "Users":
        return <Users className="h-5 w-5" />
      case "Award":
        return <Award className="h-5 w-5" />
      case "Search":
        return <Search className="h-5 w-5" />
      case "FileText":
        return <FileText className="h-5 w-5" />
      case "Briefcase":
        return <Briefcase className="h-5 w-5" />
      case "Monitor":
        return <Monitor className="h-5 w-5" />
      case "Terminal":
        return <Terminal className="h-5 w-5" />
      case "Code":
        return <Code className="h-5 w-5" />
      case "Star":
        return <Star className="h-5 w-5" />
      case "DollarSign":
        return <DollarSign className="h-5 w-5" />
      case "Package":
        return <Package className="h-5 w-5" />
      case "Lightbulb":
        return <Lightbulb className="h-5 w-5" />
      case "Truck":
        return <Truck className="h-5 w-5" />
      case "ShoppingCart":
        return <ShoppingCart className="h-5 w-5" />
      case "Settings":
        return <Settings className="h-5 w-5" />
      case "Pen":
        return <Pen className="h-5 w-5" />
      case "PenTool":
        return <PenTool className="h-5 w-5" />
      case "Calendar":
        return <Calendar className="h-5 w-5" />
      case "CheckSquare":
        return <CheckSquare className="h-5 w-5" />
      case "Coffee":
        return <Coffee className="h-5 w-5" />
      case "Globe":
        return <Globe className="h-5 w-5" />
      case "Layers":
        return <Layers className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <div className="relative">
      <Card
        className={cn(
          "w-full transition-all duration-300 cursor-pointer hover:shadow-md",
          isExpanded ? "bg-blue-50" : "bg-white",
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#002E5D] text-white flex items-center justify-center">
              {getIcon()}
            </div>
            <div className="flex-grow">
              <h3 className="font-medium text-[#002E5D]">{step.title}</h3>
              {isExpanded && (
                <div className="mt-3 space-y-2 animate-fade-in">
                  <p className="text-sm text-gray-600">{step.description}</p>
                  {step.salaryRange && (
                    <div className="text-sm">
                      <span className="font-medium">Salary Range:</span> {step.salaryRange}
                    </div>
                  )}
                  {step.companies && step.companies.length > 0 && (
                    <div className="text-sm">
                      <span className="font-medium">Example Companies:</span> {step.companies.join(", ")}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      {!isLast && <div className="absolute left-5 top-full w-0.5 h-6 bg-gray-300"></div>}
    </div>
  )
}
