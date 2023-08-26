import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel-react';
import styles from '@/styles/import/NoticePromotionSlide.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

function NoticePromotionSlide() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const options: EmblaOptionsType = { loop: true };
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slide = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      emblaApi.slidesInView();
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) emblaApi.on('slidesInView', slide);
  }, [emblaApi, slide]);

  const imagesPaths = [
    '/images/promotion_slide1.jpg',
    '/images/promotion_slide2.jpg',
    '/images/promotion_slide3.jpg',
    '/images/promotion_slide4.jpg',
    '/images/promotion_slide5.jpg',
  ];

  return (
    <div className={styles['embla']}>
      <div className={styles['embla__viewport']} ref={emblaRef}>
        <div className={styles['embla__container']}>
          {imagesPaths.map((path, i) => (
            <div
              key={i}
              className={`${styles['embla__slide']} ${
                selectedIndex === i ? styles['center__slide'] : ''
              }`}
            >
              <Image src={path} alt="promotion" sizes="819px" fill />
            </div>
          ))}
        </div>
      </div>
      <button
        className={`${styles['embla__control-button']} ${styles['button--prev']}`}
        onClick={scrollPrev}
      >
        {'<'}
      </button>
      <button
        className={`${styles['embla__control-button']} ${styles['button--next']}`}
        onClick={scrollNext}
      >
        {'>'}
      </button>
    </div>
  );
}

export default NoticePromotionSlide;
