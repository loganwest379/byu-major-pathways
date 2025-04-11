"use client"

import { Book, BarChart2, MessageCircle, Award, Briefcase, GraduationCap } from "lucide-react"

export function PulsingIcons() {
  const icons = [
    {
      id: 1,
      icon: <Book />,
      position: { top: "15%", left: "10%" },
      delay: "0s",
    },
    {
      id: 2,
      icon: <BarChart2 />,
      position: { top: "70%", left: "15%" },
      delay: "1s",
    },
    {
      id: 3,
      icon: <MessageCircle />,
      position: { top: "25%", right: "10%" },
      delay: "2s",
    },
    {
      id: 4,
      icon: <Award />,
      position: { top: "65%", right: "15%" },
      delay: "3s",
    },
    {
      id: 5,
      icon: <Briefcase />,
      position: { bottom: "20%", left: "30%" },
      delay: "2.5s",
    },
    {
      id: 6,
      icon: <GraduationCap />,
      position: { top: "20%", right: "30%" },
      delay: "1.5s",
    },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute text-[#005DAA] opacity-15 animate-pulse-size"
          style={{
            ...icon.position,
            animationDelay: icon.delay,
          }}
        >
          <div className="w-8 h-8 md:w-10 md:h-10">{icon.icon}</div>
        </div>
      ))}
    </div>
  )
}
