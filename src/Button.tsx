import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {

   /**  Provide a text for the button */
  children: ReactNode;

  /** Which variant look would you like use?*/
  variant: 'primary' | 'secondary';
}
/** This a special button!!! */
export const Button = ({ children, variant='primary', ...props }: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        fontSize:26,
        borderRadius:100,
        padding:20,
        cursor:'pointer',
        border: 'none',
        outline:'none' 
      }}
    >
      {children}
    </button>
  );
};
