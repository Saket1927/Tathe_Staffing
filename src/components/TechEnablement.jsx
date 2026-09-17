import React from 'react';
import { Cpu, ShieldCheck, Database, Zap, ArrowRight } from 'lucide-react';
import { techTools } from '../data/contentData';

export default function TechEnablement({ onOpenHireModal }) {
  return (
    <section className="py-24 sm:py-32 bg-[var(--background-secondary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border)]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--accent-secondary)]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text & Tech Overview */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs sm:text-sm font-bold uppercase tracking-widest">
              <Cpu className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>DIGITALLY ENABLED PLATFORMS</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.08]">
              AI-Driven Velocity. <br />
              <span className="text-[var(--accent-primary)]">Human Precision.</span>
            </h2>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg xl:text-xl leading-relaxed font-normal">
              TATHE Staffing integrates verified enterprise tools with proprietary candidate engines to ensure lightning-fast discovery, automated screening, paperless payroll, and 100% compliance.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--background-card)] border border-[var(--border)]">
                <ShieldCheck className="w-6 h-6 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)] block font-semibold mb-0.5">100% Digital Auditing:</strong> Every associate file is verified against government compliance databases prior to deployment.
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--background-card)] border border-[var(--border)]">
                <Zap className="w-6 h-6 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-[var(--text-secondary)]">
                  <strong className="text-[var(--text-primary)] block font-semibold mb-0.5">Real-Time Recruiter Sync:</strong> Seamless communication bridges connecting client hiring managers directly with candidates.
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenHireModal("AI-Driven Staffing")}
                className="px-8 py-4 text-base font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-2xl shadow-lg transition-all flex items-center gap-3 focus:outline-none"
              >
                <span>Discover Tech-Enabled Staffing</span>
                <ArrowRight className="w-5 h-5 text-[var(--button-primary-text)]" />
              </button>
            </div>
          </div>

          {/* Right 6 Verified Tools (Mobile Swipe Carousel / Desktop 2-col Grid) */}
          <div className="lg:col-span-6">
            <div className="flex md:hidden items-center justify-between text-xs text-[var(--text-muted)] font-medium mb-3 px-1">
              <span>6 Proprietary Platforms</span>
              <span className="text-[10px] text-[var(--accent-primary)] font-semibold">Swipe →</span>
            </div>
            <div className="flex sm:grid sm:grid-cols-2 gap-4 sm:gap-5 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
              {techTools.map((tool, idx) => (
                <div 
                  key={idx}
                  className="w-[76vw] max-w-[300px] sm:w-auto shrink-0 sm:shrink snap-start p-6 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-lg hover:shadow-xl transition-all duration-200 text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--button-primary-text)] transition-colors flex items-center justify-center mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed font-normal">
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
