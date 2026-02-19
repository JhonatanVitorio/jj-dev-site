import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { projects } from "../data/projects"
import { Reveal } from "../components/Reveal"

export function Projects() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Projetos em destaque</h2>
        <p className="mt-2 text-white/70">
          Cases reais com foco em UI premium, arquitetura e entregas completas.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            className="group overflow-hidden border-white/10 bg-white/[0.03]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.03]"
              />

              <div className="absolute left-3 top-3">
                <Badge className="bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20">
                  {p.type}
                </Badge>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent opacity-90" />
            </div>

            <CardContent className="p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
              <p className="mt-3 text-sm text-white/60">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="bg-white/5 text-white/75 ring-1 ring-white/10"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {projects.map((p, idx) => (
                <Reveal key={p.title} delay={idx * 0.05}>
                    <Card className="group overflow-hidden border-white/10 bg-white/[0.03] transition hover:bg-white/[0.05]">
                    ...
                    </Card>
                </Reveal>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
