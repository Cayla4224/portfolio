import React, { useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileDown,
  Globe,
  MoonStar,
  SunMedium,
  ExternalLink,
  TerminalSquare,
  Database,
  Cloud,
  Boxes,
} from "lucide-react";
import { motion } from "framer-motion";

// ==== Customize these objects with your info ====
const profile = {
  name: "Cayla Smith",
  role: "Full-Stack Developer · Software Engineer",
  summary:
    "I design and build scalable web apps with clean architectures, delightful UX, and measurable business impact.",
  location: "City, Country",
  availability: "Open to full-time · contract · remote",
  resumeUrl: "#", // e.g. "/resume.pdf"
  email: "crodri0297@gmail.com",
};

const social = {
  githubUrl: "https://github.com/Cayla4224",
  linkedinUrl: "https://www.linkedin.com/in/cayla-smith-b5707932a",
  websiteUrl: "https://yourdomain.dev",
};

const tech = {
  primary: [
    { label: "TypeScript" },
    { label: "React" },
    { label: "Next.js" },
    { label: "Node.js" },
    { label: "Express" },
    { label: "PostgreSQL" },
    { label: "MongoDB" },
    { label: "Docker" },
    { label: "AWS" },
    { label: "CI/CD" },
  ],
  familiar: [
    { label: "GraphQL" },
    { label: "Redis" },
    { label: "Prisma" },
    { label: "Tailwind CSS" },
    { label: "Cypress" },
    { label: "Jest" },
  ],
};

const projects = [
  {
    title: "SaaS Starter Kit",
    blurb:
      "Subscription SaaS with auth, billing, dashboards, and role-based access.",
    impact: "Time-to-MVP cut by 60%; 94 Lighthouse performance score.",
    tags: ["Next.js", "tRPC", "Stripe", "Postgres", "Prisma"],
    links: { live: "#", code: "#", case: "#" },
    image:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Real-Time Trading Dashboard",
    blurb:
      "WebSocket-driven market feed with alerting, charts, and custom watchlists.",
    impact: "P95 latency under 120ms; 40% faster symbol search via index tuning.",
    tags: ["React", "Node", "WebSockets", "Redis", "Docker"],
    links: { live: "#", code: "#", case: "#" },
    image:
      "https://images.unsplash.com/photo-1518186233392-c232efbf2373?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Microservices",
    blurb:
      "Checkout, inventory, and fulfillment split into independent services.",
    impact: "Downtime reduced 80% after migration; horizontal scaling on demand.",
    tags: ["Kubernetes", "gRPC", "Go", "MongoDB", "AWS"],
    links: { live: "#", code: "#", case: "#" },
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
];

// ==== Small UI helpers ====
const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm border-white/15 bg-white/5">
    {children}
  </span>
);

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-24">
    <div className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-center gap-3">
        {icon}
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default function App() {
  const [dark, setDark] = useState(true);
  const theme = useMemo(
    () => (dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"),
    [dark]
  );

  return (
    <div className={`${theme} min-h-screen transition-colors duration-300`}>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b backdrop-blur supports-[backdrop-filter]:bg-white/30 border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2">
            <TerminalSquare className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wide">
              {profile.name}
            </span>
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#projects" className="opacity-80 hover:opacity-100">
              Projects
            </a>
            <a href="#stack" className="opacity-80 hover:opacity-100">
              Stack
            </a>
            <a href="#contact" className="opacity-80 hover:opacity-100">
              Contact
            </a>
          </nav>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-1.5 text-sm font-medium border-white/15 hover:bg-white/5"
          >
            {dark ? (
              <>
                <SunMedium className="h-4 w-4" /> Light
              </>
            ) : (
              <>
                <MoonStar className="h-4 w-4" /> Dark
              </>
            )}
          </button>
        </div>
      </header>

      {/* Hero */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg opacity-90">{profile.role}</p>
            <p className="mt-6 max-w-prose text-base opacity-80">
              {profile.summary}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Pill>{profile.location}</Pill>
              <Pill>{profile.availability}</Pill>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold border-white/15 hover:bg-white/5"
              >
                <FileDown className="h-4 w-4" /> Download Résumé
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </a>
              <a
                href={social.githubUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium border-white/15 hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={social.linkedinUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium border-white/15 hover:bg-white/5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={social.websiteUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium border-white/15 hover:bg-white/5"
              >
                <Globe className="h-4 w-4" /> Website
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-3xl blur-3xl opacity-20 bg-gradient-to-tr from-blue-500 to-violet-500" />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Boxes className="h-4 w-4" /> Frontend
                  </div>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind / CSS</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Database className="h-4 w-4" /> Backend
                  </div>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>Node / Express</li>
                    <li>Postgres / Mongo</li>
                    <li>Auth / APIs</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Cloud className="h-4 w-4" /> DevOps
                  </div>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>AWS / Docker</li>
                    <li>CI/CD · Tests</li>
                    <li>Observability</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <TerminalSquare className="h-4 w-4" /> Extras
                  </div>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>GraphQL / tRPC</li>
                    <li>Redis · Queues</li>
                    <li>WebSockets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <Section
        id="projects"
        title="Featured Projects"
        icon={<ExternalLink className="h-5 w-5 opacity-80" />}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm opacity-90">{p.blurb}</p>
                <p className="mt-2 text-xs opacity-70">{p.impact}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/15 px-2 py-1 text-xs opacity-90"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 text-sm">
                  <a href={p.links.live} className="opacity-90 hover:opacity-100">
                    Live
                  </a>
                  <span className="opacity-30">•</span>
                  <a href={p.links.code} className="opacity-90 hover:opacity-100">
                    Code
                  </a>
                  <span className="opacity-30">•</span>
                  <a href={p.links.case} className="opacity-90 hover:opacity-100">
                    Case Study
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Stack */}
      <Section
        id="stack"
        title="Tech Stack"
        icon={<Boxes className="h-5 w-5 opacity-80" />}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold tracking-wide opacity-90">
              Primary
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.primary.map((t) => (
                <Pill key={t.label}>{t.label}</Pill>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-sm font-semibold tracking-wide opacity-90">
              Also familiar with
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {tech.familiar.map((t) => (
                <Pill key={t.label}>{t.label}</Pill>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact" icon={<Mail className="h-5 w-5 opacity-80" />}>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                Let’s build something great together
              </h3>
              <p className="mt-1 max-w-prose text-sm opacity-80">
                I’m available for full-time roles and select freelance engagements.
                Send a note about your project, timeline, and goals.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={profile.email}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={social.githubUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium border-white/15 hover:bg-white/5"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={social.linkedinUrl}
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium border-white/15 hover:bg-white/5"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-xs opacity-70">
        <div className="mx-auto max-w-6xl px-6">
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
}
