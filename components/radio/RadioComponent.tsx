import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const getCurrentUnixTimestamp = () => {
  return Math.floor(new Date().getTime() / 1000);
};

const RadioPlayer = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const [isRadioPlaying, setIsRadioPlaying] = useState(false);
  const [listeners, setListeners] = useState(0);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch("/playlist.json");
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error("Failed to load playlist:", error);
      }
    };

    fetchPlaylist();
  }, []);

  useEffect(() => {
    const fetchListeners = async () => {
      try {
        const response = await fetch("/api/listeners/count");
        const data = await response.json();
        setListeners(data.listeners);
      } catch (error) {
        console.error("Failed to fetch listener count:", error);
      }
    };

    fetchListeners();

    // Refresh the listener count every 20 seconds
    const interval = setInterval(fetchListeners, 20000);

    return () => clearInterval(interval);
  }, []);

  // Increment listener count when playback starts
  const startListening = async () => {
    try {
      const response = await fetch("/api/listeners/increment", {
        method: "POST",
      });
      const data = await response.json();
      setListeners(data.listeners);
    } catch (error) {
      console.error("Failed to increment listener count:", error);
    }
  };

  // Decrement listener count when playback stops
  const stopListening = async () => {
    try {
      const response = await fetch("/api/listeners/decrement", {
        method: "POST",
      });
      const data = await response.json();
      setListeners(data.listeners);
    } catch (error) {
      console.error("Failed to decrement listener count:", error);
    }
  };

  // Handle page refresh or tab close
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (isRadioPlaying) {
        stopListening();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("unload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("unload", handleBeforeUnload);
    };
  }, [isRadioPlaying]);

  useEffect(() => {
    const checkSong = () => {
      const currentTimestamp = getCurrentUnixTimestamp();

      const songToPlay = playlist.find(
        (song) =>
          currentTimestamp >= song.startTime &&
          currentTimestamp < song.startTime + song.duration
      );

      if (songToPlay) {
        const offset = currentTimestamp - songToPlay.startTime;

        if (!currentSong || currentSong.title !== songToPlay.title) {
          setCurrentSong(songToPlay);

          if (audioRef.current) {
            audioRef.current.src = `https://elia-radio.s3.eu-west-2.amazonaws.com/${songToPlay.title}.mp3`;
            audioRef.current.currentTime = offset;

            if (isRadioPlaying) {
              audioRef.current.play();
            }
          }
        }
      }
    };

    const interval = setInterval(checkSong, 1000);

    return () => clearInterval(interval);
  }, [playlist, currentSong, isRadioPlaying]);

  useEffect(() => {
    const handleEnded = () => {
      const currentTimestamp = getCurrentUnixTimestamp();
      const nextSong = playlist.find(
        (song) => song.startTime > currentTimestamp
      );

      if (nextSong) {
        setCurrentSong(nextSong);
        audioRef.current.src = `https://elia-radio.s3.eu-west-2.amazonaws.com/${nextSong.title}.mp3`;
        audioRef.current.currentTime = 0;
        if (isRadioPlaying) {
          audioRef.current.play();
        }
        fetch("/api/listeners/count")
          .then((res) => res.json())
          .then((data) => setListeners(data.listeners))
          .catch((error) =>
            console.error("Failed to fetch listener count:", error)
          );
      }
    };

    if (audioRef.current) {
      audioRef.current.addEventListener("ended", handleEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [playlist, isRadioPlaying]);

  useEffect(() => {
    if ("mediaSession" in navigator && currentSong) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: currentSong.title,
        artist: "Elia's Radio",
        artwork: [
          {
            src: "/radioImages/BMud - Tahoe:Ranger.jpg",
            sizes: "265x265",
            type: "image/jpeg",
          },
        ],
      });

      navigator.mediaSession.setActionHandler("play", () => {
        audioRef.current.play();
        setIsRadioPlaying(true);
        startListening();
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        audioRef.current.pause();
        setIsRadioPlaying(false);
        stopListening();
      });
    }
  }, [currentSong]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        const currentTimestamp = getCurrentUnixTimestamp();
        const songToPlay = playlist.find(
          (song) =>
            currentTimestamp >= song.startTime &&
            currentTimestamp < song.startTime + song.duration
        );

        if (
          songToPlay &&
          (!currentSong || currentSong.title !== songToPlay.title)
        ) {
          setCurrentSong(songToPlay);
          audioRef.current.src = `https://elia-radio.s3.eu-west-2.amazonaws.com/${songToPlay.title}.mp3`;
          audioRef.current.currentTime =
            currentTimestamp - songToPlay.startTime;
          if (isRadioPlaying) {
            audioRef.current.play();
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [playlist, currentSong, isRadioPlaying]);

  function onButtonClick() {
    const currentTimestamp = getCurrentUnixTimestamp();

    const songToPlay = playlist.find(
      (song) =>
        currentTimestamp >= song.startTime &&
        currentTimestamp < song.startTime + song.duration
    );

    const offset = currentTimestamp - songToPlay.startTime;

    if (audioRef.current && audioRef.current.currentTime !== offset) {
      audioRef.current.currentTime = offset;
    }

    if (!isRadioPlaying) {
      audioRef.current.play();
      startListening();
    } else {
      audioRef.current.pause();
      stopListening();
    }

    setIsRadioPlaying(!isRadioPlaying);
  }

  return (
    <div className="mx-auto">
      {currentSong ? (
        <div className="flex flex-col mt-10">
          <button
            onClick={() => {
              onButtonClick();
            }}
            className="bg-white mx-auto text-black px-10 hover:opacity-80 py-1"
          >
            {isRadioPlaying ? "pause" : "play"}
          </button>
          <p className="opacity-80 text-sm mt-4">
            {listeners.toString().padStart(2, "0")} other people currently
            listening to
          </p>

          <h2 className="">{currentSong.title}</h2>
          <audio
            ref={audioRef}
            autoPlay={isRadioPlaying}
            controls
            className="hidden"
          >
            <source
              src={`https://elia-radio.s3.eu-west-2.amazonaws.com/${currentSong?.title}.mp3`}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}

      <Image
        className="mt-5 mx-auto"
        alt="radioImage"
        src="/radioImages/BMud - Tahoe:Ranger.jpg"
        width="265"
        height="265"
      />
    </div>
  );
};

export default RadioPlayer;
