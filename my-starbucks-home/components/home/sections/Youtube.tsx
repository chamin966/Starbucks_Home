import Youtube, { YouTubeProps } from 'react-youtube';
import styles from '@/styles/import/YoutubePlay.module.scss';

function YoutubePlay() {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.mute();
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      loop: 1,
      autoplay: 1,
      controls: 0,
      playlist: 'An6LvWQuj_8',
    },
  };
  return (
    <section className={styles['youtube']}>
      <Youtube
        className={styles['youtube__player']}
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={onPlayerReady}
      />
      <div className={styles['youtube__cover']}></div>
    </section>
  );
}

export default YoutubePlay;
