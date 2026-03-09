import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans transition-colors disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-white px-[24px] py-[10px] hover:bg-[#fe6e34] cursor:pointer active:bg-secondary',
        secondary:
          'bg-secondary text-primary-white px-[40px] py-[8px] hover:bg-secondary/90 active:bg-secondary',
        outline:
          'border border-neutral-200 !text-neutral-200 px-8 py-3 bg-transparent hover:bg-secondary hover:!text-primary-white hover:border-secondary',
        ghost: 'text-neutral-300 bg-transparent px-0 py-0 hover:underline hover:text-black',
        muted:
          'bg-transparent text-neutral-300 border border-neutral-200 px-[16px] py-[10px] hover:bg-[#fe6e34] hover:border-[#fe6e34] hover:text-primary-white active:bg-secondary active:border-secondary',
        upload:
          'border border-neutral-200 text-primary bg-transparent px-6 py-[10px] hover:bg-neutral-100',
        'upload-success': 'bg-success text-primary-white px-6 py-[10px]'
      },
      size: {
        default: 'h-10 text-body',
        sm: 'h-8 text-body-small',
        lg: 'h-12 text-body-big',
        full: 'w-full text-body'
      }
    }
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
