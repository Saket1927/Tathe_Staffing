import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { siteConfig } from '../data/contentData';

export default function ContactSection({ onOpenHireModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Staffing Solution',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[var(--background-primary)] text-[var(--text-primary)] relative border-b border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12 space-y-16">
        
        {/* Business Conversion Banner */}
        <div 
          onClick={onOpenHireModal}
          className="cursor-pointer bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-2xl transition-all duration-300 group"
        >
          <div className="text-left">
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
              Ready to find the right talent?
            </h3>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] mt-2 font-normal">
              Let's create opportunities together. People. Progress. Prosperity.
            </p>
          </div>

          <div className="w-16 h-16 rounded-full bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-lg flex items-center justify-center group-hover:scale-105 transition-all duration-200 self-end sm:self-center shrink-0">
            <ArrowRight className="w-7 h-7 stroke-[2.25]" />
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT ENGAGEMENT</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
                Your Growth Is Important To Us.
              </h2>
              <p className="text-[var(--text-muted)] text-sm sm:text-base mt-3 leading-relaxed font-normal">
                Connect now for industry-specific staffing, apprenticeship execution under NAPS/NATS, third-party payroll, or candidate inquiries.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Phone */}
              <div className="p-5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] flex items-start gap-4 hover:border-[var(--accent-primary)] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Direct Phone Support</div>
                  <div className="text-base font-bold text-[var(--text-primary)] mt-1 space-x-2">
                    <a href={`tel:${siteConfig.contact.phone1}`} className="hover:text-[var(--accent-primary)] transition-colors">
                      {siteConfig.contact.phone1}
                    </a>
                    <span>•</span>
                    <a href={`tel:${siteConfig.contact.phone2}`} className="hover:text-[var(--accent-primary)] transition-colors">
                      {siteConfig.contact.phone2}
                    </a>
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1">
                    WhatsApp: <a href={`https://api.whatsapp.com/send/?phone=919653659137`} target="_blank" rel="noreferrer" className="text-[var(--accent-primary)] hover:underline font-semibold">{siteConfig.contact.whatsapp}</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] flex items-start gap-4 hover:border-[var(--accent-primary)] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--icon-bg)] text-[var(--accent-secondary)] border border-[var(--icon-border)] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Official Email</div>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-base font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors mt-1 block">
                    {siteConfig.contact.email}
                  </a>
                  <div className="text-xs text-[var(--text-muted)] mt-1">Inquiry turnaround within 2 business hours</div>
                </div>
              </div>

              {/* Address */}
              <div className="p-5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] flex items-start gap-4 hover:border-[var(--accent-primary)] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-medium uppercase tracking-wider">Registered Corporate Office</div>
                  <p className="text-sm text-[var(--text-secondary)] font-medium mt-1 leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/xDEVgsZvnqd8YMZi6" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--accent-primary)] hover:underline mt-2"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[var(--background-card)] rounded-3xl p-8 sm:p-12 border border-[var(--border)] shadow-2xl">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                Send an Inquiry
              </h3>
              <p className="text-sm text-[var(--text-muted)] mb-8">
                Tell us about your organization or candidate needs and our workforce team will connect with you.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] border border-[var(--pill-border)] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[var(--text-primary)]">Thank You for Reaching Out!</h4>
                  <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
                    We have received your message. A dedicated recruitment & staffing advisor from TATHE Staffing will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 text-xs font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] rounded-xl mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">
                        Your Name <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">
                        Phone Number <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">
                        Email Address <span className="text-[var(--accent-primary)]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">
                        Requirement Type
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                      >
                        <option>Staffing Solution</option>
                        <option>Professional Staffing</option>
                        <option>Outsourcing Services</option>
                        <option>Contract Staffing</option>
                        <option>Third-Party Payroll</option>
                        <option>Hire Train Deploy (HTD)</option>
                        <option>Apprenticeship (NAPS / NATS / WILP)</option>
                        <option>Skill Development</option>
                        <option>HR Consulting</option>
                        <option>Looking for a Job</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-2">
                      Requirements / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your hiring numbers, technical requirements, or project timelines..."
                      className="w-full p-4 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
