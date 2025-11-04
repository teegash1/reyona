import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SafariPackages from '@/components/SafariPackages';
import Destinations from '@/components/Destinations';
import Experiences from '@/components/Experiences';
// import SafariPartners from '@/components/SafariPartners';
import HomeStats from '@/components/HomeStats';
import Footer from '@/components/Footer';
import PWAInstallPrompt from '@/components/PWAInstallPrompt';

const Index = () => {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Helmet>
        <title>Reyona Safaris | Premium Kenya & Tanzania Safaris</title>
        <meta name="description" content="Experience the magic of Kenya and Tanzania with expertly crafted safaris, private 4x4 game drives, luxury lodges, and cultural immersion." />
        <link rel="canonical" href="https://reyonasafaris.com/" />
        <meta property="og:title" content="Reyona Safaris | Premium Kenya & Tanzania Safaris" />
        <meta property="og:description" content="Expertly crafted safaris, private 4x4 drives, and luxury stays across Kenya & Tanzania." />
      </Helmet>
      <Header />
      <main className="w-full">
        <Hero />
        <SafariPackages />
        <Destinations />
        <Experiences />
        <HomeStats />
        {/* <SafariPartners /> */}
      </main>
      <Footer />
      <PWAInstallPrompt />
    </div>
  );
};

export default Index;
import { Helmet } from 'react-helmet-async';
