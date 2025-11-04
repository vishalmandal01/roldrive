"use client";
import React, { useState } from "react";

interface Review {
  name: string;
  content: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-10 ">
      <div className="lg:max-w-[1360px] mx-auto ">
        <div className=" text-center p-8 w-full ">
          <div className="font-bold text-[36px] leading-[1.0]">
            Frequently Asked
            <span className="text-[#FDC65C]"> Questions</span>
          </div>
          <p className="text-base font-medium mt-3">
            Everything you need to know about our chauffeur service
          </p>
        </div>

        <div className="">
          {reviews.map((review, index) => (
            <div key={index} className="  border-b-2">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-6 text-left text-[#4C4C4C] font-medium text-base"
              >
                <span>{review.name} </span>
                <span
                  className={`transform transition-transform duration-300 bg-black text-white w-6 h-6 flex items-center justify-center rounded-full font-medium `}
                >
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all bg-[#F5F5F5] duration-500 ease-in-out  border-dashed  ${
                  openIndex === index
                    ? "max-h-[500px] border-t-2 border-[E0E0E0] pt-3"
                    : "max-h-0 border-t-0 pt-0"
                }`}
              >
                <div className="px-6 pb-4 text-[#4C4C4C] text-base leading-relaxed">
                  {review.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reviews: Review[] = [
  {
    name: "What if my flight is delayed?",
    content:
      "We monitor all flights in real-time and include 60 minutes free airport waiting.",
  },
  {
    name: "Are your rates all-inclusive?",
    content:
      "We monitor all flights in real-time and include 60 minutes free airport waiting.",
  },
  {
    name: "Can I book hourly?",
    content:
      "We monitor all flights in real-time and include 60 minutes free airport waiting.",
  },
  {
    name: "What if my flight is delayed?",
    content:
      "We monitor all flights in real-time and include 60 minutes free airport waiting.",
  },
];
