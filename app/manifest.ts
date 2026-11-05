import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OryenSolutions",
    short_name: "Oryen",
    description: "Web development, mobile apps, AI automation, and custom software solutions from OryenSolutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0077b6",
    orientation: "portrait",
    scope: "/",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/pwa-icon.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
