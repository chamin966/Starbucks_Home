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
