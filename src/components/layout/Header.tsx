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
        isHeaderCompact ? 'glass-header-light shadow-sm' : 'bg-transparent'
      )}
    >
      <nav className="container-prose" aria-label="Principal">
        <div className="flex items-center justify-between h-16 md:h-[4.25rem]">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-200 bg-white font-mono text-xs font-semibold text-primary-700 shadow-sm transition-colors duration-smooth group-hover:border-primary-400 group-hover:text-primary-800">
              {initials}
            </span>
            <span className="hidden sm:block text-left">
              <span className="block font-display text-sm font-semibold text-neutral-900">Kenyi Vega</span>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-primary-600/90">
                Full stack · Arquitectura
              </span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1 rounded-2xl border border-neutral-200/90 bg-white/70 p-1 backdrop-blur-sm">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={clsx(
                  'flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-smooth',
                  activeSectionId === item.id
                    ? 'bg-primary-50 text-primary-800 shadow-ring'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
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
            className="lg:hidden rounded-xl border border-neutral-200 p-2.5 text-neutral-700 hover:bg-neutral-50 transition-colors duration-smooth"
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
            className="lg:hidden absolute left-0 right-0 top-full border-t border-neutral-200 bg-white/95 backdrop-blur-lg shadow-medium"
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
                      ? 'bg-primary-50 text-primary-800'
                      : 'text-neutral-700 hover:bg-neutral-50'
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
