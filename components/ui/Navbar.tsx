import { FC, useEffect, useRef, useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  const [colorChange, setColorchange] = useState(false);

  /* useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 180) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }; */

  /* ${!colorChange ? '' : ' bg-black footer-background'} */

  return (
    <div
      className={`w-full absolute top-0 z-50 
    transition delay-1000
    `}
    >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-3  py-4 '>
            <img src='/images/logo.png' alt='' className='h-10' />
            <p className='text-white font-bold text-lg'>Logiciel Applab</p>
          </div>
          <div className='hidden md:grid md:gap-7 md:grid-flow-col justify-items-center'>
            <div className='flex items-center'>
              <a
                className='text-white text-sm transition font-semibold hover:text-[#ed184f] cursor-pointer'
                href='#nosotros'
              >
                Quienes somos
              </a>
            </div>
            <div className='flex items-center'>
              <a
                className='text-white text-sm transition font-semibold hover:text-[#ed184f] cursor-pointer'
                href='#servicios'
              >
                Nuestros servicios
              </a>
            </div>
            <div className='flex items-center'>
              <a
                className='text-white text-sm transition font-semibold hover:text-[#ed184f] cursor-pointer'
                href='#recientes'
              >
                Trabajos recientes
              </a>
            </div>
            <div className='flex items-center'>
              <a
                className='text-white text-sm transition font-semibold hover:text-[#ed184f] cursor-pointer'
                href='#contacto'
              >
                Contacto
              </a>
            </div>
          </div>
          <button
            className='text-white hover:text-[#ed184f] md:hidden mr-4'
            onClick={() => setOpen(!open)}
          >
            {open ? <Close /> : <Menu />}
          </button>
        </div>
        {/* Menu Celular */}
        <div
          className={`bg-white grid transition delay-100 md:hidden mx-2 rounded-md  ${
            !open ? 'scale-0' : 'scale-100'
          }`}
        >
          <button className='text-sm hover:text-[#ed184f] transition border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer rounded-t-sm'>
            Quienes somos
          </button>
          <button className='text-sm hover:text-[#ed184f] transition border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer'>
            Nuestros servicios
          </button>
          <button className='text-sm hover:text-[#ed184f] transition border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer'>
            Trabajos recientes
          </button>
          <button className='text-sm hover:text-[#ed184f] transition border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer rounded-b-sm'>
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};
