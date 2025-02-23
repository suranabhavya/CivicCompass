"use client"; // Enable client-side interactions

import { useRouter } from "next/navigation";
import ExploreButton from "./components/BusinessButton";
import ResidentialButton from "./components/ResidentialButton";
import ScrollButton from "./components/ScrollDown";

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
        <div className="relative z-10 container mx-auto px-5 py-24 flex flex-col items-center">
          <div className="text-center max-w-2xl">
            <br />
            <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold lg:text-6xl text-white">
              idontknowwheretorent.com
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
      <section className="relative flex flex-col items-center justify-center bg-white text-gray-900 py-24">
        <div className="container mx-auto px-5">
          <h2 className="text-4xl font-bold mb-6">About</h2>
          <p className="text-lg">
            Welcome to idontknowwheretorent.com, your premier platform for finding the perfect rental space. Whether you're a retailer seeking a bustling storefront or a resident in search of a cozy apartment, we cater to all your rental needs with a diverse range of listings and personalized recommendations.
          </p>
        </div>


<footer class="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800 mb-0">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

      </section>
    </>
  );
}
