// ============================================================================
// MAIN APP COMPONENT - Portfolio Application
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
  ContactSection
} from './components/sections';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-950 text-secondary-300 antialiased selection:bg-primary-900 selection:text-primary-100">
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
