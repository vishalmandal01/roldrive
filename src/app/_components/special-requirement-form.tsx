import React from "react";
import { WhatsappIcon } from "../../../public/svg/whatsapp-icon";
import { Input } from "@/Components/ui/input";

export default function SpecialRequirementForm() {
  return (
    <div className=" lg:max-w-[600px] w-[90%] lg:mx-0 mx-auto rounded-xl py-[40px] px-[20px] backdrop-blur-lg bg-[#20313F7A]">
      <div className="text-center text-[36px] font-bold">
        Have a <span className="text-[#FDC65C]">Special</span> Requirement?
      </div>
      <p className="text-base font-medium text-center">
        Every journey is unique. Whether it&apos;s a corporate roadshow, VIP
        event, or private sightseeing, we create a tailored chauffeur package
        for you.
      </p>

      <div className="flex flex-col gap-3">
        <div className="text-white">
          <label className="text-[12px] font-normal" htmlFor="">
            Name
          </label>
          <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-1 py-1">
            <Input id="" placeholder="Enter your name" />
          </div>
        </div>
        <div className="text-white">
          <label className="text-[12px] font-normal" htmlFor="">
            Email
          </label>
          <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-1 py-1">
            <Input id="" placeholder="Enter your email" />
          </div>
        </div>
        <div className="text-white">
          <label className="text-[12px] font-normal" htmlFor="">
            Phone Number
          </label>
          <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-1 py-1">
            <Input id="" placeholder="Enter your phone number" />
          </div>
        </div>

        <p className="text-[12px] font-normal">Contact by</p>
        <div className="flex items-center gap-4 ">
          <label className="flex text-nowrap items-center gap-2 cursor-pointer select-none">
            <input
              defaultChecked
              type="checkbox"
              className="peer appearance-none h-5 w-5 border-2 rounded-md checked:bg-[#FDC65C] checked:border-[#FDC65C] transition-all duration-200 relative"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute ml-0.5 w-4 h-4 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-sm font-medium text-gray-200">Call me</span>
          </label>
          <label className="flex text-nowrap items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              className="peer appearance-none h-5 w-5 border-2 rounded-md checked:bg-[#FDC65C] checked:border-[#FDC65C] transition-all duration-200 relative"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute ml-0.5 w-4 h-4 text-black pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-sm font-medium text-gray-200">Email Me</span>
          </label>
          <div className=" flex items-center gap-2 w-full">
            <div className="w-full h-[1px] bg-[#4C4C4C]"></div>
            <div className="text-sm font-normal text-[#4c4c4c] text-nowrap">
              Reply within 3 minutes
            </div>
          </div>
        </div>

        <div className="text-white">
          <label className="text-[12px] font-normal" htmlFor="">
            Provide your Brief Requirement
          </label>

          <textarea
            id=""
            placeholder="Describe your requirements"
            className="w-full  text-[#B2B2B2] bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-2 py-2"
          />
        </div>

        <div className="flex md:flex-row flex-col items-center gap-3 justify-between">
          <button className="cursor-pointer rounded-lg bg-[#EC5C29] text-white py-3 font-bold text-base w-full ">
            Calculate Price
          </button>
          <button className=" cursor-pointer rounded-lg text-white py-3 font-bold text-base w-full    border  flex items-center justify-center gap-2">
            <WhatsappIcon />
            Chat on Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
}
