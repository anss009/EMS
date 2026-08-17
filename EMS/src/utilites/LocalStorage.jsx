const employees = [
  {
    "id": 1,
    "firstName": "Alex",
    "email": "alex@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Design Landing Page Hero",
        "description": "Create high-fidelity mockups and responsive variants for the new SaaS product landing page.",
        "date": "2025-05-10",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix Mobile Navigation Bug",
        "description": "Resolve the issue where the mobile drawer navigation does not close on link clicks.",
        "date": "2025-05-12",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Write Unit Tests for Auth",
        "description": "Cover edge cases and JWT token refresh scenarios in the auth service.",
        "date": "2025-05-04",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Legacy Database Migration",
        "description": "Attempted PostgreSQL query migration on legacy tables with indexing bottlenecks.",
        "date": "2025-05-01",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Review Pull Request #88",
        "description": "Review peer code for real-time notification integration and WebSocket fallbacks.",
        "date": "2025-05-15",
        "category": "Review",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Sophia",
    "email": "sophia@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Brand Guidelines Refresh",
        "description": "Update corporate typography, badge tokens, and accessible color palettes for H2.",
        "date": "2025-05-08",
        "category": "Design",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "User Onboarding UX Research",
        "description": "Synthesize results from 10 customer walkthroughs to reduce initial drop-off rate.",
        "date": "2025-05-14",
        "category": "Research",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Design System Icon Pack",
        "description": "Export unified SVG vector icons optimized for 24px and 16px grid viewports.",
        "date": "2025-05-02",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Q2 Marketing Deck Visuals",
        "description": "Create charts and customer showcase graphics for the quarterly stakeholder deck.",
        "date": "2025-05-03",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "App Accessibility Audit",
        "description": "Audit color contrast and ARIA labels across the billing and settings views.",
        "date": "2025-05-18",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Liam",
    "email": "liam@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Optimize GraphQL Resolvers",
        "description": "Batch N+1 database queries across employee dashboard loaders using DataLoader.",
        "date": "2025-05-09",
        "category": "Backend",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Setup Redis Cache Cluster",
        "description": "Configure distributed session caching with fallback replicas.",
        "date": "2025-05-05",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Staging Server TLS Renewal",
        "description": "Automate certificate renewal scripts on the staging load balancer.",
        "date": "2025-05-02",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Docker Container Memory Limits",
        "description": "Tune Kubernetes pod resource allocation to avoid OOM kills during peak exports.",
        "date": "2025-05-16",
        "category": "DevOps",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Webhooks Event Dispatcher",
        "description": "Implement retry logic and dead-letter queue for third-party webhook triggers.",
        "date": "2025-05-19",
        "category": "Backend",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Emma",
    "email": "emma@company.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskTitle": "Enterprise Client Pitch",
        "description": "Prepare custom workflow demos and SLA comparisons for prospective Fortune 500 client.",
        "date": "2025-05-11",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Customer Success Health Score",
        "description": "Set up automated risk alerts for accounts with declining monthly active usage.",
        "date": "2025-05-13",
        "category": "Growth",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Q2 Renewal Follow-ups",
        "description": "Finalized multi-year contract renewals for 5 key mid-market accounts.",
        "date": "2025-05-04",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Product Feedback Synthesis",
        "description": "Compile top 10 requested enterprise integrations for the product planning meeting.",
        "date": "2025-05-20",
        "category": "Product",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Ethan",
    "email": "ethan@company.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskTitle": "Automated KPI Reporting",
        "description": "Build scheduled Google Data Studio & Slack summary pipeline for executive metrics.",
        "date": "2025-05-10",
        "category": "Analytics",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "A/B Testing Funnel Analysis",
        "description": "Analyze conversion velocity for the new two-step checkout experiment.",
        "date": "2025-05-06",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Cohort Retention Modeling",
        "description": "Model 90-day retention curve comparing self-serve vs sales-assisted signups.",
        "date": "2025-05-03",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Competitor Pricing Scraping Pipeline",
        "description": "Encountered CAPTCHA blocking during automated pricing page scrape run.",
        "date": "2025-05-02",
        "category": "Data",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "User Lifetime Value (LTV) Forecast",
        "description": "Project 12-month expected customer value by acquisition channel.",
        "date": "2025-05-21",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@company.com",
    "password": "112233"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const storedEmployees = localStorage.getItem('employees')
  const storedAdmin = localStorage.getItem('admin')

  const parsedEmployees = storedEmployees ? JSON.parse(storedEmployees) : employees
  const parsedAdmin = storedAdmin ? JSON.parse(storedAdmin) : admin

  return { employees: parsedEmployees, admin: parsedAdmin }
}