"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useGetMovies } from "@/hooks/useMovies";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { imageUrl } from "@/lib/api";
import useFetch from "@/hooks/useFetch";
import axios from "axios";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { data } from "autoprefixer";
// import Character from "@/app/character/page"



export default function PageOverview(
  image,
  backdrop_path,
  overview,
  titleOri,
  id,
  popularity,
  title
) {
  const params = useParams();
  
  return (
    <>
     <header className="py-2 shadow-md shadow-gray-600">
          <nav className="flex container mx-auto  justify-between items-center">
            <Image src={logo} alt="logo" width="100" height="100" />
            <div>
              <input type="text" placeholder="Searching" />
            </div>
          </nav>
        </header>
      <section>
        <div
          className="relative  rounded-lg bg-cover bg-no-repeat p-12 text-center"
          // style={{
          //   backgroundImage: `url(${imageUrl + image})`,
          //   height: 485,
          // }}
        >
          <Image src={imageUrl + image} alt={title} width={100} height={100} />
          <h1>{title}</h1>
          <p>
            <AiTwotoneStar />
            
            {params.id}
          </p>
          <p>{titleOri}~</p>
        </div>
      </section>
      <div className="flex pl-20 justify-between mt-5 mb-5">
        <ul className="grid grid-cols-3 items-center gap-3">
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
        <div className=" ">
          <h1 style={{ fontFamily: "RobotoBold" }} className="text-6xl ">
            Synopsis
          </h1>
        </div>
        <p>{data.overview}~</p>
      </div>
      <div>
        <h1 style={{ fontFamily: "RobotoBold" }} className="text-6xl ">
          Movie Info
        </h1>
        <p>~</p>
      </div>
    </>
  );
}
