# AndhraVista — Explore Andhra Pradesh

A premium React + Vite travel website for exploring Andhra Pradesh destinations, built with Tailwind CSS v4, Framer Motion, and Firebase Firestore.

## Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4**
- **Framer Motion**
- **React Router v7**
- **Firebase v9+** (Firestore)

## Firebase Setup

This project uses Firebase Firestore to store contact form submissions.

### Steps to Configure Firebase

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Register a **Web app** in your project
3. Copy your Firebase SDK config values
4. Create a `.env.local` file in the project root with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

5. Enable **Cloud Firestore** in your Firebase console
6. Deploy Firestore security rules: `firebase deploy --only firestore:rules`

## Firestore Collections

### `contactMessages`
Each document contains:
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Sender's name |
| `email` | string | Sender's email |
| `message` | string | Message body |
| `createdAt` | timestamp | Server-side timestamp |
| `read` | boolean | Read status (default: `false`) |

## Features

- 🗺️ Destination library with search and filtering
- 🖼️ Masonry photo gallery
- 📬 Contact form with real-time Firestore submission
- 🔔 Loading, success, and error states on form
- 🛡️ Admin messages panel at `/admin/messages`
- 🌙 Dark/light mode

## Getting Started

```bash
npm install
npm run dev
```

## Admin Panel

View submitted contact messages at:
```
http://localhost:5173/admin/messages
```
