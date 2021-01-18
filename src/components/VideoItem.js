import React from "react";

const VideoItem = ({ video }) => {
  //desctuctured video prpperty from props that
  // was passed in props from videolist
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      {video.snippet.title}
    </div>
  );
};
export default VideoItem;
