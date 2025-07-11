import React from "react";
import { Link } from "react-router-dom";

const EventsBanner = () => {
  return (
    <div className="relative w-full h-[300px]">
      <img
        src="src/assets/images/events.png"
        alt="Event Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" />
      <div className="relative z-10 flex flex-col justify-center h-full px-8 text-white">
        <div className="flex-1 mt-50">
          <Link to="/" className="hover:underline text-[#ffffff] opacity-70">
            Home
          </Link>
          &gt;
          <Link
            to="/feed"
            className="hover:underline text-[#ffffff] opacity-70 "
          >
            Events
          </Link>
          <h1 className="text-4xl font-bold">Events</h1>
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
