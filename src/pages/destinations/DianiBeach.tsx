import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Waves, Umbrella, Fish, Eye, Heart, Sun, TreePalm } from 'lucide-react';

const DianiBeach = () => {
  const highlights = [
    {
      title: "Crystal Clear Waters",
      description: "Pristine turquoise waters with excellent visibility for water activities.",
      icon: <Waves className="w-6 h-6" />
    },
    {
      title: "White Sandy Beaches",
      description: "12km of powdery white sand beaches perfect for relaxation and walks.",
      icon: <Umbrella className="w-6 h-6" />
    },
    {
      title: "Coral Reefs",
      description: "Rich marine life with colorful coral reefs and tropical fish.",
      icon: <Fish className="w-6 h-6" />
    },
    {
      title: "Water Sports Paradise",
      description: "World-class diving, snorkeling, and water sports activities.",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const marineLife = [
    { name: "Tropical Fish", description: "Over 400 species of colorful reef fish", abundance: "Excellent" },
    { name: "Coral Reefs", description: "Vibrant coral formations and sea fans", abundance: "Excellent" },
    { name: "Sea Turtles", description: "Green and hawksbill turtles nesting", abundance: "Good" },
    { name: "Dolphins", description: "Bottlenose and spinner dolphins", abundance: "Good" },
    { name: "Whale Sharks", description: "Seasonal visits from gentle giants", abundance: "Seasonal" },
    { name: "Manta Rays", description: "Graceful rays gliding through waters", abundance: "Occasional" }
  ];

  const seasonalGuide = [
    {
      period: "June - October",
      title: "Dry Season",
      description: "Best weather with clear skies, calm seas, and excellent visibility for water activities.",
      weather: "Dry and sunny, 28°C average, low humidity",
      activities: "Excellent - Perfect for all water sports",
      visibility: "Excellent underwater visibility",
      recommendation: "Peak season"
    },
    {
      period: "December - March",
      title: "Short Dry Season",
      description: "Warm weather with occasional afternoon showers. Great for beach activities.",
      weather: "Warm and humid, 30°C average, light rains",
      activities: "Very good - Great beach time",
      visibility: "Good underwater visibility",
      recommendation: "Great value"
    },
    {
      period: "April - May, November",
      title: "Rainy Seasons",
      description: "Lush green landscapes, fewer crowds, but some water activities may be limited.",
      weather: "Rainy, humid, 26°C average",
      activities: "Good - Fewer crowds",
      visibility: "Moderate underwater visibility",
      recommendation: "Budget option"
    }
  ];

  const ecosystems = [
    {
      name: "Coral Reefs",
      description: "Vibrant coral formations teeming with marine life",
      wildlife: "Tropical fish, sea turtles, reef sharks, colorful corals"
    },
    {
      name: "Seagrass Beds",
      description: "Underwater meadows providing habitat and food",
      wildlife: "Sea turtles, dugongs, juvenile fish, seahorses"
    },
    {
      name: "Mangrove Forests",
      description: "Coastal wetlands protecting shorelines",
      wildlife: "Mangrove crabs, birds, juvenile fish, monkeys"
    },
    {
      name: "Sandy Beaches",
      description: "Pristine white sand beaches and dunes",
      wildlife: "Ghost crabs, shorebirds, nesting turtles"
    }
  ];

  const activities = [
    {
      title: "Scuba Diving",
      description: "Explore vibrant coral reefs and marine life",
      duration: "3-4 hours",
      bestTime: "Year-round, best June-October"
    },
    {
      title: "Snorkeling",
      description: "Surface exploration of shallow reefs",
      duration: "2-3 hours",
      bestTime: "Low tide, calm seas"
    },
    {
      title: "Deep Sea Fishing",
      description: "Catch marlin, sailfish, and tuna",
      duration: "6-8 hours",
      bestTime: "Early morning, calm seas"
    },
    {
      title: "Water Sports",
      description: "Jet skiing, parasailing, and kite surfing",
      duration: "1-3 hours",
      bestTime: "Morning and afternoon"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-gold/20 to-kenya-purple/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_1280.jpg"
          alt="Diani Beach pristine white sand and turquoise waters"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Diani Beach
          </h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-4">
            Paradise Found
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where pristine white sands meet crystal clear turquoise waters
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => {
                window.location.href = '/contact?subject=Diani Beach Safari';
              }}
            >
              Book Diani Beach Safari
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
              <h3 className="font-semibold">Beach Length</h3>
              <p className="text-muted-foreground">12 km</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Waves className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Water Temperature</h3>
              <p className="text-muted-foreground">24-28°C year-round</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Flight from Nairobi</h3>
              <p className="text-muted-foreground">1 hour</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <TreePalm className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Beaches & Water Sports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Beach Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Diani Beach</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Marine Ecosystems</h2>
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

      {/* Marine Life Viewing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Marine Life Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marineLife.map((animal, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{animal.name}</CardTitle>
                    <Badge 
                      className={`
                        ${animal.abundance === 'Excellent' ? 'bg-green-500' : 
                          animal.abundance === 'Good' ? 'bg-yellow-500' : 
                          animal.abundance === 'Seasonal' ? 'bg-blue-500' : 'bg-orange-500'} 
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
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Activities</h4>
                    <p className="text-sm text-muted-foreground">{season.activities}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Beach Activities</h2>
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
                <Sun className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Golden Hour Magic</h3>
                <p className="text-white/80 text-sm">
                  Best shots during sunrise (6-8 AM) and sunset (6-7 PM). 
                  Capture the golden light reflecting off the white sand and turquoise waters.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Waves className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Underwater Photography</h3>
                <p className="text-white/80 text-sm">
                  Crystal clear waters offer excellent visibility for underwater shots. 
                  Capture colorful coral reefs and tropical fish in their natural habitat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TreePalm className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Beach Landscapes</h3>
                <p className="text-white/80 text-sm">
                  Dramatic palm tree silhouettes against sunset skies. 
                  Use the 12km stretch of white sand for stunning panoramic shots.
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
            Experience Diani Beach Paradise
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable beach and marine adventure in Kenya's coastal gem
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => {
                window.location.href = '/contact?subject=Diani Beach Safari';
              }}
            >
              Book Diani Beach Safari
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                window.location.href = '/custom-safari?scrollToForm=true';
              }}
            >
              Combine with Safari
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DianiBeach;
