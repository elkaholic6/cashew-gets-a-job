'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Link from 'next/link'


gsap.registerPlugin(ScrollToPlugin);

function MiniNavBar() {

    useGSAP((context, contextSafe) => {
      gsap.registerPlugin(ScrollTrigger);

        const showAnim = gsap.from('.navbar', {
          yPercent: -100,
          paused: true,
          duration: 0.2
        }).progress(1);

        const scrollTrigger = ScrollTrigger.create({
          start: "top top",
          end: "max",
          markers: false,
          onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          }
        });

        ScrollTrigger.refresh();

        return () => {
          scrollTrigger.kill();
        };
    });

  return (
    <div className="bg-gray-900 overflow-hidden">
    <header className={`navbar fixed inset-x-0 top-0 z-[100]`}>
      <nav aria-label="Global" className="mx-auto p-3 sm:p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="flex px-4 font-mouse">
            <Link
              rel="preconnect"
              href="/"
              className="-mx-3 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl flex justify-center font-semibold leading-7 text-gray-900 border-2 border-black rounded-full px-6 py-2 bg-gray-100 overflow-hidden cursor-pointer"
              type="button"
            >
                HOME
            </Link>
          </div>
          <div className="flex px-4 font-mouse">
            <a
              href="https://www.cashewgetsajob.com/collections/all"
              target='_blank' 
              rel='noopener noreferrer'
              className="-mx-3 text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl flex justify-center font-semibold leading-7 text-gray-900 border-2 border-black rounded-full px-6 py-2 bg-[#ffee00] overflow-hidden cursor-pointer"
              type="button"
            >
                SHOP
            </a>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default MiniNavBar