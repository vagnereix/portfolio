'use client';

import Aos from 'aos';
import React, { useEffect, useRef } from 'react';
import { SocialButton } from './SocialButton';
import Image from 'next/image';

export default function Navbar() {
  const ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  function selectActiveLink(element: HTMLElement) {
    const { current: activeElement } = ref;
    const { current: bgActiveElement } = bgRef;

    if (activeElement && bgActiveElement) {
      if (activeElement.style.left === `${element.offsetLeft}px`) return;

      if (element.offsetLeft > activeElement.offsetLeft) {
        bgActiveElement.style.float = 'right';
      } else {
        bgActiveElement.style.float = 'left';
      }

      const size = element.offsetWidth * 1.4;
      bgActiveElement.style.width = `${size}px`;
      bgActiveElement.style.left = `${element.offsetLeft}px`;

      activeElement.style.width = `${element.offsetWidth}px`;
      activeElement.style.left = `${element.offsetLeft}px`;

      setTimeout(() => {
        bgActiveElement.style.width = `${element.offsetWidth}px`;
      }, 200);
    }
  }

  useEffect(() => {
    Aos.init({
      duration: 500,
      delay: 200,
      once: false,
      offset: 200,
      easing: 'linear',
    });

    const active = document.querySelector(`a[href='${window.location.hash}']`);
    if (active instanceof HTMLElement) {
      selectActiveLink(active);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.hash = '#' + entry.target.id;

            const element = document.querySelector(
              `a[href='#${entry.target.id}']`
            ) as HTMLElement;

            const { current } = ref;

            if (current) {
              current.style.left = `${element.offsetLeft}px`;
              current.style.width = `${element.offsetWidth}px`;
            }
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id='header'
      className='w-full fixed top-0 shadow-md bg-transparent backdrop-blur-sm z-50 px-10 py-8'
    >
      <div className='h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about' className='h-auto w-auto flex flex-row items-center'>
          <span
            data-aos='fade-left'
            className='font-semibold font-clash ml-[10px] hidden md:block text-transparent bg-clip-text bg-gradient-brand-400-to-dark'
          >
            @vagnereix.dev
          </span>
        </a>

        <div className='relative bg-dark-600 p-[2px] rounded-full flex items-center'>
          <div
            ref={ref}
            className='z-[0] inset-[2px] absolute w-[85px] rounded-full transition-all duration-[400ms] ease'
          >
            <div
              ref={bgRef}
              className='bg-black transition-all duration-[200ms] delay-[50ms] ease w-full h-full rounded-full'
            />
          </div>

          <a
            href='#home'
            onClick={(e) => selectActiveLink(e.currentTarget)}
            className='z-[1] transition-all duration-700 grid items-center px-5 py-2 text-transparent bg-clip-text text-white font-semibold rounded-full'
          >
            Home
          </a>
          <a
            href='#skills'
            onClick={(e) => selectActiveLink(e.currentTarget)}
            className='z-[1] transition-all duration-700 grid items-center px-5 py-2 text-transparent bg-clip-text text-white font-semibold rounded-full'
          >
            Work
          </a>
          <a
            href='#about'
            onClick={(e) => selectActiveLink(e.currentTarget)}
            className='z-[1] transition-all duration-700 grid items-center px-5 py-2 text-transparent bg-clip-text text-white font-semibold rounded-full'
          >
            About
          </a>
          <a
            href='#contact'
            onClick={(e) => selectActiveLink(e.currentTarget)}
            className='z-[1] transition-all duration-700 grid items-center px-5 py-2 text-transparent bg-clip-text text-white font-semibold rounded-full'
          >
            Contact
          </a>
        </div>

        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-1'>
            <span className='relative flex items-center justify-center h-5 w-5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-30'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>

            <span className='text-green-500 text-sm font-medium'>
              Available
            </span>
          </div>

          <div className='flex items-center justify-center gap-3'>
            <SocialButton>
              <Image
                width={16}
                height={16}
                src='/insta.png'
                alt='CSS'
                className='object-cover transition-all'
              />
            </SocialButton>

            <SocialButton className='group'>
              <Image
                width={16}
                height={16}
                src='/gitwhite.png'
                alt='CSS'
                className='object-cover transition-all opacity-50 group-hover:opacity-100'
              />
            </SocialButton>

            <SocialButton className='group'>
              <Image
                width={16}
                height={16}
                src='/linkedin.png'
                alt='CSS'
                className='object-cover transition-all'
              />
            </SocialButton>
          </div>
        </div>
      </div>
    </div>
  );
}
