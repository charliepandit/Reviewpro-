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
const REVIEW_ENGINE_CONFIG = {
  model: "claude-sonnet-4-20250514",
  maxTokens: 1000,
  apiEndpoint: "https://api.anthropic.com/v1/messages",
  defaultLanguage: "hinglish",
  reviewCount: 6,
  reviewLengths: { short: 2, medium: 2, detailed: 2 },
  usedHashRetention: 200,
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
