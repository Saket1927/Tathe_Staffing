import React, { useState } from 'react';
import { 
  Factory, Landmark, ShoppingBag, Truck, HeartPulse, 
  Car, ShoppingCart, Monitor, Ship, ArrowRight, X, CheckCircle2 
} from 'lucide-react';
import { industriesData } from '../data/contentData';

export default function IndustriesSection({ onOpenHireModal }) {
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [filter, setFilter] = useState('all');

  const iconMap = {
    Factory: Factory,
    Landmark: Landmark,
    ShoppingBag: ShoppingBag,
    Truck: Truck,
    HeartPulse: HeartPulse,
    Car: Car,
    ShoppingCart: ShoppingCart,
    Monitor: Monitor,
    Ship: Ship,
  };

  const filteredIndustries = filter === 'all' 
    ? industriesData 
    : industriesData.filter(i => i.id === filter);

  return (
    <section id="industries" className="py-24 sm:py-32 bg-[var(--background-secondary)] text-[var(--text-primary)] border-b border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Large Bold Typography */}
        <div className="text-left mb-10 sm:mb-14">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--accent-primary)] mb-2.5">
            PROVEN INDUSTRY DOMAINS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight leading-tight">
            Industries We Serve
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-xl mt-3 max-w-3xl font-normal leading-relaxed">
            Specialized staffing, apprenticeships, and skilling tailored to 9 vital economic sectors across India.
          </p>
        </div>

        {/* Industry Category Selector Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 scrollbar-none">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 shrink-0 ${
              filter === 'all'
                ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-sm'
                : 'bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] text-[var(--text-secondary)] border border-[var(--border)]'
            }`}
          >
            All 9 Sectors
          </button>
          {industriesData.map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-2 ${
                filter === item.id
                  ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-sm'
                  : 'bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] text-[var(--text-secondary)] border border-[var(--border)]'
              }`}
            >
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex md:hidden items-center justify-between text-xs text-[var(--text-muted)] font-medium mb-3 px-1">
          <span>9 Industry Sectors</span>
          <span className="text-[10px] text-[var(--accent-primary)] font-semibold">Swipe to explore →</span>
        </div>

        {/* 9 Visual Industry Cards (Mobile Swipe Carousel ~1.2 cards / Desktop 3-col Grid) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {filteredIndustries.map((item) => {
            const IconComponent = iconMap[item.icon] || Factory;
            return (
              <div 
                key={item.id}
                className="w-[84vw] max-w-[340px] md:w-auto shrink-0 md:shrink snap-start md:snap-align-none group relative bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] rounded-3xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 text-left"
              >
                {/* Top Accent Line on Card Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[var(--accent-primary)] transition-colors duration-300 z-20"></div>

                {/* Real High-Res Photography Header */}
                <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.name} workforce`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-card)] via-[var(--background-card)]/30 to-transparent"></div>
                  
                  {/* Category Pill with sector color accent */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--background-card-glass)] backdrop-blur-md text-xs font-bold text-[var(--text-primary)] border border-[var(--border)] shadow-md">
                    <IconComponent className="w-4 h-4" style={{ color: item.color }} />
                    <span>{item.name}</span>
                  </div>

                  <div className="absolute bottom-4 left-5 text-white text-left">
                    <div className="text-xl font-bold font-heading drop-shadow-md">{item.name}</div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors mb-3">
                      {item.name}
                    </h3>
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Clean CTAs */}
                  <div className="pt-6 mt-8 border-t border-[var(--border)] flex items-center justify-between gap-4">
                    <button 
                      onClick={() => setSelectedIndustry(item)}
                      className="text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--accent-primary)] flex items-center gap-1.5 group/btn transition-colors"
                    >
                      <span>Explore Sector</span>
                      <ArrowRight className="w-4 h-4 text-[var(--accent-primary)] group-hover/btn:translate-x-1 transition-all" />
                    </button>

                    <button
                      onClick={() => onOpenHireModal(item.name)}
                      className="px-5 py-2.5 text-xs sm:text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-sm hover:shadow transition-colors flex items-center gap-1.5 focus:outline-none"
                    >
                      <span>Hire for {item.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--button-primary-text)]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Sector Deep-Dive Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[var(--background-card)] text-[var(--text-primary)] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[var(--border)]">
            {/* Modal Image Header */}
            <div className="relative h-64 w-full overflow-hidden">
              <img 
                src={selectedIndustry.image} 
                alt={selectedIndustry.name} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-card)] via-[var(--background-card)]/40 to-transparent"></div>
              
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[var(--background-primary)]/80 text-[var(--text-primary)] hover:bg-[var(--background-primary)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)] bg-[var(--background-primary)]/90 px-3 py-1 rounded-full border border-[var(--border)]">
                  Industry Sector Deep Dive
                </span>
                <h3 className="font-heading text-3xl font-extrabold text-white mt-2">
                  {selectedIndustry.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6 text-left">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">
                  Workforce Capabilities
                </h4>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  {selectedIndustry.shortDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Typical Roles We Deploy
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedIndustry.roles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--background-primary)] border border-[var(--border)] text-sm font-medium text-[var(--text-primary)]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                  Industry Highlights
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIndustry.highlights.map((hl, idx) => (
                    <span key={idx} className="px-3.5 py-1.5 rounded-full bg-[var(--background-primary)] border border-[var(--border)] text-xs font-semibold text-[var(--accent-primary)]">
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border)] flex justify-end gap-3">
                <button
                  onClick={() => setSelectedIndustry(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const indName = selectedIndustry.name;
                    setSelectedIndustry(null);
                    onOpenHireModal(`Industry Staffing: ${indName}`);
                  }}
                  className="px-6 py-2.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-md transition-colors"
                >
                  Hire for {selectedIndustry.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
