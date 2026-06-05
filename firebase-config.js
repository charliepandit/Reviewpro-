// ═══════════════════════════════════════════════════════════
// firebase-config.js — ReviewPro SaaS Platform
// ═══════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBvASlX9I_kondIPPJF9z0X7A9oGzY1Wus",
  authDomain: "reviewpro-b66c9.firebaseapp.com",
  projectId: "reviewpro-b66c9",
  storageBucket: "reviewpro-b66c9.firebasestorage.app",
  messagingSenderId: "831538269584",
  appId: "1:831538269584:web:64227a659b88189c66b715"
};

// ─── ADMIN SETTINGS ───────────────────────────────────────
const ADMIN_CONFIG = {
  password: "reviewpro2025",
  trialDays: 14,
  supportPhone: "919988789921",
  supportWhatsApp: "https://wa.me/919988789921",
  baseUrl: "https://up75.in"
};

// ─── PLAN CONFIGURATION ───────────────────────────────────
const PLAN_CONFIG = {
  trial: {
    name: "Free Trial",
    price: 0,
    durationDays: 14,
    reviewLimit: 100,
    qrLimit: 1,
    features: ["AI Reviews (100/month)", "Full Dashboard", "All 3 Languages", "WhatsApp Support"],
    badge: "trial"
  },
  pro: {
    name: "Review Pro",
    price: 499,
    durationDays: 30,
    reviewLimit: 99999,
    qrLimit: 3,
    features: ["Unlimited AI Reviews", "3 QR Codes", "Full Dashboard", "Priority Support", "Business Profile AI"],
    badge: "pro"
  }
};

// ─── SMART REVIEW ENGINE V4 CONFIG ────────────────────────
// Used by review.html — controls AI model, language defaults,
// and generation behaviour.
const REVIEW_ENGINE_CONFIG = {
  // Claude model used for review generation
  model: "claude-sonnet-4-20250514",

  // Max tokens per generation call (6 reviews × ~150 tokens each)
  maxTokens: 1000,

  // Anthropic API endpoint (called directly from browser)
  apiEndpoint: "https://api.anthropic.com/v1/messages",

  // Default language when client profile has no language set
  defaultLanguage: "hinglish",

  // Number of review cards to generate and display
  reviewCount: 6,

  // Review length distribution (must sum to reviewCount)
  reviewLengths: { short: 2, medium: 2, detailed: 2 },

  // Max previously-used review hashes stored per client in localStorage
  usedHashRetention: 200,

  // Customer persona pool (rotated randomly each generation)
  personas: [
    "First-Time Buyer",
    "Returning Customer",
    "Family Customer",
    "Working Professional",
    "Premium Buyer",
    "Budget-Conscious Buyer",
    "Senior Customer",
    "Young Professional"
  ]
};

// ─── CLIENT DOCUMENT SCHEMA (reference) ───────────────────
// Fields stored in Firestore /clients/{clientId}
// New fields added by Smart Review Engine V4 are marked ★
//
// id            string   — unique client ID
// name          string   — business name
// owner         string   — owner name
// city          string   — city
// category      string   — formatted as "Master › Sub"  ★
// masterCat     string   — master category               ★
// subCat        string   — sub-category                  ★
// businessType  string   — "Product Based" | "Service Based" | "Hybrid"  ★
// products      string   — comma-separated product list  ★
// services      string   — comma-separated service list  ★
// language      string   — "english" | "hindi" | "hinglish"
// mapsLink      string   — Google Maps URL
// placeId       string   — Google Place ID
// catalogue     string   — legacy comma-separated items
// about         string   — business description
// status        string   — "active" | "trial" | "expired" | "inactive"
// plan          string   — "trial" | "pro"
// expiryDate    string   — ISO date "YYYY-MM-DD"
// reviewsGenerated number — incremented by customer review flow
// createdAt     string   — ISO date
// lastUpdated   string   — ISO date
