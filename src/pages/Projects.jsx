import React from 'react'
import CardProject from '../components/CardProject'

const projects = [
  { id:1, title:'E-commerce-gym', image:'https://plus.unsplash.com/premium_photo-1754344901213-57465a7e6afc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tools:['Html','Css','Bootstrap','Sass'], github:'https://github.com/snaxeres/EntregaFinal-commerce' },
  { id:2, title:'Portfolio react+vite', image:'https://plus.unsplash.com/premium_photo-1754344901213-57465a7e6afc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tools:['React','Css','Javascript','Librerias'], github:'https://github.com/snaxeres/PortfolioPP' },
  { id:3, title:'E-commerce-react', image:'https://picsum.photos/seed/3/800/500', tools:['React','Javascript','Librerias',], github:'https://github.com/snaxeres/EntregaFinal-React-commerce' },
  { id:4, title:'E-commerce-Backend-I', image:'https://picsum.photos/seed/4/800/500', tools:['Bcrypt','cookie-parser','express', 'mongoose', 'jsonwebtoken', 'Librerias'], github:'https://github.com/snaxeres/EntregaFinal-Back-commerce' },
  { id:5, title:'E-commerce-Backend-II', image:'https://picsum.photos/seed/5/800/500', tools:['Bcrypt','cookie-parser','express', 'mongoose', 'socket.io', 'mongodb', 'Librerias'], github:'https://github.com/snaxeres/EntregaFinal-Back-2' },
  { id:6, title:'E-commerce-Adopcion-Final', image:'https://picsum.photos/seed/6/800/500', tools:['Socket.io','Node'], github:'https://github.com/snaxeres/FinBack3nd' }
]

export default function Projects(){
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">Seis proyectos con breve descripción y link a GitHub.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => <CardProject key={p.id} project={p} />)}
      </div>
    </section>
  )
}
