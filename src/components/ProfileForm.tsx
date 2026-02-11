"use client";

import React, { ChangeEvent } from "react";
import { ProfileData } from "@/src/types/profile";
import { FaLinkedin, FaGithub, FaTwitter, FaCamera } from "react-icons/fa";

interface ProfileFormProps {
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ profile, setProfile }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      links: { ...prev.links, [name]: value },
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Premium Glassmorphism Tailwind Classes ---
  const inputWrapper = "relative group flex flex-col space-y-2";
  
  // Transition-all combined with duration-300 for smooth focus/hover
  // focus:ring uses a gradient-like shadow effect via opacity
  const inputStyles = `
    w-full px-5 py-3.5 bg-white/20 backdrop-blur-md 
    border border-white/30 rounded-2xl 
    text-white placeholder:text-white/40 font-medium
    outline-none transition-all duration-300
    hover:bg-white/30 hover:border-white/50
    focus:bg-white/25 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400
    active:scale-[0.99] md:active:scale-100
  `;

  const labelStyles = "text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300 ml-2 mb-1 opacity-80 group-focus-within:opacity-100 group-focus-within:text-purple-300 transition-all";

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      
      {/* 📸 Premium Glass Image Uploader */}
      <div className="flex flex-col items-center sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl transition-all duration-500 hover:bg-white/15">
        <div className="relative group cursor-pointer">
          {/* Glowing Ring Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[2rem] blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          <div className="relative h-28 w-28 rounded-[1.8rem] overflow-hidden border-2 border-white/50 bg-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-105 group-active:scale-95">
            {profile.image ? (
              <img src={profile.image} alt="Preview" className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-white/20">
                <FaCamera size={32} />
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
               <FaCamera size={20} className="text-white animate-bounce" />
            </div>
          </div>
        </div>
        
        <div className="flex-1 space-y-3 text-center sm:text-left">
          <h4 className="text-xl font-bold text-white tracking-tight">Identity Image</h4>
          <p className="text-xs text-indigo-200/60 font-medium">Elevate your card with a professional photo.</p>
          
          <label className="inline-block relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <span className="inline-flex items-center px-6 py-2.5 bg-indigo-500/20 hover:bg-indigo-500/40 border border-indigo-400/30 rounded-xl text-xs font-bold text-indigo-100 transition-all active:scale-90">
              Upload New Photo
            </span>
          </label>
        </div>
      </div>

      {/* 📝 Identity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className={inputWrapper}>
          <label className={labelStyles}>Full Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="e.g. Nirankar Gangwar" className={inputStyles} />
        </div>
        <div className={inputWrapper}>
          <label className={labelStyles}>Expertise / Role</label>
          <input type="text" name="role" value={profile.role} onChange={handleChange} placeholder="e.g. Web Developer" className={inputStyles} />
        </div>
      </div>

      <div className={inputWrapper}>
        <label className={labelStyles}>Location</label>
        <input type="text" name="address" value={profile.address} onChange={handleChange} placeholder="City, Country" className={inputStyles} />
      </div>

      <div className={inputWrapper}>
        <label className={labelStyles}>Short Bio</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} rows={3} placeholder="Briefly describe your professional journey..." className={`${inputStyles} resize-none`} />
      </div>

      {/* 🔗 Social Ecosystem - Glass Dividers */}
      <div className="pt-8 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div className="flex items-center space-x-4 mb-8">
          <h3 className="text-xs font-black text-indigo-300 uppercase tracking-[0.3em]">Social Canvas</h3>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-5">
          {/* LinkedIn */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-white/30 group-focus-within:text-indigo-400 transition-colors">
              <FaLinkedin size={20} />
            </div>
            <input type="text" name="linkedin" value={profile.links.linkedin} onChange={handleLinkChange} placeholder="LinkedIn Profile URL" className={`${inputStyles} pl-14`} />
          </div>

          {/* GitHub */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-white/30 group-focus-within:text-white transition-colors">
              <FaGithub size={20} />
            </div>
            <input type="text" name="github" value={profile.links.github} onChange={handleLinkChange} placeholder="GitHub Username" className={`${inputStyles} pl-14`} />
          </div>

          {/* Twitter / X */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-white/30 group-focus-within:text-pink-400 transition-colors">
              <FaTwitter size={20} />
            </div>
            <input type="text" name="twitter" value={profile.links.twitter} onChange={handleLinkChange} placeholder="Twitter / X Handle" className={`${inputStyles} pl-14`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;