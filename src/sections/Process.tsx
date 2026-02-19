import { Card, CardContent } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

const steps = [
  {
    title: "1) Diagnóstico",
    desc: "Entendemos sua necessidade e objetivos. Definimos escopo e prioridades.",
  },
  {
    title: "2) Proposta",
    desc: "Proposta clara com prazo, valor e entregáveis. Alinhamento antes de iniciar.",
  },
  {
    title: "3) Desenvolvimento",
    desc: "Construção com padrão de código, UI consistente e revisões rápidas.",
  },
  {
    title: "4) Entrega & Suporte",
    desc: "Publicação, ajustes finais e orientação. Se quiser, manutenção contínua.",
  },
]

export function Process() {
  return (
    <section id="processo" className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Como funciona</h2>
        <p className="mt-2 text-white/70">
          Processo simples, transparente e eficiente do início ao fim.
        </p>
      </div>

      <Card className="border-white/10 bg-white/[0.03]">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title}>
                <p className="text-sm font-semibold text-cyan-200">{s.title}</p>
                <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                {i < steps.length - 1 ? (
                  <Separator className="mt-6 hidden opacity-30 md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
