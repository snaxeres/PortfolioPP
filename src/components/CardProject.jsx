// import React from 'react'
// import { motion } from 'framer-motion'

// export default function CardProject({ project }){
//   return (
//     <motion.div
//       className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.45 }}
//     >
//       <div className="relative">
//         <img src={project.image} alt={project.title} className="w-full h-48 object-cover filter blur-sm transition duration-300 ease-out hover:blur-0" />
//         <div className="absolute inset-0 flex items-end p-4">
//           <div className="bg-white/75 dark:bg-black/60 backdrop-blur-sm rounded-md p-3 w-full">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="font-semibold">{project.title}</h3>
//                 <div className="text-xs mt-1 text-gray-600 dark:text-gray-300">{project.tools.join(' · ')}</div>
//               </div>
//               <div className="text-right">
//                 <a href={project.github} target="_blank" rel="noreferrer" className="inline-block text-sm underline">GitHub</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// import React from 'react'
// import { motion } from 'framer-motion'

// export default function CardProject({ project }) {
//   return (
//     <motion.div
//       className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.45 }}
//       whileHover={{
//         y: -10,
//         boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//         transition: { duration: 0.3, ease: "easeOut" }
//       }}
//     >
//       <div className="relative group">
//         {/* Imagen con efecto de zoom suave al hacer hover */}
//         <motion.img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-48 object-cover filter blur-sm group-hover:blur-0 transition-all duration-500 ease-out"
//           whileHover={{ scale: 1.05 }}
//         />
        
//         {/* Overlay con efecto de hover */}
//         <div className="absolute inset-0 flex items-end p-4">
//           <motion.div 
//             className="bg-white/75 dark:bg-black/60 backdrop-blur-sm rounded-md p-3 w-full"
//             initial={{ y: 10, opacity: 0.9 }}
//             whileHover={{ y: 0, opacity: 1 }}
//           >
//             <div className="flex justify-between items-start">
//               <div>
//                 <h3 className="font-semibold text-gray-800 dark:text-white">{project.title}</h3>
//                 <div className="text-xs mt-1 text-gray-600 dark:text-gray-300">{project.tools.join(' · ')}</div>
//               </div>
//               <div className="text-right">
//                 <motion.a 
//                   href={project.github} 
//                   target="_blank" 
//                   rel="noreferrer" 
//                   className="inline-block text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   GitHub
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'

export default function CardProject({ project }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="relative flex-1">
        {/* Contenedor de imagen con relación de aspecto */}
        <div className="aspect-w-16 aspect-h-9 w-full h-48 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            initial={{ 
              filter: "blur(8px)",
              scale: 1.1
            }}
            whileHover={{ 
              filter: "blur(0px)",
              scale: 1.05
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            loading="lazy"
            onLoad={(e) => {
              // Esto ayuda a que el blur se aplique correctamente después de cargar
              e.currentTarget.style.filter = "blur(8px)"
            }}
          />
        </div>
        
        {/* Overlay de información */}
        <div className="absolute inset-0 flex items-end p-4 pointer-events-none">
          <motion.div 
            className="bg-white/75 dark:bg-black/60 backdrop-blur-sm rounded-md p-3 w-full pointer-events-auto"
            initial={{ y: 10, opacity: 0.9 }}
            whileHover={{ y: 0, opacity: 1 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                <div className="text-xs mt-1 text-gray-600 dark:text-gray-300">{project.tools.join(' · ')}</div>
              </div>
              <div className="text-right">
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-block text-sm text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}