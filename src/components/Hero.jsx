import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop" alt="bg" className="w-full h-full object-cover opacity-25 dark:opacity-15" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
          <h1 className="text-4xl sm:text-6xl font-extrabold gradient-text">{t('hero.title')}</h1>
          <p className="mt-3 text-xl">{t('hero.subtitle')}</p>
          <p className="mt-4 max-w-2xl text-gray-700 dark:text-gray-200">{t('hero.bio')}</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#projects" className="inline-block px-6 py-3 rounded-lg text-white bg-gradient-to-r from-purple-600 to-cyan-400">{t('hero.cta')}</a>
            <a href="/Enrique-Alegre-CV.pdf" download className="text-sm underline">Descargar CV</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
