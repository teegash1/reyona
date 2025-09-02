import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';
import luxuryCamp from '@/assets/luxury-camp.jpg';
import kenyaLion from '@/assets/kenya-lion.jpg';

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Ultimate Safari Package",
      description: "Experience the best of Kenya's wildlife in three iconic parks",
      image: kenyaLion,
      duration: "6 Days",
      groupSize: "2-8 People",
      price: "$2,260",

      features: ["Big Five", "Elephant Herds", "Flamingoes", "Migration Views"],
      badge: "Most Popular"
    },
    {
      id: 2,
      title: "Masai Mara Adventure",
      description: "Perfect introduction to Kenya's most famous wildlife reserve",
      image: luxuryCamp,
      duration: "4 Days",
      groupSize: "2-8 People", 
      price: "$1,950",

      features: ["Big Five", "Migration Views", "Cultural Experience", "Luxury Tents"],
      badge: "Best Value"
    },
    {
      id: 3,
      title: "Honeymoon Safari Package",
      description: "Romantic getaway in the heart of the African wilderness",
      image: luxuryCamp,
      duration: "4 Days",
      groupSize: "2 People",
      price: "$3,800",

      features: ["Private Game Drives", "Bush Meals", "Sundowners", "Luxury Accommodation"],
      badge: "Honeymoon"
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
                  <Button 
                    variant="luxury" 
                    size="sm"
                    onClick={() => {
                      const url = `/contact?subject=${encodeURIComponent(pkg.title)}`;
                      window.location.href = url;
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                window.location.href = '/safaris';
              }}
            >
              View All Safaris
            </Button>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => {
                window.location.href = '/custom-safari?scrollToForm=true';
              }}
            >
              Custom Safari Planner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariPackages;