'use client';

import { useRef } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Team = () => {
    const container = useRef();
    let entered = false;
    
    useGSAP((context, contextSafe) => {
        gsap.registerPlugin(useGSAP);

        const handleMouseEnter = contextSafe(() => {
          entered = true;
        });
      
        const handleMouseLeave = contextSafe((event) => {
          entered = false;
          const hoveredElement = event.currentTarget;
            gsap.to(hoveredElement, {
                duration: 0.2,
                rotationX: 0,
                rotationY: 0,
                ease: 'none',
            });
        });

        const handleMouseMove = contextSafe((event) => {
            if (!entered) return;

            const hoveredElement = event.currentTarget;
            const { left, top, width, height } = hoveredElement.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const tiltX = ((mouseY - centerY) / height) * 40;
            const tiltY = ((mouseX - centerX) / width) * 40;

            gsap.to(hoveredElement, {
                duration: 0.2,
                rotationX: -tiltX,
                rotationY: tiltY,
                ease: 'none',
            });
        });
      
        const teamMembers = gsap.utils.toArray(container.current.getElementsByClassName('teammember'));    
    
        teamMembers.forEach((teammember) => {
            teammember.addEventListener('mouseenter', handleMouseEnter);
            teammember.addEventListener('mouseleave', handleMouseLeave);
            teammember.addEventListener("mousemove", handleMouseMove);
    
          return () => {
            teammember.current.removeEventListener('mouseenter', handleMouseEnter);
            teammember.current.removeEventListener('mouseleave', handleMouseLeave);
            teammember.current.removeEventListener("mousemove", handleMouseMove);
          };
        });
        }); 


    const team = [
        {
            name: "Dunks",
            role: "Founder, Content Creator, PR/Marketing",
            image: "/dunkspfp.webp",
            twitter: "https://x.com/DunksnJordns"
        },
        {
            name: "Buttered",
            role: "Community Manager",
            image: "/butteredpfp.webp",
            twitter: "https://x.com/ButteredHubter"
        },
        {
            name: "WoolCentaur",
            role: "Developer",
            image: "/woolpfp.webp",
            twitter: "https://x.com/WoolCentaur"
        }
    ]
  return (
    <section className="pb-10 pt-20 border-y-[16px] border-cyan-400 bg-[#ff8080]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-11/12 text-center">
              <h1 className="mb-3 text-5xl font-bold leading-[1.2] text-black sm:text-6xl md:text-8xl font-baloo">
                Cashew Council
              </h1>
            </div>
          </div>
        </div>
        <div ref={container}>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-14 lg:gap-x-20 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((team, i) => {
                return (
                        <div key={i} className="group relative">
                            <div 
                                className="teammember relative aspect-h-1 aspect-w-1 w-full bg-none shadow-lg preserve-3d" 
                                style={{ 
                                    perspective: '1000px',
                                    transformStyle: 'preserve-3d'
                                    }}>
                                    <img
                                        src={team.image}
                                        className="h-full w-full object-cover object-center z-10 border border-gray-600 rounded-md"
                                    />
                                <div 
                                    className="absolute -inset-5 xl:-inset-7 h-[116%] w-[116%] -z-10 bg-black bg-opacity-25 border border-gray-600 rounded-md shadow-[0_16px_20px_-8px_rgb(0,0,0,0.3)] overflow-hidden"
                                    style={{ transform: `translateZ(-20px)` }}
                                >
                                    <img
                                        src={team.image}
                                        className="h-full w-full object-cover object-center blur-xl opacity-70"
                                    />
                                </div>
                            </div>
                            <div className="mt-10 flex justify-between font-baloo">
                                <div className="flex flex-col">
                                    <h2 className="text-lg text-black">
                                        {team.name}
                                    </h2>
                                    <p className="text-md text-gray-800">{team.role}</p>
                                    <a 
                                        className="text-black text-xl inline cursor-pointer hover:text-green-800 w-fit" 
                                        href={team.twitter} 
                                        target='_blank' 
                                        rel='noopener noreferrer'>
                                        <FaSquareXTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                );
            })}
            </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Team;