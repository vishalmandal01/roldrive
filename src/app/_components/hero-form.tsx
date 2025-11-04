"use client";

import Image from "next/image";
import React, { useState } from "react";
import { WhatsappIcon } from "../../../public/svg/whatsapp-icon";
import { Input } from "@/Components/ui/input";

export default function HeroForm() {
  const [formType, setFormType] = useState<"Transfer" | "Hourly">("Transfer");
  return (
    <div
      className=" rounded-[24px] border-[1px] md:p-[24px] p-3 w-full md:max-w-[488px] mx-auto  xl:ml-40 "
      style={{
        background:
          "linear-gradient(228.4deg, rgba(8, 16, 23, 0.27) 0%, rgba(8, 16, 23, 0.666) 42.38%, rgba(8, 16, 23, 0.738) 52.51%, rgba(8, 16, 23, 0.781483) 75.5%, rgba(8, 16, 23, 0) 112.04%)",
        border: "1px solid",
        borderImageSource:
          "linear-gradient(212.22deg, rgba(253, 232, 225, 0.1825) 3.17%, rgba(255, 255, 255, 0.0325) 100.03%)",
        backdropFilter: "blur(15px)",
        boxShadow: "0px 2px 10px 2px #2235447A",
      }}
    >
      <div className="flex items-center justify-stretch gap-3">
        {" "}
        <button
          className={`w-full md:w-[214px] h-[44px] rounded-[1000px] border-[1px] flex items-center justify-center gap-[10px] ${
            formType === "Transfer"
              ? "bg-[#223544] text-white border-[#FFFFFF4D] hover:bg-[#233a4d]"
              : "bg-[#22354466] text-[#FFFFFF4D] border-[#FFFFFF4D] hover:bg-[#223544]"
          }`}
          onClick={() => setFormType("Transfer")}
        >
          <Image
            src="/svg/Transfer.svg"
            alt="transfer"
            width={20}
            height={20}
            className={`${
              formType === "Transfer" ? "text-white" : "text-[#FFFFFF4D]"
            }`}
          />{" "}
          Transfer
        </button>
        <button
          className={`w-full md:w-[214px] h-[44px] rounded-[1000px] border-[1px] flex items-center justify-center gap-[10px] ${
            formType === "Hourly"
              ? "bg-[#223544] text-white border-[#FFFFFF4D] hover:bg-[#233a4d]"
              : "bg-[#22354466] text-[#FFFFFF4D] border-[#FFFFFF4D] hover:bg-[#223544]"
          }`}
          onClick={() => setFormType("Hourly")}
        >
          <Image
            src="/svg/Hourly.svg"
            alt="Hourly"
            width={20}
            height={20}
            className={`${
              formType === "Hourly" ? "text-white" : "text-[#FFFFFF4D]"
            }`}
          />{" "}
          Hourly
        </button>
      </div>
      {formType === "Transfer" && (
        <form className="space-y-3 mt-4">
          <div className="text-white">
            <label className="text-[12px] font-normal" htmlFor="pick-up">
              Pick Up
            </label>
            <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-3 py-1">
              <Image
                src="/svg/location.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <Input id="pick-up" placeholder="Enter pick up location" />
              <Image src="/svg/Right.svg" alt="phone" width={20} height={20} />
            </div>
          </div>
          <div className="text-white">
            <label className="text-[12px] font-normal" htmlFor="pick-up">
              Drop Off{" "}
            </label>
            <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-3 py-1">
              <Image
                src="/svg/location.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <Input id="pick-up" placeholder="Enter drop off location" />
              <Image src="/svg/Right.svg" alt="phone" width={20} height={20} />
            </div>

            <button type="button" className=" max-w-max pt-3">
              <div className="flex gap-2 items-center">
                <svg
                  className="h-5 w-5 text-[#FDC65C]"
                  fill="none"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  ></path>
                </svg>
                <p className="font-medium text-[#FDC65C]">Add Stop</p>
              </div>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-white">
              <label className="text-[12px] font-normal" htmlFor="pick-up">
                Date
              </label>
              <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-3 py-1">
                <Image
                  src="/svg/calendar.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <Input id="pick-up" placeholder="Pick up date" />
              </div>
            </div>
            <div className="text-white">
              <label className="text-[12px] font-normal" htmlFor="pick-up">
                Time
              </label>
              <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-3 py-1">
                <Image
                  src="/svg/clock.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <Input id="pick-up" placeholder="Pick up time" />
              </div>
            </div>
          </div>
          <div className="border-b border-white w-full pt-2" />{" "}
          <button type="button" className="max-w-max py-4">
            <div className="flex gap-2 items-center">
              <svg
                className="h-5 w-5 text-[#FDC65C]"
                fill="none"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                ></path>
              </svg>
              <p className="font-medium text-[#FDC65C]">Add Return Journey </p>
            </div>
          </button>
          <div className="flex md:flex-row flex-col items-center gap-3 justify-between">
            <button className="cursor-pointer rounded-lg bg-[#EC5C29] text-white py-3 font-bold text-base w-full ">
              Calculate Price
            </button>
            <button className=" cursor-pointer rounded-lg text-white py-3 font-bold text-base w-full    border  flex items-center justify-center gap-2">
              <WhatsappIcon />
              Chat on Whatsapp
            </button>
          </div>
        </form>
      )}
      {formType === "Hourly" && (
        <div>
          <form className="space-y-3 mt-4">
            <div className="text-white">
              <label className="text-[12px] font-normal" htmlFor="pick-up">
                Pick Up
              </label>
              <div className="flex text-[#B2B2B2] items-center bg-[#223544D9] border-[1px] border-[#FFFFFF4D] rounded-lg px-3 py-1">
                <Image
                  src="/svg/location.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <Input id="pick-up" placeholder="Enter pick up location" />
                <Image
                  src="/svg/Right.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
              </div>
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
          </form>
        </div>
      )}
    </div>
  );
}
