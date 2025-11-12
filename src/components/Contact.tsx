import { useState } from 'react';

interface ContactProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  formStatus: 'idle' | 'loading' | 'success' | 'error';
  formError: string;
  onSubmit: (e: React.FormEvent) => void;
  onFormDataChange: (data: { name: string; email: string; message: string }) => void;
}

export function Contact({
  formData,
  formStatus,
  formError,
  onSubmit,
  onFormDataChange
}: ContactProps) {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    const email = 'aparna@example.com';
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20 border-t border-green-900/30">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Get In <span className="text-green-500">Touch</span>
          </h2>
          <div className="w-24 h-px bg-green-500 mb-6"></div>
          <p className="text-gray-400 text-lg">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="border border-green-900/30 p-8 md:p-12">
          <form onSubmit={onSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => onFormDataChange({ ...formData, name: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white placeholder-gray-600"
                  placeholder="Your name"
                  aria-label="Your name"
                  disabled={formStatus === 'loading'}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => onFormDataChange({ ...formData, email: e.target.value })}
                  className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white placeholder-gray-600"
                  placeholder="your@email.com"
                  aria-label="Your email"
                  disabled={formStatus === 'loading'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-3 uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => onFormDataChange({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-0 py-3 bg-transparent border-b border-green-900/30 focus:outline-none focus:border-green-500 transition-all text-white resize-none placeholder-gray-600"
                placeholder="Tell me about your project..."
                aria-label="Your message"
                disabled={formStatus === 'loading'}
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="px-12 py-4 bg-green-600 text-black font-medium hover:bg-green-500 transition-all uppercase tracking-wide text-sm disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 transition-transform"
            >
              {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {formStatus === 'success' && (
              <div aria-live="polite" className="p-4 bg-green-900/20 border border-green-600/50 rounded text-green-400 text-sm">
                ✓ Thank you for reaching out! I'll get back to you soon.
              </div>
            )}

            {formStatus === 'error' && (
              <div aria-live="polite" role="alert" className="p-4 bg-red-900/20 border border-red-600/50 rounded text-red-400 text-sm">
                ✗ {formError || 'Failed to send message. Please try again.'}
              </div>
            )}
          </form>
        </div>

        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/aparna-j-a13647297/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
            className="text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide transform hover:scale-110"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aparna0224"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
            className="text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide transform hover:scale-110"
          >
            GitHub
          </a>
          <button
            onClick={handleEmailCopy}
            title={emailCopied ? 'Email copied!' : 'Click to copy email'}
            className={`text-gray-400 hover:text-green-500 transition-colors text-sm uppercase tracking-wide cursor-pointer bg-none border-none p-0 font-inherit transform hover:scale-110 ${
              emailCopied ? 'text-green-400' : ''
            }`}
            aria-label="Copy email address"
          >
            {emailCopied ? '✓ Email Copied' : 'Email'}
          </button>
        </div>
      </div>
    </section>
  );
}
