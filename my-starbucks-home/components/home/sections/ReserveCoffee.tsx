import styles from '@/styles/import/ReserveCoffee.module.scss';
import Image from 'next/image';

function ReserveCoffee() {
  return (
    <section className={styles['resserve-coffee']}>
      <div className={styles['resserve-coffee__inner']}>
        <Image
          className={styles['inner__logo']}
          src={'/images/reserve_logo.png'}
          alt="리저브 커피 로고"
          height={186}
          width={152}
        />
        <Image
          className={styles['inner-text']}
          src={'/images/reserve_text.png'}
          alt="리저브 커피 로고"
          height={120}
          width={450}
        />
        <Image
          className={styles['inner__imgage']}
          src={'/images/reserve_image.png'}
          alt="리저브 커피 로고"
          height={420}
          width={444}
        />
      </div>
    </section>
  );
}

export default ReserveCoffee;
