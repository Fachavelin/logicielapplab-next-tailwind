import Image from 'next/image';
import { FC } from 'react';
import { RecentWorkCard } from './RecentWorkCard';

export const RecentWork: FC = () => {
  return (
    <div className='bg-[#081229]'>
      <div className='max-w-screen-xl mx-auto'>
        <h1 className='text-center text-white text-4xl pt-10'>
          Nuestros <span className='text-[#ed184f]'>Trabajos recientes</span>
        </h1>
        <div className='grid sm:grid-cols-3 gap-6 mx-8 py-8'>
          <RecentWorkCard
            title={'Dive Evolution'}
            description={'Sitio Web de Tour Operador'}
            imageUrl={'/images/DEmin.png'}
          />
          <RecentWorkCard
            title={'Gaviota Ferry'}
            description={'Sistema de Administración de reservas'}
            imageUrl={'/images/GF.png'}
          />
          <RecentWorkCard
            title={'Lyse'}
            description={'Aplicación de limpieza (Android e IOS)'}
            imageUrl={'/images/L.png'}
          />
        </div>
      </div>
    </div>
  );
};
