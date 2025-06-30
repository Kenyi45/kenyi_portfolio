import React from 'react';
import { Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {PERSONAL_INFO.name.split(' ').map(name => name[0]).join('')}
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Desarrollador Full Stack especializado en crear soluciones tecnológicas 
              innovadoras y escalables.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-600 transition-colors group"
                >
                  <Icon 
                    name={social.icon} 
                    size={20} 
                    className="text-neutral-400 group-hover:text-white transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#skills" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#experience" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#projects" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center text-neutral-400">
                <Icon name="Mail" size={16} className="mr-3 text-primary-400" />
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center text-neutral-400">
                <Icon name="Phone" size={16} className="mr-3 text-primary-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center text-neutral-400">
                <Icon name="MapPin" size={16} className="mr-3 text-primary-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-neutral-400 text-sm mb-4 md:mb-0">
              © {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-neutral-400 text-sm">
              <span>Hecho con</span>
              <Icon name="Heart" size={16} className="mx-2 text-red-500" />
              <span>y React + TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 