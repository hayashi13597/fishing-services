"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import "./youtube.scss";
import { useMediaQuery } from "react-responsive";
interface YoutubeItemPros {
  videoId: string;
}
const YoutubeItem: React.FC<YoutubeItemPros> = ({ videoId }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const isDesktop = useMediaQuery({ query: "(max-width:500px)" });


  const opts: YouTubeProps["opts"] = {
    height: isDesktop ? "380" : "600",
    width: "500",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className="youtube_container"
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
};

export default YoutubeItem;
