# 🚀 Personal Portfolio & AI Assistant

A modern, high-performance developer portfolio built with **Next.js (Pages Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**, featuring an integrated **Google Gemini AI Assistant** that answers questions about my projects, skills, and background in real time.

---

## 🌐 Live Demo

🔗 **[https://souravbiswas.in](https://souravbiswas.in)**

---

## ✨ Features

- **⚡ Next.js Pages Router:** Server-side rendered and statically optimized pages with fast page loads.
- **🤖 Built-in AI Portfolio Assistant:** Real-time streaming chat powered by Google Gemini API (`@google/genai`) and Next.js API Routes (Server-Sent Events).
- **🎨 Modern Dark Theme UI:** Sleek, recruiter-friendly design styled with Tailwind CSS v4.
- **📱 Fully Responsive:** Carefully optimized for mobile, tablet, and desktop screens with custom breakpoints.
- **✨ Fluid Animations:** Smooth scroll transitions and micro-interactions powered by Framer Motion.
- **💼 Interactive Project Showcase:** Project cards with live demo links, GitHub repositories, and interactive modals.
- **🛠️ Interactive Skills Grid:** Grouped frontend, backend, tools, and cloud skills.
- **🎓 Education & Certifications:** Structured academic and certification history.
- **📄 Resume Download:** Quick one-click access to download my latest PDF resume.
- **🔍 SEO & Schema:** Pre-configured OpenGraph metadata, Twitter cards, and JSON-LD structured data.

---

## 🛠️ Tech Stack

### Core Technologies
- **Framework:** [Next.js](https://nextjs.org/) (Pages Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & [Remix Icon](https://remixicon.com/)
- **Markdown:** [React Markdown](https://github.com/remarkjs/react-markdown)

### AI & Backend
- **AI SDK:** [@google/genai](https://www.npmjs.com/package/@google/genai) (Google Gemini API)
- **API Handler:** Next.js API Routes (`/api/chat`) with Server-Sent Events (SSE) streaming

### Hosting & Deployment
- **Platform:** [Vercel](https://vercel.com/)
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```bash
Portfolio/
├── public/                     # Static assets (images, icons, resume, robots.txt, sitemap)
├── src/
│   ├── Components/             # Reusable UI components
│   │   ├── ai-chat/            # AI Chatbot widget components
│   │   ├── project/            # Project cards & modal components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── GlobalGlow.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── Skill.jsx
│   ├── lib/
│   │   ├── aiService.js        # Gemini streaming integration & model fallback
│   │   ├── motion.js           # Framer motion variants
│   │   └── portfolioData.js    # Factual knowledge base for the AI assistant
│   ├── pages/
│   │   ├── api/
│   │   │   └── chat.js         # Streaming SSE API Route Handler
│   │   ├── _app.jsx            # App initialization & global CSS
│   │   ├── _document.jsx       # HTML shell, CDN fonts, and JSON-LD schema
│   │   └── index.jsx           # Main portfolio page with SEO metadata
│   ├── services/
│   │   └── chatService.js      # Client-side streaming reader for AI chat
│   └── styles/
│       └── globals.css         # Tailwind CSS & global styling rules
├── .env                        # Local environment variables (GEMINI_API_KEY)
├── jsconfig.json               # Path aliases (@/*)
├── next.config.mjs             # Next.js configuration
├── package.json
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
├── vercel.json                 # Vercel deployment framework configuration
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/ez-sourav/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm start
```

---

## 👨‍💻 Author & Ownership

**Sourav Biswas**


---
## ⭐ Show Your Support

If you find this portfolio helpful or inspiring, consider giving it a ⭐ on GitHub!
