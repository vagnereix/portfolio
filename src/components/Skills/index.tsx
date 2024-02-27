'use client';

import Image from 'next/image';
import { BoxSvg } from '@/public/svg/BoxSvg';
import { useEffect } from 'react';
import { Tag } from '../Tag';

export default function Skills() {
  useEffect(() => {
    const scrollerInner = document.querySelector('.scroller__inner') as Element;
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <section
      id='skills'
      className='relative flex flex-col items-center justify-center gap-8 min-h-[80vh] h-full w-full'
    >
      <div className='mask max-w-[1000px] w-full overflow-hidden scroller'>
        <main className='w-max py-4 flex gap-4 animate-scroll-x scroller__inner'>
          <div className='w-[200px] h-[80px] flex flex-shrink-0 bg-gradient-button rounded-lg p-[.5px]'>
            <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors p-3 rounded-lg'>
              <Image
                width={100}
                height={100}
                className='object-contain w-full h-full'
                src='/Firebase.png'
                alt='Logo'
              />
            </div>
          </div>

          <div className='w-[200px] h-[80px] flex flex-shrink-0 bg-gradient-button rounded-lg p-[.5px]'>
            <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors p-3 rounded-lg'>
              <Image
                width={100}
                height={100}
                className='object-contain w-full h-full'
                src='/Firebase.png'
                alt='Logo'
              />
            </div>
          </div>

          <div className='w-[200px] h-[80px] flex flex-shrink-0 bg-gradient-button rounded-lg p-[.5px]'>
            <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors p-3 rounded-lg'>
              <Image
                width={100}
                height={100}
                className='object-contain w-full h-full'
                src='/Firebase.png'
                alt='Logo'
              />
            </div>
          </div>

          <div className='w-[200px] h-[80px] flex flex-shrink-0 bg-gradient-button rounded-lg p-[.5px]'>
            <div className='w-full h-full bg-dark-800 hover:bg-dark-750 transition-colors p-3 rounded-lg'>
              <Image
                width={100}
                height={100}
                className='object-contain w-full h-full'
                src='/Firebase.png'
                alt='Logo'
              />
            </div>
          </div>
        </main>
      </div>

      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        <BoxSvg />
      </div>
    </section>
  );
}
