import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useContactForm } from '../../hooks/useContactForm'

export default function Contact() {
  const {
    form,
    errors,
    submitting,
    submitted,
    handleChange,
    handleSubmit,
  } = useContactForm()

  const inputClass = (field: keyof typeof errors): string =>
    `w-full rounded-lg border bg-white dark:bg-sapphire/50 px-4 py-3 text-sm
     placeholder:text-heather/60 focus:outline-none focus:ring-2 focus:ring-primary/30
     transition-colors ${errors[field] ? 'border-red-400' : 'border-heather/40 focus:border-primary'}`

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto"
      className="bg-primary/5 px-6 py-20 dark:bg-accent/10"
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            <span className="text-primary">Contáctame</span>
          </h2>
          <p className="mx-auto max-w-md text-heather">
            ¿Tienes un proyecto en mente o deseas colaborar? Envíame un mensaje.
          </p>
        </div>

        {submitted && (
          <div className="mb-6 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4 text-primary">
            <CheckCircle size={20} className="shrink-0" />
            <p className="text-sm font-medium">
              Mensaje enviado exitosamente. Te contactaré pronto.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                className={inputClass('name')}
              />
              {errors.name && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle size={12} /> {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputClass('email')}
              />
              {errors.email && (
                <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                  <AlertCircle size={12} /> {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Asunto del mensaje"
              className={inputClass('subject')}
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
              className={`${inputClass('message')} resize-none`}
            />
            {errors.message && (
              <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                <AlertCircle size={12} /> {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex self-start rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-accent hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="flex items-center justify-center gap-2">
              {submitting ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} /> Enviar Mensaje
                </>
              )}
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}