import styles from '@/styles/import/Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { CgSearch } from 'react-icons/cg';

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['inner']}>
        <div className={styles['header__logo']}>
          {/* public 폴더 내부에 있는 이미지 */}
          <Link href={'/'}>
            <Image
              src={'/images/starbucks_logo.png'}
              alt="스타벅스 로고"
              height={75}
              width={75}
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
        <ul className={styles['header__main-menu']}>
          <li className={styles['main-menu__item']}>
            <div className={styles['item__name']}>COFFEE</div>
            <div className={styles['item__dropdown']}>
              <ul className={`${styles['dropdown-list']} ${styles['inner']}`}>
                <li className={styles['dropdown-item']}>
                  <h4>커피</h4>
                  <ul>
                    <li>스타벅스 원두</li>
                    <li>스타벅스 비아</li>
                    <li>스타벅스 오리가미</li>
                  </ul>
                </li>
              </ul>
              <div className={styles['dropdown__info']}>
                <div className={styles['inner']}>
                  <h4>나와 어울리는 커피 찾기</h4>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
