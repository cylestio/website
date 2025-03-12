'use client';

import React, { useEffect, useState } from 'react';
import { Shield, Eye, Lock, Sparkles, Terminal, Github, ArrowRight, Star, Orbit, Code, Server, Users, FileText, MessageSquare, BookOpen } from 'lucide-react';

type InstallStep = {
  title: string;
  description: string;
  command: string;
  icon: string;
};

type InstallSteps = {
  [key: string]: InstallStep;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'install' | 'monitor' | 'observe'>('install');
  const [activeFeature, setActiveFeature] = useState<'installation' | 'security' | 'insights' | 'developers'>('installation');

  useEffect(() => {
    // Create twinkling stars effect
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      if (star instanceof HTMLElement) {
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 1}s`;
      }
      container?.appendChild(star);
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px'
    });

    // Observe elements
    const elements = [
      document.getElementById('about-section'),
      document.getElementById('about-title'),
      document.getElementById('about-features'),
      document.getElementById('dot-pattern')
    ];

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const installationSteps: InstallSteps = {
    install: {
      title: "Install SDK",
      description: "Get started by installing our monitoring SDK",
      command: "pip install cylestio-monitor",
      icon: "›_"
    },
    monitor: {
      title: "Start Monitoring",
      description: "Enable monitoring seamlessly",
      command: `from cylestio_monitor import enable_monitoring

enable_monitoring(agent_id="your-agent-id")`,
      icon: "›_"
    },
    observe: {
      title: "Observe Live",
      description: "Launch the dashboard to see your agent in action",
      command: `npm install -g cylestio-dashboard

cylestio-dashboard`,
      icon: "›_"
    }
  };

  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      <div className="stars-container absolute inset-0" />
      
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
          <span className="text-xl font-bold">Cylestio</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://pypi.org/project/cylestio-monitor/" className="cosmic-glow flex items-center space-x-2 bg-white/5 text-blue-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
            <Terminal className="w-4 h-4" />
            <span>pip</span>
          </a>
          <a href="https://www.npmjs.com/package/cylestio-dashboard" className="cosmic-glow flex items-center space-x-2 bg-white/5 text-blue-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
            <Terminal className="w-4 h-4" />
            <span>npm</span>
          </a>
          <a href="https://docs.cylestio.com" className="cosmic-glow flex items-center space-x-2 bg-white/5 text-blue-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
            <BookOpen className="w-4 h-4" />
            <span>Docs</span>
          </a>
          <a href="https://github.com/cylestio" className="cosmic-glow flex items-center space-x-2 bg-white/5 text-blue-400 px-4 py-2 rounded-lg hover:bg-white/10 transition-all">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative container mx-auto px-6 pt-32 pb-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl">
          {/* Main heading */}
          <h1 className="relative text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Secure Your Organization's AI Workforce from Development to Production, Seamlessly
          </h1>
          
          {/* Subtitle - elegant and prominent */}
          <div className="mb-16">
            <p className="text-2xl text-blue-100/90 font-light leading-relaxed">
              Empower your teams with observability and robust security across all agentic workflows with Cylestio's <span className="open-source-text relative">OPEN SOURCE</span> DevSecAgentOps.
            </p>
          </div>
          
        </div>
      </header>

      {/* About Section */}
      <section className="relative container mx-auto px-6 py-48 mt-32 opacity-0 transition-all duration-1000 translate-y-10" id="about-section">
        <div className="max-w-5xl mx-auto">
          {/* Dot-pattern decorative background element */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-0 transition-all duration-1000 delay-500" id="dot-pattern">
            <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] grid-rows-[repeat(40,1fr)]">
              {Array(1600).fill(0).map((_, i) => {
                const animationClass = `animate-star-${Math.floor(Math.random() * 5) + 1}`;
                const delayClass = `delay-${Math.floor(Math.random() * 10)}00`;
                return (
                  <div 
                    key={i} 
                    className={`w-[3px] h-[3px] rounded-full bg-blue-400 ${animationClass} ${delayClass}`}
                    style={{ 
                      opacity: Math.random() > 0.7 ? 0.5 : 0.2,
                      transform: `scale(${Math.random() > 0.9 ? 1.2 : 1})`
                    }}
                  ></div>
                );
              })}
            </div>
            
            {/* Explorer names within the dot pattern - now spread across the entire area with more random positioning */}
            <div className="absolute top-[8%] left-[15%] text-3xl font-light text-white/60 animate-explorer-1">
              Galileo
            </div>
            <div className="absolute top-[32%] left-[40%] text-3xl font-light text-white/60 animate-explorer-2">
              Kepler
            </div>
            <div className="absolute top-[65%] left-[22%] text-3xl font-light text-white/60 animate-explorer-3">
              Copernicus
            </div>
            <div className="absolute top-[18%] right-[25%] text-2xl font-light text-white/50 animate-explorer-4">
              Newton
            </div>
            <div className="absolute top-[48%] right-[18%] text-2xl font-light text-white/50 animate-explorer-5">
              Hubble
            </div>
            <div className="absolute top-[72%] right-[32%] text-2xl font-light text-white/50 animate-explorer-6">
              Einstein
            </div>
            <div className="absolute top-[22%] left-[12%] text-xl font-light text-white/50 animate-explorer-7">
              Brahe
            </div>
            <div className="absolute top-[55%] left-[38%] text-xl font-light text-white/50 animate-explorer-8">
              Hawking
            </div>
            <div className="absolute top-[7%] right-[22%] text-2xl font-light text-white/50 animate-explorer-9">
              Sagan
            </div>
            <div className="absolute top-[35%] right-[35%] text-2xl font-light text-white/50 animate-explorer-10">
              Herschel
            </div>
            <div className="absolute top-[62%] left-[45%] text-xl font-light text-white/50 animate-explorer-11">
              Halley
            </div>
            <div className="absolute top-[82%] right-[28%] text-xl font-light text-white/50 animate-explorer-12">
              Cassini
            </div>
            <div className="absolute top-[25%] right-[8%] text-2xl font-light text-white/50 animate-explorer-13">
              Laplace
            </div>
            <div className="absolute top-[52%] left-[8%] text-xl font-light text-white/50 animate-explorer-14">
              Lovelace
            </div>
            <div className="absolute top-[78%] left-[25%] text-2xl font-light text-white/50 animate-explorer-15">
              Curie
            </div>
            <div className="absolute top-[42%] right-[12%] text-xl font-light text-white/50 animate-explorer-16">
              Hypatia
            </div>
          </div>

          {/* Main title with refined styling */}
          <div className="mb-32 opacity-0 transition-all duration-1000 delay-300" id="about-title">
            <div className="border-l-4 border-blue-400 pl-8 mb-8">
              <h2 className="text-6xl font-bold mb-6 leading-tight tracking-tight bg-gradient-to-r from-white to-white/90 bg-clip-text">
                Like the legendary <span className="text-blue-400">explorers</span>
              </h2>
              <p className="text-2xl text-white/80 tracking-wide max-w-3xl font-light">
                who uncovered the secrets of the universe, we reveal what others cannot see.
              </p>
            </div>
          </div>

          {/* Features section with refined styling */}
          <div className="opacity-0 transition-all duration-1000 delay-700" id="about-features">
            <h3 className="text-3xl font-semibold mb-20 flex items-center">

              Cylestio reveals hidden threats and usage trends across:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {/* Feature cards with enhanced hover effects */}
              <div className="group hover:translate-y-[-5px] transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-5 group-hover:bg-blue-500/20 transition-all duration-500">
                    <Code className="w-7 h-7 text-blue-400" />
                  </div>
                  <h4 className="text-2xl font-medium">
                    Tools & Data Sources
                  </h4>
                </div>
                <p className="text-lg text-white/70 border-t border-white/10 pt-6 group-hover:text-white/90 transition-all duration-500">
                  Monitor all internal and external inputs and integrations
                </p>
              </div>
              
              <div className="group hover:translate-y-[-5px] transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-5 group-hover:bg-blue-500/20 transition-all duration-500">
                    <MessageSquare className="w-7 h-7 text-blue-400" />
                  </div>
                  <h4 className="text-2xl font-medium">
                    LLM Interactions
                  </h4>
                </div>
                <p className="text-lg text-white/70 border-t border-white/10 pt-6 group-hover:text-white/90 transition-all duration-500">
                  Track all AI queries and responses
                </p>
              </div>
              
              <div className="group hover:translate-y-[-5px] transition-all duration-500">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mr-5 group-hover:bg-blue-500/20 transition-all duration-500">
                    <Users className="w-7 h-7 text-blue-400" />
                  </div>
                  <h4 className="text-2xl font-medium">
                    User Activities
                  </h4>
                </div>
                <p className="text-lg text-white/70 border-t border-white/10 pt-6 group-hover:text-white/90 transition-all duration-500">
                  Identify patterns and anomalies
                </p>
              </div>
            </div>
          </div>
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

      {/* Product Features */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex space-x-8">
            {/* Vertical Feature Tabs */}
            <div className="flex flex-col space-y-3 min-w-[240px]">
              <button
                onClick={() => setActiveFeature('installation')}
                className={`px-6 py-4 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeFeature === 'installation'
                    ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                    : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                }`}
              >
                <Server className={`w-5 h-5 ${activeFeature === 'installation' ? 'text-blue-400' : 'text-blue-400/70'}`} />
                <span>Simple Installation</span>
              </button>
              
              <button
                onClick={() => setActiveFeature('security')}
                className={`px-6 py-4 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeFeature === 'security'
                    ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                    : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                }`}
              >
                <Shield className={`w-5 h-5 ${activeFeature === 'security' ? 'text-purple-400' : 'text-purple-400/70'}`} />
                <span>Secure & Compliant</span>
              </button>
              
              <button
                onClick={() => setActiveFeature('insights')}
                className={`px-6 py-4 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeFeature === 'insights'
                    ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                    : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                }`}
              >
                <Eye className={`w-5 h-5 ${activeFeature === 'insights' ? 'text-blue-400' : 'text-blue-400/70'}`} />
                <span>Unified Insights</span>
              </button>
              
              <button
                onClick={() => setActiveFeature('developers')}
                className={`px-6 py-4 rounded-lg text-left transition-all duration-300 flex items-center space-x-3 ${
                  activeFeature === 'developers'
                    ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                    : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                }`}
              >
                <Users className={`w-5 h-5 ${activeFeature === 'developers' ? 'text-purple-400' : 'text-purple-400/70'}`} />
                <span>For Developers & Security Teams</span>
              </button>
            </div>

            {/* Feature Content */}
            <div className="flex-1">
              <div className="cosmic-card rounded-xl p-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {activeFeature === 'installation' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-6">
                      <Server className="w-8 h-8 text-blue-400" />
                      <h3 className="text-xl font-semibold">Simple Installation</h3>
                    </div>
                    
                    <p className="text-blue-100/70 mb-8">
                      Get up and running in minutes with our easy-to-install SDK and dashboard. No complex configuration required.
                    </p>
                    
                    {/* Installation Steps */}
                    <div className="flex space-x-2 mb-8">
                      {Object.entries(installationSteps).map(([key, { title }]) => (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key as 'install' | 'monitor' | 'observe')}
                          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                            activeTab === key
                              ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                              : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                          }`}
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                    
                    <div className="cosmic-card bg-[#0A0F1C] p-6 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative">
                        <p className="text-blue-100/70 mb-4">
                          {installationSteps[activeTab].description}
                        </p>
                        
                        <div className="bg-[#070B14] rounded-lg p-4">
                          <code className="text-blue-300 block text-sm">
                            {installationSteps[activeTab].command.split('\n').map((line, i) => (
                              <div key={i} className="flex items-start">
                                {line.trim() && (
                                  <>
                                    <span className="text-blue-400 opacity-70 mr-2 mt-[2px] w-[20px]">
                                      {installationSteps[activeTab].icon}
                                    </span>
                                    <span>
                                      {line.trim()}
                                    </span>
                                  </>
                                )}
                                {!line.trim() && <div className="h-2" />}
                              </div>
                            ))}
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === 'security' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-6">
                      <Shield className="w-8 h-8 text-purple-400" />
                      <h3 className="text-xl font-semibold">Secure & Compliant</h3>
                    </div>
                    <p className="text-blue-100/70">
                      Built with security in mind, our tools provide compliance-ready monitoring and threat detection for AI systems.
                    </p>
                  </div>
                )}

                {activeFeature === 'insights' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-6">
                      <Eye className="w-8 h-8 text-blue-400" />
                      <h3 className="text-xl font-semibold">Unified Insights</h3>
                    </div>
                    <p className="text-blue-100/70">
                      Gain comprehensive visibility into AI agent behavior, data flows, and potential security risks in one dashboard.
                    </p>
                  </div>
                )}

                {activeFeature === 'developers' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-6">
                      <Users className="w-8 h-8 text-purple-400" />
                      <h3 className="text-xl font-semibold">For Developers & Security Teams</h3>
                    </div>
                    <p className="text-blue-100/70">
                      Designed for DevSecOps in the AI era, providing tools for both developers building agents and security teams protecting them.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Dashboard Preview</h2>
          <div className="cosmic-card rounded-xl p-4 mb-12 aspect-video flex items-center justify-center">
            <p className="text-blue-100/60 text-xl">Dashboard Screenshot Coming Soon</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cosmic-card rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Agent Activities</h3>
              <p className="text-blue-100/70">
                Monitor all agent interactions and activities in real-time with detailed logs and visualizations.
              </p>
            </div>
            <div className="cosmic-card rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Security Alerts</h3>
              <p className="text-blue-100/70">
                Receive immediate notifications about potential security issues and anomalous agent behavior.
              </p>
            </div>
            <div className="cosmic-card rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <p className="text-blue-100/70">
                Track the performance and resource usage of your AI agents to optimize and improve functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative container mx-auto px-6 py-32">
        <div className="cosmic-card max-w-3xl mx-auto text-center p-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-8">Join the Cylestio Community</h2>
          <p className="text-xl text-blue-100/80 mb-12">
            Start protecting your AI agents with our open-source tool today, and explore our premium SaaS platform as you scale.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a href="https://github.com/orgs/cylestio/discussions" className="cosmic-glow flex items-center justify-center space-x-2 bg-blue-500 px-8 py-4 rounded-lg hover:bg-blue-600 transition-all text-lg font-medium">
              <Github className="w-5 h-5" />
              <span>GitHub Discussions</span>
            </a>
            <a href="https://join.slack.com/share/enQtODYxMzQ1Mjg3OTQwOC01MzQxMjM2MTAxMTc0ZjgwMmNjN2E0OGU0ZTZiOTk4ODQ1Zjc0NWQwMmNkZWIwNTJjYWI4OWViMGNiMjJlZGNk" className="cosmic-glow flex items-center justify-center space-x-2 bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-all text-lg font-medium">
              <MessageSquare className="w-5 h-5" />
              <span>Slack Channel</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      <style jsx>{`
        @keyframes glow {
          0%, 100% { opacity: 0.9; text-shadow: 0 0 20px currentColor, 0 0 40px currentColor/30; }
          50% { opacity: 1; text-shadow: 0 0 25px currentColor, 0 0 50px currentColor/40; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.7); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-15px) translateX(5px); }
          66% { transform: translateY(-5px) translateX(-10px); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(2); opacity: 0.8; }
        }

        @keyframes pulse-delayed {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(2); opacity: 0.8; }
        }

        @keyframes float-ambient-1 {
          0% { opacity: 0.05; transform: translateY(0) translateX(0); }
          20% { opacity: 0.15; transform: translateY(-10px) translateX(5px); }
          40% { opacity: 0.1; transform: translateY(-5px) translateX(10px); }
          60% { opacity: 0.05; transform: translateY(5px) translateX(0px); }
          80% { opacity: 0.15; transform: translateY(10px) translateX(-5px); }
          100% { opacity: 0.05; transform: translateY(0) translateX(0); }
        }

        @keyframes float-ambient-2 {
          0% { opacity: 0.05; transform: translateY(5px) translateX(0); }
          25% { opacity: 0.1; transform: translateY(-5px) translateX(-10px); }
          50% { opacity: 0.15; transform: translateY(-10px) translateX(5px); }
          75% { opacity: 0.05; transform: translateY(10px) translateX(10px); }
          100% { opacity: 0.05; transform: translateY(5px) translateX(0); }
        }

        @keyframes float-ambient-3 {
          0% { opacity: 0.1; transform: translateY(-5px) translateX(5px); }
          33% { opacity: 0.05; transform: translateY(10px) translateX(-5px); }
          66% { opacity: 0.15; transform: translateY(5px) translateX(10px); }
          100% { opacity: 0.1; transform: translateY(-5px) translateX(5px); }
        }

        @keyframes float-ambient-4 {
          0% { opacity: 0.05; transform: translateY(0) translateX(0); }
          40% { opacity: 0.1; transform: translateY(-15px) translateX(-10px); }
          80% { opacity: 0.05; transform: translateY(15px) translateX(5px); }
          100% { opacity: 0.05; transform: translateY(0) translateX(0); }
        }

        @keyframes float-ambient-5 {
          0% { opacity: 0.1; transform: translateY(-10px) translateX(-5px); }
          40% { opacity: 0.05; transform: translateY(10px) translateX(15px); }
          80% { opacity: 0.15; transform: translateY(5px) translateX(-10px); }
          100% { opacity: 0.1; transform: translateY(-10px) translateX(-5px); }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-glow-slow {
          animation: glow 4s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 1.5s ease-out 0.75s forwards;
          opacity: 0;
        }

        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }

        .animate-twinkle-delayed {
          animation: twinkle 4s ease-in-out 2s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out 2s infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-ambient-1 {
          animation: float-ambient-1 20s ease-in-out infinite;
        }

        .animate-float-ambient-2 {
          animation: float-ambient-2 25s ease-in-out infinite;
        }

        .animate-float-ambient-3 {
          animation: float-ambient-3 22s ease-in-out infinite;
        }

        .animate-float-ambient-4 {
          animation: float-ambient-4 28s ease-in-out infinite;
        }

        .animate-float-ambient-5 {
          animation: float-ambient-5 24s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 10s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-slow 6s ease-in-out 3s infinite;
        }

        /* Explorer name animations with more randomized timing */
        @keyframes explorer-fade {
          0%, 100% { opacity: 0; transform: translateY(10px); }
          25%, 75% { opacity: 0.6; transform: translateY(0); }
        }
        
        .animate-explorer-1 {
          animation: explorer-fade 20s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .animate-explorer-2 {
          animation: explorer-fade 18s ease-in-out infinite;
          animation-delay: 7s;
        }
        
        .animate-explorer-3 {
          animation: explorer-fade 22s ease-in-out infinite;
          animation-delay: 13s;
        }
        
        .animate-explorer-4 {
          animation: explorer-fade 19s ease-in-out infinite;
          animation-delay: 3s;
        }
        
        .animate-explorer-5 {
          animation: explorer-fade 21s ease-in-out infinite;
          animation-delay: 9s;
        }
        
        .animate-explorer-6 {
          animation: explorer-fade 23s ease-in-out infinite;
          animation-delay: 16s;
        }
        
        .animate-explorer-7 {
          animation: explorer-fade 17s ease-in-out infinite;
          animation-delay: 5s;
        }
        
        .animate-explorer-8 {
          animation: explorer-fade 24s ease-in-out infinite;
          animation-delay: 11s;
        }
        
        .animate-explorer-9 {
          animation: explorer-fade 20s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-explorer-10 {
          animation: explorer-fade 19s ease-in-out infinite;
          animation-delay: 14s;
        }
        
        .animate-explorer-11 {
          animation: explorer-fade 22s ease-in-out infinite;
          animation-delay: 8s;
        }
        
        .animate-explorer-12 {
          animation: explorer-fade 18s ease-in-out infinite;
          animation-delay: 17s;
        }
        
        .animate-explorer-13 {
          animation: explorer-fade 21s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-explorer-14 {
          animation: explorer-fade 23s ease-in-out infinite;
          animation-delay: 10s;
        }
        
        .animate-explorer-15 {
          animation: explorer-fade 19s ease-in-out infinite;
          animation-delay: 15s;
        }
        
        .animate-explorer-16 {
          animation: explorer-fade 20s ease-in-out infinite;
          animation-delay: 6s;
        }

        /* Brush underline effect for "OPEN SOURCE" text */
        .open-source-text {
          font-weight: bold;
          position: relative;
          display: inline-block;
          color: #60a5fa;
          z-index: 1;
        }
        
        .open-source-text::after {
          content: "";
          position: absolute;
          left: -2px;
          right: -2px;
          bottom: -2px;
          height: 6px;
          background-color: #8b5cf6;
          border-radius: 12px;
          z-index: -1;
          opacity: 0.7;
          transform: rotate(-1deg);
          filter: blur(1px);
          background-image: linear-gradient(90deg, 
            rgba(139, 92, 246, 0.3) 0%, 
            rgba(139, 92, 246, 0.8) 30%, 
            rgba(139, 92, 246, 0.9) 50%, 
            rgba(139, 92, 246, 0.8) 70%, 
            rgba(139, 92, 246, 0.3) 100%
          );
          transition: all 0.3s ease;
        }
        
        .open-source-text:hover::after {
          height: 8px;
          opacity: 0.9;
          filter: blur(1.5px);
          transform: rotate(-0.5deg);
        }

        /* Star animations with random fade in/out */
        @keyframes star-1 {
          0%, 100% { opacity: 0; }
          30%, 70% { opacity: 0.3; }
        }
        
        @keyframes star-2 {
          0%, 100% { opacity: 0.1; }
          40%, 60% { opacity: 0.4; }
        }
        
        @keyframes star-3 {
          0%, 100% { opacity: 0; }
          50% { opacity: 0.35; }
        }
        
        @keyframes star-4 {
          0%, 100% { opacity: 0.1; }
          30%, 80% { opacity: 0.25; }
        }
        
        @keyframes star-5 {
          0%, 100% { opacity: 0.05; }
          45%, 55% { opacity: 0.3; }
        }
        
        .animate-star-1 {
          animation: star-1 8s ease-in-out infinite;
        }
        
        .animate-star-2 {
          animation: star-2 12s ease-in-out infinite;
        }
        
        .animate-star-3 {
          animation: star-3 15s ease-in-out infinite;
        }
        
        .animate-star-4 {
          animation: star-4 10s ease-in-out infinite;
        }
        
        .animate-star-5 {
          animation: star-5 20s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 1s; }
        .delay-200 { animation-delay: 2s; }
        .delay-300 { animation-delay: 3s; }
        .delay-400 { animation-delay: 4s; }
        .delay-500 { animation-delay: 5s; }
        .delay-600 { animation-delay: 6s; }
        .delay-700 { animation-delay: 7s; }
        .delay-800 { animation-delay: 8s; }
        .delay-900 { animation-delay: 9s; }
        .delay-000 { animation-delay: 0s; }
      `}</style>
    </div>
  );
} 