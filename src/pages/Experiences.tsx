import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Mountain, Users2, Tent, Utensils } from 'lucide-react';
// Updated to use external images for better quality and variety
// import heroSafari from '@/assets/hero-safari.jpg';
// import luxuryCamp from '@/assets/luxury-camp.jpg';
// import kenyaLion from '@/assets/kenya-lion.jpg';

const Experiences = () => {
  const navigate = useNavigate();

  const handleCustomExperienceClick = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  const experiences = [
    {
      icon: Camera,
      title: "Photography Safaris",
      description: "Capture Kenya's wildlife with expert guides and perfect lighting.",
      image: "https://i.pinimg.com/736x/0d/87/44/0d874436679577f060e7742315ddde53.jpg",
      duration: "3-5 days",
      price: "From $1,200"
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Meet local Maasai communities and learn their ancient traditions.",
      image: "https://i.pinimg.com/736x/2c/78/65/2c78655d5a918f43501b27609541f820.jpg",
      duration: "2-3 days",
      price: "From $800"
    },
    {
      icon: Mountain,
      title: "Mount Kenya Climbing",
      description: "Conquer Africa's second highest peak with experienced guides.",
      image: "https://i.pinimg.com/736x/82/df/f0/82dff08b776c6b1adf1d48729723b01d.jpg",
      duration: "5-7 days",
      price: "From $1,500"
    },
    {
      icon: Users2,
      title: "Family Adventures",
      description: "Child-friendly safaris designed for unforgettable family memories.",
      image: "https://i.pinimg.com/1200x/9b/9f/12/9b9f121ede51b5a76bc1b9f0ca7160ba.jpg",
      duration: "4-6 days",
      price: "From $1,800"
    },
    {
      icon: Tent,
      title: "Luxury Camping",
      description: "Glamping under African stars with premium amenities.",
      image: "https://i.pinimg.com/736x/4f/12/63/4f12633c31d0d79cd0360edd78438e05.jpg",
      duration: "2-4 days",
      price: "From $1,000"
    },
    {
      icon: Utensils,
      title: "Culinary Journeys",
      description: "Taste authentic Kenyan cuisine and bush dining experiences.",
      image: "https://i.pinimg.com/736x/f5/04/0b/f5040b6df55321686d7c32c4b18d7f7e.jpg",
      duration: "3-4 days",
      price: "From $900"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-magenta/20 to-kenya-purple/20 flex items-center justify-center pt-32">
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
            {experiences.map((experience, index) => (
              <Card key={index} className="group hover:shadow-luxury transition-all duration-500 overflow-hidden">
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
                      <experience.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="space-y-4 pt-6">
                  <h3 className="text-xl font-bold text-kenya-gold group-hover:text-kenya-purple transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {experience.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <span>{experience.duration}</span>
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
              <Button variant="luxury" size="lg" onClick={handleCustomExperienceClick}>
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