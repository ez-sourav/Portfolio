import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://souravbiswas.in"),
  title: "Sourav Biswas | Full Stack Developer",
  description:
    "Sourav Biswas is a MERN Stack and Full Stack Developer skilled in React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS, and modern web development. Explore projects, skills, and portfolio.",
  keywords: [
    "Sourav Biswas",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "JavaScript Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "Tailwind CSS Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],
  authors: [{ name: "Sourav Biswas" }],
  openGraph: {
    title: "Sourav Biswas | Full Stack Developer",
    description: "Portfolio of Sourav Biswas - MERN Stack & Full Stack Developer.",
    type: "website",
    url: "https://souravbiswas.in",
    images: [
      {
        url: "https://souravbiswas.in/image.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourav Biswas | Full Stack Developer",
    description: "Portfolio of Sourav Biswas - MERN Stack & Full Stack Developer.",
    images: ["https://souravbiswas.in/image.png"],
  },
  icons: {
    icon: "/image.png",
  },
  alternates: {
    canonical: "https://souravbiswas.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sourav Biswas",
  url: "https://souravbiswas.in",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://github.com/ez-sourav",
    "https://www.linkedin.com/in/sourav-biswas-829521255/",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
