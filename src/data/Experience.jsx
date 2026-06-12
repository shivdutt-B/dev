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
      "Rebuilt company website in Next.js, delivering responsive design and cutting bounce rate by 15%. Integrated Strapi CMS, standardizing content management and reducing website update time by 70%. Resolved performance bottlenecks, boosting Lighthouse scores 44 to 91 and reducing page load time by 30%. Built an alert system using AWS CloudWatch, SNS & Spike.sh for an application with 200K+ active users.",
    achievements: [
      "Rebuilt company website in <span class=\"font-bold text-blue-600\">Next.js</span>, delivering responsive design and cutting bounce rate by <span class=\"font-bold text-blue-600\">15%</span>",
      "Integrated <span class=\"font-bold text-blue-600\">Strapi CMS</span>, standardizing content management and reducing website update time by <span class=\"font-bold text-blue-600\">70%</span>",
      "Resolved performance bottlenecks, boosting <span class=\"font-bold text-blue-600\">Lighthouse scores</span> from <span class=\"font-bold text-blue-600\">44 to 91</span> and reducing page load time by <span class=\"font-bold text-blue-600\">30%</span>",
      "Built an alert system using <span class=\"font-bold text-blue-600\">AWS CloudWatch, SNS & Spike.sh</span> for an application with <span class=\"font-bold text-blue-600\">200K+</span> active users"
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
      "Deployed 3 microservices via GitHub Actions CI/CD pipeline, cutting deployment efforts by 90%. Secured infra by managing 15+ secrets via Infisical, eliminating hardcoded credentials in production. Containerized 3 production microservices using Docker, enforcing consistent environments across development and production, eliminating environment-related bugs by 80%.",
    achievements: [
      "Deployed <span class=\"font-bold text-blue-600\">3 microservices</span> via <span class=\"font-bold text-blue-600\">GitHub Actions CI/CD pipeline</span>, cutting deployment efforts by <span class=\"font-bold text-blue-600\">90%</span>",
      "Secured infra by managing <span class=\"font-bold text-blue-600\">15+ secrets</span> via <span class=\"font-bold text-blue-600\">Infisical</span>, eliminating hardcoded credentials in production",
      "Containerized <span class=\"font-bold text-blue-600\">3 production microservices</span> using <span class=\"font-bold text-blue-600\">Docker</span>, enforcing consistent environments across development, and production, eliminating environment-related bugs by <span class=\"font-bold text-blue-600\">80%</span>"
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
      "Co-founded & scaled a digital agency serving small to medium-scale businesses with web development, UI/UX, & SEO solutions, onboarding 4 clients within 2 months & generating ₹40K+ in revenue from zero. Delivered multiple projects with 100% on-time completion, driving a 30% increase in user engagement. Built a biometric attendance system(fingerprint), cutting manual errors by 90% & saved 3+ HR hrs/week.",
    achievements: [
      "Co-founded & scaled a digital agency serving small to medium-scale businesses with <span class=\"font-bold text-blue-600\">web development, UI/UX, & SEO solutions</span>, onboarding <span class=\"font-bold text-blue-600\">4 clients</span> within <span class=\"font-bold text-blue-600\">2 months</span> & generating <span class=\"font-bold text-blue-600\">₹40K+</span> in revenue from <span class=\"font-bold text-blue-600\">zero</span>",
      "Delivered multiple projects with <span class=\"font-bold text-blue-600\">100%</span> on-time completion, driving a <span class=\"font-bold text-blue-600\">30%</span> increase in user engagement",
      "Built a <span class=\"font-bold text-blue-600\">biometric attendance system(fingerprint)</span>, cutting manual errors by <span class=\"font-bold text-blue-600\">90%</span> & saved <span class=\"font-bold text-blue-600\">3+ HR hrs/week</span>"
    ],
    duration: "2 Months"
  },
];

export default EXPERIENCE;