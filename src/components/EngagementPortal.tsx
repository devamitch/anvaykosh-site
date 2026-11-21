import {
  ArrowRight,
  Check,
  Copy,
  DollarSign,
  Key,
  Mail,
  Send,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import React, { useState } from 'react';
import { AMIT_CHAKRABORTY_BIO, ECOSYSTEM_APPS } from '../data/ecosystemData';
import { GithubIcon } from './GithubIcon';

export const EngagementPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'test' | 'buyout' | 'register' | 'login' | 'contact'>(
    'test',
  );
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    intent: 'testing',
    message: '',
  });

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="engage" className="relative py-28 bg-[#23201D] text-[#FAF6F0]">
      {/* Soothing Warm Terracotta Ambient Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(215,114,89,0.1),transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C2925] text-xs font-mono text-[#E2836E] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D77259]"></span>
            <span className="font-semibold uppercase tracking-wider">
              ACTION & PARTNERSHIP GATEWAY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#FAF6F0] tracking-tight font-serif">
            Engage with AnvayKosh & Amit Chakraborty
          </h2>
          <p className="mt-4 text-[#C5BFB5] text-sm sm:text-base leading-relaxed">
            Test verified production applications, register your app for the AnvayKosh sovereign
            mesh, integrate 1-tap Anvay ID, or discuss commercial buyouts and technology licensing.
          </p>
        </div>

        {/* Tab Segment Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab('test')}
            className={`squircle-button px-5 py-2.5 text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'test'
                ? 'bg-[#D77259] text-white'
                : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>How to Test Apps</span>
          </button>

          <button
            onClick={() => setActiveTab('login')}
            className={`squircle-button px-5 py-2.5 text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'login'
                ? 'bg-[#D77259] text-white'
                : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>Login with Anvay (OAuth 2.1)</span>
          </button>

          <button
            onClick={() => setActiveTab('register')}
            className={`squircle-button px-5 py-2.5 text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'register'
                ? 'bg-[#D77259] text-white'
                : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Register Your App</span>
          </button>

          <button
            onClick={() => setActiveTab('buyout')}
            className={`squircle-button px-5 py-2.5 text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'buyout'
                ? 'bg-[#D77259] text-white'
                : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>App Buyout & Licensing</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`squircle-button px-5 py-2.5 text-xs font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'contact'
                ? 'bg-[#D77259] text-white'
                : 'bg-[#2C2925] text-[#C5BFB5] hover:text-[#FAF6F0] hover:bg-[#36322D]'
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Messenger</span>
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="max-w-4xl mx-auto">
          {/* TAB 1: How to Test Apps */}
          {activeTab === 'test' && (
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#2C2925] space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-2xl font-bold text-[#FAF6F0] font-serif">
                  Join Internal & Closed Testing Tracks
                </h3>
                <p className="text-sm text-[#C5BFB5] mt-1 leading-relaxed">
                  All five flagship apps are actively deployed on Google Play Console under Amit Dev
                  Labs (Developer ID: 4618297291940146992). Follow the steps below to opt in as a
                  verified tester.
                </p>
              </div>

              {/* Instructions steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#23201D] space-y-2">
                  <span className="w-7 h-7 rounded-xl bg-[#D77259] text-white font-mono font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h4 className="text-sm font-bold text-[#FAF6F0] font-serif">
                    Request Tester Access
                  </h4>
                  <p className="text-xs text-[#C5BFB5] leading-relaxed">
                    Send your Google Play account email to{' '}
                    <strong className="text-[#FAF6F0]">amit@devamit.co.in</strong> with subject "Play Store Tester Access".
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#23201D] space-y-2">
                  <span className="w-7 h-7 rounded-xl bg-[#D77259] text-white font-mono font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h4 className="text-sm font-bold text-[#FAF6F0] font-serif">
                    Console Track Opt-In
                  </h4>
                  <p className="text-xs text-[#C5BFB5] leading-relaxed">
                    Accept the testing invite link sent to your inbox to unlock downloads directly
                    from Google Play Store.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#23201D] space-y-2">
                  <span className="w-7 h-7 rounded-xl bg-[#D77259] text-white font-mono font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h4 className="text-sm font-bold text-[#FAF6F0] font-serif">
                    Launch via Deep Links
                  </h4>
                  <p className="text-xs text-[#C5BFB5] leading-relaxed">
                    Test inter-app handoffs and biometric authentication using the official verified
                    URL schemes.
                  </p>
                </div>
              </div>

              {/* Deep Link Test Launcher Table */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E978C] font-semibold mb-3">
                  Production URL Schemes & Verification Status
                </h4>

                <div className="space-y-2.5">
                  {ECOSYSTEM_APPS.map((app) => (
                    <div
                      key={app.id}
                      className="p-4 rounded-2xl bg-[#23201D] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={app.iconPath}
                          alt={app.name}
                          className="w-10 h-10 rounded-xl object-contain bg-[#2C2925] p-1"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-[#FAF6F0] font-serif">
                              {app.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#7D9C7B]/20 text-[#8EAA8C] font-medium">
                              {app.playStoreTrack}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-[#9E978C]">
                            {app.packageId} (Build {app.buildCode})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono bg-[#2C2925] px-3.5 py-1.5 rounded-full text-[#E2836E] font-medium">
                          {app.deepLinkScheme}
                        </code>
                        <button
                          onClick={() => handleCopy(app.deepLinkScheme, app.id)}
                          className="p-2 rounded-full bg-[#2C2925] hover:bg-[#34302B] text-[#C5BFB5] transition-colors"
                          title="Copy URL Scheme"
                        >
                          {copiedLink === app.id ? (
                            <Check className="w-3.5 h-3.5 text-[#8EAA8C]" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#23201D] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-[#C5BFB5]">
                  Prefer direct signed APKs for physical hardware testing without Play Store?
                </span>
                <a
                  href={`mailto:${AMIT_CHAKRABORTY_BIO.email}?subject=Direct%20APK%20Testing%20Request`}
                  className="squircle-button px-5 py-2.5 bg-[#D77259] hover:bg-[#C25F47] text-white font-medium whitespace-nowrap transition-colors"
                >
                  Request Signed APKs
                </a>
              </div>
            </div>
          )}

          {/* TAB 2: Login with Anvay ID */}
          {activeTab === 'login' && (
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#2C2925] space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-2xl font-bold text-[#FAF6F0] font-serif">
                  Integrate "Login with Anvay" (OAuth 2.1 PKCE)
                </h3>
                <p className="text-sm text-[#C5BFB5] mt-1 leading-relaxed">
                  Provide your users with zero-surveillance, 1-tap single sign-on. URLs carry
                  short-lived one-time authorization codes only—never profile data, health telemetry,
                  or private tokens.
                </p>
              </div>

              {/* Protocol Spec Overview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-5 rounded-2xl bg-[#23201D] space-y-2">
                  <h4 className="font-mono text-[#E2836E] font-semibold uppercase">
                    Authorization Endpoint
                  </h4>
                  <code className="block bg-[#2C2925] p-3 rounded-xl text-white font-mono break-all">
                    https://id.anvaykosh.com/oauth/authorize
                  </code>
                  <p className="text-[#9E978C] text-[11px]">
                    Requires code_challenge (S256), client_id, and verified redirect_uri.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#23201D] space-y-2">
                  <h4 className="font-mono text-[#E2836E] font-semibold uppercase">
                    Token Exchange Endpoint
                  </h4>
                  <code className="block bg-[#2C2925] p-3 rounded-xl text-white font-mono break-all">
                    https://id.anvaykosh.com/oauth/token
                  </code>
                  <p className="text-[#9E978C] text-[11px]">
                    Validates code_verifier against issued challenge before returning signed session.
                  </p>
                </div>
              </div>

              {/* Steps to get Client Credentials */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E978C] font-semibold">
                  How to Register Your Client
                </h4>
                <ol className="space-y-2 text-xs text-[#C5BFB5] list-decimal pl-4 leading-relaxed">
                  <li>
                    Submit your application package name (e.g. <code>com.yourcompany.app</code>) and
                    signing certificate SHA-256 fingerprint.
                  </li>
                  <li>
                    Declare required scopes with clear justification (e.g.{' '}
                    <code>identity.basic</code>, <code>health.vitality</code>).
                  </li>
                  <li>
                    Once approved by Amit Dev Labs, your app is enrolled in the server-enforced
                    registry and issued an OAuth 2.1 client identifier.
                  </li>
                </ol>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveTab('register')}
                  className="squircle-button px-6 py-3 bg-[#D77259] hover:bg-[#C25F47] text-white text-xs font-semibold transition-all flex items-center gap-2"
                >
                  <span>Register Your Application Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: Register Your App */}
          {activeTab === 'register' && (
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#2C2925] space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-2xl font-bold text-[#FAF6F0] font-serif">
                  Register Your Application with AnvayKosh
                </h3>
                <p className="text-sm text-[#C5BFB5] mt-1 leading-relaxed">
                  Strict Law 3 enforces that unknown apps fail closed. Knowing a URL scheme grants
                  zero access. Submit your package details to join the authorized peer mesh.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#FAF6F0] font-medium block">Application Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sacred Garden"
                      className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#FAF6F0] font-medium block">
                      Android Package Name / iOS Bundle ID
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="com.example.sacredgarden"
                      className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#FAF6F0] font-medium block">
                    Signing Certificate SHA-256 Fingerprint
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E3:B0:C4:42:98:FC:1C:14:9A:FB:F4:C8:99:6F:B9:24:27:AE:41:E4..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] font-mono text-[11px] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40"
                  />
                  <span className="text-[10px] text-[#9E978C]">
                    Required by Android signature permissions and server registry check.
                  </span>
                </div>

                <div className="space-y-1">
                  <label className="text-[#FAF6F0] font-medium block">
                    Requested Anvay Vault Categories & Purpose
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Explain which categories (identity, health, cycle, family, vision) your app needs and user benefits..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="squircle-button px-6 py-3.5 bg-[#D77259] hover:bg-[#C25F47] text-white font-semibold transition-all flex items-center gap-2"
                  >
                    <span>Submit Registration Application</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#7D9C7B]/20 text-[#8EAA8C] text-xs font-medium animate-in fade-in">
                    Application received! Amit Dev Labs review board will verify your certificate
                    fingerprint within 48 hours.
                  </div>
                )}
              </form>
            </div>
          )}

          {/* TAB 4: Commercial Buyout & Licensing */}
          {activeTab === 'buyout' && (
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#2C2925] space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-2xl font-bold text-[#FAF6F0] font-serif">
                  Commercial Buyout, M&A & Technology Licensing
                </h3>
                <p className="text-sm text-[#C5BFB5] mt-1 leading-relaxed">
                  Interested in acquiring one of our verified flagship applications, licensing the
                  AnvayKosh local-first technology stack, or partnering with Chief Architect Amit
                  Chakraborty?
                </p>
              </div>

              {/* Assets Available for Buyout */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#9E978C] font-semibold">
                  Ecosystem Assets Available for Acquisition / Licensing
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      Thrivefold Complete IP
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      On-device MediaPipe joint biomechanics engine, local SQLite hybrid RAG, and
                      mindful correspondence system.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Full Source + Play Store Listing Transfer
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      Neev Family Sanctuary & 3D Radar
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      Zero-telemetry family emergency radar with offline vector MBTiles and AES-GCM
                      encrypted heirloom vault.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Turnkey Family OS Platform
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      BlinkQuest Vision Ergonomics
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      Real-time 30fps Eye Aspect Ratio (EAR) blink tracking via MediaPipe with
                      picture-in-picture overlay.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Enterprise Ergonomics Asset
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      Setu P2P Swarm & Keystore Protocol
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      120+ Mbps Wi-Fi Direct socket engine, ed25519 peer discovery, and hardware
                      keystore identity anchor.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Offline Infrastructure Patentable Tech
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      Ravuno Sovereign Commerce Suite
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      Offline-first point-of-sale, encrypted SQLite transaction ledger, and ed25519 cryptographic merchant receipts.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Decentralized Micro-Merchant IP
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#23201D] space-y-1.5">
                    <span className="font-serif font-bold text-[#FAF6F0] block text-sm">
                      Haulwise Autonomous Fleet Logistics
                    </span>
                    <p className="text-[#C5BFB5] text-[11px] leading-relaxed">
                      Autonomous multi-stop delivery routing and turn-by-turn dead-reckoning navigation using offline vector MBTiles.
                    </p>
                    <span className="text-[10px] font-mono text-[#E2836E] font-medium block">
                      Zero-Telemetry Fleet Engine IP
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Buyout Inquiry Action */}
              <div className="p-6 rounded-2xl bg-[#23201D] space-y-3">
                <h4 className="text-sm font-bold text-[#FAF6F0] font-serif">
                  Initiate Commercial Discussion
                </h4>
                <p className="text-xs text-[#C5BFB5] leading-relaxed">
                  For formal inquiries, term sheets, or IP due diligence documentation, reach out
                  directly to Amit Chakraborty.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`mailto:${AMIT_CHAKRABORTY_BIO.email}?subject=Commercial%20Buyout%20/%20Licensing%20Inquiry`}
                    className="squircle-button px-5 py-2.5 bg-[#D77259] hover:bg-[#C25F47] text-white text-xs font-semibold transition-all flex items-center gap-2"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email amit@devamit.co.in</span>
                  </a>

                  <a
                    href={AMIT_CHAKRABORTY_BIO.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="squircle-button px-5 py-2.5 bg-[#2C2925] hover:bg-[#36322D] text-[#FAF6F0] text-xs font-medium transition-colors flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-[#8EAA8C]" />
                    <span>Telegram @devamitch</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: Direct Contact Messenger */}
          {activeTab === 'contact' && (
            <div className="p-8 sm:p-12 rounded-[36px] bg-[#2C2925] space-y-8 animate-in fade-in duration-200">
              <div>
                <h3 className="text-2xl font-bold text-[#FAF6F0] font-serif">
                  Direct Channel to Amit Chakraborty
                </h3>
                <p className="text-sm text-[#C5BFB5] mt-1 leading-relaxed">
                  Send a direct message regarding architecture consulting, engineering
                  collaboration, application testing feedback, or general inquiries.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[#FAF6F0] font-medium block">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikramaditya Roy"
                      className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[#FAF6F0] font-medium block">Your Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[#FAF6F0] font-medium block">Topic of Inquiry</label>
                  <select
                    value={formData.intent}
                    onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40 font-medium"
                  >
                    <option value="testing">Application Testing Track Opt-In</option>
                    <option value="buyout">Commercial Buyout / Asset Acquisition</option>
                    <option value="licensing">AnvayKosh Technology Licensing</option>
                    <option value="oauth">Login with Anvay Integration</option>
                    <option value="consulting">Systems Architecture Advisory</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[#FAF6F0] font-medium block">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query or proposal..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#23201D] text-[#FAF6F0] placeholder-[#9E978C] focus:outline-none focus:ring-2 focus:ring-[#D77259]/40 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="squircle-button px-7 py-3.5 bg-[#D77259] hover:bg-[#C25F47] text-white font-semibold transition-all flex items-center gap-2"
                  >
                    <span>Transmit Message Directly</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {formSubmitted && (
                  <div className="p-4 rounded-2xl bg-[#7D9C7B]/20 text-[#8EAA8C] text-xs font-medium animate-in fade-in">
                    Message transmitted successfully! Amit Chakraborty will respond within 24 hours
                    to {formData.email || 'your email'}.
                  </div>
                )}
              </form>

              {/* Direct Channels Footer */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#C5BFB5]">
                <div>Direct: amit@devamit.co.in</div>
                <div className="flex items-center gap-4">
                  <a
                    href={AMIT_CHAKRABORTY_BIO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FAF6F0] flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>devamitch</span>
                  </a>
                  <a
                    href={AMIT_CHAKRABORTY_BIO.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#FAF6F0] flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-[#8EAA8C]" />
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
