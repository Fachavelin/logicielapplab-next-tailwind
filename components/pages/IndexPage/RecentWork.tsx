import Image from 'next/image';
import { FC } from 'react';
import { RecentWorkCard } from './RecentWorkCard';

interface recentWorkData {
  title: string;
  description: string;
  imageUrl: string;
  aosTime?: number;
}

export const RecentWork: FC = () => {
  const recentWorkData: recentWorkData[] = [
    {
      title: 'Dive Evolution',
      description: 'Sitio Web de Tour Operador',
      imageUrl: '/images/DEmin.png',
      aosTime: 500,
    },
    {
      title: 'Gaviota Ferry',
      description: 'Sistema de Administración de reservas',
      imageUrl: '/images/GF.png',
      aosTime: 1000,
    },
    {
      title: 'Lyse',
      description: 'Aplicación de limpieza (Android e IOS)',
      imageUrl: '/images/L.png',
      aosTime: 1500,
    },
  ];

  return (
    <div className='bg-[#081229]' id='recientes'>
      <div className='max-w-screen-xl mx-auto'>
        <h1
          className='text-center text-white text-4xl pt-10'
          data-aos='zoom-in'
        >
          Nuestros <span className='text-[#ed184f]'>Trabajos recientes</span>
        </h1>
        <div className='grid sm:grid-cols-3 gap-6 mx-8 py-8'>
          {recentWorkData.map((item) => (
            <RecentWorkCard
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              aosTime={item.aosTime}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
