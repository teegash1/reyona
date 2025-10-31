import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Safaris from "./pages/Safaris";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
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
import DianiBeach from "./pages/destinations/DianiBeach";
import Serengeti from "./pages/destinations/Serengeti";
import Ngorongoro from "./pages/destinations/Ngorongoro";
import Tarangire from "./pages/destinations/Tarangire";
import LakeManyara from "./pages/destinations/LakeManyara";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const App = () => {

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
            <Route path="/gallery" element={<Gallery />} />
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
            <Route path="/destinations/diani-beach" element={<DianiBeach />} />
            <Route path="/destinations/serengeti" element={<Serengeti />} />
            <Route path="/destinations/ngorongoro" element={<Ngorongoro />} />
            <Route path="/destinations/tarangire" element={<Tarangire />} />
            <Route path="/destinations/lake-manyara" element={<LakeManyara />} />
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
