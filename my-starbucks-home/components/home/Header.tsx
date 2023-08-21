import styles from '@/styles/import/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header__inner']}>
        <div className={styles['header__logo']}>
          {/* public 폴더 내부에 있는 이미지 */}
          <Link href={'/'}>
            <Image
              src={'/images/starbucks_logo.png'}
              alt="스타벅스 로고"
              fill
              unoptimized
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
