# 🌐 Keyur Panchal — Personal Portfolio (`keyur.dev`)

[![Live Website](https://img.shields.io/badge/Live%20Website-keyurdev.in-00D4FF?style=for-the-badge&logo=google-chrome&logoColor=black)](https://keyurdev.in)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.8-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animations-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20with-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

> A modern, high-performance developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **GSAP**. Designed with a futuristic dark-space aesthetic, fluid micro-interactions, responsive typography, and an interactive terminal experience.

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Live Preview](#-live-preview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development Server](#development-server)
  - [Building for Production](#building-for-production)
- [Deployment Workflow](#-deployment-workflow)
- [Projects Featured on the Portfolio](#-projects-featured-on-the-portfolio)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 👨‍💻 Introduction

This repository houses the source code for the personal portfolio of **Keyur Panchal** ([keyurdev.in](https://keyurdev.in)), a **Full Stack & Node.js Developer** based in Ahmedabad, India.

The portfolio serves as an interactive showcase of:
- Production-grade full-stack and backend engineering capabilities.
- Real-world REST APIs, microservices, and distributed architecture projects.
- UI/UX design sensibilities using modern typography, sleek neon-cyan accents (`#00D4FF`), and GSAP physics-based scroll triggers.

---

## 🚀 Live Preview

The website is continuously deployed from the `main` branch to GitHub Pages on a custom domain:

🔗 **[https://keyurdev.in](https://keyurdev.in)**

---

## ✨ Key Features

- **⚡ Next.js 16 App Router & React 19:** Powered by the latest Next.js architecture with static site export (`output: "export"`) for instant page delivery.
- **🎨 Dark Minimalist Neon Aesthetic:** Deep space background palette (`#0A0A10`), accented with high-contrast electric cyan (`#00D4FF`) and subdued slate typography (`#858597`).
- **🪄 GSAP & ScrollTrigger Animations:**
  - Dynamic typewriter and code-cycling terminal in the Hero section.
  - Interactive HTML5 canvas particle field (`Particles.tsx`).
  - Staggered scroll-reveals on navigation links, section titles, tech badges, and cards.
  - Custom SVG border separator animations (`AnimateSeparator.tsx`).
- **📁 Filterable Project Showcase:** Filter projects seamlessly across categories (`ALL`, `FEATURED`, `OPEN SOURCE`) with detailed tech tags and direct GitHub repository links.
- **💼 Professional Journey & Experience:** Dedicated timeline tracing career progression from Node.js backend development to full-stack engineering.
- **📬 Working Contact Form via EmailJS:** Client-side email dispatching integrated with [EmailJS](https://www.emailjs.com/) with loading indicators, validation, and real-time status updates.
- **📄 Instant Resume Access:** One-click direct resume download action.
- **📱 Responsive & Accessible Layout:** Mobile drawer menu (`MobileNavbar.tsx`), optimized layouts across all device viewports, and custom web fonts (**Inter** and **JetBrains Mono** via `next/font`).

---

## 🛠️ Tech Stack

### Core Technologies

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) | React Framework (App Router, Static Export) |
| **UI Library** | [React 19](https://react.dev/) | Component architecture & modern hooks |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type-safe static analysis |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first styling engine |
| **Animations** | [GSAP 3](https://greensock.com/gsap/) + [@gsap/react](https://www.npmjs.com/package/@gsap/react) | High-performance timeline & ScrollTrigger animations |
| **UI Primitives** | [Base UI](https://base-ui.com/) / [Shadcn UI](https://ui.shadcn.com/) | Accessible headless component foundations |
| **Icons** | [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) | Vector icons for UI & brand links |
| **Email Service** | [@emailjs/browser](https://www.emailjs.com/) | Contact form serverless email delivery |
| **Deployment** | [GitHub Actions](https://github.com/features/actions) + [GitHub Pages](https://pages.github.com/) | Automated CI/CD static site pipeline |

---

## 📂 Project Structure

```text
personalportfolio/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions workflow for building & deploying to Pages
├── public/
│   ├── Keyur Panchal Resume.pdf# Resume file available for download
│   ├── next.svg                # Next.js asset
│   └── vercel.svg              # Vercel asset
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx        # /about page (Bio, Experience, Tech stack)
│   │   ├── contact/
│   │   │   └── page.tsx        # /contact page (Contact info & interactive form)
│   │   ├── projects/
│   │   │   └── page.tsx        # /projects page (Filterable project gallery)
│   │   ├── globals.css         # Tailwind CSS imports & custom variables
│   │   ├── layout.tsx          # Root layout (Fonts, Navbar, Footer, Meta)
│   │   └── page.tsx            # Home page (Hero, TechStack, Projects, CTA)
│   ├── components/
│   │   ├── custom/             # Custom portfolio feature components
│   │   │   ├── AboutHome.tsx
│   │   │   ├── AnimateSeparator.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── ContactHome.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LetsBuild.tsx
│   │   │   ├── MobileNavbar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Particles.tsx
│   │   │   ├── ProjectSection.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── TechCard.tsx
│   │   │   └── TechStack.tsx
│   │   └── ui/                 # Reusable UI primitives (Button, Card, Input, Textarea, Field)
│   ├── constants/
│   │   ├── experience.ts       # Experience timeline data
│   │   ├── projects.ts         # Portfolio projects list & metadata
│   │   └── sociallinks.tsx     # Social profile handles & icons
│   ├── hooks/
│   │   └── useSelectionAnimation.ts # Custom GSAP selection hooks
│   └── lib/
│       ├── gsap.ts             # GSAP & ScrollTrigger registration
│       └── utils.ts            # Class name merge utilities (cn)
├── CNAME                       # Custom domain definition (keyurdev.in)
├── next.config.ts              # Next.js configuration (output: "export")
├── package.json                # Project dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🚦 Getting Started

Follow these instructions to run a local copy of the project on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `20.x` or higher recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PanchalKeyur0806/Portfolio.git
   cd Portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

### Environment Variables

To enable the contact form functionality, create a `.env` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

> **Note:** If you do not configure EmailJS credentials, all pages will function normally, but contact form submissions will fail.

### Development Server

Start the local development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### Building for Production

To create an optimized production static build:

```bash
npm run build
```

The static HTML, CSS, and JavaScript bundles will be exported directly to the `./out` directory (configured via `output: "export"` in `next.config.ts`).

To preview the production build locally:

```bash
npx serve out
```

---

## 🚢 Deployment Workflow

The site is configured for continuous deployment using **GitHub Actions** (`.github/workflows/nextjs.yml`):

1. Any push to the `main` branch automatically triggers the workflow.
2. The action sets up Node.js 20, caches dependencies, injects EmailJS environment secrets, and executes `next build`.
3. The resulting `./out` export is packaged and deployed to **GitHub Pages**.
4. The `CNAME` file directs GitHub Pages to serve the site through [keyurdev.in](https://keyurdev.in).

---

## 💼 Projects Featured on the Portfolio

Here are some of the key projects showcased on this portfolio:

| Project | Type | Description | Stack |
| :--- | :--- | :--- | :--- |
| **[BookStore API](https://github.com/PanchalKeyur0806/BookStore)** | Featured | Robust backend bookstore API with auth, caching, job queues, and payment integration. | Node.js, Express, MongoDB, Redis, BullMQ, Stripe, Docker |
| **[Authentication API](https://github.com/PanchalKeyur0806/authenticationApi)** | Open Source | Modular authentication and authorization microservice backend. | Node.js, Express, Passport.js, JWT, MongoDB, Docker |
| **[URL Shortener](https://github.com/PanchalKeyur0806/url-shortener)** | Open Source | Fast link shortener with redirect handling, analytics, and payment gateway. | Node.js, Express, MongoDB, EJS, Stripe |
| **[Property Listing Platform](https://github.com/PanchalKeyur0806/Property_Listing)** | Open Source | Real estate property management and listing service. | Node.js, Express, MongoDB, Mongoose, REST API |
| **[FindJob REST API](https://github.com/PanchalKeyur0806/Findjob-Rest-Api)** | Open Source | Job discovery and recruitment platform backend with MVC architecture. | Node.js, Express, MongoDB, JWT, Bcrypt |
| **[FindJob Frontend](https://github.com/PanchalKeyur0806/Findjob-Frontend-Code)** | Open Source | Job portal interface with responsive design and search workflows. | React.js, JavaScript, HTML5, CSS3, REST API |
| **[Personal Portfolio](https://github.com/PanchalKeyur0806/Portfolio)** | Featured | This portfolio website showcasing projects, skills, and interactive UI. | Next.js 16, React 19, Tailwind CSS v4, GSAP |

---

## 📬 Contact & Connect

Feel free to connect or reach out for collaboration, freelance work, or full-time opportunities:

- **Portfolio:** [https://keyurdev.in](https://keyurdev.in)
- **GitHub:** [@PanchalKeyur0806](https://github.com/PanchalKeyur0806)
- **LinkedIn:** [Keyur Panchal](https://www.linkedin.com/in/keyur-panchal-7a04a0361)
- **Medium:** [@panchalkeyur.dev](https://medium.com/@panchalkeyur.dev)
- **Email:** [panchalkeyur694@gmail.com](mailto:panchalkeyur694@gmail.com)
- **Location:** Ahmedabad, Gujarat, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore the code, use it as inspiration for your own portfolio, and give it a star ⭐ if you find it helpful!
