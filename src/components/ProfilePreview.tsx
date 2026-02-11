"use client";

import React, { forwardRef } from "react";
import { ProfileData } from "@/src/types/profile";
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaUserCircle,
  FaQuoteLeft 
} from "react-icons/fa";

interface ProfilePreviewProps {
  data: ProfileData;
}

const ProfilePreview = forwardRef<HTMLDivElement, ProfilePreviewProps>(
  ({ data }, ref) => {
    const { name, role, bio, image, address, links } = data;

    return (
      <div 
        ref={ref}
        className="relative group w-full max-w-md mx-auto perspective-1000"
      >
        {/* 3D Animated Card Body */}
        <div className="relative transform-gpu transition-all duration-500 ease-out 
                        group-hover:rotate-x-4 group-hover:rotate-y-[-4deg] group-hover:scale-[1.02]
                        bg-white/10 backdrop-blur-2xl rounded-[3rem] shadow-2xl overflow-hidden 
                        border border-white/20"
             id="profile-card">
          
          {/* 🎨 Header Background with Mesh & Grain */}
          <div className="h-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 relative">
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="px-8 pb-10 relative">
            {/* 🖼️ Premium Profile Image with Gradient Ring */}
            <div className="relative -mt-20 mb-6 flex justify-center">
              <div className="relative group/img cursor-pointer">
                {/* Gradient Ring Decoration */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-sm opacity-70 group-hover/img:opacity-100 group-hover/img:blur-md transition duration-500"></div>
                
                <div className="relative h-36 w-36 rounded-[2.2rem] bg-slate-900 border-[5px] border-white/10 overflow-hidden transition-all duration-500 group-hover/img:scale-105 group-hover/img:rotate-2">
                  {image ? (
                    <img 
                      src={image} 
                      alt={name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-slate-800">
                       <FaUserCircle className="h-20 w-20 text-slate-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 🆔 Identity Section - Staggered Entry Text */}
            <div className="text-center mb-8 space-y-2 animate-in fade-in slide-in-from-top-2 duration-700">
              <h2 className="text-4xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-purple-200">
                {name || "Professional Name"}
              </h2>
              
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/10 border border-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                {role || "Designation"}
              </div>
              
              {address && (
                <div className="flex items-center justify-center text-slate-400 mt-4 text-xs font-semibold tracking-wide">
                  <FaMapMarkerAlt className="mr-2 text-pink-500 animate-bounce" />
                  <span className="uppercase tracking-widest">{address}</span>
                </div>
              )}
            </div>

            {/* ✍️ Bio Section with Glassmorphism */}
            <div className="relative bg-white/[0.03] rounded-3xl p-6 mb-8 border border-white/5 backdrop-blur-sm group-hover:bg-white/[0.06] transition-colors">
              <FaQuoteLeft className="absolute -top-3 -left-1 text-indigo-500/40 text-2xl" />
              <p className="text-slate-300 text-sm leading-relaxed italic font-light">
                {bio || "Your professional journey, elegantly visualized. Start typing in the editor to see your story come alive on this canvas."}
              </p>
            </div>

            {/* 🌐 Social Hub - Circular Lift Effects */}
            <div className="flex justify-center items-center gap-5">
              {[
                { icon: FaLinkedin, link: links.linkedin, color: "hover:bg-blue-600", shadow: "hover:shadow-blue-500/40" },
                { icon: FaGithub, link: links.github, color: "hover:bg-slate-700", shadow: "hover:shadow-slate-500/40" },
                { icon: FaTwitter, link: links.twitter, color: "hover:bg-indigo-400", shadow: "hover:shadow-indigo-400/40" }
              ].map((social, idx) => (
                social.link && (
                  <a 
                    key={idx}
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/70 
                               transition-all duration-300 hover:-translate-y-2 hover:text-white hover:scale-110 shadow-lg ${social.color} ${social.shadow}`}
                  >
                    <social.icon size={20} />
                  </a>
                )
              ))}
            </div>
          </div>
          
          {/* Subtle Bottom Branding */}
          <div className="bg-white/[0.02] py-4 text-center border-t border-white/5">
             <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em]">
               Certified Digital Identity — ProfilePro
             </span>
          </div>
        </div>

        {/* 3D Drop Shadow Projection */}
        <div className="absolute -z-10 inset-0 bg-indigo-500/20 blur-3xl rounded-[3rem] transform-gpu translate-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    );
  }
);

ProfilePreview.displayName = "ProfilePreview";

export default ProfilePreview;