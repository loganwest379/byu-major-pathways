export type Major =
  | "finance"
  | "accounting"
  | "marketing"
  | "strategy"
  | "information-systems"
  | "entrepreneurship"
  | "global-supply-chain"
  | "experience-design"

export type Answer = {
  text: string
  majors: Major[]
}

export type Question = {
  id: number
  text: string
  answers: Answer[]
}

export type MajorInfo = {
  id: Major
  name: string
  description: string
  path: string
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What kind of work energizes you most?",
    answers: [
      { text: "Solving logical problems", majors: ["accounting", "information-systems"] },
      { text: "Making investment decisions", majors: ["finance"] },
      { text: "Building relationships with people", majors: ["marketing", "experience-design"] },
      { text: "Creating something from scratch", majors: ["entrepreneurship", "strategy"] },
    ],
  },
  {
    id: 2,
    text: "You've got a big project — how do you approach it?",
    answers: [
      { text: "Organize all the details in a spreadsheet", majors: ["accounting", "global-supply-chain"] },
      { text: "Think of how it fits into the bigger picture", majors: ["strategy"] },
      { text: "Focus on the people and collaboration", majors: ["marketing", "experience-design"] },
      { text: "Build a tool or automate it", majors: ["information-systems", "entrepreneurship"] },
    ],
  },
  {
    id: 3,
    text: "What excites you most about business?",
    answers: [
      { text: "Profits and money management", majors: ["finance", "accounting"] },
      { text: "Innovation and launching new ideas", majors: ["entrepreneurship", "strategy"] },
      { text: "Understanding customer needs", majors: ["marketing", "experience-design"] },
      { text: "Optimizing systems and data", majors: ["information-systems", "global-supply-chain"] },
    ],
  },
  {
    id: 4,
    text: "Favorite class type?",
    answers: [
      { text: "Data or math-heavy", majors: ["finance", "information-systems", "accounting"] },
      { text: "Presenting ideas and communicating", majors: ["marketing", "strategy"] },
      { text: "Brainstorming or group work", majors: ["experience-design", "entrepreneurship"] },
      { text: "Organizing and improving processes", majors: ["global-supply-chain", "information-systems"] },
    ],
  },
  {
    id: 5,
    text: "Which sounds like your dream job?",
    answers: [
      { text: "Product Manager at a tech company", majors: ["strategy", "information-systems"] },
      { text: "Corporate Financial Analyst", majors: ["finance"] },
      { text: "Creative Director at a brand agency", majors: ["marketing"] },
      { text: "Starting my own company", majors: ["entrepreneurship"] },
    ],
  },
  {
    id: 6,
    text: "What's your ideal team role?",
    answers: [
      { text: "The planner or organizer", majors: ["global-supply-chain", "accounting"] },
      { text: "The leader/visionary", majors: ["strategy", "entrepreneurship"] },
      { text: "The creative communicator", majors: ["marketing", "experience-design"] },
      { text: "The tech builder or analyst", majors: ["information-systems", "finance"] },
    ],
  },
  {
    id: 7,
    text: "What do you value most in a job?",
    answers: [
      { text: "Stability and structure", majors: ["accounting", "finance"] },
      { text: "Autonomy and flexibility", majors: ["entrepreneurship", "marketing"] },
      { text: "Collaboration and energy", majors: ["experience-design", "strategy"] },
      { text: "Solving tough problems", majors: ["information-systems", "finance"] },
    ],
  },
  {
    id: 8,
    text: "How do you feel about Excel?",
    answers: [
      { text: "I love it", majors: ["finance", "accounting"] },
      { text: "I like it for basic stuff", majors: ["information-systems", "strategy"] },
      { text: "I avoid it when I can", majors: ["marketing", "experience-design"] },
      { text: "I use other tools instead", majors: ["entrepreneurship", "global-supply-chain"] },
    ],
  },
  {
    id: 9,
    text: "What's your leadership style?",
    answers: [
      { text: "Lead by example and execution", majors: ["finance", "global-supply-chain"] },
      { text: "Inspire with big-picture vision", majors: ["strategy", "experience-design"] },
      { text: "Let everyone contribute equally", majors: ["marketing", "information-systems"] },
      { text: "Break rules and innovate", majors: ["entrepreneurship"] },
    ],
  },
  {
    id: 10,
    text: "You've got 2 hours free — what do you do?",
    answers: [
      { text: "Listen to a finance podcast", majors: ["finance"] },
      { text: "Watch a product design video", majors: ["information-systems", "strategy"] },
      { text: "Read a startup story", majors: ["entrepreneurship"] },
      { text: "People-watch at a café", majors: ["marketing", "experience-design"] },
    ],
  },
  {
    id: 11,
    text: "What's most interesting to you?",
    answers: [
      { text: "Taxes, audits, or reporting", majors: ["accounting"] },
      { text: "Branding, campaigns, social media", majors: ["marketing"] },
      { text: "Logistics and delivery optimization", majors: ["global-supply-chain"] },
      { text: "UX, systems, or tech products", majors: ["information-systems"] },
    ],
  },
  {
    id: 12,
    text: "You'd thrive at a company like:",
    answers: [
      { text: "Deloitte or PwC", majors: ["accounting", "finance"] },
      { text: "Adobe or Nike", majors: ["marketing", "experience-design"] },
      { text: "Amazon or Google", majors: ["information-systems", "strategy"] },
      { text: "Y Combinator startup", majors: ["entrepreneurship"] },
    ],
  },
  {
    id: 13,
    text: "You're most confident when:",
    answers: [
      { text: "Working with data and numbers", majors: ["finance", "information-systems"] },
      { text: "Pitching or persuading", majors: ["marketing", "strategy"] },
      { text: "Leading a group activity", majors: ["experience-design", "entrepreneurship"] },
      { text: "Keeping a project organized", majors: ["global-supply-chain", "accounting"] },
    ],
  },
  {
    id: 14,
    text: "If you launched a club, it would be:",
    answers: [
      { text: "Investment or finance club", majors: ["finance"] },
      { text: "Startup builder or innovation", majors: ["entrepreneurship"] },
      { text: "Case competition team", majors: ["strategy"] },
      { text: "Marketing or advertising club", majors: ["marketing"] },
    ],
  },
  {
    id: 15,
    text: "You want your work to feel:",
    answers: [
      { text: "Secure and predictable", majors: ["accounting", "finance"] },
      { text: "Bold and creative", majors: ["marketing", "entrepreneurship"] },
      { text: "Impactful and people-focused", majors: ["experience-design", "strategy"] },
      { text: "Smart and efficient", majors: ["information-systems", "global-supply-chain"] },
    ],
  },
]

