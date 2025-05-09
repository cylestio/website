'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Shield, Eye, Lock, Sparkles, Terminal, Github, ArrowRight, Star, Orbit, Code, Server, Users, FileText, MessageSquare, BookOpen, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';

// Use Cases Carousel Component
function UseCasesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const useCases = [
    {
      id: 1,
      image: '/images/use_cases_screenshots/observe_full_agentic_workforc.webp',
      title: 'Observe: Full agentic observability',
      subtitle: 'Live-monitor every agent: From high-level KPIs down to raw events for root-cause analysis.'
    },
    {
      id: 2,
      image: '/images/use_cases_screenshots/optimize_model_analytics.webp',
      title: 'Optimize: Model analytics',
      subtitle: 'Stay on budget with real-time token spend and cost trends. Optimize performance and analyze model latency.'
    },
    {
      id: 3,
      image: '/images/use_cases_screenshots/audit_tool_usage_analysis.webp',
      title: 'Audit: Tool-usage analysis',
      subtitle: 'Audit every internal & external tool call - including MCP servers: parameters, latency, and frequency.'
    },
    {
      id: 4,
      image: '/images/use_cases_screenshots/protect_security_compliance.webp',
      title: 'Protect: Security & compliance',
      subtitle: 'Catch PII and sensitive data leaks, prompt injections, dangerous commands and policy violations as they happen.'
    },
    {
      id: 5,
      image: '/images/use_cases_screenshots/explore_llm_explorer.webp',
      title: 'Explore: LLM explorer',
      subtitle: 'Drill from a full session timeline down to any single prompt & response across users, agents and models.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === useCases.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <div className="relative">
      {/* Main carousel area with max-width layout */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-muted/40"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {useCases.map((useCase) => (
            <div key={useCase.id} className="min-w-full flex flex-col md:flex-row">
              {/* Screenshot - increased to 70% width on md screens with better alignment */}
              <div className="w-full md:w-[70%] relative p-2 md:p-0">
                <div className="flex items-center justify-center md:justify-start h-full">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-auto max-h-[200px] sm:max-h-[280px] md:max-h-[360px] lg:max-h-[500px] object-contain rounded-lg md:rounded-l-xl"
                  />
                </div>
              </div>
              
              {/* Caption content - better positioned and aligned */}
              <div className="w-full md:w-[30%] p-4 md:p-6 flex flex-col justify-center">
                <div className="space-y-2 md:space-y-4">
                  <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">{useCase.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-blue-100/80">{useCase.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons - always visible */}
        <button 
          onClick={prevSlide}
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 bg-blue-500/30 hover:bg-blue-500/60 rounded-full p-1 md:p-2 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 bg-blue-500/30 hover:bg-blue-500/60 rounded-full p-1 md:p-2 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </button>
      </div>
      
      {/* Dots navigation - now below the carousel */}
      <div className="flex justify-center gap-1 md:gap-2 mt-3 md:mt-4">
        {useCases.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all ${
              currentSlide === index 
                ? 'bg-blue-500 w-3 sm:w-4 md:w-6' 
                : 'bg-blue-500/30 hover:bg-blue-500/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Use Cases Tabs Component 
const UseCasesTabs = React.memo(function UseCasesTabs() {
  // Use a React.useState instead of the imported useState to emphasize encapsulation
  const [useCasesActiveTab, setUseCasesActiveTab] = React.useState('observe');
  const [showRightIndicator, setShowRightIndicator] = React.useState(false);
  const tabsContainerRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const checkScroll = () => {
      if (tabsContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = tabsContainerRef.current;
        // Show indicator if there's more content to scroll right
        setShowRightIndicator(scrollWidth > clientWidth + scrollLeft + 5); // 5px buffer
      }
    };

    // Initial check
    checkScroll();
    
    // Set up resize observer
    const resizeObserver = new ResizeObserver(checkScroll);
    if (tabsContainerRef.current) {
      resizeObserver.observe(tabsContainerRef.current);
    }
    
    // Add scroll listener
    const scrollContainer = tabsContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll);
      }
      resizeObserver.disconnect();
    };
  }, []);
  
  const TabsTrigger = ({ value, icon: Icon, children }: { value: string, icon: any, children: React.ReactNode }) => {
    return (
      <button
        onClick={() => setUseCasesActiveTab(value)}
        className={`px-3 sm:px-5 py-3 sm:py-4 flex items-center whitespace-nowrap transition-all duration-300 snap-start text-sm sm:text-base md:text-lg ${
          useCasesActiveTab === value
            ? 'text-blue-400 border-b-2 border-blue-400 font-medium'
            : 'text-blue-400/70 hover:text-blue-300'
        }`}
        aria-controls={`tab-content-${value}`}
      >
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1.5 sm:mr-2 text-blue-300/70" aria-hidden="true" />
        <span>{children}</span>
      </button>
    );
  };
  
  const TabsContent = ({ value, title, subtitle, image }: { value: string, title: string, subtitle: string, image: string }) => {
    return (
      <div 
        id={`tab-content-${value}`}
        className={`flex flex-col md:flex-row items-start ${useCasesActiveTab === value ? 'animate-fade block' : 'hidden'}`}
      >
        <div className="w-full md:w-9/12 relative">
          <div className="premium-screenshot">
            <div className="floating-glow"></div>
            <div className="screenshot-inner">
              <img
                src={image}
                alt={title}
                loading="eager"
              />
              <div className="shine-effect"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/12 pt-6 md:pt-0 md:pl-8">
          <div className="md:border-l-2 border-blue-400 md:pl-6 pl-0">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">{title}</h4>
            <p className="text-sm sm:text-base md:text-lg text-blue-100/80 mt-2 sm:mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Tabs navigation with scroll indicator */}
      <div className="relative">
        <div 
          ref={tabsContainerRef}
          className="border-b border-blue-500/20 flex gap-4 md:gap-6 overflow-x-auto snap-x hide-scrollbar pb-1 mb-4"
        >
          <TabsTrigger value="observe" icon={Eye}>Observe</TabsTrigger>
          <TabsTrigger value="optimize" icon={Star}>Optimize</TabsTrigger>
          <TabsTrigger value="audit" icon={FileText}>Audit</TabsTrigger>
          <TabsTrigger value="protect" icon={Shield}>Protect</TabsTrigger>
          <TabsTrigger value="explore" icon={Orbit}>Explore</TabsTrigger>
        </div>
        
        {/* Horizontal scroll indicator - only on mobile and only if needed */}
        {showRightIndicator && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
            <div className="bg-gradient-to-l from-[#020817] to-transparent w-12 h-12 flex items-center justify-end pr-1">
              <div className="bg-blue-500/10 rounded-full w-8 h-8 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-blue-400 animate-pulse" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Tab content */}
      <TabsContent 
        value="observe" 
        title="Full agentic workforce observability"
        subtitle="Live monitor every agent - from high-level KPIs down to raw events for root-cause analysis."
        image="/images/use_cases_screenshots/observe_full_agentic_workforc.webp"
      />
      
      <TabsContent 
        value="optimize" 
        title="Model analytics"
        subtitle="Stay on budget with real-time token spend, cost trends and performance analysis."
        image="/images/use_cases_screenshots/optimize_model_analytics.webp"
      />
      
      <TabsContent 
        value="audit" 
        title="Tool usage analysis"
        subtitle="Audit event internal & external tool call - including MCP servers - your agents access and invoke: parameters, latency, and frequency."
        image="/images/use_cases_screenshots/audit_tool_usage_analysis.webp"
      />
      
      <TabsContent 
        value="protect" 
        title="Security & compliance"
        subtitle="Catch PII and sensitive data leaks, prompt injections, dangerous commands and policy violations as they happen."
        image="/images/use_cases_screenshots/protect_security_compliance.webp"
      />
      
      <TabsContent 
        value="explore" 
        title="LLM explorer"
        subtitle="Drill from full session timeline to any single prompt & response of your users, agents and LLMs."
        image="/images/use_cases_screenshots/explore_llm_explorer.webp"
      />
    </>
  );
});

// Use Cases Section with the new tabs implementation
function UseCasesSection() {
  return (
    <section id="use-cases" className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section headline and subheadline - left aligned */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Key Workflows</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-blue-100/80 max-w-2xl">
          Capture • Detect • Optimize
          </p>
        </div>

        {/* New tabs implementation */}
        <UseCasesTabs />
      </div>
    </section>
  );
}

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
  const [quickStartActiveTab, setQuickStartActiveTab] = useState<'install' | 'import'>('install');
  const [activeFeature, setActiveFeature] = useState<'instrument' | 'digest' | 'visualize'>('instrument');
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Determine which section is active on scroll
  const [activeSection, setActiveSection] = useState<string>('');
  
  useEffect(() => {
    setIsMounted(true);
    
    // Only run DOM manipulation code after component is mounted on the client
    if (typeof window !== 'undefined') {
      // Create twinkling stars effect - reduced count by 70%
      const container = document.querySelector('.stars-container');
      for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        if (star instanceof HTMLElement) {
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.animationDelay = `${Math.random() * 1}s`;
          // Limit star opacity to max 20%
          star.style.opacity = `${Math.random() * 0.2}`;
        }
        container?.appendChild(star);
      }
    }
  }, [isMounted]);
  
  // Handle mobile menu toggle
  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  // Effect to handle body scrolling when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    
    // Cleanup function
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Simple throttle function to limit scroll event frequency
    const throttle = (callback: Function, delay: number) => {
      let lastCall = 0;
      return function(...args: any[]) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return callback(...args);
      };
    };
    
    const handleScroll = throttle(() => {
      if (typeof window === 'undefined' || !isMounted) return;
      
      const sections = ['use-cases', 'quick-start', 'community'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // If we're at the top, no section is active
      if (scrollPosition < 300) {
        setActiveSection('');
      }
    }, 100);
    
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initialize after a small delay to ensure all elements are rendered
      const timer = setTimeout(() => {
        handleScroll();
      }, 100);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timer);
      };
    }
  }, [isMounted]);

  const installationSteps: InstallSteps = {
    install: {
      title: "Install SDK",
      description: "Get started by installing our monitoring SDK",
      command: "pip install cylestio-monitor",
      icon: "›_"
    },
    import: {
      title: "Import & Run",
      description: "Import and initialize monitoring in your code",
      command: `import cylestio_monitor
cylestio_monitor.start_monitoring(agent_id="my-agent")
# ... your agent code ...
cylestio_monitor.stop_monitoring()`,
      icon: ""
    }
  };

  return (
    <div className="relative min-h-screen cosmic-bg text-white overflow-hidden">
      <div className="stars-container absolute inset-0" />
      
      {/* Navigation */}
      <nav className="relative container mx-auto px-4 sm:px-6 py-4 md:py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 md:w-14 md:h-14">
            <img 
              src="/images/cylestio_logo.png" 
              alt="Cylestio Logo" 
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 bg-blue-400 blur-xl opacity-20" />
          </div>
          <span className="text-xl md:text-2xl font-bold">Cylestio</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#use-cases" className="cosmic-glow flex items-center space-x-2 bg-blue-950/40 text-blue-200 px-4 py-2 rounded-lg hover:bg-blue-900/50 transition-all">
            <span>Use Cases</span>
          </a>
          <a href="https://github.com/cylestio" className="cosmic-glow flex items-center space-x-2 bg-blue-950/40 text-blue-200 px-4 py-2 rounded-lg hover:bg-blue-900/50 transition-all" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a href="#community" className="cosmic-glow flex items-center space-x-2 bg-blue-950/40 text-blue-200 px-4 py-2 rounded-lg hover:bg-blue-900/50 transition-all">
            <Users className="w-4 h-4" />
            <span>Community</span>
          </a>
          <a href="/blog" className="cosmic-glow flex items-center space-x-2 bg-blue-950/40 text-blue-200 px-4 py-2 rounded-lg hover:bg-blue-900/50 transition-all">
            <BookOpen className="w-4 h-4" />
            <span>Blog</span>
          </a>
          <a href="#quick-start" className="cosmic-glow flex items-center space-x-2 bg-blue-950/40 text-blue-200 px-4 py-2 rounded-lg hover:bg-blue-900/50 transition-all">
            <ArrowRight className="w-4 h-4" />
            <span>Get Started</span>
          </a>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="cosmic-glow flex items-center justify-center bg-blue-950/40 text-blue-200 p-2 rounded-lg hover:bg-blue-900/50 transition-all"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 z-40 mobile-menu-backdrop transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMobileMenu}
      />
      
      {/* Menu */}
      <div 
        className={`md:hidden fixed top-[72px] left-0 right-0 z-50 mobile-nav-menu transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'}`}
      >
        <div className="px-4 py-2 space-y-1">
          <a 
            href="#use-cases" 
            className={`mobile-nav-link flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-900/30 transition-all mobile-menu-item ${activeSection === 'use-cases' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <Eye className={`w-5 h-5 ${activeSection === 'use-cases' ? 'text-blue-300' : 'text-blue-400'}`} />
            <span className="font-medium">Use Cases</span>
          </a>
          <a 
            href="https://github.com/cylestio" 
            className="mobile-nav-link flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-900/30 transition-all mobile-menu-item"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            <Github className="w-5 h-5 text-blue-400" />
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href="#community" 
            className={`mobile-nav-link flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-900/30 transition-all mobile-menu-item ${activeSection === 'community' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <Users className={`w-5 h-5 ${activeSection === 'community' ? 'text-blue-300' : 'text-blue-400'}`} />
            <span className="font-medium">Community</span>
          </a>
          <a 
            href="/blog" 
            className="mobile-nav-link flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-900/30 transition-all mobile-menu-item"
            onClick={toggleMobileMenu}
          >
            <BookOpen className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Blog</span>
          </a>
          <a 
            href="#quick-start" 
            className={`mobile-nav-link flex items-center space-x-3 px-4 py-3 rounded-lg text-blue-200 hover:bg-blue-900/30 transition-all mobile-menu-item ${activeSection === 'quick-start' ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <ArrowRight className={`w-5 h-5 ${activeSection === 'quick-start' ? 'text-blue-300' : 'text-blue-400'}`} />
            <span className="font-medium">Get Started</span>
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative container mx-auto px-4 sm:px-6 pt-16 md:pt-32 pb-20 md:pb-40">
        {/* Subtle radial gradient behind 3D conveyor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#0B1633]/65 rounded-full blur-[120px] opacity-65 pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 space-y-6 md:space-y-0">
          <div className="max-w-4xl md:w-1/2 space-y-4 md:space-y-8">
            {/* Main heading - changed to slate-100 from gradient */}
            <h1 className="relative text-3xl sm:text-4xl md:text-5xl font-bold text-slate-100 leading-tight">
              Monitor Your Agentic Workforce From Dev to Prod, Seamlessly.
            </h1>
            
            {/* Body text */}
            <div className="mb-6 md:mb-14">
              <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 font-light leading-relaxed">
                <b>Capture</b> every prompt, MCP call, tool execution, user interaction and data flow. <b>Detect</b> security risks, policy breaches, and cost spikes with Cylestio's <span className="open-source-text relative">open-source</span> <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-medium">DevSecAgentOps</span>.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <a href="#quick-start" className="btn btn-primary cosmic-glow text-sm sm:text-base">
                Get Started
              </a>
              <a href="#community" className="btn btn-secondary text-sm sm:text-base">
                Join Community
              </a>
            </div>
          </div>
          
          {/* Header Diagram */}
          <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
            <img 
              src="/images/header_diagram_opt.webp" 
              alt="Agent monitoring workflow from dev to prod" 
              className="max-w-full h-auto object-contain max-h-[280px] md:max-h-none"
            />
          </div>
        </div>
      </header>

      {/* Value Proposition Section */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full opacity-30 w-1/2 h-1/2 mx-auto"></div>
        
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-20 relative z-10">
          {/* Headline and sub-line */}
          <div className="text-center space-y-4 md:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loved by builders. Empowering CISOs.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
              Like the explorers who uncovered the secrets of the cosmos, Cylestio reveals the hidden secrets of AI workflows.
            </p>
          </div>

          {/* Cards - Improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {/* Card 1 */}
            <div className="cosmic-card rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all border border-blue-500/10 hover:border-blue-500/20 h-full flex flex-col transform hover:-translate-y-1 duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex justify-center mb-5 md:mb-6">
                  <img src="/images/cards_icons/card_icon_1_opt.png" alt="Monitoring Icon" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white group-hover:text-blue-200 transition-colors">End-to-End Monitoring</h3>
                <p className="text-sm md:text-base text-blue-100/80 leading-relaxed">
                  Track every agent: tool usage, LLM calls, data flows and user actions - in real time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="cosmic-card rounded-2xl p-6 md:p-8 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all border border-purple-500/10 hover:border-purple-500/20 h-full flex flex-col transform hover:-translate-y-1 duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex justify-center mb-5 md:mb-6">
                  <img src="/images/cards_icons/card_icon_2_opt.png" alt="DevSecOps Icon" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white group-hover:text-purple-200 transition-colors">DevSecOps for AI Agents</h3>
                <p className="text-sm md:text-base text-blue-100/80 leading-relaxed">
                  Security & compliance baked into every stage of your AI lifecycle - from Development to Production.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="cosmic-card rounded-2xl p-6 md:p-8 shadow-lg shadow-blue-500/5 hover:shadow-blue-500/20 transition-all border border-blue-500/10 hover:border-blue-500/20 h-full flex flex-col md:col-span-2 lg:col-span-1 transform hover:-translate-y-1 duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-100 group-hover:opacity-80 transition-opacity"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex justify-center mb-5 md:mb-6">
                  <img src="/images/cards_icons/card_icon_3_opt.png" alt="Open-Source Icon" className="w-16 h-16 md:w-24 md:h-24 object-contain" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white group-hover:text-blue-200 transition-colors">Open-Source & Enterprise</h3>
                <p className="text-sm md:text-base text-blue-100/80 leading-relaxed">
                  <span className="font-bold">Start free & local</span>. Unlock advanced threat analytics and fleet-wide insights as you scale - meeting <span className="font-bold">SOC2, GDPR, HIPAA</span> and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Product Features */}
      <section id="quick-start" className="relative container mx-auto px-4 sm:px-6 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          
          <div className="space-y-2 sm:space-y-4 mb-8 sm:mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Quick Start</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80 mx-auto">
              Up and running in minutes - no signup, no config.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            {/* Vertical Feature Tabs */}
            <div className="relative">
              <div className="flex flex-row md:flex-col space-y-0 md:space-y-3 space-x-3 md:space-x-0 overflow-x-auto pb-2 md:pb-0 md:min-w-[240px] snap-x md:snap-none hide-scrollbar"
                   ref={(el) => {
                     // Simple inline check for overflow (dynamically applied)
                     if (el) {
                       const hasOverflow = el.scrollWidth > el.clientWidth;
                       const indicator = el.parentElement?.querySelector('.scroll-indicator');
                       if (indicator) {
                         indicator.classList.toggle('hidden', !hasOverflow);
                       }
                     }
                   }}>
                <button
                  onClick={() => setActiveFeature('instrument')}
                  className={`px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg text-left transition-all duration-300 flex items-center flex-shrink-0 snap-start ${
                    activeFeature === 'instrument'
                      ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                      : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                  }`}
                >
                  <div className="w-5 md:w-6 flex items-center justify-center">
                    <img 
                      src="/images/pypi-logo.png" 
                      alt="PyPI" 
                      className={`w-4 h-4 md:w-5 md:h-5 ${activeFeature === 'instrument' ? '' : 'opacity-70'}`}
                    />
                  </div>
                  <span className="ml-2 md:ml-3 text-sm sm:text-base">Instrument</span>
                </button>
                
                <button
                  onClick={() => setActiveFeature('digest')}
                  className={`px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg text-left transition-all duration-300 flex items-center flex-shrink-0 snap-start ${
                    activeFeature === 'digest'
                      ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                      : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                  }`}
                >
                  <div className="w-5 md:w-6 flex items-center justify-center">
                    <img 
                      src="/images/pypi-logo.png" 
                      alt="PyPI" 
                      className={`w-4 h-4 md:w-5 md:h-5 ${activeFeature === 'digest' ? '' : 'opacity-70'}`}
                    />
                  </div>
                  <span className="ml-2 md:ml-3 text-sm sm:text-base">Ingest</span>
                </button>
                
                <button
                  onClick={() => setActiveFeature('visualize')}
                  className={`px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-lg text-left transition-all duration-300 flex items-center flex-shrink-0 snap-start ${
                    activeFeature === 'visualize'
                      ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                      : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                  }`}
                >
                  <div className="w-5 md:w-6 flex items-center justify-center">
                    <img 
                      src="/images/npm.png" 
                      alt="npm" 
                      className={`w-auto h-2.5 ${activeFeature === 'visualize' ? '' : 'opacity-70'}`}
                      style={{ objectFit: 'contain', display: 'block' }}
                    />
                  </div>
                  <span className="ml-2 md:ml-3 text-sm sm:text-base">Visualize</span>
                </button>
              </div>
              
              {/* Improved horizontal scroll indicator - only on mobile */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden scroll-indicator hidden">
                <div className="bg-gradient-to-l from-[#020817] to-transparent w-12 h-12 flex items-center justify-end pr-1">
                  <div className="bg-blue-500/10 rounded-full w-8 h-8 flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-blue-400 animate-pulse" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Content */}
            <div className="flex-1">
              <div className="cosmic-card rounded-xl p-4 md:p-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {activeFeature === 'instrument' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-semibold">Instrument</h3>
                      <div className="bg-blue-500/20 text-xs font-medium text-blue-300 py-1 px-2 rounded flex items-center">
                        <span className="mr-1">PyPI</span>
                        <img 
                          src="/images/pypi-logo.png" 
                          alt="PyPI" 
                          className="w-3 h-3"
                        />
                      </div>
                    </div>
                    
                    <p className="text-sm md:text-base text-blue-100/70 mb-4 md:mb-8">
                      Deploy Cylestio's OpenTelemetry-compliant Python SDK
                    </p>
                    
                    {/* Installation Steps */}
                    <div className="flex flex-row items-center gap-3 mb-4 md:mb-6">
                      {Object.entries(installationSteps).map(([key, { title }]) => (
                        <button
                          key={key}
                          onClick={() => setQuickStartActiveTab(key as 'install' | 'import')}
                          className={`h-10 px-4 text-xs sm:text-sm rounded-lg transition-all duration-300 flex items-center justify-center w-[120px] sm:w-[140px] ${
                            quickStartActiveTab === key
                              ? 'bg-blue-500/20 text-blue-300 shadow-lg shadow-blue-500/10'
                              : 'bg-blue-500/5 text-blue-400/70 hover:bg-blue-500/10'
                          }`}
                        >
                          {title}
                        </button>
                      ))}
                    </div>
                    
                    <div className="bg-[#070B14] rounded-lg p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm">
                      <code className="text-blue-300 block whitespace-pre">
                        {installationSteps[quickStartActiveTab].command.split('\n').map((line, i) => (
                          <div key={i} className="flex items-start">
                            {line.trim() && (
                              <>
                                {quickStartActiveTab === 'install' ? (
                                  <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">
                                    {installationSteps[quickStartActiveTab].icon}
                                  </span>
                                ) : (
                                  <span className="text-blue-500/40 mr-3 mt-[2px] w-[20px] text-right flex-shrink-0">
                                    {i + 1}
                                  </span>
                                )}
                                {quickStartActiveTab === 'import' ? (
                                  <span className="inline-block">
                                    {line.startsWith('#') ? (
                                      <span className="text-blue-400/60">{line.trim()}</span>
                                    ) : line.includes('import') ? (
                                      <span>
                                        <span className="text-purple-400">import</span>
                                        <span> cylestio_monitor</span>
                                      </span>
                                    ) : line.includes('start_monitoring') ? (
                                      <span>
                                        <span className="text-blue-300">cylestio_monitor</span>
                                        <span className="text-blue-400">.</span>
                                        <span className="text-green-400">start_monitoring</span>
                                        <span className="text-blue-400">(</span>
                                        <span className="text-yellow-400">agent_id</span>
                                        <span className="text-blue-400">=</span>
                                        <span className="text-green-300">"my-agent"</span>
                                        <span className="text-blue-400">)</span>
                                      </span>
                                    ) : line.includes('stop_monitoring') ? (
                                      <span>
                                        <span className="text-blue-300">cylestio_monitor</span>
                                        <span className="text-blue-400">.</span>
                                        <span className="text-green-400">stop_monitoring</span>
                                        <span className="text-blue-400">()</span>
                                      </span>
                                    ) : (
                                      <span>{line.trim()}</span>
                                    )}
                                  </span>
                                ) : (
                                  <span>{line.trim()}</span>
                                )}
                              </>
                            )}
                            {!line.trim() && <div className="h-4" />}
                          </div>
                        ))}
                      </code>
                    </div>
                  </div>
                )}

                {activeFeature === 'digest' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-semibold">Ingest</h3>
                      <div className="bg-blue-500/20 text-xs font-medium text-blue-300 py-1 px-2 rounded flex items-center">
                        <span className="mr-1">PyPI</span>
                        <img 
                          src="/images/pypi-logo.png" 
                          alt="PyPI" 
                          className="w-3 h-3"
                        />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-blue-100/70 mb-4 md:mb-8">
                      Spin up the local event-store & API
                    </p>
                    
                    <div className="bg-[#070B14] rounded-lg p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm">
                      <code className="text-blue-300 block">
                        <div className="flex items-start">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>pip install cylestio-local-server</span>
                        </div>
                        <div className="flex items-start mt-3">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>cylestio-server</span>
                        </div>
                      </code>
                      <div className="mt-4 text-xs sm:text-sm text-blue-400/60">
                        API server + Swagger UI at http://localhost:8000/docs
                      </div>
                    </div>
                  </div>
                )}

                {activeFeature === 'visualize' && (
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-4 md:mb-6">
                      <h3 className="text-lg md:text-xl font-semibold">Visualize</h3>
                      <div className="bg-blue-500/20 text-xs font-medium text-blue-300 py-1 px-2 rounded flex items-center">
                        <span className="mr-1">npm</span>
                        <img 
                          src="/images/npm.png" 
                          alt="npm" 
                          className={`w-auto h-2.5 ${activeFeature === 'visualize' ? '' : 'opacity-70'}`}
                          style={{ objectFit: 'contain', display: 'block' }}
                        />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-blue-100/70 mb-4 md:mb-8">
                    Explore & Investigate in Cylestio's Local UI
                    </p>
                    
                    <div className="bg-[#070B14] rounded-lg p-4 sm:p-5 overflow-x-auto text-xs sm:text-sm">
                      <code className="text-blue-300 block">
                        <div className="flex items-start">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>git clone https://github.com/cylestio/cylestio-ui.git</span>
                        </div>
                        <div className="flex items-start mt-3">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>cd cylestio-ui</span>
                        </div>
                        <div className="flex items-start mt-3">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>npm install</span>
                        </div>
                        <div className="flex items-start mt-3">
                          <span className="text-blue-400 opacity-70 mr-3 mt-[2px] w-[20px] text-center flex-shrink-0">›_</span>
                          <span>npm run dev</span>
                        </div>
                      </code>
                      <div className="mt-4 text-xs sm:text-sm text-blue-400/60">
                        Next.js dev server on http://localhost:3000
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Section heading with refined styling */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 lg:mb-24 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 tracking-tight">
            Join the Cylestio Community
          </h2>
          
          {/* Primary action buttons with enhanced styling - centered */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-5 mb-16 md:mb-32 w-full max-w-3xl mx-auto">
            <a 
              href="https://github.com/orgs/cylestio/discussions" 
              className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-blue-600 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition duration-300 hover:bg-blue-700 flex-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                <Github className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              </div>
              <span>GitHub Discussions</span>
            </a>
            <a 
              href="https://join.slack.com/t/cylestio-community/shared_invite/zt-35dopqtrk-SnBn_2P0TusyA40d1T5yLg" 
              className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-purple-600 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition duration-300 hover:bg-purple-700 flex-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-400 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
                  </svg>
                </div>
              </div>
              <span>Slack Channel</span>
            </a>
            <a 
              href="https://discord.gg/xuvaeXfg" 
              className="group flex items-center justify-center space-x-2 sm:space-x-3 bg-indigo-600 px-4 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium transition duration-300 hover:bg-indigo-700 flex-1"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-400 opacity-50 blur-xl group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 127.14 96.36" fill="currentColor">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                  </svg>
                </div>
              </div>
              <span>Discord Server</span>
            </a>
          </div>
          
          {/* Community highlights with refined card design - centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 w-full max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-500/20 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-blue-500/40 group/card relative overflow-hidden">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-6 md:mb-8 relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover/card:opacity-70 transition-all duration-300"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center relative">
                  <Users className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                </div>
              </div>
              
              {/* Content with improved typography */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center text-blue-100">Join the Discussion</h3>
              <p className="text-blue-200/70 text-center text-sm md:text-base leading-relaxed">Connect with developers, report bugs and request new features</p>
            </div>
            
            <div className="bg-gradient-to-b from-purple-900/30 to-purple-900/10 border border-purple-500/20 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-purple-500/40 group/card relative overflow-hidden">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-6 md:mb-8 relative">
                <div className="absolute inset-0 bg-purple-400/20 blur-xl opacity-0 group-hover/card:opacity-70 transition-all duration-300"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-900/50 rounded-2xl flex items-center justify-center relative">
                  <Code className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />
                </div>
              </div>
              
              {/* Content with improved typography */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center text-blue-100">Contribute</h3>
              <p className="text-blue-200/70 text-center text-sm md:text-base leading-relaxed">Help improve Cylestio by contributing to our open-source repositories</p>
            </div>
            
            <div className="bg-gradient-to-b from-blue-900/30 to-blue-900/10 border border-blue-500/20 rounded-2xl p-6 md:p-10 transition-all duration-300 hover:border-blue-500/40 group/card relative overflow-hidden">
              {/* Glowing effect on hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon with enhanced styling */}
              <div className="flex justify-center mb-6 md:mb-8 relative">
                <div className="absolute inset-0 bg-blue-400/20 blur-xl opacity-0 group-hover/card:opacity-70 transition-all duration-300"></div>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-900/50 rounded-2xl flex items-center justify-center relative">
                  <HelpCircle className="w-7 h-7 md:w-8 md:h-8 text-blue-400" />
                </div>
              </div>
              
              {/* Content with improved typography */}
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center text-blue-100">Get Support</h3>
              <p className="text-blue-200/70 text-center text-sm md:text-base leading-relaxed">Find help and resources from our community and core team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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

        /* Brush underline effect for "open-source" text - reduced opacity to 60% */
        .open-source-text {
          font-weight: bold;
          position: relative;
          display: inline-block;
          color: inherit; /* Use inherited color instead of blue */
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
          opacity: 0.6;
          transform: rotate(-1deg);
          filter: blur(1px);
          background-image: linear-gradient(90deg, 
            rgba(139, 92, 246, 0.2) 0%, 
            rgba(139, 92, 246, 0.6) 30%, 
            rgba(139, 92, 246, 0.6) 50%, 
            rgba(139, 92, 246, 0.6) 70%, 
            rgba(139, 92, 246, 0.2) 100%
          );
          transition: all 0.3s ease;
        }
        
        .open-source-text:hover::after {
          height: 8px;
          opacity: 0.6;
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