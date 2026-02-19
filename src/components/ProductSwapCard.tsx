import { useEffect, useState } from "react"

type ProductSwapCardProps = {
  title: string
  desc: string
  image: string
  href?: string
}

export function ProductSwapCard({
  title,
  desc,
  image,
  href = "#",
}: ProductSwapCardProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 640
      setIsMobile(mobile)
      if (!mobile) setIsFlipped(false)
    }

    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const handleToggle = () => {
    if (!isMobile) return
    setIsFlipped((v) => !v)
  }

  return (
    <div
      className={[
        "group relative w-full max-w-[360px] [perspective:1200px]",
        // ✅ MOBILE: quase quadrado (um pouquinho mais alto pra caber botões)
        "aspect-[1/1.05]",
        // ✅ DESKTOP: mantém alturas originais
        "sm:aspect-auto sm:h-[300px] md:h-[320px]",
      ].join(" ")}
      onClick={handleToggle}
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : -1}
      onKeyDown={(e) => {
        if (!isMobile) return
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleToggle()
        }
      }}
    >
      {/* miolo que gira */}
      <div
        className={[
          "relative h-full w-full rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl transition-transform duration-700 [transform-style:preserve-3d]",
          "group-hover:[transform:rotateY(180deg)]",
          isFlipped ? "[transform:rotateY(180deg)] sm:[transform:none]" : "",
        ].join(" ")}
      >
        {/* FRENTE */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl [backface-visibility:hidden]">
          <div className="relative h-full w-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
            <h3 className="text-sm sm:text-xl font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1.5 text-[11px] leading-snug sm:mt-2 sm:text-sm text-white/70 line-clamp-2">
              {desc}
            </p>

            <div className="mt-3 sm:mt-4 hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              Passe o mouse para ver <span className="opacity-70">→</span>
            </div>

            <div className="mt-2 inline-flex sm:hidden items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-[11px] text-cyan-200">
              Toque para ver <span className="opacity-70">→</span>
            </div>
          </div>
        </div>

        {/* VERSO */}
        <div className="absolute inset-0 rounded-3xl p-2 sm:p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55">
            <div className="pointer-events-none absolute -inset-10 bg-cyan-500/10 blur-3xl opacity-70" />

            <div className="relative h-full min-h-0 p-2 sm:p-6 flex flex-col">
              <h3 className="text-sm sm:text-xl font-semibold text-white">
                {title}
              </h3>

              {/* ✅ MOBILE: limita mais o texto pra sobrar espaço pros botões */}
              <p className="mt-1.5 text-[11px] leading-snug sm:mt-2 sm:text-sm text-white/70 line-clamp-3 sm:line-clamp-none">
                {desc}
              </p>

              <div className="mt-auto pt-2 sm:pt-6">
                <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-3">
                  <a
                    href={href}
                    className="w-full sm:w-auto text-center rounded-full bg-cyan-500 px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-slate-950 hover:bg-cyan-400 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Detalhes
                  </a>

                  <a
                    href="#contato"
                    className="w-full sm:w-auto text-center rounded-full border border-cyan-400/40 bg-white/5 px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-sm font-medium text-cyan-200 hover:bg-white/10 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Orçamento
                  </a>
                </div>

                {/* ✅ MOBILE: rodapé bem compacto */}
                <div className="mt-1.5 sm:mt-6 text-[9px] sm:text-xs text-white/50">
                  JJ Dev. Todos os direitos reservados.
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
