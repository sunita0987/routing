import React, { useState } from "react";
import userImg from "../assets/images/user.png";
import eventImg from "../assets/images/follow.png";
import { Link } from "react-router-dom";
const ImageUpload = () => {
  return (
    <div className="p-6 md:p-10">
      <div className="text-gray-500 text-sm mb-4"></div>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src={userImg}
          alt="User"
          className="w-100 h-100 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <Link to="/" className="hover:underline text-[#000000] opacity-70">
            Home
          </Link>
          &gt;
          <Link to="/feed" className="hover:underline text-[#000000] opacity-70 ">
            Feed
          </Link>
          <h2 className="text-3xl font-bold mb-2">Jhone Doe</h2>
          <p className="text-gray-600 mb-4">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>
          <div>
            <h3 className="text-lg font-semibold mb-2">Following Events:</h3>
            <div className="flex gap-4 flex-wrap">
              {[1, 2].map((event, i) => (
                <div
                  key={i}
                  className="w-40 bg-white rounded-xl shadow-sm  p-2"
                >
                  <img
                    src={eventImg}
                    alt="Event"
                    className="w-full h-24 rounded-md object-cover"
                  />
                  <h4 className="mt-2 text-sm font-bold">Augue etiam</h4>
                  <p className="text-xs text-gray-500">
                    Duis ut diam quam nulla porttitor massa id neque.
                  </p>
                </div>
              ))}
              <div className="w-20 h-24 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-xl text-lg font-semibold">
                +15
                <br />
                <span className="text-sm font-normal">more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageUpload;
