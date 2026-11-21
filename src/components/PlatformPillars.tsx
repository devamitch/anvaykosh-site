import { ArrowRight, BrainCircuit, Check, Database, Key, Network, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react';
import { PLATFORM_PILLARS } from '../data/ecosystemData';

export const PlatformPillars: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>('anvay-id');

  const selectedPillar =
    PLATFORM_PILLARS.find((p) => p.id === selectedPillarId) || PLATFORM_PILLARS[0];

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'anvay-id':
        return <Key className="w-5 h-5 text-[#D77259]" />;
      case 'anvay-vault':
        return <Database className="w-5 h-5 text-[#7D9C7B]" />;
      case 'anvay-connect':
        return <Network className="w-5 h-5 text-[#5C584E]" />;
      case 'anvay-sync':
        return <BrainCircuit className="w-5 h-5 text-[#D77259]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#191918]" />;
    }
  };

  return (
    <section id="platform" className="relative py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-mono text-[#D77259] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D77259]"></span>
            <span className="font-semibold uppercase tracking-wider">
              FOUNDATIONAL PLATFORM SUBSYSTEMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#191918] tracking-tight font-serif">
            Four Foundational Pillars. One Sovereign Standard.
          </h2>
          <p className="mt-4 text-[#5C584E] text-sm sm:text-base leading-relaxed">
            The core platform subsystems powering all connected client applications. Built to
            eliminate single points of failure, prevent data colonization, and ensure privacy
            without sacrificing effortless continuity.
          </p>
        </div>

        {/* Minimalist Segmented Pillar Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PLATFORM_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`p-6 rounded-[28px] text-left transition-all duration-300 flex flex-col justify-between ${
                  isSelected ? 'bg-white scale-[1.02]' : 'bg-white/60 hover:bg-white text-[#5C584E]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-[#FAF7F2]">{getPillarIcon(pillar.id)}</div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#FAF7F2] text-[#5C584E] font-medium">
                    {pillar.devanagari}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#191918] font-serif">{pillar.title}</h3>
                  <p className="text-xs text-[#7A766A] font-mono mt-0.5 line-clamp-1">
                    {pillar.protocol}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Showcase Panel */}
        <div className="p-8 sm:p-12 rounded-[36px] bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Specifications & Laws */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono px-3.5 py-1 rounded-full bg-[#D77259]/10 text-[#D77259] font-semibold">
                  {selectedPillar.protocol}
                </span>
                <span className="text-xs font-mono text-[#7A766A]">
                  {selectedPillar.devanagari}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#191918] font-serif">
                  {selectedPillar.title}: {selectedPillar.tagline}
                </h3>
                <p className="mt-3 text-[#5C584E] text-sm sm:text-base leading-relaxed">
                  {selectedPillar.description}
                </p>
              </div>

              {/* Strict Sovereign Laws for this Pillar */}
              <div className="rounded-2xl bg-[#FAF7F2] p-5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#D77259] font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Strict Sovereign Law Enforcements
                </h4>
                <div className="space-y-2">
                  {selectedPillar.laws?.map((law, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#5C584E]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D77259] mt-1.5 shrink-0"></span>
                      <span className="leading-relaxed">{law}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Capabilities */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-2xl bg-[#FAF7F2] p-6 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold">
                  Architectural Capabilities
                </h4>
                <div className="space-y-3.5">
                  {selectedPillar.capabilities?.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7D9C7B]/20 text-[#4E7A4C] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-[#191918] font-bold">{cap.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#7D9C7B] font-semibold">
                            {cap.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#5C584E] mt-0.5 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="p-5 rounded-2xl bg-[#FAF7F2] text-xs space-y-2.5">
                <div className="flex justify-between py-1">
                  <span className="text-[#7A766A] font-mono">Protocol Architecture:</span>
                  <span className="font-mono text-[#191918] font-medium">
                    {selectedPillar.protocol}
                  </span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#7A766A] font-mono">Security Model:</span>
                  <span className="font-mono text-[#D77259] font-medium">
                    Hardware Keystore AES-256
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href="#simulator"
                className="squircle-button w-full py-3.5 bg-[#191918] hover:bg-black text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
              >
                <span>Test Live Nullish Coalescing Sandbox</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D77259]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
