import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardProject from './CardProject'

const projects = [
  { id:1, title:'E-commerce-gym', image:'https://plus.unsplash.com/premium_photo-1754344901213-57465a7e6afc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tools:['Html','Css','Bootstrap','Sass'], github:'https://github.com/snaxeres/EntregaFinal-commerce' },
  { id:3, title:'E-commerce-react', image:'https://picsum.photos/seed/3/800/500', tools:['React','Javascript','Librerias',], github:'https://github.com/snaxeres/EntregaFinal-React-commerce' },
  { id:4, title:'E-commerce-Backend-I', image:'https://picsum.photos/seed/4/800/500', tools:['Bcrypt','cookie-parser','express', 'mongoose', 'jsonwebtoken', 'Librerias'], github:'https://github.com/snaxeres/EntregaFinal-Back-commerce' },
  { id:5, title:'E-commerce-Backend-II', image:'https://picsum.photos/seed/5/800/500', tools:['Bcrypt','cookie-parser','express', 'mongoose', 'socket.io', 'mongodb', 'Librerias'], github:'https://github.com/snaxeres/EntregaFinal-Back-2' },
  { id:6, title:'E-commerce-Adopcion-Final', image:'https://picsum.photos/seed/6/800/500', tools:['Socket.io','Node'], github:'https://github.com/snaxeres/FinBack3nd' }
]

export default function CarouselProjects(){
  return (
    <div className="max-w-6xl mx-auto px-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {projects.map(p => (
          <SwiperSlide key={p.id} className="px-2">
            <CardProject project={p} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}


