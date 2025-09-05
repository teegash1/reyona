import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, TreePine, Bird, Eye, Heart, Droplets, Waves } from 'lucide-react';

const LakeNakuru = () => {
  const navigate = useNavigate();

  const handleBookSafariClick = (safariType) => {
    // Navigate to contact page with subject parameter and scroll to form
    navigate(`/contact?subject=${encodeURIComponent(safariType)}`);
  };

  const handleCustomSafariClick = () => {
    // Navigate to custom safari page and scroll to form
    navigate('/custom-safari?scrollToForm=true');
  };

  const highlights = [
    {
      title: "Flamingo Spectacle",
      description: "Millions of pink flamingos creating one of Africa's most iconic wildlife spectacles.",
      icon: <Bird className="w-6 h-6" />
    },
    {
      title: "Rhino Sanctuary",
      description: "Home to both black and white rhinos with excellent viewing opportunities.",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Bird Paradise",
      description: "Over 450 bird species including pelicans, storks, and eagles.",
      icon: <Bird className="w-6 h-6" />
    },
    {
      title: "Lake Views",
      description: "Stunning alkaline lake surrounded by acacia forests and grasslands.",
      icon: <Droplets className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Pink Flamingos", description: "Millions gather on the alkaline lake", abundance: "Excellent" },
    { name: "Black Rhinos", description: "Dense population in the sanctuary", abundance: "Excellent" },
    { name: "White Rhinos", description: "Easily spotted in open areas", abundance: "Excellent" },
    { name: "Lions", description: "Several prides in the park", abundance: "Good" },
    { name: "Leopards", description: "Often seen in acacia forests", abundance: "Good" },
    { name: "Giraffes", description: "Rothschild's giraffe subspecies", abundance: "Excellent" }
  ];

  const seasonalGuide = [
    {
      period: "July - October",
      title: "Dry Season",
      description: "Best wildlife viewing with flamingos at peak numbers. Clear skies and comfortable temperatures.",
      weather: "Dry and sunny, 25°C days, 12°C nights",
      wildlife: "Excellent - Flamingos at peak, rhinos active",
      visibility: "Excellent lake views and bird watching",
      recommendation: "Peak season"
    },
    {
      period: "January - March",
      title: "Short Dry Season",
      description: "Good weather with flamingos still present. Fewer crowds and good value.",
      weather: "Warm and dry, occasional light rains",
      wildlife: "Very good - Flamingos present, good rhino viewing",
      visibility: "Good lake visibility",
      recommendation: "Great value"
    },
    {
      period: "November - December, April - June",
      title: "Rainy Seasons",
      description: "Lush green landscapes, flamingos may disperse, but excellent bird diversity.",
      weather: "Rainy, humid, 22°C average",
      wildlife: "Good - Birds disperse, rhinos still visible",
      visibility: "Limited lake views due to rain",
      recommendation: "Budget option"
    }
  ];

  const ecosystems = [
    {
      name: "Alkaline Lake",
      description: "Shallow soda lake with high mineral content",
      wildlife: "Flamingos, pelicans, waterfowl, algae"
    },
    {
      name: "Acacia Forest",
      description: "Dense woodlands with fever trees and umbrella acacias",
      wildlife: "Leopards, baboons, monkeys, forest birds"
    },
    {
      name: "Grasslands",
      description: "Open savanna with scattered bushes",
      wildlife: "Lions, rhinos, buffalo, zebras, antelopes"
    },
    {
      name: "Rocky Outcrops",
      description: "Baboon cliffs and rocky areas",
      wildlife: "Baboons, rock hyrax, eagles, vultures"
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
      title: "Bird Watching",
      description: "Specialized tours for bird enthusiasts with expert guides",
      duration: "2-3 hours",
      bestTime: "Early morning"
    },
    {
      title: "Rhino Tracking",
      description: "Guided walks to observe rhinos in their natural habitat",
      duration: "1-2 hours",
      bestTime: "Morning or evening"
    },
    {
      title: "Photography Tours",
      description: "Focused on flamingo spectacles and wildlife portraits",
      duration: "Full day",
      bestTime: "Golden hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://cdn.pixabay.com/photo/2019/11/22/11/43/birds-4644652_1280.jpg" 
          alt="Lake Nakuru with flamingos and birds"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Lake Nakuru
          </h1>
          <p className="text-2xl md:text-3xl text-pink-400 font-semibold mb-4">
            Pink Flamingo Paradise
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where millions of flamingos paint the sky pink and rhinos roam free
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => handleBookSafariClick("Book Lake Nakuru Safari")}
            >
              Book Lake Nakuru Safari
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
              <p className="text-muted-foreground">188 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Elevation</h3>
              <p className="text-muted-foreground">1,759m above sea level</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Drive from Nairobi</h3>
              <p className="text-muted-foreground">2-3 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Bird className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Flamingos & Rhinos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Park Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Lake Nakuru</h2>
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
                <Bird className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Flamingo Spectacles</h3>
                <p className="text-white/80 text-sm">
                  Best shots in early morning light when flamingos are most active. 
                  Use the lake as a mirror for stunning reflections.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TreePine className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Rhino Portraits</h3>
                <p className="text-white/80 text-sm">
                  Lake Nakuru has the highest rhino density in Kenya. 
                  Focus on individual characters and family groups in natural settings.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Droplets className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Lake Landscapes</h3>
                <p className="text-white/80 text-sm">
                  The alkaline lake creates unique colors and textures. 
                  Golden hour light enhances the pink hues of flamingos.
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
            Experience Lake Nakuru's Magic
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable journey to Kenya's flamingo paradise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => handleBookSafariClick("Book Lake Nakuru Safari")}
            >
              Book Lake Nakuru Safari
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCustomSafariClick}
            >
              Combine with Masai Mara
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LakeNakuru;