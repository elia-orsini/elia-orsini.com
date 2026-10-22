import localFont from "next/font/local";

export const ioskeleyMono = localFont({
  src: [
    {
      path: "../public/fonts/IoskeleyMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IoskeleyMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ioskeley",
  display: "swap",
});
