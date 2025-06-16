'use client';

import React, { useState } from 'react';
import { Mail, User, Building, Briefcase, ChevronRight } from 'lucide-react';

// NOTE: This is a frontend-only form. To make it functional, you'll need to:
// 1. Implement a CAPTCHA service (e.g., hCaptcha, reCAPTCHA) to prevent spam.
// 2. Create an API endpoint (e.g., in Next.js API routes) to handle form submission.
// 3. Use a service like Resend, SendGrid, or your own backend to process the data.

export default function EarlyAccessForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    company: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    console.log('Form data submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demonstration, we'll randomly succeed or fail.
    // Replace this with your actual API call.
    if (Math.random() > 0.1) { // 90% success rate
      setStatus('success');
    } else {
      setStatus('error');
    }
  };
  
  if (status === 'success') {
    return (
      <div className="text-center p-4 border border-brand-steel-600 bg-brand-steel-800/50 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Thank You!</h3>
        <p className="text-brand-steel-300 mt-1">Your request has been received. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <div className="h-full w-full p-6 space-y-4 border rounded-lg border-brand-steel-700 bg-brand-steel-800/30 backdrop-blur-lg">
      <div className="text-center">
          <h3 className="text-xl font-bold text-white">Don't get left behind.</h3>
          <p className="mt-1 text-sm text-brand-steel-300">Spots are limited. Request your early access.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel-400" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-white bg-brand-steel-900/50 border border-brand-steel-600 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-white bg-brand-steel-900/50 border border-brand-steel-600 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel-400" />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-white bg-brand-steel-900/50 border border-brand-steel-600 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel-400" />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 text-white bg-brand-steel-900/50 border border-brand-steel-600 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
            />
          </div>
        </div>
        {/* CAPTCHA should be placed here */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-brand-blue hover:bg-brand-blue/90 border-brand-blue group disabled:bg-brand-steel-600 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? 'Sending...' : 'Get an Invite'}
          <ChevronRight className="w-4 h-4 ml-2 -ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
        {status === 'error' && (
          <p className="text-sm text-red-400 text-center">
            Something went wrong. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
} 