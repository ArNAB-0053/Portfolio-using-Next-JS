import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Arnab Bhattacharyya",
    template: "%s | Arnab Bhattacharyya",
  },
  description:
    "Full Stack Engineer and AI Engineer building scalable web applications, developer tools, and AI-powered systems.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  console.clear();
  return (
    <html lang="en" className="">
      <body
        className={`${inter.className} overflow-x-hidden selection:bg-white selection:text-black`}
      >
        <NextTopLoader />
        
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
