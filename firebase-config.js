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
// Admin password now lives in Firebase Authentication (admin@up75.in).
// Nothing sensitive is stored here.
const ADMIN_CONFIG = {
  trialDays: 2,
  supportPhone: "919988789921",
  supportWhatsApp: "https://wa.me/919988789921",
  baseUrl: "https://up75.in"
};

// ─── PLAN CONFIGURATION ───────────────────────────────────
const PLAN_CONFIG = {
  trial:   { id:"trial",   name:"Free Trial", price:0,    durationDays:2,   trialDays:2, reviewLimit:99999, qrLimit:1, icon:"🎁" },
  monthly: { id:"monthly", name:"Monthly",    price:499,  durationDays:30,  trialDays:0, reviewLimit:99999, qrLimit:3, icon:"⭐" },
  yearly:  { id:"yearly",  name:"Yearly",     price:2999, durationDays:365, trialDays:0, reviewLimit:99999, qrLimit:3, icon:"👑" }
};
// NOTE: PLAN_CONFIG is reference-only. The authoritative plan config lives in the
// Cloudflare Worker (PLANS_CFG) and in each page's inline DEFAULT_PLANS.

// ─── SMART REVIEW ENGINE V4 CONFIG ────────────────────────
// NOTE: The Gemini API key is NO LONGER used in the browser.
// Review generation now runs securely through the Cloudflare Worker.
const REVIEW_ENGINE_CONFIG = {
  model: "gemini-2.0-flash",
  maxTokens: 1000,
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
