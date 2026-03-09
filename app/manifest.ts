import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kuvalis Law Demo",
    short_name: "Kuvalis Law",
    description:
      "Demo website for Legal Client Intake showing how an AI legal receptionist could answer after-hours calls for law firms.",
    start_url: "/",
    display: "standalone",
    background_color: "#021327",
    theme_color: "#021327",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}