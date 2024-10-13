'use client';

import React from 'react';
import Image from 'next/image'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from 'gsap/all';


function Book() {

  useGSAP((context, contextSafe) => {
    gsap.registerPlugin(ScrollTrigger, Observer);

    const nextBook = contextSafe(() => {
      gsap.to(".book2", {
        xPercent: -100,
        ease: "power1.out",
        duration: 2,
      })
    })

    const prevBook = contextSafe(() => {
      gsap.to(".book2", {
        xPercent: 100,
        ease: "power2.in",
        duration: 2,
      })
    })

    Observer.create({
      target: ".nextButton",
      type: "touch,pointer",
      onPress: nextBook,
  })
    Observer.create({
      target: ".prevButton",
      type: "touch,pointer",
      onPress: prevBook,
  })
  });

  return (
    <div id="books" className="relative bg-gradient-to-b from-[#cadba8] from-[0%] via-[#ffa676] via-[70%] to-[#cadba8] to-[100%]">
      <div className="horizontal flex flex-row w-[100%] object-cover bg-transparent overflow-x-hidden">
        {/* Book 1 */}
        <div className="book book1 h-full w-[100vw] shrink-0 relative flex flex-col justify-center z-10">
          <Image
          priority
          className="w-full object-contain z-40 sm:hidden"
          src="/smBook.svg" 
          alt="smBook"
          width={936}
          height={1678}
          />
          <Image
          priority
          className="hidden sm:block lg:hidden w-full object-contain z-40"
          src="/mdBook.svg" 
          alt="mdBook"
          width={936}
          height={913}
          />
          <Image
          priority
          className="hidden lg:block w-full object-contain z-40"
          src="/Book.svg" 
          alt="Book"
          width={936}
          height={526}
          />
          <div className="absolute w-full h-full pb-4 pt-12 bottom-0 text-center z-50 font-mouse">
            <div className="relative h-full flex flex-col justify-center">
              <h1 className="hidden md:block text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#FF3D00] uppercase font-outline-2 min-[880px]:mb-10 lg:mb-0">Cashew Gets a Job</h1>
              <div className="relative flex flex-col md:flex-row justify-evenly items-center xs:justify-center z-10 md:mt-0 lg:mt-0 lg:py-0 xl:px-24 py-4 2xl:py-8 mt-10">
                <div className="w-4/5 md:w-1/2 max-h-full">
                  <h1 className="md:hidden text-4xl 2xs:text-5xl xs:text-6xl text-[#FF3D00] uppercase font-outline-1 md:font-outline-2">Cashew Gets a Job</h1>
                  <div className="hidden xs:block">
                    <p className="font-baloo text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-[#333333] pt-2 pb-4 px-6">Meet Cashew, the small pup with a huge heart. She’s always had a hard time fitting in, and she’s having an even harder time getting a job! Against all odds, Cashew teaches us to remain persistent in the search for our own true calling.</p>
                  </div>
                  <div className="mt-6 xs:mt-0 mb-0 xs:mb-4 sm:mb-0 sm:-10 flex items-center justify-center gap-x-6">
                    <a
                      href="https://www.cashewgetsajob.com/products/cashew-gets-a-job-hardcover"
                      target='_blank' 
                      rel='noopener noreferrer'
                      className="rounded-full bg-[#FA531E] px-3.5 py-2.5 text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-mouse text-[#333333] border md:border-2 border-[#333333] hover:bg-[#ff764c]"
                    >
                      Available Now!
                    </a>
                </div>
                </div>
                <div className="w-3/5 sm:w-1/4 md:w-1/3 lg:w-[30%] xl:w-1/3">
                  <div className="flex items-center max-w-lg border md:border-2 border-[#333333] rounded-full overflow-hidden mb-6 mt-12 xs:mt-6 ">
                      <Image
                        src="/cashewgetsajobcircle.webp"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        alt="cashewgetsajobcircle"
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
                  <div className="flex items-center justify-center">
                    <button 
                      className="nextButton flex flex-row items-center hover:text-[#FA531E] text-[#333333] text-xl md:text-3xl xl:text-4xl 2xl:text-5xl"
                      >
                      <p>Next</p>
                      <FaArrowRightLong className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Book 2 */}
        <div className="book book2 h-full w-[100vw] shrink-0 relative flex flex-col justify-center z-20">
          <Image
          className="w-full object-contain z-40 sm:hidden"
          src="/smRedBook.svg" 
          alt="smRedBook"
          width={936}
          height={1678}
          />
          <Image
          className="hidden sm:block lg:hidden w-full object-contain z-40"
          src="/mdRedBook.svg" 
          alt="mdRedBook"
          width={936}
          height={913}
          />
          <Image
          className="hidden lg:block w-full object-contain z-40"
          src="/bookRed.svg" 
          alt="bookRed"
          width={936}
          height={526}
          />
          <div className="absolute w-full h-full pb-4 pt-12  bottom-0 text-center z-50 font-mouse">
            <div className="relative h-full flex flex-col justify-center">
              <h1 className="hidden md:block text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#ffd500] uppercase font-outline-2 min-[880px]:mb-10 lg:mb-0">Cashew Keeps Going</h1>
              <div className="relative flex flex-col md:flex-row justify-evenly items-center xs:justify-center z-10 md:mt-0 lg:mt-0 lg:py-0 xl:px-24 py-4 2xl:py-8 mt-10">
                <div className="w-4/5 md:w-1/2 max-h-full">
                  <h1 className="md:hidden text-4xl 2xs:text-5xl xs:text-6xl text-[#ffd500] uppercase font-outline-1 md:font-outline-2">Cashew Keeps Going</h1>
                  <div className="hidden xs:block">
                    <p className="font-baloo text-lg md:text-3xl xl:text-4xl 2xl:text-5xl text-[#333333] pt-2 pb-4 px-6">Cashew is back in this exciting sequel to her first book. Despite her best efforts, she still hasn&apos;t found the perfect job! Picking up right where she left off, Cashew faces new challenges in her continued journey.</p>
                  </div>
                  <div className="mt-6 xs:mt-0 mb-0 xs:mb-4 sm:mb-0 sm:-10 flex items-center justify-center gap-x-6">
                    <a
                      href="https://www.cashewgetsajob.com/products/cashew-keeps-going-paperback"
                      target='_blank' 
                      rel='noopener noreferrer'
                      className="rounded-full bg-[#ffd500] px-3.5 py-2.5 text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-mouse text-[#333333] border md:border-2 border-black hover:bg-[#ffe45c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Available Now!
                    </a>
                  </div>
                </div>
                <div className="w-3/5 sm:w-1/4 md:w-1/3 lg:w-[30%] xl:w-1/3">
                  <div className="flex items-center max-w-lg border md:border-2 border-[#333333] rounded-full overflow-hidden mb-6 mt-12 xs:mt-6 ">
                      <Image
                        src="/Cashewkeepsgoingpic.webp"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        alt="Cashewkeepsgoingpic"
                        width={500}
                        height={500}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </div>
                  <div className="flex items-center justify-center">
                    <button 
                      className="prevButton flex flex-row items-center hover:text-[#ffd500] text-[#333333] text-xl md:text-3xl xl:text-4xl 2xl:text-5xl"
                      >
                      <FaArrowLeftLong className="mr-2"/>
                      <p>Previous</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Book