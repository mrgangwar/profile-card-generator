# Profile Card Generator

A modern, fully responsive Profile Card Generator built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Overview

Profile Card Generator is a web application that enables users to create professional profile cards with ease. Users can input their personal details, preview the card in real-time, and export the final result as either a PNG image or PDF document.

## Features

### Dynamic Form
- Full name and professional role input
- Biography section
- Profile image upload with base64 preview
- Address information
- Social media links (LinkedIn, GitHub, Twitter)

### Live Preview
- Real-time updates as users type
- Modern gradient card design with glassmorphism effect
- Responsive layout for all device sizes
- Social icons with hover animations

### Export Options
- Download as PNG using html-to-image library
- Download as PDF using jsPDF
- Auto-scaling for clean exports
- Print-friendly styling

### Modern UI/UX
- Tailwind CSS styling with gradient backgrounds
- Glassmorphism card design with soft blur effects
- Interactive hover, tap, and click animations
- Mobile-first responsive layout
- Smooth transitions and micro-interactions

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Export Libraries:** html-to-image, jsPDF
- **Icons:** react-icons

## Project Structure

```
profile-card-generator/
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
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/profile-card-generator.git
cd profile-card-generator
```

2. Install dependencies:
```bash
npm install
```

3. Install required export libraries:
```bash
npm install html-to-image jspdf react-icons
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Architecture

### State Management
The application uses React's useState hook in the parent page component to manage profile data. The ProfileForm component updates the state, while ProfilePreview reads from the same state, providing real-time updates through React's re-rendering mechanism.

### Export Functionality

**PNG Export:**
The html-to-image library converts the DOM element containing the profile card into a PNG image, triggering an automatic browser download.

**PDF Export:**
The DOM element is first converted to an image, then inserted into a PDF document using jsPDF with automatic scaling to fit the page.

## UI Design System

- **Color Theme:** Gradient ranging from Indigo through Purple to Pink
- **Visual Effects:** Glassmorphism card design with soft shadow layering
- **Responsive Breakpoints:** Mobile-first approach with optimized layouts for all screen sizes
- **Interactions:** Hover scale effects, click press animations, and fade-in transitions
- **Accessibility:** Compliant color contrast ratios

## Future Enhancements

- Shareable links with encoded profile data
- Multiple card themes
- Dark mode toggle
- QR code generator
- Local storage persistence
- Drag and drop element repositioning
- Card template switcher

## License

This project is licensed under the MIT License.
