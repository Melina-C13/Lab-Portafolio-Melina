import { useState } from 'react'

export function useTheme() {
  const [darkMode, setDarkMode] = useState<boolean>(true)

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }

  if (darkMode) document.documentElement.classList.add('dark')

  return { darkMode, toggleTheme }
}