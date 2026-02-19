import React from "react"

export function StarBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="star-border-wrap">
      <div className="star-border-inner">{children}</div>
    </div>
  )
}
