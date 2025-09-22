import Image from "next/image";
import Link from "next/link";

import HeroImg from "../../images/termo/termo-plain.jpg";
import CBXImg from "../../images/CBX/CBX-plain.jpg";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_100%_-10%,rgba(0,0,0,0.06),transparent_60%),radial-gradient(40rem_40rem_at_-10%_-20%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="container-edge py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs mb-5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Calentadores de agua de confianza desde 1994
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              Agua caliente, redefinida.
            </h1>
            <p className="mt-4 text-lg md:text-xl opacity-80">
              Calentadores de agua eléctricos sin tanque, diseñados para la eficiencia,
              la seguridad y el confort; brindan agua caliente al instante y están hechos para durar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="btn btn-primary h-11 px-5">
                Ver productos
              </Link>
              <Link href="/support/contact" className="btn btn-outline h-11 px-5">
                Hablar con un experto
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-2xl font-semibold">30+</div>
                <div className="opacity-70">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">99.9%</div>
                <div className="opacity-70">Enfoque en seguridad</div>
              </div>
              <div>
                <div className="text-2xl font-semibold">24/7</div>
                <div className="opacity-70">Soporte disponible</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-x-8 -inset-y-8 -z-10 bg-gradient-to-tr from-emerald-200/30 via-cyan-200/30 to-transparent blur-2xl" />
            <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-3">
              <Image
                src={HeroImg}
                alt="Imagen destacada de calentador de agua moderno"
                priority
                className="rounded-xl w-full h-auto object-cover"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="container-edge py-10">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-xl border border-black/10 bg-white p-5">
          <div className="flex items-center gap-3">
            <ShieldIcon />
            <div>
              <p className="text-sm font-medium leading-none">Seguridad ante todo</p>
              <p className="text-sm opacity-70">Cada unidad probada y certificada</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SparkIcon />
            <div>
              <p className="text-sm font-medium leading-none">Eficiencia energética</p>
              <p className="text-sm opacity-70">Componentes de alta eficiencia</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <WrenchIcon />
            <div>
              <p className="text-sm font-medium leading-none">Hecho para durar</p>
              <p className="text-sm opacity-70">Diseño robusto y fácil de mantener</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="container-edge py-16 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sistemas destacados</h2>
            <p className="opacity-70 mt-1">Opciones populares para hogares y negocios.</p>
          </div>
          <Link href="/products" className="btn btn-outline h-10 px-4">Ver todo</Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <Link href="/products" className="group rounded-2xl border border-black/10 bg-white overflow-hidden">
            <div className="aspect-[16/10] bg-muted">
              <Image src={CBXImg} alt="Sistema de control CBX" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" placeholder="blur" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium">Sistemas de control CBX</h3>
              <p className="opacity-70 text-sm mt-1">Gestión inteligente y precisa de temperatura con componentes modulares.</p>
            </div>
          </Link>
          <Link href="/products" className="group rounded-2xl border border-black/10 bg-white overflow-hidden">
            <div className="aspect-[16/10] bg-muted">
              <Image src={HeroImg} alt="Calentador de agua eléctrico sin tanque" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" placeholder="blur" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-medium">Calentadores eléctricos sin tanque</h3>
              <p className="opacity-70 text-sm mt-1">Agua caliente al instante con bajo mantenimiento y larga vida útil.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-edge py-16 md:py-24">
        <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-emerald-700"><path d="M12 3v18m9-9H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="mt-4 font-medium">Calentamiento instantáneo, menor consumo</h3>
              <p className="mt-1 text-sm opacity-70">Elementos eléctricos avanzados proporcionan agua caliente al instante con menor consumo de energía.</p>
            </div>
            <div>
              <div className="h-10 w-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-cyan-700"><path d="M4 12h16M4 16h10M4 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="mt-4 font-medium">Instalación sencilla</h3>
              <p className="mt-1 text-sm opacity-70">Diseño modular y cableado claro para una instalación y servicio rápidos.</p>
            </div>
            <div>
              <div className="h-10 w-10 rounded-lg bg-sky-100 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-sky-700"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h3 className="mt-4 font-medium">Diseñado para máxima disponibilidad</h3>
              <p className="mt-1 text-sm opacity-70">Componentes robustos y protecciones mantienen el flujo de agua caliente.</p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/support/contact" className="btn btn-primary h-11 px-5">Solicitar cotización</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-edge pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-tr from-emerald-50 to-cyan-50 p-8 md:p-12">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">¿Listo para agua caliente confiable?</h3>
            <p className="opacity-80 mt-2">Habla con nuestro equipo o explora sistemas adaptados a tus necesidades.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="/products" className="btn btn-primary h-11 px-5">Explorar productos</Link>
              <Link href="/support/contact" className="btn btn-outline h-11 px-5">Contactar ventas</Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>
      </section>
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="h-10 w-10 rounded-lg bg-black/[0.04] flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-black/70">
        <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    </div>
  );
}

function SparkIcon() {
  return (
    <div className="h-10 w-10 rounded-lg bg-black/[0.04] flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-black/70">
        <path d="M12 2l2.5 6H21l-5 3.5L18.5 18 12 14.5 5.5 18 8 11.5 3 8h6.5L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function WrenchIcon() {
  return (
    <div className="h-10 w-10 rounded-lg bg-black/[0.04] flex items-center justify-center">
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-black/70">
        <path d="M21 7a4 4 0 01-5.657 3.657L8.414 17.586a2 2 0 11-2.828-2.828l6.93-6.929A4 4 0 117 3l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}
