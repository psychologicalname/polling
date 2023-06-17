import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
<div id="default-carousel" class="relative w-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/carousal.jpg" width={1000} height={1000} class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/carousal.jpg" width={1000} height={1000} class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/carousal.jpg" width={1000} height={1000} class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/carousal.jpg" width={1000} height={1000} class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src="/carousal.jpg" width={1000} height={1000} class="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

        <div className="flex flex-col">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full dark:border-gray-700 dark:bg-gray-800 m-4">
                <Image class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/home.jpg" width={500} height={500} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
            </div>
        </div>

        
<div class="w-full my-8 rounded-lg pt-4 bg-white shadow dark:bg-gray-800">
      <h4 className="mb-8 text-4xl text-center font-semibold text-gray-900 dark:text-white">Our Team</h4>
    <div class="grid grid-cols-3 gap-4 pt-14">
        <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
                >
              <FaInstagram />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaFacebook />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaTwitter />
              </button>
            </div>
        </div>
        <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
                >
              <FaInstagram />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaFacebook />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaTwitter />
              </button>
            </div>
        </div>
        <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline"
                >
              <FaInstagram />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaFacebook />
              </button>
              <button 
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline">
              <FaTwitter />
              </button>
            </div>
        </div>
    </div>
</div>


    </main>
  )
}
