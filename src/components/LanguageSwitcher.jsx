import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const change = (lng) => i18n.changeLanguage(lng)
  return (
    <div className="flex items-center gap-2">
      <button className="text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => change('es')}>ES</button>
      <button className="text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => change('en')}>EN</button>
      <button className="text-sm px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => change('pt')}>PT</button>
    </div>
  )
}
