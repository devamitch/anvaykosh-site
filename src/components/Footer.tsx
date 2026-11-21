import React from 'react';
import { ArrowUp } from 'lucide-react';
import { AMIT_CHAKRABORTY_BIO } from '../data/ecosystemData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#1C1A18] pt-20 pb-14 text-[#9E978C] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand & Creator Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#262320] p-2 flex items-center justify-center">
                <img src="/brand/anvaykosh-icon.svg" alt="AnvayKosh" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-lg font-bold text-[#FAF6F0] font-serif block">
                  AnvayKosh
                </span>
                <span className="text-[11px] text-[#E2836E] font-mono font-medium">
                  अन्वयकोश • Amit Chakraborty
                </span>
              </div>
            </div>

            <p className="text-[#C5BFB5] text-xs leading-relaxed font-light max-w-sm">
              Authoritative multi-system sovereign private technology fabric engineered by Amit Chakraborty. 
              Built to guarantee privacy, eliminate cloud dependencies, and empower individuals and families.
            </p>

            <div className="text-[11px] font-mono text-[#9E978C] space-y-1">
              <div>Developer: Amit Chakraborty ({AMIT_CHAKRABORTY_BIO.handle})</div>
              <div>Organization: Amit Dev Labs (ID: 4618297291940146992)</div>
            </div>
          </div>

          {/* Client Systems */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-bold mb-3">
              Client Systems
            </h4>
            <ul className="space-y-2 font-light text-[#C5BFB5]">
              <li><a href="#apps" className="hover:text-[#E2836E] transition-colors">Thrivefold (Biomechanics)</a></li>
              <li><a href="#apps" className="hover:text-[#E2836E] transition-colors">Neev (Family Sanctuary)</a></li>
              <li><a href="#apps" className="hover:text-[#E2836E] transition-colors">HarmonyBloom (Hormonal Enclave)</a></li>
              <li><a href="#apps" className="hover:text-[#E2836E] transition-colors">BlinkQuest (Vision AI)</a></li>
              <li><a href="#apps" className="hover:text-[#E2836E] transition-colors">Setu (Offline Mesh)</a></li>
              <li><a href="#founder" className="hover:text-[#E2836E] transition-colors">Ravuno (P2P Commerce)</a></li>
              <li><a href="#founder" className="hover:text-[#E2836E] transition-colors">Haulwise (Fleet Engine)</a></li>
            </ul>
          </div>

          {/* Platform & Core Systems */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-bold mb-3">
              Platform & Core Systems
            </h4>
            <ul className="space-y-2 font-light text-[#C5BFB5]">
              <li><a href="#platform" className="hover:text-[#E2836E] transition-colors">Anvay ID (OAuth 2.1 PKCE)</a></li>
              <li><a href="#platform" className="hover:text-[#E2836E] transition-colors">Anvay Vault (Coalescing)</a></li>
              <li><a href="#platform" className="hover:text-[#E2836E] transition-colors">Anvay Connect (Signed Mesh)</a></li>
              <li><a href="#platform" className="hover:text-[#E2836E] transition-colors">Anvay Sync (Lossless Reconciliation)</a></li>
              <li><a href="#platform" className="hover:text-[#E2836E] transition-colors">Local Hybrid RAG (SQLite)</a></li>
            </ul>
          </div>

          {/* Action & Contact */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF6F0] font-bold mb-3">
              Test & Inquiries
            </h4>
            <ul className="space-y-2 font-light text-[#C5BFB5]">
              <li><a href="#engage" className="hover:text-[#E2836E] transition-colors">How to Test Apps</a></li>
              <li><a href="#engage" className="hover:text-[#E2836E] transition-colors">Login with Anvay Integration</a></li>
              <li><a href="#engage" className="hover:text-[#E2836E] transition-colors">Register Your App</a></li>
              <li><a href="#engage" className="hover:text-[#E2836E] transition-colors">App Buyout & Commercial Licensing</a></li>
              <li><a href={`mailto:${AMIT_CHAKRABORTY_BIO.email}`} className="text-[#E2836E] font-medium hover:underline">amit@devamit.co.in</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9E978C]">
          <div>
            © 2026 Amit Chakraborty • Amit Dev Labs. All rights reserved. AnvayKosh (अन्वयकोश).
          </div>

          <div className="flex items-center gap-4">
            <a href={AMIT_CHAKRABORTY_BIO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF6F0] transition-colors">
              GitHub
            </a>
            <a href={AMIT_CHAKRABORTY_BIO.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-[#FAF6F0] transition-colors">
              Telegram
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#262320] text-[#FAF6F0] hover:bg-[#312E2A] transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
