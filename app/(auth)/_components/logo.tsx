import Image from "next/image";
import { Inter, Noto_Sans, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Noto_Sans({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="bg-white rounded-full p-1">
        <Image
          src="/hexasharp.svg"
          alt="Verse Fusion"
          height="100"
          width="100"
        />
      </div>
      <div className={cn("flex flex-col items-center", font.className)}>
        <p className="text-xl font-semibold">Verse Fusion</p>
        <p className="text-sm text-muted-foreground">Multiverse Experience</p>
      </div>
    </div>
  );
};
