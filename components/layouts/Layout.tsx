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
        <meta property='og:title' content='Logiciel Applab' />
        <meta
          property='og:description'
          content='Somos una empresa especializada en el desarrollo de aplicaciones móviles, sitios web y sistemas de software hechos según tus necesidades. Con nuestro equipo altamente calificado te garantizamos la mejor calidad y experiencia para tu negocio.'
        />
        <meta property='og:image' content='https://www.logicielapplab.com/images/logo.png' />

        <title>Logiciel Applab - Desarrollo de Aplicaciones Móviles y Sitios Web</title>
        <meta
          name='description'
          content='Somos una empresa especializada en el desarrollo de aplicaciones móviles, sitios web y sistemas de software hechos según tus necesidades. Con nuestro equipo altamente calificado te garantizamos la mejor calidad y experiencia para tu negocio.'
        />
        <meta
          name='keywords'
          content='desarrollo de aplicaciones móviles, desarrollo web, sistemas de software, empresa de desarrollo de software, Logiciel Applab'
        />
        <meta name='author' content='Logiciel Applab' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        <link rel='canonical' href='https://www.logicielapplab.com/' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Whatsapp />
      <Footer />
    </div>
  );
};
