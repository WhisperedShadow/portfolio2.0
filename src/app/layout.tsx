import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/layout/Nav/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Durai Pon Singh | Portfolio",
  description:
    "Full-stack web developer specializing in MERN, AI-powered apps, and modern UI/UX.",
    keywords:[
      "Durai Pon Singh",
      "Portfolio",
      "Full-stack Developer",
      "MERN Stack",
      "AI-powered Applications",
      "Web Development",
      "UI/UX Design",
      "JavaScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Next.js",
      "Frontend Development",
      "Backend Development",
      "Software Engineer",
      "duraiponsingh"
    ],
  authors: [{ name: "Durai Pon Singh", url: "https://duraiponsingh.tech" }],
  creator: "Durai Pon Singh",
  openGraph: {
    title: "Durai Pon Singh | Portfolio",
    description:
      "Full-stack web developer specializing in MERN, AI-powered apps, and modern UI/UX.",
    url: "https://duraiponsingh.tech",
    siteName: "Durai Pon Singh Portfolio",
    images: [
      {
        url: "https://duraiponsingh.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Durai Pon Singh Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
