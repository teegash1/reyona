import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, TreePine, Bird, Compass } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Tarangire = () => {
  const navigate = useNavigate();

  const quickFacts: { title: string; value: string; icon: LucideIcon; description: string }[] = [
    { title: 'Famous For', value: 'Elephant Herds', icon: Users, description: 'Dry‑season gatherings along the Tarangire River among giant baobabs.' },
    { title: 'Landscapes', value: 'Baobabs & Swamps', icon: TreePine, description: 'A mosaic of savannah, wetlands and riverine woodland ideal for wildlife.' },
    { title: 'Best Time', value: 'June – September', icon: Clock, description: 'Wildlife funnels to the river; birding excellent year‑round.' },
    { title: 'Bird Species', value: '500+ recorded', icon: Bird, description: 'From yellow‑collared lovebirds to martial eagles.' }
  ];

  const highlights = [
    { title: 'Baobab Valleys', description: 'Iconic, ancient trees framing golden sunsets across open plains.', icon: Star },
    { title: 'Quiet Game Viewing', description: 'Fewer vehicles than larger parks; intimate encounters.', icon: Camera },
    { title: 'Seasonal Swamps', description: 'Silale and Lormakau swamps draw elephants, buffalo and birds.', icon: MapPin },
    { title: 'Migration Corridors', description: 'Zebra, wildebeest and oryx move through greater Tarangire ecosystem.', icon: Compass }
  ];

  const seasonalGuide = [
    { period: 'June – October', title: 'Dry Season', description: 'Peak viewing along the river; crisp mornings and clear vistas.', tip: 'Plan full‑day drives with picnic stops near Silale Swamp.' },
    { period: 'November – March', title: 'Green Season', description: 'Lush grasses, newborns and vibrant birding with fewer visitors.', tip: 'Great time for photography and calm weather patterns.' },
    { period: 'April – May', title: 'Long Rains', description: 'Quiet, dramatic skies; some tracks muddy but wildlife still rewarding.', tip: '4x4 recommended; consider combining with Manyara.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src="https://images.squarespace-cdn.com/content/v1/54929084e4b074c56b326d39/1632894557134-63WJ93ODSDFWT6RQBHZE/View+river.jpg" alt="Tarangire baobabs and river" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Tarangire</h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-2">The Hidden Gem</p>
          <p className="text-white/90 max-w-2xl mx-auto">A serene park of baobabs, elephants and big skies—perfect for slower, intimate safaris.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="luxury" onClick={() => navigate('/contact?subject=Tarangire%20Safari')}>Book Tarangire Safari</Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFacts.map((f, i) => { const Icon = f.icon; return (
            <Card key={i} className="text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white"><Icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-kenya-gold font-semibold">{f.value}</p>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </CardContent>
            </Card>
          );})}
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Tarangire Moments</h2>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Getting There & Park Logistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Getting There & Park Logistics</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Access & Distances</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">By air:</span> Daily scheduled flights to Tarangire/ Kuro Airstrip from Arusha, Manyara and Serengeti (45–60 min). Private charters available.</p>
                <p><span className="font-semibold text-foreground">By road:</span> ~120 km/2.5–3 hrs from Arusha on good tarmac then park roads. Often combined with Manyara, Ngorongoro or Serengeti circuits.</p>
                <p><span className="font-semibold text-foreground">Best vehicle:</span> 4x4 Land Cruiser/ Land Rover with pop‑up roof; long‑range days recommended.</p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Practical Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Park hours:</span> Typically 6:00–18:00 (gate times may vary by season).</p>
                <p><span className="font-semibold text-foreground">Etiquette:</span> Keep to tracks, no feeding wildlife, drones generally prohibited in Tanzanian parks.</p>
                <p><span className="font-semibold text-foreground">Health:</span> Malaria prevention recommended; carry sun protection and sufficient water.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Where To Stay and Map sections intentionally removed per request */}

      <Footer />
    </div>
  );
};

export default Tarangire;
