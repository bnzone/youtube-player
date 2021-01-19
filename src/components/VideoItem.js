import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  //desctuctured video && onVideoSelect prpperty from props that
  // was passed in props from videolist
  return (
    // adding onClick event that will call onVideoSelect with video
    // using => func to do so, otherwise onVideoSelect will be called
    // without video !!!

    <div onClick={() => onVideoSelect(video)} className="item video-item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
