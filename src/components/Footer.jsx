import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import React from 'react';
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-20 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="src/assets/images/logo1.png" alt="logo" className="" />
            {/* <h2 className="text-xl font-bold text-blue-400">Events<span className="text-cyan-400">Free</span></h2> */}
          </div>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum suscipit.
          </p>
          <div className="flex space-x-4 mt-4 text-lg text-gray-400">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebook className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">SERVICES</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li className="cursor-pointer hover:text-[#ffffff]"> About</li>
            <li className="cursor-pointer hover:text-[#ffffff]">News</li>
            <li className="cursor-pointer hover:text-[#ffffff]">uliamcorper</li>
            <li className="cursor-pointer hover:text-[#ffffff]">Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">EVENTS</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li className="cursor-pointer hover:text-[#ffffff]">uliamcorper</li>
            <li className="cursor-pointer hover:text-[#ffffff]">uliamcorper</li>
            <li className="cursor-pointer hover:text-[#ffffff]">uliamcorper</li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">GALLERY</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="src/assets/images/gallery1.png" alt="event" className="w-full h-16 object-cover" />
            <img src="src/assets/images/gallery2.png" alt="event" className="w-full h-16 object-cover" />
            <img src="src/assets/images/gallery3.png" alt="event" className="w-full h-16 object-cover" />
            <img src="src/assets/images/gallery4.png" alt="event" className="w-full h-16 object-cover" />
            <img src="src/assets/images/gallery5.png" alt="event" className="w-full h-16 object-cover" />
            <button className="bg-blue-700 text-white text-xs px-2 py-1">Show More</button>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-gray-500 hover:text-[#ffffff] cursor-pointer">
        © Credits of companyName belong to companyName.
      </div>
    </footer>
  );
}
