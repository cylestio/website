'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Github, MessageSquare } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      {/* Navigation */}
      <nav className="relative container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative w-10 h-10">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20" />
          </div>
          <Link href="/" className="text-xl font-bold">Cylestio</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto my-8 p-8 rounded-lg bg-[rgba(2,8,23,0.85)] shadow-[0_0_40px_rgba(59,130,246,0.15)]">
        <header className="border-b border-blue-500/20 pb-6 mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Cylestio Blog</h1>
          <p className="mt-2">
            <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </p>
        </header>

        <main>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Latest Posts</h2>
          
          <ul className="space-y-8">
            <li>
              <Link 
                href="/blog/posts/2-build-secure-mcp-registry" 
                className="flex gap-6 pb-6 border-b border-blue-500/20 hover:bg-white/5 transition-colors p-4 rounded-lg group"
              >
                <img 
                  src="/blog/images/multi_agent.png" 
                  alt="MCP Registry Interface" 
                  className="w-28 h-28 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
                    How I used a team of 15 agents with 4 prompts
                  </h3>
                  <p className="text-blue-100/60 text-sm mb-3">April 17, 2025</p>
                  <p className="text-white/80 leading-relaxed">Learn how to build a secure MCP registry in one evening using a multi-agent framework with this step-by-step guide.</p>
                </div>
              </Link>
            </li>
            
            <li>
              <Link 
                href="/blog/posts/1-executive-prompting" 
                className="flex gap-6 pb-6 border-b border-blue-500/20 hover:bg-white/5 transition-colors p-4 rounded-lg group"
              >
                <img 
                  src="/blog/images/different_hats.png" 
                  alt="AI development team with different roles" 
                  className="w-28 h-28 object-cover rounded-md flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-200 transition-colors mb-2">
                    Executive Prompting: Building Beyond Vibe Coding
                  </h3>
                  <p className="text-blue-100/60 text-sm mb-3">April 14, 2025</p>
                  <p className="text-white/80 leading-relaxed">Discover how to move beyond basic vibe coding and implement a full organizational approach to AI-assisted development.</p>
                </div>
              </Link>
            </li>
          </ul>
        </main>
      </div>

      {/* Footer (same as main page) */}
      <footer className="relative py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-6 h-6 object-contain"
            />
            <span className="font-bold">Cylestio</span>
          </div>
          <p className="text-blue-100/60">Secure Innovation. Secure Future.</p>
        </div>
      </footer>
    </div>
  );
} 