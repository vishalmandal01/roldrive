import Image from "next/image";
import Link from "next/link";
import React from "react";
import { WhatsappIcon } from "../../../public/svg/whatsapp-icon";

interface MenuSubItem {
  name: string;
  url?: string;
  items?: MenuSubItem[]; // For deeper nested menus
}

interface MenuItemType {
  name: string;
  url: string;
  subItems?: MenuSubItem[];
}

export default function Header() {
  return (
    <div className="fixed top-0 h-[72px] w-full z-30 transition shadow-lg bg-[#223544]">
      <div className="max-w-[1360px] px-8 mx-auto flex justify-between items-center h-full ">
        <div className="flex items-center">
          <Image src="/svg/logo.svg" alt="logo" width={150} height={50} />
          <div className="hidden md:flex gap-3  lg:ml-10 text-white">
            {menubar.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </div>
        </div>
        <div className=" items-center gap-4 lg:flex hidden">
          <Link
            href="https://wa.me/918630993026"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white"
          >
            <WhatsappIcon className="size-5 shrink-0 " />
            <div className="font-medium text-base ">Contact Us </div>
          </Link>
          <div className="relative w-[70px]">
            <select className="appearance-none w-[75px] bg-transparent text-white border border-white rounded-md px-3 py-2 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-zinc-500 transition-colors">
              <option className="text-black">Eng</option>
              <option className="text-black">हिंदी</option>
            </select>

            <svg
              className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          <Link href={"#"}>
            <button className=" rounded-lg bg-[#FDE8E1] text-[#223544] px-6 py-2 font-semibold shadow-md hover:shadow-lg scale-100 w-[120px]  text-center hover:scale-105 transition-all">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------------- MENU ITEM COMPONENT ---------------- */
interface MenuItemProps {
  item: MenuItemType;
}
function MenuItem({ item: item }: MenuItemProps) {
  return (
    <div className="relative group">
      <Link
        href={item.url}
        className="hover:backdrop-blur-2xl hover:backdrop-h hover:bg-white/20 font-medium text-[16px] py-0.5 px-1.5 rounded-md transition-colors duration-200"
      >
        {item.name}
      </Link>

      {item.subItems && (
        <div className="absolute top-full left-0 backdrop-blur-md shadow bg-white/30 border border-white mt-2   text-white rounded-md rounded-tl-none  shadow-white group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-[200px] p-3 z-40">
          {item.subItems.map((sub, idx) => (
            <div key={idx} className="py-1">
              {sub.items ? (
                <div className="relative group/item">
                  <div className="flex justify-between items-center rounded-md hover:bg-[#ecfcfe] hover:text-[#223544] cursor-pointer px-2 py-1">
                    {sub.name}
                  </div>

                  <div className="absolute top-0 left-full ml-3 backdrop-blur-sm bg-gray-500/50 border border-white rounded-md shadow shadow-white  invisible group-hover/item:visible transition-all duration-200 min-w-[200px] p-2 z-50   ">
                    {sub.items.map(
                      (fleet, fIdx) =>
                        fleet.url && (
                          <Link
                            key={fIdx}
                            href={fleet.url}
                            className="block px-3 py-1 rounded-md  hover:bg-[#ecfcfe] hover:text-[#223544]"
                          >
                            {fleet.name}
                          </Link>
                        )
                    )}
                  </div>
                </div>
              ) : (
                sub.url && (
                  <Link
                    href={sub.url}
                    className="block px-2 py-1  hover:bg-[#ecfcfe] hover:text-[#223544] rounded-md transition-colors"
                  >
                    {sub.name}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const menubar: MenuItemType[] = [
  {
    name: "Services",
    url: "#",
    subItems: [
      {
        name: "Roadshow Transfers",
        url: "#",
      },
      {
        name: "Intercity Transfers",
        url: "#",
      },
      {
        name: "Event Transfers",
        url: "#",
      },
    ],
  },
  {
    name: "Fleet",
    url: "#",
    subItems: [
      {
        name: "Business",
        items: [
          {
            name: "Mercedes E Class",
            url: "#",
          },
          {
            name: "BMW 5 Series",
            url: "#",
          },
          {
            name: "Audi A6",
            url: "#",
          },
        ],
      },
      {
        name: "First",
        items: [
          {
            name: "Mercedes S Class",
            url: "#",
          },
          {
            name: "BMW 7 Series",
            url: "#",
          },
          {
            name: "Audi A8",
            url: "#",
          },
        ],
      },
      {
        name: "Luxury",
        items: [
          {
            name: "Rolls Royce Phantom VIII",
            url: "#",
          },
          {
            name: "Rolls Royce Ghost",
            url: "#",
          },
          {
            name: "Mercedes Maybach",
            url: "#",
          },
          {
            name: "Bentley Mulsanne",
            url: "#",
          },
        ],
      },
      {
        name: "Electric",
        items: [
          {
            name: "Tesla Model X",
            url: "#",
          },
          {
            name: "Tesla Model Y",
            url: "#",
          },
          {
            name: "Tesla Model S",
            url: "#",
          },
        ],
      },
      {
        name: "SUV",
        items: [
          {
            name: "Range Rover Defender",
            url: "#",
          },
          {
            name: "Land Rover Discovery",
            url: "#",
          },
          {
            name: "Range Rover Sport",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Business Solutions",
    url: "#",
  },
  {
    name: "Cities",
    url: "#",
  },
  {
    name: "Airport Transfers",
    url: "#",
    subItems: [
      {
        name: "London",
        items: [
          {
            name: "Heathrow Airport",
            url: "#",
          },
          {
            name: "Gatwick Airport",
            url: "#",
          },
          {
            name: "London City Airport",
            url: "#",
          },
        ],
      },
      { name: "Dubai", url: "#" },
      { name: "New York", url: "#" },
    ],
  },
];
