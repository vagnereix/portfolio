import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'button'> {
  outlined?: boolean;
}

export function SocialButton({
  children,
  className,
  outlined = false,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      data-aos='fade-right'
      data-aos-delay='400'
      className='bg-gradient-button rounded-full p-[1px] max-w-max duration-500'
    >
      <div
        className={twMerge(
          'grid items-center gap-1 bg-dark-950 hover:bg-dark-650 grayscale-[1] hover:grayscale-0 text-white font-bold rounded-full p-3 transition-all',
          className
        )}
      >
        {children}
      </div>
    </button>
  );
}
