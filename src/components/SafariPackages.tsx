import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Clock, Star } from 'lucide-react';
import luxuryCamp from '@/assets/luxury-camp.jpg';
import kenyaLion from '@/assets/kenya-lion.jpg';

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Majestic Masai Mara Experience",
      description: "Witness the Great Migration in Kenya's most famous reserve",
      image: kenyaLion,
      duration: "5 Days",
      groupSize: "2-8 People",
      price: "$2,450",
      rating: 4.9,
      features: ["Game Drives", "Cultural Visit", "Luxury Tents", "All Meals"],
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Amboseli Elephant Paradise",
      description: "Get close to elephants with Mount Kilimanjaro backdrop",
      image: luxuryCamp,
      duration: "4 Days",
      groupSize: "2-12 People", 
      price: "$1,890",
      rating: 4.8,
      features: ["Elephant Watching", "Mountain Views", "Bush Walks", "Photography"],
      badge: "Best Value"
    },
    {
      id: 3,
      title: "Tsavo East & West Adventure",
      description: "Explore Kenya's largest national park system",
      image: kenyaLion,
      duration: "6 Days",
      groupSize: "4-10 People",
      price: "$2,100",
      rating: 4.7,
      features: ["Red Elephants", "Mzima Springs", "Rock Climbing", "Night Drives"],
      badge: "Adventure"
    }
  ];

  return (
    <section id="safaris" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-kenya-gold/10 border border-kenya-gold/20 rounded-full text-kenya-gold text-sm font-medium mb-4">
            SAFARI PACKAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Curated Safari
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Adventures
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kenya's incredible wildlife through our carefully crafted safari experiences, 
            each designed to create unforgettable memories in Africa's most spectacular destinations.
          </p>
        </div>

        {/* Safari Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="group overflow-hidden bg-card border-border hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-kenya-gold text-background font-semibold">
                    {pkg.badge}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-kenya-gold fill-current" />
                    <span className="text-white text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-kenya-gold transition-colors">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Package Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Includes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-kenya-gold">{pkg.price}</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>
                  <Button variant="luxury" size="sm">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="mr-4">
            View All Safaris
          </Button>
          <Button variant="default" size="lg">
            Custom Safari Planner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;