// ============================================================================
// HERO SECTION - Portfolio Landing
// ============================================================================

import React from 'react';
import { Button, Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20 pb-24"
    >
      <div className="pointer-events-none absolute inset-0 page-grid-bg opacity-80" aria-hidden />
      <div className="pointer-events-none absolute -top-40 right-[-20%] h-[420px] w-[420px] rounded-full bg-primary-500/15 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-[-30%] left-[-15%] h-[380px] w-[380px] rounded-full bg-accent-600/12 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 noise-overlay" aria-hidden />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] text-primary-400/95">
              Lima, Perú · Available for architecture-heavy builds
            </p>

            <div className="space-y-4">
              <h1 className="font-display font-bold text-secondary-50 text-[2.35rem] leading-[1.08] sm:text-5xl xl:text-6xl tracking-tight">
                Hola, soy{' '}
                <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="font-display text-xl sm:text-2xl font-medium text-secondary-200 max-w-xl leading-snug">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <p className="text-base sm:text-lg text-secondary-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

            <div className="flex flex-wrap gap-3 text-sm text-secondary-500">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary-700 bg-secondary-900/60 px-3 py-1.5 font-mono text-xs text-secondary-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                Integraciones &amp; pagos
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary-700 bg-secondary-900/60 px-3 py-1.5 font-mono text-xs text-secondary-300">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-400" aria-hidden />
                ERP · APIs · Serverless
              </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('projects')} className="justify-center">
                <Icon name="FolderOpen" size={20} className="mr-2" aria-hidden />
                Ver proyecto destacado
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/Kenyi_Ivan_Vega_Aliaga_CV_2025_6_25.pdf"
                external
                className="justify-center"
              >
                <Icon name="Download" size={20} className="mr-2" aria-hidden />
                CV PDF
              </Button>
              <Button variant="ghost" size="lg" href="mailto:kenyiva45@gmail.com" external className="justify-center">
                <Icon name="Mail" size={20} className="mr-2" aria-hidden />
                Email
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-secondary-800/80">
              <p className="text-xs font-mono uppercase tracking-wider text-secondary-500">Social</p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-secondary-700 bg-secondary-900/50 p-2.5 text-secondary-400 hover:border-primary-500/40 hover:text-primary-300 transition-colors"
                    aria-label={social.platform}
                  >
                    <Icon name={social.icon} size={18} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/15 blur-2xl opacity-70" aria-hidden />

              <div className="relative border-gradient-subtle rounded-3xl bg-secondary-900/40 p-1 shadow-large">
                <div className="rounded-[1.15rem] bg-secondary-950/90 overflow-hidden border border-secondary-800/90">
                  <div className="flex items-center gap-2 border-b border-secondary-800 px-4 py-3 bg-secondary-900/80">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
                    <span className="ml-auto font-mono text-[10px] text-secondary-500">profile.config.ts</span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col items-center sm:flex-row sm:items-start gap-8">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/30 to-accent-500/25 blur-md scale-105" aria-hidden />
                      <img
                        src="/perfil.jpeg"
                        alt={`Retrato de ${PERSONAL_INFO.name}`}
                        className="relative h-36 w-36 sm:h-40 sm:w-40 rounded-2xl object-cover ring-2 ring-primary-500/30"
                      />
                    </div>

                    <div className="flex-1 font-mono text-[11px] sm:text-xs text-left w-full space-y-3 text-secondary-400 leading-relaxed">
                      <p>
                        <span className="text-accent-400">export const</span>{' '}
                        <span className="text-primary-300">focus</span> = [
                      </p>
                      <p className="pl-4 text-secondary-300">
                        &apos;system design&apos;,
                        <br />
                        &apos;observability&apos;,
                        <br />
                        &apos;delivery full stack&apos;,
                      </p>
                      <p>
                        ] <span className="text-secondary-600">as const;</span>
                      </p>
                      <p className="pt-2 border-t border-secondary-800/80 text-secondary-500">
                        <span className="text-primary-400">{'// '}</span>
                        TypeScript · Laravel · Nest · Python · GCP/AWS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-12">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-secondary-500 hover:text-primary-300 transition-colors rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 px-4 py-2"
            aria-label="Ir a la sección Acerca de"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <Icon name="ChevronDown" size={22} className="motion-safe:animate-float" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
