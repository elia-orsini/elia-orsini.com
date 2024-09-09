const fs = require("fs");
const path = require("path");

const tracksJsonPath = "public/radioDb.json";
const outputFolder = "public/playlist.json";

const getMidnightUnixTime = () => {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const unixMidnight = Math.floor(midnight.getTime() / 1000);
  return unixMidnight;
};

async function generatePlaylist() {
  const tracks = JSON.parse(fs.readFileSync(tracksJsonPath, "utf-8"));
  const playlist = [];

  let totalDuration = 0;
  let startTime = getMidnightUnixTime();

  while (totalDuration < 86400) {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const track = tracks[randomIndex];

    const duration = track.duration;
    totalDuration += duration;

    if (totalDuration > 86400) {
      break;
    }

    const song = {
      title: track.title,
      startTime: startTime,
      startTimeReadable: new Date(startTime * 1000).toUTCString(),
      duration: duration,
    };

    playlist.push(song);

    startTime += duration;
  }

  fs.writeFileSync(outputFolder, JSON.stringify(playlist, null, 2));

  console.log("Playlist generated and saved to playlist.json");
}

generatePlaylist();
