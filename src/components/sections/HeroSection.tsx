// ============================================================================
// HERO SECTION - Portfolio Landing
// ============================================================================

import React from 'react';
import { Button, Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';

// Principio Single Responsibility: Solo maneja la presentación del hero
// Principio Open/Closed: Extensible para diferentes variantes de hero

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-40 h-40 mx-auto group">
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400 via-accent-500 to-primary-600 p-1 shadow-xl animate-pulse-slow">
                <div className="w-full h-full rounded-full bg-white p-1">
                  <img
                    src="/perfil.jpeg"
                    alt={`${PERSONAL_INFO.name} - Desarrollador Full Stack`}
                    className="w-full h-full rounded-full object-cover shadow-large transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full shadow-medium animate-bounce-slow"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full shadow-medium animate-float"></div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 via-accent-500/20 to-primary-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md scale-110"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slide-up">
            <h1 className="text-display-xl font-bold text-neutral-900 mb-4">
              Hola, soy{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <h2 className="text-display-sm text-neutral-700 font-medium">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          {/* Location & Contact Info */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center space-x-6 text-neutral-600 mb-4">
              <div className="flex items-center">
                <Icon name="MapPin" size={18} className="mr-2 text-primary-600" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" size={18} className="mr-2 text-primary-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="min-w-44"
              >
                <Icon name="FolderOpen" size={20} className="mr-2" />
                Ver Proyectos
              </Button>
              <Button
                variant="gradient"
                size="lg"
                href="/Kenyi_Ivan_Vega_Aliaga_CV_2025_6_25.pdf"
                external
                className="min-w-44"
              >
                <Icon name="Download" size={20} className="mr-2" />
                Descargar CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="mailto:kenyiva45@gmail.com"
                external
                className="min-w-44"
              >
                <Icon name="Mail" size={20} className="mr-2" />
                Contáctame
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center justify-center space-x-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-110 group"
                >
                  <Icon 
                    name={social.icon} 
                    size={20} 
                    className="text-neutral-600 group-hover:text-primary-600 transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
            <button
              onClick={() => scrollToSection('about')}
              className="p-2 text-neutral-400 hover:text-primary-600 transition-colors"
            >
              <Icon name="ChevronDown" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 