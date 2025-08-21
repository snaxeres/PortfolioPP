import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaCode, FaServer } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function Footer() {
  const { t } = useTranslation()
  
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/snaxeres",
      label: "GitHub",
      hover: "hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/enrii-alegre-ab9b45152/",
      label: "LinkedIn",
      hover: "hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      icon: <FaWhatsapp className="text-xl" />,
      url: "https://wa.me/5491168908235",
      label: "WhatsApp",
      hover: "hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:enriquealegreal@gmail.com",
      label: "Email",
      hover: "hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
    }
  ]

  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Sección principal */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Branding */}
          <div className="flex flex-col">
            <motion.div 
              className="flex items-center gap-4 mb-4"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                EA
              </div>
              <div>
                <div className="font-bold text-lg">Enrique Alegre</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('') || "Crafting digital experiences"}</div>
              </div>
            </motion.div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
              {t('') || "Fullstack developer specializing in modern web technologies and scalable solutions."}
            </p>
          </div>

          {/* Especialidades */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <FaCode className="text-indigo-500" /> 
              <span>{t('') || "Expertise"}</span>
            </h3>
            <ul className="space-y-2">
              {['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'].map((tech, i) => (
                <motion.li 
                  key={tech}
                  className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contacto rápido */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <FaServer className="text-cyan-500" /> 
              <span>{t('') || "Connect"}</span>
            </h3>
            <div className="flex flex-wrap justify-end gap-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className={`p-3 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-all ${link.hover}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-gray-100 dark:border-gray-800/50 pt-6 text-center text-xs text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Enrique Alegre. {t('') || "All rights reserved."}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">{t('') || "Privacy Policy"}</a>
            <a href="#" className="hover:text-gray-800 dark:hover:text-gray-200 transition">{t('') || "Terms of Service"}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}