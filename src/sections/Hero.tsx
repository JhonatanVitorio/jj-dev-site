import { Button } from "../components/ui/button"
import { WordmarkParallax } from "../components/backgrounds/WordmarkParallax"
import { StarBorder } from "../components/StarBorder"
import logo from "@/assets/logos/logotipo.png"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <WordmarkParallax />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:py-14 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
          {/* MOBILE LOGO (fica acima e central) */}
          <div className="flex justify-center md:hidden">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
              <img
                src={logo}
                alt="JJ Dev Solutions"
                className="h-28 w-auto object-contain"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="max-w-xl md:max-w-none text-center md:text-left mx-auto md:mx-0">
            <p className="text-[12px] sm:text-sm font-medium text-white/60">
              Soluções digitais sob medida, com padrão de produto.
            </p>

            <h1 className="mt-2 text-[28px] leading-tight font-bold tracking-tight sm:text-5xl md:text-4xl lg:text-5xl">
              Sites modernos, automações e sistemas{" "}
              <span className="text-cyan-300">profissionais</span>
            </h1>

            <p className="mt-3 text-[13px] leading-relaxed sm:text-base text-white/70">
              Desenvolvemos soluções digitais sob medida para empresas que querem crescer com tecnologia.
              Criamos sites, sistemas e automações com foco em performance, escalabilidade e resultado real.
            </p>

            {/* BOTÕES: menores no mobile */}
            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-start sm:items-start">
              <StarBorder>
                <Button
                  asChild
                  className="h-10 px-4 text-sm rounded-2xl bg-white/10 hover:bg-white/15 sm:h-11 sm:px-6 sm:text-base"
                >
                  <a href="#contato">Pedir orçamento</a>
                </Button>
              </StarBorder>

              <Button
                variant="outline"
                asChild
                className="h-10 px-4 text-sm rounded-2xl border-white/15 bg-white/5 hover:bg-white/10 sm:h-11 sm:px-6 sm:text-base"
              >
                <a href="#projetos">Ver projetos</a>
              </Button>
            </div>

            {/* BLOQUINHOS: mais compactos e alinhados no mobile */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:mt-10">
              {[
                { k: "Sistemas", v: "Alta conversão" },
                { k: "SEO", v: "Performance" },
                { k: "APIs", v: "Integrações" },
                { k: "Arquitetura", v: "Escalável" },
              ].map((item) => (
                <div
                  key={item.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left"
                >
                  <div className="text-[10px] sm:text-xs text-white/60">{item.k}</div>
                  <div className="text-[12px] sm:text-sm font-semibold text-white">{item.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP LOGO (mantém do jeito que já estava) */}
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
              <img
                src={logo}
                alt="JJ Dev Solutions"
                className="h-48 md:h-60 lg:h-72 w-auto object-contain transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
