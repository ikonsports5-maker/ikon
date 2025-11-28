"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: any;
  }
}

export default function YouTubeLoop() {
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    // Prevent duplicate loading
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      window.onYouTubeIframeAPIReady = () => createPlayer();
    }

    function createPlayer() {
      if (playerRef.current) return; // prevent double init

      playerRef.current = new window.YT.Player("bgVideo", {
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event: any) => {
            event.target.mute();
            event.target.seekTo(8);
            event.target.playVideo();

            // Start safe loop interval
            if (!intervalRef.current) {
              intervalRef.current = setInterval(() => {
                const time = event.target.getCurrentTime();
                if (time >= 18) {
                  event.target.seekTo(8);
                }
              }, 250);
            }
          },
        },
      });
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <iframe
      id="bgVideo"
      className="w-full h-full object-cover pointer-events-none scale-150"
      src="https://www.youtube.com/embed/RCwzOp-sujE?enablejsapi=1&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
  );
}
