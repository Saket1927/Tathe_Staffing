import React from 'react';
import { ShieldCheck, CheckCircle, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { siteConfig, valuesData, whyChooseUs } from '../data/contentData';

export default function AboutSection({ onOpenHireModal }) {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[var(--background-primary)] text-[var(--text-primary)] border-b border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12 space-y-20">
        
        {/* Main About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Statement */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] text-xs sm:text-sm font-bold uppercase tracking-widest border border-[var(--pill-border)]">
              <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>ABOUT TATHE STAFFING</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-[1.12]">
              India’s Premier AI-Powered Workforce & Skilling Partner.
            </h2>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg xl:text-xl leading-relaxed font-normal">
              TATHE Staffing (an initiative of <strong className="text-[var(--text-primary)] font-bold">{siteConfig.legalEntity}</strong>) leverages extensive domain expertise and cutting-edge digital platforms to enhance client productivity through tailored outsourced solutions.
            </p>

            <p className="text-[var(--text-muted)] text-sm sm:text-base leading-relaxed">
              We offer a comprehensive range of technology-enabled staffing and managed outsourcing services across critical sectors including customer care, after-sales service, back-office operations, telecom, manufacturing, facilities management, HR, BFSI, logistics, and retail.
            </p>

            {/* Core Metrics Highlight */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] shadow-sm">
                <div className="font-heading font-extrabold text-3xl text-[var(--text-primary)]">200K+</div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] font-semibold mt-1">Verified Active Candidates</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] shadow-sm">
                <div className="font-heading font-extrabold text-3xl text-[var(--accent-primary)]">500+</div>
                <div className="text-xs sm:text-sm text-[var(--text-muted)] font-semibold mt-1">Accredited Skilling Centres</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenHireModal}
                className="px-8 py-4 text-base font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-2xl shadow-lg transition-all flex items-center gap-3 focus:outline-none"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 text-[var(--button-primary-text)]" />
              </button>
            </div>
          </div>

          {/* Right Real Workplace Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-[var(--border)] group bg-[var(--background-card)]">
              <img 
                src="/images/corporate-about.jpg" 
                alt="TATHE Staffing Executive Operations & Teams" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-primary)]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Corporate Governance
                </div>
                <div className="text-lg sm:text-xl font-bold mt-0.5 drop-shadow-md">
                  {siteConfig.legalEntity}
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Headquartered in Kalyan (W), Maharashtra • Active Pan-India Operations
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Operational Excellence / Why Choose TATHE */}
        <div className="pt-8 text-left">
          <div className="mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-[var(--accent-primary)] uppercase tracking-wider">
              OPERATIONAL RIGOR
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-2">
              Choose TATHE Staffing For...
            </h3>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="w-[78vw] max-w-[320px] sm:w-auto shrink-0 sm:shrink snap-start p-6 rounded-2xl bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-sm transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5 text-[var(--text-primary)] font-bold text-base sm:text-lg">
                    <CheckCircle className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Values */}
        <div className="pt-4 text-left border-t border-[var(--border)]">
          <div className="mb-8 pt-8">
            <span className="text-xs sm:text-sm font-extrabold text-[var(--accent-primary)] uppercase tracking-wider">
              GUIDING PRINCIPLES
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-2">
              Our Organizational Values
            </h3>
          </div>

          <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-3 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            {valuesData.map((val, idx) => (
              <div key={idx} className="w-[72vw] max-w-[280px] sm:w-auto shrink-0 sm:shrink snap-start p-6 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-sm transition-all">
                <div className="w-12 h-12 rounded-xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] flex items-center justify-center mb-4">
                  <Compass className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[var(--text-primary)] font-heading mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
