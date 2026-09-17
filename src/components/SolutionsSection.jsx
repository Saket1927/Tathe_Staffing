import React, { useState } from 'react';
import { 
  Briefcase, Globe, FileCheck, CreditCard, Target, UserCheck, 
  ArrowRight, Check, ChevronRight, Sparkles 
} from 'lucide-react';
import { staffingSolutions, sourcingData, hrConsultingData } from '../data/contentData';

export default function SolutionsSection({ onOpenHireModal, onSelectService }) {
  const [activeTab, setActiveTab] = useState('staffing'); // 'staffing' | 'sourcing' | 'hr'

  const iconMap = {
    Briefcase: Briefcase,
    Globe: Globe,
    FileCheck: FileCheck,
    CreditCard: CreditCard,
    Target: Target,
    UserCheck: UserCheck,
  };

  return (
    <section id="staffing" className="py-24 sm:py-32 bg-[var(--background-primary)] text-[var(--text-primary)] relative overflow-hidden border-b border-[var(--border)]">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--accent-secondary)]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[var(--accent-primary)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Large Bold Typography */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>ENTERPRISE TALENT ARCHITECTURE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            End-to-End Workforce Solutions
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg mt-3 leading-relaxed font-normal">
            From high-end tech staffing to third-party payroll and outcome-driven managed outsourcing.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-start mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] shadow-lg shrink-0">
            <button
              onClick={() => setActiveTab('staffing')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'staffing'
                  ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Staffing Solutions (6 Models)
            </button>
            <button
              onClick={() => setActiveTab('sourcing')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'sourcing'
                  ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Sourcing & Recruitment
            </button>
            <button
              onClick={() => setActiveTab('hr')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeTab === 'hr'
                  ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-md'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              HR Consulting
            </button>
          </div>
        </div>

        {/* TAB 1: 6 Core Staffing Cards (Mobile Swipe Carousel ~1.2 cards visible / Desktop 3-col Grid) */}
        {activeTab === 'staffing' && (
          <div>
            <div className="flex md:hidden items-center justify-between text-xs text-[var(--text-muted)] font-medium mb-3 px-1">
              <span>6 Service Models</span>
              <span className="text-[10px] text-[var(--accent-primary)] font-semibold">Swipe to explore →</span>
            </div>
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {staffingSolutions.map((service) => {
                const IconComponent = iconMap[service.icon] || Briefcase;
                return (
                  <div 
                    key={service.id}
                    className="w-[84vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-start md:snap-align-none group bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] rounded-3xl p-6 sm:p-8 border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative text-left"
                  >
                    <div>
                      {/* Icon + Category Pill */}
                      <div className="flex items-center justify-between mb-5 sm:mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--button-primary-text)] transition-colors duration-200 flex items-center justify-center shadow-sm">
                          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--background-secondary)] text-[var(--text-muted)] border border-[var(--border)]">
                          Enterprise
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2.5 sm:mt-3 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      {/* Bullet Deliverables */}
                      <div className="mt-5 sm:mt-6 space-y-2 sm:space-y-2.5 border-t border-[var(--border)] pt-4 sm:pt-5">
                        {service.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                            <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-5 sm:pt-6 mt-6 sm:mt-8 border-t border-[var(--border)] flex items-center justify-between">
                      <button
                        onClick={() => onSelectService(service)}
                        className="text-xs sm:text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-1 group/btn"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[var(--accent-primary)]" />
                      </button>
                      <button
                        onClick={() => onOpenHireModal(service.title)}
                        className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl transition-colors shadow-sm"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: Sourcing & Recruitment */}
        {activeTab === 'sourcing' && (
          <div id="sourcing" className="bg-[var(--background-card)] rounded-3xl p-8 sm:p-12 border border-[var(--border)] shadow-2xl space-y-8 text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs font-bold">
                  200K+ Active Candidates Repository
                </div>
                <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                  {sourcingData.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {sourcingData.overview}
                </p>
                
                {/* Employment Models */}
                <div className="pt-3">
                  <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                    Flexible Employment Models
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {sourcingData.employmentModels.map((model, i) => (
                      <span key={i} className="px-3.5 py-1.5 rounded-xl bg-[var(--background-secondary)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--accent-primary)]">
                        ✓ {model} Staffing
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative rounded-3xl overflow-hidden aspect-[4/3] border border-[var(--border)] shadow-xl">
                <img 
                  src="/images/recruitment-interview.jpg" 
                  alt="Recruitment and Onboarding Interview"
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-primary)]/90 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold text-[var(--accent-primary)]">Pan-India Grassroots Engine</div>
                  <div className="text-sm font-semibold">Tier-1 to Tier-3 & Rural Sourcing Capability</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--border)]">
              <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                Recruitment Strategy Components
              </h4>
              <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none scrollbar-none pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
                {sourcingData.engineComponents.map((comp, idx) => (
                  <div key={idx} className="w-[75vw] sm:w-auto shrink-0 snap-start p-4 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)]">
                    <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
                      {comp.title}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{comp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => onOpenHireModal("Sourcing & Recruitment")}
                className="px-7 py-3.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all"
              >
                Request Sourcing Proposal →
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: HR Consulting */}
        {activeTab === 'hr' && (
          <div id="hr-consulting" className="bg-[var(--background-card)] rounded-3xl p-8 sm:p-12 border border-[var(--border)] shadow-2xl space-y-8 text-left">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs font-bold">
                Strategic Human Capital
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                {hrConsultingData.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                {hrConsultingData.overview}
              </p>
            </div>

            <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none pb-3 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              {hrConsultingData.services.map((item, idx) => (
                <div key={idx} className="w-[84vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-start p-7 rounded-2xl bg-[var(--background-secondary)] border border-[var(--border)] flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[var(--text-primary)] font-heading mb-4 text-[var(--accent-primary)]">
                      {item.title}
                    </h4>
                    <div className="space-y-3">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <Check className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={() => onOpenHireModal(item.title)}
                    className="mt-6 w-full py-3 text-xs sm:text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-primary)] border border-[var(--border)] hover:border-[var(--accent-primary)] rounded-xl transition-colors"
                  >
                    Consult Our Team
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
