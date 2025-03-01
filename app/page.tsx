// import Image from "next/image";
// import styles from "./page.module.css";

// export default function Home() {
//   return (

//   );
// }

import React from "react";
//import { cn } from "@/app/lib/utils";
import { Spotlight } from "./components/ui/Spotlight";
import Navbar from "./components/Navbar";

export default function SpotlightPreview() {
  return (
    <>
      <Navbar />
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Effortless Catering <br /> Memorable Moments
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Book the best catering services for your events
            <br /> We provide a wide range of catering services for all types of
            events.
          </p>
        </div>
      </div>
    </>
  );
}
