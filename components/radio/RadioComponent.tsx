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
  }, [playlist, currentSong]);

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
    } else {
      audioRef.current.pause();
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
            className="bg-white mx-auto text-black px-10"
          >
            {isRadioPlaying ? "pause" : "play"}
          </button>

          <h2 className="mt-5">Now Playing: {currentSong.title}</h2>
          <audio ref={audioRef} controls className="hidden">
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
        className="mt-5"
        alt="radioImage"
        src="/radioImages/BMud - Tahoe:Ranger.jpg"
        width="265"
        height="265"
      />
    </div>
  );
};

export default RadioPlayer;
