import React from 'react';
import { Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';
import { NAVIGATION_ITEMS } from '../../constants/navigation';
import { useNavigation } from '../../contexts/NavigationContext';

const initials = PERSONAL_INFO.name
  .split(' ')
  .map((n) => n[0])
  .join('');

const Footer: React.FC = () => {
  const { navigateToSection } = useNavigation();
  const currentYear = new Date().getFullYear();
  const footerLinks = NAVIGATION_ITEMS.filter((item) => item.id !== 'home');

  return (
    <footer className="relative border-t border-ink-line bg-ink-raised text-neutral-300">
      <div className="container-prose py-14 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary-500/35 bg-ink-base font-mono text-xs font-semibold text-primary-300">
                {initials}
              </span>
              <div>
                <p className="font-display font-semibold text-neutral-50">{PERSONAL_INFO.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-primary-400/90">Full stack · Arquitectura</p>
              </div>
            </div>
            <p className="text-neutral-400 leading-relaxed text-sm mb-6 max-w-sm">
              Sistemas integrados, contratos de API y entregas mantenibles.
            </p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-ink-line bg-ink-base/60 p-2.5 text-neutral-400 hover:border-primary-500/50 hover:text-primary-300 transition-colors duration-smooth"
                  aria-label={social.platform}
                >
                  <Icon name={social.icon} size={18} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-neutral-50 mb-4">Mapa</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateToSection(item.id);
                    }}
                    className="text-neutral-400 hover:text-primary-300 transition-colors duration-smooth"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-neutral-50 mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-primary-300 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <span>+51 {PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} className="text-primary-400 shrink-0" aria-hidden />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ink-line pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.</p>
          <p className="flex items-center gap-2">
            <span>React</span>
            <span className="text-primary-600">·</span>
            <span>TypeScript</span>
            <span className="text-primary-600">·</span>
            <span>Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
