import { FC } from 'react';
import Lottie from 'lottie-react';

interface Props {
  title: string;
  text: string;
  animation: any;
}

export const SliderCard: FC<Props> = ({ title, text, animation }) => {
  return (
    <div className='w-screen grid sm:grid-cols-2 gap-3 pb-3 max-w-screen-lg mx-auto'>
      <div className='flex items-center'>
        <div className='mx-4'>
          <p className='text-center text-[#ed184f] font-semibold text-4xl pt-6 pl-2 pr-12 md:px-8 sm:pt-0 '>
            {title}
          </p>
          <p className='text-lg text-white py-5 sm:py-10 text-justify pl-2 pr-12 md:px-8'>
            {text}
          </p>
        </div>
      </div>
      <div className='sm:py-8 mx-4 sm:mx-0 row-start-1 md:col-start-2'>
        <Lottie animationData={animation} style={{ height: 400 }} />
      </div>
    </div>
  );
};
