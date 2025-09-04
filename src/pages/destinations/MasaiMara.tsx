import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Camera, Star, Clock, Users, Heart, TreePine, Bird, Eye, Mountain, Thermometer, X } from 'lucide-react';
import heroSafari from '@/assets/hero-safari.jpg';

const MasaiMara = () => {
  const navigate = useNavigate();
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSafariClick = (safariType) => {
    // Navigate to contact page with subject parameter and scroll to form
    navigate(`/contact?subject=${encodeURIComponent(safariType)}`);
  };

  const handleCustomSafariClick = () => {
    // Navigate to custom safari page and scroll to form
    navigate('/custom-safari?scrollToForm=true');
  };

  const handleViewDetails = (accommodation) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccommodation(null);
  };

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
      icon: <Clock className="w-6 h-6" />
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
      price: "$1,200+ per night",
      description: "Perched dramatically on the edge of the Oloololo Escarpment, Angama Mara offers one of the most spectacular views in Africa. This ultra-luxury tented camp combines contemporary elegance with authentic safari charm, featuring spacious glass-fronted tents that seem to float above the endless plains below. Each tent boasts floor-to-ceiling windows, private decks, and en-suite bathrooms with freestanding bathtubs. The camp's location provides front-row seats to the Great Migration and offers unparalleled game viewing opportunities. With world-class cuisine, personalized service, and a focus on conservation, Angama Mara delivers an unforgettable luxury safari experience.",
      images: [
        "https://i.pinimg.com/736x/bf/3c/15/bf3c15ac2e1b8dd14ef25443fe819aa9.jpg",
        "https://i.pinimg.com/1200x/3d/a3/77/3da37751015c769c320c0d99cea1ff69.jpg",
        "https://i.pinimg.com/1200x/95/18/c9/9518c9524a089e0e4381f502b5f89fb7.jpg",
        "https://i.pinimg.com/1200x/cf/c3/54/cfc354a8fc98e2d73ec7f9f3037cdf05.jpg"
      ],
      amenities: ["Luxury tented suites", "Private decks", "En-suite bathrooms", "World-class dining", "Game drives", "Cultural experiences", "Spa services", "WiFi"]
    },
    {
      name: "Sarova Mara Game Camp",
      type: "Mid-Range Lodge",
      location: "Central Mara",
      highlights: ["Prime location", "Traditional safari experience", "Good value"],
      price: "$350-500 per night",
      description: "Located in the heart of the Masai Mara, Sarova Mara Game Camp offers an authentic safari experience with modern comforts. The camp features spacious tents and cottages set in a natural forest environment, providing a perfect blend of adventure and relaxation. Each accommodation is tastefully decorated with local materials and offers en-suite facilities. The camp's central location ensures excellent game viewing opportunities, with the famous Mara River just a short drive away. Guests can enjoy traditional safari activities including game drives, bush walks, and cultural visits to local Maasai communities. The camp's restaurant serves both international and local cuisine, and the bar offers a perfect spot to unwind after a day of safari adventures.",
      images: [
        "https://i.pinimg.com/736x/3f/ba/f5/3fbaf5a85cf956301537a68ccfd37bc5.jpg",
        "https://i.pinimg.com/736x/a9/42/bc/a942bc2735fcd880bf9695b02d36f6bc.jpg",
        "https://i.pinimg.com/736x/a7/bf/9d/a7bf9d98c0ff42414f69011e28b38452.jpg",
        "https://i.pinimg.com/736x/3c/e9/8e/3ce98e0d2cb8731326569f47a620abef.jpg"
      ],
      amenities: ["Tented accommodation", "En-suite bathrooms", "Restaurant & bar", "Game drives", "Cultural visits", "Bush walks", "Swimming pool", "Gift shop"]
    },
    {
      name: "Mara Explorer Camp",
      type: "Mobile Camping",
      location: "Follows migration",
      highlights: ["Migration access", "Authentic camping", "Budget-friendly"],
      price: "$150-250 per night",
      description: "Mara Explorer Camp offers an authentic mobile camping experience that follows the Great Migration, ensuring you're always in the heart of the action. This intimate camp features traditional canvas tents with comfortable beds and basic amenities, providing a true bush experience without compromising on safety and comfort. The camp moves seasonally to follow the wildebeest migration, offering guests the best wildlife viewing opportunities throughout the year. Each tent is equipped with solar lighting and shared bathroom facilities. The camp's communal dining area serves hearty meals prepared over open fires, and evenings are spent around the campfire sharing stories under the African stars. This is the perfect choice for adventurous travelers seeking an authentic safari experience at an affordable price.",
      images: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop"
      ],
      amenities: ["Mobile canvas tents", "Shared bathroom facilities", "Communal dining", "Game drives", "Migration following", "Campfire evenings", "Solar lighting", "Authentic bush experience"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-gold/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://images.pexels.com/photos/26052413/pexels-photo-26052413.jpeg?_gl=1*16542d8*_ga*MTk4OTgwMDYwOC4xNzQ1NTg5OTU0*_ga_8JE65Q40S6*czE3NTY5MDE0NzYkbzI4JGcxJHQxNzU2OTAyMDc3JGo2JGwwJGgw" 
          alt="Masai Mara landscape with wildlife"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
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
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => handleBookSafariClick("Book Masai Mara Safari")}
            >
              Book Masai Mara Safari
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
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails(accommodation)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience the Masai Mara?
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Let our expert guides show you the wonders of Kenya's most famous reserve
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="luxury" 
                size="lg"
                onClick={() => handleBookSafariClick("Book Masai Mara Safari")}
              >
                Book Masai Mara Safari
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCustomSafariClick}
              >
                Combine with Other Parks
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Accommodation Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-kenya-gold">
              {selectedAccommodation?.name}
            </DialogTitle>
          </DialogHeader>
          
          {selectedAccommodation && (
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <Badge className="bg-kenya-magenta text-white mb-2">
                    {selectedAccommodation.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedAccommodation.location}
                  </div>
                </div>
                <div className="text-2xl font-bold text-kenya-gold">
                  {selectedAccommodation.price}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold mb-3">About This Accommodation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedAccommodation.description}
                </p>
              </div>

              {/* Image Grid */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Photo Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedAccommodation.images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={`${selectedAccommodation.name} - Image ${index + 1}`}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities & Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedAccommodation.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-kenya-gold mr-2 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button 
                  variant="luxury" 
                  size="lg"
                  className="flex-1"
                  onClick={() => {
                    handleCloseModal();
                    handleBookSafariClick(`Book ${selectedAccommodation.name} Stay`);
                  }}
                >
                  Book This Accommodation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1"
                  onClick={handleCloseModal}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MasaiMara;