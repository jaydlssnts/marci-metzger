import { useState } from "react";
import { Icon } from "@iconify/react";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      image: "carousel1.jpeg",
      title: "Top Residential Sales Last 5 Years",
      text: `We helped nearly 90 clients in 2021, and closed 28.5 million in sales!

Our team works hard every day to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.`,
    },
    {
      id: 2,
      image: "carousel2.jpeg",
      title: "Don't Just List it... Get it SOLD!",
      text: `We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.`,
    },
    {
      id: 3,
      image: "carousel3.jpeg",
      title: "Guide to Buyers",
      text: `Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!`,
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="relative flex justify-center my-10">
      {/* Left Arrow */}
      {current > 0 && (
        <button
          onClick={prevSlide}
          className="btn btn-circle absolute left-0 top-1/2 -translate-y-1/2 z-10"
        >
          <Icon icon="tabler:circle-arrow-left-filled" width="28" height="28" />
        </button>
      )}

      {/* Slide */}
      <div className="w-full lg:w-4/5 xl:w-3/4 mx-auto rounded-lg overflow-hidden shadow-lg bg-gray-700">
        <img
          src={slides[current].image}
          alt={slides[current].title}
          className="w-full h-auto object-cover"
        />
        <div className="p-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{slides[current].title}</h2>
          <p className="text-lg whitespace-pre-line">{slides[current].text}</p>
        </div>
      </div>

      {/* Right Arrow */}
      {current < slides.length - 1 && (
        <button
          onClick={nextSlide}
          className="btn btn-circle absolute right-0 top-1/2 -translate-y-1/2 z-10"
        >
          <Icon
            icon="tabler:circle-arrow-right-filled"
            width="28"
            height="28"
          />
        </button>
      )}
    </div>
  );
}
