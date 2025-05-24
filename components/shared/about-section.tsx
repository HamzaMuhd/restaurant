"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AboutSection = () => {
  const theme = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme.theme === "dark";

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Image */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
          <Image
            src="/images/about.png"
            alt="Delicious Dish"
            className="object-contain"
            width={768}
            height={667}
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Welcome to Our <br />
            <span className="text-primary">Restaurant</span>
          </h1>

          <p
            className={`text-base max-w-md mx-auto lg:mx-0 ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            At Restaurant, we believe food should be more than just a meal, it
            should be an experience. Our kitchen blends tradition with
            creativity, serving dishes made from fresh, carefully selected
            ingredients.
          </p>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <Button>Menu</Button>
            <Button variant="secondary">Book a table</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
