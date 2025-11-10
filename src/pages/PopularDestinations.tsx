import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Helmet } from 'react-helmet-async';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Globe2, Flag } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type CountryFilter = 'all' | 'kenya' | 'tanzania';

type DestinationCard = {
  id: string;
  country: 'Kenya' | 'Tanzania';
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: string;
  rating: number;
  price: string;
};

const getFilterFromParam = (value: string | null): CountryFilter => {
  if (value === 'kenya' || value === 'tanzania') {
    return value;
  }
  return 'all';
};

const DESTINATIONS: DestinationCard[] = [
  {
    id: 'salt-lick-sanctuary',
    country: 'Kenya',
    name: 'Salt Lick Sanctuary',
    tagline: 'Waterhole Watchtowers',
    description: 'Famous elevated walkways and waterholes attracting elephants, buffalo and more in a serene Tsavo ecosystem setting.',
    image: 'https://www.kenyasafari.com/images/salt-lick-elephants-590x390.jpeg',
    highlights: ['Elevated viewing', 'Waterhole wildlife', 'Quiet setting', 'Easy game drives'],
    bestTime: 'June - September',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.6,
    price: 'From $260/day'
  },
  {
    id: 'ol-pejeta',
    country: 'Kenya',
    name: 'Ol Pejeta Conservancy',
    tagline: 'Conservation & Big Five',
    description: 'Leading conservancy known for innovative conservation, chimpanzee sanctuary and the last two northern white rhinos.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwHXs4mLmvgipw3pDkyhH8rT9ZTJrkE_yNKbLdWIl9_BWbAVIlLKTxU055DU8fItpIp3Bsucs7dB1R3uFD-Hth7ZCpdCPSvLABqI5GiZ26NuDxJVegQYRvY2_BCtYRHy_9pvbdC2YWdo1VD=s1360-w1360-h1020-rw',
    highlights: ['Big Five', 'Chimpanzee sanctuary', 'Rhino conservation', 'Night drives'],
    bestTime: 'July - September',
    duration: '2-3 days',
    difficulty: 'Easy',
    rating: 4.8,
    price: 'From $380/day'
  },
  {
    id: 'solio-conservancy',
    country: 'Kenya',
    name: 'Solio Conservancy',
    tagline: 'Rhino Stronghold',
    description: 'Private conservancy between Mount Kenya and Aberdares, renowned for concentrated rhino populations and peaceful drives.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/ae/7d/58/caption.jpg?w=1400&h=-1&s=1',
    highlights: ['Rhino encounters', 'Scenic backdrops', 'Exclusive feel', 'Birdlife'],
    bestTime: 'June - September',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.7,
    price: 'From $320/day'
  },
  {
    id: 'meru-national-park',
    country: 'Kenya',
    name: 'Meru National Park',
    tagline: 'Wild & Undiscovered',
    description: 'Diverse rivers, doum palms and volcanic hills with rewarding game viewing away from crowds.',
    image: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSykK3yU5gLBbw5MOW7kRGaLbv0sSB71IZDAimVLP8jZp2HRjIZvfLhtFwd5WZ6veeBXcn-XLwKu-Wl2XHA1FX-et2b52pHDkQAa0l1pl6b6rK-YiW-MGZ0PZy1mm5U8mC4BaE1JJA=s1360-w1360-h1020-rw',
    highlights: ['Rivers & palms', 'Varied habitats', 'Fewer vehicles', 'Conservation legacy'],
    bestTime: 'June - September',
    duration: '2-3 days',
    difficulty: 'Moderate',
    rating: 4.6,
    price: 'From $340/day'
  },
  {
    id: 'lake-elementaita',
    country: 'Kenya',
    name: 'Lake Elementaita',
    tagline: 'Quiet Soda Lake',
    description: 'Tranquil Rift Valley lake with flamingos, pelicans and sunsets—ideal for relaxed nature breaks.',
    image: 'https://jacarandahotels.com/images/elementaita/homepage/sliders/2.webp',
    highlights: ['Flamingos & pelicans', 'Soysambu Conservancy', 'Scenic walks', 'Sunsets'],
    bestTime: 'June - September',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.5,
    price: 'From $240/day'
  },
  {
    id: 'lake-bogoria',
    country: 'Kenya',
    name: 'Lake Bogoria',
    tagline: 'Flamingos & Hot Springs',
    description: 'Alkaline lake famed for geysers and seasonal flamingo gatherings in a dramatic setting.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flickr_-_Rainbirder_-_Born_of_Fire.jpg',
    highlights: ['Hot springs', 'Flamingo flocks', 'Guided walks', 'Geothermal sights'],
    bestTime: 'Nov - Apr',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.5,
    price: 'From $260/day'
  },
  {
    id: 'lake-naivasha',
    country: 'Kenya',
    name: 'Lake Naivasha',
    tagline: 'Highland Oasis',
    description: 'Freshwater lake with boat rides, Crescent Island walks and access to Hell’s Gate and Mount Longonot.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lake_Naivasha%2C_Kenya_%2832487531978%29.jpg/2560px-Lake_Naivasha%2C_Kenya_%2832487531978%29.jpg',
    highlights: ['Boat rides', 'Crescent Island', 'Longonot hikes', 'Hell’s Gate cycling'],
    bestTime: 'Nov - Mar',
    duration: '2-3 days',
    difficulty: 'Easy',
    rating: 4.7,
    price: 'From $260/day'
  },
  {
    id: 'masai-mara',
    country: 'Kenya',
    name: 'Masai Mara National Reserve',
    tagline: 'The Great Migration',
    description: 'World-famous for the annual wildebeest migration and exceptional Big Five viewing opportunities.',
    image: 'https://images.pexels.com/photos/26052413/pexels-photo-26052413.jpeg?_gl=1*16542d8*_ga*MTk4OTgwMDYwOC4xNzQ1NTg5OTU0*_ga_8JE65Q40S6*czE3NTY5MDE0NzYkbzI4JGcxJHQxNzU2OTAyMDc3JGo2JGwwJGgw',
    highlights: ['Great Migration', 'Big Five', 'Maasai Culture', 'Hot Air Balloons'],
    bestTime: 'July - October',
    duration: '3-5 days',
    difficulty: 'Easy',
    rating: 4.9,
    price: 'From $450/day'
  },
  {
    id: 'amboseli',
    country: 'Kenya',
    name: 'Amboseli National Park',
    tagline: 'Land of Giants',
    description: 'Famous for large elephant herds and spectacular views of Mount Kilimanjaro.',
    image: 'https://cdn.pixabay.com/photo/2020/05/05/16/21/elephants-5133792_1280.jpg',
    highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Birdlife', 'Maasai Villages'],
    bestTime: 'June - October, January - March',
    duration: '2-3 days',
    difficulty: 'Easy',
    rating: 4.8,
    price: 'From $380/day'
  },
  {
    id: 'tsavo-east',
    country: 'Kenya',
    name: 'Tsavo East National Park',
    tagline: 'The Red Elephants',
    description: "Kenya's largest park known for red-dust elephants and diverse landscapes.",
    image: 'https://i.pinimg.com/736x/7d/62/2b/7d622b480e6b2f0e63d60a0ba2f12b3f.jpg',
    highlights: ['Red Elephants', 'Vast Wilderness', 'Yatta Plateau', 'Man-eaters Legacy'],
    bestTime: 'June - September',
    duration: '2-4 days',
    difficulty: 'Moderate',
    rating: 4.6,
    price: 'From $320/day'
  },
  {
    id: 'tsavo-west',
    country: 'Kenya',
    name: 'Tsavo West National Park',
    tagline: 'Land of Lava',
    description: 'Diverse landscapes from volcanic hills to underground caves and natural springs.',
    image: 'https://i.pinimg.com/1200x/a5/f7/74/a5f77401bf553708dd384d37161bd491.jpg',
    highlights: ['Mzima Springs', 'Shetani Lava', 'Rhino Sanctuary', 'Chaimu Crater'],
    bestTime: 'June - September, December - March',
    duration: '2-3 days',
    difficulty: 'Moderate',
    rating: 4.7,
    price: 'From $340/day'
  },
  {
    id: 'lake-nakuru',
    country: 'Kenya',
    name: 'Lake Nakuru National Park',
    tagline: 'Pink Flamingo Paradise',
    description: 'Alkaline lake famous for millions of flamingos and successful rhino conservation.',
    image: 'https://cdn.pixabay.com/photo/2019/11/22/11/43/birds-4644652_1280.jpg',
    highlights: ['Flamingo Flocks', 'White & Black Rhinos', 'Bird Paradise', 'Baboon Cliff'],
    bestTime: 'Year-round',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.7,
    price: 'From $280/day'
  },
  {
    id: 'samburu',
    country: 'Kenya',
    name: 'Samburu National Reserve',
    tagline: 'The Special Five',
    description: 'Semi-arid landscape home to unique wildlife species found nowhere else in Kenya.',
    image: 'https://cdn.pixabay.com/photo/2020/05/05/16/21/lion-5133788_1280.jpg',
    highlights: ['Special Five', 'Samburu Culture', 'Ewaso Nyiro River', 'Unique Wildlife'],
    bestTime: 'June - September, December - March',
    duration: '2-3 days',
    difficulty: 'Moderate',
    rating: 4.8,
    price: 'From $420/day'
  },
  {
    id: 'diani-beach',
    country: 'Kenya',
    name: 'Diani Beach',
    tagline: 'Paradise Found',
    description: 'Pristine white sand beaches with crystal clear turquoise waters and world-class water sports.',
    image: 'https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_1280.jpg',
    highlights: ['White Sand Beaches', 'Coral Reefs', 'Water Sports', 'Marine Life'],
    bestTime: 'June - October, December - March',
    duration: '3-7 days',
    difficulty: 'Easy',
    rating: 4.9,
    price: 'From $250/day'
  },
  {
    id: 'serengeti',
    country: 'Tanzania',
    name: 'Serengeti National Park',
    tagline: 'Endless Plains',
    description: 'Legendary Tanzanian savannah famed for the Great Migration herds, vast lion prides, and dramatic river crossings.',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/4d/e4/8f/serengeti-national-park.jpg?w=600&h=-1&s=1',
    highlights: ['Great Migration', 'Grumeti & Mara Rivers', 'Lion Prides', 'Balloon Safaris'],
    bestTime: 'June - October, January - March',
    duration: '3-6 days',
    difficulty: 'Moderate',
    rating: 4.9,
    price: 'From $520/day'
  },
  {
    id: 'ngorongoro',
    country: 'Tanzania',
    name: 'Ngorongoro Conservation Area',
    tagline: "Nature’s Masterpiece",
    description:
      "UNESCO World Heritage Site with the world’s largest intact volcanic caldera teeming with wildlife and steeped in Maasai culture.",
    image: 'https://www.tripsavvy.com/thmb/s33VPdbJrrspXYixd6ByvK3B2No=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-148679836-5b03d89030371300373c5135.jpg',
    highlights: ['World’s largest caldera', 'Black rhino sanctuary', 'Maasai culture', 'Spectacular viewpoints'],
    bestTime: 'June - September, Nov - Dec',
    duration: '2-3 days',
    difficulty: 'Easy',
    rating: 4.9,
    price: 'From $420/day'
  },
  {
    id: 'tarangire',
    country: 'Tanzania',
    name: 'Tarangire National Park',
    tagline: 'The Hidden Gem',
    description:
      'Known for its giant baobabs, vast herds of elephants and excellent birding across swamps and river valleys.',
    image: 'https://images.squarespace-cdn.com/content/v1/54929084e4b074c56b326d39/1632894557134-63WJ93ODSDFWT6RQBHZE/View+river.jpg',
    highlights: ['Elephant herds', 'Ancient baobabs', 'Intimate safaris', '500+ bird species'],
    bestTime: 'June - September',
    duration: '2-3 days',
    difficulty: 'Easy',
    rating: 4.7,
    price: 'From $360/day'
  },
  {
    id: 'lake-manyara',
    country: 'Tanzania',
    name: 'Lake Manyara National Park',
    tagline: 'A Colorful Oasis',
    description:
      'Famed for tree‑climbing lions, lake‑edge flamingos and diverse ecosystems from forests to soda lakes.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Lake_Manyara_Wildlife.jpg/960px-Lake_Manyara_Wildlife.jpg',
    highlights: ['Tree‑climbing lions', 'Flamingo flocks', 'Forest & lake habitats', 'Great photography'],
    bestTime: 'June - September, Nov - Mar',
    duration: '1-2 days',
    difficulty: 'Easy',
    rating: 4.6,
    price: 'From $300/day'
  },
  {
    id: 'zanzibar',
    country: 'Tanzania',
    name: 'Zanzibar Archipelago',
    tagline: 'Spice Island Paradise',
    description:
      'UNESCO-listed Stone Town, pristine beaches at Nungwi and Paje, and superb snorkeling around Mnemba Atoll.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop',
    highlights: ['Stone Town', 'Powder-white beaches', 'Mnemba snorkeling', 'Jozani Forest'],
    bestTime: 'Jun - Oct, Dec - Feb',
    duration: '3-7 days',
    difficulty: 'Easy',
    rating: 4.8,
    price: 'From $220/day'
  }
];

