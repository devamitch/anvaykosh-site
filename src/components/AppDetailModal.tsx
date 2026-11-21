import React, { useState } from 'react';
import { EcosystemApp } from '../data/ecosystemData';
import { X, Lock, CheckCircle, ExternalLink, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

interface AppDetailModalProps {
  app: EcosystemApp | null;
  onClose: () => void;
}

export const AppDetailModal: React.FC<AppDetailModalProps> = ({ app, onClose }) => {
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  if (!app) return null;

  const handleCopyScheme = () => {
    navigator.clipboard.writeText(app.deepLinkScheme);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const nextScreenshot = () => {
    if (app.screenshots.length > 0) {
      setActiveScreenshotIdx((prev) => (prev + 1) % app.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (app.screenshots.length > 0) {
      setActiveScreenshotIdx((prev) => (prev - 1 + app.screenshots.length) % app.screenshots.length);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/30 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header with Feature Graphic */}
        <div className="relative h-48 sm:h-64 bg-[#FAF7F2] overflow-hidden">
          <img
            src={app.featureGraphic}
            alt={`${app.name} feature banner`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#191918] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* App Badge on Header */}
          <div className="absolute bottom-5 left-6 flex items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-1.5 shrink-0 overflow-hidden">
              <img src={app.iconPath} alt={app.name} className="w-full h-full object-contain rounded-xl" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                  {app.name}
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-mono font-semibold">
                  {app.devanagari}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-white/90 font-mono mt-0.5">
                {app.packageId} • {app.statusBadge}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">

          {/* Quick Info bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-[#FAF7F2] text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#5C584E]">Play Console Track:</span>
              <span className="font-mono text-[#191918] font-medium">{app.playStoreTrack}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#5C584E]">Deep Link Scheme:</span>
              <button
                onClick={handleCopyScheme}
                className="font-mono text-[#D77259] bg-[#D77259]/10 px-3 py-1 rounded-full hover:bg-[#D77259]/20 flex items-center gap-1.5 transition-colors font-semibold"
              >
                {app.deepLinkScheme}
                {copiedLink ? <Check className="w-3.5 h-3.5 text-[#7D9C7B]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Summary & Core USP */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold mb-2">
              Purpose & Architectural Focus
            </h4>
            <p className="text-[#5C584E] text-sm leading-relaxed">
              {app.summary}
            </p>
            <div className="mt-3 p-4 rounded-2xl bg-[#FAF7F2] text-xs text-[#5C584E]">
              <strong className="text-[#D77259] block font-mono mb-1 font-semibold uppercase text-[10px]">
                CORE UNIQUE CAPABILITY
              </strong>
              {app.usp}
            </div>
          </div>

          {/* Screenshots Gallery Carousel */}
          {app.screenshots.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold">
                  Official Interface Gallery ({activeScreenshotIdx + 1}/{app.screenshots.length})
                </h4>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevScreenshot}
                    className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4DC] text-[#191918] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextScreenshot}
                    className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#EAE4DC] text-[#191918] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative rounded-2xl bg-[#FAF7F2] p-4 flex items-center justify-center min-h-[300px] overflow-hidden">
                <img
                  src={app.screenshots[activeScreenshotIdx]}
                  alt={`${app.name} screenshot ${activeScreenshotIdx + 1}`}
                  className="max-h-[360px] object-contain rounded-xl"
                />
              </div>

              {/* Thumbnails row */}
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {app.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`w-14 h-20 rounded-xl overflow-hidden shrink-0 transition-all ${
                      activeScreenshotIdx === idx ? 'ring-2 ring-[#D77259] scale-105' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={s} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Security & Sensitive Data Boundary Guarantee */}
          <div className="rounded-2xl bg-[#7D9C7B]/10 p-5 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#4E7A4C] font-semibold flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#7D9C7B]" />
              Sovereign Sensitive Data Boundary Guarantee
            </h4>
            <p className="text-xs text-[#5C584E] leading-relaxed">
              {app.securityGuarantee}
            </p>
          </div>

          {/* Detailed Technical Specs */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold mb-3">
              Technical Specifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-[#FAF7F2]">
                <span className="text-[#7A766A] block font-mono text-[10px] uppercase mb-0.5">Processing Engine</span>
                <span className="text-[#191918] font-medium">{app.specs.engine}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2]">
                <span className="text-[#7A766A] block font-mono text-[10px] uppercase mb-0.5">AI & Inference Model</span>
                <span className="text-[#191918] font-medium">{app.specs.aiModel}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2]">
                <span className="text-[#7A766A] block font-mono text-[10px] uppercase mb-0.5">Offline Capability</span>
                <span className="text-[#191918] font-medium">{app.specs.offlineCapability}</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF7F2]">
                <span className="text-[#7A766A] block font-mono text-[10px] uppercase mb-0.5">Vault Category Permissions</span>
                <span className="text-[#D77259] font-mono font-medium">{app.specs.vaultPermissions.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold mb-3">
              Feature Capabilities Checklist
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {app.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#5C584E]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#7D9C7B] shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-5 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="squircle-button px-6 py-3 bg-[#FAF7F2] hover:bg-[#EAE4DC] text-xs font-semibold text-[#191918] transition-colors"
            >
              Back to Systems Portfolio
            </button>

            <a
              href="#engage"
              onClick={onClose}
              className="squircle-button px-6 py-3 bg-[#D77259] hover:bg-[#C25F47] text-xs font-semibold text-white transition-all flex items-center gap-1.5"
            >
              <span>Test {app.name} / Inquire</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
