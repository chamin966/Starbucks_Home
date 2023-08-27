import Notice from './sections/Notice';
import ReserveCoffee from './sections/ReserveCoffee';
import SeasonMenu from './sections/SeasonMenu';
import Visual from './sections/Visual';
import YoutubePlay from './sections/Youtube';

function Sections() {
  return (
    <main>
      <Visual />
      <Notice />
      <YoutubePlay />
      <SeasonMenu />
      <ReserveCoffee />
    </main>
  );
}

export default Sections;
