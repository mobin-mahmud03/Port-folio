import React from 'react';
import { Sparkles, Download, ArrowDown, Code2, Database, ShieldCheck } from 'lucide-react';
import portraitImg from '../assets/portait.png';

interface HeroProps {
  resumeUrl?: string;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  resumeUrl = 'https://drive.google.com/file/d/1uxALrEJ5UvhPQpCvDBH-oixQ2YiPBd6X/view?usp=drive_link', 
  onOpenResume 
}) => {
  return (
    <section className="relative w-full pt-6 pb-12 lg:pb-0 overflow-hidden border-b border-[#221c19]">
      {/* Background radial crimson haze */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d83a34]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Massive Editorial Headline: PORTFOLIO */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-editorial-title text-[18vw] sm:text-[16vw] lg:text-[195px] leading-[0.82] uppercase text-center text-[#f2ece2] tracking-normal select-none transition-all">
          PORTFOLIO
        </h1>
      </div>

      {/* Hero 3-Column Core Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-6 items-center">
          
          {/* Left Column: Specialization & Philosophy */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 order-2 lg:order-1 lg:pb-8">
            {/* Disciplines */}
            <div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#f2ece2] tracking-tight uppercase">
                FULL-STACK <span className="text-[#d83a34]">//</span> WEB <span className="text-[#d83a34]">//</span> SYSTEMS
              </h2>
              <div className="mt-3 space-y-1.5 text-xs font-mono-code uppercase tracking-widest text-[#a89e92]">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d83a34] rounded-full"></span>
                  Frontend Architecture
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d83a34] rounded-full"></span>
                  REST & Express APIs
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#d83a34] rounded-full"></span>
                  Database & Better Auth
                </p>
              </div>
              <div className="w-12 h-[2px] bg-[#d83a34] mt-5"></div>
            </div>

            {/* Quote Card */}
            <div className="relative p-5 rounded-lg border border-[#2e2622] bg-[#14100e]/80 backdrop-blur-sm">
              <span className="text-4xl font-serif text-[#d83a34] leading-none select-none block -mb-2">“</span>
              <p className="text-xs sm:text-sm font-medium tracking-wide uppercase text-[#e4ded5] leading-relaxed">
                I design and engineer digital experiences that are robust, intuitive, beautiful and impactful.
              </p>
              
              {/* Stylized Handwritten Signature */}
              <div className="mt-4 flex items-center justify-between pt-2 border-t border-[#221c19]">
                <svg className="w-32 h-9 text-[#d83a34]" viewBox="0 0 200 60" fill="none" stroke="currentColor">
                  <path d="M10,45 C30,10 45,50 65,20 C85,-5 95,55 120,25 C145,-5 160,50 190,30" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M40,35 Q90,38 170,32" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-mono-code uppercase text-[#8e857c]">Mobin M.</span>
              </div>
            </div>
          </div>

          {/* Center Column: Portrait with Crimson Radial Eclipse */}
          <div className="lg:col-span-5 flex flex-col items-center justify-end relative order-1 lg:order-2 self-end">
            
            {/* Portrait Wrapper */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px] xl:max-w-[500px] h-[460px] sm:h-[520px] lg:h-[560px] xl:h-[600px] flex items-end justify-center">

              {/* Rotating Circular Stamp Badge (Positioned on the Right Side of Portrait) */}
              <div className="absolute top-2 sm:top-4 lg:top-6 -right-2 sm:-right-4 lg:-right-8 xl:-right-10 z-20 pointer-events-none">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[8.5px] uppercase font-mono-code fill-[#d83a34] tracking-[0.22em] font-semibold">
                      <textPath href="#circlePath" startOffset="0%">
                        • FULL STACK • CLEAN CODE • ARCHITECTURE •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d83a34]" />
                  </div>
                </div>
              </div>

              {/* Crimson Eclipse Disc Backdrop */}
              <div className="absolute top-8 sm:top-10 lg:top-12 left-1/2 -translate-x-1/2 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-b from-[#a7231e] via-[#d83a34] to-[#771511] opacity-90 shadow-[0_0_90px_rgba(216,58,52,0.45)] pointer-events-none"></div>

              {/* Fixed Portrait Photo */}
              <div className="relative z-10 w-full h-full flex items-end justify-center">
                <img
                  src={portraitImg}
                  alt="Mobin Mahmud"
                  className="w-full h-full object-contain object-bottom filter contrast-105 select-none pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Name, Bio, Stats, and Resume Button */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 order-3 lg:pb-8">
            <div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#f2ece2] tracking-tight uppercase">
                MOBIN MAHMUD
              </h2>
              <p className="text-xs font-mono-code text-[#d83a34] uppercase tracking-widest mt-1 font-semibold">
                FULL-STACK DEVELOPER & ARCHITECT
              </p>
              
              <p className="text-xs sm:text-sm text-[#b0a69a] mt-4 leading-relaxed font-normal">
                I am a full-stack engineer crafting clean, resilient and high-performance digital systems. I specialize in building complete web products with TypeScript, React, Next.js, Node.js, and secure auth.
              </p>
            </div>

            {/* 3 Stats Boxes */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-lg border border-[#2e2622] bg-[#14100e] text-center hover:border-[#d83a34]/50 transition-colors">
                <div className="flex justify-center mb-1 text-[#d83a34]">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-xl font-display font-bold text-[#f2ece2]">3+</div>
                <div className="text-[9px] font-mono-code uppercase tracking-wider text-[#8e857c] mt-0.5">Years Exp</div>
              </div>

              <div className="p-3 rounded-lg border border-[#2e2622] bg-[#14100e] text-center hover:border-[#d83a34]/50 transition-colors">
                <div className="flex justify-center mb-1 text-[#d83a34]">
                  <Database className="w-4 h-4" />
                </div>
                <div className="text-xl font-display font-bold text-[#f2ece2]">20+</div>
                <div className="text-[9px] font-mono-code uppercase tracking-wider text-[#8e857c] mt-0.5">Projects</div>
              </div>

              <div className="p-3 rounded-lg border border-[#2e2622] bg-[#14100e] text-center hover:border-[#d83a34]/50 transition-colors">
                <div className="flex justify-center mb-1 text-[#d83a34]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xl font-display font-bold text-[#f2ece2]">16+</div>
                <div className="text-[9px] font-mono-code uppercase tracking-wider text-[#8e857c] mt-0.5">Stack Tools</div>
              </div>
            </div>

            {/* Resume Call To Action Button (Prominent Hero CTA) */}
            <div className="pt-2">
              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group flex items-center justify-between px-5 py-3.5 bg-[#161210] hover:bg-[#d83a34] border border-[#d83a34]/60 hover:border-[#d83a34] text-[#f2ece2] rounded-xl transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#d83a34]/25"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#221c19] group-hover:bg-white/10 text-[#d83a34] group-hover:text-[#f2ece2] transition-colors">
                      <Download className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-mono-code uppercase tracking-wider font-bold">Download CV / Resume</div>
                      <div className="text-[10px] text-[#8e857c] group-hover:text-white/80 font-mono-code">View & Download PDF</div>
                    </div>
                  </div>
                  <ArrowDown className="w-4 h-4 text-[#d83a34] group-hover:text-[#f2ece2] transition-transform group-hover:translate-y-1" />
                </a>
              ) : (
                <button
                  onClick={onOpenResume}
                  className="w-full group flex items-center justify-between px-5 py-3.5 bg-[#161210] hover:bg-[#d83a34] border border-[#d83a34]/60 hover:border-[#d83a34] text-[#f2ece2] rounded-xl transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-[#d83a34]/25"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#221c19] group-hover:bg-white/10 text-[#d83a34] group-hover:text-[#f2ece2] transition-colors">
                      <Download className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-mono-code uppercase tracking-wider font-bold">Download CV / Resume</div>
                      <div className="text-[10px] text-[#8e857c] group-hover:text-white/80 font-mono-code">PDF & Interactive Profile</div>
                    </div>
                  </div>
                  <ArrowDown className="w-4 h-4 text-[#d83a34] group-hover:text-[#f2ece2] transition-transform group-hover:translate-y-1" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
