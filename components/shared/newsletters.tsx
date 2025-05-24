"use client";

import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="w-full py-12 flex justify-center items-center">
      <div
        className="w-full max-w-6xl h-60 md:h-[407px] bg-cover bg-center rounded-3xl flex flex-col justify-center items-center px-6 md:px-12 text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      >
        <div className="z-10">
          <h2 className="text-2xl md:text-5xl font-bold mb-12 drop-shadow-md text-white">
            Get a Promo Code by <br /> Subscribing To our Newsletter
          </h2>

          <form className="flex w-full rounded-2xl bg-white px-1 py-1 overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 text-sm md:text-base outline-none border-none bg-transparent"
            />
            <div className="p-1">
              <Button type="submit" variant="secondary" className="rounded-xl">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
