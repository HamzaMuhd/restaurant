"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme.theme === "dark";

  return (
    <>
      <section className="relative">
        <div className="max-w-7xl mx-auto py-16 lg:flex lg:items-center lg:justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-11">
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight">
              We provide the <br />
              <span>best food for you</span>
            </h1>

            <p
              className={`text-base max-w-md ${isDark ? "text-gray-300" : "text-gray-600"}`}
            >
              Discover a world of flavor where tradition meets creativity. From
              locally sourced ingredients to globally inspired dishes, we craft
              meals that nourish, comfort, and excite. Start your taste journey
              with us.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <Button>Menu</Button>
              <Button variant="secondary">Book a table</Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-6 items-center">
              {["facebook", "twitter", "instagram"].map((platform) => (
                <a key={platform} href="#" aria-label={platform}>
                  <div className="w-10 h-10 border border-gray-500 bg-white rounded-full flex items-center justify-center hover:shadow-md transition">
                    <Image
                      src={`/images/${platform}.png`}
                      alt={`${platform} icon`}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-12 lg:mt-0 lg:w-1/2 flex justify-end">
            {/* Background Image */}
            <div className="relative rounded-tl-[90px] rounded-br-[90px] rounded-[40px] w-[500px] h-[560px] overflow-hidden z-10">
              <Image
                src="/images/interior.png"
                alt="restaurant interior"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlapping Dish */}
            <div className="absolute bottom-[-5px] left-[-70px] w-[300px] h-[300px] z-20 animate-slowspin">
              <Image
                src="/images/dish.png"
                alt="dish"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
