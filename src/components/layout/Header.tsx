// ============================================================================
// HEADER COMPONENT - Navigation Layout
// ============================================================================

import React, { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Icon, Button } from '../ui';
import { NAVIGATION_ITEMS, SCROLL_OFFSET } from '../../constants/navigation';
import { PERSONAL_INFO } from '../../constants/portfolio-data';

// Principio Single Responsibility: Solo maneja la navegación del header
// Principio Open/Closed: Extensible sin modificar el código base

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Effect para manejar el scroll y determinar sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Determinar sección activa basada en scroll position
      const sections = NAVIGATION_ITEMS.map(item => item.id);
      
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler para navegación smooth scroll
  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const top = element.offsetTop - SCROLL_OFFSET;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const headerClasses = clsx(
    'fixed top-0 w-full z-50 transition-all duration-300',
    {
      'bg-white/90 backdrop-blur-md shadow-soft': isScrolled,
      'bg-transparent': !isScrolled
    }
  );

  return (
    <header className={headerClasses}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="font-bold text-xl text-primary-700 hover:text-primary-800 transition-colors"
            >
              {PERSONAL_INFO.name.split(' ').map(name => name[0]).join('')}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center',
                    {
                      'text-primary-700 bg-primary-50': activeSection === item.id,
                      'text-neutral-600 hover:text-primary-700 hover:bg-primary-50': activeSection !== item.id
                    }
                  )}
                >
                  <Icon name={item.icon!} size={16} className="mr-2" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              href="mailto:kenyiva45@gmail.com"
              external
            >
              <Icon name="Mail" size={16} className="mr-2" />
              Contáctame
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-large border-t border-neutral-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={clsx(
                    'w-full flex items-center px-3 py-3 text-left text-base font-medium rounded-lg transition-colors',
                    {
                      'text-primary-700 bg-primary-50': activeSection === item.id,
                      'text-neutral-600 hover:text-primary-700 hover:bg-primary-50': activeSection !== item.id
                    }
                  )}
                >
                  <Icon name={item.icon!} size={20} className="mr-3" />
                  {item.label}
                </button>
              ))}
              <div className="pt-4 pb-2">
                <Button
                  variant="primary"
                  size="md"
                  href="mailto:kenyiva45@gmail.com"
                  external
                  className="w-full"
                >
                  <Icon name="Mail" size={16} className="mr-2" />
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