import { FC } from 'react';

export const Navbar: FC = () => {
  return (
    <div className='flex justify-between absolute'>
      <div className='flex items-center gap-3 px-10 py-4'>
        <img src='/images/logo.png' alt='' className='h-16' />
        <p className='text-white font-bold'>LOGICIEL APPLAB</p>
      </div>
    </div>
  );
};
