'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Books', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'NFTs', href: '#' },
  { name: 'Contact', href: '#' },
  // { name: 'Shop', href: '/shop' },
  { name: 'News', href: '#' },
  // { name: 'Media', href: '#' },
  { name: 'Games', href: '#' },
  // { name: 'FAQ', href: '#' },
]

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useGSAP((context, contextSafe) => {
      gsap.registerPlugin(ScrollTrigger);

        const showAnim = gsap.from('.navbar', {
          yPercent: -100,
          paused: true,
          duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
          start: "top top",
          end: "max",
          markers: false,
          onUpdate: (self) => {
            self.direction === -1 ? showAnim.play() : showAnim.reverse();
          }
        })
    });

  return (
    <div className="bg-gray-900 overflow-hidden">
    <header className={`navbar fixed inset-x-0 top-0 z-[100]`}>
      <nav aria-label="Global" className="mx-auto p-6">
        <div className="flex flex-row items-center justify-around">
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                  <img src='/cashewlogo.png' aria-hidden="true" className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full border border-black" />
                ) : (
                  <img src='/cashewlogo.png' aria-hidden="true" className="hidden" />
                )
              }
            </button>
          </div>
          <div className="hidden lg:invisible lg:flex py-6 font-mouse">
            <a
              href="#"
              className="-mx-3 rounded-lg text-4xl flex justify-center font-semibold leading-7 text-gray-900"
            >
              <button 
                className="border-2 border-black rounded-full px-6 py-2 bg-[#ffee00] overflow-hidden cursor-pointer"
                // onClick={() => setMobileMenuOpen(false)}
                >
                SHOP
              </button>
            </a>
          </div>
          <div className={`hidden lg:flex justify-center w-auto`}>
            <div className="flex justify-center z-[150] w-auto rounded-full bg-white shadow-[0_15px_30px_0px_rgba(0,0,0,0.3)] px-4">
              <div className="flex lg:gap-x-10 mx-6 my-2">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-mouse text-4xl xl:text-5xl font-medium leading-6 text-black">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:flex py-6 font-mouse">
            <a
              href="#"
              className="-mx-3 rounded-lg text-4xl xl:text-5xl flex justify-center font-semibold leading-7 text-gray-900"
            >
              <button 
                className="border-2 border-black rounded-full px-6 py-2 bg-[#ffee00] overflow-hidden cursor-pointer"
                // onClick={() => setMobileMenuOpen(false)}
                >
                SHOP
              </button>
            </a>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black opacity-25" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full h-screen overflow-y-auto">
          <div className="bg-[#836EE7] rounded-b-xl border-b-[6px] border-cyan-200 h-fit py-6 px-6">
            <div className="flex items-start justify-between">
              <div className="w-full h-fit">
                <a href="#" className="flex justify-center -mx-1.5 px-1.5">
                  <span className="sr-only">Cashew Gets A Job</span>
                  <img
                      alt=""
                      src="/CashewLogo.png"
                      className="h-20 w-auto rounded-full border border-black"
                  />
                </a>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="absolute h-6 w-6 right-8 top-8" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex w-full justify-center ml-3 sm:ml-6 md:ml-14">
                  <div className="grid grid-cols-2 py-6 font-mouse xs:w-1/2 sm:w-3/5">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex justify-start rounded-lg px-3 py-4 text-5xl text-[#edfaff] font-semibold leading-7"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-6 font-mouse">
                  <a
                    href="#"
                    className="-mx-3 rounded-lg text-4xl flex justify-center font-semibold leading-7 text-gray-900"
                  >
                    <button 
                      className="border-2 border-black rounded-full px-6 py-2 min-w-64 xs:w-3/5 sm:w-2/3 md:w-1/2 bg-[#ffee00] overflow-hidden cursor-pointer"
                      onClick={() => setMobileMenuOpen(false)}
                      >
                      SHOP
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
    </div>
  )
}

export default NavBar