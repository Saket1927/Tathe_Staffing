import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = [
  {
    id: 'tathe',
    name: 'TATHE Original',
    shortName: 'Original',
    badge: 'Navy + Green',
    indicatorColor: '#00e575',
    tagline: 'Deep navy + TATHE green & brand accents',
  },
  {
    id: 'energy',
    name: 'TATHE Energy',
    shortName: 'Energy',
    badge: 'Navy + Red/Orange',
    indicatorColor: '#FF4D26',
    tagline: 'Deep navy + bold red/orange accents',
  },
  {
    id: 'blue',
    name: 'TATHE Blue',
    shortName: 'Blue',
    badge: 'Navy + Electric Blue',
    indicatorColor: '#00A3FF',
    tagline: 'Deep navy + electric corporate blue',
  },
  {
    id: 'emerald',
    name: 'TATHE Emerald',
    shortName: 'Emerald',
    badge: 'Navy + Emerald/Teal',
    indicatorColor: '#00E5A3',
    tagline: 'Deep navy + vivid emerald & teal',
  },
  {
    id: 'sunset',
    name: 'TATHE Sunset',
    shortName: 'Sunset',
    badge: 'Navy + Orange/Amber',
    indicatorColor: '#FF9900',
    tagline: 'Deep navy + warm sunset amber & gold',
  },
  {
    id: 'light',
    name: 'Light Corporate',
    shortName: 'Light',
    badge: 'Corporate Grey',
    indicatorColor: '#00A859',
    tagline: 'Grey-toned corporate hierarchy with crisp depth',
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
