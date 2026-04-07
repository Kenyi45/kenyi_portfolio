// ============================================================================
// HEADER COMPONENT - Navigation Layout
// ============================================================================

import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Icon, Button } from '../ui';
import { NAVIGATION_ITEMS, SCROLL_OFFSET } from '../../constants/navigation';
import { PERSONAL_INFO } from '../../constants/portfolio-data';

const initials = PERSONAL_INFO.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 12);

      const sections = NAVIGATION_ITEMS.map((item) => item.id);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= SCROLL_OFFSET && rect.bottom >= SCROLL_OFFSET) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const top = element.offsetTop - SCROLL_OFFSET;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }

    setIsMobileMenuOpen(false);
  };

  const headerClasses = clsx(
    'fixed top-0 w-full z-50 transition-[background,box-shadow,border-color] duration-300',
    {
      'glass-header shadow-soft': isScrolled,
      'bg-transparent border-b border-transparent': !isScrolled,
    }
  );

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Principal">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/40 bg-secondary-900/80 font-mono text-sm font-semibold text-primary-300 shadow-sm group-hover:border-primary-400/60 group-hover:text-primary-200">
                {initials}
              </span>
              <span className="hidden sm:block text-left">
                <span className="block font-display text-sm font-semibold text-secondary-100">Kenyi Vega</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-primary-400/90">Full stack · Arquitectura</span>
              </span>
            </button>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-1 rounded-2xl border border-secondary-800/80 bg-secondary-900/50 p-1 backdrop-blur-sm">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium transition-colors',
                    {
                      'bg-secondary-800 text-primary-200 shadow-sm': activeSection === item.id,
                      'text-secondary-400 hover:text-secondary-200 hover:bg-secondary-800/60': activeSection !== item.id,
                    }
                  )}
                >
                  <Icon name={item.icon!} size={16} className="opacity-80" aria-hidden="true" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <Button variant="primary" size="sm" href="mailto:kenyiva45@gmail.com" external>
              <Icon name="Mail" size={16} className="mr-2" aria-hidden="true" />
              Contáctame
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border border-secondary-700 p-2.5 text-secondary-300 hover:bg-secondary-800"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={22} />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden absolute left-0 right-0 top-full border-t border-secondary-800 bg-secondary-950/95 backdrop-blur-xl shadow-large"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-base font-medium transition-colors',
                    {
                      'bg-secondary-800 text-primary-200': activeSection === item.id,
                      'text-secondary-300 hover:bg-secondary-900': activeSection !== item.id,
                    }
                  )}
                >
                  <Icon name={item.icon!} size={20} aria-hidden="true" />
                  {item.label}
                </button>
              ))}
              <div className="pt-3">
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
