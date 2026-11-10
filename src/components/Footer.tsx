import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  Mail, 
  MapPin, 
  ExternalLink, 
  Sparkles, 
  Copy 
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface FooterProps {
  onShowToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onShowToast }) => {
  const email = 'mobin.mahmud.dev@gmail.com';
  const githubUrl = 'https://github.com/mobin-mahmud03';
  const location = 'Dhaka, Bangladesh // Remote Worldwide';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} copied to clipboard!`);
  };

  return (
    <footer className="w-full py-16 bg-[#0a0807] text-[#f2ece2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: LET'S COLLABORATE */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-wider text-[#f2ece2]">
                LET'S COLLABORATE
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#8e857c] leading-relaxed max-w-md">
                Have an ambitious web application in mind, need a full-stack engineer, or just want to talk tech? I'd love to hear from you.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <button
                onClick={() => copyToClipboard(email, 'Email address')}
                className="group w-full flex items-center justify-between p-3.5 rounded-lg border border-[#221c19] hover:border-[#d83a34]/60 bg-[#120f0e] hover:bg-[#181311] transition-all text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#1d1715] text-[#d83a34] group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#6e665d] block">Email</span>
                    <span className="text-xs sm:text-sm font-mono-code text-[#f2ece2] group-hover:text-[#d83a34] transition-colors">
                      {email}
                    </span>
                  </div>
                </div>
                <Copy className="w-3.5 h-3.5 text-[#6e665d] group-hover:text-[#d83a34] transition-colors" />
              </button>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-lg border border-[#221c19] hover:border-[#d83a34]/60 bg-[#120f0e] hover:bg-[#181311] transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#1d1715] text-[#d83a34] group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#6e665d] block">GitHub Profile</span>
                    <span className="text-xs sm:text-sm font-mono-code text-[#f2ece2] group-hover:text-[#d83a34] transition-colors">
                      github.com/mobin-mahmud03
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#6e665d] group-hover:text-[#d83a34] transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#221c19] bg-[#120f0e]/60 text-xs font-mono-code text-[#a0978d]">
                <div className="p-2 rounded-md bg-[#1d1715] text-[#d83a34]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{location}</span>
              </div>
            </div>
          </div>

          {/* Middle Column: SCAN TO CONNECT (GitHub QR Code Only) */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center p-6 rounded-xl border border-[#2e2622] hover:border-[#d83a34]/50 bg-[#120f0e] transition-all duration-300">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#f2ece2] mb-4">
              SCAN TO CONNECT
            </h4>

            {/* GitHub QR Code Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative p-4 rounded-xl bg-[#f2ece2] border-2 border-[#d83a34] shadow-xl hover:scale-105 transition-transform duration-200 block"
              title="Click to visit GitHub Profile"
            >
              <QRCodeSVG
                value={githubUrl}
                size={140}
                bgColor="#f2ece2"
                fgColor="#0b0908"
                level="Q"
                includeMargin={false}
              />

              {/* Centered GitHub Octocat Icon in QR Code */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-[#0b0908] border-2 border-[#f2ece2] flex items-center justify-center text-[#f2ece2]">
                  <GithubIcon className="w-4 h-4 text-[#f2ece2]" />
                </div>
              </div>
            </a>

            {/* QR Caption */}
            <div className="mt-4 text-center">
              <span className="font-mono-code text-xs font-bold text-[#d83a34] block">
                GITHUB: @mobin-mahmud03
              </span>
              <span className="text-[10px] text-[#6e665d] font-mono-code mt-0.5 block">
                Scan with camera or click to open
              </span>
            </div>
          </div>

          {/* Right Column: Statement & Signature */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-8">
            <div className="flex justify-end">
              <Sparkles className="w-6 h-6 text-[#d83a34]" />
            </div>

            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#f2ece2] leading-tight">
                ARCHITECTING SYSTEMS.<br />
                BUILDING THE WEB.<br />
                DELIVERING VALUE.
              </h2>
            </div>

            {/* Signature & Copyright */}
            <div className="pt-4 border-t border-[#201a17]">
              <svg className="w-40 h-10 text-[#d83a34] mb-2" viewBox="0 0 200 60" fill="none" stroke="currentColor">
                <path d="M10,40 C35,15 50,45 70,25 C90,5 100,50 130,20 C155,5 170,45 195,30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45,35 Q95,40 175,34" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-[11px] font-mono-code text-[#6e665d] uppercase tracking-wider">
                © 2026 Mobin Mahmud. All Rights Reserved.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
