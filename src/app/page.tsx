import Image from "next/image";
import { WhatsappIcon } from "../../public/svg/whatsapp-icon";
import GoogleRating from "./_components/google-rating";
import Link from "next/link";
import HeroForm from "./_components/hero-form";
import GradentBorderCard from "../Components/gradent-border-card";
import HoverImages from "@/Components/hover-images";
import OurLuxuryCarousel from "./_components/our-luxury-crousel";
import SpecialRequirementForm from "./_components/special-requirement-form";
import ClientsReviews from "./_components/clients-reviews";
import FAQ from "./_components/faq";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ChooseRolDrive />
      <SpecialForm />
      <LondonChauffeurService />
      <OurLuxuryCarousel />
      <RequestForBespoke />
      <ClientsReviews />
      <ApplicationSetup />
      <FAQ />
      <BookYourLondon />
    </main>
  );
}

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[#081017] w-full">
      <Image
        src="/images/hero-bg.png"
        alt="hero"
        width={1920}
        height={1080}
        className=" h-[calc(100vh-2rem)] w-[100vw] absolute bottom-[0rem]  left-0 object-cover "
      />
      {/* <div className="bg-[#223544] w-full h-8 z-5 absolute bottom-0 shadow-[-0px_-1px_18px_15px_#223544]"></div> */}
      <div className="absolute bottom-0 w-full h-[6rem] z-5 bg-gradient-to-t from-[#081017] from-5% to-transparent to-100%"></div>
      <div className="absolute bottom-0 w-[60vw] h-full z-5 bg-gradient-to-r from-[#081017] from-[25%] to-transparent to-100%"></div>

      {/* page hero section end  */}

      <div className="w-full  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <div className="max-w-[1360px] lg:px-8 px-3 mx-auto grid lg:grid-cols-2 gap-4 mt-24">
          <div className="text-white hidden lg:block">
            <div className="font-bold  text-5xl  leading-[1.2]">
              <span className="text-[#FDC65C]">Luxury </span>
              Chauffeur Service in London – Airport, Corporate & VIP Travel
            </div>
            <p className="font-medium text-base mt-1">
              Professional chauffeurs, luxury vehicles and all-inclusive
              pricing. Complimentary airport waiting, real-time flight
              monitoring & 24/7 support.
            </p>

            <div className="flex items-center gap-3 my-5">
              <Link
                href="tel:+442070037003"
                className="flex gap-3 items-center mt-4"
              >
                <Image
                  src="/svg/CallIcon.svg"
                  alt="call"
                  width={20}
                  height={20}
                />
                <div className="font-medium text-base">+44 20 7003 7003</div>
              </Link>
              <Link
                href="mailto:booking@roldrive.com"
                className="flex gap-3 items-center mt-4"
              >
                <Image
                  src="/svg/email (1).svg"
                  alt="call"
                  width={20}
                  height={20}
                />

                <div className="font-medium text-base">
                  booking@roldrive.com
                </div>
              </Link>
              <Link
                href="https://wa.me/918630993026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 p-2 mt-3 rounded-full"
              >
                <WhatsappIcon className="size-6 shrink-0 " />
              </Link>
            </div>

            <GoogleRating />
          </div>
          {/* hero section Form */}
          <HeroForm />
        </div>
      </div>
    </section>
  );
};

