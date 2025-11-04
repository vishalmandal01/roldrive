"use client";
import React, { useState } from "react";
import { RoundStar } from "../../../public/svg/round-star";
import { GoogleIcon } from "../../../public/svg/google-icon";
import { ArrowIcon } from "../../../public/svg/arrow-icon";

export default function GoogleRating() {
  const ratingRandom = [
    { name: "Google Rating", rating: 4.5 },
    { name: "Linkedin Rating", rating: 4.0 },
    { name: "Facebook Rating", rating: 4.2 },
    { name: "Linkedin Rating", rating: 4.8 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ratingRandom.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ratingRandom.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[400px] mt-16">
      {/* Prev Button */}
      <button
        className="bg-yellow-300 p-2 rounded-full absolute left-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        onClick={goToPrevious}
      >
        <ArrowIcon />
      </button>

      {/* Next Button */}
      <button
        className="bg-yellow-300 p-2 rounded-full absolute right-[-15px] top-1/2 -translate-y-1/2 z-10 cursor-pointer"
        onClick={goToNext}
      >
        <ArrowIcon className="rotate-180" />
      </button>

      {/* Carousel Window */}
      <div className="overflow-hidden rounded-lg relative backdrop-blur-sm bg-white/5 border-t-2 border-white">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 400}px)`, // 👈 slide by exact width
          }}
        >
          {ratingRandom.map((rating, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] flex items-center gap-3  py-4"
            >
              <div className="p-2 bg-white rounded-full w-min ml-8">
                <GoogleIcon className="h-[32px] w-[32px]" />
              </div>
              <div>
                <div className="text-base font-medium">{rating.name}</div>
                <div className="flex items-center gap-2">
                  <div>{rating.rating}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <RoundStar
                        key={i}
                        className={`w-6 h-6 ${
                          i < Math.round(rating.rating)
                            ? "text-[#FDC65C]"
                            : "text-gray-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
