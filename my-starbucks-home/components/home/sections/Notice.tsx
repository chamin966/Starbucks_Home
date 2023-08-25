import styles from '@/styles/import/Notice.module.scss';
import { IoAddCircle } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

import Slider from 'react-slick';

function Notice() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: 'linear',
  };

  return (
    <section className={styles['notice']}>
      <div className={styles['notice__line']}>
        <div className={styles['bg-left']}></div>
        <div className={styles['bg-right']}></div>
        <div className={styles['inner']}>
          <div className={styles['inner__left']}>
            <h2>공지사항</h2>
            <Slider {...settings} className={styles['inner__swiper']}>
              <div>
                <Link href="#">
                  크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내
                </Link>
              </div>
              <div>
                <Link href="#">
                  [당첨자 발표] 2021 스타벅스 플래너 영수증 이벤트
                </Link>
              </div>
              <div>
                <Link href="#">
                  스타벅스커피 코리아 애플리케이션 버전 업데이트 안내
                </Link>
              </div>
              <div>
                <Link href="#">[당첨자 발표] 뉴이어 전자영수증 이벤트</Link>
              </div>
            </Slider>
            <IoAddCircle style={{ fontSize: '30px' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Notice;
