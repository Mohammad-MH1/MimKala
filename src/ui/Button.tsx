import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

function Button({ children, onClick }: ButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
