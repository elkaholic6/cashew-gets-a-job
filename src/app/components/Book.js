import React from 'react';

import Reviews from './Reviews';


function Book() {
  return (
    <div className="bg-gradient-to-b from-[#cadba8] to-[#eaffea]">
      <div className="h-full relative flex flex-col justify-center">
        <img
        className="w-full object-contain z-40 sm:hidden"
        src="/smBook.svg" 
        />
        <img
        className="hidden sm:block lg:hidden w-full object-contain z-40"
        src="/mdBook.svg" 
        />
        <img
        className="hidden lg:block w-full object-contain z-40"
        src="/Book.svg" 
        />
        <div className="absolute w-full h-full py-8 bottom-0 text-center z-50 font-mouse">
          <div className="relative h-full flex flex-col justify-center">
            <h1 className="hidden md:block text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#FF3D00] uppercase font-outline-2 min-[880px]:mb-10 lg:mb-0">Cashew Gets a Job</h1>
            <div className="relative flex flex-col md:flex-row justify-evenly items-center xs:justify-center z-10 md:mt-0 lg:mt-0 lg:py-0 xl:px-24 py-4 2xl:py-8 mt-10">
              <div className="w-4/5 md:w-1/2 max-h-full px-6">
                <h1 className="md:hidden text-4xl 2xs:text-5xl xs:text-6xl text-[#FF3D00] uppercase font-outline-1 md:font-outline-2">Cashew Gets a Job</h1>
                <div className="hidden xs:block">
                  <p className="font-baloo text-xl md:text-3xl xl:text-4xl 2xl:text-5xl text-slate-800 pt-2 pb-4 px-6">Meet Cashew, the small pup with a huge heart. She’s always had a hard time fitting in, and she’s having an even harder time getting a job! Against all odds, Cashew teaches us to remain persistent in the search for our own true calling.</p>
                </div>
                <div className="mt-6 xs:mt-0 mb-0 xs:mb-4 sm:mb-0 sm:-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-full bg-rose-400 px-3.5 py-2.5 text-xl 2xl:text-4xl font-baloo font-semibold text-black hover:bg-rose-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Available Now!
                  </a>
                {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a> */}
              </div>
              </div>
              <div className="w-3/5 sm:w-1/3 flex items-center max-w-lg outline outline-1 md:outline-2 outline-black rounded-full overflow-hidden mb-6 mt-12 xs:mt-6 ">
                  <img
                    src="/cashewgetsajobcircle.webp"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
              </div>
            </div>
            {/* <Reviews /> */}
          </div>
        </div>
    </div>
  </div>
  )
}

export default Book