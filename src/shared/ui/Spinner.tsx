import { Loader2Icon } from 'lucide-react';
import { cn } from '../lib/utils';
import type { ComponentProps } from 'react';

export const Spinner = ({ className, ...props }: ComponentProps<'svg'>) => (
  <Loader2Icon
    role="status"
    aria-label="Loading"
    className={cn('size-5 animate-spin', className)}
    {...props}
  />
);
