import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PopupItem {
  id: number;
  name: string;
}

interface PopupProps {
  label: string;
  items: PopupItem[];
  onSelect?: (item: PopupItem) => void;
  align?: 'left' | 'right';
}

export const PopUp = ({ label, items, onSelect, align = 'left' }: PopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-body text-primary hover:text-secondary transition-colors font-semibold"
      >
        {label}

        <ChevronDown size={16} className={`transition-transform  ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute top-8 ${align === 'right' ? 'right-0' : 'left-0'} bg-white border border-neutral-200 shadow-md z-50 min-w-48`}
        >
          <div className="max-h-87.5 overflow-y-auto">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect?.(item);
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-body text-primary hover:text-secondary hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
