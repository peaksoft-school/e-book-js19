import { cn } from '../lib/utils';

export interface Tab {
  value: string;
  label: string;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Tabs = ({ tabs, activeTab, onChange, className }: TabsProps) => (
  <div className={cn('flex justify-center gap-8', className)}>
    {tabs.map((tab) => (
      <button
        key={tab.value}
        type="button"
        onClick={() => onChange(tab.value)}
        className={cn(
          'text-body-big font-sans pb-1 transition-colors cursor-pointer',
          activeTab === tab.value
            ? 'text-secondary font-bold border-b-2 border-secondary'
            : 'text-neutral-300 hover:text-secondary'
        )}
      >
        {tab.label}
      </button>
    ))}
  </div>
);
