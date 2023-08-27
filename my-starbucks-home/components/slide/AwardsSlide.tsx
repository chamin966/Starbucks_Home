import styles from '@/styles/import/AwardsSlide.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import { EmblaOptionsType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback } from 'react';

import { IoArrowForwardOutline } from 'react-icons/io5';
import { IoArrowBackOutline } from 'react-icons/io5';

function AwardsSlide() {
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

  const imagesPaths = [
    '/images/awards_slide1.jpg',
    '/images/awards_slide2.jpg',
    '/images/awards_slide3.jpg',
    '/images/awards_slide4.jpg',
    '/images/awards_slide5.jpg',
    '/images/awards_slide6.jpg',
    '/images/awards_slide7.jpg',
    '/images/awards_slide8.jpg',
    '/images/awards_slide9.jpg',
    '/images/awards_slide10.jpg',
  ];

  return (
    <section className={styles['awards-slide']}>
      <div className={styles['awards-slide__inner']}>
        <div className={styles['embla']}>
          <div className={styles['embla__viewport']} ref={emblaRef}>
            <div className={styles['embla__container']}>
              {imagesPaths.map((path, i) => (
                <div key={i} className={styles['embla__slide']}>
                  <Image
                    src={path}
                    alt="어워즈 이미지"
                    width={192}
                    height={40}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button
        className={`${styles['control-button']} ${styles['button--prev']}`}
        onClick={scrollPrev}
      >
        <IoArrowBackOutline />
      </button>
      <button
        className={`${styles['control-button']} ${styles['button--next']}`}
        onClick={scrollNext}
      >
        <IoArrowForwardOutline />
      </button>
    </section>
  );
}

export default AwardsSlide;
