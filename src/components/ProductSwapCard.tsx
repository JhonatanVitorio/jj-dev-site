type ProductSwapCardProps = {
  title: string
  desc: string
  image: string
  href?: string
}

export function ProductSwapCard({ title, desc, image, href = "#" }: ProductSwapCardProps) {
  return (
    <div className="group relative w-full [perspective:1200px]">
      {/* MOBILE: quadrado e sem flip | DESKTOP: altura e flip */}
      <div
        className="
          relative w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl
          aspect-square
          sm:aspect-auto sm:h-[300px]
          md:h-[320px]
          sm:[transform-style:preserve-3d]
          sm:transition-transform sm:duration-700
          sm:group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* FRENTE (sempre aparece) */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative h-full w-full">
            <img src={image} alt={title} className="h-full w-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-slate-950/10" />
          </div>

          {/* Conteúdo compacto e “premium” */}
          <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
            <h3 className="text-[13px] sm:text-xl font-semibold text-white leading-tight line-clamp-2">
              {title}
            </h3>
            <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-sm text-white/70 line-clamp-2">
              {desc}
            </p>

            {/* MOBILE: CTA direto (profissional) */}
            <div className="mt-2 flex gap-2 sm:hidden">
              <a
                href={href}
                className="flex-1 rounded-full bg-cyan-500 px-3 py-2 text-[11px] font-medium text-slate-950 hover:bg-cyan-400 transition text-center"
              >
                Detalhes
              </a>
              <a
                href="#contato"
                className="flex-1 rounded-full border border-cyan-400/40 bg-white/5 px-3 py-2 text-[11px] font-medium text-cyan-200 hover:bg-white/10 transition text-center"
              >
                Orçamento
              </a>
            </div>

            {/* DESKTOP: hint do flip */}
            <div className="mt-4 hidden sm:inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              Passe o mouse para ver <span className="opacity-70">→</span>
            </div>
          </div>
        </div>

        {/* VERSO (apenas desktop) */}
        <div className="absolute inset-0 hidden sm:block rounded-3xl p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <div className="pointer-events-none absolute -inset-10 bg-cyan-500/10 blur-3xl opacity-70" />

            <div className="relative">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>

              <div className="mt-6 flex gap-3">
                <a
                  href={href}
                  className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400 transition"
                >
                  Detalhes
                </a>

                <a
                  href="#contato"
                  className="rounded-full border border-cyan-400/40 bg-white/5 px-5 py-2 text-sm font-medium text-cyan-200 hover:bg-white/10 transition"
                >
                  Orçamento
                </a>
              </div>

              <div className="mt-6 text-xs text-white/50">
                JJ Dev. Todos os direitos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
