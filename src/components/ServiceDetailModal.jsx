import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onEnquire }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[var(--background-card)] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--border)] text-left text-[var(--text-primary)] p-6 sm:p-10 relative">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[var(--background-primary)] hover:bg-[var(--background-card-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-2 border border-[var(--pill-border)]">
            <span>Staffing Architecture</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--text-primary)]">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-1">
            {service.shortDesc}
          </p>
        </div>

        {/* Detailed Content */}
        <div className="space-y-4 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed whitespace-pre-line border-t border-[var(--border)] pt-5">
          {service.detailedContent}
        </div>

        {/* Key Features */}
        <div className="mt-6 pt-5 border-t border-[var(--border)]">
          <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
            Core Service Deliverables
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-xs sm:text-sm text-[var(--text-primary)] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              const name = service.title;
              onClose();
              onEnquire(name);
            }}
            className="w-full sm:w-auto flex-1 py-3.5 px-6 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 focus:outline-none"
          >
            <span>Request {service.title} Proposal</span>
            <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)]" />
          </button>
          <button
            onClick={onClose}
            className="w-full sm:w-auto py-3.5 px-6 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
