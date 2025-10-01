// import { useEffect, useState } from 'react'

// export default function useTheme() {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', theme === 'dark')
//     localStorage.setItem('theme', theme)
//   }, [theme])

//   function toggleTheme() {
//     setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
//   }

//   return { theme, toggleTheme }
// }

import { useEffect, useState } from 'react'

export default function useTheme() {
  const getInitialTheme = () => {
    // 1. Si hay preferencia guardada en localStorage, usala
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme

    // 2. Si no, chequeá la preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    // Aplica el tema a <html>
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    // Guarda la preferencia
    localStorage.setItem('theme', theme)
  }, [theme])

  // Alterna entre claro y oscuro
  function toggleTheme() {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
