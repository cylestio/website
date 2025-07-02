'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Shield, Eye, Lock, Sparkles, Terminal, Github, ArrowRight, Star, Orbit, Code, Server, Users, FileText, MessageSquare, BookOpen, ChevronLeft, ChevronRight, HelpCircle, Mail } from 'lucide-react';

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
      <div className="max-w-7xl relative z-10">
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

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formStartTime, setFormStartTime] = useState<number>(0);

  useEffect(() => {
    setFormStartTime(Date.now());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Bot detection checks
    const timeTaken = Date.now() - formStartTime;
    
    // Check honeypot field (should be empty)
    if (honeypot !== '') {
      setErrorMessage('Spam detection triggered. Please try again.');
      return;
    }
    
    // Check if form was filled too quickly (likely a bot)
    if (timeTaken < 2000) { // Less than 2 seconds for email only
      setErrorMessage('Please take your time filling out the form.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          'h-captcha-response': 'honeypot-verified',
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        
        // Reset form
        setFormData({
          email: '',
        });
        setHoneypot('');
        setFormStartTime(Date.now());
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };
  
  if (status === 'success') {
    return (
      <div className="text-center p-8 border border-blue-500/20 bg-blue-500/10 rounded-lg space-y-4">
        <h3 className="text-2xl font-semibold text-white sm:text-3xl">Thank You!</h3>
        <p className="text-blue-100/80 text-base sm:text-lg">We received your email and will get in touch with you soon!</p>
        <button
          onClick={() => setStatus('idle')}
          className="text-base text-blue-300 hover:text-blue-200 transition-colors sm:text-lg"
        >
          Submit another email
        </button>
      </div>
    );
  }

  return (
    <div className="w-full p-6 space-y-6 border rounded-lg border-blue-500/20 bg-blue-500/10 backdrop-blur-lg">
      <div>
          <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
          <p className="text-base text-blue-100/70">
                Interested in the full Cylestio platform or have feedback on this observability layer? 
              </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field - hidden from users */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />
        
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-100/60" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className="w-full pl-12 pr-4 py-4 text-gray-900 bg-white border border-blue-500/30 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400 text-base"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-blue-600 hover:bg-blue-700 border-blue-600 group disabled:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'submitting' ? 'Submitting...' : 'Get in Touch'}
          <ArrowRight className="w-5 h-5 ml-2 -ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
        
        {errorMessage && (
          <p className="text-sm text-red-400 text-center sm:text-base">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
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
  }, []);
  
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


      {/* Hero Section */}
      <header className="relative container mx-auto px-4 sm:px-6 pt-16 md:pt-24 pb-16 md:pb-24">
        {/* Subtle radial gradient behind 3D conveyor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] bg-[#0B1633]/65 rounded-full blur-[120px] opacity-65 pointer-events-none" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl w-full">
          {/* Left Column - Hero Content */}
          <div className="md:col-span-2 space-y-8">
          {/* Main heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Local Beta - Observability Layer Only</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Cylestio Observability
              <span className="block text-blue-200/80 text-2xl sm:text-3xl md:text-4xl mt-2 font-normal">
                Local Beta for Design Partners
              </span>
            </h1>
          </div>
          
          {/* Body text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-blue-100/90 leading-relaxed">
                This is a <strong>local beta version</strong> of Cylestio's observability layer - a subset of our full runtime security platform for AI agents.
              </p>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                Cylestio's complete platform provides comprehensive runtime security, policy enforcement, and risk mitigation for agentic AI systems. This beta focuses specifically on the <strong>observability component</strong>, giving design partners deep visibility into agent behavior for iteration and feedback.
              </p>
            </div>
            
            {/* What this includes */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">What's included in this beta:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100/90">Real-time agent activity monitoring and logging</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100/90">Fully local deployment (no data leaves your environment)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100/90">Zero-configuration CLI-based setup and installation</span>
                </li>
              </ul>
            </div>
            
            {/* Target audience */}
            <div className="border-t border-blue-500/20 pt-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">For Design Partners</h3>
              <p className="text-lg text-blue-100/80 leading-relaxed">
                This beta is designed for security and AI engineering teams who are early adopters of agentic AI systems and want to contribute to shaping our observability tools through iteration and feedback.
              </p>

            </div>
            
            {/* CTAs */}
            <div className="pt-4">
              <a href="#quick-start" className="btn btn-primary cosmic-glow text-sm sm:text-base">
                Get Started
              </a>
            </div>
          </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="md:flex md:items-start md:justify-end md:self-start">
            <div className="w-full max-w-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </header>

      {/* Product Features - MOVED UP */}
      <section id="quick-start" className="relative container mx-auto px-4 sm:px-6 py-10 md:py-20">
        <div className="max-w-4xl">
          
          <div className="space-y-2 sm:space-y-4 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Quick Start</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100/80">
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
                    
                    <p className="text-sm md:text-base text-blue-100/70 mb-4">
                      Deploy Cylestio's OpenTelemetry-compliant Python SDK
                    </p>
                    
                    <div className="mb-6">
                      <a 
                        href="https://github.com/cylestio/cylestio-monitor" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-gray-800 hover:bg-gray-700 border-gray-700 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;View SDK Repository
                      </a>
                    </div>
                    
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
                    <p className="text-sm md:text-base text-blue-100/70 mb-4">
                      Spin up the local event-store & API
                    </p>
                    
                    <div className="mb-6">
                      <a 
                        href="https://github.com/cylestio/cylestio-local-server" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-gray-800 hover:bg-gray-700 border-gray-700 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;View Server Repository
                      </a>
                    </div>
                    
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
                    <p className="text-sm md:text-base text-blue-100/70 mb-4">
                    Explore & Investigate in Cylestio's Local UI
                    </p>
                    
                    <div className="mb-6">
                      <a 
                        href="https://github.com/cylestio/cylestio-ui" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-gray-800 hover:bg-gray-700 border-gray-700 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        &nbsp;View UI Repository
                      </a>
                    </div>
                    
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

      {/* Use Cases Section */}
      <UseCasesSection />

      {/* Footer */}
      <footer className="relative py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
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



      `}</style>
    </div>
  );
} 