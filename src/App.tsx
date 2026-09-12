import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ServicesExplorer } from '@/components/ServicesExplorer';
import { FeaturedServices } from '@/components/FeaturedServices';
import { PricingExplorer } from '@/components/PricingExplorer';
import { NINSection } from '@/components/NINSection';
import { TrainingSection } from '@/components/TrainingSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ScrollProgress } from '@/components/ScrollProgress';
import { ServiceRequestModal } from '@/components/ServiceRequestModal';
import type { Service } from '@/data/services';

function App() {
  const [requestService, setRequestService] = useState<Service | null>(null);

  const openRequestModal = useCallback((service: Service) => {
    setRequestService(service);
  }, []);

  const closeRequestModal = useCallback(() => {
    setRequestService(null);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesExplorer />
        <FeaturedServices onRequestService={openRequestModal} />
        <PricingExplorer onRequestService={openRequestModal} />
        <NINSection />
        <TrainingSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <AnimatePresence>
        {requestService !== null && (
          <ServiceRequestModal
            key="service-modal"
            service={requestService}
            onClose={closeRequestModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
