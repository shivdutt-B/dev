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
      "Rebuilt company website in Next.js, delivering responsive design across 12 pages, boosting Lighthouse score from 44 to 91, driving average session duration from 1 min to 2.5 mins. Integrated Strapi CMS to centralize content management across 4 page templates, cutting website update time from 3.5 hrs to under 1 hr & enabling non-technical editors to publish independently without developers. Built an alert system using AWS CloudWatch, SNS & Spike.sh, auto-detecting ECS container failures for a 200K+ user app & triggering phone call alerts, cutting incident detection from 30 mins to under 2 mins.",
    achievements: [
      "Rebuilt company website in Next.js, delivering responsive design across <span class=\"font-bold text-blue-600\">12 pages</span>, boosting Lighthouse score from <span class=\"font-bold text-blue-600\">44 to 91</span>, driving average session duration from <span class=\"font-bold text-blue-600\">1 min to 2.5 mins</span>.",
      "Integrated Strapi CMS to centralize content management across <span class=\"font-bold text-blue-600\">4 page templates</span>, cutting website update time from <span class=\"font-bold text-blue-600\">3.5 hrs to under 1 hr</span> & enabling non-technical editors to publish independently without developers",
      "Built an alert system using AWS CloudWatch, SNS & Spike.sh, auto-detecting ECS container failures for a <span class=\"font-bold text-blue-600\">200K+</span> user app & triggering phone call alerts, cutting incident detection from <span class=\"font-bold text-blue-600\">30 mins to under 2 mins</span>."
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
      "Deployed 3 microservices via GitHub Actions CI/CD pipeline, automating 6+ manual steps & reducing release cycle from 1 hr to under 10 mins with zero manual intervention. Secured infra by managing 15+ secrets via Infisical, eliminating hardcoded credentials in production. Containerized 3 production microservices using Docker, enforcing consistent environments across development and production, reducing environment-related bugs from 7+ to near-zero per release cycle.",
    achievements: [
      "Deployed <span class=\"font-bold text-blue-600\">3 microservices</span> via GitHub Actions CI/CD pipeline, automating <span class=\"font-bold text-blue-600\">6+ manual steps</span> & reducing release cycle from <span class=\"font-bold text-blue-600\">1 hr to under 10 mins</span> with zero manual intervention.",
      "Secured infra by managing <span class=\"font-bold text-blue-600\">15+ secrets</span> via Infisical, eliminating hardcoded credentials in production",
      "Containerized <span class=\"font-bold text-blue-600\">3 production microservices</span> using Docker, enforcing consistent environments across development and production, reducing environment-related bugs from <span class=\"font-bold text-blue-600\">7+ to near-zero</span> per release cycle"
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
      "Co-founded & scaled a digital agency serving small to medium-scale businesses with web development, UI/UX, & SEO solutions, onboarding 4 clients within 2 months & generating ₹40K+ in revenue from zero. Delivered 5 projects successfully, driving a 30% increase in user engagement, resulting in 2 client referrals. Built a biometric attendance system for 50+ workers, cutting manual errors by 90%, saved 3+ HR hrs/week.",
    achievements: [
      "Co-founded & scaled a digital agency serving small to medium-scale businesses with web development, UI/UX, & SEO solutions, onboarding <span class=\"font-bold text-blue-600\">4 clients</span> within <span class=\"font-bold text-blue-600\">2 months</span> & generating <span class=\"font-bold text-blue-600\">₹40K+</span> in revenue from zero",
      "Delivered <span class=\"font-bold text-blue-600\">5 projects</span> successfully, driving a <span class=\"font-bold text-blue-600\">30%</span> increase in user engagement, resulting in <span class=\"font-bold text-blue-600\">2 client referrals</span>.",
      "Built a biometric attendance system for <span class=\"font-bold text-blue-600\">50+ workers</span>, cutting manual errors by <span class=\"font-bold text-blue-600\">90%</span>, saved <span class=\"font-bold text-blue-600\">3+ HR hrs/week</span>"
    ],
    duration: "2 Months"
  },
];

export default EXPERIENCE;