import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ArrLeftIcon, ArrRightIcon } from '../assets/icons';
import BackgroundSliderImage from '../assets/images/background-slider.png';
import { SLIDER_BOOKS } from '../constants/books';

interface Book {
  id: number;
  image: string;
  title: string;
  author: string;
  price: number;
}

interface BooksProps {
  books: Book[];
  onViewAll?: () => void;
}

const BookSlider = ({ books }: BooksProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center', slidesToScroll: 1 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div
      className="relative overflow-hidden flex flex-col justify-center items-center px-140"
      style={{
        backgroundImage: `url(${BackgroundSliderImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
      }}
    >
      <div ref={emblaRef} className="h-150 pt-16 overflow-hidden">
        <div className="flex items-center h-full">
          {books.map(({ id, title, image }, i) => {
            const isActive = i === activeIndex;

            return (
              <div key={id} className="flex-none w-1/3 flex items-center justify-center">
                <img
                  src={image}
                  alt={title}
                  className={`object-contain transition-all duration-500 ${
                    isActive ? 'w-70 scale-150 opacity-100' : 'w-44 scale-90 opacity-40'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-[18%] top-[45%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <img src={ArrLeftIcon} alt="prev" className="w-24" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-[18%] top-[45%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <img src={ArrRightIcon} alt="next" className="w-24 h-10" />
      </button>

      <div className="flex flex-col items-center justify-center mt-10 w-100">
        <div className="flex flex-col items-start w-full">
          <p className="text-white text-h4">{SLIDER_BOOKS[activeIndex]?.title}</p>
          <div className="w-full flex items-center justify-between gap-2">
            <p className="text-neutral-300 text-body-small">{SLIDER_BOOKS[activeIndex]?.author}</p>
            <p className="text-secondary text-body ml-2">{SLIDER_BOOKS[activeIndex]?.price} с</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BookSlider };
