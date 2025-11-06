import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SafariPackages = () => {
  const packages = [
    {
      id: 1,
      title: "Ultimate Safari Package",
      description: "Experience the best of Kenya's wildlife in three iconic parks",
      image: "https://cdn.pixabay.com/photo/2013/05/17/07/21/buffalo-111703_1280.jpg",
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
      image: "https://cdn.pixabay.com/photo/2022/06/01/11/49/lion-female-7235535_1280.jpg",
      duration: "4 Days",
      groupSize: "2-8 People", 
      price: "$1,950",

      features: ["Big Five", "Migration Views", "Cultural Experience", "Luxury Tents"],
      badge: "Best Value"
    },
    {
      id: 3,
      title: "Kenya & Tanzania Safari",
      description: "Cross-border adventure through Kenya and Tanzania's most iconic parks",
      image: "https://cdn.pixabay.com/photo/2016/11/21/12/38/nature-1845134_1280.jpg",
      duration: "8 Days",
      groupSize: "2 People",
      price: "$4,400",

      features: ["Big Five", "Wildebeest Migration", "Cross-Border Safari", "Private Game Drives"],
      badge: "Cross-Border"
    },
    {
      id: 4,
      title: '3 DAYS PRIVATE HOLIDAY IN AMBOSELI (UNLEASH YOUR WILD SIDE)',
      description: 'Short private getaway to Amboseli with iconic elephant herds and Kilimanjaro views.',
      image: '/ambos.jpeg',
      duration: '3 Days',
      groupSize: '2-6 People',
      price: '$1,125',
      features: ['Private 4x4', 'Elephants', 'Kilimanjaro Views'],
      badge: 'Kenya'
    },
    {
      id: 5,
      title: '11‑DAY PRIVATE KENYAN SAFARI: AUTHENTIC DISCOVERY',
      description: 'A grand circuit through Kenya’s iconic parks with varied habitats and abundant wildlife.',
      image: '/angam.jpeg',
      duration: '11 Days',
      groupSize: '2-6 People',
      price: '$5,150',
      features: ['Private 4x4', 'Big Five', 'Boat Ride', 'Rhino Sanctuary'],
      badge: 'Kenya'
    },
    {
      id: 6,
      title: '7 DAYS 6 NIGHTS MASAI MARA, LAKE NAKURU AND AMBOSELI HONEYMOON',
      description: "Romantic multi-park adventure through Kenya's most iconic destinations",
      image: '/honeymooners.jpeg',
      duration: '7 Days',
      groupSize: '2 People',
      price: '$3,050',
      features: ['Private Game Drives', 'Big Five', 'Flamingoes', 'Elephant Herds', 'Luxury Accommodation'],
      badge: 'Honeymoon'
    }
  ];

  return (
    <section id="safaris" className="pt-10 pb-20 bg-background">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Move hero CTAs here to sit above the packages pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Link to="/safaris">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Explore Our Safaris
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                About Us
              </Button>
            </Link>
          </div>
          {/* Soft divider between CTAs and pill */}
          <div className="max-w-xl mx-auto my-4 border-t border-border/40" />
          <button
            type="button"
            onClick={() => {
              window.location.href = '/safaris';
            }}
            className="inline-flex items-center px-4 py-2 bg-kenya-gold/10 border border-kenya-gold/20 rounded-full text-kenya-gold text-sm font-medium mt-8 mb-6 transition-colors hover:bg-kenya-gold/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenya-gold/40"
          >
            POPULAR SAFARI PACKAGES
          </button>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground px-4">
            Popular Safari
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
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
                  <Badge className="bg-kenya-gold text-background font-semibold hover:bg-kenya-gold/80">
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
