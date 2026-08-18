import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Mail, Menu, Send, X } from "lucide-react";

import heroComputer from "@/assets/hero-computer.png";
import cglLogo from "@/assets/cgl-logo-dark.png";
import iconWindows from "@/assets/icons/windows.png";
import iconSsd from "@/assets/icons/ssd.png";
import iconShield from "@/assets/icons/shield.png";
import iconDisk from "@/assets/icons/disk.png";
import iconPuzzle from "@/assets/icons/puzzle.png";
import iconPrinter from "@/assets/icons/printer.png";
import iconWrench from "@/assets/icons/wrench.png";

const WHATSAPP_URL =
  "https://wa.me/56976163109?text=Hola%2C%20quiero%20cotizar%20una%20soluci%C3%B3n%20con%20CGL%20Digital.";
const WHATSAPP_SOPORTE =
  "https://wa.me/56976163109?text=Hola%2C%20necesito%20soporte%20TI%20con%20CGL%20Digital.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CGL Digital | Landing Pages y Soporte TI" },
      {
        name: "description",
        content:
          "Landing Pages profesionales y soporte TI para emprendedores y empresas en Santiago y todo Chile.",
      },
      { property: "og:title", content: "CGL Digital | Landing Pages y Soporte TI" },
      {
        property: "og:description",
        content:
          "Soluciones digitales para emprendedores y empresas: Landing Pages que convierten y soporte TI cercano.",
      },
    ],
  }),
  component: Landing,
});

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    element.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Landing() {
  const rootRef = useReveal();

  return (
    <div ref={rootRef} className="relative min-h-screen overflow-x-hidden bg-[#05070d] text-foreground">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(31,107,255,0.18),transparent)] blur-3xl" />
        <div className="absolute right-[-12rem] top-[52%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgba(42,168,232,0.1),transparent)] blur-3xl" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(42,168,232,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(42,168,232,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
      </div>

      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <LandingPages />
          <SoporteTI />
          <CtaBanda />
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
  { href: "#landing-pages", label: "Landing Pages" },
  { href: "#soporte", label: "Soporte TI" },
  { href: "#contacto", label: "Contacto" },
];

function Logo() {
  return (
    <a href="#inicio" className="flex shrink-0 items-center gap-2.5">
      <img src={cglLogo} alt="CGL Digital" className="logo-blue h-11 w-auto object-contain sm:h-12" />
    </a>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#05070d]/80 backdrop-blur-xl">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
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
            onClick={() => setOpen((value) => !value)}
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
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {link.label}
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
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-14 sm:pt-20 lg:min-h-[calc(100vh-72px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 lg:pb-24"
    >
      <div data-reveal className="min-w-0">
        <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan [animation:pulseGlow_2.4s_ease-in-out_infinite]" />
          Soluciones digitales
        </span>
        <h1 className="mt-6 text-[2.35rem] font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.7rem]">
          Soluciones <span className="gradient-text">digitales</span> que impulsan tu <span className="gradient-text">negocio</span>
        </h1>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Landing Pages profesionales y soporte TI para emprendedores y empresas.
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
            href="#landing-pages"
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-white/[0.07]"
          >
            Ver servicios
          </a>
        </div>
        <p className="mt-7 text-xs text-muted-foreground sm:text-sm">
          Diseño personalizado · Atención directa
        </p>
      </div>

      <div data-reveal className="relative flex min-w-0 items-center justify-center">
        <div
          aria-hidden
          className="absolute bottom-6 left-1/2 h-16 w-[78%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-2xl"
        />
        <img
          src={heroComputer}
          alt="Computador de escritorio con monitor, teclado y mouse iluminados en azul sobre un escritorio oscuro"
          width={1264}
          height={843}
          className="relative h-auto max-h-[520px] w-full object-contain [mask-image:radial-gradient(115%_105%_at_50%_45%,#000_62%,transparent_100%)]"
        />
      </div>

    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
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

function LandingPages() {
  const features = [
    "Diseño personalizado",
    "Adaptación a celulares y tablets",
    "Botón de WhatsApp",
    "Formularios de contacto",
    "Integración con redes sociales",
    "SEO básico",
    "Optimización y velocidad de carga",
    "Llamados a la acción claros",
  ];

  return (
    <section id="landing-pages" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div data-reveal className="rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            Diseño web
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">LANDING PAGES</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Creamos Landing Pages personalizadas para negocios, emprendimientos y profesionales: una página clara,
            rápida y pensada para que tus clientes te contacten.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex min-h-16 items-center gap-3 rounded-2xl border border-white/[0.07] bg-[#080b12]/70 px-5 py-4 transition-colors hover:border-brand/45"
            >
              <Check className="h-4 w-4 shrink-0 text-brand-cyan" strokeWidth={2.5} />
              <span className="text-sm leading-snug text-foreground">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <a
            href="#contacto"
            className="inline-flex min-h-12 items-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            Quiero mi Landing Page
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function SoporteTI() {
  const services = [
    { icon: iconWindows, label: "Formateo e instalación de Windows" },
    { icon: iconSsd, label: "Cambio de HDD por SSD" },
    { icon: iconShield, label: "Eliminación de virus y optimización" },
    { icon: iconDisk, label: "Respaldo y recuperación de información" },
    { icon: iconPuzzle, label: "Instalación y configuración de programas" },
    { icon: iconPrinter, label: "Instalación y configuración de impresoras" },
    { icon: iconWrench, label: "Mantención de computadores de escritorio" },
  ];

  return (
    <section id="soporte" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div data-reveal className="rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-brand-cyan" />
              Soporte TI
            </span>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">SOPORTE TI</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">Soluciones para mantener tus equipos funcionando correctamente.</p>
          </div>
          <a
            href={WHATSAPP_SOPORTE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:scale-[1.02]"
          >
            Solicitar soporte TI
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, label }) => (
            <div key={label} className="flex min-h-24 items-center gap-4 rounded-2xl border border-white/[0.07] bg-[#080b12]/70 p-5 transition-colors hover:border-brand/45">
              <img src={icon} alt="" aria-hidden loading="lazy" width={96} height={96} className="h-7 w-7 shrink-0 object-contain" />
              <span className="text-sm font-medium uppercase leading-snug tracking-wide text-foreground">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <span><strong className="font-medium text-foreground">Soporte presencial</strong> — Santiago y alrededores</span>
          <span><strong className="font-medium text-foreground">Soporte remoto</strong> — Todo Chile</span>
        </div>
      </div>
    </section>
  );
}

function CtaBanda() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-4 pt-4">
      <div data-reveal className="flex flex-col items-center gap-6 rounded-3xl border border-brand/25 bg-[#080d1a]/80 px-7 py-10 text-center sm:px-12">
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
          ¿Tienes un proyecto o necesitas <span className="gradient-text">soporte TI</span>? Hablemos.
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Escríbenos y te respondemos directamente para ver juntos la mejor solución.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Escríbenos por WhatsApp
          </a>
          <a
            href="#contacto"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-white/[0.07]"
          >
            Enviar un mensaje
          </a>
        </div>
      </div>
    </section>
  );
}


function Contacto() {
  const [sent, setSent] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: new FormData(form),
    });

    if (response.ok) {
      setSent(true);
      window.setTimeout(() => setSent(false), 3500);
      form.reset();
      return;
    }

    alert("Hubo un error al enviar el formulario. Intenta nuevamente.");
  };

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div data-reveal className="grid grid-cols-1 gap-12 rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-7 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-brand-cyan" />
            Contacto
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">HABLEMOS DE TU <span className="gradient-text">PROYECTO</span></h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución.</p>
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

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/[0.07] bg-[#080b12]/70 p-6 backdrop-blur-sm sm:p-8">
          <input type="hidden" name="access_key" value="c234cc7e-8e71-4171-ba82-99dff6d86a86" />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Tu nombre" required />
            <Field label="Correo electrónico" name="email" type="email" placeholder="tu@empresa.com" required />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Teléfono / WhatsApp" name="phone" type="tel" placeholder="+56 9 ..." />
            <div>
              <label htmlFor="service" className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Tipo de servicio</label>
              <select id="service" name="service" required defaultValue="Landing Page" className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-brand/60 focus:ring-2 focus:ring-brand/25">
                <option className="bg-[#080b12]">Landing Page</option>
                <option className="bg-[#080b12]">Soporte TI</option>
                <option className="bg-[#080b12]">Otro</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="details" className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Mensaje</label>
            <textarea id="details" name="details" required rows={5} placeholder="Cuéntanos sobre tu proyecto o necesidad…" maxLength={2000} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/25" />
          </div>
          <button type="submit" className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full gradient-blue px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_12px_40px_-14px_rgba(31,107,255,0.9)] transition-transform hover:scale-[1.01]">
            {sent ? "Mensaje enviado" : "Solicitar cotización"}
            {!sent && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</label>
      <input id={name} type={type} name={name} required={required} placeholder={placeholder} maxLength={200} className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-brand/60 focus:ring-2 focus:ring-brand/25" />
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
    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp" className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110">
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <img src={cglLogo} alt="CGL Digital" className="logo-blue h-11 w-auto object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">Soluciones digitales para emprendedores y empresas.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-6 gap-y-2.5 self-start">
          {NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}
        </nav>
        <div className="space-y-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"><WhatsAppIcon className="h-4 w-4 text-[#25D366]" />WhatsApp</a>
          <a href="#contacto" className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"><Mail className="h-4 w-4 text-brand-cyan" strokeWidth={1.5} />Formulario de contacto</a>
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-6"><p className="text-center text-xs text-muted-foreground">© 2026 CGL Digital. Todos los derechos reservados.</p></div>
    </footer>
  );
}
