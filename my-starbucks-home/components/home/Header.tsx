import styles from '@/styles/import/Header.module.scss';
import { Menu } from '@/types/menu';
import Image from 'next/image';
import Link from 'next/link';
import { CgSearch } from 'react-icons/cg';

type Props = {
  menus: Menu[];
};

function Header({ menus }: Props) {
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
          {menus.map((menu, i) => (
            <li key={i} className={styles['main-menu__item']}>
              <div className={styles['item__name']}>{menu.category}</div>
              <div className={styles['item__dropdown']}>
                <ul className={`${styles['dropdown-list']} ${styles['inner']}`}>
                  {menu.dropdown.map((item, i) => (
                    <li
                      key={'dropdown ounter menu' + i}
                      className={styles['dropdown-item']}
                    >
                      <h4>{item.name}</h4>
                      <ul>
                        {item.contents.map((content, i) => (
                          <li key={'dropdown inner hovering upper menu' + i}>
                            {content}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
                <div className={styles['dropdown__info']}>
                  <div
                    className={`${styles['info__contents']} ${styles['inner']}`}
                  >
                    {menu.textureInfo.map((info, i) => (
                      <div key={'dropdown inner hovering lower menu' + i}>
                        <h4>{info.title}</h4>
                        <p>{info.contents}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
