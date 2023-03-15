import { Layout } from '@/components/layouts';
import { Body, Contact, Hero, RecentWork, Slider } from '@/components/pages';

export default function Home() {
  return (
    <>
      <Layout title='Logiciel Applab'>
        <Hero />
        <Body />
        <Slider />
        <RecentWork />
        <Contact />
      </Layout>
    </>
  );
}
