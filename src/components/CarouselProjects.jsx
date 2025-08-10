import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import CardProject from './CardProject'

const projects = [
  { id:1, title:'E-commerce-gym', image:'https://plus.unsplash.com/premium_photo-1754344901213-57465a7e6afc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tools:['Html','Css','Bootstrap','Sass'], github:'https://github.com/snaxeres/EntregaFinal-commerce' },
  { id:2, title:'E-commerce-grow', image:'https://picsum.photos/seed/2/800/500', tools:['Javascript','Librerias'], github:'https://snaxeres.github.io/EntregaFinal-G.e-commerce/' },
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
// // Import Swiper React


// // Import modules de Swiper (v11+)


// // Import estilos de Swiper


// const CarouselProjects = () => {
//   const projects = [
//     { id: 1, title: 'Proyecto 1', img: '/images/project1.jpg', link: '#' },
//     { id: 2, title: 'Proyecto 2', img: '/images/project2.jpg', link: '#' },
//     { id: 3, title: 'Proyecto 3', img: '/images/project3.jpg', link: '#' },
//   ];

//   return (
//     <div className="w-full my-10">
//       <Swiper
//         modules={[Autoplay, Navigation, Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop
//       >
//         {projects.map((project) => (
//           <SwiperSlide key={project.id}>
//             <a href={project.link} target="_blank" rel="noopener noreferrer">
//               <img src={project.img} alt={project.title} className="w-full h-auto rounded-lg shadow-lg" />
//             </a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CarouselProjects;

