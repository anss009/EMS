const employees = [
  {
    "id": 1,
    "email": "employee1@company.com",
    "password": "112233",
    "tasks": [
      {
        "title": "Fix login page bug",
        "description": "Resolve the issue where users are unable to log in with correct credentials on mobile devices.",
        "date": "2025-04-01",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write unit tests for auth module",
        "description": "Cover all edge cases for the authentication module using Jest.",
        "date": "2025-04-03",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update API documentation",
        "description": "Rewrite the REST API docs to reflect the latest endpoint changes in v3.2.",
        "date": "2025-04-07",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Code review for PR #45",
        "description": "Review and leave feedback on the pull request submitted by the backend team for the payment integration.",
        "date": "2025-04-10",
        "category": "Review",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Deploy staging build",
        "description": "Deploy the latest build to the staging environment and run smoke tests.",
        "date": "2025-04-12",
        "category": "DevOps",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@company.com",
    "password": "112233",
    "tasks": [
      {
        "title": "Design new dashboard UI",
        "description": "Create high-fidelity mockups for the new analytics dashboard based on client requirements.",
        "date": "2025-04-02",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Conduct user interviews",
        "description": "Interview 5 existing users to gather feedback on the current onboarding flow.",
        "date": "2025-04-05",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare Q2 marketing report",
        "description": "Compile data from all marketing channels and prepare a comprehensive Q2 performance report.",
        "date": "2025-04-08",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Set up email campaign",
        "description": "Create and schedule the April newsletter campaign in Mailchimp for all subscribers.",
        "date": "2025-04-11",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Competitor analysis",
        "description": "Analyze the top 5 competitors and summarize their product features, pricing, and positioning.",
        "date": "2025-04-14",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update brand style guide",
        "description": "Revise the brand guidelines to include new color palette and updated typography rules.",
        "date": "2025-04-16",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@company.com",
    "password": "112233",
    "tasks": [
      {
        "title": "Optimize database queries",
        "description": "Identify and optimize slow SQL queries causing performance issues on the reports page.",
        "date": "2025-04-01",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Server migration to AWS",
        "description": "Migrate the legacy on-premise server to AWS EC2 with proper backups and rollback plan.",
        "date": "2025-04-04",
        "category": "DevOps",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Security audit",
        "description": "Perform a full security audit of the application and document all vulnerabilities found.",
        "date": "2025-04-06",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Implement dark mode",
        "description": "Add dark mode support across all pages using CSS variables and a theme toggle component.",
        "date": "2025-04-09",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix broken image uploads",
        "description": "Investigate and fix the bug where image uploads fail for files larger than 2MB.",
        "date": "2025-04-13",
        "category": "Development",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write onboarding guide",
        "description": "Create a step-by-step onboarding guide for new developers joining the team.",
        "date": "2025-04-15",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Monitor server uptime",
        "description": "Set up Uptime Robot alerts and a status page to monitor all production services.",
        "date": "2025-04-17",
        "category": "DevOps",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@company.com",
    "password": "112233",
    "tasks": [
      {
        "title": "Client onboarding call",
        "description": "Host a 1-hour onboarding call with the new enterprise client and walk them through the product.",
        "date": "2025-04-02",
        "category": "Sales",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Prepare sales deck",
        "description": "Build a polished sales presentation for the upcoming pitch to the retail sector client.",
        "date": "2025-04-05",
        "category": "Sales",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "HR policy update review",
        "description": "Review and approve the updated remote work and leave policies for FY2025.",
        "date": "2025-04-07",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Team performance reviews",
        "description": "Complete mid-year performance evaluations for all 8 direct reports and submit to HR.",
        "date": "2025-04-10",
        "category": "HR",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Budget forecast for Q3",
        "description": "Prepare department budget forecast for Q3 and submit to the finance team by end of month.",
        "date": "2025-04-18",
        "category": "Finance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Organize team building event",
        "description": "Plan and coordinate a team building activity for a group of 20 employees.",
        "date": "2025-04-20",
        "category": "HR",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Contract renewal follow-up",
        "description": "Follow up with 3 clients whose contracts are expiring this month and negotiate renewals.",
        "date": "2025-04-22",
        "category": "Sales",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Update CRM records",
        "description": "Ensure all client contact details and deal stages are up to date in Salesforce.",
        "date": "2025-04-24",
        "category": "Sales",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@company.com",
    "password": "112233",
    "tasks": [
      {
        "title": "Analyze user retention data",
        "description": "Deep dive into the past 6 months of user retention metrics and identify key drop-off points.",
        "date": "2025-04-01",
        "category": "Analytics",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Build weekly KPI dashboard",
        "description": "Create an automated weekly KPI dashboard in Google Data Studio for the leadership team.",
        "date": "2025-04-04",
        "category": "Analytics",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "A/B test homepage CTA",
        "description": "Set up and run an A/B test on the homepage call-to-action button to improve conversion rate.",
        "date": "2025-04-06",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "title": "Content calendar for May",
        "description": "Plan and schedule all social media and blog content for the month of May.",
        "date": "2025-04-09",
        "category": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO audit",
        "description": "Run a full technical SEO audit and identify top 10 issues to fix for organic growth.",
        "date": "2025-04-12",
        "category": "Marketing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Prepare investor update",
        "description": "Draft the monthly investor update email summarizing product progress, metrics, and upcoming milestones.",
        "date": "2025-04-15",
        "category": "Finance",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Customer support ticket review",
        "description": "Review all open support tickets from the past two weeks and escalate unresolved critical issues.",
        "date": "2025-04-17",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "title": "Refine product roadmap",
        "description": "Update the product roadmap for H2 2025 based on the latest feedback from sales and support teams.",
        "date": "2025-04-19",
        "category": "Product",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Accessibility compliance check",
        "description": "Audit all public-facing pages against WCAG 2.1 AA standards and log any compliance issues.",
        "date": "2025-04-21",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  }
]

const admin = [
  {
    "id": 1,
    "email": "admin@company.com",
    "password": "112233"
  }
]



export  const setLocalStorage = ()=>{
        localStorage.setItem("employees", JSON.stringify(employees))
        localStorage.setItem("admin", JSON.stringify(admin))
}


export  const getLocalStorage = ()=>{
        const employees = localStorage.getItem('employees')
        const admin  = localStorage.getItem('admin')

        return {employees, admin}
}