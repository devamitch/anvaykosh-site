export interface EcosystemApp {
  id: string;
  name: string;
  devanagari: string;
  tagline: string;
  category: 'health' | 'family' | 'women' | 'vision' | 'mesh' | 'commerce' | 'logistics';
  categoryLabel: string;
  packageId: string;
  deepLinkScheme: string;
  version: string;
  buildCode: number;
  playStoreTrack: string;
  statusBadge: string;
  iconPath: string;
  featureGraphic: string;
  accentColor: string;
  secondaryColor: string;
  summary: string;
  usp: string;
  securityGuarantee: string;
  features: string[];
  specs: {
    engine: string;
    aiModel: string;
    offlineCapability: string;
    dataBoundary: string;
    vaultPermissions: string[];
  };
  screenshots: string[];
}

export interface PlatformPillar {
  id: string;
  title: string;
  devanagari: string;
  tagline: string;
  protocol: string;
  color: string;
  description: string;
  laws: string[];
  capabilities: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export interface BackendSystemModule {
  id: string;
  title: string;
  category: 'core' | 'ai' | 'radar' | 'scheduler' | 'storage';
  tagline: string;
  status: 'online' | 'active' | 'hardened';
  description: string;
  metrics: string;
  techStack: string[];
  responsibilities: string[];
}

export interface OtherProject {
  name: string;
  category: string;
  techStack: string;
  purpose: string;
  status: string;
}

export const AMIT_CHAKRABORTY_BIO = {
  name: 'Amit Chakraborty',
  handle: '@devamitch',
  role: 'Creator & Chief Systems Architect',
  organization: 'Amit Dev Labs (Developer ID: 4618297291940146992)',
  location: 'India',
  github: 'https://github.com/devamitch',
  email: 'amit@devamit.co.in',
  telegram: 'https://t.me/devamitch',
  vision: 'Building sovereign personal technology that respects human dignity, family boundaries, and true offline data ownership. Every app is built to operate autonomously with zero surveillance, on-device AI, and cryptographic enclaves.',
  philosophy: [
    'Offline-First Autonomy: Software must work completely when cellular signal drops or servers fail.',
    'Ephemeral Vision & Telemetry: Camera frames and biometric keypoints are computed in RAM only and never recorded or transmitted.',
    'Non-Destructive Provenance: User data must never be overwritten by blind cloud sync. Provenance and ownership must be immutable.',
    'Single Purpose Craftsmanship: Five focused, deliberate instruments rather than bloated, extractive super-apps.'
  ]
};

export const OTHER_PROJECTS: OtherProject[] = [
  {
    name: 'Amit Intelligence Admin',
    category: 'Executive Mission Control',
    techStack: 'Next.js 16, React 19, Tailwind CSS, TanStack Table',
    purpose: 'Administrative control portal for inspecting live AI pipelines, review queues, database models, and cloud cron logs.',
    status: 'Production Live'
  },
  {
    name: 'Aura Mobile Starter Template',
    category: 'Engineering Architecture Foundation',
    techStack: 'Expo 55, React Native, CNG, Skia, Ignite',
    purpose: 'Production-grade enterprise mobile starter with New Architecture, Skia styling, and Web/iOS/Android cross-platform parity.',
    status: 'Active Template'
  },
  {
    name: 'Telehealth Core Engine',
    category: 'Clinical Routing Backend',
    techStack: 'Node.js, REST API, Fastify, HIPAA Enclave',
    purpose: 'Clinical telehealth consultation routing, patient appointment scheduling, and encrypted record management.',
    status: 'Production Hardened'
  },
  {
    name: 'CareerPilot',
    category: 'Career Intelligence Engine',
    techStack: 'Next.js 16, AI Document Processing, Tailwind',
    purpose: 'Algorithmic career progression analyzer, automated recruiter outreach pipeline, and resume semantic parsing.',
    status: 'Active Pipeline'
  },
  {
    name: 'Market Mosaic Workbench',
    category: 'Market Intelligence & Analytics',
    techStack: 'React 19, Python Dataflow, SQLite Analytics',
    purpose: 'Quantitative market trends workbench with localized vector pattern recognition and algorithmic insights.',
    status: 'Active Workbench'
  },
  {
    name: 'Ravuno',
    category: 'Decentralized Offline-First Commerce',
    techStack: 'React Native, SQLite E2EE Ledger, P2P Swarm, ed25519 Invoicing',
    purpose: 'Offline-first merchant point-of-sale and peer-to-peer inventory ledger enabling trade and transactions when cellular networks fail.',
    status: 'Active Commerce Suite'
  },
  {
    name: 'Haulwise',
    category: 'Autonomous Offline Fleet Logistics',
    techStack: 'Expo SDK 58, Offline Vector MBTiles, Valhalla Local Routing, SQLite',
    purpose: 'Zero-telemetry delivery routing and autonomous fleet logistics with offline spatial dead-reckoning that never shares driver locations with brokers.',
    status: 'Production Fleet Engine'
  }
];

export const ECOSYSTEM_APPS: EcosystemApp[] = [
  {
    id: 'thrivefold',
    name: 'Thrivefold',
    devanagari: 'थ्राइवफ़ोल्ड',
    tagline: 'Mindful Fitness, On-Device Pose Tracking & Slow Correspondence',
    category: 'health',
    categoryLabel: 'Health & Biomechanics',
    packageId: 'com.amit.thrivefold',
    deepLinkScheme: 'thrivefold://',
    version: '1.0.1',
    buildCode: 2,
    playStoreTrack: 'Internal Testing (Google Play Console)',
    statusBadge: 'Verified Release v1.0.1',
    iconPath: '/apps/thrivefold/icon-512.png',
    featureGraphic: '/apps/thrivefold/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#7D9C7B',
    summary: 'A sanctuary for intentional physical vitality. Combines real-time on-device computer vision for joint biomechanics with calm offline cadence and slow mindful correspondence.',
    usp: 'Real-time on-device joint angle analysis without sending a single frame to the cloud, coupled with local SQLite hybrid RAG vitality coaching.',
    securityGuarantee: 'Biometric telemetry, pose keypoints, and camera streams never leave volatile device RAM. Full compliance with strict Anvay Vault non-leakage law.',
    features: [
      'On-device Pose Keypoint Analysis (0ms cloud latency)',
      'Cadence-driven bodyweight biomechanics engine',
      'Local SQLite Vitality Knowledge Base (Hybrid RAG)',
      'Slow correspondence & offline letters system',
      'Anvay ID 1-Tap authentication with PKCE',
      'Non-destructive biometric coalescing into Anvay Vault'
    ],
    specs: {
      engine: 'LiteRT-LM / MediaPipe Pose Landmark Engine',
      aiModel: 'Local bundled ML Kit + SQLite Vector FTS5',
      offlineCapability: '100% Autonomous Offline Execution',
      dataBoundary: 'Pose frames in RAM only; Health logs encrypted locally',
      vaultPermissions: ['health.vitality', 'profile.display_name']
    },
    screenshots: [
      '/apps/thrivefold/screenshots/01_home_screen.png',
      '/apps/thrivefold/screenshots/02_app_drawer.png',
      '/apps/thrivefold/screenshots/03_calendar_agenda.png',
      '/apps/thrivefold/screenshots/04_quests_arcade.png',
      '/apps/thrivefold/screenshots/05_train_hub.png',
      '/apps/thrivefold/screenshots/06_train_screen_hub.png'
    ]
  },
  {
    id: 'neev',
    name: 'Neev',
    devanagari: 'नींव',
    tagline: 'Private Family Operating System & Sacred Heirloom Sanctuary',
    category: 'family',
    categoryLabel: 'Family Sanctuary & Maps',
    packageId: 'com.amit.neev',
    deepLinkScheme: 'neev://',
    version: '1.0.3',
    buildCode: 3,
    playStoreTrack: 'Internal Testing (Google Play Console)',
    statusBadge: 'Verified Release v1.0.3',
    iconPath: '/apps/neev/icon-512.png',
    featureGraphic: '/apps/neev/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#5C584E',
    summary: 'The digital foundation for family life. Protects private family spaces, shared heirloom memories, ritual calendars, and zero-telemetry emergency radar maps.',
    usp: 'End-to-end encrypted family circles with offline tile maps and spatial 3D radar that never transmits coordinates to advertising brokers.',
    securityGuarantee: 'All family locations, heirloom documents, and shared memory albums remain encrypted on-device. Signature-bound ContentProvider prevents 3rd party eavesdropping.',
    features: [
      'Encrypted Heirloom & Document Vault (AES-GCM-256)',
      'Zero-telemetry Family Emergency Radar with Offline Tiles',
      'Shared Sacred Spaces, Rituals & Calendar Agendas',
      'Raised-cosine squircle navigation & living family mascots',
      'Anvay ID federated 1-tap single sign-on',
      'Android 11+ signature-enforced peer queries'
    ],
    specs: {
      engine: 'Spatial Radar Vector Engine + Offline Vector MBTiles',
      aiModel: 'Local Hybrid RAG Family Memory Assistant',
      offlineCapability: 'Full offline family coordination & map caching',
      dataBoundary: 'Family radar coordinates isolated to authorized circle only',
      vaultPermissions: ['family.circle', 'locations.emergency_safezones']
    },
    screenshots: [
      '/apps/neev/screenshots/01_dashboard_sanctuary.png',
      '/apps/neev/screenshots/02_onboarding_functions_scheduler.png',
      '/apps/neev/screenshots/03_onboarding_heirloom_vault.png',
      '/apps/neev/screenshots/04_auth_private_sanctuary.png',
      '/apps/neev/screenshots/05_family_live_radar_map.png',
      '/apps/neev/screenshots/06_family_functions_rituals.png'
    ]
  },
  {
    id: 'harmonybloom',
    name: 'HarmonyBloom',
    devanagari: 'हार्मनीब्लूम',
    tagline: 'Mindful Hormonal Harmony, Cycle Awareness & Circadian Sanctuary',
    category: 'women',
    categoryLabel: "Women's Wellness Enclave",
    packageId: 'com.amit.harmonybloom',
    deepLinkScheme: 'harmonybloom://',
    version: '1.0.1',
    buildCode: 2,
    playStoreTrack: 'Internal Testing (Google Play Console)',
    statusBadge: 'Verified Release v1.0.1',
    iconPath: '/apps/harmonybloom/icon-512.png',
    featureGraphic: '/apps/harmonybloom/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#7D9C7B',
    summary: 'A private sanctuary for women navigating natural hormonal rhythms. Features a circadian cycle dial, holistic symptom logging, and zero-telemetry reproductive sovereignty.',
    usp: 'Absolute cryptographic isolation of menstrual, ovulation, and symptom data. No corporate monetization, no cloud surveillance, 100% on-device.',
    securityGuarantee: 'Health & reproductive enclave keys reside in hardware Android Keystore. Cannot be requested or merged by sibling apps without explicit biometric consent.',
    features: [
      'Dynamic Circadian Cycle Dial with phase transitions',
      'Holistic physical, emotional & somatic symptom logger',
      'Private on-device Aura Wellness Companion',
      'Zero-knowledge encrypted local SQLite database',
      'Sensory calm light aesthetic with squircle dials',
      'Non-destructive Anvay Vault profile synchronization'
    ],
    specs: {
      engine: 'On-Device Rhythms State Machine + Enclave Keystore',
      aiModel: 'Private Local Symptom Analysis & Circadian Insights',
      offlineCapability: '100% Offline Operational Independence',
      dataBoundary: 'Strict Enclave: Reproductive data never leaves device',
      vaultPermissions: ['profile.first_name', 'preferences.circadian_sleep']
    },
    screenshots: [
      '/apps/harmonybloom/screenshots/01_auth_sanctuary.png',
      '/apps/harmonybloom/screenshots/02_holistic_dashboard.png',
      '/apps/harmonybloom/screenshots/03_cycle_rhythm_dial.png',
      '/apps/harmonybloom/screenshots/04_symptom_logger.png',
      '/apps/harmonybloom/screenshots/05_aura_ai_coach.png',
      '/apps/harmonybloom/screenshots/05_sanctuary_settings_theme.png'
    ]
  },
  {
    id: 'blinkquest',
    name: 'BlinkQuest',
    devanagari: 'ब्लिंकक्वेस्ट',
    tagline: 'Vision Ergonomics, MediaPipe Blink-Rate Tracking & Rest Breaks',
    category: 'vision',
    categoryLabel: 'Vision Ergonomics & AI',
    packageId: 'com.amit.blinkquest',
    deepLinkScheme: 'blinkquest://',
    version: '1.0.2',
    buildCode: 3,
    playStoreTrack: 'Closed Testing (Google Play Console)',
    statusBadge: 'Verified Release v1.0.2',
    iconPath: '/apps/blinkquest/icon-512.png',
    featureGraphic: '/apps/blinkquest/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#7D9C7B',
    summary: 'Combat digital eye strain and Computer Vision Syndrome with intelligent on-device ocular monitoring, picture-in-picture background tracking, and reflex focus breaks.',
    usp: 'Real-time eye aspect ratio (EAR) analysis via MediaPipe executing strictly in memory at 30fps with 0 bytes recorded or transmitted to servers.',
    securityGuarantee: 'Camera feed is processed in volatile memory only. No frames, face geometry, or images are ever stored on disk or transferred to network.',
    features: [
      'On-device Eye Aspect Ratio (EAR) blink rate detection',
      '20-20-20 Rule intelligent adaptive notifications',
      'Picture-in-Picture (PiP) background ergonomics overlay',
      'Mindful ocular focus games & micro-exercises',
      'Longitudinal eye fatigue trends & ergonomic scorecards',
      'Anvay ID fast sign-in with verified App Links'
    ],
    specs: {
      engine: 'MediaPipe Iris & Facial Mesh (On-device LiteRT)',
      aiModel: 'Local Geometric EAR Algorithm (Zero Cloud Calls)',
      offlineCapability: 'Runs completely offline with zero network dependency',
      dataBoundary: 'Video frames ephemeral in RAM; only blink count kept',
      vaultPermissions: ['ergonomics.daily_focus_score']
    },
    screenshots: [
      '/apps/blinkquest/screenshots/01-home-dashboard.png',
      '/apps/blinkquest/screenshots/02_unified_scanner.png',
      '/apps/blinkquest/screenshots/03_pip_multitasking.png',
      '/apps/blinkquest/screenshots/04_mindful_games.png',
      '/apps/blinkquest/screenshots/05_wellness_trends.png',
      '/apps/blinkquest/screenshots/06_privacy_offline.png'
    ]
  },
  {
    id: 'setu',
    name: 'Setu',
    devanagari: 'सेतु',
    tagline: 'Offline P2P Wi-Fi Direct Swarm Mesh & Flagship Identity Anchor',
    category: 'mesh',
    categoryLabel: 'P2P Mesh & Identity Anchor',
    packageId: 'com.amit.setu',
    deepLinkScheme: 'setu://',
    version: '1.0.13',
    buildCode: 27,
    playStoreTrack: 'Closed Testing (Google Play Console)',
    statusBadge: 'Verified Release v1.0.13',
    iconPath: '/apps/setu/icon-512.png',
    featureGraphic: '/apps/setu/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#7D9C7B',
    summary: 'The peer-to-peer bridge of the ecosystem. Facilitates high-speed offline file transfer via Wi-Fi Direct and acts as the local hardware keystore anchor for Anvay ID.',
    usp: 'Decentralized local swarm mesh achieving 120+ Mbps transfers with zero internet, zero cellular data, and zero central servers.',
    securityGuarantee: 'Cryptographic peer authentication using ed25519 public keys. Content sharing is direct point-to-point with TLS-PSK encryption.',
    features: [
      'High-speed Wi-Fi Direct & Hotspot Swarm transfers',
      'Flagship Anvay ID local Keystore Identity Anchor',
      'Cross-app authorized mesh relay using Android signature checks',
      'Encrypted P2P private media and document vault',
      'Zero-server peer discovery via mDNS & Wi-Fi Aware',
      'Non-destructive Anvay Vault offline sync provider'
    ],
    specs: {
      engine: 'Wi-Fi P2P Socket Engine + TLS-PSK Swarm Layer',
      aiModel: 'Local Peer Routing & Dynamic Chunking Optimizer',
      offlineCapability: 'Built from ground up for pure offline connectivity',
      dataBoundary: 'Direct device-to-device streaming; no cloud relay',
      vaultPermissions: ['identity.anchor', 'mesh.peer_roster']
    },
    screenshots: [
      '/apps/setu/screenshots/01_screenshot.png',
      '/apps/setu/screenshots/02_screenshot.png',
      '/apps/setu/screenshots/03_screenshot.png',
      '/apps/setu/screenshots/04_screenshot.png',
      '/apps/setu/screenshots/05_screenshot.png',
      '/apps/setu/screenshots/06_identity_vault.png'
    ]
  },
  {
    id: 'ravuno',
    name: 'Ravuno',
    devanagari: 'रवूनो',
    tagline: 'Sovereign Decentralized Offline Commerce & P2P Invoicing',
    category: 'commerce',
    categoryLabel: 'Sovereign Offline Commerce',
    packageId: 'com.amit.ravuno',
    deepLinkScheme: 'ravuno://',
    version: '1.0.0',
    buildCode: 1,
    playStoreTrack: 'Internal Testing (Google Play Console)',
    statusBadge: 'Active Commerce Suite',
    iconPath: '/apps/ravuno/icon-512.png',
    featureGraphic: '/apps/ravuno/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#7D9C7B',
    summary: 'A sovereign point-of-sale and peer-to-peer commerce ledger designed for local trade when cellular networks fail. Enables micro-merchants and communities to transact with zero platform fees and cryptographic invoice verification.',
    usp: 'Decentralized local commerce with ed25519 digital invoice signatures and offline reconciliation over Setu Wi-Fi Direct peer mesh.',
    securityGuarantee: 'Zero cloud telemetry. Merchant sales records, ledger transactions, and consumer receipts remain isolated in hardware-encrypted local SQLite.',
    features: [
      'Offline-First Point-of-Sale (POS) & Catalog Management',
      'Cryptographic ed25519 digital invoice generation & verification',
      'Direct peer-to-peer settlement over Wi-Fi Direct & local mesh',
      'Hardware Keystore secured merchant credential isolation',
      'Anvay ID federated 1-tap single sign-on',
      'Lossless transaction log coalescing into Anvay Vault'
    ],
    specs: {
      engine: 'React Native + SQLite E2EE Ledger Engine',
      aiModel: 'Local Financial Analytics & Cash Flow Predictor',
      offlineCapability: '100% Autonomous Offline Point-of-Sale',
      dataBoundary: 'Transaction ledgers encrypted on-device; zero broker tracking',
      vaultPermissions: ['commerce.merchant_keys', 'profile.display_name']
    },
    screenshots: [
      '/apps/ravuno/feature-graphic-1024x500.png',
      '/apps/ravuno/icon-512.png'
    ]
  },
  {
    id: 'haulwise',
    name: 'Haulwise',
    devanagari: 'हॉलवाइज़',
    tagline: 'Autonomous Offline Fleet Logistics & Turn-by-Turn Navigation',
    category: 'logistics',
    categoryLabel: 'Autonomous Fleet Logistics',
    packageId: 'com.amit.haulwise',
    deepLinkScheme: 'haulwise://',
    version: '1.0.0',
    buildCode: 1,
    playStoreTrack: 'Production Fleet Engine',
    statusBadge: 'Fleet Production Engine',
    iconPath: '/apps/haulwise/icon-512.png',
    featureGraphic: '/apps/haulwise/feature-graphic-1024x500.png',
    accentColor: '#D77259',
    secondaryColor: '#5C584E',
    summary: 'Autonomous delivery routing and fleet logistics that operates 100% offline using pre-cached spatial vector MBTiles and Valhalla routing without exposing driver coordinates to commercial brokers.',
    usp: 'Autonomous spatial dead-reckoning navigation and zero-telemetry fleet dispatching with zero centralized location tracking.',
    securityGuarantee: 'Fleet routes and real-time vehicle coordinates are computed strictly on-device in RAM. No third-party ad brokers or dispatch trackers ever receive location beacons.',
    features: [
      'Pre-cached Vector MBTiles Offline Turn-by-Turn Routing',
      'Autonomous Spatial Dead-Reckoning when GPS drops',
      'Zero-telemetry fleet dispatching & cargo manifests',
      'Local SQLite trip logs & fuel efficiency auditor',
      'Anvay ID single sign-on with cryptographic driver key',
      'Offline peer-to-peer delivery confirmation handshakes'
    ],
    specs: {
      engine: 'Expo SDK 58 + Offline Vector MBTiles + Valhalla Engine',
      aiModel: 'Local Spatial Dead-Reckoning & Route Optimizer',
      offlineCapability: 'Complete Offline Map & Navigation Engine',
      dataBoundary: 'Driver coordinates isolated to vehicle RAM only',
      vaultPermissions: ['fleet.driver_credentials', 'locations.depot_safezones']
    },
    screenshots: [
      '/apps/haulwise/feature-graphic-1024x500.png',
      '/apps/haulwise/icon-512.png'
    ]
  }
];

export const PLATFORM_PILLARS: PlatformPillar[] = [
  {
    id: 'anvay-id',
    title: 'Anvay ID',
    devanagari: 'अन्वय पहचान',
    tagline: 'Federated 1-Tap Single Sign-On Authority',
    protocol: 'OAuth 2.1 + PKCE (RFC 7636 / 9700)',
    color: '#D77259',
    description: 'A unified biometric authentication fabric. Users sign in once with system browser security, device credentials, or passkeys. URLs carry short-lived 60-second one-time codes only—never profile data, health telemetry, or tokens.',
    laws: [
      'Never bypass device lock: Deep links wait for biometric authentication',
      'URLs carry one-time codes only: Zero PII or health metrics in query params',
      'Server-enforced registry: Apps verified by package name + SHA-256 cert'
    ],
    capabilities: [
      {
        name: 'PKCE Challenge Verification',
        description: 'SHA-256 code challenge ensures authorization codes cannot be intercepted by rogue apps.',
        badge: 'Cryptographic Protection'
      },
      {
        name: 'Android Verified App Links',
        description: 'Deep links are cryptographically bound to domain assetlinks.json, preventing hijackers.',
        badge: 'Domain Bound'
      },
      {
        name: 'Graceful Fallback',
        description: 'Operates independently whether Setu is installed or not; functions completely offline.',
        badge: 'Decentralized'
      }
    ]
  },
  {
    id: 'anvay-vault',
    title: 'Anvay Vault',
    devanagari: 'अन्वय तिजोरी',
    tagline: 'Encrypted Personal Enclave & Non-Destructive Coalescing',
    protocol: 'AES-GCM-256 + Per-Field Provenance Ledger',
    color: '#7D9C7B',
    description: 'The shared personal data repository for identity, locations, and preferences. Implements Strict Law 6: non-destructive nullish coalescing that fills empty fields without ever overwriting existing user data, maintaining immutable source and timestamp provenance.',
    laws: [
      'Non-destructive coalescing: Existing fields can never be blindly overwritten',
      'Immutable provenance: Every field tracks source_app and timestamp',
      'Granular consent: Signing in grants zero data; each app requests categories'
    ],
    capabilities: [
      {
        name: 'Nullish Field Coalescing',
        description: 'Smart merge strategy: incoming updates only populate null or unassigned properties.',
        badge: 'Lossless Merge'
      },
      {
        name: 'Category-Level Sandboxing',
        description: 'Identity, health, family, vision, and cycle data are isolated into distinct silos.',
        badge: 'Zero Bleed'
      },
      {
        name: 'Hardware Keystore Security',
        description: 'Encryption keys generated and held in Android Keystore / iOS Secure Enclave.',
        badge: 'Hardware Root'
      }
    ]
  },
  {
    id: 'anvay-connect',
    title: 'Anvay Connect',
    devanagari: 'अन्वय सेतु',
    tagline: 'Authorized Peer-to-Peer Cross-App Mesh Protocol',
    protocol: 'Android 11+ <queries> + Signature Permission Provider',
    color: '#5C584E',
    description: 'Enables high-performance inter-app communication without exposing data to the public operating system. Bound by Android signature permissions: only apps signed with the official Amit Dev Labs private key can bind or exchange records.',
    laws: [
      'Android 11+ <queries> restricted to registered peer packages only',
      'Signature-level permission on ContentProviders fails closed for 3rd party apps',
      'Zero cloud relay for local device-to-device communications'
    ],
    capabilities: [
      {
        name: 'Signature-Protected ContentProvider',
        description: 'Operating system verifies digital certificate before allowing cross-app data queries.',
        badge: 'OS Level Security'
      },
      {
        name: 'Cryptographic Deep-Link Verification',
        description: 'App-to-app handoffs validate token nonce and sender package signature.',
        badge: 'Caller Verified'
      },
      {
        name: 'P2P Swarm Relay',
        description: 'Direct Wi-Fi Direct socket engine for transferring multi-gigabyte files offline.',
        badge: '120+ Mbps'
      }
    ]
  },
  {
    id: 'anvay-sync',
    title: 'Anvay Sync & Local RAG',
    devanagari: 'अन्वय सिंक व प्रज्ञा',
    tagline: 'Offline-First SQLite Hybrid Search & On-Device Intelligence',
    protocol: 'SQLite FTS5 + Local Embedding Vectors + Supabase RLS',
    color: '#D77259',
    description: 'An offline-first synchronization engine coupled with a local hybrid RAG (Retrieval-Augmented Generation) knowledge base. Reads documents, health trends, and family memories in place on the device with zero cloud uploads.',
    laws: [
      'On-device parsing: Documents read in place via ML Kit OCR & PDF Renderer',
      'Zero cloud indexing: Sign-in secrets and sensitive enclaves are never indexed',
      'Conflict-free synchronization: Provenance timestamps determine cloud reconciliation'
    ],
    capabilities: [
      {
        name: 'Hybrid Vector + Full-Text Search',
        description: 'Sub-millisecond semantic search directly inside SQLite with zero internet connection.',
        badge: 'Zero Cloud AI'
      },
      {
        name: 'Local In-Memory OCR',
        description: 'Text extracted from receipts, health charts, and heirloom letters directly on the phone.',
        badge: 'Private Vision'
      },
      {
        name: 'Supabase E2EE Cloud Sync',
        description: 'Encrypted payloads sync to cloud only when online, protected by Row Level Security.',
        badge: 'Encrypted Cloud'
      }
    ]
  }
];

export const BACKEND_SYSTEM_MODULES: BackendSystemModule[] = [
  {
    id: 'brain-core',
    title: 'AnvayKosh Autonomous Core Engine',
    category: 'core',
    tagline: 'FastAPI Production Autonomous Cloud & Coordination Core',
    status: 'online',
    description: 'Central orchestration engine running 24/7 on AWS EC2. Manages 65 relational ORM models, autonomous cron workflows, cryptographic app verification, and zero-telemetry sync gateways.',
    metrics: '65 Database Models · 48 Endpoints · 99.98% Uptime',
    techStack: ['FastAPI', 'Python 3.12', 'SQLAlchemy 2.0', 'PostgreSQL 16', 'Docker Compose', 'AWS EC2'],
    responsibilities: [
      'OAuth 2.1 PKCE token exchange authority',
      'Cryptographic App Registry validator (SHA-256 fingerprint checking)',
      'Autonomous intelligence cron orchestrator',
      'Supabase bidirectional E2EE synchronization pipeline'
    ]
  },
  {
    id: 'radar-engine',
    title: 'Hybrid Spatial Radar & Geozone Daemon',
    category: 'radar',
    tagline: 'Zero-Telemetry Proximity & Family Safe Zone Calculator',
    status: 'active',
    description: 'Coordinates spatial geozones and emergency beacon coordinates without storing unencrypted tracking breadcrumbs or selling user locations.',
    metrics: '<15ms Geohash Resolution · Zero Cloud Persistence',
    techStack: ['PostGIS', 'Spatial MBTiles', 'Haversine Matrix', 'WebSocket Live Gateway'],
    responsibilities: [
      'Autonomous emergency geofence boundary calculation',
      'Encrypted family circle proximity beacons',
      'Zero-knowledge spatial indexing'
    ]
  },
  {
    id: 'rag-engine',
    title: 'pgvector Hybrid RAG & Knowledge Corpus',
    category: 'ai',
    tagline: '768-dim Vector Semantic Memory & Context Retrieval',
    status: 'hardened',
    description: 'Stores semantic knowledge embeddings across projects, system dossiers, and technical interview transcripts, feeding the multi-provider AI waterfall.',
    metrics: '768-dim Embeddings · HNSW Vector Index · Sub-30ms Query',
    techStack: ['pgvector', 'Google Gemini Pro', 'LiteRT', 'FastEmbed', 'HNSW Index'],
    responsibilities: [
      'Semantic document chunking & vector indexing',
      'Multi-provider AI inference waterfall (Gemini Pro → Groq → Ollama)',
      'Automated technical post & morning briefing synthesizer'
    ]
  },
  {
    id: 'autonomous-scheduler',
    title: 'Event-Driven Worker & Autonomous Task Queue',
    category: 'scheduler',
    tagline: 'Self-Healing Cron Daemons & Multi-Channel Publisher',
    status: 'online',
    description: 'Autonomous worker executing background routines without human intervention: news discovery, recruiter pipeline, content drafting, and social publishing.',
    metrics: '8 Scheduled Cron Jobs · Redis-backed Async Queue',
    techStack: ['APScheduler', 'AsyncIO', 'Redis', 'Resend Email API', 'LinkedIn API v2'],
    responsibilities: [
      'Morning briefing research & email distribution',
      'Automated LinkedIn & DEV.to post publishing with live external IDs',
      'Self-healing system health checks & container monitoring'
    ]
  }
];

export const ARCHITECTURAL_LAWS = [
  {
    id: 1,
    title: 'Zero Deep-Link Lock Bypass',
    short: 'Device Lock Enforced',
    desc: 'Incoming deep links never bypass device or application biometric locks. If an app requires authentication, the destination is queued securely until the user verifies their identity.'
  },
  {
    id: 2,
    title: 'Standard OAuth 2.1 PKCE Only',
    short: 'No Data in URLs',
    desc: 'Anvay ID uses standard OAuth 2.1 authorization code with PKCE through system browser. URLs carry short-lived one-time authorization codes only—never user profiles, health data, or tokens.'
  },
  {
    id: 3,
    title: 'Server-Enforced Cryptographic Registry',
    short: 'Unknown Apps Fail Closed',
    desc: 'The Anvay Backend Gateway validates package name and certificate SHA-256 fingerprints before issuing tokens. Knowing a URL scheme grants zero access.'
  },
  {
    id: 4,
    title: 'Decentralized Sovereign Autonomy',
    short: 'Setu is Optional',
    desc: 'Every application operates completely standalone and offline. No application acts as an unauthenticated central bottleneck for another.'
  },
  {
    id: 5,
    title: 'Granular Category-Level Consent',
    short: 'Zero Blind Data Grants',
    desc: 'Signing in grants no personal data. Apps must explicitly request specific categories (identity, health, cycle, family, vision) with declared purpose and instant revocation.'
  },
  {
    id: 6,
    title: 'Non-Destructive Nullish Coalescing',
    short: 'Lossless Provenance',
    desc: 'Profile merges fill empty/null fields only from verified sources. Populated fields are never blindly overwritten, and every field preserves immutable source app and timestamp provenance.'
  },
  {
    id: 7,
    title: 'Zero Secret Exposure & Local Processing',
    short: 'On-Device Execution',
    desc: 'No secrets or API keys in bundles or public code. Files, health poses, and camera frames are read on the phone in place and never uploaded to cloud AI servers.'
  }
];

export const COMPARISON_TABLE = [
  {
    feature: 'Architecture Philosophy',
    anvaykosh: 'Unified Sovereign Ecosystem (Offline-First)',
    cloudSilos: 'Disconnected Silos or Monolithic Super-Apps',
    advantage: true
  },
  {
    feature: 'Single Sign-On Security',
    anvaykosh: 'OAuth 2.1 PKCE via System Browser (URLs carry codes only)',
    cloudSilos: 'Proprietary tokens in query strings; tracking cookies',
    advantage: true
  },
  {
    feature: 'AI & Inference Privacy',
    anvaykosh: '100% On-device LiteRT/ML Kit (Frames ephemeral in RAM)',
    cloudSilos: 'Uploaded to cloud LLM servers for telemetry & ad training',
    advantage: true
  },
  {
    feature: 'Data Conflict Resolution',
    anvaykosh: 'Non-destructive nullish coalescing + Provenance ledger',
    cloudSilos: 'Blind last-write-wins overwriting; silent data loss',
    advantage: true
  },
  {
    feature: 'Inter-App Connectivity',
    anvaykosh: 'Android signature-bound ContentProviders & verified App Links',
    cloudSilos: 'Unverified deep links vulnerable to package hijacking',
    advantage: true
  },
  {
    feature: 'Offline Usability',
    anvaykosh: 'Full autonomy offline (Local SQLite, Wi-Fi Direct Swarm)',
    cloudSilos: 'Blocked by loading spinners when cellular signal drops',
    advantage: true
  },
  {
    feature: 'Sensitive Data Boundary',
    anvaykosh: 'Strict Enclave: Menstrual & health data isolated by default',
    cloudSilos: 'Merged into unified advertising user graph',
    advantage: true
  }
];
