'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { COMPANIES, FRONTEND_SKILLS } from '@/utils/constants';

export default function Skills() {
  useEffect(() => {
    const scrollerInner = document.querySelectorAll('.scroller__inner');

    scrollerInner.forEach((inner) => {
      const scrollerContent = Array.from(inner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        inner.appendChild(duplicatedItem);
      });
    });
  }, []);

  return (
    <section
      id='section-work'
      className='relative flex flex-col items-center justify-center h-full w-full mb-10'
    >
      <header className='w-full flex flex-col items-center space-y-3 mb-6'>
        <h1 className='font-futurism bg-gradient-white-to-dark text-transparent bg-clip-text font-semibold text-3xl'>
          About work
        </h1>
        <h2 className='bg-clip-text text-transparent bg-gradient-white-to-dark font-medium text-center text-balance'>
          In the past 4 years, I had the pleasure to work with companies such as
          those shown below. Additionally, you can see the technologies
          I&apos;ve used during this time in the smaller section that follows.
        </h2>
      </header>

      <div className='mask w-full overflow-hidden scroller'>
        <main className='w-max flex gap-4 animate-scroll-x scroller__inner hover:pause'>
          {COMPANIES.map((company) => (
            <a
              href={company.url}
              target='_blank'
              rel='noreferrer'
              key={company.name}
            >
              <div
                title={company.name}
                className='w-[300px] aspect-video flex flex-shrink-0 bg-gradient-button rounded-lg p-[1px]'
              >
                <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors py-6 rounded-lg grid place-items-center'>
                  <figure className='relative w-[150px] aspect-video state hover:pause'>
                    <Image
                      fill
                      src={company.logo}
                      alt={company.name}
                      className='object-contain w-full h-full'
                    />
                  </figure>
                </div>
              </div>
            </a>
          ))}
        </main>
      </div>

      <div className='mask w-11/12 overflow-hidden scroller'>
        <main className='w-max py-4 flex gap-4 animate-scroll-x-reverse scroller__inner'>
          {FRONTEND_SKILLS.map((skill) => (
            <div
              key={skill.name}
              title={skill.name}
              className='w-[100px] h-[80px] flex flex-shrink-0 bg-gradient-button rounded-lg p-[1px]'
            >
              <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors py-6 rounded-lg'>
                <Image
                  width={100}
                  height={80}
                  src={skill.image}
                  alt={skill.image}
                  className='object-contain w-full h-full'
                />
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
}
