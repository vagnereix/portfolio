import { ComponentProps } from 'react';

interface Props extends ComponentProps<'button'> {
  outlined?: boolean;
}

export function Button({ children, outlined = false, ...rest }: Props) {
  return (
    <>
      {outlined ? (
        <button
          {...rest}
          data-aos='fade-right'
          data-aos-delay='400'
          className='bg-transparent rounded-full p-[.5px] max-w-max'
        >
          <div className='grid items-center gap-1 text-dark-400 font-bold rounded-full cursor-pointer px-5 py-3 transition-colors border border-dark-850 hover:border-dark-600 hover:text-white'>
            {children}
          </div>
        </button>
      ) : (
        <button
          {...rest}
          data-aos='fade-right'
          data-aos-delay='400'
          className='bg-gradient-button rounded-full p-[.5px] max-w-max'
        >
          <div className='grid items-center gap-1 bg-dark-700 text-white font-bold rounded-full px-5 py-3 transition-all'>
            {children}
          </div>
        </button>
      )}
    </>
  );
}
