import React, { useEffect, useRef } from "react";
import './videoplayer.scss';

const VideoPlayer = ({ thumbnail, videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.removeAttribute("loop");
    video.removeAttribute("controls");

    const handleClick = () => {
      if (video.paused) {
        video.muted = false;
        video.play();
      }
    };

    const handlePlay = () => {
      video.setAttribute("controls", "true");
    };

    const handleEnded = () => {
      video.pause();
      video.currentTime = 0;
      video.load();
      video.removeAttribute("controls");
    };

    video.addEventListener("click", handleClick);
    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("click", handleClick);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="video-js"
      preload="auto"
      poster={thumbnail}
      muted
      playsInline
      controlsList="nodownload"
      style={{ width: "100%", maxWidth: "100%", cursor: "pointer" }}
    >
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
