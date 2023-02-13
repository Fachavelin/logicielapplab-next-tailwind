import Image from 'next/image';
import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <div
      className='w-full'
      style={{
        background:
          'linear-gradient(35deg, rgba(2,0,36,1) 0%, rgba(22,29,93,1) 37%, rgba(201,73,206,1) 100%)',
      }}
    >
      <div className='grid grid-cols-2 pt-9 pb-4'>
        <div className=''>
          <div className='flex justify-center'>
            <img src='/images/logo.png' alt='' className='h-16' />
          </div>
          <p className='text-white font-bold text-center'>LOGICIEL APPLAB</p>
        </div>
        <div>
          <p className='text-white font-semibold text-center'>
            Encuentranos en nuestras redes
          </p>
          <div className='flex justify-between max-w-sm mx-auto py-3'>
            <a
              target='_blank'
              href='https://www.facebook.com/profile.php?id=100031324907198'
              className='bg-white rounded-lg cursor-pointer'
              rel='noreferrer'
            >
              <img
                className='scale-125 h-10'
                src='/images/icons8-facebook.svg'
                alt=''
              />
            </a>
            <a
              target='_blank'
              href='https://www.instagram.com/logicielapplab/'
              className='bg-white rounded-xl cursor-pointer'
              rel='noreferrer'
            >
              <img
                className='scale-125 h-10'
                src='/images/icons8-instagram.svg'
                alt=''
              />
            </a>
            <a
              target='_blank'
              href='https://logicelapplab@gmail.com'
              className='bg-white rounded-xl cursor-pointer'
              rel='noreferrer'
            >
              <img
                className='scale-125 h-10'
                src='/images/icons8-gmail.svg'
                alt=''
              />
            </a>
          </div>
        </div>
      </div>
      <div className='border-t mx-2 pb-5'>
        <p className='text-white text-center pt-3'>
          ® Logicel Applab - Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};
