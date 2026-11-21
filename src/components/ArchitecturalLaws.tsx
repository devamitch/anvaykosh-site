import React from 'react';
import { ARCHITECTURAL_LAWS, COMPARISON_TABLE } from '../data/ecosystemData';
import { ShieldAlert, CheckCircle2, XCircle, Scale } from 'lucide-react';

export const ArchitecturalLaws: React.FC = () => {
  return (
    <section id="laws" className="relative py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-mono text-[#D77259] mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">SOVEREIGN ARCHITECTURAL CONTRACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#191918] tracking-tight font-serif">
            Seven Laws That Never Bend
          </h2>
          <p className="mt-4 text-[#5C584E] text-sm sm:text-base leading-relaxed">
            Unlike commercial platforms that treat personal privacy as an adjustable setting, AnvayKosh encodes privacy 
            directly into its architectural laws. Hard security invariants that cannot be bypassed.
          </p>
        </div>

        {/* 7 Laws Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {ARCHITECTURAL_LAWS.map((law) => (
            <div 
              key={law.id}
              className="p-7 rounded-[32px] bg-white flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-xl bg-[#D77259]/10 text-[#D77259] font-mono font-bold text-xs flex items-center justify-center">
                    0{law.id}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#FAF7F2] text-[#5C584E] font-medium">
                    {law.short}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#191918] font-serif mb-2">
                  {law.title}
                </h3>

                <p className="text-xs text-[#5C584E] leading-relaxed">
                  {law.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#7A766A]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#D77259]" />
                <span>Enforced at Kernel & Protocol Level</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ecosystem vs Cloud Silos Comparison Table */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-white">
          <div className="max-w-3xl mb-8">
            <h3 className="text-2xl font-bold text-[#191918] font-serif">
              AnvayKosh vs Conventional Cloud Monoliths
            </h3>
            <p className="text-xs sm:text-sm text-[#5C584E] mt-1">
              How decentralized offline-first architecture fundamentally transforms user sovereignty.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="text-[#7A766A] font-mono uppercase text-[11px]">
                  <th className="pb-4 font-semibold">Architectural Vector</th>
                  <th className="pb-4 font-semibold text-[#D77259]">AnvayKosh Sovereign Ecosystem</th>
                  <th className="pb-4 font-semibold text-stone-400">Big Tech Cloud Silos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {COMPARISON_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                    <td className="py-4 pr-4 font-semibold text-[#191918]">
                      {row.feature}
                    </td>
                    <td className="py-4 pr-4 text-[#5C584E]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9C7B] shrink-0" />
                        <span className="font-medium text-[#191918]">{row.anvaykosh}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[#7A766A]">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-3.5 h-3.5 text-stone-300 shrink-0" />
                        <span>{row.cloudSilos}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
