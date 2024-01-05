import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  console.clear();
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black dark:scrollbar-track-[#666666] dark:scrollbar-thumb-[#a7a7a7] scrollbar-track-[#dadada] scrollbar-thumb-[#a7a7a7] scrollbar-thin  scrollbar-rounded`}>        
        {children}
      </body>
    </html>
  );
}
