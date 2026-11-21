import { CheckCircle2, Mail, Send, User } from 'lucide-react';
import React from 'react';
import { AMIT_CHAKRABORTY_BIO, OTHER_PROJECTS } from '../data/ecosystemData';
import { GithubIcon } from './GithubIcon';

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="relative py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-mono text-[#D77259] mb-4">
            <User className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">ARCHITECT & CREATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#191918] tracking-tight font-serif">
            Engineered by Amit Chakraborty
          </h2>
          <p className="mt-4 text-[#5C584E] text-sm sm:text-base leading-relaxed">
            The creator and chief systems architect behind the AnvayKosh sovereign multi-app
            ecosystem, sovereign local-first architectures, Ravuno commerce, and the Setu peer-to-peer
            protocol.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="p-8 sm:p-12 mb-16 rounded-[36px] bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Profile Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#D77259] text-white flex items-center justify-center font-bold text-2xl font-serif">
                  AC
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#191918] font-serif">
                    {AMIT_CHAKRABORTY_BIO.name}
                  </h3>
                  <div className="text-xs font-mono text-[#D77259] font-medium mt-0.5">
                    {AMIT_CHAKRABORTY_BIO.handle} • {AMIT_CHAKRABORTY_BIO.role}
                  </div>
                  <div className="text-[11px] font-mono text-[#7A766A] mt-1">
                    {AMIT_CHAKRABORTY_BIO.organization}
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#5C584E] leading-relaxed">
                {AMIT_CHAKRABORTY_BIO.vision}
              </p>

              {/* Direct Links */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={AMIT_CHAKRABORTY_BIO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="squircle-button px-4 py-2 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-xs font-mono font-medium text-[#191918] transition-colors flex items-center gap-2"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#191918]" />
                  <span>github.com/devamitch</span>
                </a>

                <a
                  href={`mailto:${AMIT_CHAKRABORTY_BIO.email}`}
                  className="squircle-button px-4 py-2 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-xs font-mono font-medium text-[#D77259] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{AMIT_CHAKRABORTY_BIO.email}</span>
                </a>

                <a
                  href={AMIT_CHAKRABORTY_BIO.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="squircle-button px-4 py-2 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-xs font-mono font-medium text-[#7D9C7B] transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>t.me/devamitch</span>
                </a>
              </div>
            </div>

            {/* Right Core Principles */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold mb-2">
                Core Architectural Principles
              </h4>

              <div className="space-y-3">
                {AMIT_CHAKRABORTY_BIO.philosophy.map((item, idx) => {
                  const [title, desc] = item.split(': ');
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-[#FAF7F2]">
                      <h5 className="text-sm font-bold text-[#191918] font-serif flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7D9C7B]" />
                        {title}
                      </h5>
                      <p className="text-xs text-[#5C584E] mt-1 pl-6 leading-relaxed">{desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Other Ecosystem Works Portfolio */}
        <div>
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-[#191918] font-serif">
              Extended Workspace Systems & Practice
            </h3>
            <p className="text-xs sm:text-sm text-[#5C584E] mt-1">
              Active engineering templates, clinical backends, and workbenches built under the AnvayKosh production standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {OTHER_PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[28px] bg-white flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#D77259] font-medium">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7D9C7B]/15 text-[#4E7A4C] font-semibold">
                      {project.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#191918] font-serif mb-1">
                    {project.name}
                  </h4>

                  <p className="text-xs text-[#5C584E] leading-relaxed mb-4">
                    {project.purpose}
                  </p>
                </div>

                <div className="pt-3 text-[11px] font-mono text-[#7A766A]">
                  {project.techStack}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
