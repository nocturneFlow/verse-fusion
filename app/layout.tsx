import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter, Noto_Sans, Poppins, Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const noto_sans = Noto_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Verse Fusion",
  description: "Created by Alan Umirzakov/nocturneFlow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={noto_sans.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="verse-fusion"
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
