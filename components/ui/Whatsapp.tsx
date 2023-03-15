import { WhatsApp } from '@mui/icons-material';
import { FC, MouseEvent } from 'react';

export const Whatsapp: FC = () => {
  const redirectToWhatsapp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let link = document.createElement('a');
    link.setAttribute(
      'href',
      'https://api.whatsapp.com/send?phone=593982291894&text=Hola%20Logiciel%20Applab%2C%20quiero%20informaci%C3%B3n%20acerca%20de%3A'
    );
    link.setAttribute('target', '_blank');
    link.click();
  };

  return (
    <button
      onClick={redirectToWhatsapp}
      className='fixed rounded-full transition z-40 cursor-pointer right-5 bottom-5 
       p-0.5 bg-[#25D366] text-[#fff] heart'
    >
      {/* <img className='h-14' src='/images/whatsapp.svg' alt='' /> */}
      <WhatsApp sx={{ fontSize: 55 }} />
    </button>
  );
};
