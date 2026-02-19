import { useEffect, useMemo, useState } from "react"

type Item = { label: string; href: string }

export function PillNav({
  items,
  className,
}: {
  items: Item[]
  className?: string
}) {
  const [active, setActive] = useState(items[0]?.href ?? "#top")

  const activeIndex = useMemo(() => {
    const idx = items.findIndex((i) => i.href === active)
    return idx === -1 ? 0 : idx
  }, [active, items])

  useEffect(() => {
    const onScroll = () => {
      const anchors = items
        .filter((i) => i.href.startsWith("#"))
        .map((i) => {
          const el = document.querySelector(i.href)
          if (!el) return null
          const top = (el as HTMLElement).getBoundingClientRect().top
          return { href: i.href, top }
        })
        .filter(Boolean) as { href: string; top: number }[]

      const current = anchors
        .filter((a) => a.top <= 120)
        .sort((a, b) => b.top - a.top)[0]

      if (current?.href) setActive(current.href)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [items])

  return (
    <div
      className={[
        "relative flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur",
        className ?? "",
      ].join(" ")}
      style={{ width: items.length * 112 + 8 }}
    >
      <div
        className="absolute top-1 bottom-1 rounded-full bg-cyan-500/15 ring-1 ring-cyan-400/20 transition-all duration-300"
        style={{
          left: 4 + activeIndex * 112,
          width: 108,
        }}
      />

      {items.map((item) => {
        const isActive = item.href === active
        return (
          <button
            key={item.href}
            className={[
              "relative z-10 h-9 w-[108px] rounded-full text-sm transition",
              isActive
                ? "text-cyan-100"
                : "text-white/70 hover:text-white",
            ].join(" ")}
            onClick={() => {
              setActive(item.href)
              if (item.href.startsWith("#")) {
                document
                  .querySelector(item.href)
                  ?.scrollIntoView({ behavior: "smooth" })
              } else {
                window.location.href = item.href
              }
            }}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}
