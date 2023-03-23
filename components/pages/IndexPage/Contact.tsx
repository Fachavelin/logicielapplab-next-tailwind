import { FC } from 'react';
import { ContactForm } from './ContactForm';
import Lottie from 'lottie-react';
import contactAnimation from '@/animations/contactanimation.json';

export const Contact: FC = () => {
  return (
    <div className='bg-[#081229]' id='contacto'>
      <div className='max-w-screen-xl mx-auto grid sm:grid-cols-2'>
        <div className='row-auto'>
          <div className='p-8' data-aos='fade-right'>
            <ContactForm />
          </div>
        </div>
        <div className='flex justify-center items-center' data-aos='fade-left'>
          <Lottie animationData={contactAnimation} style={{ height: 350 }} />
        </div>
      </div>
    </div>
  );
};
