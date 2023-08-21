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
                <li className={styles['dropdown-item']}>
                  <h4>에스프레소 음료</h4>
                  <ul>
                    <li>도피오</li>
                    <li>에스프레소 마키아또</li>
                    <li>아메리카노</li>
                    <li>마키아또</li>
                    <li>카푸치노</li>
                    <li>라떼</li>
                    <li>모카</li>
                    <li>리스트레또 비안코</li>
                  </ul>
                </li>
                <li className={styles['dropdown-item']}>
                  <h4>커피 이야기</h4>
                  <ul>
                    <li>스타벅스 로스트 스팩트럼</li>
                    <li>최상의 아라비카 원두</li>
                    <li>한 잔의 커피가 완성되기까지</li>
                    <li>클로버® 커피 추출 시스템</li>
                  </ul>
                </li>
                <li className={styles['dropdown-item']}>
                  <h4>최상의 커피를 즐기는 법</h4>
                  <ul>
                    <li>커피 프레스</li>
                    <li>푸어 오버</li>
                    <li>아이스 푸어 오버</li>
                    <li>커피 메이커</li>
                    <li>리저브를 매장에서 다양하게 즐기는 법</li>
                  </ul>
                </li>
              </ul>
              <div className={styles['dropdown__info']}>
                <div className={styles['inner']}>
                  <h4>나와 어울리는 커피 찾기</h4>
                  <p>스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.</p>
                  <h4>최상의 커피를 즐기는 법</h4>
                  <p>여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.</p>
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
