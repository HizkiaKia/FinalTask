"use client";
import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import googlePlay from "@/assets/googlePlay.png";
import instagram from "@/assets/instagram.png";
import pinterest from "@/assets/pinterest.png";
import facebook from "@/assets/facebook.png";
import appStore from "@/assets/appStore.png";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                className=" flex w-20 h-20 mr-3"
                alt="K14 Films Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                K14 Films
              </span>
            </a>
            <ul>
              <li className="text-white grid grid-cols-1">
                K14 Films adalah platform website yang diperuntukan untuk
                mencari
              </li>
              <li className="text-white grid grid-cols-1">
                dan menonton berbagai jenis film. Nama K14 Films diambil dari
                nama
              </li>
              <li className="text-white grid grid-cols-1">
                saya sendiri yaitu Hizkia, saya ubah sedikit dibagian huruf I
                dan
              </li>
              <li className="text-white grid grid-cols-1">
                A dari yang sebelumnya KIA menjadi K14.
              </li>
            </ul>
          </div>
          <div className="justify-between grid grid-cols-2">
            <div>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Tentang Kami
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Layanan
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Karir
                  </a>
                </li>
                <li className="">
                  <a href="/" className="hover:underline">
                    Pusat Media
                  </a>
                </li>
              </ul>
            </div>
            <ul className="text-white">
              <li className="mb-4 ">Download</li>
              <li className="mb-4 grid lg:grid-cols-2 md:grid-rows-2  lg:w-60 md:w-30">
                <Link href="https://play.google.com/">
                  <Image src={googlePlay} />
                </Link>
                <Link href="https://www.apple.com/id/app-store/">
                  <Image src={appStore} />
                </Link>
              </li>
              <li className="mb-4 ">Social Media</li>
              <li className="grid grid-cols-3 ">
                <div>
                  <Link href="https://www.facebook.com/k14films/">
                    <Image className="h-10 w-10 " src={facebook} />
                  </Link>
                </div>
                <div>
                  <Link href="https://www.instagram.com/hizkia_sn/">
                    <Image className="h-10 w-10" src={pinterest} />
                  </Link>
                </div>
                <div>
                  <Link href="https://www.instagram.com/k14films/">
                    <Image className="h-10 w-10" src={instagram} />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="text-white text-sm justify-center text-center">
       Copyright © 2023 K14 Films™. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
