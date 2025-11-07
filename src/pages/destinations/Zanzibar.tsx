import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Clock, Users, Waves, TreePalm, Fish, Castle, Sun, Thermometer } from 'lucide-react';

const Zanzibar = () => {
  const navigate = useNavigate();

  const handleBookSafariClick = (subject: string) => {
    navigate(`/contact?subject=${encodeURIComponent(subject)}`);
  };

  const handleCustomSafariClick = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  

  const highlights = [
    {
      title: 'Stone Town (UNESCO)',
      description:
        'Historic maze of alleys, spice markets, carved doors, and cultural heritage along the Swahili coast.',
      icon: <Castle className="w-6 h-6" />,
    },
    {
      title: 'World-Class Beaches',
      description:
        'Powder-white sands and turquoise waters at Nungwi, Kendwa, Paje and Jambiani.',
      icon: <TreePalm className="w-6 h-6" />,
    },
    {
      title: 'Marine Paradise',
      description:
        'Snorkel and dive Mnemba Atoll; frequent dolphin encounters near Kizimkazi.',
      icon: <Fish className="w-6 h-6" />,
    },
    {
      title: 'Spice Island',
      description:
        'Aromatic spice farms with cloves, vanilla, cinnamon, and interactive tasting tours.',
      icon: <Camera className="w-6 h-6" />,
    },
  ];

  const experiences = [
    {
      title: 'Stone Town Walking Tour',
      details: 'Explore palaces, Forodhani Gardens, House of Wonders, and bustling bazaars.',
      duration: '2-3 hours',
      bestTime: 'Late afternoon for cooler temperatures',
    },
    {
      title: 'Mnemba Atoll Snorkeling',
      details: 'Crystal-clear reefs with tropical fish, turtles; excellent visibility.',
      duration: 'Half-day',
      bestTime: 'Generally best Jun–Oct; mornings often calmer',
    },
    {
      title: 'Jozani Forest & Red Colobus',
      details: 'Walk boardwalks through mangroves and see endemic Zanzibar red colobus monkeys.',
      duration: '2-3 hours',
      bestTime: 'Morning or late afternoon',
    },
    {
      title: 'Prison Island (Changuu)',
      details: 'Short boat ride from Stone Town; meet giant tortoises and snorkel nearby.',
      duration: '2-4 hours',
      bestTime: 'Morning departures; combine with Stone Town',
    },
  ];

  const seasonalGuide = [
    {
      period: 'June - October',
      title: 'Long Dry Season',
      description: 'Best overall weather: sunny, low humidity, calm seas; peak beach conditions.',
      weather: 'Dry, 26–29°C days, cooler evenings',
      sea: 'Calmer seas, excellent visibility',
      crowds: 'High (peak season)',
    },
    {
      period: 'December - February',
      title: 'Short Dry Season',
      description: 'Warm and sunny with lively festive atmosphere; great for water activities.',
      weather: 'Warm, 28–31°C, occasional brief showers',
      sea: 'Good visibility, generally calm',
      crowds: 'High around holidays',
    },
    {
      period: 'March - May',
      title: 'Long Rains',
      description: 'Heavier rains and humidity; lush landscapes and fewer visitors.',
      weather: 'Humid, frequent rain, 27–29°C',
      sea: 'Choppier seas possible',
      crowds: 'Low (value season)',
    },
    {
      period: 'November',
      title: 'Short Rains',
      description: 'Intermittent showers with sunny breaks; good value and fewer crowds.',
      weather: 'Warm with scattered showers',
      sea: 'Variable visibility, often fine',
      crowds: 'Moderate–low',
    },
  ];

  

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop"
          alt="Zanzibar beaches"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <Badge className="bg-kenya-gold text-black mb-4">Tanzania</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Zanzibar Archipelago</h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            The Spice Island: a blend of pristine beaches, living Swahili heritage, and vibrant marine life — perfect to pair with a northern Tanzania safari.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Book Zanzibar Holiday')}>
              Book Zanzibar Holiday
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={handleCustomSafariClick}
            >
              Combine with Tanzania Safari
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Visit Zanzibar</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <Card key={idx} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-kenya-gold/10 text-kenya-gold">{h.icon}</div>
                    <CardTitle className="text-lg">{h.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Signature Experiences</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {experiences.map((ex, idx) => (
              <Card key={idx} className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{ex.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p className="text-muted-foreground">{ex.details}</p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{ex.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Sun className="w-4 h-4" />
                    <span>{ex.bestTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When to Visit</h2>
          <div className="space-y-8">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  <div>
                    <Badge className="bg-kenya-purple text-white mb-3">{season.period}</Badge>
                    <h3 className="text-2xl font-bold mb-3">{season.title}</h3>
                    <p className="text-muted-foreground">{season.description}</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Thermometer className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Weather</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.weather}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Waves className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Sea Conditions</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.sea}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-kenya-gold" />
                        <span className="font-semibold text-sm">Crowds</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{season.crowds}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Plan Your Zanzibar Escape</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Relax on Zanzibar’s shores or add it as a perfect beach finale after your Serengeti and Ngorongoro safari.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg" onClick={() => handleBookSafariClick('Book Zanzibar Holiday')}>
                Book Zanzibar Holiday
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={handleCustomSafariClick}
              >
                Combine with Tanzania Safari
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      
    </div>
  );
};

export default Zanzibar;
