import { useState } from 'react';
import Awards from './sections/Awards';
import FindStore from './sections/FindStore';
import Notice from './sections/Notice';
import PickFavorite from './sections/PickFavorite';
import ReserveCoffee from './sections/ReserveCoffee';
import ReserveStore from './sections/ReserveStore';
import SeasonMenu from './sections/SeasonMenu';
import Visual from './sections/Visual';
import YoutubePlay from './sections/Youtube';

//TODO: 자세히보기 버튼 추가, 접힌 상태에서 스크롤 기준 변경

function Sections() {
  const [isFold, setIsFold] = useState<boolean>(false);

  return (
    <main>
      <Visual />
      <Notice isFold={isFold} setIsFold={setIsFold} />
      <YoutubePlay />
      <SeasonMenu isFold={isFold} />
      <ReserveCoffee isFold={isFold} />
      <PickFavorite isFold={isFold} />
      <ReserveStore />
      <FindStore isFold={isFold} />
      <Awards />
    </main>
  );
}

export default Sections;
