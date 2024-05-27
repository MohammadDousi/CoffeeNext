import React from "react";

import diamond from "@/public/image/club/diamond.png";
import activity from "@/public/image/club/Activity.svg";
import discovery from "@/public/image/club/Discovery.svg";
import ticketStar from "@/public/image/club/Ticket-Star.svg";
import Image from "next/image";

const Club = () => {
  const club = [
    { icon: activity, itemClub: "ماموریت ها" },
    { icon: discovery, itemClub: "چرخ و بخت" },
    { icon: ticketStar, itemClub: "جایزه ها" },
  ];

  return (
    <section className="w-full h-64 lg:h-36 px-4 lg:px-11 bg-gradient-to-r from-successPrimaryColor to-successSecondaryColor flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 rounded-2xl">
      <div className="w-full lg:w-1/2 flex flex-row justify-between lg:justify-start items-center gap-4 lg:gap-6">
        <Image
          unoptimized
          src={diamond}
          alt="diamond"
          className="w-[87px] lg:w-28 object-contain"
        />
        <div className="flex flex-col justify-start items-start lg:gap-2">
          <h2 className="w-full font-[Morabba] font-bold text-2xl lg:text-5xl text-right text-textPrimaryDarkColor">
            کافی کلاب
          </h2>
          <h2 className="w-full font-[Morabba] font-light text-lg lg:text-2xl text-right text-textPrimaryDarkColor">
            میدونستی میتونی با امتیاز هات قهوه بگیری ؟
          </h2>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-row justify-start items-center gap-3">
        <div className="w-3/4 flex flex-row justify-start items-center gap-2 lg:gap-5">
          {club.map((item, index) => (
            <div
              key={index}
              className="w-1/3 h-20 lg:size-24 text-xs lg:text-sm font-normal text-successSecondaryColor bg-bgItemLightColor rounded-2xl flex flex-col justify-center items-center gap-1.5 lg:gap-3"
            >
              <Image
                unoptimized
                src={item.icon}
                alt={`item ${item.icon}`}
                className="size-10 lg:size-12 object-contain"
              />
              {item.itemClub}
            </div>
          ))}
        </div>

        <div className="w-1/4 h-20 lg:h-24 flex flex-col justify-between items-start">
          <span className="w-full pr-2 text-2xl lg:text-3xl font-bold text-textPrimaryDarkColor">
            524
          </span>
          <span className="w-full pr-2 text-xs lg:text-sm font-normal text-textPrimaryDarkColor">
            امتیاز شما
          </span>
          <button className="w-full p-1 lg:px-2.5 lg:h-8 text-xs lg:text-sm font-normal text-center text-textPrimaryDarkColor bg-gradient-to-r from-primaryColor to-secondaryColor rounded-full flex flex-row justify-center items-center cursor-pointer">
            دریافت جایزه
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-4 lg:size-5"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Club;
