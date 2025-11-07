import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MapPin, Camera, Star, Clock, Users, Waves, TreePalm, Fish, Castle, Sun, Thermometer } from 'lucide-react';

const Zanzibar = () => {
  const navigate = useNavigate();
  const [selectedAccommodation, setSelectedAccommodation] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookSafariClick = (subject: string) => {
    navigate(`/contact?subject=${encodeURIComponent(subject)}`);
  };

  const handleCustomSafariClick = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  const handleViewDetails = (accommodation: any) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAccommodation(null);
  };

  const highlights = [
    {
      title: 'Stone Town (UNESCO)',
      description:
        'Historic maze of alleys, spice markets, carved doors, and cultural heritage along the Swahili coast.',
      icon: <Castle className="w-6 h-6" />,
    },
    {
      title: 'World-Class Beaches',
      description:
        'Powder-white sands and turquoise waters at Nungwi, Kendwa, Paje and Jambiani.',
      icon: <TreePalm className="w-6 h-6" />,
    },
    {
      title: 'Marine Paradise',
      description:
        'Snorkel and dive Mnemba Atoll; frequent dolphin encounters near Kizimkazi.',
      icon: <Fish className="w-6 h-6" />,
    },
    {
      title: 'Spice Island',
      description:
        'Aromatic spice farms with cloves, vanilla, cinnamon, and interactive tasting tours.',
      icon: <Camera className="w-6 h-6" />,
    },
  ];

  const experiences = [
    {
      title: 'Stone Town Walking Tour',
      details: 'Explore palaces, Forodhani Gardens, House of Wonders, and bustling bazaars.',
      duration: '2-3 hours',
      bestTime: 'Late afternoon for cooler temperatures',
    },
    {
      title: 'Mnemba Atoll Snorkeling',
      details: 'Crystal-clear reefs with tropical fish, turtles; excellent visibility.',
      duration: 'Half-day',
      bestTime: 'Generally best Jun–Oct; mornings often calmer',
    },
    {
      title: 'Jozani Forest & Red Colobus',
      details: 'Walk boardwalks through mangroves and see endemic Zanzibar red colobus monkeys.',
      duration: '2-3 hours',
      bestTime: 'Morning or late afternoon',
    },
    {
      title: 'Prison Island (Changuu)',
      details: 'Short boat ride from Stone Town; meet giant tortoises and snorkel nearby.',
      duration: '2-4 hours',
      bestTime: 'Morning departures; combine with Stone Town',
    },
  ];

  const seasonalGuide = [
    {
      period: 'June - October',
      title: 'Long Dry Season',
      description: 'Best overall weather: sunny, low humidity, calm seas; peak beach conditions.',
      weather: 'Dry, 26–29°C days, cooler evenings',
      sea: 'Calmer seas, excellent visibility',
      crowds: 'High (peak season)',
    },
    {
      period: 'December - February',
      title: 'Short Dry Season',
      description: 'Warm and sunny with lively festive atmosphere; great for water activities.',
      weather: 'Warm, 28–31°C, occasional brief showers',
      sea: 'Good visibility, generally calm',
      crowds: 'High around holidays',
    },
    {
      period: 'March - May',
      title: 'Long Rains',
      description: 'Heavier rains and humidity; lush landscapes and fewer visitors.',
      weather: 'Humid, frequent rain, 27–29°C',
      sea: 'Choppier seas possible',
      crowds: 'Low (value season)',
    },
    {
      period: 'November',
      title: 'Short Rains',
      description: 'Intermittent showers with sunny breaks; good value and fewer crowds.',
      weather: 'Warm with scattered showers',
      sea: 'Variable visibility, often fine',
      crowds: 'Moderate–low',
    },
  ];

  const accommodations = [
    {
      name: 'Zuri Zanzibar',
      type: 'Luxury Beach Resort',
      location: 'Kendwa/Nungwi, Northwest Coast',
      highlights: ['Private beach', 'Sunset views', 'Stylish bungalows'],
      price: '$600+ per night',
      description:
        'Chic, design-forward resort on Kendwa’s famed sands with sunset-facing beach, lush gardens, and top-tier dining and wellness.',
      images: [
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519822471928-687fd3d68a78?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1501117716987-c8e3f7f3e3f1?q=80&w=1200&auto=format&fit=crop',
      ],
      amenities: ['Spa & wellness', 'Water sports desk', 'Cocktail bars', 'Boutique experiences'],
    },
    {
      name: 'Park Hyatt Zanzibar',
      type: 'Luxury Heritage Hotel',
      location: 'Stone Town Waterfront',
      highlights: ['UNESCO location', 'Arabesque design', 'Infinity pool'],
      price: '$450+ per night',
      description:
        'Elegant waterfront base in historic Stone Town with refined rooms, courtyards, and sunset-facing pool and terrace dining.',
      images: [
        'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1566661624960-5770ae3b83c6?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1200&auto=format&fit=crop',
      ],
      amenities: ['Waterfront dining', 'Spa & fitness', 'Cultural access', 'Concierge tours'],
    },
    {
      name: 'Baraza Resort & Spa',
      type: 'All‑Villa Beach Resort',
      location: 'Bwejuu, Southeast Coast',
      highlights: ['Private villas', 'All‑inclusive', 'Authentic design'],
      price: '$700+ per night',
      description:
        'Luxurious all‑villa resort on a quiet stretch of the southeast coast with Swahili design, fine dining, and serene spa.',
      images: [
        'https://images.unsplash.com/photo-1474696100102-01fd0f7a15c9?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1529653762952-457f41d13bd2?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop',
      ],
      amenities: ['Spa & hammam', 'Dive center access', 'Kids club', 'Cultural nights'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
          alt="Zanzibar beaches"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <Badge className="bg-kenya-gold text-black mb-4">Tanzania</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Zanzibar Archipelago</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            The Spice Island: a blend of pristine beaches, living Swahili heritage, and vibrant marine life — perfect to pair with a northern Tanzania safari.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Book Zanzibar Holiday')}>
              Book Zanzibar Holiday
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={handleCustomSafariClick}
            >
              Combine with Tanzania Safari
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Visit Zanzibar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <Card key={idx} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-kenya-gold/10 text-kenya-gold">{h.icon}</div>
                    <CardTitle className="text-lg">{h.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((ex, idx) => (
              <Card key={idx} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{ex.details}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{ex.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Sun className="w-4 h-4" />
                    <span>{ex.bestTime}</span>
                  </div>
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
                        <Waves className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Sea Conditions</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.sea}</p>
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
                    <Badge className="bg-kenya-burgundy text-white">{accommodation.type}</Badge>
                    <span className="text-sm text-muted-foreground">{accommodation.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {accommodation.highlights.map((highlight: string, i: number) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {accommodation.location}
                    </div>
                    <div className="text-kenya-gold font-semibold">{accommodation.price}</div>
                  </div>
                  <Button variant="outline" onClick={() => handleViewDetails(accommodation)} className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Zanzibar Escape</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Relax on Zanzibar’s shores or add it as a perfect beach finale after your Serengeti and Ngorongoro safari.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Book Zanzibar Holiday')}>
                Book Zanzibar Holiday
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCustomSafariClick}
              >
                Combine with Tanzania Safari
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
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <Badge className="bg-kenya-burgundy text-white mb-2">
                    {selectedAccommodation.type}
                  </Badge>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {selectedAccommodation.location}
                  </div>
                </div>
                <div className="text-2xl font-bold text-kenya-gold">{selectedAccommodation.price}</div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">About This Property</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedAccommodation.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Photo Gallery</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedAccommodation.images.map((image: string, index: number) => (
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

              <div>
                <h3 className="text-lg font-semibold mb-3">Amenities & Services</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {selectedAccommodation.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center text-sm">
                      <Star className="w-4 h-4 text-kenya-gold mr-2 flex-shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

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
                  Book This Stay
                </Button>
                <Button variant="outline" size="lg" className="flex-1" onClick={handleCloseModal}>
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

export default Zanzibar;
