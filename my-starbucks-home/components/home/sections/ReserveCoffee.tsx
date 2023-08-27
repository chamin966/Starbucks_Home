import styles from '@/styles/import/ReserveCoffee.module.scss';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Props = {
  isFold: boolean;
};

function ReserveCoffee({ isFold }: Props) {
  const logoRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLImageElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const evalScrollY = () => {
    let tl = gsap.timeline();
    let triggerLine = 2000;
    if (isFold) triggerLine -= 635;
    if (window.scrollY > triggerLine) {
      tl.to(logoRef.current, { duration: 0.4, opacity: 1, x: 100 });
      tl.to(textRef.current, { duration: 0.5, opacity: 1, x: 100 });
      tl.to(imgRef.current, { duration: 0.5, opacity: 1, x: 100 });
      tl.to(btnRef.current, { duration: 0.5, opacity: 1, x: 0 });
    } else {
      gsap.to(logoRef.current, { duration: 0, opacity: 0, x: -50 });
      gsap.to(textRef.current, { duration: 0, opacity: 0, x: 0 });
      gsap.to(imgRef.current, { duration: 0, opacity: 0, x: 200 });
      gsap.to(btnRef.current, { duration: 0, opacity: 0, x: 100 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', evalScrollY);
    return () => {
      window.removeEventListener('scroll', evalScrollY);
    };
  });

  return (
    <section className={styles['resserve-coffee']}>
      <div className={styles['resserve-coffee__inner']}>
        <Image
          ref={logoRef}
          className={styles['inner__logo']}
          src={'/images/reserve_logo.png'}
          alt="리저브 커피 로고"
          height={186}
          width={152}
        />
        <Image
          ref={textRef}
          className={styles['inner-text']}
          src={'/images/reserve_text.png'}
          alt="리저브 커피 로고"
          height={120}
          width={450}
        />
        <Image
          ref={imgRef}
          className={styles['inner__imgage']}
          src={'/images/reserve_image.png'}
          alt="리저브 커피 로고"
          height={420}
          width={444}
        />
        <button ref={btnRef} className={styles['btn']}>
          자세히 보기
        </button>
      </div>
    </section>
  );
}

export default ReserveCoffee;
