import { useRouter } from "next/dist/client/router";
import React from "react";
import requests from "utils/requests";
const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="relative">
        <div className="flex overflow-x-scroll px-10 sm:px-20 space-x-10 sm:space-x-20 text-2xl whitespace-nowrap scrollbar-hide">
          {/* 640以上でpx-20 640以下でpx-10 */}
          {Object.entries(requests).map(([key, { title }]) => {
            return (
              <h2
                key={key}
                onClick={() => router.push(`/?genre=${key}`)}
                className="last:pr-20 hover:text-white active:text-red-500 transition duration-100 transform hover:scale-125 cursor-pointer"
              >
                {title}
              </h2>
            );
          })}
        </div>
        <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202A]" />
      </div>
    </nav>
  );
};

export default Nav;
