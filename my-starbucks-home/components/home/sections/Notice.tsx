import styles from '@/styles/import/Notice.module.scss';
import { BsPlusCircleFill } from 'react-icons/bs';
import { LuFoldVertical } from 'react-icons/lu';
import { LuUnfoldVertical } from 'react-icons/lu';
import { gsap } from 'gsap';
import { useRef, useState } from 'react';
import NoticeLineSlide from '@/components/slide/NoticeLineSlide';
import NoticePromotionSlide from '@/components/slide/NoitcePromotionSlide';
import Rewards from './Rewards';

type Props = {
  isFold: boolean;
  setIsFold: (v: boolean) => void;
};

function Notice({ isFold, setIsFold }: Props) {
  const promotionRef = useRef<HTMLDivElement | null>(null);

  const onClickFoldingIcon = () => {
    if (isFold) {
      setIsFold(false);
      gsap.to(promotionRef.current, {
        duration: 0.3,
        ease: 'power1',
        height: '635px',
      });
    } else {
      setIsFold(true);
      gsap.to(promotionRef.current, {
        duration: 0.3,
        ease: 'power1',
        height: 0,
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
              {isFold ? <LuUnfoldVertical /> : <LuFoldVertical />}
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
