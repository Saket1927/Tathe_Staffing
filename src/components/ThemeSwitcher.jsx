import React from 'react';
import { Palette, RefreshCw } from 'lucide-react';
import { useTheme, THEMES } from '../context/ThemeContext';

export default function ThemeSwitcher({ isMobile = false }) {
  const { theme, cycleTheme, currentThemeMeta } = useTheme();

  if (isMobile) {
    return (
      <div className="p-3 rounded-2xl bg-[var(--background-card)] border border-[var(--border)]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[var(--accent-primary)]" />
            <span className="text-xs font-bold text-[var(--text-primary)] uppercase tracking-wider">
              Preview Theme
            </span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-[var(--background-badge)] text-[var(--accent-primary)] border border-[var(--border)]">
            {currentThemeMeta.badge}
          </span>
        </div>

        <button
          onClick={cycleTheme}
          className="w-full py-2.5 px-3 rounded-xl bg-[var(--background-primary)] hover:bg-[var(--background-card-hover)] border border-[var(--border)] text-left flex items-center justify-between transition-colors focus:outline-none"
          title="Tap to cycle theme: TATHE Original → Alternate → Light"
        >
          <div className="flex items-center gap-2.5">
            <span 
              className="w-3 h-3 rounded-full shadow-sm animate-pulse" 
              style={{ backgroundColor: currentThemeMeta.indicatorColor }}
            />
            <span className="text-sm font-bold text-[var(--text-primary)]">
              {currentThemeMeta.name}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)] font-medium">
            <span>Tap to Switch</span>
            <RefreshCw className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>
    );
  }

  // Desktop Header Button (Sleek, executive, subtle)
  return (
    <div className="relative group">
      <button
        onClick={cycleTheme}
        className="px-3.5 py-2 text-xs font-semibold rounded-xl bg-[var(--button-secondary)] hover:bg-[var(--button-secondary-hover)] border border-[var(--button-secondary-border)] hover:border-[var(--accent-primary)] text-[var(--text-primary)] transition-all duration-200 flex items-center gap-2 focus:outline-none shadow-sm"
        aria-label={`Current Theme: ${currentThemeMeta.name}. Click to switch theme.`}
        title="Client Preview: Click to cycle theme (TATHE Original → Alternate → Light)"
      >
        {/* Glowing Theme Color Indicator Dot */}
        <span 
          className="w-2.5 h-2.5 rounded-full shadow-sm transition-all duration-300"
          style={{ 
            backgroundColor: currentThemeMeta.indicatorColor,
            boxShadow: `0 0 8px ${currentThemeMeta.indicatorColor}`
          }}
        />
        
        {/* Theme Short Name */}
        <span className="tracking-wide">
          {currentThemeMeta.shortName}
        </span>

        {/* Small cycling icon */}
        <RefreshCw className="w-3 h-3 text-[var(--text-muted)] group-hover:rotate-180 transition-transform duration-500" />
      </button>

      {/* Hover preview tooltip */}
      <div className="absolute top-full right-0 mt-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 whitespace-nowrap">
        <div className="px-3 py-1.5 rounded-lg bg-[var(--background-card)] border border-[var(--border)] shadow-xl text-left">
          <div className="text-[11px] font-bold text-[var(--text-primary)] flex items-center gap-1.5">
            <span>Theme:</span>
            <span style={{ color: currentThemeMeta.indicatorColor }}>{currentThemeMeta.name}</span>
          </div>
          <div className="text-[10px] text-[var(--text-muted)] mt-0.5">
            Click to cycle preview (1-click instant)
          </div>
        </div>
      </div>
    </div>
  );
}
