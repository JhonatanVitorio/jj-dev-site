import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "../components/ui/button"
import crmImage from "../assets/images/crm.png"
import hypeImage from "../assets/images/hypeShoes.png"
import verificaBcImage from "../assets/images/verificaBc.png"

type FeaturedProject = {
  tag: string
  title: string
  subtitle: string
  description: string
  bullets: string[]
  image: string
  ctaPrimary: { label: string; href: string }
  ctaSecondary: { label: string; href: string }
}

const AUTOPLAY_MS = 5500

export function FeaturedProjects() {
  const projects = useMemo<FeaturedProject[]>(
    () => [
      {
        tag: "Projeto em destaque",
        title: "CRM com Dashboard Executivo",
        subtitle: "Gestão Comercial e Performance",
        description:
          "Sistema completo para gestão de leads, times e funil de vendas, com métricas em tempo real e visão estratégica do negócio.",
        bullets: ["KPIs por período e funil", "Relatórios exportáveis", "Ranking de Operadores"],
        image: crmImage,
        ctaPrimary: { label: "Ver projeto", href: "#projetos" },
        ctaSecondary: { label: "Pedir orçamento", href: "#contato" },
      },
      {
        tag: "Projeto em destaque",
        title: "Hype Shoes Store",
        subtitle: "ECOMMERCE PREMIUM",
        description:
          "E-commerce completo com catálogo dinâmico, filtros por marca, sistema de ofertas e experiência mobile-first focada em conversão.",
        bullets: ["Filtros por categoria e marca", "Sistema de promoções e descontos", "Layout responsivo e otimizado"],
        image: hypeImage,
        ctaPrimary: { label: "Ver projeto", href: "#projetos" },
        ctaSecondary: { label: "Pedir orçamento", href: "#contato" },
      },
      {
        tag: "Projeto em destaque",
        title: "VerificaBC",
        subtitle: "Módulo de Segurança Digital",
        description:
          "Sistema inteligente de verificação de links com integração de agente de IA para detecção de fraudes, análise comportamental e aplicação de regras antifraude em tempo real.",
        bullets: ["Agente de IA treinado em fraudes bancárias", "Motor de regras e whitelist/blacklist", "Score de risco automatizado"],
        image: verificaBcImage,
        ctaPrimary: { label: "Ver projeto", href: "#projetos" },
        ctaSecondary: { label: "Pedir orçamento", href: "#contato" },
      },
    ],
    []
  )

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const prev = () => setActive((i) => (i - 1 + projects.length) % projects.length)
  const next = () => setActive((i) => (i + 1) % projects.length)

  // === SWIPE (mobile) ===
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0]
    touchStartX.current = t.clientX
    touchStartY.current = t.clientY
    setPaused(true)
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || touchStartY.current == null) return

    const t = e.changedTouches[0]
    const dx = t.clientX - touchStartX.current
    const dy = t.clientY - touchStartY.current

    const isHorizontal = Math.abs(dx) > Math.abs(dy)

    if (isHorizontal && Math.abs(dx) > 50) {
      if (dx < 0) next()
      else prev()
    }

    touchStartX.current = null
    touchStartY.current = null
    setPaused(false)
  }

  useEffect(() => {
    if (paused) return
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % projects.length)
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [paused, projects.length])

  const p = projects[active]

  return (
    <section id="projetos" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 md:mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Projetos em <span className="text-cyan-300">destaque</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={prev}
            aria-label="Projeto anterior"
            type="button"
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 hidden md:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white">
              ‹
            </span>
          </button>

          <button
            onClick={next}
            aria-label="Próximo projeto"
            type="button"
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 hidden md:flex"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 backdrop-blur transition hover:bg-white/10 hover:text-white">
              ›
            </span>
          </button>

          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl touch-pan-y"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onTouchCancel={() => setPaused(false)}
          >
            <div className="pointer-events-none absolute inset-0 bg-cyan-500/10 blur-3xl [clip-path:inset(0)]" />

            {/* MOBILE: stack com imagem aspect / DESKTOP: lg grid igual */}
            <div className="relative grid grid-cols-1 lg:min-h-[420px] lg:grid-cols-2">
              {/* Imagem */}
              <div className="relative">
                <div className="aspect-[16/9] lg:aspect-auto lg:h-full">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/35 via-slate-950/10 to-slate-950/0" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-xs text-white/70 backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {p.tag}
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative p-5 sm:p-8 lg:p-10">
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-medium tracking-wider text-cyan-300/90">{p.subtitle.toUpperCase()}</p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">{p.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{p.description}</p>
                  </div>

                  <div className="space-y-3">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-3 text-sm text-white/70">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-500/10 text-cyan-200">
                          ✓
                        </span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* MOBILE: botões full width */}
                  <div className="grid grid-cols-1 gap-2 sm:flex sm:flex-row sm:gap-3">
                    <Button asChild className="h-11 w-full rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 sm:w-auto">
                      <a href={p.ctaPrimary.href}>{p.ctaPrimary.label}</a>
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="h-11 w-full rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 sm:w-auto"
                    >
                      <a href={p.ctaSecondary.href}>{p.ctaSecondary.label}</a>
                    </Button>
                  </div>

                  {/* Dots + mobile arrows */}
                  <div className="mt-1 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {projects.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          aria-label={`Ir para projeto ${i + 1}`}
                          className={[
                            "h-2.5 w-2.5 rounded-full transition",
                            i === active ? "bg-cyan-300" : "bg-white/20 hover:bg-white/35",
                          ].join(" ")}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2 md:hidden">
                      <button
                        onClick={prev}
                        className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                        aria-label="Anterior"
                      >
                        ‹
                      </button>
                      <button
                        onClick={next}
                        className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                        aria-label="Próximo"
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </section>
  )
}