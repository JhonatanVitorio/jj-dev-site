import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiSpringboot,
  SiDocker,
  SiGithub,
} from "react-icons/si"
import { FaServer } from "react-icons/fa"

const stack = [
  { name: "React", icon: SiReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Prisma", icon: SiPrisma, color: "text-indigo-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "REST APIs", icon: FaServer, color: "text-orange-400" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
]

export function TechStack() {
  return (
    <section className="relative py-14 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tecnologias que <span className="text-cyan-300">utilizamos</span>
          </h2>
          <p className="mt-3 text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Stack moderna para performance, escalabilidade e manutenção profissional.
          </p>
        </div>

        {/* MOBILE: 2 col | SM: 3 col | MD+: 5 col */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-5 md:gap-6">
          {stack.map((tech) => {
            const Icon = tech.icon

            return (
              <div
                key={tech.name}
                className="
                  group relative rounded-2xl border border-white/10 bg-white/5
                  p-4 sm:p-5 md:p-6
                  backdrop-blur-md transition-all duration-300
                  hover:border-cyan-400/40 hover:bg-white/10
                "
              >
                {/* Glow */}
                <div className="absolute -inset-1 bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10" />

                <div className="flex flex-col items-center justify-center gap-3">
                  <Icon
                    size={30}
                    className={`${tech.color} transition-transform duration-300 group-hover:scale-110`}
                  />
                  <span className="text-xs sm:text-sm font-medium text-white/80 group-hover:text-white transition text-center">
                    {tech.name}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
