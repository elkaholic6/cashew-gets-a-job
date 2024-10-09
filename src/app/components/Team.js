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
            role: `Dreamer`,
            image: "/dunkspfp.webp",
            twitter: "https://x.com/DunksnJordns"
        },
        {
            name: "Buttered",
            role: "Vibe Curator",
            image: "/butteredpfp.png",
            twitter: "https://x.com/ButteredHubter"
        },
        {
            name: "WoolCentaur",
            role: "Innovator",
            image: "/woolpfp.png",
            twitter: "https://x.com/WoolCentaur"
        }
    ]
  return (
    <div id="team" className="flex w-full justify-center pb-10 pt-20 border-y-[16px] border-cyan-300 bg-gradient-to-b from-[#dc7373] from-0% via-[#ff8080] via-10% to-[#dc7373] to-100%">
      <div className="container flex flex-col items-center w-full">
        <div className="w-full flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-11/12 text-center">
              <h1 className="mb-3 text-6xl font-medium leading-[1.2] text-[#462929] sm:text-6xl md:text-8xl font-mouse">
                Cashew Cabinet
              </h1>
            </div>
          </div>
        </div>
        <div ref={container} className="w-full">
            <div className="lg:px-8">
                <div className="mt-6 h-full flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-x-14 lg:gap-x-32 gap-y-10">
                {team.map((team, i) => {
                    return (
                            <div key={i} className="group relative flex flex-col min-w-[270px] w-10/12 xs:w-9/12 sm:w-1/2 md:w-2/5 lg:w-1/4">
                                <div 
                                    className="teammember relative aspect-h-1 aspect-w-1 w-full bg-none shadow-lg preserve-3d" 
                                    style={{ 
                                        perspective: '1000px',
                                        transformStyle: 'preserve-3d'
                                        }}>
                                        <img
                                            src={team.image}
                                            className="h-full w-full object-cover object-center z-10 border border-gray-600 rounded-md"
                                            alt={team.name}
                                        />
                                    <div 
                                        className="absolute -inset-[22px] xs:-inset-7 sm:-inset-6 md:-inset-6 lg:-inset-[22px] xl:-inset-6 2xl:-inset-7 h-[116%] w-[116%] -z-10 bg-black bg-opacity-25 border border-gray-600 rounded-md shadow-[0_16px_20px_-8px_rgb(0,0,0,0.3)] overflow-hidden"
                                        style={{ transform: `translateZ(-20px)` }}
                                    >
                                        <img
                                            src={team.image}
                                            className="h-full w-full object-cover object-center blur-xl opacity-70"
                                            alt={team.name}
                                        />
                                    </div>
                                </div>
                                <div className="relative mt-10 font-baloo h-full">
                                    <div className="flex flex-col h-full justify-between items-center">
                                        <div className="flex flex-col items-center">
                                            <h2 className="text-lg text-black">
                                                {team.name}
                                            </h2>
                                            <p className="text-md text-gray-800 text-center">{team.role}</p>
                                        </div>
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
    </div>
  );
};

export default Team;