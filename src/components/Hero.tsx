import React, { useState } from 'react';
import { Smartphone, ArrowRight, Lock, CheckCircle2, Layers, Server } from 'lucide-react';

interface HeroProps {
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenSimulator }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: 'thrivefold', name: 'Thrivefold', label: 'Biomechanics & Pose Engine', color: '#D77259', type: 'Client App', x: '18%', y: '24%' },
    { id: 'neev', name: 'Neev', label: 'Family Sanctuary & 3D Radar', color: '#D77259', type: 'Client App', x: '82%', y: '24%' },
    { id: 'harmonybloom', name: 'HarmonyBloom', label: 'Circadian Enclave & Rhythm Dial', color: '#7D9C7B', type: 'Client App', x: '12%', y: '72%' },
    { id: 'blinkquest', name: 'BlinkQuest', label: 'MediaPipe EAR Vision AI', color: '#7D9C7B', type: 'Client App', x: '88%', y: '72%' },
    { id: 'setu', name: 'Setu', label: 'P2P Swarm & Keystore Anchor', color: '#D77259', type: 'Client App', x: '50%', y: '88%' },
    { id: 'ravuno', name: 'Ravuno', label: 'P2P Sovereign Commerce Suite', color: '#7D9C7B', type: 'Commerce Suite', x: '50%', y: '12%' }
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Ambient Terracotta Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-[radial-gradient(60%_60%_at_70%_18%,rgba(215,114,89,0.06),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Badge */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-mono text-[#5C584E] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D77259]"></span>
            <span className="font-semibold text-[#191918]">ANVAYKOSH SOVEREIGN ECOSYSTEM</span>
            <span className="text-stone-300">•</span>
            <span>AMIT CHAKRABORTY</span>
            <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#7D9C7B]/15 text-[#4E7A4C] font-mono ml-1 font-semibold">
              OFFLINE-FIRST
            </span>
          </div>

          {/* Monumental Editorial Serif Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[4.6rem] font-medium tracking-[-0.035em] text-[#191918] max-w-5xl leading-[1.06] font-serif">
            Sovereign technology for{' '}
            <span className="italic text-[#D77259]">
              modern individuals & families.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#5C584E] max-w-3xl leading-relaxed font-normal">
            Designed and engineered by <strong className="text-[#191918] font-semibold">Amit Chakraborty</strong>. 
            A private, offline-first personal operating fabric unifying five production client applications, 
            autonomous backend intelligence, hardware keystore enclaves, and zero surveillance advertising.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apps"
              className="squircle-button px-7 py-3.5 font-semibold text-xs tracking-wider uppercase bg-[#D77259] text-white hover:bg-[#C25F47] transition-all flex items-center gap-2"
            >
              <Smartphone className="w-4 h-4" />
              <span>Production Systems (5)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenSimulator}
              className="squircle-button px-6 py-3.5 font-semibold text-xs tracking-wider uppercase bg-white text-[#191918] hover:bg-stone-50 transition-all flex items-center gap-2"
            >
              <Layers className="w-3.5 h-3.5 text-[#7D9C7B]" />
              <span>Launch Sandbox</span>
            </button>

            <a
              href="#engage"
              className="squircle-button px-6 py-3.5 font-semibold text-xs tracking-wider uppercase bg-[#EFE8DE] text-[#191918] hover:bg-white transition-all flex items-center gap-2"
            >
              <Server className="w-3.5 h-3.5 text-[#D77259]" />
              <span>Test Apps & Buyout</span>
            </a>
          </div>

          {/* Key Architectural Assurances Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 text-xs text-[#5C584E] max-w-4xl w-full font-medium">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9C7B]" />
              <span>OAuth 2.1 PKCE Single Sign-On</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9C7B]" />
              <span>Lossless Nullish Coalescing (Law 6)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9C7B]" />
              <span>On-Device Hybrid RAG (SQLite)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7D9C7B]" />
              <span>Zero Advertising Telemetry</span>
            </div>
          </div>

        </div>

        {/* Minimalist Flat Squircle Topology Mesh Card */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          <div className="bg-white rounded-[36px] p-6 sm:p-10 overflow-hidden">
            
            {/* Visualizer Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D77259]">
                  <span className="w-2 h-2 rounded-full bg-[#D77259]"></span>
                  Live Systems Topology & Enclave Matrix
                </div>
                <h3 className="text-xl font-bold text-[#191918] mt-0.5 font-serif">
                  AnvayKosh Core & Federated Node Mesh
                </h3>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-xs px-3.5 py-1 rounded-full bg-[#FAF7F2] text-[#191918] font-mono flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-[#D77259]" />
                  Keystore AES-256
                </span>
                <span className="text-xs px-3.5 py-1 rounded-full bg-[#7D9C7B]/15 text-[#4E7A4C] font-mono font-medium">
                  Signature Guard Active
                </span>
              </div>
            </div>

            {/* Orbit Topology Mesh Canvas */}
            <div className="relative w-full h-[380px] sm:h-[440px] my-4 flex items-center justify-center">
              
              {/* Concentric Soft Orbit Rings */}
              <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-dashed border-[#CDC7B7]/40 animate-spin" style={{ animationDuration: '90s' }}></div>
              <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#D77259]/10"></div>

              {/* Connecting Vector Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="50%" x2="18%" y2="24%" stroke="#D77259" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="50%" y1="50%" x2="82%" y2="24%" stroke="#D77259" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="50%" y1="50%" x2="12%" y2="72%" stroke="#7D9C7B" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="50%" y1="50%" x2="88%" y2="72%" stroke="#7D9C7B" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="#D77259" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
                <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="#191918" strokeWidth="1.5" strokeDasharray="3,3" strokeOpacity="0.3" />
              </svg>

              {/* Central Core (AnvayKosh Vault & ID) */}
              <div className="relative z-20 flex flex-col items-center">
                <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-3xl bg-[#FAF7F2] flex items-center justify-center p-3 transition-transform duration-300 hover:scale-105">
                  <img src="/brand/anvaykosh-icon.svg" alt="Core Mark" className="w-full h-full object-contain" />
                  <span className="absolute -bottom-2 px-2.5 py-0.5 rounded-full bg-[#D77259] text-white text-[9px] font-bold tracking-wider uppercase font-mono">
                    VAULT CORE
                  </span>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm font-bold text-[#191918] font-serif block">Anvay Vault</span>
                  <span className="text-[11px] text-[#5C584E] font-mono">SQLite + Keystore Enclave</span>
                </div>
              </div>

              {/* Floating Mesh Satellite Nodes */}
              {nodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveNode(isActive ? null : node.id)}
                    style={{ left: node.x, top: node.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 cursor-pointer group"
                  >
                    <div 
                      className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl transition-all duration-300 flex items-center gap-2.5 ${
                        isActive 
                          ? 'bg-[#191918] text-white scale-105' 
                          : 'bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#191918]'
                      }`}
                    >
                      <div 
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: node.color }}
                      />
                      <div className="text-left">
                        <span className="text-xs font-bold block">
                          {node.name}
                        </span>
                        <span className={`text-[10px] hidden sm:block font-mono ${isActive ? 'text-stone-300' : 'text-[#7A766A]'}`}>
                          {node.type}
                        </span>
                      </div>
                    </div>

                    {/* Popover Card on Active State */}
                    {isActive && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 sm:w-60 p-4 rounded-2xl bg-white z-40 text-left text-xs pointer-events-none animate-in fade-in duration-200">
                        <div className="font-bold text-[#191918] mb-0.5 flex items-center justify-between">
                          <span>{node.name}</span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#5C584E]">
                            {node.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5C584E] leading-snug mt-1">
                          {node.label}
                        </p>
                        <div className="mt-2 pt-2 text-[10px] text-[#D77259] font-mono font-semibold">
                          <span>Verified Law Compliance</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

            {/* Topology Bottom Control Bar */}
            <div className="pt-4 flex flex-wrap items-center justify-between text-xs text-[#5C584E] gap-2">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D77259]"></span>
                <span>Active Channels:</span>
                <span className="text-[#191918] font-medium">7 Production Systems</span>
                <span className="text-stone-300">•</span>
                <span className="text-[#191918] font-medium">1 Vault Anchor</span>
                <span className="text-stone-300">•</span>
                <span className="text-[#191918] font-medium">Ravuno & Haulwise</span>
              </div>

              <div className="text-[11px] font-mono text-[#7A766A]">
                Click nodes for subsystem credentials
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
