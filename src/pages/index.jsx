import Head from "next/head";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skill from "../Components/Skill";
import Project from "../Components/project/Project";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import GlobalGlow from "../Components/GlobalGlow";
import AIChat from "../Components/ai-chat/AIChat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourav Biswas | Full Stack Developer</title>
        <meta
          name="description"
          content="Sourav Biswas is a MERN Stack and Full Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, and modern web development. Explore projects, skills, and portfolio."
        />
        <meta
          name="keywords"
          content="Sourav Biswas, MERN Stack Developer, Full Stack Developer, React Developer, Node.js Developer, JavaScript Developer, MongoDB Developer, Express.js Developer, Tailwind CSS Developer, Frontend Developer, Backend Developer, Web Developer"
        />
        <meta name="author" content="Sourav Biswas" />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Sourav Biswas | Full Stack Developer" />
        <meta
          property="og:description"
          content="Portfolio of Sourav Biswas - MERN Stack & Full Stack Developer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://souravbiswas.in" />
        <meta property="og:image" content="https://souravbiswas.in/image.png" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sourav Biswas | Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Portfolio of Sourav Biswas - MERN Stack & Full Stack Developer."
        />
        <meta name="twitter:image" content="https://souravbiswas.in/image.png" />

        <link rel="canonical" href="https://souravbiswas.in" />
      </Head>

      <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)] overflow-x-hidden relative transition-colors duration-300">
        <GlobalGlow />

        <main className="relative z-10" style={{ position: "relative", zIndex: 10 }}>
          <Navbar />
          <Hero />
          <About />
          <Skill />
          <Project />
          <Education />
          <Contact />
          <Footer />
        </main>
        <AIChat />
      </div>
    </>
  );
}
