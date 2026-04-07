import React from 'react';
import { Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';

const initials = PERSONAL_INFO.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-secondary-800 bg-secondary-950">
      <div className="pointer-events-none absolute inset-0 page-grid-bg opacity-40" aria-hidden />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/35 bg-secondary-900 font-mono text-sm font-semibold text-primary-300">
                {initials}
              </span>
              <div>
                <p className="font-display font-semibold text-secondary-100">{PERSONAL_INFO.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary-400/90">Full stack · Arquitectura</p>
              </div>
            </div>
            <p className="text-secondary-400 leading-relaxed text-sm mb-6 max-w-sm">
              Portafolio enfocado en sistemas integrados, contratos de API y soluciones mantenibles.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-secondary-700 bg-secondary-900/60 p-2.5 text-secondary-400 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                  aria-label={social.platform}
                >
                  <Icon name={social.icon} size={18} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-100 mb-4">Mapa</h4>
            <ul className="space-y-2 text-sm">
              {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((id) => {
                const labels: Record<string, string> = {
                  about: 'Acerca de',
                  skills: 'Stack',
                  experience: 'Experiencia',
                  projects: 'Proyectos',
                  education: 'Educación',
                  contact: 'Contacto',
                };
                return (
                  <li key={id}>
                    <a href={`#${id}`} className="text-secondary-400 hover:text-primary-300 transition-colors">
                      {labels[id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-secondary-100 mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-secondary-400">
                <Icon name="Mail" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-300 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <Icon name="Phone" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <span>+51 {PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary-400">
                <Icon name="MapPin" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>React</span>
            <span className="text-secondary-700">·</span>
            <span>TypeScript</span>
            <span className="text-secondary-700">·</span>
            <span>Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
