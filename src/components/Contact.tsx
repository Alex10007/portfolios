import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };
  
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
          
          <button
            type="submit"
            disabled={status !== 'idle'}
            className={`
              w-full py-3 rounded-lg flex items-center justify-center gap-2 text-white font-medium
              transition-all duration-200
              ${status === 'idle' ? 'bg-blue-600 hover:bg-blue-700' : 
                status === 'sending' ? 'bg-blue-400' : 'bg-green-500'}
            `}
          >
            {status === 'idle' && (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message Sent!'}
          </button>
        </form>
      </div>
    </section>
  );
}