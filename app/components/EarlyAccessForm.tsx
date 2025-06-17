'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Mail, ChevronRight } from 'lucide-react';

// NOTE: This is a frontend-only form. To make it functional, you'll need to:
// 1. Implement a CAPTCHA service (e.g., hCaptcha, reCAPTCHA) to prevent spam.
// 2. Create an API endpoint (e.g., in Next.js API routes) to handle form submission.
// 3. Use a service like Resend, SendGrid, or your own backend to process the data.

export default function EarlyAccessForm() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <div className="text-center p-6 border border-brand-steel-600 bg-brand-steel-800/50 rounded-lg">
        <h3 className="text-lg font-semibold text-white">Thank You!</h3>
        <p className="text-brand-steel-300 mt-2">Your early access request has been submitted successfully. We'll be in touch soon!</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-brand-blue hover:text-brand-blue/80 transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="h-full w-full p-6 space-y-4 border rounded-lg border-brand-steel-700 bg-brand-steel-800/30 backdrop-blur-lg">
      <div className="text-center">
          <h3 className="text-xl font-bold text-white">Don't get left behind.</h3>
          <p className="mt-1 text-sm text-brand-steel-300">Spots are limited. Reserve your early access.</p>
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
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-steel-400" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'submitting'}
            className="w-full pl-10 pr-4 py-3 text-gray-900 bg-white border border-brand-steel-600 rounded-md focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400"
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white transition-colors duration-300 border rounded-md shadow-lg bg-brand-blue hover:bg-brand-blue/90 border-brand-blue group disabled:bg-brand-steel-600 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'submitting' ? 'Sending...' : 'Get an Invite'}
          <ChevronRight className="w-4 h-4 ml-2 -ml-1 group-hover:translate-x-1 transition-transform" />
        </button>
        
        {errorMessage && (
          <p className="text-sm text-red-400 text-center">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
} 