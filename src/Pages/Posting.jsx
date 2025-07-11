import React from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
const images = [
  "src/assets/images/1st.png",
  "src/assets/images/2nd.png",
  "src/assets/images/3rd.png",
  "src/assets/images/4th.png",
];

const Posting = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10  rounded-xl shadow-md  bg-[#ffffff] flex flex-col sm:flex-row gap-6">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="src/assets/images/left.png"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">Username</p>
            <p className="text-sm text-gray-500">Post event name</p>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-1 w-[400px]">
          Fusce adipiscing nunc et tellus eu, tristique sodales sit aliquet.
        </h2>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <FiCalendar className="mr-1" /> 10/07/2025
        </div>
        <p className="text-gray-600 text-sm mb-2 w-110">
          Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
          Senectus gravida sed interdum pretium at quam morbi. Nunc, libero nam
          cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. Ut
          vitae dolor fringilla urna eget aliquet.
        </p>
        <p className="text-gray-600 text-sm mb-3 w-110">
          Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem
          faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor
          fringilla urna eget aliquet.
        </p>
        <div className="flex gap-5 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <FaHeart /> 10
          </span>
          <span className="flex items-center gap-1">
            <FaComment /> 3
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full sm:w-64">
        {images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={`${img}?w=500&q=100`}
            alt={`Event ${index + 1}`}
            className="h-auto object-cover rounded-lg"
          />
        ))}
        <div className="relative  rounded-lg overflow-hidden">
          <img
            src={`${images[3]}?w=400&q=80`}
            alt="More"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-sm font-semibold">
            +15
            <span className="text-xs font-normal">more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posting;
