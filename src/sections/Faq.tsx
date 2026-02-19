import { Card, CardContent } from "../components/ui/card"
import { Reveal } from "../components/Reveal"

const faqs = [
  {
    q: "Vocês entregam com domínio e hospedagem?",
    a: "Sim. Podemos orientar tudo e publicar com configuração correta de DNS, SSL e boas práticas.",
  },
  {
    q: "O site é rápido e aparece no Google?",
    a: "O foco é performance e SEO básico: estrutura, responsividade, boas tags e carregamento otimizado.",
  },
  {
    q: "Dá para evoluir depois?",
    a: "Sim. A base em React + TypeScript facilita manutenção, novas páginas, integrações e automações.",
  },
]

export function Faq() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
        <p className="mt-2 text-white/70">Respostas rápidas para tirar dúvidas e passar confiança.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {faqs.map((f, idx) => (
          <Reveal key={f.q} delay={idx * 0.05}>
            <Card className="border-white/10 bg-white/[0.03]">
              <CardContent className="p-6">
                <p className="text-sm font-semibold">{f.q}</p>
                <p className="mt-2 text-sm text-white/70">{f.a}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
