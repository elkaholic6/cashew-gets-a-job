'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';

const wrapImages = gsap.utils.wrap(['/zookeeper.png', '/firefighter.png', '/prowrestler.png', '/rockstar.png']);

function BookPages() {
  const el = useRef();
  const boxesRef = useRef();
  const q = gsap.utils.selector(el);
  const countRef = useRef(0);

  const createItem = () => {
    const newId = ++countRef.current;
    return { id: newId, image: wrapImages(newId), status: 'entered' };
  };

  const [layout, setLayout] = useState(() => ({
    items: [createItem(), createItem(), createItem(), createItem()]
  }));

  const removeItems = useCallback(
    (exitingItems) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q('.box')),
        items: prev.items.filter((item) => !exitingItems.includes(item))
      }));
    },
    [q]
  );

  useGSAP((context) => {
      gsap.registerPlugin(Flip);

      if (!layout.state) return;

      const exiting = layout.items.filter((item) => item.status === 'exiting');
      const timeline = Flip.from(layout.state, {
        absolute: true,
        targets: q('.box'),
        scale: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            { opacity: 1, yPercent: -100, },
            { opacity: 1, yPercent: 0, duration: 4.5, ease: 'power1.out' }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, { opacity: 0, duration: 0.3, ease: 'power1.out' });
        },
        onComplete() {
          if (boxesRef.current) {
            let boxes = boxesRef.current;
            let lastChild = boxes.lastChild;
            boxes.appendChild(lastChild);
          }
        }
      });
      timeline.add(() => removeItems(exiting));
    },
    {
      dependencies: [layout, q, removeItems]
    }
  );

  const addItem = () => {
    const newItem = createItem();
    setLayout((prev) => ({
      state: Flip.getState(q('.box')),
      items: [...prev.items.slice(1), newItem]
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (layout.items.length > 0) {
        addItem(); 
      }
    }, 9000);

    return () => clearInterval(interval);
  }, [layout.items]);

  return (
    <div className="bg-gradient-to-br from-[#ffff00e9] from-0% via-[#8aff88c4] to-[#c57819] to-100% w-full h-full" ref={el}>
        {/* <h1 className="absolute flex w-full justify-center items-start font-mouse text-[240px] text-gray-800 m-0 leading-none z-50">
            CASHEWS
        </h1> */}
        <div className="box">
            <div className="flex justify-center">
              <div className="absolute w-[95%] md:w-3/4 h-fit my-4 sm:mt-4 xl:mt-6 2xl:mt-8 bg-cyan-300 z-30 border-none sm:border-[8px] md:border-[16px] border-cyan-300 rounded-xl overflow-hidden shadow-[0_0px_25px_-3px_rgba(0,0,0,0.4)]">
                  <div className="relative w-full h-fit flex flex-wrap max-md:h-smbook-pages-screen md:h-mdbook-pages-screen" ref={boxesRef}>
                    {/* 3840 x 2400 is intrinsic ratio */}
                  <Image className="object-cover z-0 invisible" src='/rockstar.png' alt="Rockstar" fill sizes="(max-width: 768px) 95vw, 75vw" quality={0}/> 
                  <div className="absolute flex w-full h-full leading-none z-[90] border-2 border-gray-700 rounded-xl overflow-hidden">
                          {layout.items.map((item) => (
                          <div
                              id={`box-${item.id}`}
                              key={item.id}
                              className="box absolute w-full h-full"
                          >
                              <Image className="object-cover rounded-xl overflow-hidden w-full h-full" src={item.image} alt={`NFT ${item.id}`} fill sizes="(max-width: 768px) 95vw, 75vw" quality={100}/>
                          </div>
                          ))}
                  </div>
                  </div>

              </div>
            </div>
        </div>
        <Image className="relative object-cover z-0 w-[95%] py-4 xl:py-6 2xl:py-8 md:w-3/4 invisible" src='/zookeeper.png' alt="Zookeeper" width={1260} height={788} sizes="(max-width: 768px) 95vw, 75vw" quality={0}/>
    </div>
  );
}

export default BookPages;
