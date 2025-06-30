// ============================================================================
// ABOUT SECTION - Personal Information
// ============================================================================

import React from 'react';
import { Section, Card, Icon } from '../ui';
import { PERSONAL_INFO } from '../../constants/portfolio-data';

// Principio Single Responsibility: Solo maneja la información personal

const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: 'Trophy',
      title: '+4 Años',
      description: 'Experiencia en desarrollo'
    },
    {
      icon: 'Users',
      title: 'Liderazgo',
      description: 'Equipos multidisciplinarios'
    },
    {
      icon: 'Zap',
      title: 'Eficiencia',
      description: 'Mejoras del 25-30%'
    },
    {
      icon: 'Shield',
      title: '99.9%',
      description: 'Disponibilidad de sistemas'
    }
  ];

  return (
    <Section
      id="about"
      title="Acerca de Mí"
      subtitle="Desarrollador apasionado por crear soluciones tecnológicas eficientes y escalables"
      className="bg-neutral-50"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Información Personal */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              {PERSONAL_INFO.title}
            </h3>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center">
              <Icon name="MapPin" size={18} className="text-primary-600 mr-3" />
              <span className="text-neutral-700">{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center">
              <Icon name="Mail" size={18} className="text-primary-600 mr-3" />
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-neutral-700 hover:text-primary-600 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
            <div className="flex items-center">
              <Icon name="Linkedin" size={18} className="text-primary-600 mr-3" />
              <a 
                href={`https://${PERSONAL_INFO.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-700 hover:text-primary-600 transition-colors"
              >
                {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="lg"
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Icon 
                    name={highlight.icon} 
                    size={28} 
                    className="text-white" 
                  />
                </div>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                {highlight.title}
              </h4>
              <p className="text-neutral-600 text-sm">
                {highlight.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Skills Preview */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold text-neutral-900 mb-8">
          Áreas de Especialización
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Card variant="bordered" padding="lg" className="group">
            <Icon name="Code2" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-2">Frontend Development</h4>
            <p className="text-neutral-600 text-sm">React, Angular, TypeScript, CSS3</p>
          </Card>
          
          <Card variant="bordered" padding="lg" className="group">
            <Icon name="Server" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-2">Backend Development</h4>
            <p className="text-neutral-600 text-sm">Laravel, FastAPI, Node.js, PHP</p>
          </Card>
          
          <Card variant="bordered" padding="lg" className="group">
            <Icon name="Cloud" size={40} className="text-primary-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h4 className="font-semibold text-neutral-900 mb-2">Cloud & DevOps</h4>
            <p className="text-neutral-600 text-sm">GCP, AWS Lambda, Infrastructure</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection; 