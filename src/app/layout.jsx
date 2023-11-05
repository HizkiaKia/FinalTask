import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import logo from '@/assets/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KIA',
  description: 'My App-KIA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className]}>
       
        
        {children}
      </body>
    </html>
  )
}