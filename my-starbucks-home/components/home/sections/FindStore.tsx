import styles from '@/styles/import/FindStore.module.scss';
import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function FindStore() {
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLImageElement | null>(null);
  const descRef = useRef<HTMLImageElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const evalScrollY = () => {
    let tl = gsap.timeline();
    if (window.scrollY > 3715) {
      gsap.to(img1Ref.current, { duration: 0.7, opacity: 1, x: 100 });
      gsap.to(img2Ref.current, { duration: 0.7, opacity: 1, x: 100 });
      tl.to(titleRef.current, { duration: 0.5, opacity: 1, x: 100 });
      tl.to(descRef.current, { duration: 0.5, opacity: 1, x: 100 });
      tl.to(btnRef.current, { duration: 0.3, opacity: 1, x: 0 });
    } else {
      gsap.to(img1Ref.current, { duration: 0, opacity: 0.2, x: 0 });
      gsap.to(img2Ref.current, { duration: 0, opacity: 0.2, x: 0 });
      gsap.to(titleRef.current, { duration: 0, opacity: 0.2, x: 200 });
      gsap.to(descRef.current, { duration: 0, opacity: 0.2, x: 200 });
      gsap.to(btnRef.current, { duration: 0, opacity: 0.2, x: 200 });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', evalScrollY);
    return () => {
      window.removeEventListener('scroll', evalScrollY);
    };
  });

  return (
    <section className={styles['find-store']}>
      <div className={styles['inner']}>
        <Image
          ref={img1Ref}
          className={`${styles['img1']} ${styles['imgs']}`}
          src="/images/find_store_picture1.jpg"
          alt="매장 찾기 이미지1"
          width={350}
          height={350}
        />
        <Image
          ref={img2Ref}
          className={`${styles['img2']} ${styles['imgs']}`}
          src="/images/find_store_picture2.jpg"
          alt="매장 찾기 이미지2"
          width={216}
          height={216}
        />
        <Image
          className={styles['deco1']}
          src="/images/find_store_texture1.png"
          alt="매장 찾기 데코 이미지1"
          width={343}
          height={92}
        />
        <Image
          className={styles['deco2']}
          src="/images/find_store_texture2.png"
          alt="매장 찾기 데코 이미지2"
          width={230}
          height={102}
        />
        <div className={styles['text-group']}>
          <Image
            ref={titleRef}
            className={styles['title']}
            src="/images/find_store_text1.png"
            alt="매장 찾기 텍스트1"
            width={385}
            height={54}
          />
          <Image
            ref={descRef}
            className={styles['desc']}
            src="/images/find_store_text2.png"
            alt="매장 찾기 텍스트2"
            width={366}
            height={61}
          />
        </div>
        <button ref={btnRef} className={styles['btn']}>
          매장 찾기
        </button>
      </div>
    </section>
  );
}

export default FindStore;
