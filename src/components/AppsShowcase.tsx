import { ArrowRight, CheckCircle2, ExternalLink, Lock, Smartphone } from 'lucide-react';
import React, { useState } from 'react';
import { ECOSYSTEM_APPS, EcosystemApp } from '../data/ecosystemData';
import { AppDetailModal } from './AppDetailModal';

export const AppsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalApp, setActiveModalApp] = useState<EcosystemApp | null>(null);

  const categories = [
    { id: 'all', label: `All Systems (${ECOSYSTEM_APPS.length})` },
    { id: 'health', label: 'Health & Biomechanics' },
    { id: 'family', label: 'Family Sanctuary' },
    { id: 'women', label: "Women's Wellness" },
    { id: 'vision', label: 'Vision AI' },
    { id: 'mesh', label: 'P2P Mesh & Identity' },
    { id: 'commerce', label: 'Sovereign Commerce' },
    { id: 'logistics', label: 'Fleet & Logistics' },
  ];

  const filteredApps =
    selectedCategory === 'all'
      ? ECOSYSTEM_APPS
      : ECOSYSTEM_APPS.filter((app) => app.category === selectedCategory);

  return (
    <section id="apps" className="relative py-28 bg-[#23201D] text-[#FAF6F0]">
      {/* Soothing Warm Ambient Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(215,114,89,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C2925] text-xs font-mono text-[#E2836E] mb-4">
              <Smartphone className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">
                CLIENT SYSTEMS PORTFOLIO
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-[#FAF6F0] tracking-tight font-serif">
              Purposeful Sovereign Applications. Zero Clutter.
            </h2>
            <p className="mt-4 text-[#C5BFB5] text-sm sm:text-base leading-relaxed">
              Every production system is an independent, offline-first instrument crafted for a specific
              dimension of personal, family, commerce, or mobility sovereignty. Verified in Google Play Console with strict
              sensitive data boundaries.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#D5CFC7] bg-[#2C2925] px-4 py-2.5 rounded-full">
            <Lock className="w-3.5 h-3.5 text-[#E2836E]" />
            <span>Hardware Keystore Boundary Guard</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#D77259] text-white'
                  : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="p-7 rounded-[32px] bg-[#2C2925] flex flex-col justify-between group transition-transform duration-200 hover:-translate-y-1 hover:bg-[#34302B]"
            >
              {/* Card Top: Graphic Banner */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-5 bg-[#23201D]">
                <img
                  src={app.featureGraphic}
                  alt={app.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2925]/90 via-transparent to-transparent"></div>

                {/* Status Badge */}
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#23201D]/80 backdrop-blur-md text-[10px] font-mono text-[#FAF6F0] font-medium">
                  {app.version}
                </span>

                {/* Floating Icon */}
                <div className="absolute -bottom-2 left-4 w-14 h-14 rounded-2xl bg-[#23201D] p-1.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={app.iconPath}
                    alt={app.name}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Title & Category */}
              <div className="mt-2 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-[#FAF6F0] font-serif">{app.name}</h3>
                    <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#D77259]/20 text-[#E2836E] font-mono font-semibold">
                      {app.devanagari}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#9E978C]">{app.categoryLabel}</span>
                </div>

                <p className="text-xs text-[#C5BFB5] mt-2 line-clamp-2 leading-relaxed">
                  {app.tagline}
                </p>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 mb-5 text-xs text-[#D5CFC7]">
                {app.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8EAA8C] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Sensitive Data Boundary Pill */}
              <div className="p-3.5 rounded-2xl bg-[#23201D] text-[11px] text-[#C5BFB5] mb-5">
                <span className="text-[#E2836E] font-mono font-medium block text-[10px] uppercase mb-0.5">
                  Privacy Boundary
                </span>
                <span className="line-clamp-2">{app.securityGuarantee}</span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalApp(app)}
                  className="squircle-button flex-1 py-3 bg-[#36322D] hover:bg-[#403B35] text-xs font-semibold text-[#FAF6F0] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Deep-Dive & Screenshots</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2836E]" />
                </button>

                <button
                  onClick={() => setActiveModalApp(app)}
                  title="View Play Console Verification"
                  className="p-3 rounded-full bg-[#36322D] hover:bg-[#403B35] text-[#C5BFB5] hover:text-[#FAF6F0] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detail Modal */}
        <AppDetailModal app={activeModalApp} onClose={() => setActiveModalApp(null)} />
      </div>
    </section>
  );
};
