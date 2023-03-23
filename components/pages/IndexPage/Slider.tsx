import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { SliderCard } from './SliderCard';

import webanimation from '@/animations/webanimation.json';
import movilanimation from '@/animations/movilanimation.json';
import softwareanimation from '@/animations/softwareanimation.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Slider: FC = () => {
  return (
    <div className='bg-[#081229]' id='servicios'>
      <div className='max-w-screen-xl mx-auto py-10 px-3 services-background'>
        <h1 className='text-center text-4xl text-white' data-aos='zoom-in'>
          Nuestros servicios
        </h1>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <SliderCard
              title='Desarrollo de Sitios Web'
              text='Ofrecemos servicios de desarrollo de sitios web a medida para satisfacer las necesidades de nuestros clientes. Disponemos de un equipo de diseñadores web altamente calificados y expertos en el manejo y programación de diferentes plataformas. Utilizamos tecnologías modernas para asegurarnos que el diseño y las características del sitio sean totalmente funcionales.'
              animation={webanimation}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              title='Desarrollo de Aplicaciones Móviles'
              text='Creamos aplicaciones móviles robustas, versátiles y resistentes, con interfaces intuitivas y diseños atractivos que ofrecen experiencias ricas al usuario final. Basados en la tecnología más avanzada, construimos apps nativas personalizadas, soportando todos los modelos y versiones disponibles en el mercado.'
              animation={movilanimation}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SliderCard
              title='Desarrollo y optimización de Sistemas'
              text='Somos un equipo dedicado a ayudar a mejorar la productividad empresarial combinando nuestro conocimiento profundo en lenguajes avanzados con servicios altamente estratégicos de soluciones personalizadas a la medida para nuestros clientes. Estamos totalmente comprometidos con mantener estándares the calidad alto para garantizar un funcionamiento fiable del software, maximizando así su rendimiento ant performance speed.'
              animation={softwareanimation}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
