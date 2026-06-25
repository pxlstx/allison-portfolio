import { HomePage } from "@/components/home/HomePage";
import { homeMedia } from "@/lib/site";

export default function Home() {
  return (
    <>
      <link
        rel="preload"
        href={homeMedia.introVideo}
        as="video"
        type="video/mp4"
      />
      <HomePage />
    </>
  );
}
