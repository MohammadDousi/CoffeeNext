"use client";
import TitleSection from "@/components/title-section/TitleSection";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import appLogo from "@/public/image/svgs/logo.svg";
import ProfileSection from "./profileSection";
import { GetProfileUserQuery } from "@/hooks/clientQuery";

const Profile = () => {
  const [hash, setHash] = useState({ hash: "", tabName: "" });
  const router = useRouter();
  const params = useParams();

  const menuProfile = [
    {
      tab: "سفارشات من",
      link: "orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      ),
    },
    {
      tab: "علاقمندی ها",
      link: "favorite",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
      ),
    },
    {
      tab: "تیکت ها",
      link: "support",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
    },
    {
      tab: "پیام ها",
      link: "notification",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      ),
    },
    {
      tab: "اطلاعات کاربری",
      link: "profile",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 lg:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      ),
    },
  ];

  const { data: getProfileUser } = GetProfileUserQuery();

  useEffect(() => {
    setHash({
      hash: window.location.hash,
      tabName: String(
        menuProfile.find((x) => `#${x.link}` === window.location.hash)?.tab
      ),
    });
  }, [params]);

  return (
    <main className="main !flex-row lg:!gap-10">
      <section className="w-72 flex flex-col justify-start items-start gap-5 rounded-2xl">
        <div className="w-full p-5 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-row justify-start items-center gap-5 rounded-2xl shadow-defaultShadow">
          <Image
            src={
              getProfileUser?.data.avator
                ? getProfileUser?.data.avator
                : appLogo
            }
            alt="avator user"
            width={150}
            height={150}
            unoptimized
            loading="lazy"
            className={`size-11 ${
              !getProfileUser?.data.avator && `p-2`
            } object-contain ring-1 ring-secondary ring-offset-4 ring-offset-bgItemLightColor dark:ring-offset-bgItemDarkColor rounded-xl`}
          />

          <div className="w-full flex flex-col justify-start items-center gap-0 overflow-hidden">
            <span className="w-full text-right text-lg text-textPrimaryLightColor dark:text-textPrimaryDarkColor">
              {getProfileUser?.data.name}
            </span>
            <span className="w-full text-right text-sm text-textPrimaryLightColor/50 dark:text-textPrimaryDarkColor/50">
              {getProfileUser?.data.mobile}
            </span>
          </div>
        </div>

        <div className="w-full p-5 bg-bgItemLightColor dark:bg-bgItemDarkColor flex flex-col justify-start items-start gap-2 rounded-2xl shadow-defaultShadow">
          {menuProfile.map((tab, index) => (
            <li
              onClick={() => {
                router.replace(`#${tab.link}`);
              }}
              key={index}
              className={
                hash.hash == `#${tab.link}`
                  ? "w-full h-10 px-5 text-base lg:text-lg !text-primaryColor bg-secondaryColor/10 rounded-md flex flex-row justify-start items-center gap-5 duration-300 cursor-pointer"
                  : "w-full h-10 hover:px-5 text-base lg:text-lg text-textPrimaryLightColor dark:text-textPrimaryDarkColor hover:!text-primaryColor hover:bg-secondaryColor/10 rounded-md flex flex-row justify-start items-center gap-5 duration-300 cursor-pointer"
              }
            >
              {tab.icon}
              {tab.tab}
            </li>
          ))}
        </div>
      </section>

      <section className="w-4/5 h-auto flex flex-col justify-start items-start gap-10">
        <TitleSection title={hash.tabName} />

        {hash.hash === `#profile` ? <ProfileSection /> : ""}
      </section>
    </main>
  );
};

export default Profile;
