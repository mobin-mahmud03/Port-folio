import React from 'react';

export const AboutAndTools: React.FC = () => {
  const tools = [
    { name: 'HTML5', cat: 'Language', icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', cat: 'Styling', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', cat: 'Core', icon: '⚡', color: '#F7DF1E' },
    { name: 'TypeScript', cat: 'Typing', icon: '🔷', color: '#3178C6' },
    { name: 'Tailwind CSS', cat: 'Styling', icon: '🌊', color: '#06B6D4' },
    { name: 'React.js', cat: 'Frontend', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', cat: 'Framework', icon: '▲', color: '#FFFFFF' },
    { name: 'Node.js', cat: 'Runtime', icon: '🟢', color: '#5FA04E' },
    { name: 'Express.js', cat: 'Backend', icon: '🚂', color: '#CCCCCC' },
    { name: 'MongoDB', cat: 'NoSQL DB', icon: '🍃', color: '#47A248' },
    { name: 'MySQL', cat: 'SQL DB', icon: '🐬', color: '#4479A1' },
    { name: 'Better Auth', cat: 'Auth & Security', icon: '🛡️', color: '#D83A34' },
    { name: 'Vercel', cat: 'Deployment', icon: '▲', color: '#FFFFFF' },
    { name: 'Netlify', cat: 'Cloud Host', icon: '💎', color: '#00C7B7' },
    { name: 'Git', cat: 'Version Control', icon: '🌿', color: '#F05032' },
    { name: 'GitHub', cat: 'Collaboration', icon: '🐙', color: '#E6EDF3' },
  ];

  const highlights = [
    'Clean, modular & typed architecture',
    'Problem solver & rapid debugger',
    'Performance & security first',
    'Relentless learner & team player'
  ];

  return (
    <section className="w-full py-16 border-b border-[#221c19] bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: ABOUT ME */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#f2ece2]">
                  ABOUT ME
                </h3>
                <div className="w-10 h-[2px] bg-[#d83a34] mt-2"></div>
              </div>

              {/* Bio Card with mini avatar */}
              <div className="p-6 rounded-xl border border-[#2e2622] bg-[#13100e] relative overflow-hidden">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-tr from-[#991b1b] to-[#d83a34] flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#d83a34]/20 border border-[#d83a34]/40">
                    <span className="font-display font-extrabold text-xl text-[#f2ece2]">MM</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-[#f2ece2]">Mobin Mahmud</h4>
                    <p className="text-xs font-mono-code text-[#d83a34] uppercase tracking-wide">Full-Stack Engineer</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#8e857c] leading-relaxed">
                  I'm a Full-Stack Developer with a deep interest in scalable architectures, clean code, and frictionless user experiences.
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#8e857c] leading-relaxed">
                  I believe great software is not just about how it operates behind the scenes, but how cleanly and effortlessly it responds to the user.
                </p>

                {/* Highlights List */}
                <div className="mt-6 pt-5 border-t border-[#201a17] space-y-2">
                  {highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-[#c9c1b6] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d83a34] flex-shrink-0"></span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick availability note */}
            <div className="mt-6 p-4 rounded-lg border border-[#201a17] bg-[#100d0c] text-xs font-mono-code text-[#8e857c] flex items-center justify-between">
              <span>Status: Exploring New Roles</span>
              <span className="text-[#d83a34] font-bold">2026 // Active</span>
            </div>
          </div>

          {/* Right Column: TOOLS I USE (16 Tools) & Testimonial */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#f2ece2]">
                  TOOLS I USE
                </h3>
                <div className="w-10 h-[2px] bg-[#d83a34] mt-2"></div>
              </div>

              {/* 16 Tools Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group p-3 rounded-lg border border-[#221c19] hover:border-[#d83a34]/60 bg-[#14100e] hover:bg-[#1b1513] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base select-none">{tool.icon}</span>
                      <span className="text-[9px] font-mono-code text-[#6e665d] group-hover:text-[#d83a34] transition-colors">
                        {tool.cat}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="font-display font-bold text-xs text-[#f2ece2] group-hover:text-[#d83a34] transition-colors">
                        {tool.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial / Philosophy Card */}
            <div className="mt-8 p-6 rounded-xl border border-[#d83a34]/30 bg-[#15110f] relative overflow-hidden">
              <span className="text-4xl font-serif text-[#d83a34] leading-none select-none block -mb-2">“</span>
              <p className="text-xs sm:text-sm text-[#ded6cb] leading-relaxed italic">
                Mobin is an exceptional developer who builds robust, end-to-end applications on time and with deep consideration for speed, modular code quality, and security.
              </p>
              <div className="mt-4 pt-3 border-t border-[#251e1b] flex items-center justify-between">
                <span className="text-xs font-mono-code text-[#8e857c]">— Client & Engineering Peer Feedback</span>
                <span className="text-[10px] font-mono-code text-[#d83a34] uppercase tracking-widest">Verified</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
