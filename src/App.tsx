// ============================================================================
// APP
// ============================================================================

import React from 'react';
import { NavigationProvider } from './contexts/NavigationContext';
import { Header, Footer } from './components/layout';
import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
} from './components/sections';

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-ink-base text-neutral-50 antialiased">
        <Header />

        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </NavigationProvider>
  );
};

export default App;
