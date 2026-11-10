import React from 'react';
import { FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  resumeUrl?: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  resumeUrl = 'https://drive.google.com/file/d/1uxALrEJ5UvhPQpCvDBH-oixQ2YiPBd6X/view?usp=drive_link', 
  onOpenResume 
}) => {
  return (
    <header className="w-full border-b border-[#221c19] bg-[#0b0908]/90 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Brand / Category */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] sm:text-xs font-mono-code uppercase tracking-[0.25em] text-[#8e857c] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#d83a34] rounded-full inline-block"></span>
            FULL-STACK ENGINEERING // 2026
          </span>
        </div>

        {/* Right: Availability & Resume Button */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Availability Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2e2622] bg-[#14100e] text-xs font-mono-code text-[#f2ece2]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d83a34] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d83a34]"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#d5cdc2]">Available For Work</span>
          </div>

          {/* Resume Link Button */}
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono-code uppercase tracking-wider bg-[#191412] hover:bg-[#d83a34] border border-[#d83a34]/40 hover:border-[#d83a34] text-[#f2ece2] rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#d83a34]/20"
            >
              <FileText className="w-3.5 h-3.5 text-[#d83a34] group-hover:text-[#f2ece2] transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <button
              onClick={onOpenResume}
              className="group flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono-code uppercase tracking-wider bg-[#191412] hover:bg-[#d83a34] border border-[#d83a34]/40 hover:border-[#d83a34] text-[#f2ece2] rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#d83a34]/20"
            >
              <FileText className="w-3.5 h-3.5 text-[#d83a34] group-hover:text-[#f2ece2] transition-colors" />
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
