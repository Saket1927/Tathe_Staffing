import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, User } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ onOpenHireModal, onOpenJobModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Full-width sticky header styled via design tokens */}
      <header className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled 
          ? 'bg-[var(--background-header)] backdrop-blur-md shadow-2xl border-b border-[var(--border)] py-3 sm:py-3.5' 
          : 'bg-[var(--background-header)] border-b border-[var(--border)] py-4'
      }`}>
        <div className="max-w-[1520px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between gap-4 xl:gap-6">
          
          {/* LEFT: Authentic TATHE Logo directly on header (NO white box, retained original colors) */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none shrink-0">
            <img 
              src="/assets/tathe-symbol.png" 
              alt="TATHE Staffing" 
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain drop-shadow-md transition-transform duration-200 group-hover:scale-105"
            />
            <div className="text-left flex flex-col justify-center">
              <div className="flex items-baseline">
                <span className="font-heading font-extrabold text-[var(--logo-text)] text-xl sm:text-[22px] tracking-tight leading-none">
                  TATHE Staffing
                </span>
                <span className="text-[var(--logo-text)] text-[11px] font-medium ml-0.5 relative -top-1.5">™</span>
              </div>
              <span className="text-[9px] sm:text-[9.5px] text-[var(--logo-tagline)] font-semibold tracking-[0.2em] uppercase mt-1 leading-none">
                PEOPLE. PROGRESS. PROSPERITY.
              </span>
            </div>
          </a>

          {/* CENTER: Navigation Links matching Reference */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 font-normal text-[15px] flex-1">
            <a 
              href="#home" 
              className="text-[var(--text-primary)] font-medium py-1 relative flex flex-col items-center group"
            >
              <span>Home</span>
              <span className="h-[3px] w-full bg-[var(--nav-active)] rounded-full mt-1.5"></span>
            </a>
            <a 
              href="#staffing" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-1 relative group"
            >
              <span>Staffing Solutions</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nav-active)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#apprenticeship" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-1 relative group"
            >
              <span>Skilling & Apprenticeships</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nav-active)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#industries" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-1 relative group"
            >
              <span>Industries</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nav-active)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#about" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-1 relative group"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nav-active)] transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a 
              href="#contact" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors py-1 relative group"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--nav-active)] transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* RIGHT: Theme Switcher + Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            {/* Subtle Client Preview Theme Switcher Button */}
            <ThemeSwitcher />

            <button
              onClick={onOpenJobModal}
              className="px-4 xl:px-5 py-2.5 text-sm font-medium text-[var(--button-secondary-text)] hover:text-[var(--accent-primary)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] hover:border-[var(--accent-primary)] rounded-xl transition-all duration-200 flex items-center gap-2 focus:outline-none"
            >
              <User className="w-4 h-4 text-[var(--icon)]" />
              <span>Find a Job</span>
            </button>

            <button
              onClick={onOpenHireModal}
              className="px-5 xl:px-6 py-2.5 text-sm font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 focus:outline-none"
            >
              <span>Hire Talent</span>
              <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)] stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile: Hamburger Only */}
          <div className="flex lg:hidden items-center gap-2">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-xl bg-[var(--background-card)] border border-[var(--border)] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--accent-primary)]" /> : <Menu className="w-6 h-6 text-[var(--text-primary)]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-down Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[var(--background-primary)] border-l border-[var(--border)] p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[var(--border)]">
                <div className="flex items-center gap-3">
                  <img src="/assets/tathe-symbol.png" alt="TATHE Logo" className="h-9 w-9 object-contain" />
                  <div className="text-left">
                    <span className="font-bold text-[var(--logo-text)] text-lg block leading-tight">TATHE Staffing™</span>
                    <span className="text-[10px] text-[var(--logo-tagline)] uppercase tracking-wider block">People. Progress. Prosperity.</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg bg-[var(--background-card)] border border-[var(--border)]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Theme Switcher */}
              <div className="pt-4 pb-2">
                <ThemeSwitcher isMobile />
              </div>

              {/* Mobile links */}
              <div className="py-4 space-y-1 text-left font-semibold text-base">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Home
                </a>
                <a 
                  href="#staffing" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Staffing Solutions
                </a>
                <a 
                  href="#apprenticeship" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Skilling & Apprenticeships
                </a>
                <a 
                  href="#industries" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Industries
                </a>
                <a 
                  href="#about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-xl text-[var(--text-primary)] hover:bg-[var(--background-card)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile CTAs */}
            <div className="pt-4 border-t border-[var(--border)] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJobModal();
                }}
                className="w-full py-3 px-4 text-center font-semibold text-[var(--button-secondary-text)] bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] rounded-xl flex items-center justify-center gap-2"
              >
                <User className="w-4 h-4 text-[var(--icon)]" />
                <span>Find a Job</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireModal();
                }}
                className="w-full py-3 px-4 text-center font-bold text-[var(--button-primary-text)] bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <span>Hire Talent</span>
                <ArrowRight className="w-4 h-4 text-[var(--button-primary-text)]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
