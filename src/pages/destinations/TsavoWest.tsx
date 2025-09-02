import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, TreePine, Bird, Eye, Heart, Droplets, Waves } from 'lucide-react';
import kenyaLion from '@/assets/kenya-lion.jpg';

const TsavoWest = () => {
  const highlights = [
    {
      title: "Mzima Springs",
      description: "Crystal clear springs with underwater viewing chambers for hippos and crocodiles.",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      title: "Ngulia Rhino Sanctuary",
      description: "Protected area for endangered black rhinos with excellent viewing opportunities.",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Diverse Landscapes",
      description: "From volcanic hills to savanna plains, offering varied wildlife habitats.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "Wildlife Diversity",
      description: "Home to the Big Five and over 600 bird species in varied ecosystems.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Black Rhinos", description: "Protected population in Ngulia Sanctuary", abundance: "Excellent" },
    { name: "Hippos", description: "Large pods in Mzima Springs", abundance: "Excellent" },
    { name: "Crocodiles", description: "Numerous in water sources", abundance: "Excellent" },
    { name: "Lions", description: "Several prides throughout the park", abundance: "Good" },
    { name: "Elephants", description: "Large herds in various habitats", abundance: "Good" },
    { name: "Birds", description: "Over 600 species including raptors", abundance: "Excellent" }
  ];

  const seasonalGuide = [
    {
      period: "June - October",
      title: "Dry Season",
      description: "Best wildlife viewing as animals concentrate around water sources. Clear skies and comfortable temperatures.",
      weather: "Dry and sunny, 28°C days, 18°C nights",
      wildlife: "Excellent - Animals at water sources",
      visibility: "Excellent wildlife viewing",
      recommendation: "Peak season"
    },
    {
      period: "January - March",
      title: "Short Dry Season",
      description: "Good weather with wildlife still active around water sources. Fewer crowds.",
      weather: "Warm and dry, occasional light rains",
      wildlife: "Very good - Good rhino viewing",
      visibility: "Good wildlife viewing",
      recommendation: "Great value"
    },
    {
      period: "November - December, April - May",
      title: "Rainy Seasons",
      description: "Lush green landscapes, wildlife disperses, but beautiful scenery and excellent bird watching.",
      weather: "Rainy, humid, 25°C average",
      wildlife: "Good - Birds active, rhinos still visible",
      visibility: "Limited due to rain and vegetation",
      recommendation: "Bird watching season"
    }
  ];

  const ecosystems = [
    {
      name: "Mzima Springs",
      description: "Crystal clear springs with underwater viewing",
      wildlife: "Hippos, crocodiles, fish, water birds"
    },
    {
      name: "Ngulia Hills",
      description: "Volcanic hills and rocky outcrops",
      wildlife: "Black rhinos, klipspringer, eagles"
    },
    {
      name: "Savanna Plains",
      description: "Open grasslands with scattered acacias",
      wildlife: "Lions, elephants, zebras, antelopes"
    },
    {
      name: "Riverine Forest",
      description: "Lush vegetation along watercourses",
      wildlife: "Birds, monkeys, leopards, small mammals"
    }
  ];

  const activities = [
    {
      title: "Game Drives",
      description: "Morning and afternoon drives focusing on rhinos and big cats",
      duration: "3-4 hours",
      bestTime: "Early morning & late afternoon"
    },
    {
      title: "Mzima Springs Walk",
      description: "Guided walks around the crystal clear springs",
      duration: "1-2 hours",
      bestTime: "Morning or evening"
    },
    {
      title: "Rhino Tracking",
      description: "Specialized tours to observe black rhinos",
      duration: "2-3 hours",
      bestTime: "Early morning"
    },
    {
      title: "Bird Watching",
      description: "Expert-guided tours for over 600 bird species",
      duration: "Half day",
      bestTime: "Early morning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-green-500/20 to-kenya-purple/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src={kenyaLion} 
          alt="Tsavo West landscape with Mzima Springs"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Tsavo West
          </h1>
          <p className="text-2xl md:text-3xl text-green-400 font-semibold mb-4">
            Land of Crystal Springs
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where crystal clear springs meet diverse wildlife in Kenya's volcanic wilderness
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Explore Tsavo West
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Download Park Guide
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
              <p className="text-muted-foreground">9,065 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Established</h3>
              <p className="text-muted-foreground">1948</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Drive from Nairobi</h3>
              <p className="text-muted-foreground">5-6 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Mzima Springs & Rhinos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Visit Tsavo West</h2>
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
                <Droplets className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Mzima Springs</h3>
                <p className="text-white/80 text-sm">
                  Crystal clear waters offer unique underwater photography opportunities. 
                  Best shots in early morning light with hippos and crocodiles.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TreePine className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Rhino Portraits</h3>
                <p className="text-white/80 text-sm">
                  Ngulia Sanctuary offers excellent rhino photography. 
                  Focus on individual characters and family groups in natural settings.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Camera className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Bird Photography</h3>
                <p className="text-white/80 text-sm">
                  Over 600 bird species offer endless opportunities. 
                  Focus on raptors, water birds, and colorful species.
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
            Discover Tsavo West's Magic
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable journey to Kenya's crystal springs paradise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Tsavo West Safari
            </Button>
            <Button variant="outline" size="lg">
              Combine with Tsavo East
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TsavoWest;