import React from 'react';
import {
  Compass,
  Workflow,
  Code,
  Gauge,
  Rocket,
  ExternalLink,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ProcessAndWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      icon: Compass,
      title: 'ARCHITECTURE & SPEC',
      desc: 'Defining data models, system boundaries, API contracts, and user interaction flows.'
    },
    {
      num: '02',
      icon: Code,
      title: 'FRONTEND ENGINEERING',
      desc: 'Crafting responsive, component-driven UI using React, Next.js, and utility-first Tailwind.'
    },
    {
      num: '03',
      icon: Workflow,
      title: 'BACKEND & BETTER AUTH',
      desc: 'Developing scalable Express/Node endpoints, session handling, and robust authentication.'
    },
    {
      num: '04',
      icon: Gauge,
      title: 'OPTIMIZATION & AUDIT',
      desc: 'Database query indexing with MongoDB/MySQL, bundle minification, and latency trimming.'
    },
    {
      num: '05',
      icon: Rocket,
      title: 'CI/CD & SHIP',
      desc: 'Automated deployment pipelines to Vercel/Netlify with version control on GitHub.'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'KINDREDACTS — SOCIAL DEV PLATFORM',
      category: 'FULL-STACK // NEXT.JS // BETTER AUTH',
      description: 'A modern, responsive, community-driven event management platform where citizens can discover, organize, join, and track social welfare events in their local communities.',
      stack: ['Next.js', 'TypeScript', 'Better Auth', 'MongoDB', 'Tailwind CSS'],
      githubUrl: 'https://github.com/mobin-mahmud03/kinderacts-client',
      liveUrl: 'https://kinderacts-client.vercel.app/',
      mockupHeader: 'kinderacts-client.vercel.app',
      image: 'src/assets/kindredacts.png',
      metrics: [
        { label: 'Focus', value: 'Social Welfare' },
        { label: 'Auth Flow', value: 'Better Auth' },
        { label: 'Hosting', value: 'Vercel' }
      ]
    },
    {
      id: 2,
      title: 'BAZAR DOR — DAILY MARKET PRICE TRACKER',
      category: 'BACKEND & FRONTEND // NODE.JS // MYSQL',
      description: 'A one-stop platform for tracking daily prices of essential commodities, monitoring price fluctuations, and comparing prices across markets.',
      stack: ['React', 'Next.js', 'Express.js', 'MySQL', 'Vercel'],
      githubUrl: 'https://github.com/mobin-mahmud03/bazar-dor-project',
      liveUrl: 'https://bazar-dor-project-ten.vercel.app/',
      mockupHeader: 'bazar-dor.vercel.app',
      image: 'src/assets/bazardor.png',
      metrics: [
        { label: 'Engine', value: 'Price Tracker' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Hosting', value: 'Vercel' }
      ]
    }
  ];

  return (
    <section className="w-full py-16 border-b border-[#221c19] bg-[#0b0908]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: My Process (5 Steps) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#f2ece2]">
                  MY PROCESS
                </h3>
                <div className="w-10 h-[2px] bg-[#d83a34] mt-2"></div>
              </div>

              {/* Numbered Steps */}
              <div className="space-y-6">
                {steps.map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={idx} className="group flex items-start gap-4">
                      {/* Step Number & Icon Circle */}
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2e2622] group-hover:border-[#d83a34] bg-[#14100e] text-[#d83a34] group-hover:bg-[#d83a34] group-hover:text-[#f2ece2] transition-all duration-200">
                          <StepIcon className="w-4 h-4" />
                        </div>
                        {idx !== steps.length - 1 && (
                          <div className="w-[1px] h-8 bg-[#221c19] group-hover:bg-[#d83a34]/40 my-1 transition-colors"></div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="pt-1 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-xs font-bold text-[#d83a34]">{step.num}</span>
                          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#f2ece2] group-hover:text-[#d83a34] transition-colors">
                            {step.title}
                          </h4>
                        </div>
                        <p className="mt-1 text-xs text-[#8e857c] leading-relaxed group-hover:text-[#b8aea4] transition-colors">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Engineering Motto Box */}
            <div className="mt-8 p-4 rounded-lg border border-[#221c19] bg-[#120f0e] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-4 h-4 text-[#d83a34] animate-pulse" />
                <span className="text-xs font-mono-code text-[#a89e92]">Reliable • Performant • Maintainable</span>
              </div>
              <span className="text-[10px] font-mono-code text-[#d83a34] uppercase tracking-wider">v2026</span>
            </div>
          </div>

          {/* Right Column: Featured Work (2 High-Impact Projects) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#f2ece2]">
                  FEATURED WORK
                </h3>
                <div className="w-10 h-[2px] bg-[#d83a34] mt-2"></div>
              </div>
              <a
                href="https://github.com/mobin-mahmud03"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-1.5 text-xs font-mono-code text-[#d83a34] hover:text-[#f2ece2] transition-colors"
              >
                <span>View all repos</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* 2 Projects Stacked Vertically with Rich Mockups */}
            <div className="space-y-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="group relative rounded-xl border border-[#2e2622] hover:border-[#d83a34]/60 bg-[#13100e] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#d83a34]/10"
                >
                  {/* Browser Window Header Mockup */}
                  <div className="px-4 py-2.5 bg-[#181412] border-b border-[#221c19] flex items-center justify-between text-xs font-mono-code">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#352b27]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#352b27]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#d83a34]/80"></span>
                      <span className="ml-2 text-[11px] text-[#6e665d] hidden sm:inline">{proj.mockupHeader}</span>
                    </div>
                    <span className="text-[10px] text-[#d83a34] uppercase tracking-widest">{proj.category}</span>
                  </div>

                  {/* Project Inner Content */}
                  <div className="p-5 sm:p-6">
                    {/* Title & Links */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <h4 className="font-display font-extrabold text-base sm:text-lg text-[#f2ece2] group-hover:text-[#d83a34] transition-colors uppercase">
                        {proj.title}
                      </h4>
                      <div className="flex items-center gap-2">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1 text-xs font-mono-code bg-[#1e1816] hover:bg-[#d83a34] text-[#f2ece2] rounded transition-colors"
                        >
                          <GithubIcon className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-3 py-1 text-xs font-mono-code bg-[#d83a34] hover:bg-[#b82e28] text-[#f2ece2] rounded transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Live</span>
                        </a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-2.5 text-xs sm:text-sm text-[#8e857c] leading-relaxed">
                      {proj.description}
                    </p>

                    {/* Project Screenshot Preview */}
                    {proj.image && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group/shot relative my-4 block rounded-lg overflow-hidden border border-[#2e2622] hover:border-[#d83a34] bg-[#0c0a09] transition-all duration-300 shadow-xl hover:shadow-[#d83a34]/15"
                        title={`View ${proj.title} live preview`}
                      >
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#14100e]">
                          <img
                            src={proj.image}
                            alt={`${proj.title} Screenshot`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/shot:scale-[1.03]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0908]/80 via-transparent to-transparent opacity-40 group-hover/shot:opacity-10 transition-opacity"></div>

                          {/* Live overlay badge on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/shot:opacity-100 transition-opacity duration-200 bg-black/45 backdrop-blur-[1px]">
                            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#d83a34] text-xs font-mono-code text-[#f2ece2] shadow-xl shadow-black/60 tracking-wider uppercase font-semibold transform translate-y-1 group-hover/shot:translate-y-0 transition-transform">
                              <span>View Live Demo</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      </a>
                    )}

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1f1917]">
                      {proj.stack.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-mono-code bg-[#1a1412] border border-[#2e2622] text-[#c4bbb0] rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
