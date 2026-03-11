import { forwardRef, type InputHTMLAttributes } from 'react';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => (
    <label className="flex items-center gap-2 cursor-pointer">
      <div className="relative flex items-center justify-center">
        <input ref={ref} type="checkbox" className="sr-only peer" {...props} />
        <div
          className={cn(
            'w-6 h-6 border-2 border-neutral-200 transition-colors',
            'peer-checked:bg-secondary peer-checked:border-secondary',
            className
          )}
        />
        <Check
          size={14}
          className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity"
          strokeWidth={3}
        />
      </div>
      {label && <span className="text-body text-primary">{label}</span>}
    </label>
  )
);

Checkbox.displayName = 'Checkbox';
