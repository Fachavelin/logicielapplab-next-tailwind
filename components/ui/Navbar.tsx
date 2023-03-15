import { FC, useRef, useState } from 'react';
import { Menu, Close } from '@mui/icons-material';
export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full absolute top-0 z-50'>
      <div className='max-w-7xl mx-auto '>
        <div className='flex justify-between w-full'>
          <div className='flex items-center gap-3  py-4 '>
            <img src='/images/logo.png' alt='' className='h-10' />
            <p className='text-white font-bold text-lg'>Logiciel Applab</p>
          </div>
          <div className='hidden md:grid md:gap-7 md:grid-flow-col'>
            <button className='text-white text-sm font-semibold hover:text-[#ed184f] cursor-pointer'>
              Quienes somos
            </button>
            <button className='text-white text-sm font-semibold hover:text-[#ed184f] cursor-pointer'>
              Nuestros servicios
            </button>
            <button className='text-white text-sm font-semibold hover:text-[#ed184f] cursor-pointer'>
              Trabajos recientes
            </button>
            <button className='text-white text-sm font-semibold hover:text-[#ed184f] cursor-pointer'>
              Contacto
            </button>
          </div>
          <button
            className='text-white hover:text-[#ed184f] md:hidden mr-10'
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
          <button className=' text-sm hover:text-[#ed184f] border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer rounded-t-sm'>
            Quienes somos
          </button>
          <button className=' text-sm hover:text-[#ed184f] border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer'>
            Nuestros servicios
          </button>
          <button className=' text-sm hover:text-[#ed184f] border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer'>
            Trabajos recientes
          </button>
          <button className=' text-sm hover:text-[#ed184f] border-b hover:border hover:border-b-2 px-2 py-2 cursor-pointer rounded-b-sm'>
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};
