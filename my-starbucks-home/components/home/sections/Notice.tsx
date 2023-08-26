import styles from '@/styles/import/Notice.module.scss';
import { BsPlusCircleFill } from 'react-icons/bs';
import { LuFoldVertical } from 'react-icons/lu';
import { LuUnfoldVertical } from 'react-icons/lu';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import NoticeLineSlide from '@/components/slide/NoticeLineSlide';
import NoticePromotionSlide from '@/components/slide/NoitcePromotionSlide';
import Rewards from './Rewards';

function Notice() {
  const [isFold, setIsFold] = useState<boolean>(true);
  const promotionRef = useRef<HTMLDivElement | null>(null);

  const onClickFoldingIcon = () => {
    if (isFold) {
      setIsFold(false);

      gsap.to(promotionRef.current, {
        duration: 0.3,
        ease: 'power1',
        height: 0,
      });
    } else {
      setIsFold(true);

      gsap.to(promotionRef.current, {
        duration: 0.3,
        ease: 'power1',
        height: '593px',
      });
    }
  };

  return (
    <section className={styles['notice']}>
      <div className={styles['notice__line']}>
        <div className={styles['bg-left']}></div>
        <div className={styles['bg-right']}></div>
        <div className={styles['inner']}>
          <div className={styles['inner__left']}>
            <h2>공지사항</h2>
            <NoticeLineSlide />
            <BsPlusCircleFill className={styles['inner__icon']} />
          </div>
          <div className={styles['inner__right']}>
            <h2>스타벅스 프로모션</h2>
            <div className={styles['inner__icon']} onClick={onClickFoldingIcon}>
              {isFold ? <LuFoldVertical /> : <LuUnfoldVertical />}
            </div>
          </div>
        </div>
      </div>
      <div className={styles['notice__promotion']} ref={promotionRef}>
        <NoticePromotionSlide />
      </div>
      <div>
        <Rewards />
      </div>
    </section>
  );
}

export default Notice;
