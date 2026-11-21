import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Database, Layers, Check, RefreshCw } from 'lucide-react';

interface VaultField {
  value: string | null;
  sourceApp: string | null;
  updatedAt: string | null;
}

interface VaultProfile {
  displayName: VaultField;
  avatar: VaultField;
  vitalityGoal: VaultField;
  familySafeZone: VaultField;
  circadianSleepSchedule: VaultField;
  focusTargetDaily: VaultField;
}

const INITIAL_VAULT: VaultProfile = {
  displayName: {
    value: 'Amit Sharma',
    sourceApp: 'com.amit.setu',
    updatedAt: '2026-11-18 10:24:00'
  },
  avatar: {
    value: 'https://id.anvaykosh.com/avatars/amit.svg',
    sourceApp: 'com.amit.setu',
    updatedAt: '2026-11-18 10:24:00'
  },
  vitalityGoal: { value: null, sourceApp: null, updatedAt: null },
  familySafeZone: { value: null, sourceApp: null, updatedAt: null },
  circadianSleepSchedule: { value: null, sourceApp: null, updatedAt: null },
  focusTargetDaily: { value: null, sourceApp: null, updatedAt: null }
};

const INCOMING_PAYLOADS = {
  thrivefold: {
    appName: 'Thrivefold',
    packageId: 'com.amit.thrivefold',
    fields: {
      displayName: 'Amit (Mobility Athlete)',
      vitalityGoal: '45m bodyweight cadence + posture mobility'
    }
  },
  neev: {
    appName: 'Neev',
    packageId: 'com.amit.neev',
    fields: {
      displayName: 'Amit (Family Head)',
      familySafeZone: 'Sacred Sanctuary (28.6139 N, 77.2090 E)'
    }
  },
  harmonybloom: {
    appName: 'HarmonyBloom',
    packageId: 'com.amit.harmonybloom',
    fields: {
      circadianSleepSchedule: '22:30 - 06:30 (8h Circadian Rest Window)'
    }
  },
  blinkquest: {
    appName: 'BlinkQuest',
    packageId: 'com.amit.blinkquest',
    fields: {
      focusTargetDaily: '20-20-20 Adaptive Vision Ergonomics (Target: 14 blinks/min)'
    }
  }
};

