import { Layout } from '@/components/layouts';
import { Body, Contact, Hero, Slider } from '@/components/pages';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Body />
        <Slider />
        <Contact />
      </Layout>
    </>
  );
}
