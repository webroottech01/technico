import React, { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Ensure no loop
    video.removeAttribute("loop");

    // Start without controls
    video.removeAttribute("controls");

    // On click: play video and unmute
    const handleClick = () => {
      if (video.paused) {
        video.muted = false; // Unmute on click
        video.play();
      }
    };

    // Show controls once playback starts
    const handlePlay = () => {
      video.setAttribute("controls", true);
    };

    // On video end, reset to show poster
    const handleEnded = () => {
      video.pause();
      video.currentTime = 0;
      video.load(); // Reload to show poster
      video.removeAttribute("controls"); // Optional: hide controls again
    };

    video.addEventListener("click", handleClick);
    video.addEventListener("play", handlePlay);
    video.addEventListener("ended", handleEnded);

    // Cleanup on unmount
    return () => {
      video.removeEventListener("click", handleClick);
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      id="my-video"
      className="video-js"
      preload="auto"
      poster={process.env.PUBLIC_URL + '/images/videobanner.webp'}
      muted
      playsInline
      controlsList="nodownload"
      style={{ width: "100%", maxWidth: "100%", cursor: "pointer" }}
    >
      <source
        src={process.env.PUBLIC_URL + 'videos/Technico_Corporate_Video.mp4'}
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
