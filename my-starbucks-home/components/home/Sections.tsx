import Notice from './sections/Notice';
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
    </main>
  );
}

export default Sections;
