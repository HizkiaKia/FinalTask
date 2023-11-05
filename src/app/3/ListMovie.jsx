"use client";
import { useGetMoviePopular, useGetMovies } from "@/hooks/useMovies";
import Card from "../components/Card";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { apiKey, imageUrl, fetchDataFromServer } from "@/lib/api";

export default function ListMovie() {
  const [sortBy, setSortBy] = useState("popularity.desc");
  const params = useSearchParams();
  const data = useGetMoviePopular(sortBy, params.get("page"));

  return (
    <>
      <div>
        <select name="" id="" onChange={(e) => setSortBy(e.target.value)}>
          <option value="popularity.desc">Popularity Desc</option>
          <option value="popularity.asc">Popularity Asc</option>
          <option value="revenue.asc">Revenue Asc</option>
          <option value="revenue.desc">Revenue Desc</option>
        </select>
      </div>
      <ul className="flex items-center gap-3 pl-20 justify-between mt-5 mb-5">
        <li className="sm:text-sm md:text-sm lg:text-lg ">
          <Link
            className=" text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 rounded-full py-2 px-4"
            href="/"
          >
            All
          </Link>
          <Link
            className=" text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 rounded-full py-2 px-4"
            href="/2"
          >
            Now Playing
          </Link>
          <Link
            className=" bg-red-500  outline-offset-1 rounded-full py-2 px-4"
            href="/3"
          >
            Popular
          </Link>
          <Link
            className=" text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 rounded-full py-2 px-4"
            href="/4"
          >
            Top Rated
          </Link>
          <Link
            className=" text-gray-800 bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 rounded-full py-2 px-6"
            href="/5"
          >
            Upcoming
          </Link>
        </li>
      </ul>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 justify-center sm:justify-around gap-5">

        {data?.results?.map((item, index) => (
          <Link href={`/movie/${item.id}`} key={item.id}>
            <Card
              image={item.poster_path}
              overview={item.overview}
              id={item.id}
              popularity={item.popularity}
              title={item.title}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center gap-10 mt-10">
        <ul className="flex items-center gap-5 pb-6">
          <li>
            <FaAnglesLeft />
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=1"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=2"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=3"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=4"
            >
              4
            </Link>
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=5"
            >
              5
            </Link>
          </li>
          <li>
            <Link
              className="bg-white hover:bg-red-400 active:bg-violet-500 focus:bg-red-500  outline-offset-1 py-2 px-4 "
              rel="stylesheet"
              href="/?page=6"
            >
              6
            </Link>
          </li>
          <li>
            <FaAnglesRight />
          </li>
        </ul>
      </div>
    </>
  );
}
