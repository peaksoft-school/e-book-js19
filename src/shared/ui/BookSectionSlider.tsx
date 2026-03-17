import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { ArrLeftIcon, ArrRightIcon } from '../assets/icons';

export interface Book {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

interface BookSectionSliderProps {
  title: string;
  books: Book[];
  onViewAll?: () => void;
}

const BookSectionSlider = ({ title, books, onViewAll }: BookSectionSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: false
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setActiveIndex(emblaApi.selectedScrollSnap() % books.length);
    });

    emblaApi.on('scroll', () => {
      setProgress(emblaApi.scrollProgress() * 100);
    });
  }, [emblaApi, books.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const activeBook = books[activeIndex];

  return (
    <section className="pl-20 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-h2 font-bold text-primary">{title}</h2>

        <button
          type="button"
          onClick={onViewAll}
          className="text-body text-secondary underline hover:opacity-70 transition-opacity pr-20"
        >
          Смотреть все
        </button>
      </div>

      <div className="flex justify-between gap-75">
        {activeBook && (
          <div className="flex flex-col justify-between shrink-0 w-123">
            <div className="flex flex-col gap-4">
              <h3 className="text-[56px] font-medium text-primary leading-[130%] w-md">
                {activeBook.title}
              </h3>

              <p className="text-body text-primary">{activeBook.description}</p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                className="text-body text-secondary underline hover:opacity-70 transition-opacity"
              >
                Подробнее
              </button>

              <span className="text-body text-secondary font-bold">{activeBook.price} с</span>
            </div>

            <div className="flex items-center gap-6 mt-8 ml-auto">
              <button
                type="button"
                onClick={scrollPrev}
                className="cursor-pointer hover:opacity-70"
              >
                <img src={ArrLeftIcon} alt="prev" />
              </button>

              <button
                type="button"
                onClick={scrollNext}
                className="cursor-pointer hover:opacity-70"
              >
                <img src={ArrRightIcon} alt="next" />
              </button>
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-4 items-end h-120">
              {books.map((book, index) => {
                const isActive = index % books.length === activeIndex;

                return (
                  <div
                    key={`${book.id}-${index}`}
                    className={`flex-none transition-all duration-500 ${
                      isActive ? 'w-70' : 'w-50'
                    }`}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className={`w-full object-cover transition-all duration-500 ${
                        isActive ? 'h-120' : 'h-90'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="h-0.5 bg-neutral-200 relative mt-15.5">
            <div
              className="absolute top-0 left-0 h-full bg-secondary transition-all duration-300"
              style={{ width: `${Math.max(Math.abs(progress), 10)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { BookSectionSlider };
