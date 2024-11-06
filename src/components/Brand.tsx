import { FeatherIcon } from "lucide-react";
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
        <FeatherIcon className="size-4" />
      </span>
      <span className="text-lg font-bold tracking-tight text-text-primary">
        Swift<span className="text-primary">Draft</span>
      </span>
    </Link>
  );
};

export default Brand;
