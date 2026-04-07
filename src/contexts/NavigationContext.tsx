import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { NAVIGATION_ITEMS } from '../constants/navigation';
import { HEADER_SCROLL_OFFSET_PX } from '../navigation/constants';
import { SectionScrollSpy } from '../navigation/SectionScrollSpy';

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.id) as readonly string[];

export interface NavigationContextValue {
  readonly activeSectionId: string;
  readonly isHeaderCompact: boolean;
  readonly navigateToSection: (sectionId: string) => void;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

export const NavigationProvider: React.FC<{ readonly children: React.ReactNode }> = ({ children }) => {
  const spy = useMemo(() => new SectionScrollSpy(SECTION_IDS, HEADER_SCROLL_OFFSET_PX), []);

  const [activeSectionId, setActiveSectionId] = useState<string>(SECTION_IDS[0] ?? 'home');
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);

  const syncFromScroll = useCallback(() => {
    setIsHeaderCompact(window.scrollY > 8);
    setActiveSectionId(spy.resolveActiveSectionId());
  }, [spy]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && SECTION_IDS.includes(hash)) {
      spy.scrollToSectionId(hash, 'auto');
      setActiveSectionId(hash);
    } else {
      setActiveSectionId(spy.resolveActiveSectionId());
    }
    setIsHeaderCompact(window.scrollY > 8);
  }, [spy]);

  useEffect(() => {
    window.addEventListener('scroll', syncFromScroll, { passive: true });
    window.addEventListener('resize', syncFromScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', syncFromScroll);
      window.removeEventListener('resize', syncFromScroll);
    };
  }, [syncFromScroll]);

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && SECTION_IDS.includes(hash)) {
        spy.scrollToSectionId(hash, 'auto');
        setActiveSectionId(hash);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [spy]);

  const navigateToSection = useCallback(
    (sectionId: string) => {
      if (!SECTION_IDS.includes(sectionId)) return;
      setActiveSectionId(sectionId);
      spy.scrollToSectionId(sectionId, 'smooth');
      const path = window.location.pathname;
      window.history.replaceState(null, '', sectionId === 'home' ? path : `${path}#${sectionId}`);
    },
    [spy]
  );

  const value = useMemo<NavigationContextValue>(
    () => ({
      activeSectionId,
      isHeaderCompact,
      navigateToSection,
    }),
    [activeSectionId, isHeaderCompact, navigateToSection]
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export function useNavigation(): NavigationContextValue {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error('useNavigation solo puede usarse dentro de NavigationProvider');
  }
  return ctx;
}
