import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

type Data = {
  images: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const folderPath = path.join(process.cwd(), "public/imagesDiary");

  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ images: [] });
    }

    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/.test(file)
    );

    imageFiles.sort((a, b) => {
      const aNum = a.split(" ")[0];
      const bNum = b.split(" ")[0];

      return parseInt(aNum) - parseInt(bNum);
    });

    const images = imageFiles.map((file) => `/imagesDiary/${file}`);
    images.reverse();

    res.status(200).json({ images });
  });
}
