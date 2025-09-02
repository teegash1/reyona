import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users } from 'lucide-react';
import heroSafari from '@/assets/hero-safari.jpg';
import kenyaLion from '@/assets/kenya-lion.jpg';
import luxuryCamp from '@/assets/luxury-camp.jpg';

const PopularDestinations = () => {
  const navigate = useNavigate();

  const handleCustomSafariClick = () => {
    // Navigate to custom safari page and scroll to form
    navigate('/custom-safari');
    // Scroll to form after navigation
    setTimeout(() => {
      const formElement = document.getElementById('custom-safari-form');
      if (formElement) {
        const headerHeight = 120; // Approximate header height
        const formTop = formElement.offsetTop;
        window.scrollTo({
          top: formTop - headerHeight - 20, // 20px additional spacing
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const destinations = [
    {
      id: 'masai-mara',
      name: 'Masai Mara National Reserve',
      tagline: 'The Great Migration',
      description: 'World-famous for the annual wildebeest migration and exceptional Big Five viewing opportunities.',
      image: heroSafari,
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
      image: kenyaLion,
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
      image: luxuryCamp,
      highlights: ['Red Elephants', 'Vast Wilderness', 'Yatta Plateau', 'Man-eaters Legacy'],
      bestTime: 'June - September',
      duration: '2-4 days',
      difficulty: 'Moderate',
      rating: 4.6,
      price: 'From $320/day'
    },
    {
      id: 'tsavo-west',
      name: 'Tsavo West National Park',
      tagline: 'Land of Lava',
      description: 'Diverse landscapes from volcanic hills to underground caves and natural springs.',
      image: heroSafari,
      highlights: ['Mzima Springs', 'Shetani Lava', 'Rhino Sanctuary', 'Chaimu Crater'],
      bestTime: 'June - September, December - March',
      duration: '2-3 days',
      difficulty: 'Moderate',
      rating: 4.7,
      price: 'From $340/day'
    },
    {
      id: 'lake-nakuru',
      name: 'Lake Nakuru National Park',
      tagline: 'Pink Flamingo Paradise',
      description: 'Alkaline lake famous for millions of flamingos and successful rhino conservation.',
      image: kenyaLion,
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
      image: luxuryCamp,
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
      image: heroSafari,
      highlights: ['Mountain Climbing', 'Alpine Lakes', 'Unique Flora', 'UNESCO Heritage'],
      bestTime: 'January - February, September - October',
      duration: '3-5 days',
      difficulty: 'Challenging',
      rating: 4.6,
      price: 'From $380/day'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-magenta/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Popular Destinations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover Kenya's most iconic national parks and reserves, each offering unique wildlife experiences
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Kenya's Wildlife Treasures
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the legendary Masai Mara to the towering peaks of Mount Kenya, each destination offers 
            its own unique character, wildlife, and unforgettable experiences. Whether you're seeking 
            the Great Migration, intimate cultural encounters, or challenging mountain adventures, 
            Kenya's diverse landscapes provide the perfect backdrop for your safari dreams.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-kenya-gold text-black font-semibold">
                      {destination.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-xl">{destination.tagline}</h3>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-purple text-white">
                      {destination.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-kenya-gold text-kenya-gold" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
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

                  <Link to={`/destinations/${destination.id}`}>
                    <Button className="w-full mt-4" variant="luxury">
                      Explore Destination
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Planning Your Multi-Destination Safari
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-3xl mx-auto">
              Combine multiple destinations for the ultimate Kenya experience
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="pt-8 pb-6">
                  <Camera className="w-12 h-12 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="text-xl font-semibold mb-3">Classic Circuit</h3>
                  <p className="text-white/80 text-sm mb-4">Masai Mara + Amboseli + Lake Nakuru</p>
                  <p className="text-white/70 text-xs">7-10 days • Perfect first safari</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="pt-8 pb-6">
                  <Users className="w-12 h-12 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="text-xl font-semibold mb-3">Northern Adventure</h3>
                  <p className="text-white/80 text-sm mb-4">Samburu + Mount Kenya + Aberdares</p>
                  <p className="text-white/70 text-xs">8-12 days • Off the beaten path</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white text-center">
                <CardContent className="pt-8 pb-6">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="text-xl font-semibold mb-3">Grand Safari</h3>
                  <p className="text-white/80 text-sm mb-4">All major parks + coastal extension</p>
                  <p className="text-white/70 text-xs">14-21 days • Ultimate experience</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg" onClick={handleCustomSafariClick}>
                Plan Custom Multi-Park Safari
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                View All Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PopularDestinations;