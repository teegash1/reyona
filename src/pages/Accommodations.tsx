import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Users, Wifi, Car, Utensils, Mountain, TreePine } from 'lucide-react';
import luxuryCamp from '@/assets/luxury-camp.jpg';
import heroSafari from '@/assets/hero-safari.jpg';
import kenyaLion from '@/assets/kenya-lion.jpg';

const Accommodations = () => {
  const accommodations = [
    {
      id: 1,
      name: "Mara Serena Safari Lodge",
      location: "Masai Mara National Reserve",
      type: "Luxury Lodge",
      rating: 4.9,
      price: "From $450/night",
      image: luxuryCamp,
      features: ["Game Drives", "Swimming Pool", "Spa", "Fine Dining"],
      description: "Perched on a hilltop with panoramic views of the Masai Mara, this luxury lodge offers world-class amenities and exceptional wildlife viewing opportunities."
    },
    {
      id: 2,
      name: "Amboseli Serena Safari Lodge",
      location: "Amboseli National Park",
      type: "Luxury Lodge",
      rating: 4.8,
      price: "From $380/night",
      image: heroSafari,
      features: ["Kilimanjaro Views", "Elephant Watching", "Cultural Tours", "Bird Watching"],
      description: "Set against the backdrop of Mount Kilimanjaro, this lodge provides stunning views and close encounters with Amboseli's famous elephant herds."
    },
    {
      id: 3,
      name: "Tsavo East Safari Camp",
      location: "Tsavo East National Park",
      type: "Tented Camp",
      rating: 4.7,
      price: "From $320/night",
      image: kenyaLion,
      features: ["Wilderness Experience", "Game Drives", "Bush Walks", "Campfire Dinners"],
      description: "An authentic tented camp experience in the heart of Tsavo East, offering intimate wildlife encounters and traditional safari atmosphere."
    },
    {
      id: 4,
      name: "Lake Nakuru Lodge",
      location: "Lake Nakuru National Park",
      type: "Mid-Range Lodge",
      rating: 4.6,
      price: "From $280/night",
      image: luxuryCamp,
      features: ["Lake Views", "Flamingo Watching", "Rhino Sanctuary", "Bird Paradise"],
      description: "Overlooking the famous pink flamingo lake, this lodge provides comfortable accommodation and excellent bird watching opportunities."
    },
    {
      id: 5,
      name: "Samburu Game Lodge",
      location: "Samburu National Reserve",
      type: "Luxury Lodge",
      rating: 4.8,
      price: "From $420/night",
      image: heroSafari,
      features: ["Special Five Wildlife", "Cultural Visits", "River Views", "Luxury Tents"],
      description: "A sophisticated lodge offering luxury tented accommodation with views of the Ewaso Nyiro River and access to Samburu's unique wildlife."
    },
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
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
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
                      {/* Assuming an icon for each accommodation type */}
                      {accommodation.type === "Luxury Lodge" && <MapPin className="w-6 h-6" />}
                      {accommodation.type === "Tented Camp" && <TreePine className="w-6 h-6" />}
                      {accommodation.type === "Mid-Range Lodge" && <Users className="w-6 h-6" />}
                      {accommodation.type === "Mountain Lodge" && <Mountain className="w-6 h-6" />}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-purple text-white">
                      {accommodation.type}
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
                        {/* Assuming amenities for each accommodation type */}
                        {accommodation.type === "Luxury Lodge" && [
                          "Pool", "Spa", "Game Drives", "Fine Dining", "Wi-Fi", "Airport Transfer"
                        ].map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-kenya-gold rounded-full"></div>
                            <span>{amenity}</span>
                          </div>
                        ))}
                        {accommodation.type === "Tented Camp" && [
                          "Shared Facilities", "Campfire Meals", "Star Gazing", "Bush Walks", "Authentic Experience"
                        ].map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-kenya-gold rounded-full"></div>
                            <span>{amenity}</span>
                          </div>
                        ))}
                        {accommodation.type === "Mid-Range Lodge" && [
                          "Lake Views", "Conference Facilities", "Multiple Restaurants", "Gym", "Business Center"
                        ].map((amenity, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-kenya-gold rounded-full"></div>
                            <span>{amenity}</span>
                          </div>
                        ))}
                        {accommodation.type === "Mountain Lodge" && [
                          "Mountain Views", "Hiking Trails", "Alpine Scenery", "Adventure Activities"
                        ].map((amenity, index) => (
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
              <Button variant="luxury" size="lg">
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