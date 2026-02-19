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
      title: "Web Sites e Sistemas Completos",
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

  const total = products.length

  return (
    <section id="produtos" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
          Nossos <span className="text-cyan-400">Produtos</span>
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
          Projetos desenvolvidos com arquitetura moderna, UI premium e foco em resultado real.
        </p>
      </div>

      {/* Mobile: 2 col | Desktop: 3 col */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-12">
        {products.map((product, index) => {
          // Regra: se total % 3 == 2 (ex: 5 itens), os 2 últimos ficam na última linha.
          // Em grid de 3 col, para centralizar esses 2:
          // - o primeiro dos dois começa na coluna 1 (col-start-1)
          // - o segundo começa na coluna 2 (col-start-2)
          // Assim eles ocupam col 1 e 2 e ficam centralizados sem “buraco” visual.
          const remainder = total % 3
          const isLastRowTwo = remainder === 2 && index >= total - 2
          const isFirstOfLastTwo = isLastRowTwo && index === total - 2
          const isSecondOfLastTwo = isLastRowTwo && index === total - 1

          // Mobile: quando ímpar (5 itens), último ocupa 2 colunas e centraliza.
          const isOddMobile = total % 2 === 1
          const isLastMobileSingle = isOddMobile && index === total - 1

          return (
            <div
              key={index}
              className={[
                "w-full",
                // Mobile centraliza último se sobrar 1
                isLastMobileSingle ? "col-span-2 mx-auto max-w-[420px]" : "",

                // Desktop (md): centralizar os 2 últimos sem translate
                isFirstOfLastTwo ? "md:col-start-1" : "",
                isSecondOfLastTwo ? "md:col-start-2" : "",
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
