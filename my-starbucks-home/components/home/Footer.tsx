import styles from '@/styles/import/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={styles['footer']}>
      <div className={styles['inner']}>
        <ul className={styles['footer__menu']}>
          <li>
            <Link href="#" className={styles['green']}>
              개인정보처리방침
            </Link>
          </li>
          <li>
            <Link href="#">영상정보처리기기 운영관리 방침</Link>
          </li>
          <li>
            <Link href="#">홈페이지 이용약관</Link>
          </li>
          <li>
            <Link href="#">위치정보 이용약관</Link>
          </li>
          <li>
            <Link href="#">스타벅스 카드 이용약관</Link>
          </li>
          <li>
            <Link href="#">윤리경영 핫라인</Link>
          </li>
        </ul>

        <div className={styles['footer__btn-group']}>
          <Link href="#" className={`${styles['btn']} ${styles['btn--white']}`}>
            찾아오시는 길
          </Link>
          <Link href="#" className={`${styles['btn']} ${styles['btn--white']}`}>
            신규입점제의
          </Link>
          <Link href="#" className={`${styles['btn']} ${styles['btn--white']}`}>
            사이트 맵
          </Link>
        </div>

        <div className={styles['info']}>
          <span>사업자등록번호 201-81-21515</span>
          <span>(주)스타벅스 코리아 대표이사 이석구</span>
          <span>TEL : 02) 3015-1100 / FAX : 02) 3015-1106</span>
          <span>개인정보 책임자 : 강기원</span>
        </div>

        <p className="copyright">
          &copy; <span className="this-year"></span> Starbucks Coffee Company.
          All Rights Reserved.
        </p>
        <Image
          src="/images/starbucks_logo_only_text.png"
          alt="STAR BUCKS"
          width={142}
          height={14}
          priority
        />
      </div>
    </footer>
  );
}

export default Footer;
