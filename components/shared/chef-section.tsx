"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

const ChefSection = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme.theme === "dark";

  const features = [
    "Certified world-class culinary team",
    "Fresh ingredients sourced daily",
    "Expertise in international cuisines",
    "Unique fusion of flavor and creativity",
    "Personalized menus for special occasions",
    "Award-winning presentation & service",
  ];

  return (
    <section className="relative py-16">
      {/* Onion SVG Background */}
      <div className="absolute top-0 left-0">
        <Image
          src="/images/onion.svg"
          alt="Onion Left"
          width={120}
          height={120}
        />
      </div>
      <div className="absolute top-0 right-0">
        <Image
          src="/images/onion.svg"
          alt="Onion Right"
          width={120}
          height={120}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl font-bold">Our Expert Chefs</h2>
          <p
            className={`text-base max-w-md mx-auto lg:mx-0 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Meet the culinary artists behind our signature dishes. Our chefs
            blend passion, precision, and creativity to deliver an unforgettable
            dining experience every plate, every time.
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-4 text-sm text-left">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-2 py-3">
                <CheckCircle className="text-orange-500 mt-1" size={18} />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 pt-4">
            <Button>Menu</Button>
            <Button variant="secondary">Book a table</Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative rounded-full overflow-hidden">
            <Image
              src="/images/chef.png"
              alt="Chef"
              width={450}
              height={450}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
