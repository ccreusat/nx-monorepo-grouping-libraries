import { forwardRef, ReactNode, Ref } from 'react';

import { sayHello } from '@ccreusat-monorepo/client';

export type ButtonRef = HTMLButtonElement;

export type ButtonTypes = 'button' | 'submit' | 'reset';
export type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonVariants = 'filled' | 'outline' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  /**
   * `button`, `submit` or `reset`
   */
  type?: ButtonTypes;
  /**
   * `primary`, `secondary`, `tertiary` or `danger`
   */
  color?: ButtonColors;
  /**
   * `filled`, `outline` or `ghost`
   */
  variant?: ButtonVariants;
  /**
   * `sm`, `md` or `lg`
   */
  size?: ButtonSizes;
  /**
   * Does it has a text ?
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */

export const Button = forwardRef(
  (
    {
      color = 'primary',
      type = 'button',
      size = 'md',
      children,
      variant = 'filled',
      ...restProps
    }: ButtonProps,
    ref: Ref<ButtonRef>
  ) => {
    return (
      <button ref={ref} type={type} {...restProps}>
        {sayHello()}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
