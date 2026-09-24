import React from 'react';
import heroImg from '../assets/banner-stack.png';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          Build Your Ideal <br />
          <span className="bg-gradient-to-r from-[#e1523d] via-[#8b3d9c] to-[#3a5bb7] bg-clip-text text-transparent">
                 Development Stack
            </span>
        </h1>
        <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-lg">
          Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-gradient-to-r from-[#d85852] via-[#a34cae] to-[#714fb2] hover:opacity-95 text-white px-6 py-3 rounded-xl font-medium shadow-sm transition-all">
                 Explore Technologies
            </button>
          <button className="text-slate-600 hover:text-slate-900 font-medium px-4 py-3 transition-colors">
                Learn More
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={heroImg} alt="Dev Stack Illustration" className="w-full max-w-md object-contain drop-shadow-xl" />
      </div>
    </section>
  );
};