export const CoalescingSimulator: React.FC = () => {
  const [vault, setVault] = useState<VaultProfile>(INITIAL_VAULT);
  const [selectedAppKey, setSelectedAppKey] = useState<keyof typeof INCOMING_PAYLOADS>('thrivefold');
  const [lastLog, setLastLog] = useState<{
    merged: string[];
    preserved: string[];
    timestamp: string;
  } | null>(null);

  const selectedPayload = INCOMING_PAYLOADS[selectedAppKey];

  const handleExecuteCoalesce = () => {
    const timestamp = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const updatedVault = { ...vault };
    const mergedList: string[] = [];
    const preservedList: string[] = [];

    Object.entries(selectedPayload.fields).forEach(([key, incomingVal]) => {
      const fieldKey = key as keyof VaultProfile;
      const current = vault[fieldKey];

      // Strict Law 6: Non-destructive nullish coalescing
      if (current.value === null || current.value === undefined) {
        updatedVault[fieldKey] = {
          value: incomingVal,
          sourceApp: selectedPayload.packageId,
          updatedAt: timestamp
        };
        mergedList.push(fieldKey);
      } else {
        preservedList.push(fieldKey);
      }
    });

    setVault(updatedVault);
    setLastLog({
      merged: mergedList,
      preserved: preservedList,
      timestamp
    });

    if (mergedList.length > 0) {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: ['#D77259', '#7D9C7B', '#EAE4DC']
      });
    }
  };

  const handleResetVault = () => {
    setVault(INITIAL_VAULT);
    setLastLog(null);
  };

  return (
    <section id="simulator" className="relative py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-xs font-mono text-[#D77259] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span className="font-semibold uppercase tracking-wider">INTERACTIVE SIMULATION SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-medium text-[#191918] tracking-tight font-serif">
            Strict Law 6: Lossless Coalescing Simulator
          </h2>
          <p className="mt-4 text-[#5C584E] text-sm sm:text-base leading-relaxed">
            Experience how Anvay Vault reconciles updates across ecosystem apps without overwriting user data. 
            Incoming updates fill nullish fields only while existing records remain immutable with clear provenance.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Incoming Payload Controller */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 rounded-[36px] bg-white space-y-6">
              
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#D77259] font-semibold block mb-1">
                  Step 1: Choose Incoming Source App
                </span>
                <h3 className="text-xl font-bold text-[#191918] font-serif">
                  Simulate Cross-App Handoff
                </h3>
              </div>

              {/* App Selectors */}
              <div className="grid grid-cols-2 gap-2.5">
                {Object.entries(INCOMING_PAYLOADS).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAppKey(key as keyof typeof INCOMING_PAYLOADS)}
                    className={`p-3.5 rounded-2xl text-left transition-all ${
                      selectedAppKey === key
                        ? 'bg-[#D77259] text-white'
                        : 'bg-[#FAF7F2] hover:bg-[#F2ECE4] text-[#5C584E]'
                    }`}
                  >
                    <span className="text-xs font-bold block">{item.appName}</span>
                    <span className={`text-[10px] font-mono block truncate ${selectedAppKey === key ? 'text-white/80' : 'text-[#7A766A]'}`}>
                      {item.packageId.replace('com.amit.', '')}
                    </span>
                  </button>
                ))}
              </div>

              {/* Payload Preview */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#7A766A] font-semibold block">
                  Incoming Record Payload:
                </span>
                <div className="p-4 rounded-2xl bg-[#FAF7F2] text-xs font-mono text-[#191918] space-y-1.5 overflow-x-auto">
                  {Object.entries(selectedPayload.fields).map(([k, v]) => (
                    <div key={k} className="flex gap-2">
                      <span className="text-[#D77259]">{k}:</span>
                      <span className="text-[#191918] font-medium truncate">"{v}"</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trigger Button */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={handleExecuteCoalesce}
                  className="squircle-button flex-1 py-3.5 bg-[#D77259] hover:bg-[#C25F47] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>Execute Non-Destructive Coalesce</span>
                </button>

                <button
                  onClick={handleResetVault}
                  title="Reset Vault to Default"
                  className="p-3.5 rounded-full bg-[#FAF7F2] hover:bg-[#EAE4DC] text-[#5C584E] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Execution Log */}
              {lastLog && (
                <div className="p-4 rounded-2xl bg-[#FAF7F2] text-xs space-y-2 animate-in fade-in">
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#7A766A]">Audit Timestamp:</span>
                    <span className="text-[#191918] font-medium">{lastLog.timestamp}</span>
                  </div>

                  {lastLog.merged.length > 0 && (
                    <div className="flex items-start gap-1.5 text-[#4E7A4C]">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#7D9C7B]" />
                      <span>
                        Populated empty fields: <strong>{lastLog.merged.join(', ')}</strong>
                      </span>
                    </div>
                  )}

                  {lastLog.preserved.length > 0 && (
                    <div className="flex items-start gap-1.5 text-[#D77259]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D77259] mt-1.5 shrink-0"></span>
                      <span>
                        Preserved existing data (Law 6): <strong>{lastLog.preserved.join(', ')}</strong>
                      </span>
                    </div>
                  )}
                </div>
              )}

            </div>
          </div>

          {/* Right Column: Live Anvay Vault Record */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[36px] bg-white space-y-5">
              
              <div className="flex flex-wrap items-center justify-between pb-4 gap-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#D77259] font-semibold block mb-0.5">
                    Live Keystore Storage (SQLite Enclave)
                  </span>
                  <h3 className="text-2xl font-bold text-[#191918] font-serif">
                    Anvay Vault Active State
                  </h3>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#7D9C7B]/15 text-[#4E7A4C] font-semibold">
                  Zero Overwrite Guarantee
                </span>
              </div>

              {/* Vault Fields Table */}
              <div className="space-y-3">
                {Object.entries(vault).map(([fieldKey, fieldData]) => {
                  const isPopulated = fieldData.value !== null;
                  return (
                    <div 
                      key={fieldKey}
                      className={`p-4 rounded-2xl transition-all ${
                        isPopulated 
                          ? 'bg-[#FAF7F2]' 
                          : 'bg-[#FAF7F2]/40 text-stone-400'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                        <span className="text-xs font-mono font-semibold text-[#191918]">
                          {fieldKey}
                        </span>
                        {isPopulated && (
                          <span className="text-[10px] font-mono text-[#D77259] bg-[#D77259]/10 px-2 py-0.5 rounded-full">
                            provenance: {fieldData.sourceApp?.replace('com.amit.', '')}
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-mono">
                        {isPopulated ? (
                          <span className="text-[#191918] font-medium break-all">
                            "{fieldData.value}"
                          </span>
                        ) : (
                          <span className="italic text-stone-400">null (waiting for verified category grant)</span>
                        )}
                      </div>

                      {isPopulated && (
                        <div className="text-[10px] font-mono text-[#7A766A] mt-1">
                          last synced: {fieldData.updatedAt}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
