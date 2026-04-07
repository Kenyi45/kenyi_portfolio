// ============================================================================
// HERO — layout responsive 12 cols, tipografía fluida, mínimo ruido visual
// ============================================================================

import React from 'react';
import { Button, Icon } from '../ui';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants/portfolio-data';
import { useNavigation } from '../../contexts/NavigationContext';

const HeroSection: React.FC = () => {
  const { navigateToSection } = useNavigation();

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-20 pb-16 md:pb-20 overflow-hidden scroll-mt-20"
    >
      <div className="pointer-events-none absolute inset-0 page-grid-bg opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 right-[-25%] h-[min(28rem,50vw)] w-[min(28rem,50vw)] rounded-full bg-primary-300/25 blur-[100px] motion-safe:animate-pulse"
        style={{ animationDuration: '6s' }}
        aria-hidden
      />

      <div className="container-prose w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14 items-center">
          <div className="lg:col-span-7 space-y-[var(--space-block)] motion-safe:animate-fade-in">
            <p className="font-mono text-[length:var(--text-xs)] sm:text-[length:var(--text-sm)] uppercase tracking-[0.2em] text-primary-700">
              Lima, Perú · Full stack &amp; arquitectura
            </p>

            <div className="space-y-4">
              <h1 className="font-display text-fluid-display font-bold text-neutral-900 tracking-tight">
                Hola, soy <span className="text-gradient">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="font-display text-fluid-h2 font-medium text-neutral-800 max-w-xl !text-[length:var(--text-xl)] !leading-snug">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <p className="text-fluid-lead text-neutral-600 max-w-2xl">{PERSONAL_INFO.summary}</p>

            <div className="flex flex-wrap gap-3 sm:gap-phi">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-white/80 px-3 py-1.5 text-[length:var(--text-sm)] text-neutral-700 shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden />
                Integraciones &amp; pagos
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-white/80 px-3 py-1.5 text-[length:var(--text-sm)] text-neutral-700 shadow-sm backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-600" aria-hidden />
                ERP · APIs · Serverless
              </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
              <Button variant="primary" size="lg" onClick={() => navigateToSection('projects')} className="justify-center">
                <Icon name="FolderOpen" size={20} className="mr-2" aria-hidden />
                Proyectos
              </Button>
              <Button variant="outline" size="lg" href="/Kenyi_Ivan_Vega_Aliaga_CV_2025_6_25.pdf" external className="justify-center">
                <Icon name="Download" size={20} className="mr-2" aria-hidden />
                CV PDF
              </Button>
              <Button variant="ghost" size="lg" href="mailto:kenyiva45@gmail.com" external className="justify-center">
                <Icon name="Mail" size={20} className="mr-2" aria-hidden />
                Email
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/90">
              <p className="text-[length:var(--text-xs)] font-mono uppercase tracking-wider text-neutral-500">Social</p>
              <div className="flex gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-neutral-200 bg-white p-2.5 text-neutral-600 hover:border-primary-300 hover:text-primary-700 transition-all duration-smooth ease-out-expo"
                    aria-label={social.platform}
                  >
                    <Icon name={social.icon} size={18} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 @container">
            <div className="relative mx-auto max-w-md lg:max-w-none motion-safe:animate-slide-up [animation-delay:80ms] [animation-fill-mode:both]">
              <div className="rounded-3xl border border-neutral-200/90 bg-white shadow-medium overflow-hidden transition-shadow duration-smooth hover:shadow-lg">
                <div className="flex items-center gap-2 border-b border-neutral-100 px-4 py-3 bg-neutral-50/80">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/90" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" aria-hidden />
                  <span className="ml-auto font-mono text-[10px] text-neutral-500">profile.config.ts</span>
                </div>

                <div className="p-6 @md:p-8 flex flex-col @md:flex-row @md:items-start gap-8">
                  <div className="relative shrink-0 mx-auto @md:mx-0">
                    <img
                      src="/perfil.jpeg"
                      alt={`Retrato de ${PERSONAL_INFO.name}`}
                      className="h-36 w-36 @md:h-40 @md:w-40 rounded-2xl object-cover ring-2 ring-primary-200 shadow-soft"
                    />
                  </div>

                  <div className="flex-1 font-mono text-[11px] @md:text-xs text-left w-full space-y-3 text-neutral-600 leading-relaxed min-w-0">
                    <p>
                      <span className="text-accent-700">export const</span> <span className="text-primary-700">focus</span> = [
                    </p>
                    <p className="pl-4 text-neutral-700">
                      &apos;system design&apos;,
                      <br />
                      &apos;observability&apos;,
                      <br />
                      &apos;delivery full stack&apos;,
                    </p>
                    <p>
                      ] <span className="text-neutral-500">as const;</span>
                    </p>
                    <p className="pt-2 border-t border-neutral-100 text-neutral-500">
                      <span className="text-primary-600">{'// '}</span>
                      TypeScript · Laravel · Nest · Python · GCP/AWS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-14 lg:mt-12">
          <button
            type="button"
            onClick={() => navigateToSection('about')}
            className="flex flex-col items-center gap-1 text-neutral-500 hover:text-primary-700 transition-colors duration-smooth rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 px-4 py-2"
            aria-label="Ir a la sección Acerca de"
          >
            <span className="text-[length:var(--text-xs)] font-mono uppercase tracking-widest">Scroll</span>
            <Icon name="ChevronDown" size={22} className="motion-safe:animate-float" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
