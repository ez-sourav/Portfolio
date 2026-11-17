import { Html, Head, Main, NextScript } from "next/document";

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

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="/image.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
