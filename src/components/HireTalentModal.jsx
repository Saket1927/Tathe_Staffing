import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Building2, User, Mail, Phone, Briefcase } from 'lucide-react';

export default function HireTalentModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    service: initialService || 'Professional Staffing',
    headcount: '1-5 positions',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) return;
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
            <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)]">Requisition Received!</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Thank you, <strong className="text-[var(--text-primary)]">{formData.contactPerson || formData.companyName}</strong>. A dedicated TATHE enterprise talent consultant will connect with you within 2 business hours.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="px-6 py-2.5 text-xs font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] rounded-xl"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-[var(--accent-primary)] uppercase tracking-wider">
                ENTERPRISE HIRING PORTAL
              </span>
              <h3 className="text-2xl font-bold font-heading text-[var(--text-primary)] mt-1">
                Hire Talent With TATHE
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Scale your workforce rapidly with verified, compliant talent across India.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                  Company / Organization Name *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Industries Ltd."
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Work Phone / Mobile *
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Official Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="hr@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                    Staffing Engagement
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option>Professional Staffing</option>
                    <option>Outsourcing Services</option>
                    <option>Contract Staffing</option>
                    <option>Third-Party Payroll</option>
                    <option>Hire Train Deploy (HTD)</option>
                    <option>Employee Lifecycle Management</option>
                    <option>Sourcing & Recruitment</option>
                    <option>Apprenticeship (NAPS / NATS / WILP)</option>
                    <option>HR Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--text-secondary)] mb-1">
                  Required Headcount & Role Details
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Need 25 CNC machine operators in Pune plant, starting next month..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 rounded-xl bg-[var(--background-input)] border border-[var(--border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs sm:text-sm focus:outline-none focus:border-[var(--accent-primary)]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none"
              >
                <span>Submit Hiring Requisition</span>
                <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)]" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
