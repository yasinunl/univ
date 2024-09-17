import React from 'react';
import ReactPlayer from 'react-player/youtube';

const YouTubePlayer = ({ url, width = '50%', height = '350px', controls = true }) => {
  return (
      <ReactPlayer
        url={url}
        width={width}
        height={height}
        controls={controls}
        style={{marginLeft:"auto", marginRight:"auto"}}
      />
  );
};

export default YouTubePlayer;
