import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }, ref) => (
    <label className="flex items-center gap-2 cursor-pointer group">
      <div className="relative flex items-center justify-center">
        <input ref={ref} type="radio" className="sr-only peer" {...props} />
        <div
          className={cn(
            'w-6 h-6 rounded-full border-2 border-neutral-200 transition-colors',
            'peer-checked:border-secondary',
            className
          )}
        />
        <div
          className={cn(
            'absolute w-3.5 h-3.5 rounded-full bg-secondary scale-0 transition-transform',
            'peer-checked:scale-100'
          )}
        />
      </div>
      {label && <span className="text-body text-primary">{label}</span>}
    </label>
  )
);

Radio.displayName = 'Radio';
