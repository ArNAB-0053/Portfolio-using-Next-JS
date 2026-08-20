import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Providers from "./providers";
import React from "react";
import ParticlesLayout from "@/Components/Backgrounds/particles";
import Movestopbtn from "@/Components/Movestopbtn";
import Footer from "@/Components/Footer/Footer";

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
}: Readonly<{ children: ReactNode }>): React.ReactElement {
  console.clear();
  return (
    <html lang="en" className="bg-black relative">
      <body
        className={`${inter.className} selection:bg-white selection:text-black`}
      >
        <ParticlesLayout>
          <NextTopLoader />
          <Providers>
            <Movestopbtn />
            {children}
            <Footer />
          </Providers>
          <ToastContainer />
        </ParticlesLayout>
      </body>
    </html>
  );
}
