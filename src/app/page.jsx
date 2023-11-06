"use client"
import Image from "next/image";
import logo from "@/assets/logo.png";
import ListMovie from "./sections/ListMovie";
import Footer from "./components/Footer";
import JbCarousel from "@/app/components/Carousel";
import Link from "next/link";

export default function Home() {
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
    <div>
        <JbCarousel />
      </div>
      <main className="container mx-auto mt-10 relative">
        <ListMovie />
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </>
  );
}
