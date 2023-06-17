import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Polling',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav class="container mx-auto flex items-center justify-between flex-wrap py-10 px-24">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/" class="font-semibold text-2xl tracking-tight">Polling</Link>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-md lg:flex-grow px-14">
              <Link href="/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-8">
                Home
              </Link>
              <Link href="about" class="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-8">
                About
              </Link>
              <Link href="all_polls" class="block mt-4 lg:inline-block lg:mt-0 text-slate-300 hover:text-white mr-8">
                Polls
              </Link>
            </div>
            <div>
              <Link href="create_poll" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-900 hover:bg-white mt-4 mr-4 lg:mt-0">Create Poll</Link>
            </div>
            <div>
              <Link href="login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-stone-900 hover:bg-white mt-4 lg:mt-0">Log in</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  )
}