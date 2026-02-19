import { Button } from "../ui/button"
import logo from "@/assets/logos/logotipo.png"
import { PillNav } from "./PillNav"

const items = [
  { label: "Produtos", href: "#produtos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/25 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logo}
            alt="JJ Dev Solutions"
            className="h-12 sm:h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
        </a>

        <div className="hidden md:block">
          <PillNav items={items} />
        </div>

        <Button asChild className="hidden md:inline-flex h-10 rounded-xl">
          <a href="#contato">Orçamento</a>
        </Button>

        <Button
          variant="outline"
          className="md:hidden h-10 border-white/20 bg-white/5 rounded-xl"
          asChild
        >
          <a href="#contato">Contato</a>
        </Button>
      </div>
    </header>
  )
}
