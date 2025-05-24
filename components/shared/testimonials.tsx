"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Star } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative py-16">
      {/* SVG Background */}
      <div className="absolute bottom-0 left-0 h-full pointer-events-none">
        <Image
          src="/images/pan.svg"
          alt="Pan illustration"
          width={400}
          height={400}
        />
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Our Happy Customers</h2>
        <p
          className={`mt-4 text-sm md:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          Discover why people love dining with us — hear from our amazing
          guests!
        </p>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 mt-24">
        <Card className="w-full max-w-md text-center shadow-md rounded-2xl px-6 pt-12 pb-8 relative">
          {/* Avatar */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <Image
              src="/images/person.png"
              alt="Ama Ampomah"
              width={64}
              height={64}
              className="rounded-full border-1"
            />
          </div>

          <CardContent>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
            <p
              className={`${isDark ? "text-gray-300" : "text-gray-600"} text-sm leading-relaxed mb-4`}
            >
              “The food was absolutely amazing and the service was impeccable.
              Definitely coming back again!”
            </p>
            <h4 className="font-semibold">Ama Ampomah</h4>
            <p className="text-xs text-gray-500">CEO & Founder Inc</p>
          </CardContent>
        </Card>

        {/* Add more Cards here if needed */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
