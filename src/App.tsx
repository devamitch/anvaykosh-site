import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemStats } from './components/EcosystemStats';
import { AppsShowcase } from './components/AppsShowcase';
import { PlatformPillars } from './components/PlatformPillars';
import { FounderSection } from './components/FounderSection';
import { EngagementPortal } from './components/EngagementPortal';
import { CoalescingSimulator } from './components/CoalescingSimulator';
import { ArchitecturalLaws } from './components/ArchitecturalLaws';
import { DeveloperSDK } from './components/DeveloperSDK';
import { Footer } from './components/Footer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[AnvayKosh Boundary Caught Error]:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-stone-100 text-[#191918] rounded-3xl m-6 border border-[#EAE4DC]">
          <h2 className="text-xl font-bold font-serif">Something encountered a minor issue in this section</h2>
          <p className="text-xs mt-2 font-mono text-[#5C584E]">{this.state.error?.message}</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 px-5 py-2 rounded-full bg-[#D77259] text-white text-xs font-semibold"
          >
            Reload Section
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export const App: React.FC = () => {
  const handleOpenSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#FAF7F2] text-[#191918] font-sans antialiased selection:bg-[#D77259] selection:text-white">
        
        {/* Sleek Floating Apple Liquid Glass Capsule Dock */}
        <Navbar onOpenSimulator={handleOpenSimulator} />

        {/* Main Content Flow */}
        <main>
          {/* Monumental Hero with Interactive Topology Orbit */}
          <Hero onOpenSimulator={handleOpenSimulator} />

          {/* Real Ecosystem & Backend Metrics Bar */}
          <EcosystemStats />

          {/* 5 Registered Flagship Client Applications */}
          <AppsShowcase />

          {/* 4 Core Foundational Platform Pillars */}
          <PlatformPillars />

          {/* Architect & Creator Dossier: Amit Chakraborty */}
          <FounderSection />

          {/* End-to-End Action Gateway: How to Test, Buyout, Register, Login */}
          <EngagementPortal />

          {/* Interactive Lossless Vault Coalescing Sandbox */}
          <CoalescingSimulator />

          {/* 7 Architectural Laws & Cloud Comparison */}
          <ArchitecturalLaws />

          {/* Systems Developer Integration SDK */}
          <DeveloperSDK />
        </main>

        {/* Authoritative Ecosystem Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
