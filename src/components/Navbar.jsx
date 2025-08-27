"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session, status } = useSession();

  return (
    <div className="navbar bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors duration-200 px-2"
        >
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
            TechHub
          </span>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <Link
          href="/products"
          className="text-white hover:text-gray-200 hover:bg-white/20 rounded-lg font-medium px-4 py-2 transition-all duration-200 cursor-pointer flex items-center gap-2"
        >
          Products
        </Link>
      </div>

      {/* Right Side (Auth Buttons) */}
      <div className="navbar-end">
        {status === "loading" && (
          <span className="text-white animate-pulse">Loading...</span>
        )}

        {status === "authenticated" ? (
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <button
              onClick={() => signOut()}
              className="btn bg-white text-blue-600 hover:bg-gray-100 border-none font-medium px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login/components/"
            
            className="btn bg-white text-blue-600 hover:bg-gray-100 border-none font-medium px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
