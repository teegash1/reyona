import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SafariPackages from '@/components/SafariPackages';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
import SafariPartners from '@/components/SafariPartners';
import HomeStats from '@/components/HomeStats';
import Footer from '@/components/Footer';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Hero />
        <SafariPackages />
        <Destinations />
        <Experiences />
        <HomeStats />
        <SafariPartners />
      </main>
      <Footer />
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
