import { FC } from 'react';
import Lottie from 'lottie-react';
import Animation from '@/animations/cellPhoneAnimation.json';

export const Body: FC = () => {
  return (
    <div className='text-white bg-[#081229]' id='nosotros'>
      <div className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-5 py-6'>
          <div className='md:col-span-2'>
            <Lottie animationData={Animation} />
          </div>
          <div className='md:col-start-3 md:col-span-3 mx-8'>
            <p
              className='text-4xl font-semibold text-center md:text-left'
              data-aos='fade-left'
            >
              ¿Por qué
              <span className='text-[#ed184f]'>{' Logiciel Applab'}</span>?
            </p>
            <p className='text-lg py-8 text-justify' data-aos='fade-right'>
              Somos una empresa especializada en el desarrollo de aplicaciones
              móviles, sitios web y sistemas de software hechos según tus
              necesidades. Con nuestro equipo altamente calificado te
              garantizamos la mejor calidad y experiencia para tu negocio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
