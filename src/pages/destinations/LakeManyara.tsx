import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Bird, TreePine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LakeManyara = () => {
  const navigate = useNavigate();

  const facts: { title: string; value: string; icon: LucideIcon; description: string }[] = [
    { title: 'Signature', value: 'Tree‑Climbing Lions', icon: Star, description: 'One of the few places where lions regularly rest in trees.' },
    { title: 'Birdlife', value: '390+ species', icon: Bird, description: 'Flamingo flocks on the soda lake plus raptors and forest species.' },
    { title: 'Habitats', value: 'Forest • Floodplain • Lake', icon: TreePine, description: 'Groundwater forests give way to open plains and lake shore.' },
    { title: 'Best Time', value: 'Jun–Sep • Nov–Mar (birds)', icon: Clock, description: 'Dry season for wildlife visibility; wet for lush scenery and migrants.' }
  ];

  const highlights = [
    { title: 'Lake‑Edge Flamingos', description: 'Vast pink flocks create painterly scenes along the alkaline shore.', icon: Bird },
    { title: 'Forest Drives', description: 'Fig and mahogany forests shelter elephants, baboons and turacos.', icon: TreePine },
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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lake_Manyara_Wildlife.jpg/960px-Lake_Manyara_Wildlife.jpg" alt="Lake Manyara" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 78%' }} />
        <div className="absolute inset-0 bg-black/60" />
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

      {/* Wildlife Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wildlife Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { name: 'Tree‑Climbing Lions', note: 'Frequently seen resting in acacia and fig trees along the lake edge.' },
              { name: 'Elephants & Baboons', note: 'Large elephant families and impressively sized baboon troops in groundwater forest.' },
              { name: 'Hippos', note: 'Hippo pools near the lakeshore; best viewed in cooler hours.' },
              { name: 'Flamingos', note: 'Seasonal flocks paint the alkaline waters pink depending on water levels.' },
              { name: 'Birdlife (390+)', note: 'Pelicans, storks, raptors and forest species like turacos and hornbills.' },
              { name: 'Giraffe, Zebra, Buffalo', note: 'Common across floodplains south of Msasa River.' }
            ].map((w, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{w.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{w.note}</p>
                </CardContent>
              </Card>
            ))}
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

      {/* Where To Stay */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Where To Stay</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { tier: 'Luxury', name: 'andBeyond Manyara Tree Lodge', blurb: 'Stylish stilted suites deep in the groundwater forest; canopy‑level wildlife viewing.', img: 'https://lh3.googleusercontent.com/p/AF1QipMAh5aQM0kJFZeHXWCvsQC9hqun6yZymyvDkFVE=s1360-w1360-h1020-rw' },
              { tier: 'Mid‑Range', name: 'Manyara Serena Lodge', blurb: 'Ridge‑top property with sweeping views across the lake and escarpment.', img: 'https://lh3.googleusercontent.com/p/AF1QipMRCxzh3sbD58RKnADZVqCynPTwkNp46BtrvZJh=s1360-w1360-h1020-rw' },
              { tier: 'Tented Camp', name: 'Lake Manyara Tortilis Camp', blurb: 'Tented camp close to the park with quick access to the lakeshore and forest drives.', img: 'https://www.tortiliscamps.com/wp-content/uploads/2021/11/comfortable-tent-tortilis-camps.jpg' }
            ].map((l, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={l.img} 
                    alt={l.name} 
                    className="w-full h-full object-cover"
                    style={l.name === 'Manyara Serena Lodge' ? { objectPosition: 'center 100%' } : undefined}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <CardHeader>
                  <Badge className="bg-kenya-gold text-black w-fit">{l.tier}</Badge>
                  <CardTitle className="text-lg">{l.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{l.blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting There & Map */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Getting There & Map</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-luxury transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Travel Logistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">By air:</span> Daily flights from Arusha to Lake Manyara Airstrip (~30 mins) with easy road transfers to lodges.</p>
                <p><span className="font-semibold text-foreground">By road:</span> ~125 km/2–3 hrs from Arusha on good tarmac; often combined with Tarangire, Ngorongoro and Serengeti.</p>
                <p><span className="font-semibold text-foreground">Ideal vehicle:</span> 4x4 with pop‑up roof. Forest and floodplain tracks benefit from higher clearance.</p>
              </CardContent>
            </Card>
            <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                title="Lake Manyara Map"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Lake+Manyara+National+Park,+Tanzania&t=k&z=10&hl=en&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Experiences */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Top Experiences</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[ 
              { title: 'Lake‑Edge Game Drive', duration: 'Half to full day', desc: 'Work forest tracks, floodplains and hot springs for diverse sightings.' },
              { title: 'Canopy Walk (where available)', duration: '1 hour', desc: 'A unique treetop perspective of the groundwater forest.' },
              { title: 'Birding Circuit', duration: 'Half day', desc: 'Focus on flamingos, pelicans and raptors with a specialist guide.' }
            ].map((e, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p className="text-kenya-gold font-medium mb-1">{e.duration}</p>
                  <p>{e.desc}</p>
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
