const portfolioData = {
    // =========================================================
    // PERSONAL INFORMATION
    // =========================================================
    personal: {
        name: "Sourav Biswas",
        role: "Full Stack Developer",
        currentRole: "BCA Student & Developer",

        bio:
            "I am a passionate full stack developer and BCA student focused on building responsive and user-friendly web applications. I enjoy learning modern technologies and creating clean, scalable digital experiences with React, Node.js, and MongoDB.",

        codingExperience: {
            duration: "2+ years",
            type: "Personal coding and development experience",
            focus: "Full-stack web development",
        },

        portfolioStats: {
            yearsCoding: "2+",
            projects: "10+",
        },
    },

    // =========================================================
    // EDUCATION
    // =========================================================
    education: {
        degree: "Bachelor of Computer Applications (BCA)",
        institution: "Siliguri Institute of Technology",
        duration: "2023 – 2027",
        status: "Currently pursuing",
        expectedGraduation: "2027",

        cgpa: {
            value: "8 / 10",
            completedThrough: "6th Semester",
        },

        description:
            "Currently pursuing a Bachelor of Computer Applications (BCA) while building real-world MERN stack projects and strengthening knowledge in DBMS, DSA, Computer Networks, and Software Engineering.",

        relevantCoursework: [
            "Java Programming",
            "Python Programming",
            "Operating Systems",
            "Introduction to Software Engineering",
            "Database Management Essentials",
        ],

        activities: [
            {
                title: "Software Development Competitions",
                description:
                    "Participated in software development competitions and technical events, collaborating with teams to solve real-world problems, develop innovative solutions, and strengthen teamwork, communication, and problem-solving skills.",
            },
        ],
    },

    // =========================================================
    // TECHNICAL SKILLS
    // =========================================================
    skills: {
        frontend: [
            "HTML5",
            "CSS",
            "JavaScript ES6+",
            "React",
            "Tailwind CSS",
        ],

        backend: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "REST APIs",
            "Firebase",
            "Supabase",
        ],

        toolsAndCloud: [
            "Git",
            "GitHub",
            "Cloudinary",
        ],

        currentlyLearning: [
            "Docker",
            "AWS",
        ],
    },

    // =========================================================
    // FEATURED PROJECTS
    // These are the projects currently displayed on the portfolio.
    // =========================================================
    featuredProjects: [
        {
            name: "Trendify",
            category: "Featured Project",
            status: "Completed",

            description:
                "A production-ready MERN e-commerce platform featuring secure JWT authentication, product variants, shopping cart, wishlist, current location-based address selection, Stripe payment integration, Cloudinary image uploads, and a fully responsive user interface.",

            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "JWT",
                "Cloudinary",
                "Stripe",
            ],

            features: [
                "JWT authentication",
                "Product variants",
                "Shopping cart",
                "Wishlist",
                "Current location-based address selection",
                "Stripe payment integration",
                "Cloudinary image uploads",
                "Responsive user interface",
            ],

            liveUrl: "https://trendify-online.vercel.app/",
            githubUrl: "https://github.com/ez-sourav/Trendify",
        },

        {
            name: "InterviewIQ",
            category: "Featured Project",
            status: "Completed",

            description:
                "An AI-powered interview preparation platform that generates personalized interview roadmaps, learning plans, and technical interview questions using Google's Gemini API.",

            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Gemini API",
                "JWT",
            ],

            features: [
                "AI-powered interview preparation",
                "Personalized interview roadmaps",
                "Learning plans",
                "Technical interview questions",
                "Gemini API integration",
                "JWT authentication",
            ],

            liveUrl: "https://interviewplanner.vercel.app/",
            githubUrl: "https://github.com/ez-sourav/Ai-Interview-Plan",
        },

        {
            name: "File Manager",
            category: "Featured Project",
            status: "Completed",

            description:
                "A secure cloud-based file storage platform featuring authentication, Cloudinary integration, file uploads, previews, downloads, and responsive file management.",

            technologies: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Cloudinary",
                "JWT",
            ],

            features: [
                "User authentication",
                "Cloudinary integration",
                "File uploads",
                "File previews",
                "File downloads",
                "Responsive file management",
            ],

            liveUrl: "https://uploadfile-in.vercel.app/",
            githubUrl: "https://github.com/ez-sourav/Upload-File",
        },
    ],

    additionalProjects: [
        {
            name: "Media Explorer",
            category: "Additional Project",
            status: "Completed",

            description:
                "A modern media search application where users can search and explore photos, videos, and GIFs using external APIs. It also includes a collection feature for saving and managing favorite media.",

            technologies: [
                "React",
                "Vite",
                "Redux Toolkit",
                "Tailwind CSS",
                "Lucide React",
                "Axios",
                "Unsplash API",
                "Pexels API",
                "Giphy API",
            ],

            features: [
                "Search photos",
                "Search videos",
                "Search GIFs",
                "Photo search using Unsplash API",
                "Video search using Pexels API",
                "GIF search using Giphy API",
                "Save media to collection",
                "Clear collection",
                "Download media",
                "Pagination with dynamic maximum pages",
                "Responsive desktop and mobile interface",
            ],

            liveUrl: "https://mediaexplorer-in.vercel.app/",
            githubUrl: "https://github.com/ez-sourav/Media-Explorer",
        },

        {
            name: "Blogify",
            category: "Additional Project",
            status: "Completed",

            description:
                "A full-stack blogging platform built with Node.js, Express, MongoDB, EJS, and Cloudinary. Users can create accounts, publish blogs with cover images, comment on blogs, and read posts online.",

            technologies: [
                "Node.js",
                "Express",
                "MongoDB",
                "MongoDB Atlas",
                "EJS",
                "Cloudinary",
            ],

            features: [
                "User authentication",
                "Sign Up and Sign In",
                "Create blogs",
                "Blog cover image uploads",
                "Cloudinary image storage",
                "Comment system",
                "Server-side rendering using EJS",
                "Cloud-based image storage",
                "Deployment on Render",
            ],

            liveUrl: "https://blogify-jetc.onrender.com",
            githubUrl: "https://github.com/ez-sourav/blogify",
        },

        {
            name: "React Note App",
            category: "Additional Project",
            status: "Completed",

            description:
                "A simple and responsive note-taking application built with React that allows users to create, view, and delete notes through a clean interface.",

            technologies: [
                "React",
            ],

            features: [
                "Create notes",
                "Add note title and details",
                "View notes",
                "Delete individual notes",
                "Responsive desktop and mobile design",
                "Clean and simple interface",
            ],

            liveUrl: "https://noteapp-04.vercel.app/",
            githubUrl: "https://github.com/ez-sourav/noteApp",
        },
    ],

    groupProjects: [
    {
        name: "Smart College Event Management System",
        category: "Group Project",
        status: "In Progress / Partially Completed",

        ownership:
            "Group project. This project should not be described as Sourav's solo project.",

        yourRole: "Contributor",

        description:
            "A role-based web application for managing college tech fest events using QR-based digital passes, real-time attendance, and an interactive campus map. The system is designed to replace Google Form registrations and manual check-ins with a secure and efficient system supporting both internal and external participants.",

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "JWT",
            "Axios",
            "React Hook Form",
            "QR Code",
            "QR Scanner",
        ],

        features: [
            "Role-based access for Admin, Volunteer, and Participant",
            "Event creation and management",
            "Venue, date/time, and capacity management",
            "Real-time registration and attendance statistics",
            "Unique QR code for each participant per event",
            "Duplicate entry prevention",
            "Unauthorized entry prevention",
            "Automatic attendance marking on QR scan",
            "Interactive campus event map",
            "Venue markers on campus map",
            "Admin analytics dashboard",
            "Participant and attendance lists",
            "CSV attendance export",
        ],

        liveUrl: "https://event-management-in.vercel.app",

        githubUrl:
            "https://github.com/ez-sourav/college-event-management-system",
    },
],

   
    professional: {
        currentStatus: "BCA Student & Developer",

        professionalExperience: {
            availableInformation:
                "The portfolio does not currently list formal company employment or internship experience.",
            note:
                "Do not convert Sourav's 2+ years of personal coding experience into professional employment experience.",
        },

        openTo: [
            "Internship opportunities",
            "New projects",
            "Collaborations",
            "Innovative ideas",
        ],

        interests: [
            "Full-stack web development",
            "MERN stack development",
            "Building responsive web applications",
            "Learning modern technologies",
            "Creating clean and scalable digital experiences",
        ],
    },

    contact: {
        email: "souravb2003@gmail.com",

        github: "https://github.com/ez-sourav",

        linkedin:
            "https://www.linkedin.com/in/sourav-biswas-829521255/",

        portfolio: "https://souravbiswas.in",
    },

    resume: {
        available: true,
        filePath: "/Sourav_Biswas_FullStack_Developer_Resume.pdf",
        description:
            "Sourav Biswas's Full Stack Developer resume.",
    },

    assistant: {
        name: "Sourav's Portfolio Assistant",

        purpose:
            "Answer questions about Sourav Biswas, his education, skills, coding experience, projects, professional interests, and contact information.",

        allowedTopics: [
            "Who Sourav Biswas is",
            "Sourav's role",
            "Sourav's biography",
            "Sourav's education",
            "Sourav's BCA degree",
            "Sourav's CGPA",
            "Sourav's coursework",
            "Sourav's technical skills",
            "Sourav's coding experience",
            "Sourav's projects",
            "Sourav's project technologies",
            "Sourav's project features",
            "Sourav's project live demos",
            "Sourav's GitHub repositories",
            "Sourav's professional interests",
            "Internship opportunities",
            "Collaborations",
            "Contact information",
            "Resume",
        ],

        restrictedTopics: [
            "General knowledge",
            "Weather",
            "News",
            "Politics",
            "Sports",
            "Entertainment",
            "Medical advice",
            "Legal advice",
            "Financial advice",
            "Homework unrelated to Sourav",
            "Programming questions unrelated to Sourav's work",
            "General AI questions",
            "Questions about other people",
            "Questions unrelated to Sourav's professional profile",
        ],

        rules: [
            "Only answer questions related to Sourav Biswas and his professional portfolio.",
            "Use the provided portfolio data as the primary source of truth.",
            "Never invent education, employment, skills, projects, achievements, technologies, or experience.",
            "Never claim that personal coding experience is professional employment experience.",
            "Sourav has 2+ years of personal coding and development experience.",
            "Sourav is currently a BCA student and developer.",
            "The Smart College Event Management System is a group project and is partially completed.",
            "Never describe the Smart College Event Management System as a completed solo project.",
            "Do not invent the technology stack of the Smart College Event Management System.",
            "If information is not available in this data, clearly say that the information is not available in Sourav's portfolio.",
            "If a question is outside the allowed topics, politely refuse and explain that the assistant only answers questions about Sourav and his professional portfolio.",
            "Do not browse the internet to answer unrelated questions.",
            "Do not pretend to have personal knowledge about Sourav beyond the supplied portfolio data.",
            "When providing project links, use the URLs stored in the relevant project data.",
            "Keep answers professional, friendly, concise, and suitable for a portfolio website.",
        ],

        outOfScopeResponse:
            "Sorry, I’m Sourav’s portfolio assistant, so I can only answer questions about Sourav, I can share details about his education, skills, coding experience, projects, and professional work. I can’t help with unrelated topics.",

        unknownInformationResponse:
            "I don't have that information in Sourav's portfolio yet.",

        tone: {
            style: "Professional, friendly, concise",
            perspective:
                "Answer about Sourav in the third person unless the user specifically asks for a first-person version.",
        },
    },
};

export default portfolioData;