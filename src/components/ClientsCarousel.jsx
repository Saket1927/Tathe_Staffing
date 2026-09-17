import React, { useState } from 'react';
import { ShieldCheck, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { clientLogos } from '../data/contentData';

export default function ClientsCarousel() {
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'

  return (
    <section className="bg-[var(--background-secondary)] py-14 sm:py-20 border-b border-[var(--border)] text-[var(--text-primary)] relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--pill-bg)] border border-[var(--pill-border)] text-[var(--accent-primary)] text-xs font-bold uppercase tracking-wider mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>PROVEN CLIENT REPUTATION</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              Trusted by Leading Organisations
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mt-2 max-w-2xl font-normal leading-relaxed">
              Serving India’s most respected enterprises, automotive giants, pharmaceutical leaders, and high-growth businesses.
            </p>
          </div>

          {/* Toggle View */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setViewMode(viewMode === 'carousel' ? 'grid' : 'carousel')}
              className="px-4 py-2.5 rounded-xl bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] border border-[var(--border)] text-[var(--text-primary)] text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors focus:outline-none shadow-sm"
            >
              {viewMode === 'carousel' ? (
                <>
                  <LayoutGrid className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>View All 26 Brands Grid</span>
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-4 h-4 text-[var(--accent-primary)]" />
                  <span>View Continuous Marquee</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE VIEW (block md:hidden): Dedicated Touch-Controlled Swipe Carousel */}
        <div className="block md:hidden">
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)] font-medium mb-3 px-1">
            <span>Trusted by organisations across India</span>
            <span className="text-[10px] text-[var(--accent-primary)] font-semibold flex items-center gap-1">
              Swipe →
            </span>
          </div>

          {/* Swipe Container (46% - 48% width per card showing 2 full cards + peek of 3rd) */}
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 -mx-4 px-4">
            {clientLogos.map((brand, idx) => (
              <div
                key={`mobile-logo-${idx}`}
                className="w-[47%] shrink-0 snap-start h-24 rounded-2xl bg-white border border-[var(--border)] shadow-sm p-3.5 flex items-center justify-center relative group"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="max-h-11 max-w-[85%] object-contain"
                  onError={(e) => {
                    if (brand.fallbackSrc && e.target.src !== brand.fallbackSrc) {
                      e.target.src = brand.fallbackSrc;
                    } else {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-800">${brand.name}</span>`;
                    }
                  }}
                />
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[var(--text-muted)] text-center mt-3 font-normal">
            Swipe horizontally to view all 26 partner brands
          </p>
        </div>

        {/* DESKTOP VIEW (hidden md:block): Continuous Marquee or 26-Brand Grid */}
        <div className="hidden md:block">
          {viewMode === 'carousel' ? (
            <div className="space-y-5">
              {/* Row 1 - Marquee Left */}
              <div className="relative w-full overflow-hidden mask-fade py-2">
                <div className="flex items-center gap-6 sm:gap-8 w-max animate-marquee">
                  {[...clientLogos, ...clientLogos].map((brand, idx) => (
                    <div
                      key={idx}
                      className="h-22 sm:h-26 w-44 sm:w-52 px-6 py-4 rounded-2xl bg-white hover:bg-white border border-slate-200/90 hover:border-[var(--accent-primary)] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 group relative"
                    >
                      <img
                        src={brand.src}
                        alt={brand.name}
                        className="max-h-12 sm:max-h-14 max-w-full object-contain transition-all duration-300 transform group-hover:scale-105 filter brightness-100 group-hover:brightness-105"
                        onError={(e) => {
                          if (brand.fallbackSrc && e.target.src !== brand.fallbackSrc) {
                            e.target.src = brand.fallbackSrc;
                          } else {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-800">${brand.name}</span>`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--accent-primary)]/40 pointer-events-none transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Marquee Right */}
              <div className="relative w-full overflow-hidden mask-fade py-2">
                <div 
                  className="flex items-center gap-6 sm:gap-8 w-max animate-marquee"
                  style={{ animationDirection: 'reverse', animationDuration: '32s' }}
                >
                  {[...clientLogos.slice().reverse(), ...clientLogos.slice().reverse()].map((brand, idx) => (
                    <div
                      key={idx}
                      className="h-22 sm:h-26 w-44 sm:w-52 px-6 py-4 rounded-2xl bg-white hover:bg-white border border-slate-200/90 hover:border-[var(--accent-primary)] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center shrink-0 group relative"
                    >
                      <img
                        src={brand.src}
                        alt={brand.name}
                        className="max-h-12 sm:max-h-14 max-w-full object-contain transition-all duration-300 transform group-hover:scale-105 filter brightness-100 group-hover:brightness-105"
                        onError={(e) => {
                          if (brand.fallbackSrc && e.target.src !== brand.fallbackSrc) {
                            e.target.src = brand.fallbackSrc;
                          } else {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-800">${brand.name}</span>`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--accent-primary)]/40 pointer-events-none transition-colors"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* View 2: Complete 26-Brand Logo Wall Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-6 pt-2">
              {clientLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="h-26 sm:h-30 px-6 py-4 rounded-2xl bg-white hover:bg-white border border-slate-200/90 hover:border-[var(--accent-primary)] shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center group relative"
                >
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-h-12 sm:max-h-14 max-w-full object-contain transition-all duration-300 transform group-hover:scale-105"
                    onError={(e) => {
                      if (brand.fallbackSrc && e.target.src !== brand.fallbackSrc) {
                        e.target.src = brand.fallbackSrc;
                      } else {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-slate-800">${brand.name}</span>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--accent-primary)]/40 pointer-events-none transition-colors"></div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
