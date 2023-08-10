import React from "react";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    name: "Building ios15 App",
    author: "Tom Collins",
    category: "test",
    description: "test",
    duration: "1h 17min",
    level: "test",
    price: 24,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/4f91c603-603d-44e2-ab35-65be1763f022.jpg",
    rate: 4.6,
    value: 11,
    content: [
      { name: "Introduction", videos: 1 },
      { name: "1. Software setup", videos: 3 },
      { name: "2. UI Fundamentals", videos: 6 },
      { name: "3. Testing and Finishing", videos: 2 },
      { name: "Skill Test", videos: 1 },
    ],
  },
  {
    name: "Becoming a Photographer",
    author: "Clara Manning",
    value: 69,
    category: "test",
    description: "test",
    rate: 5.0,
    duration: "2h",
    price: 24,
    level: "test",
    content: [
      { name: "Introduction", videos: 1 },
      { name: "1. Camera Configuration", videos: 4 },
      { name: "2. Exposures", videos: 7 },
      { name: "3. Photo Composition", videos: 7 },
      { name: "Skill Test", videos: 3 },
    ],
    image:
      "https://www.nyip.edu/media/zoo/images/3-ways-to-become-a-better-photographer-1_19a9ab40eb62ec202806518ffdb67b08.jpg",
  },
  {
    name: "Design Thinking 2.0",
    author: "Chris Kinley",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg",
  },
  {
    name: "Product Photography",
    author: "Lena Gold",
    value: 11,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/937fc2b0-e1c5-4a5a-93f7-34d23cd5ca6d.jpg",
  },
  {
    name: "Learn how to make portraits",
    author: "Maria Silver",
    value: 27,
    image:
      "https://i.etsystatic.com/21944704/r/il/2a028b/3175957310/il_fullxfull.3175957310_3802.jpg",
  },
  {
    name: "Typeface Design",
    author: "Gary Saltz",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/8a82fb6d-e077-4930-b16d-a47ec1537f4a.jpg",
  },
  {
    name: "Excel: Formulas and functions",
    author: "Mike Curtis",
    value: 27,
    image:
      "https://assets.api.uizard.io/api/cdn/stream/6b7ace23-9ec2-4b4e-963f-c0097a8bba79.jpg",
  },
];

const firstPage = () => {
  return (
    <div className="flex bg-gray-300 w-screen h-screen">
      <div className="w-1/2 flex items-center justify-center h-screen">
        <div className="flex flex-col mx-auto w-3/6 h-54">
          <div className="flex text-blue-500">
            <div className="text-blue-500 hover:text-blue-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 mx-auto"
              >
                <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
              </svg>
            </div>
            <p className="font-semibold content-center text-lg text-center m-2">
              LearnU
            </p>
          </div>
          <div className="mt-14">
            <h2 className="text-5xl font-semibold tracking-wide">
              Discover Passion
            </h2>
            <p className="text-xl font-semibold text- tracking-norml mt-8">
              Find out what topics you find interesting, learn a new skills &
              connect with people that are Passion about similar topic
            </p>
          </div>
          <div>
            <Link href="/signin">
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-lg p-1 font-bold w-52 h-12 mt-10 tracking-wide rounded-xl">
                GET STARTED
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex bg-white rounded-l-[70px] items-center justify-center h-screen w-1/2">
        <Image
          className=""
          src="https://assets.api.uizard.io/api/cdn/stream/a8ce660d-47da-404a-b3b3-63ca6970ddcf.png"
          width={500}
          height={500}
          alt="front page"
        />
      </div>
    </div>
  );
};

export default firstPage;
export { courses };
