import { useState } from 'react';
import { LAST_PUBLICATIONS_BOOKS } from '../../../shared/constants';
import BorderBookImage from '../../../shared/assets/images/border-book.png';

interface LastPublicationsProps {
  onViewAll?: () => void;
}

export const LastPublications = ({ onViewAll }: LastPublicationsProps) => {
  const [activeId, setActiveId] = useState(LAST_PUBLICATIONS_BOOKS[5].id);
  const [animating, setAnimating] = useState(false);

  const activeCategory = LAST_PUBLICATIONS_BOOKS.find((c) => c.id === activeId)!;

  const handleSelect = (id: number) => {
    if (id === activeId) return;

    setAnimating(true);

    setTimeout(() => {
      setActiveId(id);
      setAnimating(false);
    }, 400);
  };

  return (
    <div className="bg-primary px-20 py-16" style={{ minHeight: '600px' }}>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-h2 font-bold text-white">Последние публикации</h2>

        <button
          type="button"
          onClick={onViewAll}
          className="text-body text-secondary underline hover:opacity-70 transition-opacity"
        >
          Смотреть все
        </button>
      </div>

      <div className="flex items-center gap-16">
        <div className="flex flex-col gap-6 shrink-0 w-55">
          {LAST_PUBLICATIONS_BOOKS.map((cat) => {
            const isActive = cat.id === activeId;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelect(cat.id)}
                className={`text-left text-body transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white font-semibold flex items-center gap-3'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {isActive && <span className="inline-block w-8 h-0.5 bg-white shrink-0" />}
                {cat.name}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-center flex-1">
          <div>
            <div className="relative w-100 h-125">
              <img
                src={BorderBookImage}
                alt="border"
                className="absolute z-0"
                style={{ width: '140%', height: '110%', top: '-5%', left: '-5%' }}
              />

              <img
                src={activeCategory.book.image}
                alt={activeCategory.book.title}
                className={`relative z-10 w-85 h-125 left-3 object-cover shadow-2xl book-sway transition-all ${animating ? 'opacity-0 ' : 'opacity-100 scale-100'}`}
                style={{
                  transition: 'transform 0.4s ease, opacity 0.4s ease, scale 0.4s ease'
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 shrink-0 w-80">
          <h3 className="text-h4 font-bold text-white tracking-widest">
            {activeCategory.book.title}
          </h3>

          <p className="text-body text-neutral-300 leading-relaxed">
            {activeCategory.book.description}
          </p>

          <div className="flex items-center justify-between mt-4">
            <button
              type="button"
              className="text-body text-secondary underline hover:opacity-70 transition-opacity"
            >
              Подробнее
            </button>

            <span className="text-body text-white font-bold">{activeCategory.book.price} с</span>
          </div>
        </div>
      </div>
    </div>
  );
};
