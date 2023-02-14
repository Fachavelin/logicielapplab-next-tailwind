import { FC } from 'react';

export const Body: FC = () => {
  return (
    <div className=''>
      <div className='flex justify-center'>
        <img
          data-aos='zoom-in-down'
          className='my-10 max-h-96'
          src='https://res.cloudinary.com/logicielapplab/image/upload/v1676242129/LogicielApplab/Application_development_1_g1vpwd.svg'
          alt=''
        />
      </div>
      <div className='max-w-5xl mx-auto'>
        <p className='text-center text-4xl font-semibold '>
          ¿Por qué
          <span className='text-indigo-700'> Logiciel Applab</span>?
        </p>
        <p className='text-lg text-gray-700 py-12 text-justify mx-4'>
          Nos enfocamos en la búsqueda de soluciones integrales principalmente
          en el desarrollo de software a la medida y la digitalización. Contamos
          con un gran equipo de profesionales apasionados por la creación de
          herramientas y espacios tecnológicos que impulsen el crecimiento de tu
          empresa y lograr potenciar la calidad de tus productos o servicios.
        </p>
      </div>
    </div>
  );
};
