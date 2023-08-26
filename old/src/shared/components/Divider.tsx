type DividerProps = {
  className?: string;
};

export const Divider = ({ className = 'border-b-black' }: DividerProps) => {
  return <div className={'w-full border-b ' + className}></div>;
};
