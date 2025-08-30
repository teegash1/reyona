import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin } from 'lucide-react';

const Safaris = () => {
  const [filterCategory, setFilterCategory] = useState('all');

  const safaris = [
    {
      id: 1,
      title: "Big Five Safari Adventure",
      category: "luxury",
      duration: "7 days",
      groupSize: "Max 6",
      location: "Masai Mara & Amboseli",
      price: "$4,500",
      rating: 4.9,
      image: "/src/assets/kenya-lion.jpg",
      features: ["Big Five", "Hot Air Balloon", "Luxury Lodges", "Game Drives"]
    },
    {
      id: 2,
      title: "Cultural Heritage Safari",
      category: "cultural",
      duration: "5 days",
      groupSize: "Max 8",
      location: "Samburu & Masai Villages",
      price: "$2,800",
      rating: 4.8,
      image: "/src/assets/luxury-camp.jpg",
      features: ["Maasai Culture", "Traditional Dances", "Village Visits", "Authentic Meals"]
    },
    {
      id: 3,
      title: "Photography Safari",
      category: "specialty",
      duration: "10 days",
      groupSize: "Max 4",
      location: "Multi-Park Circuit",
      price: "$6,200",
      rating: 5.0,
      image: "/src/assets/hero-safari.jpg",
      features: ["Pro Photographer Guide", "Golden Hour Shoots", "Wildlife Photography", "Equipment Included"]
    },
    {
      id: 4,
      title: "Family Adventure Safari",
      category: "family",
      duration: "6 days",
      groupSize: "Max 10",
      location: "Lake Nakuru & Tsavo East",
      price: "$3,200",
      rating: 4.7,
      image: "/src/assets/kenya-lion.jpg",
      features: ["Family-Friendly", "Educational Activities", "Child Discounts", "Safe Adventures"]
    },
    {
      id: 5,
      title: "Mountain & Wildlife Combo",
      category: "adventure",
      duration: "12 days",
      groupSize: "Max 6",
      location: "Mount Kenya & Samburu",
      price: "$5,800",
      rating: 4.9,
      image: "/src/assets/luxury-camp.jpg",
      features: ["Mountain Climbing", "Wildlife Viewing", "Camping", "Adventure Sports"]
    },
    {
      id: 6,
      title: "Budget Explorer Safari",
      category: "budget",
      duration: "4 days",
      groupSize: "Max 12",
      location: "Tsavo West",
      price: "$1,200",
      rating: 4.5,
      image: "/src/assets/hero-safari.jpg",
      features: ["Budget-Friendly", "Group Tours", "Basic Lodging", "Essential Game Drives"]
    }
  ];

  const categories = [
    { value: 'all', label: 'All Safaris' },
    { value: 'luxury', label: 'Luxury' },
    { value: 'cultural', label: 'Cultural' },
    { value: 'specialty', label: 'Specialty' },
    { value: 'family', label: 'Family' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'budget', label: 'Budget' }
  ];

  const filteredSafaris = filterCategory === 'all' 
    ? safaris 
    : safaris.filter(safari => safari.category === filterCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-magenta/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Safari Adventures
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover Kenya's incredible wildlife through our carefully curated safari experiences
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filterCategory === category.value ? "luxury" : "outline"}
                onClick={() => setFilterCategory(category.value)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Safaris Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSafaris.map((safari) => (
              <Card key={safari.id} className="group hover:shadow-luxury transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={safari.image} 
                    alt={safari.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-kenya-gold text-black font-semibold">
                      {safari.price}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-purple text-white capitalize">
                      {safari.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-kenya-gold text-kenya-gold" />
                      <span className="text-sm font-medium">{safari.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-kenya-gold transition-colors">
                    {safari.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{safari.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{safari.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4 text-kenya-gold" />
                    <span>{safari.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {safari.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full mt-4" variant="luxury">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safaris;