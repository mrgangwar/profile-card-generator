🚀 Profile Card Generator

A modern, fully responsive Profile Card Generator built with Next.js (App Router) + TypeScript + Tailwind CSS.

This application allows users to:

Fill in personal details (name, role, bio, image, address, social links)

See a live preview of their profile card while editing

Download the profile card as:

📷 PNG Image

📄 PDF File

Experience smooth animations, glassmorphism UI, gradients, hover effects, and responsive design

✨ Features
🧾 Dynamic Form

Full Name

Professional Role

Bio

Address

Profile Image Upload (Base64 Preview)

Social Links (LinkedIn, GitHub, Twitter)

👀 Live Preview

Real-time updates while typing

Modern gradient card design

Glassmorphism effect

Responsive layout

Social icons with hover animations

📥 Export Options

Download as PNG (using html-to-image)

Download as PDF (using jsPDF)

Auto-scale for clean export

Print-friendly styles

🎨 Modern UI/UX

Tailwind CSS styling

Gradient backgrounds

Soft blur glass cards

Hover, tap, and click animations

Mobile-first responsive layout

Smooth transitions and micro-interactions

🛠️ Tech Stack

Next.js 14+ (App Router)

TypeScript

Tailwind CSS

html-to-image

jsPDF

react-icons

📂 Project Structure
profile-card-generator/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components/
│   │   ├── ProfileForm.tsx
│   │   ├── ProfilePreview.tsx
│   │   └── GenerateButtons.tsx
│   │
│   ├── types/
│   │   └── profile.ts
│   │
│   └── utils/
│       ├── exportAsImage.ts
│       └── exportAsPDF.ts
│
├── tailwind.config.ts
├── tsconfig.json
└── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/profile-card-generator.git
cd profile-card-generator

2️⃣ Install dependencies
npm install

3️⃣ Install required export libraries
npm install html-to-image jspdf react-icons

4️⃣ Run development server
npm run dev


Now open:

http://localhost:3000

🧠 How It Works
🔁 Live Preview Logic

State is stored in page.tsx

ProfileForm updates state

ProfilePreview reads from same state

React automatically re-renders preview on every change

Single source of truth = clean architecture.

📷 Image Export

Uses html-to-image

Converts referenced DOM element to PNG

Triggers automatic browser download

📄 PDF Export

Converts DOM to image

Inserts into jsPDF

Auto-scales to fit page

Downloads PDF file

🎨 UI Design System

Gradient theme: Indigo → Purple → Pink

Glassmorphism card design

Soft shadow layering

Responsive breakpoints

Hover scale effects

Click press animations

Fade-in transitions

Accessible color contrast

📱 Responsive Design

Mobile-first layout

Stacked layout on small screens

Two-column layout on desktop

Touch-friendly buttons

Smooth scaling interactions

🔥 Future Improvements (Optional)

Shareable link with encoded profile data

Multiple card themes

Dark mode toggle

QR code generator

Save to localStorage

Drag & reposition elements

Card template switcher

📌 Requirements

Node.js 18+

npm or yarn