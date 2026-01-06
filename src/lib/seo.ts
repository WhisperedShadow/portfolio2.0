import type { Metadata } from "next";

const baseUrl = "https://duraiponsingh.tech";

export const seo: Record<string, Metadata> = {
  home: {
    title: "Durai Pon Singh | Full Stack Developer",
    description:
      "Full-stack web developer specializing in MERN stack, AI-powered applications, and modern UI/UX. Explore projects, skills, and contact details.",
    keywords: [
      "Durai Pon Singh",
      "DuraiPonSingh",
      "Jeppiaar Engineering College",
      "JEC Student",
      "Full Stack Developer",
      "MERN Stack",
      "Next.js Portfolio",
      "AI Web Developer",
      "Software Engineer",
    ],
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: "Durai Pon Singh | Full Stack Developer",
      description:
        "Portfolio of a full-stack developer building scalable web and AI-powered applications.",
      url: baseUrl,
      siteName: "Durai Pon Singh | Portfolio",
      images: [
        {
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Durai Pon Singh | Portfolio",
        },
      ],
      type: "website",
    },
  },

  about: {
    title: "About | Durai Pon Singh",
    description:
      "Learn more about Durai Pon Singh, a self-taught full-stack developer with experience in MERN stack, AI tools, and modern frontend frameworks.",
    keywords: [
      "About Durai Pon Singh",
      "Software Engineer Profile",
      "Full Stack Developer India",
      "MERN Developer",
    ],
    alternates: {
      canonical: `${baseUrl}/about`,
    },
    openGraph: {
      title: "About | Durai Pon Singh",
      description:
        "Background, skills, and journey of a full-stack developer focused on scalable and modern web applications.",
      url: `${baseUrl}/about`,
    },
  },

  projects: {
    title: "Projects | Durai Pon Singh",
    description:
      "Explore full-stack, AI-powered, and modern web development projects built using MERN stack and Next.js.",
    keywords: [
      "Durai Pon Singh Projects",
      "Full Stack Projects",
      "MERN Projects",
      "Next.js Applications",
      "AI Web Apps",
    ],
    alternates: {
      canonical: `${baseUrl}/projects`,
    },
    openGraph: {
      title: "Projects | Durai Pon Singh",
      description:
        "A curated list of real-world full-stack and AI-powered projects.",
      url: `${baseUrl}/projects`,
    },
  },

  contact: {
    title: "Contact | Durai Pon Singh",
    description:
      "Get in touch with Durai Pon Singh for freelance projects, collaborations, or professional inquiries.",
    keywords: [
      "Contact Durai Pon Singh",
      "Hire Full Stack Developer",
      "Freelance Web Developer",
    ],
    alternates: {
      canonical: `${baseUrl}/contact`,
    },
    openGraph: {
      title: "Contact | Durai Pon Singh",
      description:
        "Reach out for collaborations, freelance work, or technical discussions.",
      url: `${baseUrl}/contact`,
    },
  },
};
