import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SocialProof } from './components/SocialProof';
import { WaitlistCTA } from './components/WaitlistCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0D0C0B' }}>
      <Navigation />
      <Hero />
      <PainSection />
      <FeaturesSection />
      <SocialProof />
      <WaitlistCTA />
      <Footer />
    </div>
  );
}
