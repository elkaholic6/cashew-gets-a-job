'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { useRouter, usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaAngleDown } from "react-icons/fa";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';

import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '#home', dropdown: false },
  { name: 'Books', href: '#books', dropdown: false },
  { name: 'Team', href: '#team', dropdown: false },
  { name: 'NFTs', href: '#digital-collectibles', dropdown: false },
  { name: 'News', href: '', dropdown: true },
  { name: "Media", href: '/media', dropdown: false },
  // { name: "Updates", href: '/updates', dropdown: false },
  { name: 'Games', href: '/games', dropdown: false },
  { name: 'Shop', href: 'https://www.cashewgetsajob.com/collections/all', dropdown: false },
]

const newsNavigation = [
  { name: 'Spaces', href: '/spaces', dropdown: false },
  { name: 'Updates', href: '/updates', dropdown: false },
]

gsap.registerPlugin(ScrollToPlugin);

function NavBar() {
    const mobileMenuRef = useRef();
    const backdropRef = useRef();
    const slideOutRef = useRef();
    const router = useRouter();
    const pathname = usePathname();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [menuListener, setMenuListener] = useState(false);
    const [slideoutListener, setSlideoutListener] = useState(false);

    const { contextSafe } = useGSAP();

    const handleNavClickAnchor = (target) => {
        window.open(target, '_blank');
    }

    const handleNavigationAndAnimation = (event, href) => {
        event.preventDefault();
        if(pathname !== '/') {
          router.push("/" + href)
        } else {
          handleNavClickLink(event, href)
        }
    }

    const handleNavClickLink = contextSafe((event, href) => {
      event.preventDefault();
      if(window.innerWidth < 1024) {
        gsap.to(window, {
          duration: 1,
          ease: "power2.inOut",
          delay: 0.75,
          scrollTo: {
            y: href
          },
          onComplete: () => {
            router.push(href)
          }
        });
        } else {
          gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            scrollTo: {
              y: href
            },
            onComplete: () => {
              router.push(href)
            }
          });
        }
    })

    useGSAP((context, contextSafe) => {
      if (menuListener) {
        gsap.timeline()
          .to(mobileMenuRef.current, { duration: 1, yPercent: 100, ease: 'power3.out' })
          .to(backdropRef.current, { 
            duration: 0.5, 
            opacity: 0.5, 
            ease: 'linear'
          }, "<");
      } else {
        gsap.timeline()
          .to(mobileMenuRef.current, { duration: 1, yPercent: 0, ease: 'power3.in' })
          .to(backdropRef.current, { 
            duration: 0.5, 
            opacity: 0, 
            ease: 'power4.in',
            onComplete: () => {
              setMobileMenuOpen(false);
            }
          }, "<");
      }
    }, [menuListener]);

    useGSAP((context, contextSafe) => {
      if (slideoutListener) {
        gsap.to(slideOutRef.current, { duration: 0.7, xPercent: 100, ease: 'power3.out' })
      } else {
        gsap.to(slideOutRef.current, { duration: 0.7, xPercent: 0, ease: 'power3.in' })
      }
    }, [slideoutListener]);

    useGSAP((context, contextSafe) => {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.normalizeScroll(true)

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
    <header className={`fixed inset-x-0 top-0 z-[100]`}>
      <nav aria-label="Global" className="mx-0 p-0 lg:mx-auto lg:p-2">
        <div className="navbar flex flex-row items-center justify-around">
          {/* Mobile menu button */}
          <div className="flex lg:hidden ml-auto">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(true);
                setMenuListener(true);
              }}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                  <Image src='/cashewlogo.png' aria-hidden="true" className="h-10 w-10 sm:h-16 sm:w-16 md:h-20 md:w-20 mt-6 mr-6 rounded-full border border-black" alt="logo" width={80} height={80}/>
                ) : (
                  <Image src='/cashewlogo.png' aria-hidden="true" className="hidden" alt="logo" width={80} height={80}/>
                )
              }
            </button>
          </div>
          {/* Invisible placeholder */}
          <div className="hidden lg:invisible lg:flex py-6 font-mouse">
            <a
              className="-mx-3 rounded-lg text-4xl flex justify-center font-semibold leading-7 text-gray-900"
            >
              <button 
                className="border-2 border-black rounded-full px-6 py-2 bg-[#ffee00] overflow-hidden cursor-pointer"
                >
                SHOP
              </button>
            </a>
          </div>
          {/* Desktop menu */}
          <div className={`navbar hidden lg:flex justify-center w-auto`}>
            <div className="flex justify-center z-[150] w-auto rounded-full border-2 border-purple-400 bg-purple-50 shadow-[0_10px_20px_0px_rgba(0,0,0,0.2)] px-4">
              <div className="flex lg:gap-x-10 mx-6 my-2">
                <Menu as="div" className="flex relative text-left gap-12 text-3xl xl:text-4xl py-2 font-mouse font-medium tracking-wider text-gray-800">
                {navigation.map((item, i) => (
                  <div key={i}>
                    {item.dropdown ? (
                      <div>
                        <MenuButton 
                          aria-haspopup="true"
                          aria-expanded="true"
                          type="button"
                          className="flex items-center justify-center leading-6 cursor-pointer">
                          {item.name}
                          <FaAngleDown className="-mr-1 pl-1 h-5 w-5 text-gray-800" />
                        </MenuButton>
                        <MenuItems
                          transition
                          className="absolute font-mouse text-2xl xl:text-3xl z-10 mt-3 w-40 origin-top-right border border-gray-600 rounded-md bg-[#fcffff] shadow-lg transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="py-1">
                            <MenuItem>
                              <Link
                                
                                href="/spaces"
                                className="block px-6 py-4 text-gray-800 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 tracking-wide"
                              >
                                Spaces
                              </Link>
                            </MenuItem>
                            <MenuItem>
                              <Link
                                
                                href="/updates"
                                className="block px-6 pb-4 text-gray-800 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 tracking-wide"
                              >
                                Updates
                              </Link>
                            </MenuItem>
                          </div>
                        </MenuItems>
                      </div>
                    ) : item.href.startsWith('http') ? (
                      <a 
                        onClick={() => handleNavClickAnchor(item.href)}
                        type="button"
                        className="flex items-center justify-center leading-6 cursor-pointer">
                        {item.name}
                      </a>
                    ) : item.href.startsWith('#') ? (
                      <Link
                        
                        href={item.href}
                        onClick={(event) => handleNavigationAndAnimation(event, item.href)}
                        className="flex items-center justify-center leading-6 cursor-pointer">
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                      
                      href={item.href}
                      className="flex items-center justify-center leading-6 cursor-pointer">
                      {item.name}
                    </Link>
                    )}
                  </div>
                ))}
                </Menu>
              </div>
            </div>
          </div>
          <div className="hidden lg:invisible lg:flex py-6 font-mouse">
            <a
              href="https://www.cashewgetsajob.com/collections/all"
              target='_blank' 
              rel='noopener noreferrer'
              className="-mx-3 text-4xl xl:text-5xl flex justify-center font-semibold leading-7 text-gray-900 border-2 border-black rounded-full px-6 py-2 bg-[#ffee00] overflow-hidden cursor-pointer"
              type="button"
            >
                SHOP
            </a>
          </div>
        </div>
      {/* Mobile menu dropdown*/}
        <div className="lg:hidden">
          <div ref={backdropRef} className={`backdropNav w-screen fixed inset-y-0 right-0 h-screen bg-black opacity-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}/>
            <div ref={mobileMenuRef} className="fixed inset-y-0 right-0 z-50 w-full h-fit overflow-y-auto" style={{ transform: 'translateY(-100%)' }}>
              <div className="bg-[#836EE7] rounded-b-xl border-b-[6px] border-cyan-200 h-fit py-6 px-6">
                <div className="flex items-start justify-between">
                  <div className="w-full h-fit">
                    <a href="#home" className="flex justify-center -mx-1.5 px-1.5">
                      <span className="sr-only">Cashew Gets A Job</span>
                      <Image
                          alt="cashew logo"
                          src="/CashewLogo.png"
                          className="h-20 w-auto rounded-full border border-black"
                          width={80}
                          height={80}
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuListener(false);
                    }}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="absolute h-6 w-6 right-8 top-8" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="flex w-full justify-center">
                    <div className="flex flex-col w-4/5 sm:w-1/2 justify-center ml-3 sm:ml-6 md:ml-14">
                      <div className="grid grid-cols-2 py-6 font-mouse w-full">
                        {navigation.map((item, i) => (
                          item.name !== "Cashew's Corner" && (
                            <div key={i} className="py-6">
                              {item.dropdown ? (
                                <div
                                  onClick={() => {
                                    setSlideoutListener(true)
                                  }}
                                  type="button"
                                  className="flex justify-start rounded-lg px-3 text-5xl text-[#edfaff] font-semibold leading-7 cursor-pointer">
                                  {item.name}
                                  <FaArrowRightLong className="pl-2 pt-1 h-8 w-8 text-gray-300" />
                                </div>
                              ) : item.href.startsWith('http') ? (
                                  <a
                                    key={item.name}
                                    type="button"
                                    className="flex justify-start rounded-lg px-3 text-5xl text-[#edfaff] font-semibold leading-7 cursor-pointer"
                                    onClick={() => {
                                      setMenuListener(false);
                                      handleNavClickAnchor(item.href);
                                    }}
                                  >
                                    {item.name}
                                </a>
                              ) : item.href.startsWith('#') ? (
                                <Link
                                  
                                  href={item.href}
                                  onClick={(event) => {
                                    setMenuListener(false);
                                    handleNavigationAndAnimation(event, item.href)
                                  }}
                                  className="flex justify-start rounded-lg px-3 text-5xl text-[#edfaff] font-semibold leading-7 cursor-pointer">
                                  {item.name}
                                </Link>
                              ) : (
                                <Link
                                  
                                  href={item.href}
                                  onClick={() => {
                                    setMenuListener(false);
                                  }}
                                  className="flex justify-start rounded-lg px-3 text-5xl text-[#edfaff] font-semibold leading-7 cursor-pointer">
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="py-6 font-mouse flex justify-center">
                    <a
                      href="https://www.cashewgetsajob.com/collections/all"
                      target='_blank' 
                      rel='noopener noreferrer'
                      type="button"
                      onClick={() => setMenuListener(false)}
                      className="-mx-3 text-4xl flex justify-center font-semibold leading-7 text-gray-900 border-2 border-black rounded-full px-6 py-2 min-w-64 xs:w-3/5 sm:w-2/3 md:w-1/2 bg-[#ffee00] overflow-hidden cursor-pointer"
                    >
                        SHOP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu slide-out*/}
        <div className="lg:hidden">
          {/* <div ref={backdropRef} className={`backdropNav w-screen fixed inset-y-0 right-0 h-screen bg-black opacity-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}/> */}
            <div ref={slideOutRef} className="fixed inset-y-0 right-0 z-[60] w-full h-screen overflow-y-auto" style={{ transform: 'translateX(-100%)' }}>
              <div className="bg-[#836EE7] rounded-b-xl border-b-[6px] border-r-2 border-cyan-200 h-fit py-6 px-6">
                <div className="flex items-start justify-between">
                  <div className="w-full h-fit">
                    <a href="#home" className="flex justify-center -mx-1.5 px-1.5">
                      <span className="sr-only">Cashew Gets A Job</span>
                      <Image
                          alt="cashew logo"
                          src="/CashewLogo.png"
                          className="h-20 w-auto rounded-full border border-black"
                          width={80}
                          height={80}
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSlideoutListener(false);
                      setMenuListener(false);
                    }}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="absolute h-6 w-6 right-8 top-8" />
                  </button>
                </div>
                <div className="flex justify-center w-full py-6">
                    <div 
                      onClick={() => {
                        setSlideoutListener(false);
                      }}
                      className="flex flex-row items-center"
                    >
                      <FaArrowLeftLong className="h-8 w-8 text-gray-300" />
                      <h2 className="text-4xl text-[#edfaff] font-mouse px-2 leading-7 cursor-pointer">News</h2>
                    </div>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="flex w-full justify-center">
                    <div className="flex flex-col w-4/5 sm:w-1/2 justify-center ml-3 sm:ml-6 md:ml-14">
                      <div className="grid grid-cols-2 grid-rows-3 font-mouse w-full pb-12">
                        {newsNavigation.map((item, i) => (
                            <div key={i} className="py-6">
                                <Link
                                  
                                  href={item.href}
                                  onClick={() => {
                                    setSlideoutListener(false);
                                    setMenuListener(false);
                                  }}
                                  className="flex justify-start rounded-lg px-3 text-5xl text-[#edfaff] font-semibold leading-7 cursor-pointer">
                                  {item.name}
                                </Link>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="py-6 font-mouse flex justify-center">
                    <a
                      href="https://www.cashewgetsajob.com/collections/all"
                      target='_blank' 
                      rel='noopener noreferrer'
                      type="button"
                      onClick={() => setMenuListener(false)}
                      className="-mx-3 text-4xl flex justify-center font-semibold leading-7 text-gray-900 border-2 border-black rounded-full px-6 py-2 min-w-64 xs:w-3/5 sm:w-2/3 md:w-1/2 bg-[#ffee00] overflow-hidden cursor-pointer"
                    >
                        SHOP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default NavBar