export const majorInfo: MajorInfo[] = [
  {
    id: "finance",
    name: "Finance",
    description:
      "Learn to manage money, investments, and financial strategies for businesses and individuals. Finance majors excel in analytical thinking and quantitative skills.",
    path: "/careers/finance",
  },
  {
    id: "accounting",
    name: "Accounting",
    description:
      "Master the language of business through financial reporting, auditing, and tax planning. Accounting majors are detail-oriented and have strong ethical judgment.",
    path: "/careers/accounting",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Create and implement strategies to promote products, services, and brands to target audiences. Marketing majors are creative communicators who understand consumer behavior.",
    path: "/careers/marketing",
  },
  {
    id: "strategy",
    name: "Strategy",
    description:
      "Develop and implement organizational strategies to achieve competitive advantage. Strategy majors excel in critical thinking and solving complex business problems.",
    path: "/careers/strategy",
  },
  {
    id: "information-systems",
    name: "Information Systems",
    description:
      "Bridge business and technology to design and implement IT solutions for organizations. IS majors combine technical aptitude with business acumen.",
    path: "/careers/information-systems",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    description:
      "Learn to identify opportunities, develop business models, and launch successful ventures. Entrepreneurship majors are innovative risk-takers with leadership skills.",
    path: "/careers/entrepreneurship",
  },
  {
    id: "global-supply-chain",
    name: "Global Supply Chain",
    description:
      "Manage the flow of goods and services from raw materials to final products worldwide. Supply Chain majors are organized problem-solvers with a global perspective.",
    path: "/careers/global-supply-chain",
  },
  {
    id: "experience-design",
    name: "Experience Design & Management",
    description:
      "Create memorable customer experiences through design thinking and service management. ExDM majors are empathetic, creative, and people-focused.",
    path: "/careers/experience-design",
  },
]
