import { FC } from 'react';
import { Facebook, Instagram } from '@mui/icons-material';

export const Footer: FC = () => {
  return (
    <div
      className='w-full bg-black h-fit sm:h-auto'
      /* style={{
        background:
          'linear-gradient(35deg, rgba(2,0,36,1) 0%, rgba(22,29,93,1) 37%, rgba(201,73,206,1) 100%)',
      }} */
    >
      <div className='grid grid-cols-2 pt-9 pb-4 footer-background'>
        <div>
          <p className='pl-20 text-white text-base'>Atrévete</p>
          <p className='pl-20 text-[#ed184f] text-xl'>Empieza el cambio hoy</p>
          <div className='pl-20 flex gap-4 py-3 z-40 text-white'>
            <a
              href='https://web.facebook.com/profile.php?id=100031324907198'
              target='_blank'
              className='text-[#4267B2] hover:cursor-pointer hover:scale-105 transition delay-100'
            >
              <Facebook fontSize='large' />
            </a>
            <a
              href='https://www.instagram.com/logicielapplab/'
              target='_blank'
              className='text-[#C13584] hover:cursor-pointer hover:scale-105 transition delay-100'
            >
              <Instagram fontSize='large' />
            </a>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-center'>
            <img src='/images/logo.png' alt='' className='h-20 animate-pulse' />
          </div>
          <p className='text-white font-bold text-center'>LOGICIEL APPLAB</p>
        </div>
      </div>
      <div className='border-t mx-2 pb-5 footer-background'>
        <p className='text-white text-center pt-3'>
          ® Logicel Applab - Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};
