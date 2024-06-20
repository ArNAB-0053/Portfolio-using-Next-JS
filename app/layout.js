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
    <html lang="en" className='scrollbar-thin  scrollbar-rounded'>
      <body className={`${inter.className} overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black dark:scrollbar-track-[#666666]`}>        
        {children}
      </body>
    </html>
  );
}
