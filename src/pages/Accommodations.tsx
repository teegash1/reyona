import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Wifi, Car, Utensils, Waves, TreePine, Crown, Tent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Accommodations = () => {
  const navigate = useNavigate();

  const handlePlanYourStay = () => {
    navigate('/contact', { 
      state: { 
        inquiryType: 'booking',
        scrollToForm: true 
      } 
    });
  };

  const accommodations = [
    {
      id: 1,
      name: "Serena Safari Lodge",
      category: "Luxury Lodge",
      location: "Masai Mara",
      rating: 4.9,
      price: "$450/night",
      image: "/src/assets/luxury-camp.jpg",
      icon: <Crown className="w-6 h-6" />,
      description: "Elegant lodge overlooking the Mara River with unparalleled game viewing.",
      amenities: ["Pool", "Spa", "Game Drives", "Fine Dining", "Wi-Fi", "Airport Transfer"],
      features: ["River Views", "Luxury Suites", "24/7 Service", "Private Balconies"]
    },
    {
      id: 2,
      name: "Samburu Elephant Lodge",
      category: "Eco Lodge",
      location: "Samburu National Reserve",
      rating: 4.7,
      price: "$320/night",
      image: "/src/assets/hero-safari.jpg",
      icon: <TreePine className="w-6 h-6" />,
      description: "Sustainable luxury in the heart of Samburu with elephant watching from your room.",
      amenities: ["Solar Power", "Organic Meals", "Nature Walks", "Cultural Visits", "Library"],
      features: ["Eco-Friendly", "Elephant Viewing", "Traditional Design", "Sustainable Practices"]
    },
    {
      id: 3,
      name: "Amboseli Kilimanjaro Camp",
      category: "Tented Camp",
      location: "Amboseli National Park",
      rating: 4.8,
      price: "$280/night",
      image: "/src/assets/kenya-lion.jpg",
      icon: <Tent className="w-6 h-6" />,
      description: "Luxury tented camp with spectacular views of Mount Kilimanjaro.",
      amenities: ["Private Tents", "Campfire", "Guided Walks", "Photography Hide", "Sundowners"],
      features: ["Kilimanjaro Views", "Canvas Luxury", "Intimate Setting", "Wildlife Corridors"]
    },
    {
      id: 4,
      name: "Lake Nakuru Flamingo Resort",
      category: "Resort",
      location: "Lake Nakuru",
      rating: 4.6,
      price: "$190/night",
      image: "/src/assets/luxury-camp.jpg",
      icon: <Waves className="w-6 h-6" />,
      description: "Modern resort with panoramic lake views and easy access to rhino sanctuary.",
      amenities: ["Lake Views", "Conference Facilities", "Multiple Restaurants", "Gym", "Business Center"],
      features: ["Modern Amenities", "Family Friendly", "Bird Watching", "Rhino Viewing"]
    },
    {
      id: 5,
      name: "Tsavo Desert Camp",
      category: "Adventure Camp",
      location: "Tsavo East",
      rating: 4.4,
      price: "$150/night",
      image: "/src/assets/hero-safari.jpg",
      icon: <Tent className="w-6 h-6" />,
      description: "Authentic camping experience in the vast wilderness of Tsavo East.",
      amenities: ["Shared Facilities", "Campfire Meals", "Star Gazing", "Bush Walks", "Authentic Experience"],
      features: ["Budget Friendly", "Authentic Safari", "Wilderness Setting", "Adventure Focus"]
    },
    {
      id: 6,
      name: "Mount Kenya Safari Club",
      category: "Historic Lodge",
      location: "Mount Kenya",
      rating: 4.9,
      price: "$380/night",
      image: "/src/assets/kenya-lion.jpg",
      icon: <Crown className="w-6 h-6" />,
      description: "Historic luxury lodge at the foot of Mount Kenya with world-class amenities.",
      amenities: ["Golf Course", "Spa", "Multiple Restaurants", "Equator Marker", "Historic Charm"],
      features: ["Historic Heritage", "Mountain Views", "Championship Golf", "Luxury Heritage"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Accommodations', count: accommodations.length },
    { value: 'luxury', label: 'Luxury Lodges', count: 3 },
    { value: 'eco', label: 'Eco Lodges', count: 1 },
    { value: 'tented', label: 'Tented Camps', count: 2 },
    { value: 'budget', label: 'Budget Options', count: 1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-gold/20 to-kenya-purple/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Safari Accommodations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            From luxury lodges to authentic camps - find your perfect home in the wilderness
          </p>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Accommodation Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.slice(1).map((category) => (
              <Card key={category.value} className="text-center hover:shadow-gold transition-all duration-300">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{category.label}</h3>
                  <p className="text-muted-foreground">{category.count} options available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Accommodations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Accommodations
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="group hover:shadow-luxury transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={accommodation.image} 
                    alt={accommodation.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-kenya-gold text-black font-semibold">
                      {accommodation.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-kenya-purple">
                      {accommodation.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-purple text-white">
                      {accommodation.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-kenya-gold text-kenya-gold" />
                      <span className="text-sm font-medium">{accommodation.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-kenya-gold transition-colors">
                    {accommodation.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{accommodation.location}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {accommodation.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {accommodation.features.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Amenities:</h4>
                      <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                        {accommodation.amenities.slice(0, 4).map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-kenya-gold rounded-full"></div>
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="luxury">
                    Check Availability
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Booking Experience
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              All accommodations include airport transfers, meals, and guided activities for a worry-free safari experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Car className="w-8 h-8 mx-auto mb-2 text-kenya-gold" />
                <h3 className="font-semibold text-white mb-1">Free Transfers</h3>
                <p className="text-white/80 text-sm">Airport and park transfers included</p>
              </div>
              <div className="text-center">
                <Utensils className="w-8 h-8 mx-auto mb-2 text-kenya-gold" />
                <h3 className="font-semibold text-white mb-1">All Meals</h3>
                <p className="text-white/80 text-sm">Breakfast, lunch, and dinner provided</p>
              </div>
              <div className="text-center">
                <Wifi className="w-8 h-8 mx-auto mb-2 text-kenya-gold" />
                <h3 className="font-semibold text-white mb-1">Modern Amenities</h3>
                <p className="text-white/80 text-sm">Wi-Fi and essential comforts</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg" onClick={handlePlanYourStay}>
                Plan Your Stay
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Accommodations;