'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Lock, Eye, Sparkles, Mail, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import EarlyAccessForm from './components/EarlyAccessForm';

const GridBackground = () => (
  <div className="absolute inset-0 z-0 h-full w-full bg-brand-night">
    <div
      className="absolute inset-0 z-0 h-full w-full"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(26, 30, 45, 0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 30, 45, 0.8) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 40%, transparent 100%)',
      }}
    />
  </div>
);

const Spotlight = () => (
  <div
    className="pointer-events-none absolute inset-0 z-10"
    style={{
      background: 'radial-gradient(circle at 50% 50%, transparent, #030014 60%)',
    }}
  />
);

const RotatingBeam = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]">
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `
          conic-gradient(from 180deg at 50% 50%,
            #0052FF -10.82deg,
            #7A3AFF 15.61deg,
            #030014 60.77deg,
            #030014 123.59deg,
            #7A3AFF 191.13deg,
            #0052FF 251.27deg,
            #030014 311.1deg,
            #0052FF 349.18deg,
            #7A3AFF 375.61deg
          )
        `,
        filter: 'blur(80px)',
        animation: 'rotate 15s linear infinite',
        opacity: 0.15,
      }}
    />
    <style jsx>{`
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const Footer = () => (
  <footer className="absolute bottom-0 left-0 right-0 z-30 py-6 px-4 sm:px-6 lg:px-8">
    <div className="mx-auto flex max-w-7xl justify-between text-sm text-brand-steel-400 opacity-0 animate-new-fade-in-up" style={{ animationDelay: '1200ms' }}>
      <p>&copy; {new Date().getFullYear()} Cylestio Inc. All rights reserved.</p>
      <a href="mailto:info@cylestio.com" className="hover:text-white transition-colors">
        info@cylestio.com
      </a>
    </div>
  </footer>
);

export default function StealthPageV2() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-brand-night text-white antialiased">
      <GridBackground />
      <RotatingBeam />
      <Spotlight />
      
      <div className="relative z-20 flex flex-col items-center justify-center w-full flex-grow px-4 pt-20 text-center sm:pt-24">
        <div className="max-w-4xl opacity-0 animate-new-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h1 className="text-5xl font-bold tracking-tighter text-transparent md:text-7xl lg:text-8xl font-display bg-clip-text bg-gradient-to-b from-white to-brand-steel-300">
            Cylestio
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-brand-steel-300 md:text-xl" style={{ animationDelay: '500ms' }}>
            Runtime Security for the Agentic Era.
          </p>
        </div>

        <div className="flex flex-col items-center w-full max-w-6xl gap-8 mt-12 lg:flex-row lg:items-stretch lg:justify-center lg:gap-16 lg:mt-16">
          <div className="w-full max-w-md text-left lg:w-1/2 opacity-0 animate-new-fade-in-up" style={{ animationDelay: '700ms' }}>
            <div className="h-full flex p-px rounded-xl bg-gradient-to-b from-white/10 to-transparent">
              <div className="p-8 text-center bg-brand-steel-800/50 rounded-xl backdrop-blur-lg lg:text-left">
                <h2 className="text-2xl font-bold text-white lg:text-3xl font-display">Shh... The rules of security are changing. Autonomously.</h2>
                <p className="mt-4 text-base text-brand-steel-300 lg:text-lg">
                  Your agentic forces aren't ready to be unleashed. We're here to change that.
                </p>
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-md lg:w-1/2 opacity-0 animate-new-fade-in-up" style={{ animationDelay: '900ms' }}>
            <EarlyAccessForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 