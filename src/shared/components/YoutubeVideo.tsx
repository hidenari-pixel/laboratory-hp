import YouTube from 'react-youtube';

const YoutubeVideo = () => {
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      // autoplay: 1,
    },
  };

  return (
    <YouTube
      className="w-[60vw] sp:w-full"
      iframeClassName="w-full h-full aspect-video"
      videoId="8tANhdtET5A"
      opts={opts}
    />
  );
};

export default YoutubeVideo;
