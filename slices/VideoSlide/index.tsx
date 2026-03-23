import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import VideoPlayer from "@/components/ui/Video";

export type VideoSlideProps = SliceComponentProps<Content.VideoSlideSlice>;

const VideoSlide: FC<VideoSlideProps> = ({ slice }) => {
  if (!slice.primary.video) return null;

  return (
    <section
      className="px-6 py-12"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <VideoPlayer id={slice.primary.video} />
    </section>
  );
};

export default VideoSlide;
