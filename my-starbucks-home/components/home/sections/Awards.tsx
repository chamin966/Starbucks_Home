import AwardsSlide from '@/components/slide/AwardsSlide';
import styles from '@/styles/import/Awards.module.scss';

function Awards() {
  return (
    <section className={styles['awards']}>
      <AwardsSlide />
    </section>
  );
}

export default Awards;
