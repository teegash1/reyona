import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Safaris = lazy(() => import("./pages/Safaris"));
const Experiences = lazy(() => import("./pages/Experiences"));
const Gallery = lazy(() => import("./pages/Gallery"));
const CustomSafari = lazy(() => import("./pages/CustomSafari"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PopularDestinations = lazy(() => import("./pages/PopularDestinations"));
const MasaiMara = lazy(() => import("./pages/destinations/MasaiMara"));
const Amboseli = lazy(() => import("./pages/destinations/Amboseli"));
const TsavoEast = lazy(() => import("./pages/destinations/TsavoEast"));
const TsavoWest = lazy(() => import("./pages/destinations/TsavoWest"));
const LakeNakuru = lazy(() => import("./pages/destinations/LakeNakuru"));
const Samburu = lazy(() => import("./pages/destinations/Samburu"));
const DianiBeach = lazy(() => import("./pages/destinations/DianiBeach"));
const Serengeti = lazy(() => import("./pages/destinations/Serengeti"));
const Ngorongoro = lazy(() => import("./pages/destinations/Ngorongoro"));
const Tarangire = lazy(() => import("./pages/destinations/Tarangire"));
const LakeManyara = lazy(() => import("./pages/destinations/LakeManyara"));
const Zanzibar = lazy(() => import("./pages/destinations/Zanzibar"));
const SaltLickSanctuary = lazy(() => import("./pages/destinations/SaltLickSanctuary"));
const OlPejeta = lazy(() => import("./pages/destinations/OlPejeta"));
const SolioConservancy = lazy(() => import("./pages/destinations/SolioConservancy"));
const MeruNationalPark = lazy(() => import("./pages/destinations/MeruNationalPark"));
const LakeElementaita = lazy(() => import("./pages/destinations/LakeElementaita"));
const LakeBogoria = lazy(() => import("./pages/destinations/LakeBogoria"));
const LakeNaivasha = lazy(() => import("./pages/destinations/LakeNaivasha"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
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
            <Route path="/destinations/salt-lick-sanctuary" element={<SaltLickSanctuary />} />
            <Route path="/destinations/ol-pejeta" element={<OlPejeta />} />
            <Route path="/destinations/solio-conservancy" element={<SolioConservancy />} />
            <Route path="/destinations/meru-national-park" element={<MeruNationalPark />} />
            <Route path="/destinations/lake-elementaita" element={<LakeElementaita />} />
            <Route path="/destinations/lake-bogoria" element={<LakeBogoria />} />
            <Route path="/destinations/lake-naivasha" element={<LakeNaivasha />} />
            <Route path="/destinations/serengeti" element={<Serengeti />} />
            <Route path="/destinations/ngorongoro" element={<Ngorongoro />} />
            <Route path="/destinations/tarangire" element={<Tarangire />} />
            <Route path="/destinations/lake-manyara" element={<LakeManyara />} />
            <Route path="/destinations/zanzibar" element={<Zanzibar />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
