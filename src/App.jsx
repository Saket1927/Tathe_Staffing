import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ClientsCarousel from './components/ClientsCarousel';
import SolutionsSection from './components/SolutionsSection';
import WorkforceBanner from './components/WorkforceBanner';
import IndustriesSection from './components/IndustriesSection';
import AboutSection from './components/AboutSection';
import TechEnablement from './components/TechEnablement';
import ApprenticeshipSection from './components/ApprenticeshipSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import HireTalentModal from './components/HireTalentModal';
import JobSeekerModal from './components/JobSeekerModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import LegalModal from './components/LegalModal';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [hireModalOpen, setHireModalOpen] = useState(false);
  const [initialHireService, setInitialHireService] = useState('');
  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);

  const handleOpenHireModal = (serviceName = '') => {
    setInitialHireService(serviceName || 'Professional Staffing');
    setHireModalOpen(true);
  };

  const handleOpenJobModal = () => {
    setJobModalOpen(true);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  const handleOpenLegalModal = (type) => {
    setLegalModalType(type);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--background-primary)] font-sans antialiased text-[var(--text-primary)] selection:bg-[var(--accent-primary)]/30 selection:text-white transition-colors duration-300 overflow-x-hidden w-full">
      {/* 1. Header: Simplified, Spacious, Mobile logo + hamburger only */}
      <Header 
        onOpenHireModal={() => handleOpenHireModal()} 
        onOpenJobModal={handleOpenJobModal}
      />

      <main className="overflow-x-hidden w-full">
        {/* 2. Hero: Dark Navy / Cinematic with "Powering People. Building Possibilities." */}
        <Hero 
          onOpenHireModal={() => handleOpenHireModal()} 
          onOpenJobModal={handleOpenJobModal}
        />

        {/* 3. Key Statistics: ONE Unified Horizontal Section with subtle dividers & green icons */}
        <StatsSection />

        {/* 4. First-Scroll Priority: Trusted by Leading Organisations (ALL genuine client logos) */}
        <ClientsCarousel />

        {/* 5. Dark Workforce Solutions: 6 Staffing Cards, Sourcing, HR Consulting */}
        <SolutionsSection 
          onOpenHireModal={(service) => handleOpenHireModal(service)}
          onSelectService={handleSelectService}
        />

        {/* 6. Full-Width Real Photography Section: "Stronger Businesses. Brighter Futures." */}
        <WorkforceBanner 
          onOpenHireModal={() => handleOpenHireModal()} 
        />

        {/* 7. Light Industries We Serve: 9 Sectors (Simplified cards with Explore & Hire CTAs) */}
        <IndustriesSection 
          onOpenHireModal={(industry) => handleOpenHireModal(`Industry Staffing: ${industry}`)} 
        />

        {/* 8. About Section: Corporate profile, Nakshatra Campus Pvt Ltd, Values */}
        <AboutSection 
          onOpenHireModal={() => handleOpenHireModal()} 
        />

        {/* 9. Dark Technology & AI Section: ATS, CRM, screening, automated payroll */}
        <TechEnablement 
          onOpenHireModal={(service) => handleOpenHireModal(service)}
        />

        {/* 10. Light Skilling & Apprenticeships: NAPS, NATS, WILP, 500+ Centres */}
        <ApprenticeshipSection 
          onOpenHireModal={(prog) => handleOpenHireModal(prog)}
          onOpenJobModal={handleOpenJobModal}
        />

        {/* 11. Authentic Testimonials: Genuine client & candidate feedback with 5 stars */}
        <Testimonials />

        {/* 12. Business CTA & Contact Section: Direct Kalyan address, phones, inquiry form */}
        <ContactSection 
          onOpenHireModal={() => handleOpenHireModal()} 
        />
      </main>

      {/* Global Footer with complete links & legal attribution */}
      <Footer 
        onOpenHireModal={() => handleOpenHireModal()}
        onOpenJobModal={handleOpenJobModal}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Interactive Modals */}
      <HireTalentModal 
        isOpen={hireModalOpen} 
        onClose={() => setHireModalOpen(false)}
        initialService={initialHireService}
      />

      <JobSeekerModal 
        isOpen={jobModalOpen} 
        onClose={() => setJobModalOpen(false)}
      />

      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={(serviceTitle) => handleOpenHireModal(serviceTitle)}
      />

      <LegalModal 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
    </ThemeProvider>
  );
}
