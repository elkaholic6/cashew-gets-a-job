'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useGSAP } from '@gsap/react';

const wrapImages = gsap.utils.wrap(['/artnft.png', '/clownnft.png', '/cybrog_v2nft.png', '/fairynft.png', '/heronft.png', '/indiana_jonesnft.png', '/wiznft.png']);

function NFTSection() {
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

  useGSAP(
    () => {
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
            { opacity: 1, yPercent: 0, duration: 2.5, ease: 'bounce.out' }
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, { opacity: 0, duration: 0.3, ease: 'bounce.out' });
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
    }, 5000);

    return () => clearInterval(interval);
  }, [layout.items]); 

  return (
    <div id="digital-collectibles" className="bg-gradient-to-b from-[#e7fdd2] from-20% via-[#43e2d8] via-75% to-cyan-400 to-100% w-full h-full" ref={el}>
      <div className="flex flex-col">
        <h1 className="relative flex w-full justify-center items-start font-mouse text-6xl md:text-8xl lg:text-[220px] text-gray-800 m-0 leading-none z-50">
            CASHEW&apos;S
        </h1>
        <h2 className="relative flex w-full justify-center items-start text-center font-mouse text-6xl md:text-8xl lg:text-[97px] text-blue-800 m-0 leading-none z-50">
            DIGITAL COLLECTIBLES
        </h2>
      </div>
            <div className="hidden lg:block relative lg:absolute flex-col justify-center items-start bg-[#ffe350] border-y-2 border-black lg:mt-16 font-baloo text-2xl xl:text-4xl text-black text-center w-full h-fit">
                <div className="w-full lg:w-3/5 px-8 lg:pl-10 xl:pl-30 xl:pr-0 pb-4 pt-2">
                    <p>
                        3,333 Cashews are here to remind us that the key to success is never giving up.<br />
                        <br />
                        Be a part of Cashew’s rise,<br />
                        <span className="text-2xl xl:text-4xl">OWN</span> her story
                    </p>
                    <button className="outline outline-2 hover:outline-green-600 bg-white hover:bg-[#fff5c1] hover:text-green-600 px-4 py-2 mt-4 text-xl xl:text-3xl rounded-full">Connect Wallet</button>
                </div>
            </div>
            <div className="box">
                <div className="flex justify-center">
                    <div className="absolute max-w-[500px] w-10/12 sm:w-1/2 md:w-2/5 lg:w-1/3 lg:right-16 xl:right-30 h-fit mt-2 lg:mt-5 border-2 border-black bg-[#eaffea] rounded-lg overflow-hidden z-40">
                        <div className="relative w-full h-full flex flex-wrap" ref={boxesRef}>
                        <Image className="object-cover z-0" src='/wiznft.png' alt="wiznft" width={500} height={500} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" />
                        {/* <div className="absolute w-full h-full mt-32 bg-black z-40 opacity-40"></div> */}
                            {layout.items.map((item) => (
                            <div
                                id={`box-${item.id}`}
                                key={item.id}
                                className="box absolute"
                            >
                                <Image className="object-cover" src={item.image} alt={`NFT ${item.id}`} width={500} height={500} sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"/>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Image className="object-cover z-0 invisible w-10/12 sm:w-1/2 md:w-2/5 lg:w-1/3 h-full" src='/wiznft.png' alt="wiznft" width={2048} height={2048}/>
            <div className="lg:hidden relative lg:absolute flex flex-col justify-center items-start bg-[#ffe350] border-y-2 border-black mt-6 font-baloo text-lg text-black text-center w-full h-fit">
                <div className="w-full px-8 py-4 leading-6">
                    <p>
                        3,333 Cashews are here to remind us that the key to success is never giving up.<br />
                        <br />
                        Be a part of Cashew’s rise,<br />
                        <span className="text-lg font-medium">OWN</span> her story
                    </p>
                    <button className="outline outline-2 hover:outline-green-600 bg-white hover:bg-[#fff5c1] hover:text-green-600 px-4 py-2 mt-4 text-lg rounded-full">Connect Wallet</button>
                </div>
            </div>
    </div>
  );
}

export default NFTSection;
