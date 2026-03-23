import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicImage, SliceComponentProps } from "@prismicio/react";

export type ImagesSliceProps = SliceComponentProps<Content.ImagesSliceSlice>;

const ImagesSlice: FC<ImagesSliceProps> = ({ slice }) => {
  return (
    <section
      className="grid grid-cols-2 gap-4 px-4 py-12"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.images.map((item, i) => (
        <PrismicImage
          key={i}
          field={item.image}
          className="rounded-lg flex-1 object-cover"
        />
      ))}
    </section>
  );
};

export default ImagesSlice;
