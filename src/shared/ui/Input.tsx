import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, type InputHTMLAttributes, useState } from 'react';
import { Eye, EyeOff, Search, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export const inputVariants = cva('', {
  variants: {
    variant: {
      default: '',
      password: 'pr-10',
      search: 'pr-10',
      promo: 'pr-10'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, VariantProps<typeof inputVariants> {
  label?: string;
  required?: boolean;
  error?: boolean;
  type?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, label, required, placeholder, error, type = 'text', ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const inputType = variant === 'password' ? (showPassword ? type : 'password') : type;

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label className="text-body text-primary">
            {label}
            {required && <span className="text-danger ml-1">*</span>}
          </label>
        )}
        <div
          className={cn(
            'relative flex items-center border transition-colors',
            error
              ? 'border-danger bg-danger/10'
              : isFocused
                ? 'border-secondary'
                : 'border-neutral-200'
          )}
        >
          <input
            ref={ref}
            type={inputType}
            placeholder={placeholder}
            className={cn(
              'w-full bg-transparent font-sans text-body text-primary px-4 py-2.5 focus:outline-none placeholder:text-neutral-300 disabled:pointer-events-none disabled:opacity-50',
              variant === 'password' || variant === 'search' || variant === 'promo' ? 'pr-10' : '',
              className
            )}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {variant === 'password' && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-neutral-300 hover:text-primary transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}

          {variant === 'search' && (
            <span
              className={cn(
                'absolute right-3 transition-colors',
                isFocused ? 'text-secondary' : 'text-neutral-300'
              )}
            >
              <Search size={18} />
            </span>
          )}

          {variant === 'promo' && (
            <span className="absolute right-3 text-neutral-300">
              <ChevronRight size={18} />
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = 'Input';
