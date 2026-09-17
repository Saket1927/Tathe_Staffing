import React, { useState } from 'react';
import { clientLogos } from '../data/contentData';
import { ArrowRight, ChevronUp } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'tech', label: 'IT & Tech' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'bfsi', label: 'BFSI' },
  { id: 'healthcare', label: 'Healthcare' },
];

export default function ClientsCarousel() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  // Filter logos by category
  const filteredLogos = activeCategory === 'all'
    ? clientLogos
    : clientLogos.filter(item => item.category === activeCategory);

  // When unexpanded and count > 12, show 11 logos + 1 "+X more" card
  const shouldTruncate = !isExpanded && filteredLogos.length > 12;
  const displayedLogos = shouldTruncate ? filteredLogos.slice(0, 11) : filteredLogos;
  const remainingCount = filteredLogos.length - 11;

  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setIsExpanded(false);
  };

  return (
    <section className="bg-[var(--background-secondary)] py-12 sm:py-20 border-b border-[var(--border)] text-[var(--text-primary)] relative overflow-hidden">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading matching Design 7 */}
        <div className="mb-6 sm:mb-8 text-left">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[var(--accent-primary)] mb-2">
            TRUSTED BY ORGANISATIONS ACROSS INDIA
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            <span className="text-[var(--text-primary)] block">Leading brands.</span>
            <span className="text-[var(--accent-primary)] block">Real opportunities.</span>
          </h2>
        </div>

        {/* Category Filters (Horizontal Scrollable Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 mb-6 sm:mb-8 -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--button-primary)] text-[var(--button-primary-text)] shadow-md'
                    : 'bg-[var(--background-card)] text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Logo Grid: 3 columns on mobile (as per Design 7 mockup), 4-6 columns on larger screens */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {displayedLogos.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="bg-white border border-slate-200/90 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 flex items-center justify-center aspect-[3/2] sm:aspect-[4/3] group relative hover:border-[var(--accent-primary)] hover:shadow-md transition-all duration-200"
            >
              <img
                src={brand.src}
                alt={brand.name}
                className="max-h-8 sm:max-h-12 max-w-[85%] object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e) => {
                  if (brand.fallbackSrc && e.target.src !== brand.fallbackSrc) {
                    e.target.src = brand.fallbackSrc;
                  } else {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-[10px] sm:text-xs font-bold text-slate-800 text-center leading-tight px-1">${brand.name}</span>`;
                  }
                }}
              />
            </div>
          ))}

          {/* "+X more" dynamic card when truncated */}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(true)}
              className="bg-[var(--background-card)] border border-[var(--border)] hover:border-[var(--accent-primary)] rounded-xl sm:rounded-2xl shadow-sm p-2 sm:p-4 flex flex-col items-center justify-center aspect-[3/2] sm:aspect-[4/3] group cursor-pointer transition-all duration-200"
            >
              <span className="text-sm sm:text-lg font-extrabold text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                +{remainingCount}
              </span>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--text-muted)] mt-0.5">
                more
              </span>
            </button>
          )}
        </div>

        {/* Bottom Expand / Collapse Button if items exceed 12 */}
        {filteredLogos.length > 12 && (
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 rounded-full bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] border border-[var(--border)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm inline-flex items-center gap-2"
            >
              {isExpanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="w-4 h-4 text-[var(--accent-primary)]" />
                </>
              ) : (
                <>
                  <span>View all {filteredLogos.length} partners</span>
                  <ArrowRight className="w-4 h-4 text-[var(--accent-primary)]" />
                </>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
