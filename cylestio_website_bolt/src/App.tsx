import React, { useEffect } from 'react';
import { Telescope, Shield, Eye, Lock, Sparkles, Terminal, Github, ArrowRight, Star, Orbit } from 'lucide-react';

function App() {
  useEffect(() => {
    // Create twinkling stars effect
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 1}s`;
      container?.appendChild(star);
    }
  }, []);

  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      <div className="stars-container absolute inset-0" />
      
      {/* Navigation */}
      <nav className="relative container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Telescope className="w-8 h-8 text-blue-400" />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20" />
          </div>
          <span className="text-xl font-bold">Cylestio</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="https://github.com" className="cosmic-glow flex items-center space-x-2 bg-white/5 text-blue-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 py-32 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="relative text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Secure Your AI Agents from Development to Deployment
        </h1>
        <p className="text-xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Empower your AI agents with complete visibility and robust security. Start with our open‑source solution and upgrade to our full SaaS platform for enterprise‑grade monitoring.
        </p>
        <div className="cosmic-card inline-flex items-center space-x-3 px-6 py-3 rounded-lg mb-24">
          <Terminal className="w-5 h-5 text-blue-400" />
          <code className="text-blue-300">pip install cylestio</code>
        </div>
      </header>

      {/* About Section */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <div className="relative">
              <Star className="w-16 h-16 text-blue-400" />
              <Orbit className="w-24 h-24 text-purple-400/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
          </div>
          <p className="text-xl text-center text-blue-100/80 leading-relaxed">
            Like the legendary explorers Galileo, Kepler, and Copernicus who uncovered the secrets of the universe, 
            Cylestio reveals hidden threats and usage trends across data sources, LLM interactions, and user activities.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="relative container mx-auto px-6 py-32">
        <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cosmic-card rounded-xl p-8 hover:scale-105 transition-transform">
            <Eye className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4">End-to-End Monitoring</h3>
            <p className="text-blue-100/70">
              Track AI agents in real‑time, providing insights into LLM interactions, tool usage, data flows, and user activities.
            </p>
          </div>
          <div className="cosmic-card rounded-xl p-8 hover:scale-105 transition-transform">
            <Shield className="w-8 h-8 text-purple-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4">DevSecOps for AI Agents</h3>
            <p className="text-blue-100/70">
              Integrate security into every stage of the AI lifecycle—from development through production.
            </p>
          </div>
          <div className="cosmic-card rounded-xl p-8 hover:scale-105 transition-transform">
            <Sparkles className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Open‑Source & Enterprise</h3>
            <p className="text-blue-100/70">
              Start with open‑source for immediate value, upgrade to SaaS for advanced threat detection and analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Why Cylestio */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
        <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Why Cylestio?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto">
          <div className="cosmic-card rounded-xl p-8 text-center">
            <Lock className="w-10 h-10 text-blue-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Personalized Insights</h3>
            <p className="text-blue-100/70">
              Actionable intelligence about AI agent behavior, spotting anomalies early.
            </p>
          </div>
          <div className="cosmic-card rounded-xl p-8 text-center">
            <Terminal className="w-10 h-10 text-purple-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-blue-100/70">
              Lightweight SDK and plug‑in monitoring secure existing systems without disruption.
            </p>
          </div>
          <div className="cosmic-card rounded-xl p-8 text-center">
            <Shield className="w-10 h-10 text-blue-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold mb-4">Trusted Expertise</h3>
            <p className="text-blue-100/70">
              Backed by decades of experience in cybersecurity and AI.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="cosmic-card max-w-3xl mx-auto text-center p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-8">Join the Cylestio Community</h2>
          <p className="text-xl text-blue-100/80 mb-12">
            Start protecting your AI agents with our open-source tool today, and explore our premium SaaS platform as you scale.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="cosmic-glow flex items-center space-x-2 bg-blue-500 px-8 py-4 rounded-lg hover:bg-blue-600 transition-all text-lg font-medium">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Telescope className="w-6 h-6 text-blue-400" />
            <span className="font-bold">Cylestio</span>
          </div>
          <p className="text-blue-100/60">Secure Innovation. Secure Future.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;