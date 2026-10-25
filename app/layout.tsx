import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Body font — variable font, no weight declaration needed
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Heading font — variable font, no weight declaration needed
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dinesh Padhi | Software Developer",
  description:
    "Portfolio of Dinesh Padhi, a Software Developer with ~1.5 years of experience building responsive web applications using React.js, Next.js, and TypeScript. Featured projects include JUMP Revenue Intelligence Platform and Hoshi HRMS.",
  keywords: [
    "Dinesh Padhi",
    "Software Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Dinesh Padhi", url: "https://github.com/Dinesh-171" }],
  creator: "Dinesh Padhi",
  openGraph: {
    title: "Dinesh Padhi | Software Developer",
    description:
      "Portfolio of Dinesh Padhi, a Software Developer with ~1.5 years of experience building responsive web applications using React.js, Next.js, and TypeScript. Featured projects include JUMP and Hoshi HRMS.",
    type: "website",
    siteName: "Dinesh Padhi Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Dinesh Padhi | Software Developer",
    description:
      "Portfolio of Dinesh Padhi, a Software Developer with ~1.5 years of experience building responsive web applications using React.js, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
