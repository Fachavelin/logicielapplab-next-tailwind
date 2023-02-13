import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className=''>
      <Navbar />
      <main>{children}</main>
    </div>
  );

  /* Navbar */
};
