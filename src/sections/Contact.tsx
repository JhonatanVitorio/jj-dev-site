import { useMemo, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "../components/ui/button"

type FormState = {
  name: string
  email: string
  phone: string
  message: string
}

export function Contact() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const disabled = useMemo(() => {
    return (
      loading ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    )
  }, [form, loading])

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("idle")

    // validação simples
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    if (!emailOk) {
      setStatus("error")
      return
    }

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars missing")
      setStatus("error")
      return
    }

    try {
      setLoading(true)

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        { publicKey }
      )

      setStatus("success")
      setForm({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contato" className="py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Vamos tirar sua ideia do papel
          </h2>
          <p className="mt-2 text-white/60">
            Me diga o que você precisa e eu retorno com prazo e proposta.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm text-white/70">Nome</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                className="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-white outline-none focus:border-cyan-300/40"
                placeholder="Seu nome"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-white/70">E-mail</label>
              <input
                name="email"
                value={form.email}
                onChange={onChange}
                className="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-white outline-none focus:border-cyan-300/40"
                placeholder="seuemail@exemplo.com"
                autoComplete="email"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm text-white/70">WhatsApp (opcional)</label>
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                className="h-11 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 text-white outline-none focus:border-cyan-300/40"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label className="text-sm text-white/70">Mensagem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none focus:border-cyan-300/40"
                placeholder="Me conte o que você quer construir..."
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm">
              {status === "success" && (
                <span className="text-emerald-300">Mensagem enviada! ✅</span>
              )}
              {status === "error" && (
                <span className="text-red-300">
                  Não foi possível enviar. Verifique o e-mail e tente novamente.
                </span>
              )}
            </div>

            <Button
              type="submit"
              style={{ cursor: 'pointer'}}
              disabled={disabled}
              className="h-11 rounded-2xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
