import { FC } from 'react';

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const SliderCard: FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <div className='bg-gray-50 w-screen grid sm:grid-cols-5 gap-3 pb-3'>
      <div className='sm:col-span-3 flex items-center  '>
        <div className=''>
          <p className='text-center text-4xl pt-6 sm:pt-0 font-semibold'>
            {title}
          </p>
          <p className='text-lg text-gray-700 py-5 sm:py-12 text-justify mx-9'>
            {text}
          </p>
        </div>
      </div>
      <div className='sm:col-span-2 sm:py-8 mx-4 sm:mx-0'>
        <img
          data-aos='flip-left'
          src={`${imgUrl}`}
          alt=''
          className='bg-white rounded-lg '
        />
      </div>
    </div>
  );
};
