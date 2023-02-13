import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SliderCard } from './SliderCard';

import 'swiper/css';

export const Slider: FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SliderCard
          title='Desarrollo de Software'
          text='La implementación de un aplicativo web es fundamental para el correcto funcionamiento de una app, por eso nos basamos en los principios del diseño UX/UI desde la creación del prototipo, hasta el estilo visual y su usabilidad, permitiéndote integrar funciones en tu página web, ya sea, agendar citas, crear contenido, descuentos, etc'
          imgUrl='https://res.cloudinary.com/logicielapplab/image/upload/v1676258893/LogicielApplab/Software-Developer_magkmm.svg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          title='Prototipado UX/UI'
          text='Nuestro desarrollo de software está diseñado para optimizar de manera inmediata las actividades administrativas y/u operacionales de tu empresa a través de la creación de aplicativos móviles y web, nos enfocamos tanto en la estética como en su contenido, integrando los procesos fundamentales de tu organización con el fin de brindar a tus clientes soluciones eficientes que estén al alcance de sus manos'
          imgUrl='https://res.cloudinary.com/logicielapplab/image/upload/v1676258919/LogicielApplab/Design_process_px05u7.svg'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderCard
          title='Programa Anual de Servicios'
          text='Nuestro equipo de expertos puede diseñar, desarrollar y lanzar cualquier proyecto de software. Seleccionamos el mejor talento posible para tus necesidades, ellos están dispuestos a contribuir con tu proyecto según el tiempo que tu requieras'
          imgUrl='https://res.cloudinary.com/logicielapplab/image/upload/v1676258893/LogicielApplab/Operating-system-upgrade-v1_py8mux.svg'
        />
      </SwiperSlide>
    </Swiper>
  );
};
