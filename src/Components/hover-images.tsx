import Image from "next/image";
import React from "react";

const imageData = [
  {
    title: "Airport Transfers",
    disciption:
      "Stress-free airport pickups with flight tracking, luggage assistance and complimentary waiting time.",
    image: "/images/Image (0).png",
  },
  {
    title: "Corporate Travel",
    disciption:
      "Reliable, discreet chauffeur service for meetings, executive schedules and business travel across London.",
    image: "/images/Image (1).png",
  },
  {
    title: "Events & VIP Transport",
    disciption:
      "Premium chauffeured travel for galas, concerts, award nights and high-profile guest movements",
    image: "/images/Image (2).png",
  },
  {
    title: "Flexible Hourly & Day Hire",
    disciption:
      "A dedicated chauffeur at your service for multi-stop schedules and personalised itineraries.",
    image: "/images/Image (3).png",
  },
  {
    title: "Private Sightseeing & Tours",
    disciption:
      "Tailored city tours with a professional chauffeur, showcasing London’s finest landmarks and attractions.",
    image: "/images/Image (4).png",
  },
  {
    title: "Cruise Port Transfers",
    disciption:
      "Cruise Port Transfers Smooth, punctual transfers between London and Southampton, Dover and other major UK cruise ports.",
    image: "/images/Image (5).png",
  },
];
export default function HoverImages() {
  return (
    <div className="flex gap-2">
      {imageData.map((item, index) => {
        return (
          <div
            key={index}
            className="relative w-[220px] h-[448px] group overflow-hidden rounded-lg"
          >
            {/* Text overlay */}
            <div
              className="absolute z-[5] h-[448px ]  p-4 flex flex-col justify-end group-hover:bottom-0 bottom-[-215px] transition-all duration-500 ease-out pt-[85%]  "
              style={{
                background:
                  "linear-gradient(180deg, rgba(8, 16, 23, 0) 0%, #081017 76.92%)",
              }}
            >
              <h3 className="text-[20px] font-bold leading-[1.0]">
                {item.title}
              </h3>
              <p className="text-sm h-[200px] mt-1">{item.disciption}</p>
            </div>
            {/* Image */}

            <Image
              src={item.image}
              alt={item.title}
              width={220}
              height={448}
              className="w-[220px] h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
}
