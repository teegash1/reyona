import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Camera, Clock, Star, Trees, Mountain, Waves } from 'lucide-react';

const TsavoEast = () => {
  const highlights = [
    {
      title: "Red Elephants",
      description: "Famous red-dust coated elephants unique to Tsavo's red soil landscape.",
      icon: <Trees className="w-6 h-6" />
    },
    {
      title: "Vast Wilderness",
      description: "Kenya's largest national park covering 13,747 square kilometers.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "Yatta Plateau",
      description: "World's longest lava flow stretching over 300 kilometers.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "Historic Legacy",
      description: "Site of the famous man-eating lions story during railway construction.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Red Elephants", description: "Large herds covered in distinctive red dust", abundance: "Excellent" },
    { name: "Lions", description: "Several prides, including famous Tsavo lions", abundance: "Good" },
    { name: "Buffalo", description: "Large herds especially near water sources", abundance: "Excellent" },
    { name: "Giraffes", description: "Reticulated and Masai giraffes", abundance: "Good" },
    { name: "Zebras", description: "Common and Grevy's zebras", abundance: "Good" },
    { name: "Leopards", description: "Elusive but present in rocky areas", abundance: "Fair" }
  ];

  const attractions = [
    {
      name: "Mudanda Rock",
      description: "Natural rock water catchment attracting diverse wildlife",
      highlight: "Excellent wildlife viewing point",
      bestTime: "Dry season"
    },
    {
      name: "Yatta Plateau",
      description: "World's longest lava flow with spectacular views",
      highlight: "Geological wonder",
      bestTime: "Year-round"
    },
    {
      name: "Galana River",
      description: "Major river system supporting abundant wildlife",
      highlight: "Hippos and crocodiles",
      bestTime: "Dry season"
    },
    {
      name: "Aruba Dam",
      description: "Popular waterhole for game viewing",
      highlight: "Wildlife concentration",
      bestTime: "Dry season"
    }
  ];

  const seasonalGuide = [
    {
      period: "June - September",
      title: "Peak Dry Season",
      description: "Best wildlife viewing as animals concentrate around water sources. Roads are accessible.",
      weather: "Hot and dry, 30°C days, 20°C nights",
      wildlife: "Excellent - Animals at water sources",
      roads: "Good condition",
      recommendation: "Best time to visit"
    },
    {
      period: "October - December",
      title: "Short Rains",
      description: "Brief rains bring green landscapes. Good wildlife viewing continues.",
      weather: "Warm with short rain showers",
      wildlife: "Very good - Animals still concentrated",
      roads: "Generally good",
      recommendation: "Excellent value"
    },
    {
      period: "January - March",
      title: "Hot Dry Season",
      description: "Very hot but excellent for wildlife viewing. Clear skies for photography.",
      weather: "Very hot, 35°C+ days",
      wildlife: "Excellent - Peak concentration",
      roads: "Excellent condition",
      recommendation: "Wildlife enthusiasts"
    },
    {
      period: "April - May",
      title: "Long Rains",
      description: "Heaviest rains can make some areas inaccessible. Lush landscapes but dispersed wildlife.",
      weather: "Rainy and humid, 28°C average",
      wildlife: "Fair - Animals dispersed",
      roads: "Some areas difficult",
      recommendation: "Not recommended"
    }
  ];

  const activities = [
    {
      title: "Game Drives",
      description: "Explore vast wilderness on day and night drives",
      duration: "Half or full day",
      difficulty: "Easy"
    },
    {
      title: "Rock Climbing",
      description: "Scale Mudanda Rock for panoramic views",
      duration: "2-3 hours",
      difficulty: "Moderate"
    },
    {
      title: "Bird Watching",
      description: "Over 500 bird species recorded in the park",
      duration: "Flexible",
      difficulty: "Easy"
    },
    {
      title: "Cultural Visits",
      description: "Visit local Kamba and Taita communities",
      duration: "Half day",
      difficulty: "Easy"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-orange-500/20 to-kenya-purple/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="/src/assets/luxury-camp.jpg" 
          alt="Tsavo East red elephants"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Tsavo East
          </h1>
          <p className="text-2xl md:text-3xl text-orange-400 font-semibold mb-4">
            Land of the Red Elephants
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Kenya's largest national park - a vast wilderness of red earth and untamed wildlife
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Explore Tsavo East
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
              <p className="text-muted-foreground">13,747 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Trees className="w-8 h-8 text-white" />
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
              <p className="text-muted-foreground">Red Elephants</p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Visit Tsavo East</h2>
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

      {/* Key Attractions */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Attractions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attractions.map((attraction, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{attraction.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{attraction.description}</p>
                  <div>
                    <Badge className="bg-orange-500 text-white text-xs">{attraction.highlight}</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <strong>Best Time:</strong> {attraction.bestTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Wildlife Spotting</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When to Visit</h2>
          <div className="space-y-6">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-4 p-6">
                  <div>
                    <Badge className="bg-orange-500 text-white mb-3">{season.period}</Badge>
                    <h3 className="text-xl font-bold mb-2">{season.title}</h3>
                    <p className="text-muted-foreground text-sm">{season.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Weather</h4>
                    <p className="text-sm text-muted-foreground">{season.weather}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Wildlife & Roads</h4>
                    <p className="text-sm text-muted-foreground">{season.wildlife}</p>
                    <p className="text-xs text-muted-foreground mt-1">Roads: {season.roads}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Recommendation</h4>
                    <Badge variant="outline">{season.recommendation}</Badge>
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
                    <Badge variant="outline" className="text-xs">{activity.difficulty}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Story */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Conservation Success Story
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From near extinction to thriving populations - Tsavo East's wildlife recovery
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="pt-8 pb-6">
                <Trees className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-2">1990s</h3>
                <p className="text-white/80 text-sm">Severe poaching crisis reduced elephant population to under 6,000</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="pt-8 pb-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-2">2000s</h3>
                <p className="text-white/80 text-sm">Anti-poaching efforts and community programs began recovery</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white text-center">
              <CardContent className="pt-8 pb-6">
                <Star className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-2xl font-bold mb-2">Today</h3>
                <p className="text-white/80 text-sm">Over 15,000 elephants now thrive in the Tsavo ecosystem</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover Kenya's Largest Wilderness
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Experience the raw beauty and untamed spirit of Tsavo East National Park
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Tsavo East Safari
            </Button>
            <Button variant="outline" size="lg">
              Combine with Tsavo West
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TsavoEast;