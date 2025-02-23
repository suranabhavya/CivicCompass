"use client"; // Enable client-side interactions

import { useRouter } from "next/navigation";
import ExploreButton from "./components/BusinessButton";
import ResidentialButton from "./components/ResidentialButton";
import ScrollButton from "./components/ScrollDown";
import About from "./components/About";
import Chatbot from "./components/Chatbot";

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      {/* Existing Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-gray-100">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/B3.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        {/* Content */}
        <div>
          <h1>Welcome to My Next.js App</h1>
          <Chatbot />
        </div>
        <div className="relative z-10 container mx-auto px-5 py-24 flex flex-col items-center">
          <div className="text-center max-w-2xl">
            <br />
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold lg:text-6xl text-white">
              idontknowwheretorent.bizz
            </h1>
            <p className="text-xl font-medium text-white">Find Your Perfect Place</p>
            <br />

            <div className="flex justify-center">
              <div className="flex gap-12 justify-center">
                {/* RETAIL Button */}
                <div className="ml-4">
                  <ExploreButton />
                </div>

                {/* Residential Button */}
                <div className="flex justify-center">
                  <ResidentialButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 animate-bounce z-10">
          <ScrollButton />
        </div>
      </section>

      {/* About Section */}
      <section className="relative flex flex-col items-center justify-center bg-white text-gray-900 py-24 pb-0 mb-0">
        <About />
      </section>
    </>
  );
}
