import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Camera, Clock, Star, Mountain, Trees } from 'lucide-react';

const Amboseli = () => {
  const highlights = [
    {
      title: "Elephant Paradise",
      description: "Home to over 1,600 elephants with some of the largest tusks in Africa.",
      icon: <Trees className="w-6 h-6" />
    },
    {
      title: "Kilimanjaro Views",
      description: "Breathtaking views of Mount Kilimanjaro, Africa's highest peak.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "Maasai Culture",
      description: "Authentic cultural experiences with the Maasai people.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Photography Haven",
      description: "Perfect for photography with dramatic landscapes and wildlife.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "African Elephants", description: "Large herds with impressive tusks", abundance: "Excellent" },
    { name: "Lions", description: "Several prides throughout the park", abundance: "Good" },
    { name: "Cheetahs", description: "Open plains perfect for cheetah hunting", abundance: "Good" },
    { name: "Buffalo", description: "Large herds in swamp areas", abundance: "Excellent" },
    { name: "Zebras", description: "Common plains zebra", abundance: "Excellent" },
    { name: "Wildebeest", description: "Resident population year-round", abundance: "Good" }
  ];

  const seasonalGuide = [
    {
      period: "June - October",
      title: "Dry Season",
      description: "Best wildlife viewing as animals concentrate around water sources. Clear mountain views.",
      weather: "Dry and sunny, 25°C days, 15°C nights",
      wildlife: "Excellent - Animals at water sources",
      visibility: "Excellent Kilimanjaro views",
      recommendation: "Peak season"
    },
    {
      period: "January - March",
      title: "Short Dry Season",
      description: "Good weather with fewer crowds. Calving season for many species.",
      weather: "Warm and dry, occasional short rains",
      wildlife: "Very good - Calving season",
      visibility: "Good mountain views",
      recommendation: "Great value"
    },
    {
      period: "November - December, April - May",
      title: "Rainy Seasons",
      description: "Lush green landscapes, great for bird watching, but mountain often cloudy.",
      weather: "Rainy, humid, 23°C average",
      wildlife: "Good - Dispersed animals",
      visibility: "Limited mountain views",
      recommendation: "Budget option"
    }
  ];

  const ecosystems = [
    {
      name: "Open Plains",
      description: "Vast savanna grasslands dominated by red oat grass",
      wildlife: "Elephants, zebras, wildebeest, gazelles"
    },
    {
      name: "Acacia Woodland",
      description: "Scattered fever trees and umbrella acacias",
      wildlife: "Giraffes, impalas, birds, occasional leopards"
    },
    {
      name: "Swamplands",
      description: "Permanent marshes fed by underground springs",
      wildlife: "Hippos, buffalo, waterbucks, diverse birdlife"
    },
    {
      name: "Lava Rock Areas",
      description: "Ancient volcanic formations and rocky outcrops",
      wildlife: "Rock hyrax, klipspringer, birds of prey"
    }
  ];

  const activities = [
    {
      title: "Game Drives",
      description: "Morning and afternoon drives with experienced guides",
      duration: "3-4 hours",
      bestTime: "Early morning & late afternoon"
    },
    {
      title: "Cultural Visits",
      description: "Visit authentic Maasai villages and learn traditional customs",
      duration: "2-3 hours",
      bestTime: "Any time"
    },
    {
      title: "Nature Walks",
      description: "Guided walking safaris around Observation Hill",
      duration: "1-2 hours",
      bestTime: "Morning or evening"
    },
    {
      title: "Photography Tours",
      description: "Specialized tours for wildlife and landscape photography",
      duration: "Full day",
      bestTime: "Golden hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-gold/20 to-kenya-purple/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="/src/assets/kenya-lion.jpg" 
          alt="Amboseli landscape with Mount Kilimanjaro"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Amboseli
          </h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-4">
            Land of Giants
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where elephants roam free beneath the majestic Mount Kilimanjaro
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Amboseli Safari
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              View Photo Gallery
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
              <h3 className="font-semibold">Park Size</h3>
              <p className="text-muted-foreground">392 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Elevation</h3>
              <p className="text-muted-foreground">1,200m above sea level</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Drive from Nairobi</h3>
              <p className="text-muted-foreground">3-4 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Trees className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Elephants & Kilimanjaro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Amboseli</h2>
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

      {/* Ecosystems */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Diverse Ecosystems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystems.map((ecosystem, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{ecosystem.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{ecosystem.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Wildlife:</h4>
                    <p className="text-xs text-muted-foreground">{ecosystem.wildlife}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Viewing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wildlife Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlife.map((animal, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
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
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Best Time to Visit</h2>
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
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Recommendation</h4>
                    <Badge variant="outline">{season.recommendation}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{season.visibility}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Safari Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span><strong>Duration:</strong> {activity.duration}</span>
                  </div>
                  <div className="text-xs">
                    <strong>Best Time:</strong> {activity.bestTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tips */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Photography Paradise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Camera className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Kilimanjaro Shots</h3>
                <p className="text-white/80 text-sm">
                  Best views in early morning (6-8 AM) before clouds cover the peak. 
                  Use elephants in foreground for scale and drama.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Trees className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Elephant Portraits</h3>
                <p className="text-white/80 text-sm">
                  Amboseli elephants have some of Africa's largest tusks. 
                  Focus on individual characters and family interactions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Mountain className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Landscape Drama</h3>
                <p className="text-white/80 text-sm">
                  Dust storms create dramatic silhouettes. Golden hour light 
                  enhances the contrast between wildlife and mountain backdrop.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Amboseli's Majesty
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable journey to Kenya's elephant paradise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Amboseli Safari
            </Button>
            <Button variant="outline" size="lg">
              Combine with Masai Mara
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Amboseli;