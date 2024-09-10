'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StarIcon } from '@heroicons/react/24/solid';

const Reviews = () => {
  const reviewCarousel = useRef([]);

  useGSAP(() => {
    gsap.set(".review", {
      x: (i) => i * 386,
    });

    gsap.to(".review", {
      duration: 75,
      ease: 'none',
      x: '+=2316',
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 2316),
      },
      repeat: -1,
    });
  }, [reviewCarousel]);

  const reviews = [
            {
                name: 'Kaitlyn',
                highlight: "Loves this book",
                review: "My son loves this book. It’s so fun and provides a positive message to children to keep trying. The illustrations are a nice touch as well. Alex really has a gift and hope he follows it up with a sequel or even a series."
            },
            // {
            //     name: 'Jordan F.',
            //     highlight: "Fun read",
            //     review: 'Such a fun read - loved seeing all of the jobs that Cashew got and how silly she was! My 2 1/2 year old now wants his dog to get a job!'
            // }, 
            {
                name: 'Caroline',
                highlight: "Truly a great story",
                review: 'This is truly a great story and I love the illustrations. I really recommend this book that gives good vibes.'
            }, 
            {
                name: 'T S',
                highlight: "Can't wait!",
                review: "This book is seriously a timeless tale of a cute dog and her adventures in the business world. I can't wait till next one comes out! If I had kids they would 100% be following cashews exploits and adventures!"
            },
            {
                name: 'ClevelandOwnz',
                highlight: "A must buy",
                review: 'This was a great box for the kiddos. Amazing illustrations and fun to read with them. They want me to read it every night to them. A must buy for your little one.'
            },
            {
                name: 'V',
                highlight: "Really enjoyed it",
                review: "I read this to my niece who's 6 and she really enjoyed it. The pictures made us both laugh a lot and it sends a good message for a young girl/boy."
            },
            // {
            //     name: "Alex The Greek",
            //     highlight: "Beautiful illustrations",
            //     review: "This is a great book for children with an important message: “To not give up!” Beautiful illustrations with a positive theme."
            // },
            // {
            //     name: "RobotClaws",
            //     highlight: "Story is Fire",
            //     review: "The art is amazing, the story is Fire and it really inspires kids to not give up on finding what works for them! I am really hoping there are more books by this author and he continues to live his dream!"
            // },
            {
                name: "Mark",
                highlight: "So inspiring",
                review: "This was a wonderful book for children. So inspiring to never give up and find your passion by being fearless. Cashew's spirit comes through on each page with delightful illustrations and text. A must read for every child!!!!"
            },
            // {
            //     name: "Robyne",
            //     highlight: "Helps struggling children",
            //     review: "Cashew helps children who may be struggling. When things are not coming easily for little ones in school Cashew helps too encourage them. One day things will be just right. Love the story and hope."
            // }
        ]

        return (
            <div className="bg-[#eaffea] py-6">
              <div className="wrapper">
                <div className="boxes">
                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            {/* Example Star Icons */}
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[0].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[0].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[0].review}</p>
                        </div>
                      </div>
                    </div>
                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[1].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[1].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[1].review}</p>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[2].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[2].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[2].review}</p>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[3].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[3].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[3].review}</p>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[4].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[4].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[4].review}</p>
                        </div>
                      </div>
                    </div>

                    <div className="review">
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-96 justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                            <StarIcon className="w-6 h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-xl">
                            <h2>{reviews[5].name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-3xl py-4">"{reviews[5].highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg px-4 h-full w-fit">
                          <p>{reviews[5].review}</p>
                        </div>
                      </div>
                    </div>


                </div>
              </div>
          
              {/* Styles */}
              <style jsx>{`
                .wrapper {
                width: 100vw;
                height: 386px;
                position: relative;
                margin: auto;
                background: #f2f2f2;
                overflow: hidden;
                }

                .review {
                width: 386px;
                height: 386px;
                position: absolute;
                font-size: 25px;
                text-align: center;
                color: black;
                border: solid 1px black;
                overflow: auto;
                box-sizing: border-box;
                }

                .boxes {
                position: relative;
                left: -386px;
                }
            `}</style>
            </div>
          );
};

export default Reviews;
