import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock } from 'lucide-react';

const Destinations = () => {
  const scrollToTopAfterNav = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const destinations = [
    {
      id: 'kenya-collection',
      country: 'Kenya',
      name: "Kenya's Signature Safari Circuit",
      tagline: 'Kenyan Wildlife Wonders',
      description: "Pair the Masai Mara migration with Amboseli's elephant herds, Samburu's unique wildlife, and the white sands of Diani for a complete Kenyan adventure.",
      image: '/AAAAAAApk5.jpeg',
      highlights: ['Masai Mara Migration', 'Amboseli Elephants', 'Samburu Special Five', 'Diani Beach Sunsets'],
      bestTime: 'June - October, December - March',
      duration: '5-10 days',
      filter: 'kenya' as const
    },
    {
      id: 'tanzania-collection',
      country: 'Tanzania',
      name: "Tanzania's Legendary Safari Circuit",
      tagline: 'Endless Plains & Craters',
      description: "Track the Great Migration across Serengeti, descend into Ngorongoro Crater, wander Tarangire's baobabs, and unwind on Zanzibar's spice coast.",
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4d/e4/8f/serengeti-national-park.jpg?w=600&h=-1&s=1',
      highlights: ['Serengeti Migration', 'Ngorongoro Crater', 'Tarangire Giants', 'Zanzibar Spice Coast'],
      bestTime: 'June - October, January - March',
      duration: '6-12 days',
      filter: 'tanzania' as const
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Link
            to="/destinations"
            onClick={scrollToTopAfterNav}
            className="inline-block mb-4"
          >
            <Button
              variant="outline"
              size="sm"
              className="bg-kenya-purple/10 border-kenya-purple/20 text-kenya-purple uppercase tracking-wide transition-shadow hover:text-kenya-purple hover:bg-kenya-purple/10 hover:shadow-[0_0_18px_rgba(207,42,133,0.55)] focus-visible:shadow-[0_0_18px_rgba(207,42,133,0.55)]"
            >
              Popular Destinations
            </Button>
          </Link>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground px-4">
            Amazing Wildlife
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Treasures
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
            Discover Kenya and Tanzania&apos;s most iconic national parks and reserves, each offering unique wildlife experiences 
            and unforgettable adventures across East Africa&apos;s most spectacular wilderness destinations.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group w-full overflow-hidden hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-[5/3]">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-3 left-3">
                  <Badge className="bg-kenya-gold text-background uppercase tracking-wide px-3 py-1 text-xs shadow-sm">
                    {destination.country}
                  </Badge>
                </div>
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
                  to={`/destinations?filter=${destination.filter}`}
                  onClick={scrollToTopAfterNav}
                >
                  <Button className="w-full mt-4" variant="luxury">
                    {destination.country === 'Kenya' ? 'Explore Kenyan Destinations' : 'Explore Tanzanian Destinations'}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link to="/destinations" onClick={scrollToTopAfterNav}>
              <Button 
                variant="outline" 
                size="lg"
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
