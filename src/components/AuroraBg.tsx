export function AuroraBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />

      {/* auroras */}
      <div className="absolute -top-24 left-[-20%] h-[420px] w-[520px] rounded-full bg-cyan-500/25 blur-3xl animate-[float_10s_ease-in-out_infinite]" />
      <div className="absolute top-16 right-[-20%] h-[420px] w-[520px] rounded-full bg-blue-500/20 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-[-120px] left-[20%] h-[420px] w-[520px] rounded-full bg-cyan-400/15 blur-3xl animate-[float_14s_ease-in-out_infinite]" />

      {/* overlay pra leitura */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/60 to-slate-950" />
    </div>
  )
}
