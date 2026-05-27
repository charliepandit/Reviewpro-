// ═══════════════════════════════════════════════════════════
// firebase-config.js — UP75 Self-Serve SaaS Platform
// ═══════════════════════════════════════════════════════════
// INSTRUCTIONS:
// 1. Replace all placeholder values below with your actual Firebase project credentials
// 2. Go to Firebase Console → Project Settings → General → Your apps → Firebase SDK snippet
// 3. Copy the config object and paste here
// 4. Enable: Authentication → Phone, Firestore Database
// ═══════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey: "AIzaSyDVzIIWXVYcbRTz5O8E23T-ED3Ctkp9UVU",
  authDomain: "reviewpro-b66c9.firebaseapp.com",
  projectId: "reviewpro-b66c9",
  storageBucket: "reviewpro-b66c9.firebasestorage.app",
  messagingSenderId: "831538269584",
  appId: "1:831538269584:web:7be67cc23fbe0dc266b715"
};

// ─── ADMIN SETTINGS ───────────────────────────────────────
const ADMIN_CONFIG = {
  password: "up75admin2025",        // ⚠️ Change this immediately after deploy
  trialDays: 14,                     // Free trial duration in days
  supportPhone: "919988789921",
  supportWhatsApp: "https://wa.me/919988789921",
  baseUrl: "https://www.up75.in"     // Your domain
};

// ─── PLAN CONFIGURATION ───────────────────────────────────
// These are the default plan settings. You can also edit them
// live from the Admin Dashboard → Plan Manager.
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

// ─── FIRESTORE SECURITY RULES (paste into Firebase Console) ──
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Clients — readable by the client themselves, writable on create (self-serve)
    match /clients/{clientId} {
      allow read: if true;  // QR scan needs to read; tighten in production
      allow create: if true; // Self-serve registration
      allow update: if true; // Client updates their own data
      allow delete: if false;
    }

    // Subscriptions — read/write by authenticated admin (via admin SDK or locked rule)
    match /subscriptions/{subId} {
      allow read, write: if true;
    }

    // Analytics — write by anyone (review.html increments), read by admin
    match /analytics/{docId} {
      allow read, write: if true;
    }

    // Coupons — read by anyone (validation), write by admin only
    match /coupons/{couponId} {
      allow read: if true;
      allow write: if false; // Write via Admin SDK or relax for client-side admin
    }

    // OTP Logs — write by anyone, read only by admin
    match /otpLogs/{logId} {
      allow create: if true;
      allow read: if false;
    }

    // Place IDs — read/write by owner
    match /placeIds/{docId} {
      allow read, write: if true;
    }

    // Plan Settings — read by anyone, write protected
    match /planSettings/{docId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
*/
