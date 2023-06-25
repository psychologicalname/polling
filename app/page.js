import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Carousel1 from './mainCarousel';
import Carousel2 from './nextCarousel';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Carousel1 />

      <div className="bg-gray-100 my-0 pt-16 pb-10">
        <h4 className="mb-8 text-4xl text-center font-semibold text-gray-900 dark:text-white">Our Team</h4>
        <div className="mx-36">
          {/* <Carousel2 /> */}
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="bg-yellow-500 hover:bg-white text-xl text-black font-medium py-4 px-6 focus:outline-none focus:shadow-outline hover:border-2 hover:border-black hover:bg-white hover:text-black transition ease-in-out"
            >
              View All Destinations
            </button>
          </div>
        </div>
      </div>


      <div class="w-full pt-20 bg-neutral-300">
        <h4 className="mb-4 text-4xl text-center text-gray-900 dark:text-white">Testimonials</h4>
        <div class="grid grid-cols-3 gap-6 pt-14 mx-24">
          <div className="flex flex-col items-center pb-10 font-light">
            <img class="w-28 h-28 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <span class="text-sm text-center text-gray-700 dark:text-gray-400 leading-relaxed">“We went to Alibaug beach camping with WeekendFeels and guess what, everything was above expectations. We loved the place from where it started- the welcome drink, the starters, the activities, the music, the dinner, the friendly staff, and the live music. We blend in the night and we forgot that our life has a lot of tensions in our daily routine. At last, the open-air cinema and campfire ♥. We enjoyed every single second of that night. We can't express the feelings in words so if you want to know, you have to visit there.”</span>
            <div class="text-base text-gray-700 dark:text-gray-400 italic mt-8">
              — Meenal,
              <Link href="#" className="not-italic text-sky-600 hover:text-sky-800"> Travellor</Link>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 font-light">
            <img class="w-28 h-28 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <span class="text-sm text-center text-gray-700 dark:text-gray-400 leading-relaxed">“We really had a great time. The entire team were very friendly and helpful. Camping site is amazingly beautiful and serene. Luckily we also got to view saturn and jupiter from there and the open sky and stary night was mesmerizing. But you need to improve the approach road. Tents were clean and spacious. We were the only family so the staff took utmost care of our safety. We had real fun boating and kayaking and swimming in lake was a different experience for my children. Overall this one day picnic was a good change from the usual city stress. Thank you so much for arranging this trip specially for us on Sunday.”

            </span>
            <div class="text-base text-gray-700 dark:text-gray-400 italic mt-8">
              — Manish,
              <Link href="#" className="not-italic text-sky-600 hover:text-sky-800"> Adventurer</Link>
            </div>
          </div>
          <div className="flex flex-col items-center pb-10 font-light">
            <img class="w-28 h-28 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <span class="text-sm text-center text-gray-700 dark:text-gray-400 leading-relaxed">“What an amazing experience.. Nature has so much to give us... an extremely beautiful location weekend feel had suggested us n we enjoyed so so much!! From start till the end, be the food, the activities, night safari everything has its own charm... all the staffs there was so helpful in everything we asked, we wanted. Thank u once again for this wonderful suggestion. Igatpuri campsite was so amazing that one should definitely visit once.. What an experience”

            </span>
            <div class="text-base text-gray-700 dark:text-gray-400 italic mt-8">
              — Rosy,
              <Link href="#" className="not-italic text-sky-600 hover:text-sky-800"> Nature Lover</Link>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full py-16">
        <h4 className="mb-2 text-4xl text-center text-gray-900 dark:text-white">Our Blog</h4>
        <p className="text-center text-gray-900 font-light mb-4">Ideas for your next weekend</p>
        <div class="grid grid-cols-2 gap-6 pt-14 mx-24">
          <div className="flex flex-col items-start pb-10">
              <img className="h-64 w-full mb-3 rounded-lg shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <div class="text-2xl text-sky-700 dark:text-gray-400 mt-8">
              Panshet Dam - How to Reach, Time & Prices
              <div class="text-sm text-gray-400 dark:text-gray-400 mt-2 mb-4">
                by Kavita • Jul 29, 2022 at 10:45 am •
              </div>
              <div className="text-sm text-gray-900 font-light">
                Situated on the outskirts of Pune city, about 50 km to its South, Panshet is home to lush greenery, gushing waterfalls, and mountains. It is known for its unparalleled natural beauty and an absolutely enthralling ambiance.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pb-10">
            <img class="w-full h-64 mb-3 rounded-lg shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <div class="text-2xl text-sky-700 dark:text-gray-400 mt-8">
              11 Best Camping Options Near Mumbai and Pune
              <div class="text-sm text-gray-400 dark:text-gray-400 mt-2 mb-4">
                by Sara • Jan 10, 2022 at 4:30 pm •
              </div>
              <div className="text-sm text-gray-900 font-light">
                From the picturesque mountains to the natural Konkan coastal strip, Maharashtra is a breathtaking sight. It is a paradise for explorers; the state is renowned for its diverse culture and cuisine.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="bg-sky-600 hover:bg-white text-white font-medium py-2 px-4 focus:outline-none focus:shadow-outline hover:border-2 hover:border-black hover:bg-white hover:text-black transition ease-in-out"
          >
            View All Blog Posts
          </button>
        </div>
      </div>

      <div class="w-full py-16 bg-neutral-300">
        <h4 className="mb-2 text-4xl text-center text-gray-900 dark:text-white">Our Experience</h4>
        <p className="text-center text-gray-900 font-light mb-4">Your Trusted Partner for Memorable Moments</p>
        <div class="grid grid-cols-3 gap-6 pt-14 mx-24">
          <div className="flex flex-col items-center pb-10">
            <img class="w-12 h-12 mb-4" src="/pine-tree.png" alt="tree" />
            <h4 className="text-5xl font-extrabold text-center text-cyan-800 dark:text-white">2312</h4>
            <img class="w-12 h-8" src="/line.png" alt="line" />
            <div className="text-base font-normal text-cyan-900">
              CAMPS ORGANIZED
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img class="w-12 h-12 mb-4" src="/customer.png" alt="customer" />
            <h4 className="text-5xl font-extrabold text-center text-cyan-800 dark:text-white">38091</h4>
            <img class="w-12 h-8" src="/line.png" alt="line" />
            <div className="text-base font-normal text-cyan-900">
              SATISFIED CUSTOMERS
            </div>
          </div>
          <div className="flex flex-col items-center pb-10">
            <img class="w-12 h-12 mb-4" src="/signboard.png" alt="signboard" />
            <h4 className="text-5xl font-extrabold text-center text-cyan-800 dark:text-white">10</h4>
            <img class="w-12 h-8" src="/line.png" alt="line" />
            <div className="text-base font-normal text-cyan-900">
              LOCATIONS
            </div>
          </div>
        </div>
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

      {/* <div className="flex flex-col">
        <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full dark:border-gray-700 dark:bg-gray-800 m-4">
          <Image class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/home.jpg" width={500} height={500} alt="" />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </div>
      </div> */}



      {/* <div class="w-full pt-20 shadow dark:bg-black">
        <h4 className="mb-8 text-4xl text-center font-semibold text-gray-900 dark:text-white">Our Team</h4>
        <div class="grid grid-cols-3 gap-4 pt-14">
          <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white"
              >
                <FaInstagram />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaFacebook />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaTwitter />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white"
              >
                <FaInstagram />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaFacebook />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaTwitter />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pr-10 pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="/people.jpg" alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            <div className="my-4 flex flex-row justify-center items-center gap-2">
              <button
                type="button"
                // onClick={}
                className="bg-rose-500 hover:bg-rose-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white"
              >
                <FaInstagram />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-blue-700 hover:bg-blue-900 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaFacebook />
              </button>
              <button
                type="button"
                // onClick={}
                className="bg-sky-500 hover:bg-sky-700 py-2 px-2 rounded-full focus:outline-none focus:shadow-outline text-white">
                <FaTwitter />
              </button>
            </div>
          </div>
        </div>
      </div> */}


    </main>
  )
}
