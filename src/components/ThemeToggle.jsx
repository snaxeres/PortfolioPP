import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import useTheme from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}
