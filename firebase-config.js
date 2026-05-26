// ============================================================
// REVIEWPRO — FIREBASE CONFIGURATION
// Replace values below with your Firebase project settings
// Get them from: console.firebase.google.com
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyDVzIIWXVYcbRTz5O8E23T-ED3Ctkp9UVU",
  authDomain: "reviewpro-b66c9.firebaseapp.com",
  projectId: "reviewpro-b66c9",
  storageBucket: "reviewpro-b66c9.firebasestorage.app",
  messagingSenderId: "831538269584",
  appId: "1:831538269584:web:7be67cc23fbe0dc266b715"
};

// ============================================================
// ADMIN SETTINGS — Change password before going live!
// ============================================================
const ADMIN_CONFIG = {
  password: "Reviewpro@2026",
  name: "Ritik Tiwari",
  phone: "9988789921",
  whatsapp: "919988789921",
  city: "Etawah, UP",
  trialDays: 30,
};

// ============================================================
// PRICING
// ============================================================
const PLANS = {
  trial: { name: "Free Trial", price: 0,   days: 30  },
  basic: { name: "Basic",      price: 499, days: 30  },
  pro:   { name: "Pro",        price: 999, days: 30  },
};