const FILTER_BUTTONS: { value: CountryFilter; label: string; icon: LucideIcon }[] = [
  { value: 'all', label: 'All Destinations', icon: Globe2 },
  { value: 'kenya', label: 'Kenya', icon: MapPin },
  { value: 'tanzania', label: 'Tanzania', icon: Flag }
];

const PopularDestinations = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [countryFilter, setCountryFilter] = useState<CountryFilter>(() =>
    getFilterFromParam(searchParams.get('filter'))
  );

  useEffect(() => {
    const nextFilter = getFilterFromParam(searchParams.get('filter'));
    setCountryFilter((prev) => (prev === nextFilter ? prev : nextFilter));
  }, [searchParams]);

  const filteredDestinations = useMemo(() => {
    if (countryFilter === 'all') {
      return DESTINATIONS;
    }

    const targetCountry = countryFilter === 'kenya' ? 'Kenya' : 'Tanzania';
    return DESTINATIONS.filter((destination) => destination.country === targetCountry);
  }, [countryFilter]);

  const handleFilterChange = (value: CountryFilter) => {
    setCountryFilter(value);

    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', value);
    }
    setSearchParams(params, { replace: true });
  };

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

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kenya & Tanzania Destinations | Parks & Reserves | Reyona Safaris</title>
        <meta name="description" content="Explore top safari destinations across Kenya and Tanzania including Masai Mara, Serengeti, Amboseli, Tsavo, Samburu, and more." />
        <link rel="canonical" href="https://reyonasafaris.com/destinations" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-32">
        <img
          src="/beach.jpeg"
          alt="Destinations beach backdrop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 85%' }}
        />
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Popular Destinations
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover East Africa&apos;s most iconic national parks and reserves, each offering unique wildlife experiences
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            East Africa&apos;s Wildlife Treasures
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the legendary Masai Mara to Tanzania&apos;s endless Serengeti plains and Kenya&apos;s pristine beaches, 
            each destination offers its own unique character, wildlife, and unforgettable experiences. Whether you&apos;re 
            seeking the Great Migration, intimate cultural encounters, or coastal relaxation, Kenya and Tanzania provide 
            the perfect backdrop for your safari dreams.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-y border-border/60">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {FILTER_BUTTONS.map(({ value, label, icon: Icon }) => (
              <Button
                key={value}
                variant={countryFilter === value ? 'luxury' : 'outline'}
                onClick={() => handleFilterChange(value)}
                className="transition-all duration-300 flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden hover:shadow-luxury transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-kenya-purple font-semibold uppercase tracking-wide px-3 py-1 text-xs shadow-sm">
                      {destination.country}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-bold text-xl">{destination.tagline}</h3>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-kenya-purple text-white">
                        {destination.difficulty}
                      </Badge>
                    </div>
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
                  <p className="text-white/80 text-sm mb-4">Samburu + Aberdares + Lake Nakuru</p>
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
