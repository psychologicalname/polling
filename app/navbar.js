import Link from 'next/link';

export default function Navbar() {
    return (
      <header class="sticky top-0 z-30 w-full bg-gray-200 dark:bg-black">
        <nav class="container mx-auto flex items-center justify-between flex-wrap py-8 px-24">
          <div class="flex items-center text-gray-600 flex-shrink-0 dark:text-white mr-6">
            <Link href="/" class="font-semibold text-2xl tracking-tight">Polling</Link>
          </div>
          <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-md lg:flex-grow px-14">
              <Link href="/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-800 mr-8 dark:text-slate-300 hover:dark:text-white">
                Home
              </Link>
              <Link href="about" class="block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-800 mr-8 dark:text-slate-300 hover:dark:text-white">
                About
              </Link>
              <Link href="all_polls" class="block mt-4 lg:inline-block lg:mt-0 text-slate-500 hover:text-slate-800 mr-8 dark:text-slate-300 hover:dark:text-white">
                Polls
              </Link>
            </div>
            <div>
              <Link href="create_poll" class="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-600 border-slate-600 hover:border-transparent hover:text-white hover:bg-slate-600 dark:text-white dark:border-white hover:dark:border-transparenthover:darkr:text-stone-900 hover:dark:bg-white mt-4 mr-4 lg:mt-0">Create Poll</Link>
            </div>
            <div>
              <Link href="login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-slate-600 border-slate-600 hover:border-transparent hover:text-white hover:bg-slate-600 dark:text-white dark:border-white hover:dark:border-transparenthover:darkr:text-stone-900 hover:dark:bg-white mt-4 lg:mt-0">Log in</Link>
            </div>
          </div>
        </nav>
        </header>
    );
}