import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

export const Hero: FC = () => {
  return (
    <div
      className='min-h-screen px-2 bg-cover sm:bg-fixed bg-bottom sm:bg-center relative'
      style={{
        backgroundImage: `url("https://res.cloudinary.com/logicielapplab/image/upload/v1676175603/LogicielApplab/software-developer-6521720_1920_psc1wb.jpg")`,
      }}
    >
      <div className='max-w-screen-2xl mx-auto'>
        <div className='grid sm:grid-cols-3'>
          <div className='sm:col-span-2 flex justify-center items-center text-white font-medium  min-h-screen'>
            <div className=''>
              <div className='text-5xl pb-5'>
                <TypeAnimation
                  sequence={[
                    'Potencia tu negocio',
                    2000,
                    'Con Logiciel Applab',
                    2000,
                  ]}
                  repeat={Infinity}
                  wrapper={'h2'}
                />
              </div>
              <div className='text-4xl font-semibold uppercase'>
                <TypeAnimation
                  sequence={[' Reinventa, Innova, Crece', 5000]}
                  wrapper={'h2'}
                />
              </div>
            </div>
          </div>
          {/* <div
          className='overflow-x-hidden overflow-y-hidden'
          data-aos='zoom-in-down'
        >
          <img
            className=''
            src='https://res.cloudinary.com/logicielapplab/image/upload/v1676307901/LogicielApplab/PHONE-min_o1jfhf.png'
            alt=''
          />
        </div> */}
        </div>
      </div>
    </div>
  );
};
