import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaRocket, FaUserTie, FaLightbulb } from 'react-icons/fa'

export default function About() {
  const { t } = useTranslation()
  
  const features = [
    {
      icon: <FaCode className="text-indigo-500 text-2xl" />,
      title: "Frontend Expertise",
      description: t('') || "Proyectos con React, Next.js, Tailwind CSS y animaciones modernas con Framer Motion."
    },
    {
      icon: <FaServer className="text-cyan-500 text-2xl" />,
      title: "Backend Skills",
      description: t('') || "APIs con Node.js, Express, bases de datos MongoDB y PostgreSQL, autenticación JWT."
    },
    {
      icon: <FaRocket className="text-purple-500 text-2xl" />,
      title: "DevOps",
      description: t('') || "Despliegues en Vercel, Netlify, AWS y configuración de CI/CD pipelines."
    },
    {
      icon: <FaUserTie className="text-emerald-500 text-2xl" />,
      title: t('about.availability') || "Disponibilidad",
      description: t('') || "Abierto a oportunidades freelance y proyectos a largo plazo."
    }
  ]

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-20">
      {/* Encabezado con animación */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          {t('') || "Sobre Mí"}
        </h1>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t('') || "Desarrollador en formación con mentalidad de crecimiento. Combinó fundamentos técnicos con una actitud proactiva para resolver problemas. Autodidacta por naturaleza pero consciente del valor del trabajo en equipo. Busco integrarme a proyectos desafiantes donde pueda aportar mi perspectiva fresca y convertir retos en aprendizaje tangible."}
        </motion.p>
      </motion.div>

      {/* Tarjetas de características */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700/50"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-indigo-50 dark:bg-gray-700">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{feature.title}</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}