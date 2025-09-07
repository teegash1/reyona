import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Safaris from "./pages/Safaris";
import Experiences from "./pages/Experiences";
import Accommodations from "./pages/Accommodations";
import CustomSafari from "./pages/CustomSafari";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PopularDestinations from "./pages/PopularDestinations";
import MasaiMara from "./pages/destinations/MasaiMara";
import Amboseli from "./pages/destinations/Amboseli";
import TsavoEast from "./pages/destinations/TsavoEast";
import TsavoWest from "./pages/destinations/TsavoWest";
import LakeNakuru from "./pages/destinations/LakeNakuru";
import Samburu from "./pages/destinations/Samburu";
import MountKenya from "./pages/destinations/MountKenya";
import DianiBeach from "./pages/destinations/DianiBeach";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if the app is running as an installed PWA
    const isPWA = () => {
      // Check for standalone display mode (most reliable)
      if (window.matchMedia('(display-mode: standalone)').matches) {
        return true;
      }
      
      // Check for iOS Safari standalone mode
      if ((window.navigator as any).standalone === true) {
        return true;
      }
      
      // Check for Android app referrer
      if (document.referrer.includes('android-app://')) {
        return true;
      }
      
      // Check if launched from home screen (additional check)
      if (window.matchMedia('(display-mode: fullscreen)').matches && 
          !window.matchMedia('(display-mode: browser)').matches) {
        return true;
      }
      
      return false;
    };
    
    if (isPWA()) {
      // Check if splash screen has been shown before in this session for PWA
      const splashShown = sessionStorage.getItem('pwaSplashShown');
      if (!splashShown) {
        setShowSplash(true);
      }
    }
    
    // Debug mode: Uncomment the line below to test splash screen in browser
    // setShowSplash(true);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('pwaSplashShown', 'true');
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/safaris" element={<Safaris />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/custom-safari" element={<CustomSafari />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<PopularDestinations />} />
            <Route path="/destinations/masai-mara" element={<MasaiMara />} />
            <Route path="/destinations/amboseli" element={<Amboseli />} />
            <Route path="/destinations/tsavo-east" element={<TsavoEast />} />
            <Route path="/destinations/tsavo-west" element={<TsavoWest />} />
            <Route path="/destinations/lake-nakuru" element={<LakeNakuru />} />
            <Route path="/destinations/samburu" element={<Samburu />} />
            <Route path="/destinations/mount-kenya" element={<MountKenya />} />
            <Route path="/destinations/diani-beach" element={<DianiBeach />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
