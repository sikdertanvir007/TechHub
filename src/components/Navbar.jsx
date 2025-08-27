import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 shadow-lg sticky top-0 z-50">
      {/* Mobile menu dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white hover:bg-white/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-64 p-3 shadow-xl border border-gray-100">
           <Link href="/products">
            <li>
              
              <a className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200">
                Products
              </a>
              
            </li>
            </Link>
          </ul>
        </div>
        
        {/* Logo and Brand Name */}
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

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        
            <Link href="/products">
              <div className="text-white hover:text-gray-200 hover:bg-white/20 rounded-lg font-medium px-4 py-2 transition-all duration-200 cursor-pointer">
                <span className="flex items-center gap-2">
                 
                  Products
                  
                </span>
              </div>
             </Link>
            
          
      </div>

      {/* Login Button */}
      <div className="navbar-end">
        <a className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  bg-white text-blue-600 hover:bg-gray-100 border-none font-medium px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;