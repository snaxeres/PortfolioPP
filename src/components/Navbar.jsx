import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const links = [
    { name: t('nav.home'), to: '#home' },
    { name: t('nav.about'), to: '#about' },
    { name: t('nav.projects'), to: '#projects' },
    { name: t('nav.contact'), to: '#contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 flex items-center justify-center text-white font-bold">EA</div>
          <div className="hidden sm:block">
            <div className="font-semibold">Enrique Alegre</div>
            <div className="text-xs text-gray-600 dark:text-gray-300">Fullstack · Front · Backend</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-4">
          {links.map(l => (
            <a key={l.to} href={l.to} className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">{l.name}</a>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md">
            {open ? <FaTimes size={20}/> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {links.map(l => (
            <a key={l.to} href={l.to} onClick={() => setOpen(false)} className="block px-3 py-2 rounded">{l.name}</a>
          ))}
          <div className="flex justify-between mt-2">
            <ThemeToggle />
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
