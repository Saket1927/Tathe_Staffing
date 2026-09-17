import React, { useState } from 'react';
import { GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { apprenticeshipData, skillDevelopmentData } from '../data/contentData';

export default function ApprenticeshipSection({ onOpenHireModal, onOpenJobModal }) {
  const [activeProg, setActiveProg] = useState('naps');

  const selectedProgram = apprenticeshipData.programs.find(p => p.id === activeProg) || apprenticeshipData.programs[0];

  return (
    <section id="apprenticeship" className="py-24 sm:py-32 bg-[var(--background-primary)] text-[var(--text-primary)] border-b border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] text-xs sm:text-sm font-bold uppercase tracking-widest border border-[var(--pill-border)] mb-3">
            <GraduationCap className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>NATIONAL SKILLING INITIATIVES</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            Apprenticeships & Skilling Programs
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-xl mt-3 max-w-3xl font-normal leading-relaxed">
            Bridging formal education with real shop-floor standards under the Apprentices Act, 1961. TATHE Staffing acts as your accredited Third-Party Aggregator (TPA).
          </p>
        </div>

        {/* Program Cards Tab Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {apprenticeshipData.programs.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveProg(prog.id)}
              className={`p-7 rounded-3xl border text-left transition-all duration-200 flex flex-col justify-between ${
                activeProg === prog.id
                  ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] border-[var(--button-primary)] shadow-xl scale-[1.01]'
                  : 'bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] text-[var(--text-primary)] border-[var(--border)] hover:border-[var(--accent-primary)]'
              }`}
            >
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3.5 ${
                  activeProg === prog.id ? 'bg-[var(--button-primary-text)] text-[var(--button-primary)]' : 'bg-[var(--background-secondary)] text-[var(--text-muted)] border border-[var(--border)]'
                }`}>
                  {prog.badge}
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl leading-snug">
                  {prog.name.split('(')[0]}
                </h3>
                <p className={`text-xs sm:text-sm mt-2 leading-relaxed ${activeProg === prog.id ? 'opacity-90' : 'text-[var(--text-muted)]'}`}>
                  {prog.launched}
                </p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-bold">
                <span>View Framework</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          ))}
        </div>

        {/* Selected Program Showcase */}
        <div className="bg-[var(--background-card)] rounded-3xl p-8 sm:p-12 border border-[var(--border)] shadow-sm mb-16 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--accent-primary)]">
                  Official Apprenticeship Framework
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-[var(--text-primary)] mt-1.5">
                  {selectedProgram.name}
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {selectedProgram.launched}
                </p>
              </div>

              {/* Employer Benefits */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Benefits for Employers
                </h4>
                <div className="space-y-2.5">
                  {selectedProgram.employerBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trainee Benefits */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                  Benefits for Trainees
                </h4>
                <div className="space-y-2.5">
                  {selectedProgram.traineeBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-5 h-5 text-[var(--accent-secondary)] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TPA Role Callout */}
              <div className="p-5 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] shadow-sm text-sm text-[var(--text-primary)] leading-relaxed">
                <strong className="text-[var(--text-primary)] block font-bold mb-1">Role of TATHE Staffing as TPA:</strong>
                {selectedProgram.tpaRole}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onOpenHireModal(`Apprenticeship: ${selectedProgram.name}`)}
                  className="px-7 py-3.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-md transition-colors focus:outline-none"
                >
                  Onboard Apprentices for Your Company
                </button>
                <button
                  onClick={onOpenJobModal}
                  className="px-6 py-3.5 text-sm font-semibold text-[var(--button-secondary-text)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] rounded-xl transition-colors focus:outline-none"
                >
                  Apply as an Apprentice
                </button>
              </div>
            </div>

            {/* Right Real Visual */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/5] border border-[var(--border)] shadow-xl bg-[var(--background-secondary)]">
              <img 
                src="/images/skilling-training.jpg" 
                alt="Technical Apprenticeship Training"
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-primary)]/85 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <div className="font-bold text-xl drop-shadow-md">Practical Hands-On Training</div>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Bridging theoretical academic education with actual workshop machinery and shop-floor standards.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Skill Development Nationwide Infrastructure */}
        <div id="skill-development" className="bg-[var(--background-card)] rounded-3xl p-8 sm:p-14 text-[var(--text-primary)] border border-[var(--border)] shadow-2xl text-left">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] text-[var(--accent-primary)] text-xs font-bold uppercase tracking-widest border border-[var(--pill-border)]">
              <span>Nationwide Infrastructure</span>
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)]">
              Skill Development Across 500+ Centres
            </h3>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              {skillDevelopmentData.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillDevelopmentData.pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors">
                <div className="text-[var(--accent-primary)] text-xs font-bold mb-1.5">PILLAR 0{idx + 1}</div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{pillar.title}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
