import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Camera, Clock, Star, Thermometer, Droplets } from 'lucide-react';

const MasaiMara = () => {
  const highlights = [
    {
      title: "The Great Migration",
      description: "Witness over 2 million wildebeest and zebra cross the Mara River between July and October.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Big Five Safari",
      description: "Home to lion, leopard, elephant, buffalo, and rhino in their natural habitat.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      title: "Maasai Culture",
      description: "Visit authentic Maasai villages and learn about traditional pastoral lifestyle.",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      title: "Hot Air Balloon Safari",
      description: "Soar above the savanna at sunrise for breathtaking aerial views of wildlife.",
      icon: <Calendar className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Lions", description: "Over 850 lions, including the famous black-maned males", abundance: "Excellent" },
    { name: "Cheetahs", description: "Fastest land animal, perfect for photography", abundance: "Good" },
    { name: "Elephants", description: "Large herds roaming the open grasslands", abundance: "Good" },
    { name: "Hippos", description: "Hundreds living in Mara River pools", abundance: "Excellent" },
    { name: "Crocodiles", description: "Nile crocodiles waiting for migration crossings", abundance: "Good" },
    { name: "Leopards", description: "Elusive big cats in riverine forests", abundance: "Fair" }
  ];

  const seasonalGuide = [
    {
      period: "July - October",
      title: "Great Migration Season",
      description: "Peak time for migration river crossings. Highest wildlife density but also most crowded.",
      weather: "Dry season, warm days (25°C), cool nights (12°C)",
      wildlife: "Exceptional - Migration herds present",
      crowds: "High",
      pricing: "Peak rates"
    },
    {
      period: "November - March",
      title: "Short Dry Season",
      description: "Excellent game viewing with fewer crowds. Perfect weather and good value.",
      weather: "Warm and dry (26°C), short rains possible",
      wildlife: "Excellent - Resident wildlife",
      crowds: "Moderate",
      pricing: "High season rates"
    },
    {
      period: "April - June",
      title: "Long Rains",
      description: "Lush green landscapes, great bird watching, lowest prices but muddy roads.",
      weather: "Rainy season, warm (24°C), high humidity",
      wildlife: "Good - Birth season for many species",
      crowds: "Low",
      pricing: "Low season rates"
    }
  ];

  const accommodations = [
    {
      name: "Angama Mara",
      type: "Ultra-Luxury Tented Camp",
      location: "Oloololo Escarpment",
      highlights: ["Panoramic views", "Luxury tents", "World-class dining"],
      price: "$1,200+ per night"
    },
    {
      name: "Sarova Mara Game Camp",
      type: "Mid-Range Lodge",
      location: "Central Mara",
      highlights: ["Prime location", "Traditional safari experience", "Good value"],
      price: "$350-500 per night"
    },
    {
      name: "Mara Explorer Camp",
      type: "Mobile Camping",
      location: "Follows migration",
      highlights: ["Migration access", "Authentic camping", "Budget-friendly"],
      price: "$150-250 per night"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-gold/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="/src/assets/hero-safari.jpg" 
          alt="Masai Mara landscape"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Masai Mara
          </h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-4">
            The Greatest Wildlife Show on Earth
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Home to the Great Migration and Africa's highest concentration of big cats
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Plan Your Visit
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Size</h3>
              <p className="text-muted-foreground">1,510 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Best Group Size</h3>
              <p className="text-muted-foreground">2-6 people</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Minimum Stay</h3>
              <p className="text-muted-foreground">3 days</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Best Time</h3>
              <p className="text-muted-foreground">July - October</p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Visit Masai Mara</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Guide */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wildlife Spotting Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlife.map((animal, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{animal.name}</CardTitle>
                    <Badge 
                      className={`
                        ${animal.abundance === 'Excellent' ? 'bg-green-500' : 
                          animal.abundance === 'Good' ? 'bg-yellow-500' : 'bg-orange-500'} 
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
          <div className="space-y-8">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  <div>
                    <Badge className="bg-kenya-purple text-white mb-3">{season.period}</Badge>
                    <h3 className="text-2xl font-bold mb-3">{season.title}</h3>
                    <p className="text-muted-foreground">{season.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Weather</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.weather}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Camera className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Wildlife</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.wildlife}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Crowds</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.crowds}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Pricing</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.pricing}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Where to Stay</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{accommodation.name}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-kenya-magenta text-white">{accommodation.type}</Badge>
                    <span className="text-sm text-muted-foreground">{accommodation.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {accommodation.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-kenya-gold">{accommodation.price}</span>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Masai Mara?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let our expert guides show you the wonders of Kenya's most famous reserve
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="bg-white text-kenya-purple hover:bg-white/90">
              Book Masai Mara Safari
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Combine with Other Parks
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasaiMara;