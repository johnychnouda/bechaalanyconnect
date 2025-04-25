import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      { hostname: "picsum.photos" },
      { hostname: "store.storeimages.cdn-apple.com" },
      { hostname: "images.samsung.com" },
      { hostname: "i.dell.com" },
      { hostname: "img.abercrombie.com" },
      { hostname: "levi.scene7.com" },
      { hostname: "m.media-amazon.com" },
      { hostname: "image.uniqlo.com" },
      { hostname: "www.ikea.com" },
      { hostname: "www.homedepot.com" },
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
