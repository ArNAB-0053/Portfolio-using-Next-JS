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
    <html lang="en" className=''>
      <body className={`${inter.className} overflow-x-hidden selection:bg-white selection:text-black`}>        
        {children}
      </body>
    </html>
  );
}
