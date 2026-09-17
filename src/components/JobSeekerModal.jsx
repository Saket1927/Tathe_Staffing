import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, User, Phone, Mail, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';
import { siteConfig } from '../data/contentData';

export default function JobSeekerModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    domain: 'Manufacturing & Engineering',
    education: 'Graduate',
    experience: 'Fresher / 0-1 Year'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[var(--background-card)] border border-[var(--border)] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl text-left text-[var(--text-primary)] relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[var(--background-primary)] hover:bg-[var(--background-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] border border-[var(--pill-border)] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Application Registered!</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Welcome to the TATHE talent network, <strong className="text-[var(--text-primary)]">{formData.name}</strong>! Your profile has been added to our verified repository. A recruiter will match your profile with current active openings.
            </p>
            <div className="pt-2">
              <a 
                href={siteConfig.contact.portalLogin} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[var(--accent-primary)] font-semibold hover:underline"
              >
                <span>Access Candidate Portal Login</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 px-6 py-2.5 text-xs font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] rounded-xl"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                CANDIDATE & JOB SEEKER PORTAL
              </span>
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mt-1">
                Find Your Next Career Opportunity
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Join 200,000+ candidates placed across leading Indian manufacturing, healthcare, tech & corporate companies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      placeholder="rahul@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Industry Domain Preference
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option>Manufacturing & Engineering</option>
                    <option>Banking, Finance & Accounts</option>
                    <option>Healthcare, Nursing & Pharma</option>
                    <option>Logistics, Warehouse & Fleet</option>
                    <option>FMCG & Sales Route</option>
                    <option>IT, Software & Helpdesk</option>
                    <option>Automotive Assembly & EV</option>
                    <option>Retail & Store Operations</option>
                    <option>NAPS / NATS Apprenticeship</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option>Fresher / 0-1 Year</option>
                    <option>1-3 Years</option>
                    <option>3-5 Years</option>
                    <option>5+ Years (Mid/Senior)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none"
              >
                <span>Register for Jobs</span>
                <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)]" />
              </button>

              <div className="pt-2 text-center">
                <a 
                  href={siteConfig.contact.portalLogin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Already registered? Access candidate portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
