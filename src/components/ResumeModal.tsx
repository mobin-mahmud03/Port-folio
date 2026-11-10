import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ 
  isOpen, 
  onClose, 
  resumeUrl = 'https://drive.google.com/file/d/1uxALrEJ5UvhPQpCvDBH-oixQ2YiPBd6X/view?usp=drive_link' 
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#120f0e] border border-[#d83a34]/40 rounded-xl shadow-2xl flex flex-col overflow-hidden text-[#f2ece2]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2420] bg-[#161210]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d83a34] animate-pulse"></span>
            <h3 className="font-display font-bold text-lg tracking-wide uppercase">Curriculum Vitae — Mobin Mahmud</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code uppercase bg-[#1f1917] hover:bg-[#d83a34] text-[#f2ece2] rounded transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#8e857c] hover:text-[#f2ece2] hover:bg-[#2a2420] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Printable Resume */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-sm">
          {/* Resume Header */}
          <div className="border-b border-[#2a2420] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold font-display uppercase tracking-tight text-[#f2ece2]">Mobin Mahmud</h1>
              <p className="text-base text-[#d83a34] font-medium tracking-wide mt-1">Full-Stack Developer & Software Architect</p>
              <p className="text-xs text-[#8e857c] mt-2 max-w-md">
                Specialized in building performant, resilient end-to-end web applications with modern TypeScript, React, Next.js, Node.js, and secure authentication flows.
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-xs text-[#8e857c] font-mono-code">
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d83a34]" /> mobin.mahmud.dev@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-[#d83a34]" /> github.com/mobin-mahmud03
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d83a34]" /> Dhaka, Bangladesh (Remote Ready)
              </span>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d83a34] font-mono-code mb-2">Technical Proficiency</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <div className="p-3 bg-[#181412] rounded border border-[#2a2420]">
                <span className="text-[#8e857c] block mb-1 font-semibold">Languages & Frontend:</span>
                <span className="text-[#f2ece2]">HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS</span>
              </div>
              <div className="p-3 bg-[#181412] rounded border border-[#2a2420]">
                <span className="text-[#8e857c] block mb-1 font-semibold">Backend, DB & Cloud:</span>
                <span className="text-[#f2ece2]">Node.js, Express.js, MongoDB, MySQL, Better Auth, Git, GitHub, Vercel, Netlify</span>
              </div>
            </div>
          </div>

          {/* Featured Projects in Resume */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#d83a34] font-mono-code mb-3">Key Projects</h4>
            <div className="space-y-4">
              <div className="p-4 bg-[#181412] rounded-lg border border-[#2a2420]">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-sm text-[#f2ece2]">KindredActs — Social Dev & Community Event Platform</h5>
                    <p className="text-xs text-[#8e857c] font-mono-code mt-0.5">Next.js • TypeScript • Better Auth • MongoDB • Tailwind CSS</p>
                  </div>
                  <a
                    href="https://github.com/mobin-mahmud03/kinderacts-client"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-[#d83a34] hover:underline"
                  >
                    Repository <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc list-inside text-xs text-[#8e857c] mt-2.5 space-y-1">
                  <li>Built responsive community-driven event management portals with Next.js and Tailwind CSS.</li>
                  <li>Integrated Better Auth for multi-tenant sessions, secure event organizer roles, and OAuth.</li>
                  <li>Engineered high-throughput MongoDB data models with lean schema indexes.</li>
                </ul>
              </div>

              <div className="p-4 bg-[#181412] rounded-lg border border-[#2a2420]">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-sm text-[#f2ece2]">Bazar Dor — Daily Essential Commodity Market Price Tracker</h5>
                    <p className="text-xs text-[#8e857c] font-mono-code mt-0.5">React • Next.js • Express.js • MySQL • Vercel</p>
                  </div>
                  <a
                    href="https://github.com/mobin-mahmud03"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-[#d83a34] hover:underline"
                  >
                    Repository <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <ul className="list-disc list-inside text-xs text-[#8e857c] mt-2.5 space-y-1">
                  <li>Engineered daily price tracking telemetry and commodity price fluctuation monitors.</li>
                  <li>Designed normalized relational database schemas with MySQL for market comparisons.</li>
                  <li>Configured automated testing and deployment workflows on Vercel with GitHub Actions.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#d83a34] font-mono-code mb-2">Core Philosophy</h4>
              <p className="text-xs text-[#8e857c] leading-relaxed">
                Writing clean, self-documenting code with a heavy focus on maintainability, modular separation of concerns, and relentless performance optimization.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#d83a34] font-mono-code mb-2">Availability</h4>
              <p className="text-xs text-[#8e857c] leading-relaxed">
                Open for Full-Stack Developer positions, contract roles, and software architecture collaborations worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#2a2420] bg-[#161210] flex justify-between items-center">
          <span className="text-xs text-[#8e857c] font-mono-code">mobin-mahmud03 // 2026 CV</span>
          {resumeUrl ? (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#d83a34] hover:bg-[#b82e28] text-[#f2ece2] rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          ) : (
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#d83a34] hover:bg-[#b82e28] text-[#f2ece2] rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
