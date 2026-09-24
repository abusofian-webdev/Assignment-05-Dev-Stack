import React from 'react';
import logoText from '../assets/logo-text.png';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logoText} alt="Dev Stack Logo" className="h-6 object-contain mb-3" />
          <p className="text-xs text-slate-500 leading-relaxed">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex gap-3 text-xs text-slate-400 mt-4">
            <a href="" className="hover:text-slate-600">GitHub</a>
            <a href="" className="hover:text-slate-600">Twitter</a>
            <a href="" className="hover:text-slate-600">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Product</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="" className="hover:text-slate-900">Home</a></li>
            <li><a href="" className="hover:text-slate-900">Technologies</a></li>
            <li><a href="" className="hover:text-slate-900">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Company</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="" className="hover:text-slate-900">About</a></li>
            <li><a href="" className="hover:text-slate-900">Contact</a></li>
            <li><a href="" className="hover:text-slate-900">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase mb-3">Legal</h4>
          <ul className="space-y-2 text-xs text-slate-500">
            <li><a href="" className="hover:text-slate-900">Privacy Policy</a></li>
            <li><a href="" className="hover:text-slate-900">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="" className="hover:text-slate-600">Privacy</a>
          <a href="" className="hover:text-slate-600">Terms</a>
        </div>
      </div>
    </footer>
  );
};