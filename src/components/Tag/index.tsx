type TagProps = {
  text: string;
};

export function Tag({ text }: TagProps) {
  return (
    <div className='py-1 px-3 border border-dark-500 rounded-full hover:bg-dark-600 hover:-translate-y-[2px] transition-transform cursor-default'>
      <span className='text-white font-medium text-sm'>{text}</span>
    </div>
  );
}
