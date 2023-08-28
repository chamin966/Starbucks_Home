import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Head from 'next/head';
import { Nanum_Gothic } from 'next/font/google';
import { NextPage } from 'next';
import { Menu } from '@/types/menu';
import Sections from '@/components/home/Sections';
import { Fragment } from 'react';

const font = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

interface Props {
  menus: Menu[];
}

const Home: NextPage<Props> = ({ menus }) => {
  return (
    <Fragment>
      <Head>
        <title>My Starbucks</title>
        <meta
          name="description"
          content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={font.className}>
        <Header menus={menus} />
        <Sections />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  // 개발 환경에서의 절대 경로 설정 = http://localhost:3000/api/menus
  let menus = null;
  try {
    menus = (await import('../public/menus.json')).default as Menu[];
  } catch (error) {
    console.log('에러 발생', error);
  }

  return {
    props: { menus },
  };
}
