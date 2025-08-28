"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      {/* Logo */}
      <div className="navbar-start">
        {/* Mobile Menu Button */}
        <div className="dropdown lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="btn btn-ghost text-white hover:bg-white/20 p-2 mr-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-white/95 backdrop-blur-sm rounded-box w-52 border border-white/20">
              <li>
                <Link
                  href="/products"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium px-4 py-3 transition-all duration-200 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard/add-product"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium px-4 py-3 transition-all duration-200 flex items-center gap-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Product
                </Link>
              </li>
            </ul>
          )}
        </div>

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
          {/* Hide TechHub text on small devices */}
          <span className="hidden sm:inline text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
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
        <Link
          href="/dashboard/add-product"
          className="text-white hover:text-gray-200 hover:bg-white/20 rounded-lg font-medium px-4 py-2 transition-all duration-200 cursor-pointer flex items-center gap-2"
        >
          Add Product
        </Link>
      </div>

      {/* Right Side (Auth Buttons) */}
      <div className="navbar-end">
        {status === "loading" && (
          <span className="text-white animate-pulse">Loading...</span>
        )}

        {status === "authenticated" ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <img
                src={session.user.image}
                alt={session.user.name}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content mt-3 p-2 shadow-xl bg-white/95 backdrop-blur-sm rounded-box w-40 border border-white/20"
            >
              <li>
                <button
                  onClick={() => signOut()}
                  className="btn bg-white text-blue-600 hover:bg-gray-100 border-none font-medium px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/login/components"
            className="btn bg-white text-blue-600 hover:bg-gray-100 border-none font-medium px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
