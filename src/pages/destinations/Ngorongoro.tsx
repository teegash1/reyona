import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, Sun, Bird, Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Ngorongoro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonical = `https://reyonasafaris.com${location.pathname}`;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reyonasafaris.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://reyonasafaris.com/destinations' },
      { '@type': 'ListItem', position: 3, name: 'Ngorongoro Conservation Area', item: canonical }
    ]
  };

  const quickFacts: { title: string; value: string; icon: LucideIcon; description: string }[] = [
    { title: 'UNESCO Status', value: 'World Heritage Site', icon: Star, description: 'Protects wildlife, landscapes and Maasai culture in a unique multiple‑use area.' },
    { title: 'Crater Size', value: '≈ 260 km² floor', icon: Mountain, description: 'World’s largest intact volcanic caldera with permanent water sources.' },
    { title: 'Best Time', value: 'Jun–Sep; Nov–Dec', icon: Sun, description: 'Dry season for dense wildlife; post‑rains for emerald scenery & birding.' },
    { title: 'Signature Sightings', value: 'Black Rhino & Big Cats', icon: Camera, description: 'Excellent year‑round predator and endangered black rhino viewing.' }
  ];

  const highlights: { title: string; description: string; icon: LucideIcon }[] = [
    { title: 'Crater Floor Game Drives', description: 'A self‑contained ecosystem with hippo pools, fever trees and open grasslands.', icon: MapPin },
    { title: 'Rim Viewpoints', description: 'Panoramic vistas from 2,200–2,400 m elevations ring the caldera.', icon: Mountain },
    { title: 'Cultural Encounters', description: 'Meet Maasai communities living traditionally on the conservation lands.', icon: Users },
    { title: 'Birdlife Diversity', description: 'Soda lakes attract flamingos; montane forests host raptors and turacos.', icon: Bird }
  ];

  const seasonalGuide = [
    { period: 'June – September', title: 'Dry Season', description: 'Crisp mornings, clear visibility and wildlife clustering near permanent water.', tip: 'Great for rhino and predator sightings; cool on the rim—pack layers.' },
    { period: 'November – December', title: 'Short Rains', description: 'Fresh grasses and dramatic skies with fewer visitors.', tip: 'Birding peaks; landscapes turn emerald—photographers’ favorite.' },
    { period: 'January – March', title: 'Green Calving Period (Serengeti nearby)', description: 'Pair Ngorongoro with Ndutu for calving herds and predators.', tip: 'Base on the crater rim; day‑trip to Ndutu plains.' },
    { period: 'April – May', title: 'Long Rains', description: 'Quiet, lush and excellent value; some tracks may be muddy.', tip: '4x4 essential; carry rain covers for cameras.' }
  ];

  const experiences = [
    { title: 'Full‑Day Crater Descent', duration: '6–8 hours', description: 'Maximize sightings from Lerai Forest to Hippo Pools with picnic lunch.' },
    { title: 'Empakai & Olmoti Hikes', duration: 'Half day', description: 'Guided rim walks to lesser‑known crater lakes and volcanic features.' },
    { title: 'Maasai Boma Visit', duration: '1–2 hours', description: 'Learn about beadwork, herding and age‑old pastoral traditions.' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src="https://www.tripsavvy.com/thmb/s33VPdbJrrspXYixd6ByvK3B2No=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-148679836-5b03d89030371300373c5135.jpg" alt="Ngorongoro Crater" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Ngorongoro</h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-2">Nature’s Masterpiece</p>
          <p className="text-white/90 max-w-2xl mx-auto">A geological wonder sheltering an extraordinary density of wildlife within the world’s largest intact volcanic caldera.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="luxury" onClick={() => navigate('/contact?subject=Ngorongoro%20Safari')}>Book Ngorongoro Safari</Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((f, i) => {
            const Icon = f.icon; return (
              <Card key={i} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6 space-y-3">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white"><Icon className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  <p className="text-kenya-gold font-semibold">{f.value}</p>
                  <p className="text-muted-foreground text-sm">{f.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Ngorongoro Moments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => { const Icon = h.icon; return (
              <Card key={i} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white"><Icon className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </CardContent>
              </Card>
            );})}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalGuide.map((s, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-kenya-gold text-black w-fit">{s.period}</Badge>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>{s.description}</p>
                  <p className="text-foreground"><span className="font-semibold">Tip:</span> {s.tip}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Top Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((e, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="text-kenya-gold font-medium mb-1">{e.duration}</p>
                  <p>{e.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ngorongoro;
