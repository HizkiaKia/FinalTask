"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/lib/api";
import Footer from "@/app/components/Footer";
import { useSearchParams } from "next/navigation";
import Overview from "@/app/movie/sections/Overview";
import logo from "@/assets/logo.png";
import { BsBookmarkPlusFill, BsEyeFill, BsStarFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { useGetDetailMovie, useGetReviews } from "@/hooks/useMovies";
import { useGetCredits } from "@/hooks/useMovies";

export default function Page() {
  const params = useParams();
  const detail = useGetDetailMovie(params.id);
  const credits = useGetCredits(params.id);
  const reviews = useGetReviews(params.id);
  const [menu, setMenu] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (credits) {
      setIsLoading(false);
    }
  }, [credits]);

  return (
    <>
       <header className="py-2 shadow-md shadow-gray-600">
          <nav className="grid grid-cols-3 mx-auto container   justify-between items-center">
            <Link href="/">
            <Image src={logo} alt="logo" width="100" height="100" />
            </Link>
              <input type="text" placeholder="Searching" />
            <p className="font-extrabold text-right">KIA</p>
          </nav>
        </header>
      <div className="h-[300px] md:h-[424px] w-full m-auto">
        <div className="bg-gradient-to-b carousel h-full w-full">
          <div
            style={{
              backgroundImage:
                detail && detail.backdrop_path
                  ? `url(${imageUrl + detail.backdrop_path})`
                  : "url(https://placehold.co/3500x1969)",
            }}
            className="ease-in-out duration-700 delay-100 carousel-item justify-end h-full flex flex-col w-full bg-center bg-cover bg-no-repeat"
          >
            <div className="overlay top-0 left-0 w-full h-full flex bg-opacity-30 bg-black">
              <div className="overlay-content text-white justify-center container p-6 mx-auto sm:px-12 lg:px-0 xl:px-12 lg:py-8 flex flex-col gap-4 md:gap-6">
                <div className="overview md:w-3/4 lg:px-8">
                  <h1 className="text-3xl md:text-4xl font-bold truncate w-full">
                    {detail.original_title}
                  </h1>
                  <h2 className="flex items-center gap-2">
                    <div className="md:text-xl text-2xl text-yellow-400">
                      <BsStarFill></BsStarFill>
                    </div>
                    {detail.vote_average}
                  </h2>
                  <p className="line-clamp-3 md:line-clamp-5 text-base xl:text-xl">
                    {detail.overview}
                  </p>
                </div>
                <div className="flex gap-4 items-center lg:px-8">
                  <Link href="#">
                    <div className="bg-red-800 hidden sm:block py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-green-800 hover:border-2 transition-colors">
                      Watch Trailer
                    </div>
                    <div className="bg-primary py-3 visible sm:hidden px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-transparent hover:border-2 transition-colors">
                      <BsEyeFill></BsEyeFill>
                    </div>
                  </Link>
                  <Link href="#">
                    <div className="bg-transparent hidden sm:block border-2 py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-primary transition-colors hover:border-none">
                      Add to Watchlist
                    </div>
                    <div className="bg-transparent border-2 visible sm:hidden py-3 px-6 rounded-md max-w-fit text-lg md:text-xl hover:bg-primary transition-colors hover:border-none">
                      <BsBookmarkPlusFill></BsBookmarkPlusFill>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pl-20 justify-between mt-5 mb-5">
        <ul className="grid grid-cols-3 text-center gap-3">
          <Link
            href="/pageDetail"
            className="text-gray-800 bg-red-500  outLinkne-offset-1 rounded-full py-2 px-4"
          >
            Overview
          </Link>
          <Link
            href="/character"
            className="text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outLinkne-offset-1 rounded-full py-2 px-4"
          >
            Characters
          </Link>
          <Link
            href=""
            className="text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outLinkne-offset-1 rounded-full py-2 px-4"
          >
            Review
          </Link>
        </ul>
      </div>
      <div>
        <div className=" container mx-auto mb-10">
          <h1 style={{ fontFamily: "RobotoBold" }} className="text-6xl">
            Synopsis
          </h1>
        <p className="mb-5">{detail.overview}~</p>
        <p>{detail.overview}~</p>
        </div>
      </div>
      <div className="container mx-auto mb-10">
        <h1 style={{ fontFamily: "RobotoBold" }} className="text-6xl  ">
          Movie Info
        </h1>
        <p>Realease Date : {detail.release_date}</p>
        <p>Status : {detail.status}</p>
        <p>Vote Count : {detail.vote_count}</p>
        <p>Vote Average : {detail.vote_average}</p>
        <p>Popularity : {detail.popularity}</p>
        <p>Tagline : {detail.tagline}</p>
      </div>
      <footer className="bottom-0 mb-0">
        <Footer />
      </footer>
    </>
  );
}
