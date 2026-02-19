import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { services } from "../data/services"
import { Reveal } from "../components/Reveal"

export function ServicesGrid() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Serviços</h2>
        <p className="mt-2 text-white/70">
          O que a JJ Dev entrega com padrão profissional e foco em resultado.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {services.map((s, idx) => (
          <Reveal key={s.title} delay={idx * 0.05}>
            <Card className="border-white/10 bg-white/[0.03] backdrop-blur transition hover:bg-white/[0.05]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm sm:text-lg font-semibold">{s.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-white/70">
                      {s.description}
                    </p>
                  </div>

                  {s.highlight ? (
                    <Badge className="bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20 text-[10px] sm:text-xs">
                      {s.highlight}
                    </Badge>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
