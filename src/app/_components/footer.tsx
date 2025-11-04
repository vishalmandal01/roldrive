"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FacebookIcon } from "../../../public/svg/facebook-icon";
import { XIcon } from "../../../public/svg/x-icon";
import { InstagramIcon } from "../../../public/svg/instagram-icon";
import { PinterestIcon } from "../../../public/svg/pinterest-icon";
import { LinkedinIcon } from "../../../public/svg/linkedin-icon";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling animation
    });
  };
  return (
    <footer className="bg-[#081017] lg:py-12 md:py-10 py-4 md:px-0 px-4 text-white">
      <div className="lg:max-w-[1360px] mx-auto">
        <div className="grid grid-cols-6 text-white/60">
          {/* ====== Social Section ====== */}
          <div className="col-span-2 lg:space-y-6">
            <Image
              src="/svg/Logo.svg"
              alt="logo"
              width={150}
              height={150}
              className="h-[44px]"
            />
            <p className="text-sm font-normal md:w-[60%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex flex-col gap-4">
              {" "}
              <Link href="tel:+442070037003" className="text-base font-light">
                +44 (0) 207 112 8101
              </Link>
              <Link
                href="mailto:booking@roldrive.com"
                className="text-base font-light"
              >
                booking@roldrive.com
              </Link>
            </div>
            <div className="flex gap-4 text-white">
              <FacebookIcon className="w-6 h-6" />
              <XIcon className="w-6 h-6" />
              <InstagramIcon className="w-6 h-6" />
              <PinterestIcon className="w-6 h-6" />
              <LinkedinIcon className="w-6 h-6" />
            </div>
          </div>
          {/* ====== Footer List ====== */}
          {footerList.map((item, index) => (
            <div key={index} className="col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-white">
                {item.group_name}
              </h4>
              <ul className="space-y-3">
                {item.group.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className={`hover:text-white transition text-sm ${
                        link.name === "Become A Supplier"
                          ? "text-[#FDC65C]"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* ====== Bottom Section ====== */}
        <div className="relative text-white/60 ">
          <div className="flex border-b gap-4 pb-[20px] pt-[40px]">
            <Link href={"#"} className="text-base font-light">
              Privacy policy
            </Link>
            <Link href={"#"} className="text-base font-light">
              GDPR policy
            </Link>
            <Link href={"#"} className="text-base font-light">
              Terms & Conditions
            </Link>
          </div>
          <p className="pt-[26px] ">
            © {new Date().getFullYear()} RolDrive. All rights reserved.
          </p>
          <button
            onClick={handleScrollTop}
            className=" p-5 bg-white/40 backdrop-blur-sm rounded-full absolute right-0 top-[60%] -translate-y-1/2  flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1.4em"
              height="1.4em"
              className="text-white bg-[#E5EAFA4D] border border-white rounded-full xl:w-24 w-20 xl:h-24 h-20 p-8"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7 6.987a.75.75 0 1 1-1.06 1.061L12.751 4.81L12.762 21a.75.75 0 0 1-1.5.002l-.01-16.194l-5.722 5.711a.75.75 0 1 1-1.06-1.061z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

const footerList = [
  {
    group_name: "Fleet",
    group: [
      {
        name: "Business",
        href: "#",
      },
      {
        name: "First",
        href: "#",
      },
      {
        name: "Luxury",
        href: "#",
      },
      {
        name: "Electric",
        href: "#",
      },
      {
        name: "SUV",
        href: "#",
      },
      {
        name: "MVP",
        href: "#",
      },
      {
        name: "Sprinter",
        href: "#",
      },
    ],
  },
  {
    group_name: "Services",
    group: [
      {
        name: "Airport Transfers",
        href: "#",
      },
      {
        name: "Road Shows",
        href: "#",
      },
      {
        name: "Intercity Transfers",
        href: "#",
      },
      {
        name: "Event Transfers",
        href: "#",
      },
      {
        name: "All Services",
        href: "#",
      },
    ],
  },
  {
    group_name: "Top Cities",
    group: [
      {
        name: "London",
        href: "#",
      },
      {
        name: "Paris",
        href: "#",
      },
      {
        name: "New York",
        href: "#",
      },
      {
        name: "Dubai",
        href: "#",
      },
      {
        name: "Tokyo",
        href: "#",
      },
    ],
  },
  {
    group_name: "FAQ",
    group: [
      {
        name: "Blogs",
        href: "#",
      },
      {
        name: "Career",
        href: "#",
      },
      {
        name: "About Us",
        href: "#",
      },
      {
        name: "Become A Supplier",
        href: "#",
      },
    ],
  },
];
