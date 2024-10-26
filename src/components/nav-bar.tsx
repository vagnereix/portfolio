'use client';

import Aos from 'aos';
import React, { useEffect, useRef } from 'react';
import { SocialButton } from './social-button';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const SOCIALS = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/vagnereix.dev/',
    icon: '/insta.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/vagnereix/',
    icon: '/techs/gitwhite.png',
    className: 'opacity-50 group-hover:opacity-100',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/vagnereix/',
    icon: '/linkedin.png',
  },
];

const MENU_ITEMS = [
  { name: 'Home', href: '#section-home' },
  { name: 'Work', href: '#section-work' },
];

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

    const updateActiveLink = (hash: string) => {
      const active = document.querySelector(`a[href='${hash}']`);
      if (active instanceof HTMLElement) {
        selectActiveLink(active);
      }
    };

    updateActiveLink(window.location.hash);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const hash = `#${entry.target.id}`;
            if (hash.startsWith('#section-')) {
              window.location.hash = hash;
              updateActiveLink(hash);

              const element = document.querySelector(
                `a[href='${hash}']`
              ) as HTMLElement;

              const { current } = ref;

              if (current && element) {
                current.style.left = `${element.offsetLeft}px`;
                current.style.width = `${element.offsetWidth}px`;
              }
            }
          }
        });
      },
      {
        threshold: 0.7,
      }
    );

    const sections = document.querySelectorAll('section[id^="section-"]');
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
      <div className='h-full flex items-center justify-between m-auto px-[10px]'>
        <a
          href='mailto:vagnereix.dev@gmail.com'
          className='h-auto w-auto flex flex-col'
        >
          <span
            data-aos='fade-left'
            data-aos-delay='100'
            className='text-white text-xs font-clash'
          >
            mail me any time at
          </span>
          <span
            data-aos='fade-left'
            className='font-semibold font-clash hidden md:block text-transparent bg-clip-text bg-gradient-brand-400-to-dark'
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

          {MENU_ITEMS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              onClick={(e) => selectActiveLink(e.currentTarget)}
              className='z-[1] transition-all duration-700 grid items-center px-5 py-2 text-transparent bg-clip-text text-white font-semibold rounded-full'
            >
              {social.name}
            </a>
          ))}
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
            {SOCIALS.map((social) => (
              <a
                href={social.href}
                key={social.name}
                className='no-underline'
                target='_blank'
                rel='noreferrer'
              >
                <SocialButton className='group'>
                  <Image
                    width={16}
                    height={16}
                    src={social.icon}
                    alt={social.name}
                    className={twMerge(
                      'object-cover transition-all',
                      social.className
                    )}
                  />
                </SocialButton>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
