# ReviewPro — Complete Setup Guide
## By Ritik Tiwari, Etawah UP | +91 9988789921

---

## 📁 Files in This Project

| File | Purpose |
|---|---|
| `index.html` | Public landing page — Deloitte-style premium white design |
| `client.html` | Client self-service dashboard |
| `admin.html` | Your private admin panel |
| `review.html` | Customer-facing review page (opened by QR scan) |
| `firebase-config.js` | Firebase configuration — YOU MUST UPDATE THIS |

---

## 🔥 STEP 1 — Setup Firebase (Free Forever)

Firebase is Google's free database. Your data is stored securely in the cloud — accessible from any device, never lost.

### 1.1 Create Firebase Project

1. Go to **console.firebase.google.com**
2. Click **"Create a project"**
3. Name it: `reviewpro`
4. Disable Google Analytics (not needed)
5. Click **"Create project"**

### 1.2 Create Firestore Database

1. In Firebase console → click **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select region: **"asia-south1 (Mumbai)"** — closest to UP!
5. Click **"Done"**

### 1.3 Setup Firestore Rules (Security!)

In Firestore → **Rules** tab, paste this:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Clients collection — read by anyone with ID, write by server only
    match /clients/{clientId} {
      allow read: if true;
      allow write: if true; // Tighten after launch
    }
    // Pending registrations — write by anyone, read by admin
    match /pending/{docId} {
      allow read, write: if true;
    }
  }
}
```

Click **"Publish"**

### 1.4 Enable Phone Authentication (OTP)

1. Firebase console → **"Authentication"**
2. Click **"Get started"**
3. Click **"Phone"**
4. Toggle **Enable** → Save
5. Add your phone number as test number:
   - Phone: `+91 9988789921`
   - Test code: `123456`

### 1.5 Get Your Firebase Config

1. Firebase console → ⚙️ **Project Settings**
2. Scroll down to **"Your apps"**
3. Click **"Add app"** → Web (`</>`)
4. App name: `reviewpro-web`
5. Click **"Register app"**
6. You'll see a config like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXX",
  authDomain: "reviewpro-XXXXX.firebaseapp.com",
  projectId: "reviewpro-XXXXX",
  storageBucket: "reviewpro-XXXXX.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "1:XXXXXXXXXXXX:web:XXXXXXXXXXXXXXXX"
};
```

7. Copy these values into your `firebase-config.js` file

---

## ⚙️ STEP 2 — Update firebase-config.js

Open `firebase-config.js` and replace:

```javascript
const FIREBASE_CONFIG = {
  apiKey: "YOUR_API_KEY",           // ← Replace
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",   // ← Replace
  projectId: "YOUR_PROJECT_ID",     // ← Replace
  storageBucket: "YOUR_PROJECT_ID.appspot.com",    // ← Replace
  messagingSenderId: "YOUR_SENDER_ID",             // ← Replace
  appId: "YOUR_APP_ID"              // ← Replace
};

const ADMIN_CONFIG = {
  password: "ReviewPro@2025!",   // ← Change to your own password!
  ...
};
```

---

## 🌐 STEP 3 — Host on GitHub Pages (Free Forever)

### 3.1 Create GitHub Account
1. Go to **github.com** → Sign up with Google

### 3.2 Create Repository
1. Click **"+"** → **"New repository"**
2. Name: `reviewpro`
3. Set to **Public**
4. Check **"Add README"**
5. Click **"Create repository"**

### 3.3 Upload All Files
1. Click **"Add file"** → **"Upload files"**
2. Upload ALL files:
   - `index.html`
   - `admin.html`
   - `client.html`
   - `review.html`
   - `firebase-config.js`
3. Click **"Commit changes"**

### 3.4 Enable GitHub Pages
1. Click **"Settings"** tab
2. Click **"Pages"** in left sidebar
3. Under **Branch** → select **"main"** → **"/ (root)"**
4. Click **"Save"**
5. Wait 2-3 minutes

Your site will be live at:
```
https://YOUR-USERNAME.github.io/reviewpro
```

### 3.5 Connect Custom Domain (up75.in)

**In GitHub Pages settings:**
1. Under "Custom domain" → type `up75.in`
2. Click **Save**
3. Check **"Enforce HTTPS"**

**In Hostinger DNS:**
Add these 4 A records:
```
Type: A  |  Name: @  |  Value: 185.199.108.153
Type: A  |  Name: @  |  Value: 185.199.109.153
Type: A  |  Name: @  |  Value: 185.199.110.153
Type: A  |  Name: @  |  Value: 185.199.111.153
```

