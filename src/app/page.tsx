import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
};

export default function Home() {
  return (
    <main className='min-h-screen h-full w-full flex flex-col'>
      <Hero />
      <Skills />
    </main>
  );
}
