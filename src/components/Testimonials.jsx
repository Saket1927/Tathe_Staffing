import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsData } from '../data/contentData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[var(--background-secondary)] text-[var(--text-primary)] border-b border-[var(--border)]">
      <div className="max-w-site mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 text-left">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[var(--accent-primary)] block mb-2">
              REAL TESTIMONIALS & FEEDBACK
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight">
              What Our Clients & Candidates Say
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg mt-2 max-w-2xl font-normal">
              "Genuine Feedback from Our Respected Clients: Discover What They Appreciate About Our Services"
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-[var(--background-card)] border border-[var(--border)] hover:bg-[var(--button-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-primary)] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-[var(--background-card)] border border-[var(--border)] hover:bg-[var(--button-primary)] hover:text-[var(--button-primary-text)] text-[var(--text-primary)] flex items-center justify-center transition-colors shadow-sm focus:outline-none"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials (Mobile Swipe Carousel ~1.2 cards / Desktop 3-col Grid) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-none pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonialsData.map((item, idx) => (
            <div 
              key={idx}
              className="w-[84vw] max-w-[360px] md:w-auto shrink-0 md:shrink snap-start md:snap-align-none bg-[var(--background-card)] hover:bg-[var(--background-card-hover)] rounded-3xl p-6 sm:p-8 border border-[var(--border)] hover:border-[var(--accent-primary)] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--accent-tertiary)] text-[var(--accent-tertiary)]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic relative font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-8 border-t border-[var(--border)] flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--icon-bg)] text-[var(--accent-primary)] border border-[var(--icon-border)] font-bold text-base flex items-center justify-center shrink-0 shadow-inner">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[var(--text-primary)]">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                    {item.role} • {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
