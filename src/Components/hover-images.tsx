import Image from "next/image";
import React from "react";
import "./HoverImages.css"; // 👈 import the CSS file

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
      "Smooth, punctual transfers between London and Southampton, Dover and other major UK cruise ports.",
    image: "/images/Image (5).png",
  },
];

export default function HoverImages() {
  return (
    <div className="hover-images-container">
      {imageData.map((item, index) => (
        <div key={index} className="image-card">
          {/* Overlay */}
          <div className="overlay">
            <h3>{item.title}</h3>
            <p>{item.disciption}</p>
          </div>

          {/* Image */}
          <Image
            src={item.image}
            alt={item.title}
            width={220}
            height={448}
            className="image"
          />
        </div>
      ))}
    </div>
  );
}
