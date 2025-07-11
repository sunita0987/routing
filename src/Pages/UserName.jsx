import React from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaPlane,
  FaVideo,
} from "react-icons/fa";

export default function UserName() {
  return (
    <div className="p-6 md:p-10">
      <div className="text-gray-500 text-sm mb-4"></div>
      <div className="flex flex-col md:flex-row items-start gap-8">
        <img
          src="src/assets/images/2ndsec..png"
          alt="User"
          className="w-100 h-100 rounded-2xl object-cover"
        />
        <div className="flex-1">
          <Link to="/" className="hover:underline text-[#000000] opacity-70">
            Home
          </Link>
          &gt;
          <Link
            to="/feed"
            className="hover:underline text-[#000000] opacity-70 "
          >
            UserName
          </Link>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-[#000000] mb-2">Jhone Doe</h1>
            <div className="flex ml-80 mt-[-50px] gap-4">
              <button className="bg-[#2C49FE1A] text-sm text-black font-semibold px-4 py-2 rounded-3xl shadow hover:bg-[#2C49FE] hover:text-[#ffffff] cursor-pointer">
                Unshow Journey of Feed
              </button>
              <button className="bg-[#2C49FE] text-sm text-[#ffffff] font-semibold px-4 py-2 rounded-3xl shadow hover:bg-[#2C49FE1A] hover:text-[#000000] cursor-pointer">
                Show Journey of Feed
              </button>
            </div>
            <p className="text-gray-600 mb-4 mt-10 w-[700px]">
              Dictumst vulputate eget quisque iaculis hendrerit quis ut
              fringilla. Senectus gravida sed interdum pretium at quam morbi.
              Nunc, libero nam cursus sem faucibus urna. Hendrerit vulputate in
              duis donec sit. Ut vitae dolor fringilla urna eget aliquet.
            </p>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> 11/07/2025
              </span>
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> Hisar
              </span>
              <span className="flex items-center gap-1">
                <FaUsers /> 1,080
              </span>
              <span className="flex items-center gap-1">
                <FaPlane /> 1,080
              </span>
              <span className="flex items-center gap-1">
                <FaVideo /> 1,080
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
