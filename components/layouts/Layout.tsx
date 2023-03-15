import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { Footer, Navbar, Whatsapp } from '../ui';

type Props = {
  title?: string;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className='relative overflow-x-hidden'>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </div>
  );

  /* Navbar */
};
