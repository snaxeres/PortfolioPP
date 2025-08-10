import React from 'react'
import Hero from '../components/Hero'
import CarouselProjects from '../components/CarouselProjects'

export default function Home(){
  return (
    <main>
      <Hero />
      <div className="py-8"></div>
      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold mb-2">Algunos Proyectos</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Pasa por los proyectos y haz click en GitHub para ver el código.</p>
        <CarouselProjects />
      </section>
    </main>
  )
}
