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
    description: "GORR is a microservices-based deployment platform that lets you deploy and monitor applications in real time. It provides live logs, scalable deployments, and efficient resource management using cloud services like AWS. Architected with microservices handling APIs, builds, monitoring & dynamic routing. Leveraged AWS ECS & S3 for containerized builds and parallel deployments. Built real-time monitoring using Socket.IO and Redis, with reverse proxy–based dynamic routing for custom domains.",
    technologies: [
      "react",
      "nodejs",
      "express",
      "postgresql",
      "prisma",
      "aws",
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
    description: "Heimdall is a monitoring platform that keeps backend servers active & tracks their performance by automatically sending pings at regular intervals, preventing 30–50s cold starts on platforms like Render, Railway, & Fly.io. Developed 6 microservices for APIs, uptime monitoring, job processing, load balancing, and alerting. Implemented auto-scaling background job processing using BullMQ & Redis, with real-time alerts on failures and a monitoring dashboard displaying uptime, latency, and system metrics.",
    technologies: [
      "react",
      "nodejs",
      "express",
      "postgresql",
      "prisma",
      "aws",
      "docker",
      "redis",
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