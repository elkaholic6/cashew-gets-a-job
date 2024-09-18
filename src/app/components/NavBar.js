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
  { name: 'NFTs', href: '#' },
  { name: 'Team', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Shop', href: '/shop' },
  { name: 'News', href: '#' },
  { name: 'Media', href: '#' },
  { name: 'Games', href: '#' },
  { name: 'FAQ', href: '#' },
]

function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useGSAP((context, contextSafe) => {
      gsap.registerPlugin(ScrollTrigger);

        const showAnim = gsap.from('.navbar', {
          yPercent: -100,
          paused: true,
          duration: 0.5
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
        {/* <div className="flex lg:flex-1"> */}
          {/* <a href="/" className="flex -mt-6">
            <span className="sr-only">Cashew Gets A Job</span>
            <img
              alt=""
              src="/CashewLogo.png"
              className=" absolute h-20 w-auto"
              style={{ overflow: 'visible'}}
            />
          </a> */}
        {/* </div> */}
        <div className="flex items-center justify-center">
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className={`hidden lg:flex justify-center w-auto`}>
            <div className="flex justify-center z-[150] w-auto rounded-full bg-white shadow-[0_15px_30px_0px_rgba(0,0,0,0.3)] px-4">
              <div className="flex lg:gap-x-10 mx-6 my-2">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-baloo text-xl xl:text-2xl font-bold leading-6 text-black">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end"> */}
        {/* <a
              href="#"
              className="rounded-full bg-red-500 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Connect Wallet
            </a> */}
        {/* </div> */}
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Cashew Gets A Job</span>
              <img
                  alt=""
                  src="/CashewLogo.png"
                  className="h-20 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Connect Wallet
                </a>
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