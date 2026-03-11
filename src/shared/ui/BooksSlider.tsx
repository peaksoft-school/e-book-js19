import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ArrLeftIcon, ArrRightIcon } from '../assets/icons';
import BackgroundSliderImage from '../assets/images/background-slider.png';
import { SLIDER_BOOKS } from '../constants';

const BookSlider = () => {
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
      className="relative h-180"
      style={{
        backgroundImage: `url(${BackgroundSliderImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div ref={emblaRef} className="h-120 pt-24.25">
        <div className="flex items-center h-full">
          {SLIDER_BOOKS.map(({ id, title, image }, i) => {
            const isActive = i === activeIndex;

            return (
              <div key={id} className="flex-none w-1/3 flex items-center justify-center px-4">
                <img
                  src={image}
                  alt={title}
                  className={`object-contain transition-all duration-500 ${
                    isActive ? 'w-56 scale-150 opacity-100' : 'w-28 scale-75 opacity-40'
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
        className="absolute left-8 top-[45%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <img src={ArrLeftIcon} alt="prev" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-8 top-[45%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <img src={ArrRightIcon} alt="next" />
      </button>

      <div className="flex flex-col items-center mt-20 relative right-15">
        <div className="flex flex-col items-start">
          <p className="text-white text-body">{SLIDER_BOOKS[activeIndex]?.title}</p>
          <div className="flex items-center gap-2">
            <p className="text-neutral-300 text-body-small">{SLIDER_BOOKS[activeIndex]?.author}</p>
            <p className="text-secondary text-body ml-2">{SLIDER_BOOKS[activeIndex]?.price} с</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BookSlider };
