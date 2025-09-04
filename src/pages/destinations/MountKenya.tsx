import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, TreePine, Bird, Eye, Heart, Snowflake, Droplets } from 'lucide-react';
import kenyaLion from '@/assets/kenya-lion.jpg';

const MountKenya = () => {
  const highlights = [
    {
      title: "Second Highest Peak",
      description: "Africa's second highest mountain at 5,199m with stunning glacial peaks and alpine scenery.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "UNESCO Heritage",
      description: "World Heritage Site with unique equatorial glaciers and diverse ecosystems.",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Alpine Adventures",
      description: "Trekking, climbing, and mountaineering opportunities for all skill levels.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "Biodiversity Hotspot",
      description: "Five distinct vegetation zones from rainforest to alpine moorland.",
      icon: <Bird className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Colobus Monkeys", description: "Black and white colobus in montane forests", abundance: "Excellent" },
    { name: "Sykes Monkeys", description: "Common in bamboo and forest zones", abundance: "Excellent" },
    { name: "Bushbucks", description: "Forest antelopes in lower zones", abundance: "Good" },
    { name: "Duikers", description: "Small forest antelopes", abundance: "Good" },
    { name: "Birds", description: "Over 130 species including sunbirds and eagles", abundance: "Excellent" },
    { name: "Elephants", description: "Occasional visitors to lower forest zones", abundance: "Fair" }
  ];

  const seasonalGuide = [
    {
      period: "January - February",
      title: "Dry Season",
      description: "Best trekking conditions with clear skies and minimal rainfall. Excellent visibility.",
      weather: "Dry and sunny, 20°C at base, -5°C at summit",
      wildlife: "Excellent - Animals active in forests",
      visibility: "Excellent mountain views",
      recommendation: "Peak season"
    },
    {
      period: "July - September",
      title: "Short Dry Season",
      description: "Good trekking weather with fewer crowds. Cooler temperatures.",
      weather: "Cool and dry, 15°C at base, -10°C at summit",
      wildlife: "Very good - Forest wildlife active",
      visibility: "Good mountain views",
      recommendation: "Great value"
    },
    {
      period: "March - June, October - December",
      title: "Rainy Seasons",
      description: "Heavy rainfall, slippery trails, but lush vegetation and fewer tourists.",
      weather: "Rainy, humid, 18°C at base, -8°C at summit",
      wildlife: "Good - Wildlife in shelter",
      visibility: "Limited due to clouds and rain",
      recommendation: "Experienced trekkers only"
    }
  ];

  const ecosystems = [
    {
      name: "Bamboo Zone",
      description: "Dense bamboo forests at 2,000-2,500m elevation",
      wildlife: "Colobus monkeys, bushbucks, forest birds"
    },
    {
      name: "Montane Forest",
      description: "Rich rainforest with ancient trees and epiphytes",
      wildlife: "Sykes monkeys, duikers, diverse birdlife"
    },
    {
      name: "Heath Zone",
      description: "Ericaceous heath and moorland at 3,000-3,500m",
      wildlife: "Mountain reedbuck, birds, small mammals"
    },
    {
      name: "Alpine Zone",
      description: "Rocky peaks and glaciers above 4,000m",
      wildlife: "Rock hyrax, eagles, limited vegetation"
    }
  ];

  const activities = [
    {
      title: "Trekking",
      description: "Multi-day treks on various routes to different peaks",
      duration: "3-7 days",
      bestTime: "January-February, July-September"
    },
    {
      title: "Summit Climbing",
      description: "Technical climbing to Batian and Nelion peaks",
      duration: "1-2 days",
      bestTime: "January-February"
    },
    {
      title: "Nature Walks",
      description: "Guided walks in lower forest zones",
      duration: "2-4 hours",
      bestTime: "Any time"
    },
    {
      title: "Bird Watching",
      description: "Specialized tours for montane bird species",
      duration: "Half day",
      bestTime: "Early morning"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-blue-500/20 to-kenya-purple/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://i.pinimg.com/1200x/05/e8/31/05e831f17b50fe0f1d7c8f599cdd1b66.jpg" 
          alt="Mount Kenya with snow-capped peaks"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Mount Kenya
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4">
            Africa's Second Highest Peak
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where equatorial glaciers meet alpine adventures in Kenya's highest wilderness
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Mount Kenya Trek
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
              <h3 className="font-semibold">Mountain Height</h3>
              <p className="text-muted-foreground">5,199m (17,057ft)</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Base Elevation</h3>
              <p className="text-muted-foreground">1,600m above sea level</p>
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
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Glaciers & Trekking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mountain Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Mount Kenya</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Altitude Zones</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mountain Activities</h2>
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
                <Mountain className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Alpine Landscapes</h3>
                <p className="text-white/80 text-sm">
                  Capture the dramatic peaks and glaciers in early morning light. 
                  Use foreground elements like rocks and vegetation for scale.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TreePine className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Forest Wildlife</h3>
                <p className="text-white/80 text-sm">
                  Focus on colobus and Sykes monkeys in their natural habitat. 
                  Use natural light filtering through the canopy.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Bird className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Bird Photography</h3>
                <p className="text-white/80 text-sm">
                  The montane forest offers excellent bird photography opportunities. 
                  Focus on sunbirds, eagles, and other forest species.
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
            Experience Mount Kenya's Majesty
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable journey to Kenya's highest peak
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="luxury" size="lg">
              Book Mount Kenya Trek
            </Button>
            <Button variant="outline" size="lg">
              Combine with Safari
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MountKenya;