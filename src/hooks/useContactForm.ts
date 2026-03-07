import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

export function useContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const validate = () => {
    const newErrors: FormErrors = {}

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido.'
    }

    if (!form.message.trim() || form.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validate()) return

    setSubmitting(true)

    await new Promise((res) => setTimeout(res, 1500))

    setSubmitting(false)
    setSubmitted(true)

    setForm({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    setTimeout(() => setSubmitted(false), 5000)
  }

  return {
    form,
    errors,
    submitting,
    submitted,
    handleChange,
    handleSubmit,
  }
}