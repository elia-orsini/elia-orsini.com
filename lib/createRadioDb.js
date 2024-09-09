const fs = require("fs");
const path = require("path");
const { loadMusicMetadata } = require("music-metadata");

const mp3FolderPath = "./public/radio";
const outputFolder = "public/radioDb.json";

function getMP3Files(folderPath) {
  return fs
    .readdirSync(folderPath)
    .filter((file) => path.extname(file) === ".mp3");
}

async function getMP3Metadata(filePath) {
  try {
    const mm = await loadMusicMetadata();
    const metadata = await mm.parseFile(filePath);
    return {
      title: path.basename(filePath, ".mp3"),
      duration: Math.ceil(metadata.format.duration),
    };
  } catch (error) {
    console.error(`Error reading metadata from ${filePath}: `, error);
    return null;
  }
}

async function generateMP3Json() {
  const mp3Files = getMP3Files(mp3FolderPath);
  const tracks = [];

  for (const mp3File of mp3Files) {
    const filePath = path.join(mp3FolderPath, mp3File);
    const track = await getMP3Metadata(filePath);

    if (track) {
      tracks.push(track);
    }
  }

  fs.writeFileSync(outputFolder, JSON.stringify(tracks, null, 2));
  console.log("JSON file created: radioDb.json");
}

generateMP3Json();
