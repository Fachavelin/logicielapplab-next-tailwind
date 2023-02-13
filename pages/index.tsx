import { Layout } from '@/components/layouts';
import { Body, Hero, Slider } from '@/components/pages';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Body />
        <Slider />
      </Layout>
    </>
  );
}
