import styles from '@/styles/import/Rewards.module.scss';

function Rewards() {
  return (
    <article className={`${styles['rewards']} `}>
      <div className={styles['bg-left']}></div>
      <div className={styles['bg-right']}></div>
      <div className={styles['inner']}>
        <div className={styles['btn-group']}>
          <div
            className={`${styles['btn']} ${styles['btn--reverse']} ${styles['sign-up']}`}
          >
            회원가입
          </div>
          <div className={`${styles['btn']} ${styles['sign-in']}`}>로그인</div>
          <div className={`${styles['btn']} ${styles['gift']}`}>
            e-Gift 선물하기
          </div>
        </div>
      </div>
    </article>
  );
}

export default Rewards;
