import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const phone = "5511952317638"

  const text = encodeURIComponent(
    "Olá! Vim pelo site da JJ Dev e quero um orçamento. Posso te explicar o projeto?"
  )

  const url = `https://wa.me/${phone}?text=${text}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="
        fixed right-4 z-50
        bottom-[calc(env(safe-area-inset-bottom)+16px)]
        inline-flex items-center gap-2
        rounded-full border border-white/10 bg-cyan-500/15
        px-3 py-3 sm:px-4
        text-sm font-medium text-cyan-100
        shadow-lg shadow-cyan-500/10 backdrop-blur
        hover:bg-cyan-500/20 transition
      "
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
