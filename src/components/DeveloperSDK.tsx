import { Check, Copy, Terminal } from 'lucide-react';
import React, { useState } from 'react';

export const DeveloperSDK: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'ts' | 'kotlin' | 'swift' | 'python'>(
    'ts',
  );
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    ts: `// Anvay ID & Anvay Vault Integration (Expo SDK 58 / React Native)
import { useAnvayAuth, anvayVault } from '@anvaykosh/client-sdk';

export function ProfileSyncScreen() {
  const { signInWithAnvayID, session } = useAnvayAuth({
    clientId: 'com.amit.thrivefold',
    redirectUri: 'thrivefold://oauth/callback',
    scopes: ['identity.basic', 'health.vitality']
  });

  // Non-destructive profile coalescing
  const handleVaultSync = async () => {
    // Law 6: Fills null fields, never overwrites populated data
    const syncResult = await anvayVault.coalesce({
      sourceApp: 'com.amit.thrivefold',
      fields: {
        vitalityGoal: '45m bodyweight cadence + posture mobility'
      }
    });

    console.log('[AnvayVault] Merged without data loss:', syncResult.mergedFields);
  };

  return (
    <Button onPress={signInWithAnvayID}>1-Tap Anvay ID Login</Button>
  );
}`,
    kotlin: `// Anvay Connect: Signature-Protected ContentProvider (Android Kotlin)
package com.amit.neev.anvay

import android.net.Uri
import com.anvaykosh.core.security.SignatureValidator

class AnvayVaultClient(private val context: Context) {
    companion object {
        private val VAULT_URI = Uri.parse("content://com.amit.setu.vault.provider/profile")
        private const val EXPECTED_SIGNATURE_SHA256 = "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855"
    }

    fun querySafeProfile(): KoshProfile? {
        // Enforce Strict Law 3: Verify caller certificate before binding
        if (!SignatureValidator.verifyTargetPackage(context, "com.amit.setu", EXPECTED_SIGNATURE_SHA256)) {
            throw SecurityException("Unauthorized vault provider! Signature mismatch.")
        }

        return context.contentResolver.query(VAULT_URI, null, null, null, null)?.use { cursor ->
            // Lossless SQLite extraction with provenance
            KoshProfileParser.fromCursor(cursor)
        }
    }
}`,
    swift: `// Anvay ID: OAuth 2.1 PKCE with ASWebAuthenticationSession (Swift / iOS)
import AuthenticationServices
import CryptoKit

class AnvayAuthenticator: NSObject, ASWebAuthenticationPresentationContextProviding {
    func initiate1TapLogin(completion: @escaping (Result<String, Error>) -> Void) {
        let codeVerifier = PKCEHelper.generateRandomCodeVerifier()
        let codeChallenge = PKCEHelper.sha256Challenge(from: codeVerifier)

        let authURL = URL(string: "https://id.anvaykosh.com/oauth/authorize?" +
            "client_id=com.amit.harmonybloom&" +
            "response_type=code&" +
            "code_challenge=\(codeChallenge)&" +
            "code_challenge_method=S256&" +
            "redirect_uri=harmonybloom://oauth/callback")!

        let session = ASWebAuthenticationSession(url: authURL, callbackURLScheme: "harmonybloom") { callbackURL, error in
            guard let callbackURL = callbackURL, error == nil else { return }
            let authCode = URLComponents(url: callbackURL, resolvingAgainstBaseURL: false)?
                .queryItems?.first(where: { $0.name == "code" })?.value
            completion(.success(authCode ?? ""))
        }
        session.presentationContextProvider = self
        session.start()
    }
}`,
    python: `# AnvayKosh Python Ecosystem Client (Python SDK)
from app.services.rag_service import HybridRagService
from app.services.radar_engine import RadarEngine

rag = HybridRagService()
radar = RadarEngine()

# Semantic RAG context query against pgvector
context_chunks = await rag.query_similar(
    prompt="Explain Anvay Vault non-destructive coalescing contract",
    top_k=5,
    similarity_threshold=0.82
)

# Spatial Radar proximity check without cloud coordinates storage
safe_zone_status = radar.evaluate_perimeter(
    target_geohash="ttnf67",
    safe_zones=["Sacred Home Sanctuary"]
)`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sdk" className="relative py-28 bg-[#23201D] text-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2C2925] text-xs font-mono text-[#E2836E] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span className="font-semibold uppercase tracking-wider">
                SYSTEMS INTEGRATION API
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-medium text-[#FAF6F0] tracking-tight font-serif">
              Engineered for Clean Integration
            </h2>
            <p className="mt-4 text-[#C5BFB5] text-sm sm:text-base leading-relaxed">
              Standardized APIs for first-party apps and authorized extensions. Simple 1-tap OAuth
              2.1 PKCE, hardware signature validation, and transparent provenance ledgers.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex rounded-full bg-[#2C2925] p-1.5">
              <button
                onClick={() => setSelectedLanguage('ts')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
                  selectedLanguage === 'ts'
                    ? 'bg-[#D77259] text-white'
                    : 'text-[#C5BFB5] hover:text-[#FAF6F0]'
                }`}
              >
                TypeScript
              </button>
              <button
                onClick={() => setSelectedLanguage('kotlin')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
                  selectedLanguage === 'kotlin'
                    ? 'bg-[#D77259] text-white'
                    : 'text-[#C5BFB5] hover:text-[#FAF6F0]'
                }`}
              >
                Kotlin
              </button>
              <button
                onClick={() => setSelectedLanguage('swift')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
                  selectedLanguage === 'swift'
                    ? 'bg-[#D77259] text-white'
                    : 'text-[#C5BFB5] hover:text-[#FAF6F0]'
                }`}
              >
                Swift
              </button>
              <button
                onClick={() => setSelectedLanguage('python')}
                className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-colors ${
                  selectedLanguage === 'python'
                    ? 'bg-[#D77259] text-white'
                    : 'text-[#C5BFB5] hover:text-[#FAF6F0]'
                }`}
              >
                Python
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippet Card */}
        <div className="rounded-[36px] overflow-hidden bg-[#2C2925] text-[#FAF6F0]">
          <div className="px-8 py-5 bg-[#23201D] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D77259]"></span>
              <span className="w-3 h-3 rounded-full bg-[#7D9C7B]"></span>
              <span className="w-3 h-3 rounded-full bg-stone-500"></span>
              <span className="text-xs font-mono text-[#9E978C] ml-2">
                anvay-integration.
                {selectedLanguage === 'ts'
                  ? 'tsx'
                  : selectedLanguage === 'kotlin'
                    ? 'kt'
                    : selectedLanguage === 'swift'
                      ? 'swift'
                      : 'py'}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="px-4 py-1.5 rounded-full bg-[#36322D] hover:bg-[#403B35] text-xs font-mono text-[#FAF6F0] flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-[#8EAA8C]" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="p-8 overflow-x-auto text-xs font-mono leading-relaxed text-[#D5CFC7]">
            <pre>
              <code>{codeSnippets[selectedLanguage]}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
