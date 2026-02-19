import { Card, CardContent } from "../components/ui/card"
import { Reveal } from "../components/Reveal"

const testimonials = [
  {
    name: "Cliente (exemplo)",
    role: "Comércio local",
    text: "O site ficou muito mais profissional e rápido. A comunicação foi clara e a entrega foi no prazo.",
  },
  {
    name: "Cliente (exemplo)",
    role: "Prestador de serviços",
    text: "Além do design, a automação reduziu tarefas repetitivas e melhorou o atendimento.",
  },
  {
    name: "Cliente (exemplo)",
    role: "Empresa pequena",
    text: "Sistema interno com relatórios e controle. Interface limpa e fácil de usar.",
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">O que falam</h2>
        <p className="mt-2 text-white/70">Feedbacks que reforçam confiança e credibilidade.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <Reveal key={t.name + idx} delay={idx * 0.05}>
            <Card className="border-white/10 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="text-sm text-white/70">“{t.text}”</p>
                <div className="mt-4">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
