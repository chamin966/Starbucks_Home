import styles from '@/styles/import/PickFavorite.module.scss';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function PickFavorite() {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLImageElement | null>(null);

  const evalScrollY = () => {
    let tl = gsap.timeline();
    if (window.scrollY > 2350) {
      tl.to(logoRef.current, { duration: 0.5, opacity: 1, x: 100 });
      tl.to(textRef.current, { duration: 1, opacity: 1, x: 100 });
    } else {
      tl.to(logoRef.current, { duration: 0, opacity: 0, x: 0 });
      tl.to(textRef.current, { duration: 0, opacity: 0, x: 0 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', evalScrollY);
    return () => {
      window.removeEventListener('scroll', evalScrollY);
    };
  });

  return (
    <section className={styles['pick-favorite']}>
      <div className={styles['inner']}>
        <div className={styles['text-group']}>
          <Image
            ref={logoRef}
            src="/images/favorite_text1.png"
            alt="픽 페이버릿 텍스트1"
            width={258}
            height={204}
          />
          <Image
            ref={textRef}
            src="/images/favorite_text2.png"
            alt="픽 페이버릿 텍스트2"
            width={362}
            height={156}
          />
        </div>
      </div>
    </section>
  );
}

export default PickFavorite;
