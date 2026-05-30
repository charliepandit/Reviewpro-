// ═══════════════════════════════════════════════════════════
// firebase-config.js — ReviewPro SaaS Platform
// ═══════════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDVzIIWXVYcbRTz508E23T-ED3Ctkp9UVU",
  authDomain: "reviewpro-b66c9.firebaseapp.com",
  projectId: "reviewpro-b66c9",
  storageBucket: "reviewpro-b66c9.firebasestorage.app",
  messagingSenderId: "831538269584",
  appId: "1:831538269584:web:7be67cc23fbe0dc266b715"
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
    reviewLimit: 50,
    qrLimit: 1,
    features: ["QR Code (instant)", "AI Reviews (50/month)", "Basic Dashboard", "WhatsApp Support"],
    badge: "trial"
  },
  starter: {
    name: "Starter",
    price: 499,
    durationDays: 30,
    reviewLimit: 200,
    qrLimit: 1,
    features: ["QR Code", "AI Reviews (200/month)", "Full Dashboard", "Review History", "WhatsApp Support"],
    badge: "starter"
  },
  premium: {
    name: "Premium",
    price: 999,
    durationDays: 30,
    reviewLimit: 1000,
    qrLimit: 3,
    features: ["3 QR Codes", "AI Reviews (1000/month)", "Full Dashboard", "Review History", "Priority Support", "Monthly Report", "Strategy Consultation"],
    badge: "premium"
  },
  enterprise: {
    name: "Enterprise",
    price: 2499,
    durationDays: 30,
    reviewLimit: 99999,
    qrLimit: 10,
    features: ["10 QR Codes", "Unlimited Reviews", "Full Dashboard", "Dedicated Support", "Weekly Reports", "Custom Branding", "API Access"],
    badge: "enterprise"
  }
};
