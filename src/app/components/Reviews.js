'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { StarIcon } from '@heroicons/react/24/solid';

const Reviews = () => {
  const reviewCarousel = useRef([]);
  const [reviewWidth, setReviewWidth] = useState(null);
  const [mounted, setMounted] = useState(false);

  const updateReviewWidth = () => {
    const reviewElement = document.querySelector('.review');
    if(reviewElement) {
      setReviewWidth(reviewElement.offsetWidth);
    }
  }

  useEffect(() => {
    setMounted(true);
    updateReviewWidth();
    window.addEventListener('resize', updateReviewWidth);
    console.log("resizing...", reviewWidth);

    return () => {
      window.removeEventListener('resize', updateReviewWidth);
    }
  }, [reviewWidth]);

  useGSAP(() => {
    gsap.registerPlugin(useGSAP);

    if(reviewWidth && mounted) {
      gsap.set(".review", {
        x: (i) => i * reviewWidth,
      });
  
      console.log('reviewWidth', reviewWidth);
  
      gsap.to(".review", {
        duration: 125,
        ease: 'none',
        x: `+=${reviewWidth * 6}`,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (reviewWidth * 6)),
        },
        repeat: -1,
      });
    }
  }, [reviewWidth, mounted]);

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
          <div className="bg-[#eaffea] w-screen">
            <div className="w-screen h-[386px] relative m-auto bg-[#f2f2f2] overflow-hidden">
                <div className="relative left-[-386px] 2xl:left-[-700px]">
                  {reviews.map((review, i) => (
                    <div
                      key={i}
                      className="review absolute w-[386px] 2xl:w-[700px] h-[386px] text-2xl text-center text-black border border-black object-cover box-border"
                    >
                      <div className="flex flex-col font-baloo py-4 h-full">
                        <div className="flex flex-row w-full justify-between px-4 py-4">
                          <div className="flex gap-1">
                            <StarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                            <StarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                            <StarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                            <StarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                            <StarIcon className="w-5 h-5 lg:w-6 lg:h-6 text-yellow-400" />
                          </div>
                          <div className="text-slate-700 text-lg 2xl:text-2xl">
                            <h2>{review.name}</h2>
                          </div>
                        </div>
                        <div>
                          <h3 className="flex justify-center text-black text-2xl 2xl:text-5xl py-4">"{review.highlight}"</h3>
                        </div>
                        <div className="flex items-center text-black text-lg 2xl:text-3xl px-4 h-full w-fit">
                          <p>"{review.review}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        );
};

export default Reviews;
