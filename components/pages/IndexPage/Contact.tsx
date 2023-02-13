import { FC } from 'react';
import { ContactForm } from './ContactForm';

export const Contact: FC = () => {
  return (
    <div className='grid sm:grid-cols-2'>
      <div className='row-start-2 sm:row-auto'>
        <div className='p-8'>
          <ContactForm />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src='https://res.cloudinary.com/logicielapplab/image/upload/v1676298548/LogicielApplab/Social_Communication_1_ka6uog.svg'
          alt=''
        />
      </div>
    </div>
  );
};
