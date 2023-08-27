import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel-react';
import styles from '@/styles/import/NoticeLineSlide.module.scss';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

function NoticeLineSlide() {
  const options: EmblaOptionsType = { loop: true, axis: 'y' };
  const autoplayOptions = {
    delay: 2000,
    stopOnInteraction: false,
  };
  const [emblaRef] = useEmblaCarousel(options, [Autoplay(autoplayOptions)]);

  return (
    <div className={styles['embla']} ref={emblaRef}>
      <div className={styles['embla__container']}>
        <div className={styles['embla__slide']}>
          <Link href="#">
            크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
          </Link>
        </div>
        <div className={styles['embla__slide']}>
          <Link href="#">[당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트</Link>
        </div>
        <div className={styles['embla__slide']}>
          <Link href="#">
            스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
          </Link>
        </div>
        <div className={styles['embla__slide']}>
          <Link href="#">[당첨자 발표] 뉴이어 전자영수증 이벤트</Link>
        </div>
      </div>
    </div>
  );
}

export default NoticeLineSlide;
