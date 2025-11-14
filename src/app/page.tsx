"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import HeroImg from "../../images/termo/termo-plain.jpg";
import CBXImg from "../../images/CBX/CBX-plain.jpg";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Layered gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_100%_-10%,rgba(16,185,129,0.08),transparent_60%),radial-gradient(40rem_40rem_at_-10%_-20%,rgba(6,182,212,0.06),transparent_60%)]" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-edge py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl space-y-6 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium shadow-soft border border-white/30">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Calentadores de agua de confianza desde 1994
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Agua caliente,
              <span className="block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
                redefinida.
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl opacity-80 leading-relaxed">
              Calentadores de agua eléctricos sin tanque, diseñados para la eficiencia,
              la seguridad y el confort; brindan agua caliente al instante y están hechos para durar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/products" className="btn btn-primary h-12 px-6 text-base shadow-glow hover:shadow-glow hover:scale-[1.02] transition-all duration-200">
                Ver productos
              </Link>
              <Link href="/support/contact" className="btn btn-outline h-12 px-6 text-base glass hover:bg-white/90 transition-all duration-200">
                Hablar con un experto
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { value: "30+", label: "Años de experiencia" },
                { value: "99.9%", label: "Enfoque en seguridad" },
                { value: "24/7", label: "Soporte disponible" },
              ].map((stat, idx) => (
                <div key={idx} className="glass rounded-xl p-4 shadow-soft border border-white/20">
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs opacity-70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image with elevated card */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {/* Floating decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-100/50 rounded-2xl blur-xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-100/50 rounded-2xl blur-xl animate-float" style={{ animationDelay: '1s' }} />

            {/* Main image card */}
            <div className="relative rounded-3xl border border-white/30 glass shadow-soft-lg p-4 overflow-hidden group">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px]" />
              
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={HeroImg}
                  alt="Imagen destacada de calentador de agua moderno"
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  placeholder="blur"
                />
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-200/30 via-cyan-200/30 to-transparent blur-2xl -z-10 opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Reliability Ribbon */}
      <section className="container-edge py-12">
        <div className="glass rounded-2xl border border-white/20 shadow-soft-lg p-8 overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">Confianza y Certificaciones</h2>
            <p className="text-sm opacity-70">Certificados por las principales instituciones de seguridad</p>
          </div>
          
          {/* Marquee logos */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-12">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-12 shrink-0">
                  {[
                    "NOM", "ANSI", "UL", "ISO 9001", "Certificación Energética"
                  ].map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white/50 border border-white/30">
                      <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold">
                        {cert[0]}
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap">{cert}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Systems Grid */}
      <section className="container-edge py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Sistemas destacados
            </h2>
            <p className="text-lg opacity-70">Opciones populares para hogares y negocios.</p>
          </div>
          <Link href="/products" className="btn btn-outline h-11 px-5 glass hover:bg-white/90 transition-all">
            Ver todo
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* CBX System */}
          <Link href="/products" className="group relative rounded-3xl border border-white/30 glass overflow-hidden shadow-soft-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-emerald-50 to-cyan-50">
              <Image 
                src={CBXImg} 
                alt="Sistema de control CBX" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                placeholder="blur" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Metric pills */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="glass px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  Control Inteligente
                </span>
                <span className="glass px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  Modular
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sistemas de control CBX</h3>
              <p className="opacity-70 text-sm leading-relaxed">
                Gestión inteligente y precisa de temperatura con componentes modulares.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:gap-3 transition-all">
                Explorar <span className="text-lg">→</span>
              </div>
            </div>
          </Link>

          {/* Termotronic System */}
          <Link href="/products" className="group relative rounded-3xl border border-white/30 glass overflow-hidden shadow-soft-lg hover:shadow-glow-blue transition-all duration-300 hover:-translate-y-1">
            <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-cyan-50 to-sky-50">
              <Image 
                src={HeroImg} 
                alt="Calentador de agua eléctrico sin tanque" 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                placeholder="blur" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Metric pills */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="glass px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  Sin Tanque
                </span>
                <span className="glass px-3 py-1 rounded-full text-xs font-medium border border-white/30">
                  Instantáneo
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Calentadores eléctricos sin tanque</h3>
              <p className="opacity-70 text-sm leading-relaxed">
                Agua caliente al instante con bajo mantenimiento y larga vida útil.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-600 group-hover:gap-3 transition-all">
                Explorar <span className="text-lg">→</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Experience Blocks */}
      <section className="container-edge py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Por qué elegir Termotronic
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Diseñados pensando en eficiencia, seguridad y confiabilidad
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "⚡",
              title: "Eficiencia Energética",
              description: "Elementos eléctricos avanzados proporcionan agua caliente al instante con menor consumo de energía.",
              gradient: "from-emerald-500 to-emerald-600",
              bgGradient: "from-emerald-50 to-emerald-100/50",
            },
            {
              icon: "🛡️",
              title: "Seguridad Total",
              description: "Protecciones múltiples y certificaciones internacionales garantizan operación segura.",
              gradient: "from-cyan-500 to-cyan-600",
              bgGradient: "from-cyan-50 to-cyan-100/50",
            },
            {
              icon: "🔧",
              title: "Servicio Confiable",
              description: "Diseño modular y componentes robustos para máxima disponibilidad y fácil mantenimiento.",
              gradient: "from-sky-500 to-sky-600",
              bgGradient: "from-sky-50 to-sky-100/50",
            },
          ].map((block, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-white/30 glass overflow-hidden shadow-soft-lg hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${block.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${block.gradient} flex items-center justify-center text-3xl mb-6 shadow-soft group-hover:scale-110 transition-transform duration-300`}>
                  {block.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{block.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed">{block.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions Timeline */}
      <section className="container-edge py-20 md:py-28">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Proceso simplificado
          </h2>
          <p className="text-lg opacity-70">Desde la evaluación hasta la instalación</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-200 transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Evaluar", desc: "Analizamos tus necesidades" },
              { step: "02", title: "Dimensionar", desc: "Seleccionamos el sistema ideal" },
              { step: "03", title: "Instalar", desc: "Instalación profesional garantizada" },
              { step: "04", title: "Aprender", desc: "Soporte y capacitación continua" },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="glass rounded-2xl border border-white/30 shadow-soft-lg p-6 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.desc}</p>
                </div>
                {/* Connector dot */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 border-2 border-white shadow-soft transform -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="container-edge py-20 md:py-28">
        <div className="glass rounded-3xl border border-white/30 shadow-soft-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: 35, suffix: "%", label: "Ahorro energético", icon: "⚡" },
              { value: 15000, suffix: "+", label: "Instalaciones activas", icon: "🏠" },
              { value: 2, suffix: "h", label: "Tiempo de respuesta", icon: "⏱️" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl mb-3">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {countersVisible ? (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <div className="text-sm opacity-70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-edge py-20 md:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="relative glass rounded-3xl border border-white/30 shadow-soft-lg p-8 md:p-12 overflow-hidden">
          <div className="relative h-64">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  idx === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm opacity-70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentTestimonial
                    ? "w-8 bg-gradient-to-r from-emerald-500 to-cyan-500"
                    : "w-2 bg-black/20"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="container-edge pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/30 glass shadow-soft-lg">
          {/* Background gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50 via-cyan-50 to-emerald-50 opacity-50" />
          <div className="absolute -right-24 -bottom-24 h-96 w-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute -left-24 -top-24 h-96 w-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />

          <div className="relative p-8 md:p-16">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                ¿Listo para agua caliente confiable?
              </h3>
              <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
                Habla con nuestro equipo o explora sistemas adaptados a tus necesidades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products" className="btn btn-primary h-12 px-8 text-base shadow-glow hover:shadow-glow hover:scale-[1.02] transition-all duration-200">
                  Explorar productos
                </Link>
                <Link href="/support/contact" className="btn btn-outline h-12 px-8 text-base glass hover:bg-white/90 transition-all duration-200">
                  Contactar ventas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Testimonials data
const testimonials = [
  {
    text: "Excelente producto, el agua caliente llega instantáneamente y el consumo energético es mucho menor que nuestro sistema anterior.",
    name: "María González",
    role: "Propietaria de Restaurante",
    initials: "MG",
  },
  {
    text: "La instalación fue rápida y profesional. Llevamos 3 años sin ningún problema. Muy recomendado.",
    name: "Carlos Rodríguez",
    role: "Gerente de Hotel",
    initials: "CR",
  },
  {
    text: "El sistema CBX nos permite controlar perfectamente la temperatura. La eficiencia es impresionante.",
    name: "Ana Martínez",
    role: "Arquitecta",
    initials: "AM",
  },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}{suffix}</>;
}
