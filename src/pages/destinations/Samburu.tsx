import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { faqs as sharedFaqs } from '@/data/faqs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Mountain, TreePine, Bird, Eye, Heart, Droplets, Waves } from 'lucide-react';

const Samburu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const canonical = `https://reyonasafaris.com${location.pathname}`;
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://reyonasafaris.com/' },
      { '@type': 'ListItem', position: 2, name: 'Destinations', item: 'https://reyonasafaris.com/destinations' },
      { '@type': 'ListItem', position: 3, name: 'Samburu National Reserve', item: canonical }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sharedFaqs.slice(0, 5).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const handleBookSafariClick = (safariType) => {
    // Navigate to contact page with subject parameter and scroll to form
    navigate(`/contact?subject=${encodeURIComponent(safariType)}`);
  };

  const handleCustomSafariClick = () => {
    // Navigate to custom safari page and scroll to form
    navigate('/custom-safari?scrollToForm=true');
  };

  const highlights = [
    {
      title: "The Special Five",
      description: "Unique wildlife species found only in northern Kenya: Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx.",
      icon: <TreePine className="w-6 h-6" />
    },
    {
      title: "Samburu Culture",
      description: "Authentic cultural experiences with the colorful Samburu people, known for their distinctive dress and traditions.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Semi-Arid Landscape",
      description: "Dramatic arid landscapes with acacia forests, rocky outcrops, and the Ewaso Nyiro River.",
      icon: <Mountain className="w-6 h-6" />
    },
    {
      title: "River Wildlife",
      description: "Ewaso Nyiro River attracts diverse wildlife including elephants, crocodiles, and hippos.",
      icon: <Waves className="w-6 h-6" />
    }
  ];

  const wildlife = [
    { name: "Grevy's Zebra", description: "Largest and most endangered zebra species", abundance: "Excellent" },
    { name: "Reticulated Giraffe", description: "Distinctive net-like pattern, northern Kenya specialty", abundance: "Excellent" },
    { name: "Somali Ostrich", description: "Blue-necked ostrich subspecies", abundance: "Excellent" },
    { name: "Gerenuk", description: "Long-necked antelope that stands on hind legs", abundance: "Excellent" },
    { name: "Beisa Oryx", description: "Elegant antelope with long straight horns", abundance: "Excellent" },
    { name: "Elephants", description: "Large herds along the river", abundance: "Good" }
  ];

  const seasonalGuide = [
    {
      period: "June - October",
      title: "Dry Season",
      description: "Best wildlife viewing as animals concentrate around the river. Clear skies and comfortable temperatures.",
      weather: "Dry and hot, 35°C days, 20°C nights",
      wildlife: "Excellent - Animals at river, Special Five active",
      visibility: "Excellent wildlife viewing",
      recommendation: "Peak season"
    },
    {
      period: "January - March",
      title: "Short Dry Season",
      description: "Good weather with wildlife still active around water sources. Fewer crowds.",
      weather: "Warm and dry, occasional light rains",
      wildlife: "Very good - Special Five visible, good elephant viewing",
      visibility: "Good wildlife viewing",
      recommendation: "Great value"
    },
    {
      period: "November - December, April - May",
      title: "Rainy Seasons",
      description: "Lush green landscapes, wildlife disperses, but beautiful scenery and fewer tourists.",
      weather: "Rainy, humid, 30°C average",
      wildlife: "Good - Wildlife dispersed, Special Five still visible",
      visibility: "Limited due to rain and vegetation",
      recommendation: "Budget option"
    }
  ];

  const ecosystems = [
    {
      name: "Acacia Woodland",
      description: "Dense forests of umbrella acacias and fever trees",
      wildlife: "Giraffes, gerenuks, leopards, birds"
    },
    {
      name: "Riverine Forest",
      description: "Lush vegetation along the Ewaso Nyiro River",
      wildlife: "Elephants, hippos, crocodiles, waterbucks"
    },
    {
      name: "Rocky Outcrops",
      description: "Ancient volcanic formations and kopjes",
      wildlife: "Klipspringer, rock hyrax, eagles, vultures"
    },
    {
      name: "Open Plains",
      description: "Semi-arid grasslands with scattered bushes",
      wildlife: "Oryx, zebras, ostriches, antelopes"
    }
  ];

  const activities = [
    {
      title: "Game Drives",
      description: "Morning and afternoon drives focusing on the Special Five",
      duration: "3-4 hours",
      bestTime: "Early morning & late afternoon"
    },
    {
      title: "Cultural Visits",
      description: "Visit authentic Samburu villages and learn traditional customs",
      duration: "2-3 hours",
      bestTime: "Any time"
    },
    {
      title: "River Walks",
      description: "Guided walks along the Ewaso Nyiro River",
      duration: "1-2 hours",
      bestTime: "Morning or evening"
    },
    {
      title: "Photography Tours",
      description: "Specialized tours for wildlife and cultural photography",
      duration: "Full day",
      bestTime: "Golden hours"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="https://cdn.pixabay.com/photo/2020/05/05/16/21/lion-5133788_1280.jpg" 
          alt="Samburu landscape with lion and Special Five wildlife"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Samburu
          </h1>
          <p className="text-2xl md:text-3xl text-orange-400 font-semibold mb-4">
            Home of the Special Five
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Where unique wildlife meets authentic Samburu culture in Kenya's wild north
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => handleBookSafariClick("Book Samburu Safari")}
            >
              Book Samburu Safari
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Reserve Size</h3>
              <p className="text-muted-foreground">165 km²</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Elevation</h3>
              <p className="text-muted-foreground">800-1,200m above sea level</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Drive from Nairobi</h3>
              <p className="text-muted-foreground">5-6 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold">Famous For</h3>
              <p className="text-muted-foreground">Special Five & Culture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Samburu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystems */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Diverse Ecosystems</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystems.map((ecosystem, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{ecosystem.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{ecosystem.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Wildlife:</h4>
                    <p className="text-xs text-muted-foreground">{ecosystem.wildlife}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wildlife Viewing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">The Special Five</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wildlife.map((animal, index) => (
              <Card key={index} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">{animal.name}</CardTitle>
                    <Badge 
                      className={`
                        ${animal.abundance === 'Excellent' ? 'bg-green-500' : 
                          animal.abundance === 'Good' ? 'bg-yellow-500' : 'bg-orange-500'} 
                        text-white
                      `}
                    >
                      {animal.abundance}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{animal.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Best Time to Visit</h2>
          <div className="space-y-6">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="grid lg:grid-cols-4 gap-4 p-6">
                  <div>
                    <Badge className="bg-kenya-purple text-white mb-3">{season.period}</Badge>
                    <h3 className="text-xl font-bold mb-2">{season.title}</h3>
                    <p className="text-muted-foreground text-sm">{season.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Weather</h4>
                    <p className="text-sm text-muted-foreground">{season.weather}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Wildlife</h4>
                    <p className="text-sm text-muted-foreground">{season.wildlife}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-kenya-gold">Recommendation</h4>
                    <Badge variant="outline">{season.recommendation}</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{season.visibility}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Safari Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm">{activity.description}</p>
                  <div className="flex justify-between items-center text-xs">
                    <span><strong>Duration:</strong> {activity.duration}</span>
                  </div>
                  <div className="text-xs">
                    <strong>Best Time:</strong> {activity.bestTime}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Tips */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Photography Paradise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <TreePine className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Special Five Portraits</h3>
                <p className="text-white/80 text-sm">
                  Focus on the unique characteristics of each Special Five species. 
                  Grevy's zebra stripes, reticulated giraffe patterns, and gerenuk poses.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Cultural Photography</h3>
                <p className="text-white/80 text-sm">
                  Capture the vibrant colors and traditions of the Samburu people. 
                  Focus on traditional dress, jewelry, and daily activities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Mountain className="w-8 h-8 mb-4 text-kenya-gold" />
                <h3 className="text-xl font-semibold mb-3">Landscape Drama</h3>
                <p className="text-white/80 text-sm">
                  The semi-arid landscape creates dramatic backdrops. 
                  Use rocky outcrops and acacia trees to frame wildlife shots.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Samburu's Magic
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us for an unforgettable journey to Kenya's Special Five paradise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => handleBookSafariClick("Book Samburu Safari")}
            >
              Book Samburu Safari
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleCustomSafariClick}
            >
              Combine with Masai Mara
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Samburu;
