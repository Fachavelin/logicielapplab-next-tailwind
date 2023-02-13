import { FC, MouseEvent } from 'react';

export const Whatsapp: FC = () => {
  const redirectToWhatsapp = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let link = document.createElement('a');
    link.setAttribute(
      'href',
      'https://api.whatsapp.com/send/?phone=593982291894'
    );
    link.setAttribute('target', '_blank');
    link.click();
  };

  return (
    <button
      onClick={redirectToWhatsapp}
      className='fixed bg-white rounded-full hover:scale-105 z-40 cursor-pointer right-3 bottom-3 animate-bounce'
    >
      <img className='h-14' src='/images/whatsapp.svg' alt='' />
    </button>
  );
};
