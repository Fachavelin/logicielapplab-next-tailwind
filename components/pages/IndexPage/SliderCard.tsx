import { FC } from 'react';

interface Props {
  title: string;
  text: string;
  imgUrl: string;
}

export const SliderCard: FC<Props> = ({ title, text, imgUrl }) => {
  return (
    <div className='bg-gray-50 w-screen grid grid-cols-5 gap-3'>
      <div className='col-span-3 flex items-center  '>
        <div className=''>
          <p className='text-center text-4xl font-semibold'>{title}</p>
          <p className='text-lg text-gray-700 py-12 text-justify mx-9'>
            {text}
          </p>
        </div>
      </div>
      <div className='col-span-2 py-8'>
        <img src={`${imgUrl}`} alt='' className='bg-white rounded-lg' />
      </div>
    </div>
  );
};
