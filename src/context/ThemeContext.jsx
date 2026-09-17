import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'tathe',
    name: 'TATHE Original',
    shortName: 'TATHE',
    badge: 'Original',
    indicatorColor: '#00e575', // Bright TATHE Green
    tagline: 'Deep Navy & Bright Green (Default)',
  },
  {
    id: 'alternate',
    name: 'Alternate Accent',
    shortName: 'Alternate',
    badge: 'Cobalt / Cyan',
    indicatorColor: '#00D2FF', // Vivid Cyan
    tagline: 'Electric Sapphire & Vivid Cyan',
  },
  {
    id: 'light',
    name: 'Light Corporate',
    shortName: 'Light',
    badge: 'Enterprise Light',
    indicatorColor: '#059669', // Rich Emerald Green
    tagline: 'Crisp White & Emerald Enterprise',
  },
];

const ThemeContext = createContext({
  theme: 'tathe',
  setTheme: () => {},
  cycleTheme: () => {},
  currentThemeMeta: THEMES[0],
});

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryTheme = urlParams.get('theme');
        if (queryTheme && THEMES.some(t => t.id === queryTheme)) {
          return queryTheme;
        }
        const saved = localStorage.getItem('tathe_theme');
        if (saved && THEMES.some(t => t.id === saved)) {
          return saved;
        }
      } catch (e) {
        console.warn('Theme init check failed', e);
      }
    }
    return 'tathe';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('tathe_theme', theme);
    } catch (e) {
      console.warn('Unable to save theme in localStorage', e);
    }
  }, [theme]);

  const setTheme = (newTheme) => {
    if (THEMES.some(t => t.id === newTheme)) {
      setThemeState(newTheme);
    }
  };

  const cycleTheme = () => {
    setThemeState((prev) => {
      const currentIndex = THEMES.findIndex(t => t.id === prev);
      const nextIndex = (currentIndex + 1) % THEMES.length;
      return THEMES[nextIndex].id;
    });
  };

  const currentThemeMeta = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme, currentThemeMeta }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