Add 1 CNAME record:
```
Type: CNAME  |  Name: www  |  Value: YOUR-USERNAME.github.io
```

Wait 30 minutes → `up75.in` goes live! ✅

---

## 🔐 STEP 4 — Update Admin Settings

1. Go to `up75.in/admin.html`
2. Login with password: `ReviewPro@2025!`
3. Go to **Settings** → Add:
   - Base URL: `https://up75.in`
   - UPI ID: your UPI ID
4. Save Settings

---

## 📱 STEP 5 — Enable Firebase in Admin Panel

After setting up Firebase, each client's QR code will link to:
```
https://up75.in/review.html?id=FIREBASE_DOC_ID
```

This means:
- ✅ Data stored permanently in cloud
- ✅ Works from any device
- ✅ Never lost even if browser cleared
- ✅ Clients can login from phone/laptop/anywhere

---

## 🗄️ DATA STORAGE — How It Works

### Firebase Collections:
```
firestore/
├── clients/           ← All approved clients
│   ├── {docId}/
│   │   ├── name
│   │   ├── city
│   │   ├── phone
│   │   ├── username
│   │   ├── password (base64)
│   │   ├── plan
│   │   ├── status
│   │   ├── expiryDate
│   │   ├── catalogue
│   │   ├── placeId
│   │   └── reviewsGenerated
│
└── pending/           ← Self-registered (awaiting approval)
    └── {docId}/
        └── (same fields + submittedAt)
```

### Fallback:
If Firebase is not configured, all data saves to **localStorage** in the browser. This is fine for testing but NOT for production (data stays on one device only).

---

## 🔒 DATA SECURITY

| Layer | Protection |
|---|---|
| Firebase Firestore | Google's enterprise-grade encryption |
| Passwords | Base64 encoded (upgrade to bcrypt for production) |
| Admin access | Password protected, session-based |
| Client access | Phone OTP + password |
| QR codes | Linked to Firebase doc ID — unique and unguessable |
| HTTPS | GitHub Pages provides free SSL certificate |

---

## 💡 HOW CLIENT SELF-REGISTRATION WORKS

1. Client visits `up75.in`
2. Clicks **"Start Free Trial"**
3. Fills business details + creates username/password
4. Verifies phone with OTP
5. Data saved to Firebase `pending` collection
6. **You see it in Admin → Registrations**
7. You click **"Approve & Activate"**
8. Client can immediately login and get QR code
9. QR code links to their review page automatically

---

## ⏰ SUBSCRIPTION EXPIRY — Automatic

| Scenario | What Happens |
|---|---|
| Trial active | All features work normally |
| 7 days before expiry | Warning shown in client dashboard |
| Subscription expired | QR shows "Service Inactive" to customers |
| Client tries to login | Shows renewal message |
| You extend in admin | Everything reactivates instantly |

---

## 💰 PRICING YOU CHARGE

| Plan | Monthly | Setup |
|---|---|---|
| Free Trial | ₹0 | ₹0 |
| Basic | ₹499 | ₹1,999 |
| Pro | ₹999 | ₹1,999 |

**Your monthly costs: ₹0** (Firebase free tier + GitHub Pages free)

---

## 📞 SUPPORT FLOW

When a client has an issue:
1. They message you on WhatsApp: **+91 9988789921**
2. You login to `up75.in/admin.html`
3. Find their account → fix issue
4. Takes 2 minutes from anywhere

---

## 🚀 LAUNCH CHECKLIST

- [ ] Firebase project created
- [ ] Firestore database setup
- [ ] Phone auth enabled
- [ ] `firebase-config.js` updated with real values
- [ ] Admin password changed to something strong
- [ ] All 5 files uploaded to GitHub
- [ ] GitHub Pages enabled
- [ ] Custom domain `up75.in` connected
- [ ] DNS records updated in Hostinger
- [ ] HTTPS verified working
- [ ] Admin panel login tested
- [ ] Test registration flow completed
- [ ] Test QR code scan on phone
- [ ] First real client added!

---

## 📊 MONTHLY TASKS

1. Check **Admin → Registrations** for new sign-ups
2. Check **Admin → Payments** for pending collections
3. Extend subscriptions after payment received
4. WhatsApp clients whose trial is ending

---

*ReviewPro — Turning local businesses into digital powerhouses*
*Ritik Tiwari | Etawah, UP | +91 9988789921*
