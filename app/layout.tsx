import type { Metadata } from "next";
import { Inter, Noto_Sans, Poppins, Rubik } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/next-auth";

const noto_sans = Noto_Sans({ subsets: ["latin-ext"] });

export const metadata: Metadata = {
  title: "Verse Fusion",
  description: "Created by Alan Umirzakov/nocturneFlow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={noto_sans.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="verse-fusion"
          >
            <Toaster theme="light" position="bottom-center" />
            {children}
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
