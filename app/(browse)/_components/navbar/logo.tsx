import Link from "next/link";
import Image from "next/image";
import { Noto_Sans, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Noto_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/hexasharp.svg"
            alt="Verse Fusion"
            height="32"
            width="32"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Verse Fusion</p>
          <p className="text-xs text-muted-foreground">Multiverse experience</p>
        </div>
      </div>
    </Link>
  );
};
