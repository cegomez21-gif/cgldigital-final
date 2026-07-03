import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Layout,
  Building2,
  RefreshCw,
  MessageCircle,
  Mail,
  Server,
  Check,
  Send,
} from "lucide-react";

import heroMockup from "@/assets/hero-mockup.jpg";
import cglLogo from "@/assets/cgl-logo.png.asset.json";

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
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(124,58,237,0.22),transparent)] blur-3xl" />
        <div className="absolute top-[45%] -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(147,51,234,0.16),transparent)] blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(88,28,135,0.18),transparent)] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Nav />
        <Hero />
        <Services />
        <Pricing />
        <Contact />
        <Footer />
      </div>

      <FloatingWhatsApp />
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
      <span className="text-[15px] font-semibold tracking-tight">CGL Estudio Digital</span>
    </a>
  );
}

function Nav() {
  const links = [
    { href: "#top", label: "Inicio" },
    { href: "#precios", label: "Precios" },
    { href: "#contacto", label: "Contacto" },
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
          href="#contacto"
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full gradient-violet px-4 py-2 text-sm font-medium text-white shadow-[0_8px_30px_-6px_rgba(124,58,237,0.6)] transition-transform hover:scale-[1.02]"
        >
          <span className="hidden sm:inline">Solicitar presupuesto</span>
          <span className="sm:hidden">Presupuesto</span>
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
          Diseño Web Profesional
        </span>
        <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
          Diseñamos páginas web{" "}
          <span className="gradient-text">profesionales</span> para empresas y emprendedores.
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
          Creamos sitios web modernos, rápidos y adaptados a dispositivos móviles para ayudar a tu negocio a destacar en internet y ofrecer una imagen profesional.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full gradient-violet px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:scale-[1.02]"
          >
            Solicitar presupuesto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#precios"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            Ver precios
          </a>
        </div>
      </div>

      <div data-reveal className="relative min-w-0">
        <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2rem] gradient-violet opacity-30 blur-3xl" />
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-1.5 shadow-2xl glow-violet">
          <img
            src={heroMockup}
            alt="Vista previa de landing page VidaPet diseñada por CGL Estudio Digital"
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
    { icon: Layout, title: "Landing Pages", desc: "Páginas de una sola sección ideales para promocionar productos, servicios o campañas." },
    { icon: Building2, title: "Sitios Web Corporativos", desc: "Páginas profesionales para empresas con varias secciones y una imagen moderna." },
    { icon: RefreshCw, title: "Rediseño Web", desc: "Renovamos sitios web antiguos con un diseño actual, moderno y optimizado." },
    { icon: MessageCircle, title: "Integración de WhatsApp", desc: "Botón flotante para que tus clientes puedan comunicarse rápidamente." },
    { icon: Mail, title: "Formularios de Contacto", desc: "Recibe consultas directamente en tu correo mediante formularios personalizados." },
    { icon: Server, title: "Asesoría en Dominio y Hosting", desc: "Te ayudamos a elegir y configurar el dominio y el hosting más adecuado para tu proyecto." },
  ];
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Servicios" title="Lo que podemos hacer por tu negocio" />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

function Pricing() {
  const plans = [
    {
      name: "Landing Page",
      price: "$180.000",
      currency: "CLP",
      idealFor: ["Emprendedores", "Negocios locales", "Profesionales independientes"],
      features: [
        "Diseño personalizado",
        "Adaptable a celulares",
        "Botón de WhatsApp",
        "Formulario de contacto",
        "Optimización básica",
      ],
      highlight: false,
    },
    {
      name: "Sitio Web Corporativo",
      price: "$350.000",
      currency: "CLP",
      idealFor: [],
      features: [
        "Varias secciones",
        "Diseño personalizado",
        "Adaptable a celulares",
        "Formulario de contacto",
        "Botón de WhatsApp",
        "Optimización básica",
        "Asesoría para dominio y hosting",
      ],
      highlight: true,
    },
  ];
  return (
    <section id="precios" className="mx-auto max-w-5xl px-4 py-24 sm:py-32">
      <SectionHeading eyebrow="Precios" title="Planes simples y transparentes" subtitle="Elige el plan que mejor se adapta a tu proyecto." />
      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
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
                Más completo
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-sm text-muted-foreground">Desde</span>
              <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
              <span className="text-sm text-muted-foreground">{p.currency}</span>
            </div>
            {p.idealFor.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Ideal para</p>
                <ul className="mt-3 space-y-2">
                  {p.idealFor.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Incluye</p>
              <ul className="mt-3 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contacto"
              className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
                p.highlight
                  ? "gradient-violet text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.8)] hover:scale-[1.02]"
                  : "border border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
              }`}
            >
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
      <p data-reveal className="mt-8 text-center text-xs text-muted-foreground">
        El dominio y el servicio de hosting se cotizan por separado según las necesidades de cada proyecto.
      </p>
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
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <div data-reveal className="grid grid-cols-1 gap-12 rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1 w-1 rounded-full bg-violet" />
            Contacto
          </span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Cuéntanos sobre tu <span className="gradient-text">proyecto.</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            ¿Necesitas una página web para tu empresa o emprendimiento? Completa el formulario o escríbenos por WhatsApp y te enviaremos una propuesta personalizada.
          </p>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-[1.02]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Hablar por WhatsApp
          </a>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d]/70 p-6 backdrop-blur-sm sm:p-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field label="Nombre" name="name" placeholder="Tu nombre" required />
            <Field label="Correo electrónico" name="email" type="email" placeholder="tu@empresa.com" required />
          </div>
          <div className="mt-5">
            <Field label="Empresa (opcional)" name="company" placeholder="Tu empresa" />
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">Cuéntanos sobre tu proyecto</label>
            <textarea
              name="details"
              required
              rows={5}
              placeholder="Describe tus objetivos, plazos y referencias…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-violet/50 focus:bg-white/[0.04] focus:ring-2 focus:ring-violet/20"
              maxLength={2000}
            />
          </div>
          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-violet px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-8px_rgba(124,58,237,0.7)] transition-transform hover:scale-[1.01]"
          >
            {sent ? "Mensaje enviado ✓" : "Enviar mensaje"}
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
      href="https://wa.me/"
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 [animation:pulseGlow_2.4s_ease-in-out_infinite]"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl border-t border-white/[0.06] px-4 py-10">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <Logo />
        <p className="text-xs text-muted-foreground">© 2026 CGL Estudio Digital. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
