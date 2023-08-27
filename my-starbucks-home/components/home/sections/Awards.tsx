import AwardsSlide from '@/components/slide/AwardsSlide';
import styles from '@/styles/import/Awards.module.scss';

function Awards() {
  return (
    <section className={styles['awards']}>
      <div className={styles['awards__inner']}>
        <AwardsSlide />
      </div>
    </section>
  );
}

export default Awards;
