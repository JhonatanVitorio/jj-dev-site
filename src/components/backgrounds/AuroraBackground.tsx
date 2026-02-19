export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className ?? ""}`}>
      <div className="absolute inset-0 bg-slate-950" />

      {/* novo layer “vivo” */}
      <div className="aurora-shift" />

      {/* auroras */}
      <div className="aurora-blob aurora-1" />
      <div className="aurora-blob aurora-2" />
      <div className="aurora-blob aurora-3" />

      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.35\"/></svg>')",
        }}
      />

      {/* overlay: deixa um pouco menos pesado */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/45 to-slate-950" />
    </div>
  )
}

