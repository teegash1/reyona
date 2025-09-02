import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users } from 'lucide-react';

const Destinations = () => {
  const destinations = [
    {
      id: 'masai-mara',
      name: 'Masai Mara National Reserve',
      tagline: 'The Great Migration',
      description: 'World-famous for the annual wildebeest migration and exceptional Big Five viewing opportunities.',
      image: '/src/assets/hero-safari.jpg',
      highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Hot Air Balloons'],
      bestTime: 'July - October',
      duration: '3-5 days',
      difficulty: 'Easy',
      rating: 4.9,
      price: 'From $450/day'
    },
    {
      id: 'amboseli',
      name: 'Amboseli National Park',
      tagline: 'Land of Giants',
      description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro.',
      image: '/src/assets/kenya-lion.jpg',
      highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Birdlife', 'Maasai Villages'],
      bestTime: 'June - October, January - March',
      duration: '2-3 days',
      difficulty: 'Easy',
      rating: 4.8,
      price: 'From $380/day'
    },
    {
      id: 'tsavo-east',
      name: 'Tsavo East National Park',
      tagline: 'The Red Elephants',
      description: 'Kenya\'s largest park known for red-dust elephants and diverse landscapes.',
      image: '/src/assets/luxury-camp.jpg',
      highlights: ['Red Elephants', 'Vast Wilderness', 'Yatta Plateau', 'Man-eaters Legacy'],
      bestTime: 'June - September',
      duration: '2-4 days',
      difficulty: 'Moderate',
      rating: 4.6,
      price: 'From $320/day'
    },
    {
      id: 'lake-nakuru',
      name: 'Lake Nakuru National Park',
      tagline: 'Pink Flamingo Paradise',
      description: 'Alkaline lake famous for millions of flamingos and successful rhino conservation.',
      image: '/src/assets/kenya-lion.jpg',
      highlights: ['Flamingo Flocks', 'White & Black Rhinos', 'Bird Paradise', 'Baboon Cliff'],
      bestTime: 'Year-round',
      duration: '1-2 days',
      difficulty: 'Easy',
      rating: 4.7,
      price: 'From $280/day'
    },
    {
      id: 'samburu',
      name: 'Samburu National Reserve',
      tagline: 'The Special Five',
      description: 'Semi-arid landscape home to unique wildlife species found nowhere else in Kenya.',
      image: '/src/assets/luxury-camp.jpg',
      highlights: ['Special Five', 'Samburu Culture', 'Ewaso Nyiro River', 'Unique Wildlife'],
      bestTime: 'June - September, December - March',
      duration: '2-3 days',
      difficulty: 'Moderate',
      rating: 4.8,
      price: 'From $420/day'
    },
    {
      id: 'mount-kenya',
      name: 'Mount Kenya National Park',
      tagline: 'Africa\'s Second Highest Peak',
      description: 'UNESCO World Heritage site offering trekking, diverse ecosystems, and alpine landscapes.',
      image: '/src/assets/hero-safari.jpg',
      highlights: ['Mountain Climbing', 'Alpine Lakes', 'Unique Flora', 'UNESCO Heritage'],
      bestTime: 'January - February, September - October',
      duration: '3-5 days',
      difficulty: 'Challenging',
      rating: 4.6,
      price: 'From $380/day'
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-2">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-kenya-purple/10 border border-kenya-purple/20 rounded-full text-kenya-purple text-sm font-medium mb-4">
            POPULAR DESTINATIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Kenya's Wildlife
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Treasures
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover Kenya's most iconic national parks and reserves, each offering unique wildlife experiences 
            and unforgettable adventures in Africa's most spectacular wilderness destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {destinations.slice(0, 3).map((destination) => (
            <Card key={destination.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-500 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{destination.tagline}</h3>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-kenya-gold transition-colors">
                  {destination.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {destination.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.bestTime}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link 
                  to={`/destinations/${destination.id}`}
                  onClick={() => {
                    // Scroll to top when navigating to destination page
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                >
                  <Button className="w-full mt-4" variant="luxury">
                    Explore Destination
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/destinations">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Scroll to top when navigating to destinations page
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
              >
                View All Destinations
              </Button>
            </Link>
            <Link to="/custom-safari?scrollToForm=true">
              <Button variant="default" size="lg">
                Plan Multi-Destination Safari
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
