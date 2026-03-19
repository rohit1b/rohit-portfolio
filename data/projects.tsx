import React from "react";
import {
  Zap,
  MessageSquare,
  FileText,
  Star,
  Mic,
  Database,
  Globe,
} from "lucide-react";

export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  badgeColor: string;
  accentColor: string;
  bgGradient: string;
  highlightStat?: { value: string; label: string };
  tags: string[];
  icon: React.ReactNode;
  featured?: boolean;
  link?: string;
  // Dynamic page specific fields
  longDescription?: string;
  features?: string[];
  images?: string[];
  video?: string;
  imageUrl?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "knowwhr",
    title: "Knowwhr",
    subtitle: "Student Campus Marketplace",
    description:
      "A centralized platform empowering students to exchange, rent, and collaborate. From trading textbooks to sharing code projects, Knowwhr builds micro-economies within campus communities.",
    badge: "Marketplace",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
    accentColor: "text-amber-600",
    bgGradient: "from-slate-50 to-amber-50/40",
    highlightStat: { value: "P2P", label: "Campus Network" },
    tags: ["Next.js", "Marketplace", "Stripe", "Supabase", "Tailwind"],
    icon: <Globe className="w-5 h-5" />,
    link: "https://knowwhr.vercel.app/",
    longDescription:
      "Knowwhr is a peer-to-peer campus marketplace designed for students. It acts as a centralized platform empowering students to exchange, rent goods, and collaborate on projects. Features include secure payments, project sharing, and customized student-only deals, effectively building dedicated micro-economies within university campuses.",
    features: [
      "Peer-to-Peer Textbook & Gadget Rentals",
      "Code & Project Submission Trading",
      "Secure Campus-Only Verification",
      "Real-Time Messaging & Marketplace",
    ],
  },
  {
    id: 2,
    slug: "linkfolio",
    title: "LINKFOLIO",
    subtitle: "Next.js Portfolio Builder",
    description:
      "A Next.js portfolio builder integrating LinkedIn API for automated profile parsing. Features an ATS-optimized PDF engine delivering high-fidelity exports in under 500ms.",
    badge: "Open Source",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    accentColor: "text-blue-600",
    bgGradient: "from-slate-50 to-blue-50/40",
    highlightStat: { value: "100+", label: "Profiles Processed" },
    tags: ["Next.js", "LinkedIn API", "html2pdf.js", "Tailwind CSS"],
    icon: <FileText className="w-5 h-5" />,
    link: "#",
    longDescription:
      "LINKFOLIO is a Next.js portfolio builder integrating LinkedIn API for automated profile parsing. It leverages centralized state management to implement modular layout transitions and persistent data visibility preferences.",
    features: [
      "LinkedIn API Integration for Profile Parsing",
      "ATS-optimized PDF Engine (<500ms export)",
      "Modular Layout Transitions",
      "Persistent Data Visibility Preferences",
    ],
  },
  {
    id: 3,
    slug: "hush",
    title: "HUSH",
    subtitle: "Real-Time Chat Application",
    description:
      "A real-time encrypted chat application demonstrating deep WebSocket mastery. Features presence detection, typing indicators, message persistence, and end-to-end real-time sync — all built with a clean, minimal UI.",
    badge: "WebSocket App",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    accentColor: "text-orange-600",
    bgGradient: "from-slate-50 to-orange-50/40",
    highlightStat: { value: "RT", label: "WebSocket Sync" },
    tags: ["Next.js", "Socket.IO", "Encryption"],
    icon: <MessageSquare className="w-5 h-5" />,
    link: "#",
  },
];
