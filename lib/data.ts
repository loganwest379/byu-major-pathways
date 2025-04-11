export type Major = {
  id: string
  name: string
  description: string
  shortDescription: string
  keyCourses: string[]
  averageStartingSalary: string
  jobPlacementRate: string
  topEmployers: string[]
  commonCareerPaths: string[]
  difficultyLevel: "Easy" | "Medium" | "Hard"
  requiredSkills: string[]
  careerPaths: {
    title: string
    description: string
  }[]
  salaryRange: string
  timeToFirstJob: string
}

export const majors: Major[] = [
  {
    id: "finance",
    name: "Finance",
    shortDescription: "Learn to manage money, investments, and financial strategies for businesses and individuals.",
    description:
      "The Finance program prepares students for careers in corporate finance, investment banking, portfolio management, and financial analysis. Students develop skills in financial modeling, valuation, and risk management.",
    keyCourses: [
      "Financial Management",
      "Investment Analysis",
      "Corporate Financial Strategy",
      "International Finance",
    ],
    averageStartingSalary: "$72,000",
    jobPlacementRate: "95%",
    topEmployers: ["Goldman Sachs", "JP Morgan Chase", "Morgan Stanley", "Deloitte"],
    commonCareerPaths: ["Financial Analyst", "Investment Banker", "Portfolio Manager", "Financial Consultant"],
    difficultyLevel: "Hard",
    requiredSkills: ["Analytical", "Quantitative", "Problem-solving", "Attention to detail"],
    careerPaths: [
      {
        title: "Investment Banking",
        description: "Work with corporations and governments to raise capital and complete mergers and acquisitions.",
      },
      {
        title: "Corporate Finance",
        description: "Manage a company's financial activities and strategic financial decisions.",
      },
      {
        title: "Portfolio Management",
        description: "Manage investment portfolios for individuals or institutions to meet financial goals.",
      },
    ],
    salaryRange: "$65,000 - $95,000",
    timeToFirstJob: "2.5 months",
  },
  {
    id: "accounting",
    name: "Accounting",
    shortDescription: "Master the language of business through financial reporting, auditing, and tax planning.",
    description:
      "The Accounting program prepares students for careers in public accounting, corporate accounting, and financial reporting. Students develop skills in auditing, tax planning, and financial statement analysis.",
    keyCourses: ["Financial Accounting", "Managerial Accounting", "Auditing", "Tax Planning"],
    averageStartingSalary: "$65,000",
    jobPlacementRate: "98%",
    topEmployers: ["Deloitte", "PwC", "EY", "KPMG"],
    commonCareerPaths: ["Auditor", "Tax Accountant", "Financial Controller", "Forensic Accountant"],
    difficultyLevel: "Hard",
    requiredSkills: ["Analytical", "Attention to detail", "Ethical judgment", "Communication"],
    careerPaths: [
      {
        title: "Public Accounting",
        description: "Work with a variety of clients providing audit, tax, and consulting services.",
      },
      {
        title: "Corporate Accounting",
        description: "Manage financial reporting, budgeting, and internal controls for a company.",
      },
      {
        title: "Forensic Accounting",
        description: "Investigate financial fraud and prepare financial evidence for legal proceedings.",
      },
    ],
    salaryRange: "$60,000 - $75,000",
    timeToFirstJob: "1.5 months",
  },
  {
    id: "marketing",
    name: "Marketing",
    shortDescription: "Create and implement strategies to promote products, services, and brands to target audiences.",
    description:
      "The Marketing program prepares students for careers in brand management, digital marketing, and market research. Students develop skills in consumer behavior analysis, marketing strategy, and digital marketing tactics.",
    keyCourses: ["Marketing Management", "Consumer Behavior", "Digital Marketing", "Marketing Research"],
    averageStartingSalary: "$62,000",
    jobPlacementRate: "92%",
    topEmployers: ["Procter & Gamble", "Adobe", "Google", "Meta"],
    commonCareerPaths: [
      "Brand Manager",
      "Digital Marketing Specialist",
      "Market Research Analyst",
      "Social Media Manager",
    ],
    difficultyLevel: "Medium",
    requiredSkills: ["Creativity", "Communication", "Analytical", "Strategic thinking"],
    careerPaths: [
      {
        title: "Brand Management",
        description: "Develop and implement marketing strategies to build and maintain brand equity.",
      },
      {
        title: "Digital Marketing",
        description: "Create and optimize online marketing campaigns across various digital channels.",
      },
      {
        title: "Market Research",
        description: "Gather and analyze data to understand consumer behavior and market trends.",
      },
    ],
    salaryRange: "$55,000 - $75,000",
    timeToFirstJob: "3 months",
  },
  {
    id: "strategy",
    name: "Strategy",
    shortDescription: "Develop and implement organizational strategies to achieve competitive advantage.",
    description:
      "The Strategy program prepares students for careers in management consulting, corporate strategy, and business development. Students develop skills in strategic analysis, problem-solving, and organizational leadership.",
    keyCourses: ["Strategic Management", "Competitive Analysis", "Organizational Behavior", "Business Analytics"],
    averageStartingSalary: "$70,000",
    jobPlacementRate: "90%",
    topEmployers: ["McKinsey", "Boston Consulting Group", "Bain & Company", "Amazon"],
    commonCareerPaths: [
      "Management Consultant",
      "Business Analyst",
      "Corporate Strategist",
      "Business Development Manager",
    ],
    difficultyLevel: "Hard",
    requiredSkills: ["Strategic thinking", "Problem-solving", "Communication", "Leadership"],
    careerPaths: [
      {
        title: "Management Consulting",
        description: "Help organizations solve complex business problems and improve performance.",
      },
      {
        title: "Corporate Strategy",
        description: "Develop and implement strategies to achieve organizational goals and competitive advantage.",
      },
      {
        title: "Business Development",
        description: "Identify and pursue growth opportunities through partnerships, acquisitions, and new markets.",
      },
    ],
    salaryRange: "$65,000 - $85,000",
    timeToFirstJob: "3.5 months",
  },
  {
    id: "information-systems",
    name: "Information Systems",
    shortDescription: "Bridge business and technology to design and implement IT solutions for organizations.",
    description:
      "The Information Systems program prepares students for careers in IT management, systems analysis, and data analytics. Students develop skills in programming, database management, and business process analysis.",
    keyCourses: ["Database Management", "Systems Analysis & Design", "Business Programming", "Data Analytics"],
    averageStartingSalary: "$75,000",
    jobPlacementRate: "97%",
    topEmployers: ["Microsoft", "Amazon", "Adobe", "Qualtrics"],
    commonCareerPaths: ["Systems Analyst", "IT Consultant", "Data Analyst", "Business Intelligence Developer"],
    difficultyLevel: "Medium",
    requiredSkills: ["Technical aptitude", "Problem-solving", "Communication", "Analytical"],
    careerPaths: [
      {
        title: "IT Consulting",
        description: "Help organizations implement and optimize information systems to meet business needs.",
      },
      {
        title: "Data Analytics",
        description: "Analyze complex data sets to provide insights and support business decision-making.",
      },
      {
        title: "Systems Analysis",
        description: "Design and implement information systems to improve business processes and efficiency.",
      },
    ],
    salaryRange: "$70,000 - $90,000",
    timeToFirstJob: "2 months",
  },
  {
    id: "entrepreneurship",
    name: "Entrepreneurship",
    shortDescription: "Learn to identify opportunities, develop business models, and launch successful ventures.",
    description:
      "The Entrepreneurship program prepares students for careers as founders, business owners, and innovation leaders. Students develop skills in opportunity recognition, business model development, and venture financing.",
    keyCourses: ["New Venture Creation", "Business Model Development", "Venture Financing", "Innovation Management"],
    averageStartingSalary: "$60,000",
    jobPlacementRate: "85%",
    topEmployers: ["Startups", "Family Businesses", "Venture Capital Firms", "Corporate Innovation Departments"],
    commonCareerPaths: ["Founder", "Small Business Owner", "Product Manager", "Business Development Manager"],
    difficultyLevel: "Medium",
    requiredSkills: ["Creativity", "Risk tolerance", "Resilience", "Leadership"],
    careerPaths: [
      {
        title: "Startup Founder",
        description: "Launch and grow your own business venture from concept to market.",
      },
      {
        title: "Corporate Innovation",
        description: "Lead innovation initiatives within established companies to develop new products and services.",
      },
      {
        title: "Venture Capital",
        description: "Identify promising startups and help them grow through investment and strategic guidance.",
      },
    ],
    salaryRange: "$50,000 - $80,000",
    timeToFirstJob: "4 months",
  },
  {
    id: "global-supply-chain",
    name: "Global Supply Chain",
    shortDescription: "Manage the flow of goods and services from raw materials to final products worldwide.",
    description:
      "The Global Supply Chain program prepares students for careers in logistics, operations management, and procurement. Students develop skills in supply chain optimization, logistics management, and global sourcing.",
    keyCourses: ["Supply Chain Management", "Operations Management", "Global Sourcing", "Logistics Management"],
    averageStartingSalary: "$68,000",
    jobPlacementRate: "94%",
    topEmployers: ["Amazon", "Walmart", "Target", "Boeing"],
    commonCareerPaths: [
      "Supply Chain Manager",
      "Logistics Coordinator",
      "Procurement Specialist",
      "Operations Analyst",
    ],
    difficultyLevel: "Medium",
    requiredSkills: ["Analytical", "Problem-solving", "Communication", "Global perspective"],
    careerPaths: [
      {
        title: "Logistics Management",
        description: "Coordinate the movement of goods and materials through the supply chain.",
      },
      {
        title: "Procurement",
        description: "Source and purchase materials and services needed for business operations.",
      },
      {
        title: "Operations Management",
        description: "Oversee production processes to ensure efficiency and quality.",
      },
    ],
    salaryRange: "$63,000 - $78,000",
    timeToFirstJob: "2.5 months",
  },
  {
    id: "experience-design",
    name: "Experience Design & Management",
    shortDescription: "Create memorable customer experiences through design thinking and service management.",
    description:
      "The Experience Design & Management program prepares students for careers in experience design, event management, and hospitality. Students develop skills in design thinking, customer journey mapping, and service management.",
    keyCourses: ["Experience Design", "Event Management", "Service Marketing", "Customer Journey Mapping"],
    averageStartingSalary: "$58,000",
    jobPlacementRate: "88%",
    topEmployers: ["Marriott", "Disney", "Event Management Firms", "Experience Design Agencies"],
    commonCareerPaths: [
      "Experience Designer",
      "Event Manager",
      "Customer Experience Specialist",
      "Hospitality Manager",
    ],
    difficultyLevel: "Easy",
    requiredSkills: ["Creativity", "Communication", "Empathy", "Organization"],
    careerPaths: [
      {
        title: "Experience Design",
        description: "Create memorable customer experiences through thoughtful design and service delivery.",
      },
      {
        title: "Event Management",
        description: "Plan and execute events that meet client objectives and create positive experiences.",
      },
      {
        title: "Hospitality Management",
        description:
          "Oversee operations in hotels, resorts, and other hospitality settings to ensure guest satisfaction.",
      },
    ],
    salaryRange: "$52,000 - $68,000",
    timeToFirstJob: "3 months",
  },
]
