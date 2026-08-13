import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Monitor,
  Headset,
  Check,
  Send,
  Menu,
  X,
  Wifi,
  Wrench,
  ShieldCheck,
  Cpu,
  MessageSquare,
  LifeBuoy,
  Mail,
  Globe,
} from "lucide-react";

import heroDesk from "@/assets/hero-desk.jpg";
import soporteImg from "@/assets/soporte-ti.jpg";
import cglLogo from "@/assets/cgl-logo-dark.png";
import pVet from "@/assets/portfolio-vet.jpg";
import pDental from "@/assets/portfolio-dental.jpg";
import pCorporate from "@/assets/portfolio-corporate.jpg";
import pRestaurant from "@/assets/portfolio-restaurant.jpg";
import pRealestate from "@/assets/portfolio-realestate.jpg";

const WHATSAPP_URL =
  "https://wa.me/56976163109?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web%20con%20CGL%20Digital.";
const WHATSAPP_SOPORTE =
  "https://wa.me/56976163109?text=Hola%2C%20necesito%20soporte%20TI%20con%20CGL%20Digital.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CGL Digital | Diseño Web y Soporte TI para empresas en Chile" },
      {
        name: "description",
        content:
          "Soluciones digitales para emprendedores y empresas en Chile: diseño web profesional, landing pages, sitios corporativos y soporte TI remoto.",
      },
      { property: "og:title", content: "CGL Digital | Diseño Web y Soporte TI en Chile" },
      {
        property: "og:description",
        content:
          "Diseño web profesional y soporte TI para emprendedores y empresas. Proyectos a medida, atención personalizada y acompañamiento continuo.",
      },
    ],
  }),
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
      { threshold: 0.1 },
    );
    el.querySelectorAll("[data-reveal]").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Landing() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-[#05070d] text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(31,107,255,0.18),transparent)] blur-3xl" />
        <div className="absolute top-[55%] -right-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(42,168,232,0.12),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Servicios />
          <Diferenciadores />
          <Portafolio />
          <SoporteTI />
          <Proceso />
          <Nosotros />
          <Contacto />
        </main>
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#soporte", label: "Soporte TI" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

function Logo() {
  return (
    <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
      <img src={cglLogo} alt="CGL Digital" className="h-11 w-auto object-contain sm:h-12" />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#05070d]/70 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            className="hidden items-center gap-1.5 rounded-full gradient-blue px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Cotizar proyecto
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-[#05070d]/95 px-4 pb-5 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full gradient-blue px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Cotizar proyecto
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-14 sm:pt-20 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:pb-24"
    >
      <div data-reveal className="min-w-0">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan [animation:pulseGlow_2.4s_ease-in-out_infinite]" />
          Soluciones digitales
        </span>
        <h1 className="mt-6 text-[2.25rem] font-semibold leading-[1.07] tracking-tight sm:text-5xl lg:text-[3.5rem]">
          Soluciones <span className="gradient-text">digitales</span> que impulsan tu{" "}
          <span className="gradient-text">negocio</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Diseño web profesional y soporte TI para emprendedores y empresas.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex min-h-12 items-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_40px_-14px_rgba(31,107,255,0.9)] transition-transform hover:scale-[1.02]"
          >
            Cotizar proyecto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#servicios"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-white/[0.07]"
          >
            Ver servicios
          </a>
        </div>
        <p className="mt-7 text-xs text-muted-foreground sm:text-sm">
          Diseño profesional · Atención personalizada · Soporte cercano
        </p>
      </div>

      <div data-reveal className="relative min-w-0">
        <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(closest-side,rgba(31,107,255,0.28),transparent)] blur-3xl" />
        <img
          src={heroDesk}
          alt="Equipo de escritorio mostrando un sitio web profesional desarrollado por CGL Digital"
          width={1280}
          height={1024}
          className="w-full rounded-2xl border border-white/[0.07] object-cover [mask-image:radial-gradient(120%_110%_at_55%_45%,#000_60%,transparent_100%)]"
        />
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div data-reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-brand-cyan" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Servicios() {
  const cards = [
    {
      icon: Monitor,
      title: "Diseño Web",
      desc: "Creamos sitios web modernos, rápidos y adaptados a celulares para que tu negocio tenga una presencia profesional en Internet.",
      features: [
        "Landing Pages",
        "Sitios web profesionales",
        "Diseño responsive",
        "Integración con WhatsApp",
        "Formularios de contacto",
        "Optimización y rendimiento",
        "Dominio y hosting",
        "Diseño personalizado",
      ],
      cta: "Ver servicio",
      href: "#portafolio",
    },
    {
      icon: Headset,
      title: "Soporte TI",
      desc: "Te ayudamos a resolver problemas tecnológicos y mantener tus equipos y sistemas funcionando correctamente.",
      features: [
        "Soporte remoto",
        "Diagnóstico de problemas",
        "Configuración de equipos",
        "Instalación de software",
        "Windows",
        "Redes",
        "Microsoft 365",
        "Asistencia a usuarios",
        "Mantenimiento preventivo",
      ],
      cta: "Solicitar soporte",
      href: "#soporte",
    },
  ];

  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Servicios"
        title="¿Qué podemos hacer por tu negocio?"
        subtitle="Soluciones digitales pensadas para ayudarte a crecer, mejorar tu presencia online y resolver tus necesidades tecnológicas."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            data-reveal
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand/50 sm:p-9"
          >
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(31,107,255,0.16),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-brand-cyan">
              <c.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
            <h3 className="mt-6 text-xl font-semibold uppercase tracking-wide sm:text-2xl">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{c.desc}</p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {c.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={2.5} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={c.href}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-white/[0.07]"
            >
              {c.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Diferenciadores() {
  const items = [
    { n: "01", icon: Monitor, title: "Diseño profesional", desc: "A la medida de la identidad de tu negocio." },
    { n: "02", icon: MessageSquare, title: "Atención personalizada", desc: "Comunicación directa durante todo el proyecto." },
    { n: "03", icon: Cpu, title: "Tecnología actual", desc: "Soluciones modernas, rápidas y optimizadas." },
    { n: "04", icon: LifeBuoy, title: "Acompañamiento", desc: "Te ayudamos antes, durante y después de la implementación." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div
            key={it.n}
            data-reveal
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-brand/40"
          >
            <div className="flex items-center justify-between">
              <it.icon className="h-5 w-5 text-brand-cyan" strokeWidth={1.5} />
              <span className="font-display text-sm text-muted-foreground/60">{it.n}</span>
            </div>
            <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Portafolio() {
  const projects = [
    { img: pVet, name: "VidaPet", type: "Landing Page", desc: "Sitio para una clínica veterinaria con agenda de contacto y WhatsApp." },
    { img: pDental, name: "Clínica Dental", type: "Landing Page", desc: "Página de servicios odontológicos enfocada en captar consultas." },
    { img: pCorporate, name: "Sitio Corporativo", type: "Sitio web corporativo", desc: "Presencia profesional multi-sección para una empresa de servicios." },
    { img: pRestaurant, name: "Restaurante", type: "Landing Page", desc: "Carta, ubicación y reservas con contacto directo por WhatsApp." },
    { img: pRealestate, name: "Inmobiliaria", type: "Sitio web corporativo", desc: "Catálogo de propiedades con formulario de contacto integrado." },
  ];
  return (
    <section id="portafolio" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Portafolio"
        title="Proyectos destacados"
        subtitle="Algunos proyectos y experiencias digitales desarrolladas por CGL Digital."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            data-reveal
            className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-brand/50"
          >
            <div className="overflow-hidden border-b border-white/[0.06]">
              <img
                src={p.img}
                alt={`Vista previa del proyecto ${p.name} desarrollado por CGL Digital`}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-6">
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-cyan">{p.type}</span>
              <h3 className="mt-2 text-base font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SoporteTI() {
  const items = [
    { icon: Headset, label: "Soporte remoto" },
    { icon: Wrench, label: "Configuración" },
    { icon: ShieldCheck, label: "Diagnóstico" },
    { icon: Monitor, label: "Windows" },
    { icon: Wifi, label: "Redes" },
    { icon: Mail, label: "Microsoft 365" },
    { icon: LifeBuoy, label: "Asistencia a usuarios" },
  ];
  return (
    <section id="soporte" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div
        data-reveal
        className="grid grid-cols-1 items-center gap-10 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-12 lg:grid-cols-2 lg:gap-14"
      >
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            Soporte TI
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tienes un problema con tu <span className="gradient-text">computador</span> o sistema?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Te ayudamos a diagnosticar y resolver problemas tecnológicos de forma rápida y sencilla, incluso de manera remota.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {items.map((it) => (
              <li
                key={it.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-muted-foreground"
              >
                <it.icon className="h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={1.5} />
                {it.label}
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_SOPORTE}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_40px_-14px_rgba(31,107,255,0.9)] transition-transform hover:scale-[1.02]"
          >
            Solicitar soporte TI
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="relative min-w-0">
          <img
            src={soporteImg}
            alt="Equipos y redes atendidos por el servicio de soporte TI de CGL Digital"
            loading="lazy"
            width={1024}
            height={768}
            className="w-full rounded-2xl border border-white/[0.07] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Proceso() {
  const steps = [
    { n: "01", title: "Cuéntanos lo que necesitas", desc: "Explícanos tu proyecto, idea o problema." },
    { n: "02", title: "Proponemos una solución", desc: "Analizamos tus necesidades y definimos la mejor alternativa." },
    { n: "03", title: "Lo hacemos realidad", desc: "Implementamos la solución y te acompañamos durante el proceso." },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <SectionHeading eyebrow="Proceso" title="Cómo trabajamos" />
      <div className="relative mt-14">
        <div
          aria-hidden
          className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent lg:block"
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} data-reveal className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-brand/40 bg-[#05070d] font-display text-sm font-semibold text-brand-cyan">
                {s.n}
              </div>
              <h3 className="mt-5 text-base font-semibold uppercase tracking-wide">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-4xl px-4 py-20 text-center sm:py-28">
      <SectionHeading eyebrow="Nosotros" title="Tecnología cercana y profesional" />
      <p data-reveal className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        CGL Digital busca entregar soluciones digitales profesionales, accesibles y personalizadas para emprendedores y
        empresas. Trabajamos con comunicación directa, propuestas a medida y acompañamiento en cada etapa: desde la idea
        inicial hasta la puesta en marcha y el soporte posterior.
      </p>
    </section>
  );
}

function Contacto() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      setSent(true);
      setTimeout(() => setSent(false), 3500);
      form.reset();
    } else {
      alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
    }
  };

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div
        data-reveal
        className="grid grid-cols-1 gap-12 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-12 lg:grid-cols-2 lg:gap-16"
      >
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            Contacto
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            Hablemos de tu <span className="gradient-text">proyecto</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Cuéntanos qué necesitas y evaluaremos contigo la mejor solución.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_40px_-14px_rgba(37,211,102,0.8)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-white/[0.07] bg-[#080b12]/70 p-6 backdrop-blur-sm sm:p-8"
        >
          <input type="hidden" name="access_key" value="c234cc7e-8e71-4171-ba82-99dff6d86a86" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Tu nombre" required />
            <Field label="Correo electrónico" name="email" type="email" placeholder="tu@empresa.com" required />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Teléfono / WhatsApp" name="phone" type="tel" placeholder="+56 9 ..." />
            <div>
              <label
                htmlFor="service"
                className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
              >
                Tipo de servicio
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue="Diseño Web"
                className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
              >
                <option className="bg-[#080b12]">Diseño Web</option>
                <option className="bg-[#080b12]">Landing Page</option>
                <option className="bg-[#080b12]">Soporte TI</option>
                <option className="bg-[#080b12]">Otro</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label
              htmlFor="details"
              className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
            >
              Mensaje
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={5}
              placeholder="Cuéntanos sobre tu proyecto, idea o problema…"
              maxLength={2000}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
            />
          </div>
          <button
            type="submit"
            className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_40px_-14px_rgba(31,107,255,0.9)] transition-transform hover:scale-[1.01]"
          >
            {sent ? "Mensaje enviado ✓" : "Solicitar cotización"}
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
      <label htmlFor={name} className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/25"
      />
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={cglLogo} alt="CGL Digital" className="h-11 w-auto object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Soluciones digitales para emprendedores y empresas.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5 self-start">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="space-y-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
          <a
            href="#contacto"
            className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4 text-brand-cyan" strokeWidth={1.5} />
            Formulario de contacto
          </a>
          <a
            href="https://cgldigital.cl"
            className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-4 w-4 text-brand-cyan" strokeWidth={1.5} />
            cgldigital.cl
          </a>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-6">
        <p className="text-center text-xs text-muted-foreground">
          © 2026 CGL Digital. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
