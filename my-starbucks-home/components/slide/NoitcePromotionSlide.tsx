import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel-react';
import styles from '@/styles/import/NoticePromotionSlide.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

function NoticePromotionSlide() {
  // TODO: promotion Image 태그 alt 작성, 백그라운드 컬러 넣기
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

  const altTexts = [
    '2017 뉴이어, 스타벅스와 함께 즐겁고 활기차게 시작하세요!',
    '기간 내 스타벅스 카드 e-Gift를 3만원 이상 선물 시, 아메리카노 e-쿠폰을 드립니다.',
    '뉴이어 푸드와 제조 음료를 세트로 구매 시, 뉴이어 음료 BOGO(1+1) 쿠폰을 드립니다.',
    '신년 MD 상품 포함 3만원 이상 구매 고객께 아메리카노(톨사이즈) 쿠폰을 드립니다.',
    '2017 DIGITAL LUCKY DRAW 100% 당첨의 행운을 드립니다!',
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
              <Image src={path} alt={altTexts[i]} sizes="819px" fill />
              <button className={`${styles['btn']} ${styles['btn--more']}`}>
                자세히 보기
              </button>
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
