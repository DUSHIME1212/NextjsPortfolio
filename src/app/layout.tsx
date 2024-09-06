import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Navbar from "~/app/_components/Navbar";

export const metadata: Metadata = {
  title: "Hs Portfolio",
  description: "Hi I&apos;m Dushime Aime 👋",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={'relative overflow-x-hidden min-h-screen px-8 md:px-16 lg:px-32'}>
      <div className={'fixed left-0 px-8 md:px-16 lg:px-32 z-50 bg-white bg-opacity-60 backdrop-blur-md w-full'}>
          <Navbar/>
      </div>
          {children}
      </body>
    </html>
  );
}
