import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Alex Carter",
    company: "NextGen VR",
    image: user1,
    text: "VirTuLabVR made our onboarding seamless and our team collaboration more effective than ever before!",
  },
  {
    user: "Priya Patel",
    company: "Immersive Labs",
    image: user2,
    text: "The intuitive interface and real-time preview features helped us launch our VR project ahead of schedule.",
  },
  {
    user: "Liam Nguyen",
    company: "Visionary Studios",
    image: user3,
    text: "We love the built-in templates and analytics dashboard. It’s a game-changer for our workflow.",
  },
  {
    user: "Sara Kim",
    company: "MetaWorks",
    image: user4,
    text: "The support team is fantastic and the platform is packed with features that save us time every day.",
  },
  {
    user: "Carlos Rivera",
    company: "VR Creators Guild",
    image: user5,
    text: "Collaboration tools are top-notch. Our distributed team works together as if we’re in the same room!",
  },
  {
    user: "Mia Chen",
    company: "Synergy XR",
    image: user6,
    text: "VirTuLabVR’s analytics and multi-platform support helped us reach a wider audience with ease.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Quickly build VR scenes with a simple drag-and-drop editor, no coding required!",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Deploy your VR experiences to web, mobile, and headset devices with a single click.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Choose from a library of ready-made templates to jumpstart your next VR project.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "See your changes instantly with real-time previews and fast feedback loops.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Invite teammates and work together live on the same VR environment, anywhere in the world.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Track user engagement and performance with a powerful, integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Easy Onboarding",
    description:
      "Get started in minutes with our guided setup and helpful documentation.",
  },
  {
    title: "Secure Collaboration",
    description:
      "Work securely with your team using advanced permission controls.",
  },
  {
    title: "AI-Powered Assistance",
    description:
      "Boost productivity with smart suggestions and automated workflows.",
  },
  {
    title: "Instant Sharing",
    description:
      "Share your VR creations instantly with a single link.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Unlimited public projects",
      "1 GB Storage",
      "Basic Analytics",
      "Community Support",
    ],
  },
  {
    title: "Pro",
    price: "$15",
    features: [
      "Unlimited private projects",
      "50 GB Storage",
      "Advanced Analytics",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "$299",
    features: [
      "Custom integrations",
      "Unlimited Storage",
      "Dedicated Account Manager",
      "Enterprise Security",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
