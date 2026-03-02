import { WebsiteType } from "@/types/Website";
import Link from "next/link";

export default function Website({ title, thumbnail, slug }: WebsiteType) {
  return (
    <Link href={`websites/${slug}`}>
      <div>
        {thumbnail} {title}
      </div>
    </Link>
  );
}
