export type ServiceItem = {
  title: string
  description: string
  highlight?: string
}

export const services: ServiceItem[] = [
  {
    title: "Sites Profissionais",
    description:
      "Landing pages e sites institucionais com foco em conversão, performance e SEO.",
    highlight: "Entrega rápida",
  },
  {
    title: "Painéis e Dashboards",
    description:
      "Dashboards e sistemas internos (admin) para controle, relatórios e produtividade.",
    highlight: "Visual SaaS",
  },
  {
    title: "APIs & Integrações",
    description:
      "Integrações REST, autenticação, regras de negócio, banco de dados e serviços.",
    highlight: "Arquitetura limpa",
  },
  {
    title: "Bots & Automações",
    description:
      "Automatizações para atendimento, notificações, rotinas e processos repetitivos.",
    highlight: "Economia de tempo",
  },
]
