'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, MessageSquare } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative container mx-auto px-4 sm:px-6 py-4 md:py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20" />
          </div>
          <Link href="/" className="text-lg sm:text-xl font-bold">Cylestio</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto my-4 sm:my-8 p-4 sm:p-8 rounded-lg bg-[rgba(2,8,23,0.85)] shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <header className="border-b border-blue-500/20 pb-4 sm:pb-6 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Cylestio Blog</h1>
          <p className="mt-2">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </p>
        </header>

        <main>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Latest Posts</h2>
          
          <ul className="space-y-6 sm:space-y-8">
            <li>
              <Link 
                href="/blog/posts/2-build-secure-mcp-registry" 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-blue-500/20 hover:bg-white/5 transition-colors p-3 sm:p-4 rounded-lg group"
              >
                <img 
                  src="/blog/images/multi_agent.png" 
                  alt="MCP Registry Interface" 
                  className="w-full sm:w-28 h-auto sm:h-28 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
                    How I used a team of 15 agents with 4 prompts
                  </h3>
                  <p className="text-blue-100/60 text-xs sm:text-sm mb-2 sm:mb-3">April 17, 2025</p>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">Learn how to build a secure MCP registry in one evening using a multi-agent framework with this step-by-step guide.</p>
                </div>
              </Link>
            </li>
            
            <li>
              <Link 
                href="/blog/posts/1-executive-prompting" 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 pb-4 sm:pb-6 border-b border-blue-500/20 hover:bg-white/5 transition-colors p-3 sm:p-4 rounded-lg group"
              >
                <img 
                  src="/blog/images/different_hats.png" 
                  alt="AI development team with different roles" 
                  className="w-full sm:w-28 h-auto sm:h-28 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
                    Executive Prompting: Building Beyond Vibe Coding
                  </h3>
                  <p className="text-blue-100/60 text-xs sm:text-sm mb-2 sm:mb-3">April 14, 2025</p>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">Discover how to move beyond basic vibe coding and implement a full organizational approach to AI-assisted development.</p>
                </div>
              </Link>
            </li>
          </ul>
        </main>
      </div>

      {/* Footer (same as main page) */}
      <footer className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3 md:mb-4">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <span className="font-bold text-sm sm:text-base">Cylestio</span>
          </div>
          <p className="text-blue-100/60 text-xs sm:text-sm">
            <a href="mailto:info@cylestio.com" className="hover:text-blue-300 transition-colors">info@cylestio.com</a> © 2025 Cylestio — Secure innovation. Secure future.
          </p>
        </div>
      </footer>
    </div>
  );
} 