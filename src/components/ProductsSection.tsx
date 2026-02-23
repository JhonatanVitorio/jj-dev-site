import { ProductSwapCard } from "./ProductSwapCard"
import chatbotImg from "../assets/images/chatbot.png"

export function ProductsSection() {
  const products = [
    {
      title: "Sistema de Gestão",
      description:
        "Dashboard completo com métricas, relatórios e controle operacional.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
      href: "#",
    },
    {
      title: "Web Sites e Sistemas",
      description: "Sistemas web sob medida, desde a ideia até o deploy.",
      image:
        "https://sitebemfeito.com.br/blog/wp-content/uploads/2023/02/Imagem-tipos-de-sites-4-min-1024x683.png",
      href: "#",
    },
    {
      title: "Automação & APIs",
      description:
        "Integrações inteligentes para reduzir tarefas e aumentar eficiência.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070",
      href: "#",
    },
    {
      title: "Landing Page Moderna",
      description:
        "Sites de alta conversão com performance, SEO e design premium.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2070",
      href: "#",
    },
    {
      title: "Chatbots Inteligentes",
      description:
        "Automação de atendimento e vendas, via WhatsApp, Telegram e Emails...",
      image: chatbotImg,
      href: "#",
    },
  ]

  return (
    <section id="produtos" className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Nossos <span className="text-cyan-400">Produtos</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-base">
          Projetos desenvolvidos com arquitetura moderna, UI premium e foco em
          resultado real.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 justify-items-center">
        {products.map((product, index) => {
          const total = products.length
          const remainder = total % 3

          // Desktop: mantém EXATAMENTE sua lógica original
          const isLastRowTwo = remainder === 2 && index >= total - 2

          // Mobile: último card maior (ocupa a linha toda)
          const isLastMobile = index === total - 1

          return (
            <div
              key={index}
              className={[
                // base igual ao seu (desktop preservado)
                "w-full max-w-sm",

                // ✅ SOMENTE MOBILE: último item vira “grande”
                isLastMobile ? "col-span-2" : "",

                // ✅ NO DESKTOP volta ao normal (não ocupa 2 colunas e não estica)
                isLastMobile ? "md:col-span-1 md:max-w-sm" : "",

                // Desktop: seu translate original
                isLastRowTwo ? "md:translate-x-1/2" : "",
              ].join(" ")}
            >
              <ProductSwapCard
                title={product.title}
                desc={product.description}
                image={product.image}
                href={product.href}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
