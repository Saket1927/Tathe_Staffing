import React from 'react';
import { ArrowRight, User, Users, GraduationCap, MapPin } from 'lucide-react';

export default function Hero({ onOpenHireModal, onOpenJobModal }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[var(--background-primary)] text-[var(--text-primary)] pt-6 sm:pt-10 pb-12 sm:pb-16 border-b border-[var(--border)]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-10 right-1/4 w-[650px] h-[650px] bg-[var(--accent-secondary)]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[var(--accent-primary)]/10 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Main Responsive Container (Max Width 1520px matching Reference) */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Top Split: Left Content + Right Worker Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[440px] xl:min-h-[470px]">
          
          {/* Left Column: Eyebrow, Main Headline, Subheadline, Dual CTAs, Tickers */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-7 text-left z-10">
            
            {/* Eyebrow Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[11px] sm:text-xs font-semibold tracking-wider text-[var(--accent-primary)] uppercase shadow-sm">
              <span 
                className="w-2 h-2 rounded-full shadow-sm"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--accent-primary)'
                }}
              ></span>
              <span>PEOPLE. PROGRESS. PROSPERITY.</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl xl:text-[68px] font-black tracking-tight text-[var(--text-primary)] leading-[1.06]">
              Powering People. <br />
              <span className="text-[var(--accent-primary)] relative inline-block">
                Building Possibilities.
                {/* Curved swoosh underline matching reference */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-3.5 left-0 w-full h-3.5 sm:h-4.5 text-[var(--accent-primary)]" 
                  viewBox="0 0 320 18" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M 4 12 C 90 2, 230 2, 316 11" 
                    stroke="currentColor" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>

            {/* Subheadline Text with exact line breaks */}
            <p className="text-base sm:text-lg xl:text-[19px] text-[var(--text-secondary)] max-w-xl leading-relaxed font-normal">
              From workforce solutions to skilling, we connect <br className="hidden sm:inline" />
              businesses with talent that drives progress.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              {/* Primary CTA: For Businesses */}
              <button
                onClick={onOpenHireModal}
                className="px-7 py-3.5 text-base sm:text-[17px] font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group focus:outline-none"
              >
                <span>For Businesses</span>
                <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)] stroke-[2.5] group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA: For Job Seekers */}
              <button
                onClick={onOpenJobModal}
                className="px-6 py-3.5 text-base sm:text-[17px] font-semibold text-[var(--button-secondary-text)] hover:text-[var(--accent-primary)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] hover:border-[var(--accent-primary)] rounded-xl transition-all duration-200 flex items-center justify-center gap-2.5 group focus:outline-none"
              >
                <User className="w-5 h-5 text-[var(--icon)]" />
                <span>For Job Seekers</span>
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* 3 Colored Dot Feature Tickers */}
            <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-[var(--text-secondary)]">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] shrink-0"></span>
                <span>100% Statutory Compliance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shrink-0"></span>
                <span>AI-Powered Velocity</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-tertiary)] shrink-0"></span>
                <span>Pan-India Network</span>
              </div>
            </div>

          </div>

          {/* Right Column: Real Worker Photograph with Ambient Factory Setting & Script Accent */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[660px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[var(--background-card)] border border-[var(--border)]">
              <img 
                src="/images/hero-worker-tablet.png" 
                alt="TATHE Technical Professional" 
                className="w-full h-auto object-cover object-center"
              />
              {/* Soft gradient dissolve on left edge smoothly melting into background */}
              <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[var(--background-primary)] via-[var(--background-primary)]/60 to-transparent pointer-events-none hidden sm:block"></div>
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--background-primary)] via-[var(--background-primary)]/40 to-transparent pointer-events-none"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM OVERLAPPING STATS PANEL: 3 Metrics with Dark Glassmorphism */}
        <div className="mt-8 sm:mt-12 relative z-20">
          <div className="rounded-2xl sm:rounded-3xl bg-[var(--background-card-glass)] backdrop-blur-md border border-[var(--border)] p-6 sm:p-7 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--border)] gap-6 md:gap-0">
              
              {/* Metric 1: 200K+ Verified Candidates */}
              <div className="flex items-center gap-5 md:px-6 lg:px-8">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[var(--icon-bg)] border border-[var(--icon-border)] flex items-center justify-center shrink-0 shadow-inner p-3.5">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--icon)] stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-none">
                    200K+
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1">
                    Verified Candidates
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 leading-snug">
                    Active internal candidate repository across India
                  </p>
                </div>
              </div>

              {/* Metric 2: 500+ Skilling Centres */}
              <div className="flex items-center gap-5 pt-6 md:pt-0 md:px-6 lg:px-8">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[var(--icon-bg)] border border-[var(--icon-border)] flex items-center justify-center shrink-0 shadow-inner p-3.5">
                  <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--icon)] stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-none">
                    500+
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1">
                    Skilling Centres
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 leading-snug">
                    Accredited pan-India training partner network
                  </p>
                </div>
              </div>

              {/* Metric 3: 9+ Industry Sectors */}
              <div className="flex items-center gap-5 pt-6 md:pt-0 md:px-6 lg:px-8">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[var(--icon-bg)] border border-[var(--icon-border)] flex items-center justify-center shrink-0 shadow-inner p-3.5">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--icon)] stroke-[1.8]" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-3xl sm:text-4xl font-black text-[var(--text-primary)] tracking-tight leading-none">
                    9+
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] mt-1">
                    Industry Sectors
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] mt-0.5 leading-snug">
                    Specialized domain deployment & statutory compliance
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
