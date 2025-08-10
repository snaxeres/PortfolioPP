// import React from 'react'
// import { useTranslation } from 'react-i18next'

// export default function Contact(){
//   const { t } = useTranslation()
//   return (
//     <section id="contact" className="max-w-4xl mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
//       <p className="text-gray-700 dark:text-gray-200 mb-4">Contactame directamente por:</p>
//       <ul className="space-y-2">
//         <li><a href="https://wa.me/54911xxxxxxx" className="underline">WhatsApp</a></li>
//         <li><a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></li>
//         <li><a href="https://linkedin.com/in/your" target="_blank" rel="noreferrer" className="underline">LinkedIn</a></li>
//       </ul>
//       <p className="mt-6 text-sm text-gray-500">No incluí formulario funcional por pedido.</p>
//     </section>
//   )
// }

import React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const { t } = useTranslation()
  
  const contactMethods = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/5491168908235',
      icon: <FaWhatsapp className="text-green-500 text-2xl" />,
      color: 'hover:bg-green-100 dark:hover:bg-green-900/30'
    },
    {
      name: 'Email',
      url: 'enriquealegreal@gmail.com',
      icon: <FaEnvelope className="text-red-500 text-2xl" />,
      color: 'hover:bg-red-100 dark:hover:bg-red-900/30'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/enrii-alegre-ab9b45152/',
      icon: <FaLinkedin className="text-blue-500 text-2xl" />,
      color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    }
  ]

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500">
          {t('')}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('') || "¿Listo para trabajar juntos? Contáctame a través de:"}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method, index) => (
          <motion.a
            key={method.name}
            href={method.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`flex flex-col items-center p-6 rounded-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 ${method.color} group`}
          >
            <div className="mb-4 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md group-hover:shadow-lg transition-shadow">
              {method.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{method.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              {method.url.replace('mailto:', '').replace('https://', '')}
            </p>
            <motion.div 
              className="mt-3 text-indigo-600 dark:text-indigo-400 flex items-center"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className="mr-1">Contáctame</span>
              <FaPaperPlane className="text-sm" />
            </motion.div>
          </motion.a>
        ))}
      </div>

      <motion.p 
        className="mt-12 text-sm text-gray-500 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        {t('') || ""}
      </motion.p>
    </section>
  )
}