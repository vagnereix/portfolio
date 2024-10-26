import Hero from '@/components/hero';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='min-h-screen h-full w-full flex flex-col max-w-[1350px] mx-auto'>
      <Hero />
      <Skills />
    </main>
  );
}
