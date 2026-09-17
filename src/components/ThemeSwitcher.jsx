import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown, Check } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export default function ThemeSwitcher({ isMobile = false }) {
  const { theme, setTheme, currentThemeMeta } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Mobile Drawer Presentation: Compact 2-column or list selector
  if (isMobile) {
    return (
      <div className="p-3.5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Color Theme
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-[var(--background-badge)] text-[var(--accent-primary)] border border-[var(--border)]">
            {currentThemeMeta.shortName}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {THEMES.map((t) => {
            const isActive = t.id === theme;
            return (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                className={`py-2 px-2.5 rounded-xl border text-left flex items-center gap-2 transition-all focus:outline-none ${
                  isActive
                    ? 'bg-[var(--background-card-hover)] border-[var(--accent-primary)] shadow-sm'
                    : 'bg-[var(--background-primary)] border-[var(--border)] hover:border-[var(--accent-primary)]/50'
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                  style={{
                    backgroundColor: t.indicatorColor,
                    boxShadow: isActive ? `0 0 6px ${t.indicatorColor}` : 'none'
                  }}
                />
                <span className={`text-xs font-medium truncate ${isActive ? 'text-[var(--text-primary)] font-bold' : 'text-[var(--text-secondary)]'}`}>
                  {t.name.replace('TATHE ', '')}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Header Button & Compact Floating Dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 text-xs font-semibold rounded-xl bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] transition-all duration-200 flex items-center gap-2 focus:outline-none shadow-sm"
        aria-label={`Theme: ${currentThemeMeta.name}. Click to change theme.`}
        aria-expanded={isOpen}
      >
        {/* Active Theme Dot */}
        <span 
          className="w-2.5 h-2.5 rounded-full shadow-sm transition-all duration-300"
          style={{ 
            backgroundColor: currentThemeMeta.indicatorColor,
            boxShadow: `0 0 8px ${currentThemeMeta.indicatorColor}`
          }}
        />
        
        {/* Theme Name */}
        <span className="tracking-wide">
          {currentThemeMeta.name}
        </span>

        {/* Dropdown Chevron */}
        <ChevronDown className={`w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Floating 6-Theme Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-56 p-1.5 rounded-2xl bg-[var(--background-card)] border border-[var(--border)] shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-2.5 py-1.5 border-b border-[var(--border)] mb-1">
            <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider block">
              Select Preview Theme
            </span>
          </div>
          <div className="space-y-0.5">
            {THEMES.map((t) => {
              const isActive = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-2.5 py-2 rounded-xl text-left flex items-center justify-between text-xs transition-colors focus:outline-none ${
                    isActive
                      ? 'bg-[var(--background-badge)] text-[var(--accent-primary)] font-bold'
                      : 'text-[var(--text-primary)] hover:bg-[var(--background-card-hover)]'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span 
                      className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                      style={{
                        backgroundColor: t.indicatorColor,
                        boxShadow: isActive ? `0 0 6px ${t.indicatorColor}` : 'none'
                      }}
                    />
                    <div className="truncate">
                      <span className="block truncate">{t.name}</span>
                      <span className="text-[10px] text-[var(--text-muted)] block truncate font-normal">
                        {t.badge}
                      </span>
                    </div>
                  </div>
                  {isActive && (
                    <Check className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
