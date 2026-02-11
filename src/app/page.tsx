"use client";

import React, { useState, useRef } from "react";
import ProfileForm from "@/src/components/ProfileForm";
import ProfilePreview from "@/src/components/ProfilePreview";
import GenerateButtons from "@/src/components/GenerateButtons";
import { ProfileData } from "@/src/types/profile";

export default function ProfileCardGenerator() {
  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    role: "",
    bio: "",
    image: "",
    address: "",
    links: {
      linkedin: "",
      github: "",
      twitter: "",
    },
  });

  const cardRef = useRef<HTMLDivElement>(null);

  return (
    // Foundation: Deep Indigo/Pink gradient background with background noise effect
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-slate-950 to-purple-950 text-white selection:bg-pink-500/30 overflow-x-hidden">
      
      {/* Background Decoration: Floating Light Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse duration-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header: Centered, Premium Typography with Fade-in Slide */}
        <header className="mb-20 text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 drop-shadow-2xl">
            Profile <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Pro</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300/80 max-w-2xl mx-auto leading-relaxed font-light italic">
            "Craft a professional identity in seconds. Design, preview, and download your custom profile card with ease."
          </p>
        </header>

        {/* Two-Column Responsive Grid: Stacked on Mobile, Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Form with Glassmorphism (7/12 Desktop) */}
          <section className="lg:col-span-7 group animate-in fade-in slide-in-from-left-10 duration-700 delay-200">
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-14 shadow-2xl transition-all duration-500 hover:border-white/20 transform-gpu hover:translate-y-[-4px]">
              
              {/* Sidebar Accent: Matches your Primary Indigo logic */}
              <div className="flex items-center gap-5 mb-12">
                <div className="h-12 w-1.5 bg-gradient-to-b from-indigo-500 to-pink-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]" />
                <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                  Edit Details
                </h2>
              </div>

              <div className="relative z-10">
                <ProfileForm profile={profile} setProfile={setProfile} />
              </div>
            </div>
          </section>

          {/* Right Column: Sticky Preview with 3D Interaction (5/12 Desktop) */}
          <section className="lg:col-span-5 lg:sticky lg:top-12 animate-in fade-in slide-in-from-right-10 duration-700 delay-400">
            <div className="flex flex-col items-center space-y-12">
              
              <div className="w-full text-center lg:text-left">
                <h2 className="text-sm font-black uppercase tracking-[0.4em] text-indigo-400 mb-2">Live Canvas</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded-full mx-auto lg:mx-0" />
              </div>

              {/* Card Perspective Container: Subtle Tilt on Hover */}
              <div className="w-full perspective-1000 transform-gpu">
                <div className="group relative p-5 bg-white/[0.03] backdrop-blur-md rounded-[2.5rem] border border-white/5 shadow-inner transition-all duration-500 hover:rotate-x-2 hover:rotate-y-[-2deg] hover:scale-[1.02] active:scale-[0.98]">
                  
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
                  
                  <div ref={cardRef} className="relative z-10 transition-transform duration-500 group-hover:drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <ProfilePreview data={profile} />
                  </div>
                </div>
              </div>
              
              {/* Action Area: Animated Buttons and Haptic Status */}
              <div className="w-full space-y-8">
                <div className="transform transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                  <GenerateButtons cardRef={cardRef} />
                </div>

                {/* Haptic Feedback Indicator */}
                <div className="flex items-center justify-center lg:justify-start gap-4 text-slate-400 bg-slate-900/50 py-4 px-8 rounded-3xl border border-white/5 backdrop-blur-xl transition-colors hover:bg-slate-900/80">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-600 shadow-[0_0_15px_#db2777]"></span>
                  </span>
                  <p className="text-xs font-bold uppercase tracking-widest">Rendering: 60FPS / Ultra</p>
                </div>
              </div>

            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}