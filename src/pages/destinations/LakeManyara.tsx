import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Bird, Trees } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LakeManyara = () => {
  const navigate = useNavigate();

  const facts: { title: string; value: string; icon: LucideIcon; description: string }[] = [
    { title: 'Signature', value: 'Tree‑Climbing Lions', icon: Star, description: 'One of the few places where lions regularly rest in trees.' },
    { title: 'Birdlife', value: '390+ species', icon: Bird, description: 'Flamingo flocks on the soda lake plus raptors and forest species.' },
    { title: 'Habitats', value: 'Forest • Floodplain • Lake', icon: Trees, description: 'Groundwater forests give way to open plains and lake shore.' },
    { title: 'Best Time', value: 'Jun–Sep • Nov–Mar (birds)', icon: Clock, description: 'Dry season for wildlife visibility; wet for lush scenery and migrants.' }
  ];

  const highlights = [
    { title: 'Lake‑Edge Flamingos', description: 'Vast pink flocks create painterly scenes along the alkaline shore.', icon: Bird },
    { title: 'Forest Drives', description: 'Fig and mahogany forests shelter elephants, baboons and turacos.', icon: Trees },
    { title: 'Rift Valley Backdrop', description: 'The dramatic escarpment towers above the lakeshore habitats.', icon: MapPin },
    { title: 'Canopy Walk (select areas)', description: 'Aerial perspectives of forest life on suspended walkways.', icon: Camera }
  ];

  const seasons = [
    { period: 'June – September', title: 'Dry Season', description: 'Easier sightings along open floodplains; comfortable temperatures.' },
    { period: 'November – March', title: 'Green & Migratory Birds', description: 'Lush greenery, dramatic skies and peak bird diversity.' },
    { period: 'April – May', title: 'Long Rains', description: 'Quiet park with photogenic cloudscapes; occasional road closures.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lake_Manyara_Wildlife.jpg/960px-Lake_Manyara_Wildlife.jpg" alt="Lake Manyara" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Lake Manyara</h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-2">A Colorful Oasis</p>
          <p className="text-white/90 max-w-2xl mx-auto">Compact yet incredibly diverse—forests, floodplains and soda lake teeming with flamingos and forest elephants.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="luxury" onClick={() => navigate('/contact?subject=Lake%20Manyara%20Safari')}>Book Lake Manyara Safari</Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((f, i) => { const Icon = f.icon; return (
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Manyara Moments</h2>
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

      {/* Seasons */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {seasons.map((s, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-kenya-gold text-black w-fit">{s.period}</Badge>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{s.description}</p>
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

export default LakeManyara;
