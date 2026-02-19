import { AuroraBackground } from "./AuroraBackground"

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-50">
      <AuroraBackground />
    </div>
  )
}
