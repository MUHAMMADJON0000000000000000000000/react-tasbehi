import React from "react";
import Logo from "../assets/react.svg";

//// assalom alykum ustoz buni kup funksiyalari ishlamayapdi sababi nima ekanligini tushunmadim va bu kodni to`g`ri ishlashi uchun nima qilishim kerak ekanligini tushuntirib bera olasizmi
function Nav() {
  return (
    <div className="min-h-screen text-white">
      <nav className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <img src={Logo} alt="React Logo" className="w-8 h-8" />
          React
        </div>
        <imput
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white w-[300px  ] px-4 py-2 rounded-lg color-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />

        <ul className="flex gap-[100px] text-gray-300">
          <li className="hover:text-white cursor-pointer">Learn</li>
          <li className="hover:text-white cursor-pointer">Reference</li>
          <li className="hover:text-white cursor-pointer">Community</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center text-center mt-32 px-5">
        <img src={Logo} alt="React Logo" className="w-[200px] h-[150px] mb-6" />
        <h1 className="text-8xl font-bold mb-6">React</h1>

        <p className="text-gray-400 text-5xl  mb-10">
          The library for web and native user interfaces
        </p>

        <div className="flex gap-6">
          <button className="bg-white hover:bg-cyan-400 px-6 py-3 rounded-lg font-semibold">
            Learn React
          </button>

          <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg">
            API Reference
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
