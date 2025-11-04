"use client";
import React, { useRef, useState } from "react";
import { ArrowIcon } from "../../../public/svg/arrow-icon";
import Image from "next/image";
import { RoundStar } from "../../../public/svg/round-star";

export default function ClientsReviews() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 2;
  const cardHeight = 230;
  const cards = [...Array(5)];

  const moveCarousel = (dir: number) => {
    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > cards.length - visibleCards)
      newIndex = cards.length - visibleCards;
    setCurrentIndex(newIndex);
    if (trackRef.current) {
      trackRef.current.scrollTo({
        top: newIndex * cardHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="md:py-16 py-8   bg-white ">
      <div className="flex items-center md:flex-row flex-col lg:max-w-[1360px] mx-auto justify-between  gap-4 ">
        <div className="  w-full p-4 ">
          <div className="font-bold text-[48px] leading-[1.0] text-[#4C4C4C]">
            What Our
            <span className="text-[#FDC65C]"> Clients Say</span>
          </div>
          <p className="text-base font-medium mt-3 text-[#4C4C4C] w-[80%]">
            Every journey is one-of-a-kind. Be it a corporate roadshow, a VIP
            gathering, or a private tour, we design a customized chauffeur
            experience just for you.
          </p>
          <button className="bg-[#FF5302] w-[152px] rounded py-2 text-white mt-6">
            Discover More
          </button>
        </div>
        <div className={`h-[486px]  w-full relative space-y-3 `}>
          <div
            ref={trackRef}
            className="overflow-y-hidden no-scrollbar scroll-smooth space-y-4 p-2 "
            style={{
              height: "100%",
              scrollSnapType: "y mandatory",
            }}
          >
            {cards.map((_, index) => (
              <div
                key={index}
                className="md:w-[600px] w-full flex items-start md:ml-auto gap-4 text-[#4C4C4C] bg-[#F3F4F9]   p-3"
                style={{
                  height: `${cardHeight}px`,
                  boxShadow: "0px 0px 4px 0px #00000059",
                  scrollSnapAlign: "start",
                }}
              >
                <div className="h-[60px] w-[60px]  ">
                  <Image
                    src="/images/Clients.jpg"
                    alt="review"
                    className="h-[60px] w-[60px] rounded-full "
                    width={600}
                    height={486}
                  />
                </div>
                <div className="w-[calc(100%-60px)] space-y-4">
                  <div className="font-bold text-xl  ">Mehwish</div>
                  <div className="font-medium text-base ">Content Writer</div>
                  <div className="text-base font-medium">
                    &quot;I recently hired a chauffeur service for a special
                    event, and I couldn&apos;t be happier! The driver was
                    punctual, professional, and made the ride incredibly
                    comfortable. Highly recommend!&quot;{" "}
                  </div>
                  <div className="flex gap-2 items-center">
                    {[...Array(5)].map((_, index) => (
                      <RoundStar
                        key={index}
                        className={`w-6 h-6 text-[#FDC65C]`}
                      />
                    ))}{" "}
                    <div>5.0</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* top button  */}
          {currentIndex > 0 && (
            <button
              onClick={() => moveCarousel(-1)}
              className={`bg-[#FDC65C] absolute right-0 -top-5 p-3 rounded-full shadow-md -rotate-90`}
            >
              <ArrowIcon className="rotate-180 text-white" />
            </button>
          )}

          {/* Bottom Button */}
          {currentIndex < cards.length - visibleCards && (
            <button
              onClick={() => moveCarousel(1)}
              className="bg-[#FDC65C] absolute right-0 -bottom-5 p-3 rounded-full shadow-md "
            >
              <ArrowIcon className="-rotate-90 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
