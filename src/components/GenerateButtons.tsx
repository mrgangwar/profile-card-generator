"use client";

import React, { useState, useEffect } from "react";
import { FaFilePdf, FaImage } from "react-icons/fa";
import { exportAsImage } from "@/src/utils/exportAsImage";
import { exportAsPDF } from "@/src/utils/exportAsPDF";

interface GenerateButtonsProps {
  cardRef: React.RefObject<HTMLDivElement | null>;
}

const GenerateButtons: React.FC<GenerateButtonsProps> = ({ cardRef }) => {
  const [loading, setLoading] = useState<"image" | "pdf" | null>(null);
  const [, setRender] = useState({});

  useEffect(() => {
    setRender({});
  }, []);

  const triggerFeedback = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(100);
    }
  };

  const handleExport = async (type: "image" | "pdf") => {
    if (!cardRef.current) {
        return;
    }

    setLoading(type);
    triggerFeedback();

    try {
      if (type === "image") {
        await exportAsImage(cardRef.current);
      } else {
        await exportAsPDF(cardRef.current);
      }
    } catch (error) {
      console.error(`Export failed:`, error);
    } finally {
      setLoading(null);
    }
  };

  // --- Premium Button Style Logic ---
  const getButtonStyles = (isLoading: boolean, variant: "primary" | "glass") => {
    const base = `
      relative flex items-center justify-center gap-3 px-8 py-4 
      rounded-2xl font-bold tracking-widest uppercase text-[11px]
      transition-all duration-300 ease-out 
      active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed 
      disabled:backdrop-blur-sm overflow-hidden group
    `;
    
    const variants = {
      // Primary: Indigo -> Purple -> Pink Gradient with Glow
      primary: `
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
        text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]
        hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.03]
        hover:-translate-y-1
      `,
      // Glass: Translucent with White Border
      glass: `
        bg-white/10 backdrop-blur-xl border border-white/20 
        text-white shadow-xl
        hover:bg-white/20 hover:border-white/40 
        hover:scale-[1.03] hover:-translate-y-1
      `
    };

    return `${base} ${variants[variant]}`;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 w-full animate-in fade-in zoom-in duration-1000 delay-500">
      
      {/* 🖼️ PNG Export Button */}
      <button
        onClick={() => handleExport("image")}
        disabled={loading !== null}
        className={getButtonStyles(loading === "image", "primary")}
      >
        {loading === "image" ? (
          <div className="flex items-center gap-3 animate-pulse">
            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Processing...</span>
          </div>
        ) : (
          <>
            {/* Animated Background Shine */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <FaImage className="text-lg group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Export Identity (PNG)</span>
          </>
        )}
      </button>

      {/* 📄 PDF Export Button */}
      <button
        onClick={() => handleExport("pdf")}
        disabled={loading !== null}
        className={getButtonStyles(loading === "pdf", "glass")}
      >
        {loading === "pdf" ? (
          <div className="flex items-center gap-3 animate-pulse">
            <div className="h-4 w-4 border-2 border-white/30 border-t-purple-400 rounded-full animate-spin" />
            <span>Generating...</span>
          </div>
        ) : (
          <>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 transition-opacity duration-500" />
            
            <FaFilePdf className="text-lg text-pink-400 group-hover:scale-125 transition-transform duration-300" />
            <span className="relative z-10">Save as Document (PDF)</span>
          </>
        )}
      </button>

      {/* Inlined Shimmer Keyframes via Tailwind Arbitrary Values isn't possible for keyframes, 
          so we use the group-hover:animate-pulse or standard transitions. 
          The 'shimmer' effect is simulated here with standard Tailwind transition classes. */}
    </div>
  );
};

export default GenerateButtons;