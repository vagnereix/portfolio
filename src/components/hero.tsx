import React, { Suspense } from 'react';

import { Button } from './button';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { HeroEffect } from './hero-effect';

const Hero = () => {
  return (
    <section
      id='section-home'
      className='relative flex items-center justify-center w-full min-h-dvh'
    >
      <div className='px-10 flex flex-row items-center justify-center mx-auto w-full z-[20]'>
        <div className='h-full w-full flex flex-col gap-3 justify-center m-auto text-start'>
          <div
            data-aos='fade-down'
            className='relative z-[1] bg-gradient-gold-to-dark bg-clip-border rounded-xl w-max p-[1px]'
          >
            <div className='border-[2px] border-dark-900 flex items-center relative z-10 welcome-box py-2 px-4 opacity-[0.9] cursor-default rounded-xl bg-dark-700'>
              <SparklesIcon className='text-white mr-[10px] h-5 w-5' />

              <h1 className='font-clash text-[#cdcdcd]'>
                Software Engineer Portfolio
              </h1>
            </div>
          </div>

          <div
            data-aos='fade-right'
            className='flex flex-col gap-6 mt-6 font-clash text-6xl text-white'
          >
            <span>
              <span className='text-transparent bg-clip-text bg-gradient-brand-400-to-dark'>
                Front-end Specialist <br />
              </span>
              <span className='text-transparent bg-clip-text bg-gradient-white-to-dark'>
                Software Engineer
              </span>
            </span>
          </div>

          <p
            data-aos='fade-right'
            data-aos-delay='300'
            className='text-base text-[#cdcdcd] my-5 max-w-[600px]'
          >
            Vagner Reis, since 2021 as a Software Engineer focused on
            user-friendly applications, good-looking and most importantly,
            profitable digital products.
          </p>

          <div className='flex gap-6 items-center'>
            <a
              href='https://linkedin.com/in/vagnereix/'
              target='_blank'
              rel='noreferrer'
              className='no-underline'
            >
              <Button>Learn More!</Button>
            </a>

            <a href='mailto:vagnereix.dev@gmail.com' className='no-underline'>
              <Button outlined>Contact</Button>
            </a>
          </div>
        </div>

        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='w-full h-[80vh] flex justify-center items-center'
        >
          <HeroEffect />
        </div>
      </div>
    </section>
  );
};

export default Hero;
