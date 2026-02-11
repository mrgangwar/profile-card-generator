import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Modern fonts for professional look
import "./globals.css";

// Inter font for body text (clean and readable)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Montserrat for headings (bold and modern)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Profile Pro | Card Generator",
  description: "Create professional profile cards in seconds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased min-h-screen selection:bg-indigo-100 selection:text-indigo-700`}
      >
        {/* Main Content Wrapper */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}