import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, Camera, Mountain, Waves, TreePine, Compass, Heart } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: "Hot Air Balloon Safari",
      category: "Aerial Adventure",
      duration: "4 hours",
      groupSize: "Max 16",
      price: "$450",
      rating: 4.9,
      icon: <Compass className="w-8 h-8" />,
      image: "/src/assets/hero-safari.jpg",
      description: "Soar above the Masai Mara at sunrise and witness the Great Migration from a bird's eye view.",
      highlights: ["Sunrise Flight", "Champagne Breakfast", "Certificate", "Game Viewing"]
    },
    {
      id: 2,
      title: "Maasai Cultural Immersion",
      category: "Cultural",
      duration: "Full Day",
      groupSize: "Max 12",
      price: "$180",
      rating: 4.8,
      icon: <Heart className="w-8 h-8" />,
      image: "/src/assets/luxury-camp.jpg",
      description: "Live with the Maasai people, learn their traditions, and participate in authentic cultural ceremonies.",
      highlights: ["Village Visit", "Traditional Dance", "Authentic Meals", "Handicraft Workshop"]
    },
    {
      id: 3,
      title: "Professional Photography Workshop",
      category: "Photography",
      duration: "3 days",
      groupSize: "Max 8",
      price: "$1,200",
      rating: 5.0,
      icon: <Camera className="w-8 h-8" />,
      image: "/src/assets/kenya-lion.jpg",
      description: "Master wildlife photography with professional guides and capture award-winning shots.",
      highlights: ["Pro Equipment", "Golden Hour Sessions", "Post-Processing", "Portfolio Review"]
    },
    {
      id: 4,
      title: "Mount Kenya Trekking",
      category: "Adventure",
      duration: "5 days",
      groupSize: "Max 6",
      price: "$850",
      rating: 4.7,
      icon: <Mountain className="w-8 h-8" />,
      image: "/src/assets/luxury-camp.jpg",
      description: "Challenge yourself with Africa's second-highest peak and experience diverse ecosystems.",
      highlights: ["Summit Attempt", "Alpine Lakes", "Unique Flora", "Mountain Huts"]
    },
    {
      id: 5,
      title: "Lake Nakuru Bird Watching",
      category: "Birding",
      duration: "2 days",
      groupSize: "Max 10",
      price: "$320",
      rating: 4.6,
      icon: <TreePine className="w-8 h-8" />,
      image: "/src/assets/hero-safari.jpg",
      description: "Witness millions of flamingos and over 400 bird species in this ornithologist's paradise.",
      highlights: ["Flamingo Spectacle", "Rhino Sanctuary", "Expert Guide", "Bird Checklist"]
    },
    {
      id: 6,
      title: "Coastal Safari Extension",
      category: "Beach & Wildlife",
      duration: "4 days",
      groupSize: "Max 8",
      price: "$680",
      rating: 4.8,
      icon: <Waves className="w-8 h-8" />,
      image: "/src/assets/kenya-lion.jpg",
      description: "Combine wildlife adventures with pristine beaches and coral reef exploration.",
      highlights: ["Beach Relaxation", "Snorkeling", "Coastal Wildlife", "Dhow Cruise"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-magenta/20 to-kenya-purple/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Unique Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Beyond traditional safaris - discover Kenya through extraordinary adventures and cultural immersions
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            More Than Just Game Drives
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kenya offers a tapestry of experiences that go far beyond traditional wildlife viewing. 
            From soaring above the savanna in a hot air balloon to living with indigenous communities, 
            our curated experiences provide deep, meaningful connections with this incredible land.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="group hover:shadow-luxury transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-kenya-gold text-black font-semibold">
                      {experience.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-kenya-purple">
                      {experience.icon}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-magenta text-white">
                      {experience.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-kenya-gold text-kenya-gold" />
                      <span className="text-sm font-medium">{experience.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-kenya-gold transition-colors">
                    {experience.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{experience.groupSize}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Experience Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.highlights.map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full mt-4" variant="luxury">
                    Book Experience
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Create Your Perfect Kenya Adventure
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Combine multiple experiences for the ultimate Kenyan journey tailored to your dreams and preferences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg">
                Plan Custom Experience
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Get Expert Advice
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experiences;