import { WebsiteDocument } from "@/prismicio-types";
import { PrismicImage } from "@prismicio/react";
import Link from "next/link";

export default function Website({ website }: { website: WebsiteDocument }) {
  return (
<<<<<<< Updated upstream
    <Link href={`websites/${website.uid}`}>
      <div className="relative">
        <PrismicImage
          field={website.data.img}
=======
    <Link href={`/websites/${website.slug}`}>
      <div className="relative">
        <Image
          src={`/websites/${website.thumbnail}`}
          alt={`Image ${website.title}`}
          width={900}
          height={600}
>>>>>>> Stashed changes
          className="rounded-lg"
        />
        <h3 className="mt-4">{website.data.title}</h3>
      </div>
    </Link>
  );
}
