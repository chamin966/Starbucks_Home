import styles from '@/styles/import/SeasonMenu.module.scss';
import Image from 'next/image';

function SeasonMenu() {
  return (
    <section className={styles['season-menu']}>
      <div className={styles['season-menu__inner']}>
        <Image
          className={styles['product-image']}
          src="/images/season_product_image.png"
          alt="시즌 메뉴"
          height={499}
          width={493}
        />
        <Image
          className={`${styles['text-group']} ${styles['title']}`}
          src="/images/season_product_text1.png"
          alt="시즌 메뉴"
          height={57}
          width={262}
        />
        <Image
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
