import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, Compass, Sun, Globe2, Plane, Calendar } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const Serengeti = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonical = `https://reyonasafaris.com${location.pathname}`;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reyonasafaris.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://reyonasafaris.com/destinations' },
      { '@type': 'ListItem', position: 3, name: 'Serengeti National Park', item: canonical }
    ]
  };

  const handleBookSafariClick = (safariType: string) => {
    navigate(`/contact?subject=${encodeURIComponent(safariType)}`);
  };

  const handleCustomSafariClick = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  const quickFacts: {
    title: string;
    value: string;
    icon: LucideIcon;
    description: string;
  }[] = [
    {
      title: 'Park Size',
      value: '14,763 km²',
      icon: MapPin,
      description: 'Vast plains spanning northern Tanzania and part of the greater Serengeti-Mara ecosystem.'
    },
    {
      title: 'UNESCO Status',
      value: 'World Heritage Site',
      icon: Globe2,
      description: 'Recognized for outstanding biodiversity and the Great Migration since 1981.'
    },
    {
      title: 'Best Time',
      value: 'June - Oct & Jan - Mar',
      icon: Calendar,
      description: 'Dry seasons deliver dramatic river crossings and predator action.'
    },
    {
      title: 'Signature Sightings',
      value: 'Migration Herds & Big Cats',
      icon: Star,
      description: 'Follow two million wildebeest with lions, cheetahs, and leopards in pursuit.'
    }
  ];

  const highlights: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: 'Great Migration Crossings',
      description: 'Witness heart-pounding Mara River crossings as wildebeest and zebra surge past crocodiles.',
      icon: Users
    },
    {
      title: 'Predator Capital',
      description: "Home to Africa's highest densities of lions, cheetahs, and spotted hyenas along the central plains.",
      icon: Camera
    },
    {
      title: 'Diverse Regions',
      description: 'Explore the Western Corridor, remote Northern Wilderness, and Southern calving grounds in one journey.',
      icon: Compass
    },
    {
      title: 'Safari Sunrises',
      description: 'Open horizons deliver glowing dawn light, perfect for photography and balloon safaris.',
      icon: Sun
    }
  ];

  const wildlifeHighlights = [
    { name: 'Wildebeest & Zebra Herds', description: 'Over two million animals move through the plains each year', abundance: 'Exceptional' },
    { name: 'Lion Prides', description: 'Famed for large prides and fearless river-hunting behavior', abundance: 'Excellent' },
    { name: 'Cheetahs', description: 'Ideal hunting grounds across the Seronera Valley and southern short grass plains', abundance: 'Excellent' },
    { name: 'Leopards', description: 'Resident cats along riverine forests and kopjes', abundance: 'Good' },
    { name: 'Elephants & Giraffes', description: 'Year-round populations browsing acacia woodlands', abundance: 'Good' },
    { name: 'Birdlife', description: 'Over 500 recorded species including kori bustards and crowned cranes', abundance: 'Excellent' }
  ];

  const seasonalGuide = [
    {
      period: 'June - October',
      title: 'Dry Season & River Crossings',
      description: 'Prime time for dramatic Grumeti and Mara River crossings with clear skies and cool evenings.',
      weather: 'Dry days around 26°C, crisp nights near 12°C',
      wildlife: 'Migration herds concentrate near rivers; predators very active',
      tip: 'Book well ahead for Kogatende and Lamai camps during peak crossings.'
    },
    {
      period: 'November - December',
      title: 'Short Rains & Green Season',
      description: 'Fresh grasses lure herds south; skies dramatic with afternoon showers and fewer visitors.',
      weather: 'Warm afternoons with brief showers, lush landscapes',
      wildlife: 'Migratory herds move toward the southern short grass plains',
      tip: 'Great value period with vibrant scenery and plentiful calves.'
    },
    {
      period: 'January - March',
      title: 'Calving Season',
      description: 'Hundreds of thousands of calves born on the Ndutu plains, drawing intense predator concentrations.',
      weather: 'Warm with scattered showers, temperatures near 28°C',
      wildlife: 'Nursery herds and exceptional predator-prey interactions',
      tip: 'Ideal for photography safaris focused on newborn wildlife action.'
    },
    {
      period: 'April - May',
      title: 'Long Rains & Quiet Exploration',
      description: 'Lush landscapes, dramatic skies, and excellent resident wildlife viewing with few crowds.',
      weather: 'Heavier rains, emerald grasses, afternoon storms',
      wildlife: 'Resident cats, elephants, and birdlife shine without crowds',
      tip: 'Combine with Ngorongoro or Tarangire for varied ecosystems.'
    }
  ];

  const signatureExperiences = [
    {
      title: 'Hot Air Balloon Safari',
      duration: '1 morning',
      description: 'Float above the plains at sunrise for sweeping views of migrating herds and golden savannas.'
    },
    {
      title: 'Full-Day Game Drive',
      duration: '10-12 hours',
      description: 'Track the migration across multiple habitats with picnic breakfasts and riverside lunches.'
    },
    {
      title: 'Walking & Kopje Sundowners',
      duration: '2-3 hours',
      description: 'Guided walks in private concessions followed by sunset drinks atop ancient granite outcrops.'
    },
    {
      title: 'Cultural Visit',
      duration: '2 hours',
      description: 'Meet Maasai communities bordering the park to learn about traditional pastoral life.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4d/e4/8f/serengeti-national-park.jpg?w=1200&h=-1&s=1"
          alt="Serengeti savannah with wildlife"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Serengeti
          </h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-4">
            Endless Plains of Tanzania
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Follow the Great Migration across legendary savannahs teeming with predators and dramatic sunsets.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Book Serengeti Safari')}>
              Book Serengeti Safari
            </Button>
            <Button variant="outline" size="lg" onClick={handleCustomSafariClick}>
              Plan Cross-Border Safari
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                  <CardContent className="pt-8 pb-6 space-y-3">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2 text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold">{fact.title}</h3>
                    <p className="text-kenya-gold font-semibold">{fact.value}</p>
                    <p className="text-muted-foreground text-sm">{fact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Serengeti Moments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                  <CardContent className="pt-8 pb-6 space-y-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold">{highlight.title}</h3>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wildlife Highlights */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wildlife Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlifeHighlights.map((animal, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{animal.name}</CardTitle>
                    <Badge
                      className={`
                        ${animal.abundance === 'Exceptional' ? 'bg-amber-500' :
                          animal.abundance === 'Excellent' ? 'bg-green-500' :
                          animal.abundance === 'Good' ? 'bg-emerald-500' : 'bg-kenya-purple'} 
                        text-white
                      `}
                    >
                      {animal.abundance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{animal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When to Visit</h2>
          <div className="space-y-6">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-4 p-6">
                  <div>
                    <Badge className="bg-kenya-purple text-white mb-3">{season.period}</Badge>
                    <h3 className="text-xl font-bold mb-2">{season.title}</h3>
                    <p className="text-muted-foreground text-sm">{season.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Weather</h4>
                    <p className="text-sm text-muted-foreground">{season.weather}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Wildlife</h4>
                    <p className="text-sm text-muted-foreground">{season.wildlife}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Traveler Tip</h4>
                    <Badge variant="outline">{season.tip}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tailored Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signatureExperiences.map((experience, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{experience.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{experience.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Planning */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Planning Your Serengeti Journey</h2>
          <p className="text-lg text-muted-foreground">
            Combine Serengeti with Ngorongoro Crater, Tarangire National Park, or Kenya&apos;s Masai Mara for a seamless East African safari. 
            Our team arranges flights into Seronera, Kogatende, or private airstrips, plus luxury camps that move with the migration.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-kenya-purple/10 text-kenya-purple border-kenya-purple/30 px-4 py-2 flex items-center gap-2 transition-shadow hover:bg-kenya-purple/10 hover:text-kenya-purple hover:border-kenya-purple/50 hover:shadow-[0_0_20px_rgba(207,42,133,0.45)]">
              <Plane className="w-4 h-4" />
              Daily flights from Arusha & Kilimanjaro
            </Badge>
            <Badge className="bg-kenya-purple/10 text-kenya-purple border-kenya-purple/30 px-4 py-2 flex items-center gap-2 transition-shadow hover:bg-kenya-purple/10 hover:text-kenya-purple hover:border-kenya-purple/50 hover:shadow-[0_0_20px_rgba(207,42,133,0.45)]">
              <Mountain className="w-4 h-4" />
              Private concessions for off-road drives
            </Badge>
            <Badge className="bg-kenya-purple/10 text-kenya-purple border-kenya-purple/30 px-4 py-2 flex items-center gap-2 transition-shadow hover:bg-kenya-purple/10 hover:text-kenya-purple hover:border-kenya-purple/50 hover:shadow-[0_0_20px_rgba(207,42,133,0.45)]">
              <Camera className="w-4 h-4" />
              Expert photographic guides available
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready for the Serengeti?</h2>
          <p className="text-lg text-white/85">
            Let us craft a personalized itinerary that follows the migration, balances luxury with authenticity, and connects you with Tanzania&apos;s most iconic wilderness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Start Serengeti Planning')}>
              Start Planning Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={handleCustomSafariClick}>
              Build Kenya & Tanzania Circuit
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Serengeti;
