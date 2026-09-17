import React from 'react';
import { ArrowRight, Users, Cpu, Leaf } from 'lucide-react';

export default function WorkforceBanner({ onOpenHireModal }) {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--background-secondary)] py-24 sm:py-32 border-y border-[var(--border)] text-[var(--text-primary)]">
      {/* Real Full-Width Photography Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/workforce-banner.jpg" 
          alt="Real Industrial Workforce" 
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 brightness-90"
        />
        {/* Theme-Adaptive Atmospheric Vignette / Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--background-secondary)] via-[var(--background-secondary)]/80 to-[var(--background-secondary)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background-secondary)] via-transparent to-[var(--background-secondary)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-xs sm:text-sm font-bold tracking-widest text-[var(--accent-primary)] uppercase mb-6">
          <span>THE TATHE COMMITMENT</span>
        </div>

        {/* Large Bold Headline */}
        <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Stronger Businesses. <br />
          <span className="text-[var(--accent-primary)]">Brighter Futures.</span>
        </h2>

        <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
          Connecting India’s most ambitious enterprises with skilled, disciplined, and compliant workforce talent.
        </p>

        {/* 3 Value Badges with Subtle Glow Accents */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-14 pt-10 border-t border-[var(--border)]">
          
          {/* Badge 1: People First */}
          <div className="p-6 rounded-2xl bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] backdrop-blur-md border border-[var(--border)] transition-all duration-300 text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--button-primary-text)] transition-colors flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 stroke-[1.75]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">People First</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">Dignity, worker welfare, on-time salary disbursements</p>
          </div>

          {/* Badge 2: Technology Driven */}
          <div className="p-6 rounded-2xl bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] backdrop-blur-md border border-[var(--border)] transition-all duration-300 text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[var(--icon-bg)] text-[var(--accent-secondary)] border border-[var(--icon-border)] group-hover:bg-[var(--accent-secondary)] group-hover:text-white transition-colors flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-7 h-7 stroke-[1.75]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">Technology Driven</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">AI sourcing engines, digital onboarding & real-time ATS</p>
          </div>

          {/* Badge 3: Sustainable Growth */}
          <div className="p-6 rounded-2xl bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] backdrop-blur-md border border-[var(--border)] transition-all duration-300 text-center group">
            <div className="w-14 h-14 rounded-2xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--button-primary-text)] transition-colors flex items-center justify-center mx-auto mb-4">
              <Leaf className="w-7 h-7 stroke-[1.75]" />
            </div>
            <h3 className="text-lg font-bold text-[var(--text-primary)] font-heading">Sustainable Growth</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">100% labor law compliance, ESIC, PF & risk mitigation</p>
          </div>

        </div>

        {/* Direct Action Trigger */}
        <div className="mt-12">
          <button
            onClick={onOpenHireModal}
            className="px-8 py-4 text-base font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-2xl shadow-lg transition-all inline-flex items-center gap-3 focus:outline-none"
          >
            <span>Talk to Our Workforce Specialists</span>
            <ArrowRight className="w-5 h-5 text-[var(--button-primary-text)]" />
          </button>
        </div>

      </div>
    </section>
  );
}
