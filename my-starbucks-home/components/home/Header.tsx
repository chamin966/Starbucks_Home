import styles from '@/styles/import/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CgSearch } from 'react-icons/cg';

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
        <div className={styles['header__sub-menu']}>
          <ul className={styles['menu']}>
            <li>
              <Link href="/signin">Sign In</Link>
            </li>
            <li>
              <Link href="#">My Starbucks</Link>
            </li>
            <li>
              <Link href="#">Customer Service & IdeLinks</Link>
            </li>
            <li>
              <Link href="#">Find a Store</Link>
            </li>
          </ul>
          <div className={styles['search']}>
            <input type="text" />
            <CgSearch className={styles['icon']} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
