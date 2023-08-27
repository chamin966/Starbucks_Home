import styles from '@/styles/import/ReserveStore.module.scss';
import Image from 'next/image';

function ReserveStore() {
  return (
    <section className={styles['reserve-store']}>
      <div className={styles['reserve-store__inner']}>
        <div className={styles['medal']}>
          <div className={styles['front']}>
            <Image
              src={'/images/reserve_store_medal_front.png'}
              alt="리저브 스토어 메달 앞면"
              height={334}
              width={334}
            />
          </div>
          <div className={styles['back']}>
            <Image
              src={'/images/reserve_store_medal_back.png'}
              alt="리저브 스토어 메달 뒷면"
              height={334}
              width={334}
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default ReserveStore;
