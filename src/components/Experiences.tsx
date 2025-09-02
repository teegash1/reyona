import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Heart, Mountain, Users2, Tent, Utensils } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: Camera,
      title: "Photography Safaris",
      description: "Capture Kenya's wildlife with expert guides and perfect lighting."
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Meet local Maasai communities and learn their ancient traditions."
    },
    {
      icon: Mountain,
      title: "Mount Kenya Climbing",
      description: "Conquer Africa's second highest peak with experienced guides."
    },
    {
      icon: Users2,
      title: "Family Adventures",
      description: "Child-friendly safaris designed for unforgettable family memories."
    },
    {
      icon: Tent,
      title: "Luxury Camping",
      description: "Glamping under African stars with premium amenities."
    },
    {
      icon: Utensils,
      title: "Culinary Journeys",
      description: "Taste authentic Kenyan cuisine and bush dining experiences."
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-kenya-purple/10 border border-kenya-purple/20 rounded-full text-kenya-purple text-sm font-medium mb-4">
            UNIQUE EXPERIENCES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Beyond Traditional
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Safari Adventures
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Immerse yourself in Kenya's rich culture, stunning landscapes, and diverse activities 
            that go beyond wildlife viewing to create truly transformative experiences.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="group bg-card border-border hover:shadow-luxury hover:border-kenya-gold/30 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-kenya-gold transition-colors">
                    {experience.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            Create Your Perfect Kenyan Adventure
          </h3>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Let our expert team create a personalized safari experience tailored to your dreams and preferences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              variant="luxury" 
              size="lg"
              onClick={() => {
                window.location.href = '/contact?scrollToForm=true';
              }}
            >
              Plan My Safari
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => {
                const message = encodeURIComponent("Greetings, I am in need of assistance on planning my safari to Kenya.");
                const whatsappUrl = `https://wa.me/254707694388?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              Get Expert Advice
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;