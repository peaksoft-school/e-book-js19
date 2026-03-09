import { X } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ChipProps {
  label: string;
  onRemove: () => void;
  className?: string;
}

export const Chip = ({ label, onRemove, className }: ChipProps) => (
  <div
    className={cn(
      'inline-flex items-center gap-3 px-4 py-2.5 border border-neutral-200 text-primary hover:border-secondary hover:text-secondary transition-colors w-fit',
      className
    )}
  >
    <span className="text-body">{label}</span>

    <button
      type="button"
      onClick={onRemove}
      className="cursor-pointer hover:opacity-70 transition-opacity"
    >
      <X size={16} />
    </button>
  </div>
);
