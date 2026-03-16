import React from 'react';
import Link from 'next/link';

const ApplyNowButton = () => {
  return (
    <Link
      href="/apply"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center h-14 px-6 bg-[#B22222] text-white rounded-full shadow-lg hover:bg-[#8B0000] transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-red-300 font-bold uppercase tracking-wider text-sm border-2 border-white/20"
      aria-label="Apply Now"
    >
      <span className="relative z-10 flex items-center gap-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="animate-pulse"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        Apply Now
      </span>
      <span className="absolute w-full h-full rounded-full bg-red-600 animate-ping opacity-25 -z-10"></span>
    </Link>
  );
};

export default ApplyNowButton;
