/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { RatesSection } from './components/RatesSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteSimulatorModal } from './components/QuoteSimulatorModal';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { NavSection } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('inici');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Transport Nacional de Carretera');
  const [contactInitialData, setContactInitialData] = useState<{
    service?: string;
    route?: string;
    estimate?: string;
    details?: string;
  } | null>(null);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    if (section === 'inici') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  const handleSelectRouteForQuote = (routeData: { service: string; route: string; estimate: string }) => {
    setContactInitialData({
      service: routeData.service,
      route: routeData.route,
      estimate: routeData.estimate,
      details: `Sol·licitud de reserva / cotització per a la ruta: ${routeData.route}.
Modalitat: ${routeData.service}.
Bàrem orientatiu seleccionat: ${routeData.estimate}.`,
    });
    const contactElem = document.getElementById('contacte');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTransferToContact = (data: { service: string; route: string; estimate: string; details: string }) => {
    setContactInitialData(data);
    const contactElem = document.getElementById('contacte');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultationWithService = (serviceName: string) => {
    setContactInitialData({
      service: serviceName,
      details: `Sol·licitud de disponibilitat de flota per a: ${serviceName}.
Preguem confirmació de dates i temps de trànsit disponible.`,
    });
    const contactElem = document.getElementById('contacte');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070708] text-white flex flex-col font-sans selection:bg-[#E5C158] selection:text-black">
      {/* 1. BARRA DE NAVEGACIÓ SUPERIOR (NAVBAR) */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* CONTINGUT PRINCIPAL */}
      <main className="flex-1">
        {/* 2. PORTADA (HERO SECTION) */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onScrollToRates={() => handleNavigate('tarifes')}
        />

        {/* 3. CATÀLEG DE SERVEIS (TRANSPORT PER CARRETERA) */}
        <ServicesSection
          onSelectServiceForQuote={(name) => handleOpenQuote(name)}
          onOpenConsultationWithService={handleOpenConsultationWithService}
        />

        {/* 4. SECCIÓ DE TARIFES ORIENTATIVES I PREUS */}
        <RatesSection onSelectRouteForQuote={handleSelectRouteForQuote} />

        {/* 5. SECCIÓ QUI SOM */}
        <AboutSection
          onOpenConsultation={() => handleOpenConsultationWithService('Consulta General Tràfic Terrestre')}
        />

        {/* 6. SECCIÓ DE CONTACTE I SOL·LICITUD DE PRESSUPOST */}
        <ContactSection initialData={contactInitialData} />
      </main>

      {/* 7. FOOTER CORPORATIU */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* MODALS */}
      <QuoteSimulatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedService={preselectedService}
        onTransferToContact={handleTransferToContact}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
