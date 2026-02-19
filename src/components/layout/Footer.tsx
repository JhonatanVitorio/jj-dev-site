import { Separator } from "@radix-ui/react-dropdown-menu"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Separator className="mb-8 opacity-40" />

        <div className="flex flex-col gap-4 items-center text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-sm font-semibold">JJ Dev Solutions</p>
            <p className="text-xs text-white/60">
              Transformamos ideias em soluções digitais.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60 md:justify-start">
            <a className="hover:text-white" href="#produtos">Produtos</a>
            <a className="hover:text-white" href="#projetos">Projetos</a>
            <a className="hover:text-white" href="#processo">Processo</a>
            <a className="hover:text-white" href="#contato">Contato</a>
          </div>

          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} JJ Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