const ChooseRolDrive = () => {
  const chooseList = [
    {
      icon: "/svg/plain.svg",
      title: "60 minutes free airport wait",
      description: "Complete peace of mind for delayed flights",
    },
    {
      icon: "/svg/driver 1.svg",
      title: "Professional chauffeurs",
      description: "Uniformed, discreet and well-presented",
    },
    {
      icon: "/svg/dollar.svg",
      title: "All-inclusive pricing",
      description: "No hidden fees, surcharges or surprises",
    },
    {
      icon: "/svg/traffic-jam.svg",
      title: "Luxury fleet",
      description: "Hand-picked vehicles for a first-class travel experience",
    },
    {
      icon: "/svg/support.svg",
      title: "24/7 support",
      description: "Always available for bookings and assistance",
    },
  ];
  return (
    <section className="relative lg:h-[360px] text-white w-full bg-[#081017] ">
      <div className="w-full z-[5] sm:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 ">
        <div className="lg:max-w-[1360px] lg:pt-0 pt-5  lg:px-8 px-3 mx-auto text-center ">
          <div className="text-4xl font-bold">
            Why Choose <span className="text-[#FDC65C]">RolDrive</span>
          </div>
          <div className="font-medium text-base  max-w-[1020px] mx-auto ">
            Choose a premium chauffeur service in London, trusted by corporate
            travellers and VIP clients. From airport transfers to business
            travel, RolDrive delivers a seamless, reliable and comfortable
            journey every time.
          </div>

          <div className="grid  lg:grid-cols-5 md:grid-cols-3 grid-cols-1 justify-items-center align- ">
            {chooseList.map((item, index) => {
              return (
                <div key={index} className="flex justify-between items-center ">
                  <div className="flex flex-col items-center mt-8 bg-red-5002">
                    <div className="h-[42px] w-[48px] ">
                      <GradentBorderCard>
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={24}
                          height={24}
                        />{" "}
                      </GradentBorderCard>
                    </div>
                    <div className="font-bold text-lg mt-3">{item.title}</div>
                    <div className="text-sm font-medium mt-1">
                      {item.description}
                    </div>
                  </div>
                  {index !== chooseList.length - 1 && (
                    <div className="h-[80px] w-[1px] sm:block hidden border-l-2 border-[#363636]  border-dashed  mx-2"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative w-full h-[460px] lg:h-[360px] sm:block hidden">
        <Image
          src="/images/car-bg.jpg"
          alt="hero"
          width={1920}
          height={1080}
          className="w-full h-[460px] lg:h-[360px] object-cover"
        />

        {/* Overlay color */}
        <div className="absolute inset-0 bg-[#081017]/[0.96]" />
      </div>
    </section>
  );
};

const SpecialForm = () => {
  return (
    <section
      className="py-8  text-white "
      style={{
        background:
          " linear-gradient(180deg, #081017 0%, #20313F 55%, #081017 100%)",
      }}
    >
      <div className="flex items-center lg:max-w-[1360px] mx-auto justify-between  gap-4 ">
        <div className="lg:block hidden w-[40vw] p-8 ">
          <div className="font-bold text-[48px] leading-[1.0]">
            <span className="text-[#FDC65C]">Chauffeur</span> Driven Cars for
            Any Occasion
          </div>
          <p className="text-base font-medium mt-3">
            Whether it’s an event, corporate travel or a personalised journey,
            we provide tailored chauffeur solutions across London. Share your
            requirements and we’ll respond within minutes — our average reply
            time is under 3 minutes — with detailed pricing and a call or email
            back to finalise your arrangements.
          </p>
          <div className="text-base font-extrabold py-4 border-b-2 border-[#555555] border-dashed ">
            Seamless, reliable and discreet — every journey handled with
            exceptional care.
          </div>
          <div className="text-base font-normal text-[#FDC65C] italic mt-4">
            Trusted by Leading Companies
          </div>
          <div className=" ">
            <Image
              src="/svg/Companies.svg"
              alt="Companies"
              width={1920}
              height={1080}
            />
          </div>
          <div className="flex items-center gap-4 mt-4">
            <label className="flex text-nowrap items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                defaultChecked
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
              <span className="text-sm font-medium text-gray-200">
                Email Me
              </span>
            </label>
            <div className=" flex items-center gap-2 w-full">
              <div className="w-full h-[1px] bg-[#4C4C4C]"></div>
              <div className="text-sm font-normal text-[#4c4c4c] text-nowrap">
                Reply within 3 minutes
              </div>
            </div>
          </div>
        </div>
        <SpecialRequirementForm />
      </div>
    </section>
  );
};

const LondonChauffeurService = () => {
  return (
    <section className="py-8  text-white bg-[#081017]">
      <div className="lg:max-w-[1360px] mx-auto ">
        <div className="mb-10">
          {" "}
          <div className="font-bold text-[36px] text-center">
            <span className="text-[#FDC65C] ">London</span> Chauffeur Service
          </div>
          <p className=" text-base font-medium text-center max-w-[1020px] mx-auto">
            Experience a seamless London chauffeur service with professional
            drivers, luxury vehicles, and fully personalised travel for airport
            journeys, business schedules, VIP events, tours, and more.
          </p>
        </div>
        <HoverImages />
      </div>
    </section>
  );
};

const RequestForBespoke = () => {
  return (
    <section
      className="py-8  text-white "
      style={{
        background:
          " linear-gradient(180deg, #081017 0%, #20313F 55%, #081017 100%)",
      }}
    >
      <div className="flex items-center lg:max-w-[1360px] mx-auto justify-between  gap-4 ">
        <div className="lg:block hidden w-[40vw] p-8 ">
          <div className="font-bold text-[48px] leading-[1.0]">
            <span className="text-[#FDC65C]">Request</span> a Bespoke Chauffeur
            Quote in Minutes
          </div>
          <p className="text-base font-medium mt-3">
            Tell us your journey details and our team will respond within 3
            minutes with a tailored quote, schedule options and vehicle
            recommendations.
          </p>
          <div className="text-base font-medium  ">
            Fast response • Dedicated coordinator • Transparent pricing
          </div>
        </div>
        <SpecialRequirementForm />
      </div>
    </section>
  );
};

const ApplicationSetup = () => {
  return (
    <div className="bg-[#081017] py-16">
      <div className="lg:max-w-[1360px] mx-auto  ">
        <div className="bg-[#20313F] relative rounded-xl mt-10 md:px-10 px4 md:py-4 py-3 text-white ">
          <div className="md:w-[48%] leading-[1.0] space-y-4">
            <div className=" text-[36px] font-extrabold">
              Luxury Chauffeurs, On Demand — Anytime, Anywhere
            </div>
            <div>
              Book, manage and track your chauffeur with ease using the RolDrive
              mobile app. Stay in control of your journeys with instant
              notifications, live updates and 24/7 availability.
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 ">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#FDC65C] rounded-full" />
                <div className="text-base font-normal">
                  Manage bookings on the go
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#FDC65C] rounded-full" />
                <div className="text-base font-normal">
                  Live chauffeur and flight tracking
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-[#FDC65C] rounded-full" />
                <div className="text-base font-normal">
                  Secure in-app payments
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 md:flex-row flex-col">
              <Image
                src="/images/google-play-store.png"
                alt="google"
                width={1920}
                height={1080}
                className=" md:h-[40px] md:w-[150px]   "
              />
              <Image
                src="/images/apple store.png"
                alt="google"
                width={1920}
                height={1080}
                className=" md:h-[40px] md:w-[150px]   "
              />
            </div>
          </div>
          <Image
            src={"/images/mobile.png"}
            alt="mobile"
            width={1920}
            height={1080}
            className=" w-[40%] absolute right-[6%] bottom-0  "
          />
        </div>
      </div>
    </div>
  );
};

const BookYourLondon = () => {
  return (
    <section className="relative h-screen bg-[#081017] w-full">
      <Image
        src="/images/Book Your1.jpg"
        alt="hero"
        width={1920}
        height={1080}
        className=" h-[80vh] w-[100vw] absolute bottom-[0rem]  top-1/2 left-0 -translate-y-1/2 object-cover "
      />

      <div className="absolute top-0 w-[100%] h-[60%] z-5 bg-gradient-to-b from-[#081017] from-[25%] to-transparent to-100%"></div>
      <div className="absolute bottom-0 w-[100%] h-[60%] z-5 bg-gradient-to-t from-[#081017] from-[25%] to-transparent to-100%"></div>

      {/* page hero section end  */}

      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
        <div className="max-w-[1360px] lg:px-8 px-3 mx-auto grid lg:grid-cols-2 gap-4 mt-24">
          <div className="text-white lg:block hidden w-[40vw] p-8 pl-0 ">
            <div className="font-bold  text-5xl  leading-[1.2]">
              Book Your London
              <span className="text-[#FDC65C]"> Chauffeur Today </span>
            </div>
            <p className="font-medium text-base w-[80%] mt-1 ">
              From Heathrow transfers to corporate roadshows, secure your
              chauffeur with RolDrive. Availability is limited during peak
              seasons — reserve now.
            </p>

            <div className="flex items-center gap-3 my-5">
              <Link
                href="tel:+442070037003"
                className="flex gap-3 items-center mt-4"
              >
                <Image
                  src="/svg/CallIcon.svg"
                  alt="call"
                  width={20}
                  height={20}
                />
                <div className="font-medium text-base">+44 20 7003 7003</div>
              </Link>
              <Link
                href="mailto:booking@roldrive.com"
                className="flex gap-3 items-center mt-4"
              >
                <Image
                  src="/svg/email (1).svg"
                  alt="call"
                  width={20}
                  height={20}
                />

                <div className="font-medium text-base">
                  booking@roldrive.com
                </div>
              </Link>
              <Link
                href="https://wa.me/918630993026"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 p-2 mt-3 rounded-full"
              >
                <WhatsappIcon className="size-6 shrink-0 " />
              </Link>
            </div>

            <div className="border-t-2 border-[#555555] border-dashed ">
              <Image
                src="/svg/Companies.svg"
                alt="Companies"
                width={1920}
                height={1080}
              />
            </div>
          </div>
          {/* hero section Form */}
          <HeroForm />
        </div>
      </div>
    </section>
  );
};
