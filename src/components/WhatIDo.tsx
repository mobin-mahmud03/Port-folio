import React from 'react';
import { Layout, Server, Database, Shield, Cloud } from 'lucide-react';

export const WhatIDo: React.FC = () => {
  const pillars = [
    {
      icon: Layout,
      title: 'FRONTEND ARCHITECTURE',
      description: 'Crafting responsive, accessible and high-performance interfaces with React, Next.js, TypeScript and Tailwind CSS.',
      tags: ['Next.js', 'React', 'TS', 'Tailwind']
    },
    {
      icon: Server,
      title: 'BACKEND & REST APIS',
      description: 'Engineering robust, scalable microservices and RESTful API endpoints with Node.js and Express.js.',
      tags: ['Node.js', 'Express', 'REST']
    },
    {
      icon: Database,
      title: 'DATABASE SYSTEMS',
      description: 'Designing normalized relational schemas and document models with MySQL & MongoDB for optimized indexing.',
      tags: ['MongoDB', 'MySQL', 'Schemas']
    },
    {
      icon: Shield,
      title: 'AUTH & SECURITY',
      description: 'Implementing modern, bulletproof authentication, session management, and RBAC flows with Better Auth.',
      tags: ['Better Auth', 'OAuth', 'RBAC']
    },
    {
      icon: Cloud,
      title: 'DEVOPS & DEPLOYMENT',
      description: 'Building automated CI/CD deployment pipelines, version control workflows, and rapid delivery on Vercel & Netlify.',
      tags: ['Git', 'GitHub', 'Vercel', 'Netlify']
    }
  ];

  return (
    <section className="w-full py-12 border-b border-[#221c19] bg-[#0c0a09]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl uppercase tracking-wider text-[#f2ece2]">
            WHAT I DO
          </h3>
          <div className="w-10 h-[2px] bg-[#d83a34] mt-2"></div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-5 rounded-lg border border-[#d83a34]/30 hover:border-[#d83a34] bg-[#14100e]/70 hover:bg-[#1a1412] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="p-2.5 w-fit rounded-md bg-[#201815] text-[#d83a34] group-hover:scale-110 group-hover:bg-[#d83a34] group-hover:text-[#f2ece2] transition-all duration-200">
                    <IconComponent className="w-4 h-4" />
                  </div>

                  {/* Title */}
                  <h4 className="mt-4 font-display font-bold text-xs uppercase tracking-wider text-[#f2ece2] group-hover:text-[#d83a34] transition-colors">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="mt-2 text-[11px] leading-relaxed text-[#8e857c] group-hover:text-[#b3aba1] transition-colors">
                    {item.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-4 pt-3 border-t border-[#221c19] flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-1.5 py-0.5 text-[9px] font-mono-code bg-[#1f1916] text-[#a0978d] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
