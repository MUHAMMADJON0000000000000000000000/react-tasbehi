import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-[#1e1f26] text-white">
        <header className="flex items-center justify-between px-10 py-4 bg-[#20232a]">
          <div className="flex items-center gap-2">
            <img src={reactLogo} alt="React Logo" className="w-8 h-8" />
            <span className="text-gray-300 text-sm">v19.2</span>
          </div>

          <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
            <a href="#" className="hover:text-white">
              Learn
            </a>
            <a href="#" className="hover:text-white">
              Reference
            </a>
            <a href="#" className="hover:text-white">
              Community
            </a>
            <a href="#" className="hover:text-white">
              Blog
            </a>
          </nav>
        </header>

        <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
          <img src={reactLogo} alt="React Logo" className="w-24 h-24 mb-6" />

          <h1 className="text-5xl font-bold mb-4">React</h1>

          <p className="text-gray-400 text-xl mb-8 max-w-2xl">
            The library for web and native user interfaces
          </p>

          <div className="flex gap-4">
            <button className="bg-sky-500 hover:bg-sky-400 text-black font-semibold px-6 py-3 rounded-full transition">
              Learn React
            </button>

            <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-full transition">
              API Reference
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
