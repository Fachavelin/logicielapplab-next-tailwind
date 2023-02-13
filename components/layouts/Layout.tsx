import { FC, ReactNode } from 'react';
import { Navbar, Whatsapp } from '../ui';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='relative'>
      <Navbar />
      <main>{children}</main>
      <Whatsapp />
    </div>
  );

  /* Navbar */
};
