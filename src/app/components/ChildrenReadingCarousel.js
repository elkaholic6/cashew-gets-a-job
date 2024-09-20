'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ChildrenReadingCarousel = () => {
  const [photoWidth, setPhotoWidth] = useState(null);
  const [mounted, setMounted] = useState(false);

  const updatePhotoWidth = () => {
    const photoElement = document.querySelector('.photo');
    if(photoElement) {
      setPhotoWidth(photoElement.offsetWidth);
    }
  }

  useEffect(() => {
    setMounted(true);
    updatePhotoWidth();
    window.addEventListener('resize', updatePhotoWidth);
    console.log("resizing...", photoWidth);

    return () => {
      window.removeEventListener('resize', updatePhotoWidth);
    }
  }, [photoWidth]);

  useGSAP(() => {
    gsap.registerPlugin(useGSAP);

    if(photoWidth && mounted) {
      gsap.set(".photo", {
        x: (i) => i * photoWidth,
      });
  
      console.log('photoWidth', photoWidth);
  
      gsap.to(".photo", {
        duration: 60,
        ease: 'none',
        x: `+=${photoWidth * 12}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(-x) % (photoWidth * 12)),
        },
        repeat: -1,
      });
    }
  }, [photoWidth, mounted]);

  const images = ['/KidReadingCashew1.jpg', '/KidReadingCashew2.jpg', '/KidReadingCashew4.jpg', '/KidReadingCashew5.jpg', '/KidReadingCashew6.jpg', '/KidReadingCashew7.jpg', '/KidReadingCashew8.jpg', '/KidReadingCashew9.jpg', '/KidReadingCashew10.jpg', '/KidReadingCashew11.jpg', '/KidReadingCashew12.jpg', '/KidReadingCashew13.jpg', '/KidReadingCashew14.jpg'];

        return (
          <div className="bg-black w-screen">
            <div className="pt-12 bg-cyan-400">
                <div className="w-screen h-[185px] xl:h-[275px] 2xl:h-[350px] relative bg-gray-900 overflow-hidden border-y-8 border-[#a171e8]">
                    <div className="relative left-full">
                    {images.map((image, i) => (
                        <div
                        key={i}
                        className="photo absolute w-[165px] xl:w-[250px] 2xl:w-[300px] h-[185px] xl:h-[275px] 2xl:h-[350px] text-2xl text-center text-black border border-gray-600 object-cover box-border"
                        >
                            <img src={image} className="w-full h-full object-cover object-center" />
                        </div>
                    ))}
                    </div>
                </div>
            </div>
          </div>
        );
};

export default ChildrenReadingCarousel;
