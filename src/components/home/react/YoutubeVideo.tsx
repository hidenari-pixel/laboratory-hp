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
      className="md:w-[80%] mx-auto w-full"
      iframeClassName="w-full h-full aspect-video"
      videoId="TrdPtAjhkvM"
      opts={opts}
    />
  );
};

export default YoutubeVideo;
