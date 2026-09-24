import React from 'react';
import logoText from '../assets/logo-text.png';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-b border-slate-100">
      <div className="flex items-center gap-2">
        <img src={logoText} alt="Dev Stack Logo" className="h-8 object-contain" />
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
        <a href="" className="text-pink-500 hover:text-pink-600">Home</a>
        <a href="" className="hover:text-slate-900">Technologies</a>
        <a href="" className="hover:text-slate-900">Projects</a>
        <a href="" className="hover:text-slate-900">About</a>
        <a href="" className="hover:text-slate-900">Contact</a>
      </nav>

      <div className="flex items-center gap-4 text-sm font-medium">
        <a href="" className="text-slate-600 hover:text-slate-900">Sign In</a>
        <button className="bg-pink-600 hover:bg-pink-600 text-white px-5 py-2 rounded-full font-semibold transition-colors">
          Sign Up
        </button>
        
      </div>
    </header>
  );
};