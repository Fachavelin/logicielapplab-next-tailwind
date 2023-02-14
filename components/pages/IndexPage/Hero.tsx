import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <div
      className='min-h-screen pt-24 px-2  bg-fixed  bg-center'
      style={{
        backgroundImage: `url("https://res.cloudinary.com/logicielapplab/image/upload/v1676175603/LogicielApplab/software-developer-6521720_1920_psc1wb.jpg")`,
      }}
    >
      <div className='grid sm:grid-cols-3'>
        <div className='sm:col-span-2 flex justify-items-center text-white font-medium'>
          <div className='px-8 sm:my-36'>
            <p className='text-4xl pb-5'>
              Construyendo un colectivo de diseño en una casa de software a la
              medida
            </p>
            <p className='text-3xl font-semibold uppercase'>
              Creando Arte Digital
            </p>
          </div>
        </div>
        <div
          className='overflow-x-hidden overflow-y-hidden'
          data-aos='zoom-in-down'
        >
          <img
            className=''
            src='https://res.cloudinary.com/logicielapplab/image/upload/v1676307901/LogicielApplab/PHONE-min_o1jfhf.png'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};
