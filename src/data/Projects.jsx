/*
href={project.href}
key={project.title}
title={project.title}
description={project.description}
tags={project.technologies}
image={project.image}
video={project.video}
inks={project.links}
*/

// Gorr Screenshots
import ss1 from "../assets/project-demo/gorr/ss1.png";
import ss2 from "../assets/project-demo/gorr/ss2.png";
import ss3 from "../assets/project-demo/gorr/ss3.png";
import ss4 from "../assets/project-demo/gorr/ss4.png";
import arch from "../assets/project-demo/gorr/gorr-architecture.jpg";

// Heimdall Screenshots
import heimdallSS1 from "../assets/project-demo/heimdall/ss1.png";
import heimdallSS2 from "../assets/project-demo/heimdall/ss2.png";
import heimdallSS3 from "../assets/project-demo/heimdall/ss3.png";
import heimdallSS4 from "../assets/project-demo/heimdall/ss4.png";  
import heimdallSS5 from "../assets/project-demo/heimdall/ss5.png";
import heimdallArch from "../assets/project-demo/heimdall/heimdall-architecture.jpg";
import { Icons } from "../Components/ui/icon";

// import { HomeIcon, NotebookIcon } from "lucide-react";

export const PROJECTS = [
  {
    id: "gorr",
    title: "Gorr",
    screenshots: [
      ss1,
      ss2,
      ss3,
      ss4,
      arch,
    ],
    image: ss1,
    description: "A production-grade deployment platform enabling real-time application deployment, monitoring, and live log streaming, built on top of AWS S3. Architected a microservices-based platform with live build monitoring and dynamic domain routing, handling 100+ concurrent deployments using AWS ECS. Engineered parallel containerized builds & deployments via AWS ECS & ECR, reducing server strain by 90%. Built a real-time logging system using Socket.IO & Redis to deliver logs with ≤100ms latency, and implemented reverse proxy-based dynamic routing to eliminate manual DNS configuration.",
    technologies: [
      "react",
      "nodejs",
      "express",
      "postgres",
      "prisma",
      "s3",
      "ecs",
      "ecr",
      "docker",
      "redis",
      "socketio",
    ],
    codeUrl: "https://github.com/shivdutt-B/gorr",
    liveUrl: "https://gorr-phi.vercel.app/",
    links: [
        {
          type: "Website",
          href: "https://gorr-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shivdutt-B/gorr",
        },
         {
          type: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=kSnP80ctjlw",
        },
      ],
  },
  {
    id: "heimdall",
    title: "Heimdall",
    video: "https://www.youtube.com/watch?v=-B-Hw2NKQGc", // YouTube embed link
    screenshots: [
      heimdallSS1,
      heimdallSS2,
      heimdallSS3,
      heimdallSS4,
      heimdallSS5,
      heimdallArch,
    ],
    image: "https://shivdutt.dev/assets/ss1-Wuk7AJcq.png", 
    description: "A server monitoring platform that prevents Render, Railway, & Fly.io servers from shutting down due to inactivity by automatically pinging at configurable intervals to eliminate cold starts and track real-time server stats. Built 5 microservices making 5K+ pings/day, eliminating 30–50s cold starts and ensuring zero downtime. Engineered auto-scaling job processing with BullMQ & Redis, handling 5K+ jobs with real-time failure alerts. Built a monitoring dashboard using React & Recharts, leveraging Recoil for caching to cut API calls by 70%, and automated deployment via GitHub Actions.",
    technologies: [
      "react",
      "nodejs",
      "express",
      "postgres",
      "prisma",
      "ec2",
      "docker",
      "redis",
      "nodemailer",
    ],
    codeUrl: "https://github.com/shivdutt-B/heimdall",
    liveUrl: "https://heimdall-pings.vercel.app/",
    links: [
        {
          type: "Website",
          href: "https://heimdall-pings.vercel.app/",
          icon: <Icons.globe className="h-4 w-4" />,
        },
        {
          type: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/shivdutt-B/heimdall",
        },
        {
          type: "Youtube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=-B-Hw2NKQGc",
        },
      ],
  },
];