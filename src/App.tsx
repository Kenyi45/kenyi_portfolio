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

// Principio Single Responsibility: App solo maneja la estructura principal
// Principio Open/Closed: Extensible para nuevas secciones sin modificar el core

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Experience Section */}
        <ExperienceSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
