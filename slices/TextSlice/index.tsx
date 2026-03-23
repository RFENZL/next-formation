import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type TextSliceProps = SliceComponentProps<Content.TextSliceSlice>;

const TextSlice: FC<TextSliceProps> = ({ slice }) => {
  return (
    <section
      className="px-6 py-12 md:w-2/3"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.title && (
        <h2 className="font-bold mb-12 text-start! h2-sm">
          {slice.primary.title}
        </h2>
      )}
      <PrismicRichText field={slice.primary.text} />
    </section>
  );
};

export default TextSlice;
