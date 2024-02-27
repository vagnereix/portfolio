import React from 'react';
import Image from 'next/image';

import { Button } from './Button';
import { SparklesIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section
      id='home'
      className='relative grid place-content-center w-full min-h-screen'
    >
      <div className='px-10 flex flex-row items-center justify-center mx-auto w-full max-w-[1400px] z-[20]'>
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
                Frontend Specialist{' '}
              </span>
              <span className='text-transparent bg-clip-text bg-gradient-white-to-dark'>
                Web and Mobile Developer
              </span>
            </span>
          </div>

          <p
            data-aos='fade-right'
            data-aos-delay='300'
            className='text-base text-[#cdcdcd] my-5 max-w-[600px]'
          >
            Web and Mobile Developer focused on Front-End applications, totaling
            approximately 4 years of experience in the Software Development
            market, delivering complex and sophisticated projects with due
            attention to detail.
          </p>

          <div className='flex gap-6 items-center'>
            <Button>Learn More!</Button>
            <Button outlined>Contact</Button>
          </div>
        </div>

        <div
          data-aos='fade-left'
          data-aos-delay='400'
          className='w-full h-full flex justify-center items-center'
        >
          <Image
            src='/mainIconsdark.svg'
            alt='work icons'
            height={550}
            width={550}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
