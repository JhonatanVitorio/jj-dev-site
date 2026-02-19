import { useEffect, useRef } from "react"

export function WordmarkParallax() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2 // -1 a 1
      const y = (e.clientY / innerHeight - 0.5) * 2

      el.style.transform = `translate3d(${x * 10}px, ${y * 8}px, 0)`
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <div ref={ref} className="select-none text-center">
        <div className="text-[72px] sm:text-[120px] md:text-[160px] font-black tracking-tight text-blue-600/5">
        </div>
        <div className="-mt-6 text-[26px] sm:text-[42px] md:text-[60px] font-semibold tracking-[0.35em] text-blue-600/5">
        </div>
      </div>
    </div>
  )
}
