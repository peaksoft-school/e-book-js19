import { useState } from 'react';
import { Tabs } from '../../shared/ui/Tabs';

const tabs = [
  { value: 'about', label: 'О книге' },
  { value: 'fragment', label: 'Читать фрагмент' }
];

interface BookDetailContentProps {
  about: string;
  fragment: string;
}

export const BookDetailContent = ({ about, fragment }: BookDetailContentProps) => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="mt-30">
      <div className="flex flex-col gap-6 items-start">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

        <div className="text-body text-primary leading-relaxed whitespace-pre-line max-w-7xl">
          {activeTab === 'about' ? about : fragment}
        </div>
      </div>

      <img src="" alt="" />
    </div>
  );
};
