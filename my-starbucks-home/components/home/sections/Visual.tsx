import styles from '@/styles/import/Visual.module.scss';
import Image from 'next/image';

function Visual() {
  return (
    <section className={styles['visual']}>
      <div className={styles['visual__inner']}>
        <div className={`${styles['visual__title']} ${styles['fade-in']}`}>
          <Image
            src="/images/visual_title.png"
            alt="STARBUCKS DELIGHTFUL START TO THE YEARS"
            width={470}
            height={231}
            priority
          />
          <a href="#" className={`${styles['btn']} ${styles['btn--brown']}`}>
            자세히 보기
          </a>
        </div>
        <div>
          <div className={styles['fade-in']}>
            <Image
              src="/images/visual_cup1.png"
              alt="new oatmeal latte"
              className={`${styles['cup1']} ${styles['image']}`}
              width={279}
              height={576}
              priority
            />
            <Image
              src="/images/visual_cup1_text.png"
              alt="오트밀 라떼"
              className={`${styles['cup1']} ${styles['text']}`}
              width={179}
              height={76}
              priority
            />
          </div>
        </div>
        <div>
          <div className={styles['fade-in']}>
            <Image
              src="/images/visual_cup2.png"
              alt="new starbucks caramel crumble mocha"
              className={`${styles['cup2']} ${styles['image']}`}
              width={280}
              height={504}
              priority
            />
            <Image
              src="/images/visual_cup2_text.png"
              alt="스타벅스 크럼블 카라멜 모카"
              className={`${styles['cup2']} ${styles['text']}`}
              width={254}
              height={96}
              priority
            />
          </div>
        </div>
        <div>
          <div className={styles['fade-in']}>
            <Image
              src="/images/visual_spoon.png"
              alt="Spoon"
              className={styles['spoon']}
              width={413}
              height={218}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Visual;
