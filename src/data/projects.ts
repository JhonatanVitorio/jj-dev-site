import verificaImg from "../assets/projects/verificabc.png"
import crmImg from "../assets/projects/crm.png"
import hypeImg from "../assets/projects/hypeshoes.png"

export type ProjectItem = {
  title: string
  subtitle: string
  description: string
  stack: string[]
  image: string
  type: "SaaS" | "Dashboard" | "E-commerce" | "AntiFraude"
}

export const projects: ProjectItem[] = [
  {
    title: "VerificaBC",
    subtitle: "Verificação inteligente de links de “valores a receber”",
    description:
      "Módulo antifraude que combina IA + motor de regras + persistência de histórico para classificar risco em tempo real.",
    stack: ["React", "TypeScript", "Spring Boot", "Regras", "IA"],
    image: verificaImg,
    type: "AntiFraude",
  },
  {
    title: "CRM Korp",
    subtitle: "CRM completo com funil, kanban e relatórios",
    description:
      "Sistema web com permissões por papel/time, pipeline em kanban, filtros e dashboards para performance de operação.",
    stack: ["React", "TypeScript", "Node", "Prisma", "PostgreSQL"],
    image: crmImg,
    type: "SaaS",
  },
  {
    title: "Hype Shoes",
    subtitle: "E-commerce moderno de tênis com catálogo",
    description:
      "Landing + catálogo com visual impactante, filtros e experiência mobile priorizada.",
    stack: ["Front-end", "UI/UX", "Catálogo", "Mobile First"],
    image: hypeImg,
    type: "E-commerce",
  },
]
