// ============================================================================
// APP
// ============================================================================

import React from 'react';
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
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50 text-neutral-800 antialiased selection:bg-primary-200 selection:text-primary-950">
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
  );
};

export default App;
