import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  aosTime?: number;
}

export const RecentWorkCard: FC<Props> = ({
  title,
  description,
  imageUrl,
  aosTime = 100,
}) => {
  return (
    <div
      className='rounded grid grid-cols-2 recent-work-card cursor-pointer hover:scale-105 hover:rotate-1 transition delay-100 text-white py-4'
      data-aos='fade-down'
      data-aos-easing='ease-out'
      data-aos-duration={aosTime}
    >
      <div className='flex justify-center'>
        <p className='pt-8 font-medium'>{title}</p>
      </div>
      <div className='flex justify-center items-center'>
        <img src={imageUrl} alt='' className='h-24' />
      </div>
      <div className='col-start-2 p-4'>
        <p className='text-sm text-center'>{description}</p>
      </div>
    </div>
  );
};
