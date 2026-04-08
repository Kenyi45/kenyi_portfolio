// ============================================================================
// HEADER — estado de navegación vía NavigationContext (scroll spy unificado)
// ============================================================================

import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Icon, Button } from '../ui';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { PERSONAL_INFO } from '../../constants/portfolio-data';
import { useNavigation } from '../../contexts/NavigationContext';

const initials = PERSONAL_INFO.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const Header: React.FC = () => {
  const { activeSectionId, isHeaderCompact, navigateToSection } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onNavigate = (sectionId: string) => {
    navigateToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 w-full z-50 transition-[background,box-shadow] duration-smooth ease-out-expo',
        isHeaderCompact ? 'glass-header-dark' : 'bg-transparent'
      )}
    >
      <nav className="container-prose" aria-label="Principal">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 rounded-xl py-1 -my-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 min-h-11 sm:min-h-0"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/40 bg-ink-raised font-mono text-xs font-semibold text-primary-300 shadow-card-ink transition-colors duration-smooth group-hover:border-primary-400 group-hover:text-primary-200">
              {initials}
            </span>
            <span className="hidden sm:block text-left">
              <span className="block font-display text-sm font-semibold text-neutral-50">Kenyi Vega</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-primary-400/90">
                Full stack · Arquitectura
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1 rounded-2xl border border-ink-line bg-ink-raised/75 p-1 backdrop-blur-sm">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={clsx(
                  'flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-smooth',
                  activeSectionId === item.id
                    ? 'bg-primary-500/15 text-primary-200 shadow-ring'
                    : 'text-neutral-400 hover:text-neutral-100 hover:bg-white/5'
                )}
              >
                <Icon name={item.icon!} size={16} className="opacity-80" aria-hidden="true" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="mailto:kenyiva45@gmail.com" external>
              <Icon name="Mail" size={16} className="mr-2" aria-hidden="true" />
              Contáctame
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden touch-target inline-flex items-center justify-center rounded-xl border border-ink-line bg-ink-raised/80 text-neutral-200 hover:bg-white/5 transition-colors duration-smooth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden absolute left-0 right-0 top-full border-t border-ink-line bg-ink-raised/95 backdrop-blur-lg shadow-card-ink"
          >
            <div className="py-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition-colors duration-smooth',
                    activeSectionId === item.id
                      ? 'bg-primary-500/15 text-primary-200'
                      : 'text-neutral-300 hover:bg-white/5'
                  )}
                >
                  <Icon name={item.icon!} size={20} aria-hidden="true" />
                  {item.label}
                </button>
              ))}
              <div className="pt-3 px-1">
                <Button variant="primary" size="md" href="mailto:kenyiva45@gmail.com" external className="w-full justify-center">
                  <Icon name="Mail" size={16} className="mr-2" aria-hidden="true" />
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
