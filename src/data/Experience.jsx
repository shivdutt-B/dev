import Autonoms from "../assets/experience/autonoms.png";
import Deeplure from "../assets/experience/deeplure.png";
import ByteHint from "../assets/experience/bytehint.png";

const EXPERIENCE = [
  {
    company: "ByteHint",
    href: "https://bytehint.com",
    location: "Remote",
    title: "Full Stack Engineer",
    logoUrl: ByteHint,
    start: "Oct 2025",
    end: "Mar 2026",
    description:
      "Developed and enhanced the company website using Next.js with a strong focus on responsive design and UX. Integrated Strapi CMS and optimized performance, increasing Lighthouse scores from 63 to 91. Built a real-time alert system with AWS CloudWatch, SNS, and Spike.sh for an application with 150K+ active users.",
    achievements: [
      "Developed and enhanced the company website using Next.js with responsive design and UX focus",
      "Integrated Strapi CMS to streamline content management, reducing website update time by 60%",
      "Optimized performance and SEO, improving Lighthouse scores from 63 → 91",
      "Developed a real-time alert system with AWS CloudWatch, SNS, Spike.sh for 150K+ active users"
    ],
    duration: "6 Months"
  },
  {
    company: "Deeplure",
    href: "https://deeplure.org",
    location: "Remote",
    title: "DevOps Intern",
    logoUrl: Deeplure,
    start: "Aug 2025",
    end: "Sep 2025",
    description:
      "Orchestrated deployment of 3 microservices ensuring high availability and fault tolerance. Engineered CI/CD pipelines with GitHub Actions, reducing deployment effort by 90%. Containerized microservices using Docker for consistent environments across development and production.",
    achievements: [
      "Orchestrated deployment of 3 microservices, ensuring high availability and fault tolerance in production",
      "Engineered CI/CD pipelines with GitHub Actions, reducing deployment effort by 90%",
      "Secured deployment by managing 15+ secrets via Infisical, eliminating hardcoded credentials",
      "Containerized microservices using Docker, enabling consistent environments across dev and production",
      "Transformed workflow from manual to fully automated, cutting release time and improving deployment consistency"
    ],
    duration: "2 Months"
  },
  {
    company: "Autonoms",
    href: "",
    location: "Remote",
    title: "Co-Founder & Full Stack Engineer",
    logoUrl: Autonoms,
    start: "Sep 2024",
    end: "Oct 2024",
    description:
      "Co-founded & scaled a digital agency providing web dev, UI/UX, & SEO solutions for small & mid-sized businesses. Onboarded 4 clients within 2 months and delivered full-stack solutions 10% ahead of schedule.",
    achievements: [
      "Co-founded & scaled a digital agency providing web dev, UI/UX, & SEO solutions for SMBs",
      "Onboarded 4 clients within 2 months and delivered full-stack solutions 10% ahead of schedule",
      "Generated ₹40K+ revenue by acquiring and delivering solutions to multiple early-stage clients",
      "Owned end-to-end delivery, building & deploying websites with 100% on-time delivery",
      "Engineered a secure biometric attendance system, improving employee tracking accuracy"
    ],
    duration: "2 Months"
  },
];

export default EXPERIENCE;