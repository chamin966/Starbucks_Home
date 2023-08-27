import styles from '@/styles/import/SeasonMenu.module.scss';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function SeasonMenu() {
  const productImgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLImageElement[]>([]);

  const evalScrollY = () => {
    console.log(window.scrollY);
    if (window.scrollY > 1750) {
      gsap.to(productImgRef.current, { opacity: 1, x: 100, duration: 1.5 });
      textRef.current.forEach((item, index) => {
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 1,
        });
      });
    } else {
      gsap.to(productImgRef.current, { opacity: 0, x: 0, duration: 1.5 });
      textRef.current.forEach((item) => {
        gsap.to(item, {
          opacity: 0.5,
          x: 100,
        });
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', evalScrollY);
    return () => {
      window.removeEventListener('scroll', evalScrollY);
    };
  });

  useEffect(() => {
    evalScrollY();
  }, []);

  return (
    <section className={styles['season-menu']}>
      <div className={styles['season-menu__inner']}>
        <Image
          ref={productImgRef}
          className={styles['product-image']}
          src="/images/season_product_image.png"
          alt="시즌 메뉴"
          height={499}
          width={493}
        />
        <Image
          ref={(el) => el && textRef.current.push(el)}
          className={`${styles['text-group']} ${styles['title']}`}
          src="/images/season_product_text1.png"
          alt="시즌 메뉴"
          height={57}
          width={262}
        />
        <Image
          ref={(el) => el && textRef.current.push(el)}
          className={`${styles['text-group']} ${styles['description']}`}
          src="/images/season_product_text2.png"
          alt="시즌 메뉴"
          height={57}
          width={488}
        />
      </div>
    </section>
  );
}

export default SeasonMenu;
