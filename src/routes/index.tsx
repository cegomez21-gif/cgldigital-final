import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Layout,
  Building2,
  RefreshCw,
  MessageCircle,
  Mail,
  Server,
  Zap,
  Target,
  Check,
  Sparkles,
  Gauge,
  Rocket,
  Palette,
  Search,
  Send,
} from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import portfolioVet from "@/assets/portfolio-vet.jpg";
import portfolioDental from "@/assets/portfolio-dental.jpg";
import portfolioCorporate from "@/assets/portfolio-corporate.jpg";
import portfolioRestaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioRealestate from "@/assets/portfolio-realestate.jpg";

export const Route = createFileRoute("/")({
  component: Landing,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("fade-up");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Landing() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-[#080808] text-foreground">
      {/* ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.25),transparent)] blur-3xl" />
        <div className="absolute top-[40%] -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(147,51,234,0.18),transparent)] blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(88,28,135,0.2),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-violet text-sm font-bold text-white">
        C
        <span className="absolute inset-0 -z-10 rounded-full blur-md gradient-violet opacity-60" />
      </span>
      <span className="text-[15px] font-semibold tracking-tight">CGL Digital</span>
    </a>
  );
}

function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header id="top" className="sticky top-4 z-50 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 sm:top-6">
      <div className="flex w-full items-center justify-between gap-4 rounded-full glass px-4 py-2.5 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full gradient-violet px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,58,237,0.6)] transition-transform hover:scale-[1.02]"
        >
          <span className="hidden sm:inline">Request a Quote</span>
          <span className="sm:hidden">Quote</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 pt-16 pb-24 sm:pt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 lg:pt-28 lg:pb-32">
      <div data-reveal className="min-w-0">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-violet [animation:pulseGlow_2s_ease-in-out_infinite]" />
          Premium Digital Studio
        </span>
        <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
          Landing Pages that build{" "}
          <span className="gradient-text">trust</span> and attract customers.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          We build modern, fast and conversion-focused websites that help businesses stand out online and generate more customer inquiries.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full gradient-violet px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:scale-[1.02]"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            View Portfolio
          </a>
        </div>
      </div>

      <div data-reveal className="relative min-w-0">
        <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2rem] gradient-violet opacity-30 blur-3xl" />
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-2xl glow-violet">
          <img
            src={heroMockup}
            alt="Preview of a premium veterinary clinic landing page designed by CGL Digital"
            width={1408}
            height={1024}
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div data-reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-violet" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Services() {
  const items = [
    { icon: Layout, title: "Landing Pages", desc: "High-conversion single pages built to turn visitors into customers." },
    { icon: Building2, title: "Corporate Websites", desc: "Multi-page sites that communicate authority and clarity." },
    { icon: RefreshCw, title: "Website Redesign", desc: "Modernize outdated sites without losing brand identity." },
    { icon: MessageCircle, title: "WhatsApp Integration", desc: "Direct chat, quick replies and one-tap client contact." },
    { icon: Mail, title: "Contact Forms", desc: "Validated, spam-safe forms wired to your inbox or CRM." },
    { icon: Server, title: "Hosting & Domain Guidance", desc: "Setup advice, DNS help and reliable hosting choices." },
    { icon: Zap, title: "Basic Business Automation", desc: "Simple workflows that save hours of repetitive work." },
    { icon: Target, title: "Lead Generation Solutions", desc: "Landing systems designed to capture qualified leads." },
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Services" title="Our Services" subtitle="Everything you need to launch a website that looks premium and performs." />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.title}
            data-reveal
            style={{ animationDelay: `${i * 40}ms` }}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-violet/40 hover:bg-white/[0.04]"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.15),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-violet transition-transform duration-500 group-hover:scale-105 group-hover:text-white">
              <it.icon className="h-5 w-5" strokeWidth={1.5} />
            </div>
            <h3 className="mt-5 text-[15px] font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Layout, title: "Modern responsive design" },
    { icon: Gauge, title: "Fast loading performance" },
    { icon: Target, title: "Conversion-focused layouts" },
    { icon: MessageCircle, title: "Professional communication" },
    { icon: Search, title: "SEO-ready structure" },
    { icon: Palette, title: "Premium visual design" },
    { icon: Sparkles, title: "Designed for small businesses" },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Why us" title="Why Choose CGL Digital" subtitle="What our clients get, every time." />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            data-reveal
            className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-violet/30 hover:bg-white/[0.04]"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-violet text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.7)]">
              <it.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
            </div>
            <span className="text-sm font-medium">{it.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Discovery", desc: "We learn your goals, audience and competitors.", icon: Search },
    { n: "02", title: "Design", desc: "Wireframes and high-fidelity mockups you approve.", icon: Palette },
    { n: "03", title: "Development", desc: "Fast, responsive and SEO-ready implementation.", icon: Zap },
    { n: "04", title: "Launch", desc: "Go live with hosting, domain and analytics wired up.", icon: Rocket },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Process" title="Our Process" subtitle="A clear, elegant path from idea to launch." />
      <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div aria-hidden className="pointer-events-none absolute top-14 left-6 right-6 hidden h-px bg-gradient-to-r from-transparent via-violet/40 to-transparent lg:block" />
        {steps.map((s) => (
          <div key={s.n} data-reveal className="relative rounded-2xl border border-white/[0.06] bg-[#0d0d0d]/80 p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-violet/40 bg-violet/10 text-violet">
                <s.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-mono text-muted-foreground">{s.n}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    { img: portfolioVet, title: "Veterinary Clinic", tag: "Landing Page" },
    { img: portfolioDental, title: "Dental Clinic", tag: "Corporate Website" },
    { img: portfolioCorporate, title: "Corporate Website", tag: "Redesign" },
    { img: portfolioRestaurant, title: "Restaurant", tag: "Landing Page" },
    { img: portfolioRealestate, title: "Real Estate", tag: "Corporate Website" },
  ];
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Portfolio" title="Selected Work" subtitle="A glimpse at recent projects across industries." />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href="#contact"
            data-reveal
            style={{ animationDelay: `${i * 60}ms` }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-violet/40 ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={p.img}
                alt={`${p.title} website preview`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
            </div>
            <div className="flex items-center justify-between p-5">
              <div>
                <p className="text-xs text-muted-foreground">{p.tag}</p>
                <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
              </div>
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted-foreground transition-all group-hover:border-violet/50 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$690",
      desc: "For small businesses launching their first site.",
      features: ["1-page landing", "Mobile responsive", "Contact form", "WhatsApp button", "Basic SEO"],
      highlight: false,
    },
    {
      name: "Business",
      price: "$1,290",
      desc: "For growing brands needing more depth.",
      features: ["Up to 5 pages", "Custom design", "Contact + lead forms", "WhatsApp integration", "On-page SEO", "Hosting guidance"],
      highlight: true,
    },
    {
      name: "Premium",
      price: "$2,490",
      desc: "For businesses that want a standout web presence.",
      features: ["Up to 10 pages", "Custom illustrations", "Advanced animations", "Basic automations", "Lead-gen system", "Priority support"],
      highlight: false,
    },
  ];
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Pricing" title="Simple, transparent pricing" subtitle="Pick the package that fits your project. Custom scopes on request." />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            data-reveal
            className={`relative flex flex-col rounded-2xl p-7 transition-all ${
              p.highlight
                ? "border border-violet/40 bg-gradient-to-b from-violet/[0.12] to-white/[0.02] glow-violet"
                : "border border-white/[0.06] bg-white/[0.02] hover:border-white/15"
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-violet px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
              <span className="text-sm text-muted-foreground">/ project</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                p.highlight
                  ? "gradient-violet text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] hover:scale-[1.02]"
                  : "border border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
              }`}
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.currentTarget as HTMLFormElement).reset();
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div data-reveal className="grid grid-cols-1 gap-12 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-violet" />
            Contact
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Tell us about your <span className="gradient-text">project.</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            We'll reply within one business day with ideas and a personalized proposal.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.02]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d]/70 p-6 backdrop-blur-sm sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="mt-5">
            <Field label="Company (optional)" name="company" placeholder="Your company" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Project details</label>
            <textarea
              name="details"
              required
              rows={5}
              placeholder="Tell us about your goals, timeline and references…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet/20"
              maxLength={2000}
            />
          </div>
          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-violet px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:scale-[1.01]"
          >
            {sent ? "Message sent ✓" : "Send Message"}
            {!sent && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet/20"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-white/[0.06] px-4 py-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-xs text-muted-foreground">© 2026 CGL Digital. All rights reserved.</p>
      </div>
    </footer>
  );
}
