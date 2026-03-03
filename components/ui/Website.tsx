import { WebsiteType } from "@/types/Website";
import Image from "next/image";
import Link from "next/link";

export default function Website({ website }: { website: WebsiteType }) {
  return (
    <Link href={`websites/${website.slug}`}>
      <div className="relative">
        <Image
          src={`/websites/${website.thumbnail}`}
          alt={`Image ${website.title}`}
          width="900"
          height="600"
          className="rounded-lg"
        />
        <h3 className="mt-4">{website.title}</h3>
      </div>
    </Link>
  );
}
