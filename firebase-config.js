// ============================================================
// REVIEWPRO — FIREBASE CONFIGURATION
// Replace values below with your Firebase project settings
// Get them from: console.firebase.google.com
// ============================================================

const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// ============================================================
// ADMIN SETTINGS — Change password before going live!
// ============================================================
const ADMIN_CONFIG = {
  password: "ReviewPro@2025!",
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
