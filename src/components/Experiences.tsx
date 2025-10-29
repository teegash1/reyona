import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Heart, Wind, Users2, Tent, Utensils } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      icon: Wind,
      title: "Sunrise Hot Air Balloon Safari",
      description: "Experience the breathtaking beauty of the African savanna from above with a sunrise hot air balloon safari. As the sun rises, witness the stunning landscapes of the Maasai Mara or Serengeti and the wildlife awakening below. This serene adventure concludes with a celebratory champagne breakfast in the wild, creating unforgettable memories."
    },
    {
      icon: Heart,
      title: "Cultural Immersion in Maasai Villages",
      description: "Engage with the vibrant Maasai culture through a guided visit to local villages. Participate in traditional dances, learn about their customs, and enjoy authentic Maasai cuisine. This unique interaction not only enriches your travel experience but also supports local communities."
    },
    {
      icon: Camera,
      title: "Guided Nature Walks with Local Experts",
      description: "Take a break from safari vehicles and join our knowledgeable local guides for a nature walk. Explore the flora and fauna of East Africa on foot, gaining insights into the ecosystem and spotting wildlife in their natural habitat. These walks are perfect for nature enthusiasts and photographers."
    },
    {
      icon: Users2,
      title: "Night Game Drives",
      description: "Embark on an exhilarating night game drive to witness the nocturnal wildlife of Kenya and Tanzania. With the help of experienced guides, discover the unique behaviors of animals after dark, such as lions hunting and hyenas scavenging. This thrilling experience adds a new dimension to your safari adventure."
    },
    {
      icon: Utensils,
      title: "Traditional Cooking Classes",
      description: "Immerse yourself in the culinary delights of East Africa with a traditional cooking class. Learn to prepare local dishes using fresh ingredients while discovering the cultural significance of each meal. This hands-on experience is a delicious way to connect with the local culture."
    },
    {
      icon: Heart,
      title: "Community Conservation Projects",
      description: "Participate in community-based conservation projects that support wildlife preservation and local communities. Engage in activities like tree planting, wildlife monitoring, or educational programs. This meaningful experience allows you to give back while learning about sustainable practices."
    }
  ];

  return (
    <section id="experiences" className="py-20 bg-muted/30">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <a
            href="/experiences"
            className="inline-flex items-center px-4 py-2 bg-kenya-purple/10 border border-kenya-purple/20 rounded-full text-kenya-purple text-sm font-medium mb-4 transition-colors hover:bg-kenya-purple/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenya-purple/50"
          >
            UNIQUE EXPERIENCES
          </a>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground px-4">
            Beyond Traditional
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Safari Adventures
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto px-4">
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
                  <h3 className="text-xl font-bold text-foreground group-hover:text-kenya-gold transition-colors">
                    {experience.title}
                  </h3>
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
                window.location.href = '/contact?scrollToGetInTouch=true';
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
                const whatsappUrl = `https://wa.me/254740086688?text=${message}`;
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
