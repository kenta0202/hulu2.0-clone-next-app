/* eslint-disable @typescript-eslint/restrict-template-expressions */
/*  eslint-disable-next-line @typescript-eslint/no-unsafe-member-access*/
import React from "react";
import Image from "next/image";
import { MovieApi } from "interfaces/api/types";
import { ThumbUpIcon } from "@heroicons/react/outline";

type Props = {
  result: MovieApi;
};

export const Thumbnail: React.VFC<Props> = ({ result }: Props) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      <div className="group hover:z-50 p-2 transition duration-200 ease-in transform sm:hover:scale-105 cursor-pointer">
        <Image
          layout={"responsive"}
          src={
            `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
            `${BASE_URL}${result.poster_path}`
          }
          height={1080}
          width={1920}
          alt={""}
        />
        <div className=" p-2">
          <p className=" max-w-md truncate">{result.overview}</p>
          <h2 className="mt-1 text-2xl group-hover:font-bold text-white transition-all duration-100 ease-in-out">
            {result.title || result.name}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100">
            {result.media_type && `${result.media_type}・`}
            {""}
            {result.first_air_date || result.release_date}
            <ThumbUpIcon className=" mx-2 h-5" /> {result.vote_count}
          </p>
        </div>
      </div>
    </>
  );
};
