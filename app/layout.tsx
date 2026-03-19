import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rohit-singh.space"), // Replace with actual domain before deployment
  title: "Rohit Singh — Frontend Engineer",
  description:
    "Specializing in architecting high-performance Agentic AI platforms and scalable multi-tenant dashboards with React and Next.js",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Agentic AI",
    "Rohit Singh",
  ],
  authors: [{ name: "Rohit Singh" }],
  openGraph: {
    title: "Rohit Singh — Frontend Engineer",
    description:
      "Specializing in architecting high-performance Agentic AI platforms and scalable multi-tenant dashboards.",
    type: "website",
    url: "https://www.rohit-singh.space",
    siteName: "Rohit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Singh — Frontend Engineer",
    description:
      "Specializing in architecting high-performance Agentic AI platforms and scalable multi-tenant dashboards with React and Next.js",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${newsreader.className} antialiased bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen relative flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-fluid-gradient dark:bg-fluid-gradient-dark -z-10"></div>
          <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-300/10 dark:bg-blue-500/5 blur-[120px] pointer-events-none -z-10"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-300/10 dark:bg-purple-500/5 blur-[120px] pointer-events-none -z-10"></div>

          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
