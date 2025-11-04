"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowIcon } from "../../../public/svg/arrow-icon";

export default function OurLuxuryCarousel() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carFee = [
    {
      name: "Wifi Available",
      icon: "/svg/Group.svg",
    },
    {
      name: "GPS Tracking",
      icon: "/svg/gps.svg",
    },
    {
      name: "Water Available",
      icon: "/svg/Group (1).svg",
    },
    {
      name: "Child seat Available",
      icon: "/svg/Group (2).svg",
    },
    {
      name: "Max 3",
      icon: "/svg/Group (3).svg",
    },
    {
      name: "Max 2",
      icon: "/svg/bag.svg",
    },
  ];

  const cards = [
    {
      title: "Mercedes S-Class",
      desc: "Luxury sedan with first-class comfort.",
      price: "122",
      hours_pay: "220",
      round_trip: "255",
      fee: carFee,
      img: "/images/Car.png",
    },
    {
      title: "Range Rover Vogue",
      desc: "Powerful SUV with premium interiors.",
      price: "150",
      hours_pay: "250",
      round_trip: "255",
      fee: carFee,
      img: "/images/Car.png",
    },
    {
      title: "BMW 7 Series",
      desc: "Executive performance and luxury in one.",
      price: "130",
      hours_pay: "220",
      round_trip: "255",
      fee: carFee,
      img: "/images/Car.png",
    },
    {
      title: "Rolls Royce Ghost",
      desc: "The ultimate chauffeur experience.",
      price: "500",
      hours_pay: "220",
      round_trip: "255",
      fee: carFee,
      img: "/images/Car.png",
    },
    {
      title: "Bentley Flying Spur",
      desc: "Elegant design, supreme craftsmanship.",
      price: "£450",
      hours_pay: "220",
      round_trip: "200",
      fee: carFee,
      img: "/images/Car.png",
    },
  ];

  const visibleCards = 3;
  const cardWidth = 410; // includes margin spacing

  const moveCarousel = (dir: number) => {
    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > cards.length - visibleCards)
      newIndex = cards.length - visibleCards;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="py-8  text-white "
      style={{
        background:
          " linear-gradient(180deg, #081017 0%, #20313F 55%, #081017 100%)",
      }}
    >
      <div className="lg:max-w-[1360px] mx-auto relative ">
        <div className="mb-10">
          {" "}
          <div className="font-bold text-[36px] text-center ">
            <span className="text-[#FDC65C] ">Our Luxury </span>Chauffeur Driven
            Fleet
          </div>
          <p className=" text-base font-medium text-center max-w-[1020px] mx-auto">
            Choose from our selection of premium chauffeur-driven vehicles,
            ideal for airport transfers, corporate travel, events and VIP
            movements across London.
          </p>
        </div>

        {/* Left Button */}
        <button
          onClick={() => moveCarousel(-1)}
          disabled={currentIndex === 0}
          className={`absolute lg:-left-5 left-0 top-1/2 -translate-y-1/2 bg-[#FDC65C] text-black p-3 rounded-full shadow-lg transition h-12 w-12 z-[5] flex items-center justify-center 
            ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#e6b850]"
            }`}
        >
          <ArrowIcon className="text-white" />
        </button>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-none w-[410px] mx-2 bg-[#0a1116]  shadow-md overflow-hidden text-center"
              >
                <div className="text-white">
                  <h3 className="text-xl font-semibold my-1 ">{card.title}</h3>
                  <p className=" text-sm my-1">{card.desc}</p>
                </div>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={410}
                  height={300}
                  className="w-[399px] h-[210px] px-3 mx-auto"
                />
                <div className="grid grid-cols-6 justify-evenly ">
                  {carFee.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-start gap-1 text-wrap font-normal text-xs"
                    >
                      <div className="flex items-center justify-center bg-[#1B2B38] h-[38px] w-[38px] rounded-md ">
                        {" "}
                        <Image
                          src={item.icon}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="w-[20px] h-[20px]"
                        />
                      </div>
                      <div>{item.name}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 pr-0">
                  <div className=" p-3 mb-3 border border-r-0 ">
                    <div className="flex justify-between border-b pb-2 items-center">
                      <div className="text-base font-normal text-white">
                        Heathrow to Central London
                      </div>
                      <div className="text-[#FDC65C] text-xl font-normal">
                        {" "}
                        £ {card.price}
                      </div>
                    </div>
                    <div className="flex justify-between border-b py-2 items-center">
                      <div className="text-base font-normal text-white">
                        4 hours hire
                      </div>
                      <div className="text-[#FDC65C] text-xl font-normal">
                        {" "}
                        £ {card.hours_pay}
                      </div>
                    </div>
                    <div className="flex justify-between pt-2 items-center">
                      <div className="text-base font-normal text-white">
                        Round trip{" "}
                      </div>
                      <div className="text-[#FDC65C] text-xl font-normal">
                        {" "}
                        £ {card.round_trip}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between pr-4 ">
                    {" "}
                    <button className="text-lg w-1/2 font-bold text-white bg-[#FDC65C] rounded-lg py-2 capitalize">
                      book now
                    </button>
                    <div className="text-xs font-medium">
                      Prices Subject to VAT
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={() => moveCarousel(1)}
          disabled={currentIndex >= cards.length - visibleCards}
          className={`absolute lg:-right-5 right-0 h-12 w-12 top-1/2 -translate-y-1/2 bg-[#FDC65C] text-black p-3 rounded-full shadow-lg transition 
            ${
              currentIndex >= cards.length - visibleCards
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-[#e6b850]"
            }`}
        >
          <ArrowIcon className="rotate-180 ml-1 text-white" />
        </button>
        <div className="flex items-center justify-center py-6">
          {" "}
          <button className="my-3 py-[10px] px-[20px] border border-[#FF5302] bottom-1 rounded-md  text-white font-bold text-base mx-auto">
            View our all vehicles
          </button>
        </div>
      </div>
    </section>
  );
}
