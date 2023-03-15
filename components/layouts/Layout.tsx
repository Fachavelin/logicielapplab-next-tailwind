import { FC, ReactNode } from 'react';
import { Footer, Navbar, Whatsapp } from '../ui';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='relative overflow-x-hidden'>
      <Navbar />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </div>
  );

  /* Navbar */
};
