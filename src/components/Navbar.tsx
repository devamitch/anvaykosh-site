import { ArrowUpRight, Cpu, Menu, Shield, Smartphone, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenSimulator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSimulator }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div
        className={`max-w-4xl mx-auto rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-2xl py-2 px-4 sm:px-6'
            : 'bg-white/70 backdrop-blur-xl py-2.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] flex items-center justify-center p-1.5 transition-transform duration-300 group-hover:scale-105">
              <img
                src="/brand/anvaykosh-icon.svg"
                alt="AnvayKosh"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-serif text-[17px] font-semibold tracking-tight text-[#191918]">
                AnvayKosh
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#D77259]/10 text-[#D77259] font-semibold font-mono">
                अन्वयकोश
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-[13px] font-medium text-[#5C584E]">
            <a
              href="#apps"
              className="px-3.5 py-1.5 rounded-full hover:text-[#191918] hover:bg-black/5 transition-all"
            >
              Systems
            </a>
            <a
              href="#platform"
              className="px-3.5 py-1.5 rounded-full hover:text-[#191918] hover:bg-black/5 transition-all"
            >
              Platform
            </a>
            <a
              href="#laws"
              className="px-3.5 py-1.5 rounded-full hover:text-[#191918] hover:bg-black/5 transition-all"
            >
              Laws
            </a>
            <a
              href="#founder"
              className="px-3.5 py-1.5 rounded-full hover:text-[#191918] hover:bg-black/5 transition-all"
            >
              Architect
            </a>
          </nav>

          {/* Right Action Button - Terracotta Capsule */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="#engage"
              className="squircle-button px-4 py-2 text-xs font-semibold bg-[#D77259] text-white hover:bg-[#C25F47] transition-all flex items-center gap-1.5"
            >
              <span>Test & Buyout</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-xl text-[#5C584E] hover:text-[#191918] bg-black/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl rounded-3xl px-5 py-4 mt-2 space-y-2 max-w-4xl mx-auto">
          <a
            href="#apps"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs text-[#191918] hover:bg-[#FAF7F2] font-medium"
          >
            <Smartphone className="w-4 h-4 text-[#D77259]" />
            Client Applications Portfolio
          </a>
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs text-[#191918] hover:bg-[#FAF7F2] font-medium"
          >
            <Cpu className="w-4 h-4 text-[#7D9C7B]" />
            Core Platform Architecture
          </a>
          <a
            href="#laws"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs text-[#191918] hover:bg-[#FAF7F2] font-medium"
          >
            <Shield className="w-4 h-4 text-[#191918]" />
            Architectural Laws & Proofs
          </a>
          <a
            href="#founder"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-2xl text-xs text-[#191918] hover:bg-[#FAF7F2] font-medium"
          >
            <User className="w-4 h-4 text-[#D77259]" />
            About Amit Chakraborty
          </a>
          <a
            href="#engage"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-4 py-3 rounded-full text-xs font-semibold text-white bg-[#D77259] hover:bg-[#C25F47] mt-2"
          >
            <span>Test Apps & Inquiries</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </header>
  );
};
