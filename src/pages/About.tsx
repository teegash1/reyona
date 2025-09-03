import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Globe, Award, Heart, Shield, Leaf, Camera } from 'lucide-react';
import kenyaLion from '@/assets/kenya-lion.jpg';
import luxuryCamp from '@/assets/luxury-camp.jpg';
import heroSafari from '@/assets/hero-safari.jpg';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Wildlife",
      description: "Our deep love for Kenya's wildlife and landscapes drives everything we do. We believe in creating meaningful connections between travelers and nature."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Your safety and security are paramount. We maintain the highest safety standards and work with experienced guides and trusted partners."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Conservation Focus",
      description: "We're committed to responsible tourism that supports conservation efforts and benefits local communities while preserving wildlife habitats."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Our safaris directly support local communities through employment, cultural exchanges, and community development projects."
    }
  ];

  const team = [
    {
      name: "Yvonne Agala",
      role: "Founder & CEO",
      experience: "12+ years",
      specialty: "Travel & Tourism",
      image: kenyaLion,
      description: "A passionate Kenyan entrepreneur, Yvonne's love for travel and deep connection to Kenya inspired her to create Reyona Safaris. She leads with vision and dedication to authentic experiences."
    },
    {
      name: "Sarah Wanjiku",
      role: "Operations Manager",
      experience: "12+ years",
      specialty: "Cultural Tours",
      image: luxuryCamp,
      description: "Sarah specializes in cultural immersion experiences and manages our community partnerships across Kenya."
    },
    {
      name: "James Muthoni",
      role: "Head Guide",
      experience: "18+ years",
      specialty: "Bird Watching",
      image: heroSafari,
      description: "James is one of Kenya's most experienced guides with extensive knowledge of all major parks and reserves."
    }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "5,000+", label: "Happy Travelers" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Years Experience" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-gold/20 flex items-center justify-center pt-32">
        {/* Background Image with 50% opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2018/11/15/09/07/kenya-3816810_1280.jpg')`,
            opacity: '0.5'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Reyona Safaris
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Born from a deep love for Kenya's wildlife and culture, we create authentic safari experiences that transform lives
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              Reyona Safaris was born from the vision of Yvonne Agala, a passionate Kenyan entrepreneur whose love for travel and deep connection to her homeland inspired her to create something extraordinary. Growing up in Nairobi, Yvonne was captivated by the stories of Kenya's magnificent wildlife and the rich cultural heritage that surrounded her.
            </p>
            <p className="text-muted-foreground">
              After exploring various corners of the world and experiencing different cultures, Yvonne realized that Kenya possessed something truly unique – a perfect blend of breathtaking landscapes, diverse wildlife, and warm hospitality that could create life-changing experiences for travelers. She noticed that many safari companies were offering standardized tours that missed the authentic essence of what makes Kenya special.
            </p>
            <p className="text-muted-foreground">
              Driven by her passion for travel and her desire to showcase Kenya's beauty to the world, Yvonne founded Reyona Safaris with a simple yet powerful mission: to create personalized, authentic safari experiences that would not only showcase Kenya's natural wonders but also support local communities and conservation efforts. She believed that every traveler deserved to experience the magic of Kenya in a way that was meaningful, responsible, and unforgettable.
            </p>
            <p className="text-muted-foreground">
              Today, Reyona Safaris stands as a testament to Yvonne's vision – a company that has transformed the lives of thousands of travelers while maintaining the highest standards of service, sustainability, and authenticity. Her passion for travel continues to inspire every aspect of our operations, ensuring that every safari experience is crafted with the same love and dedication that inspired her to start this incredible journey.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Our Achievements</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-kenya-gold">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-white/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-kenya-gold font-semibold">{member.role}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge className="bg-kenya-purple text-white">{member.experience}</Badge>
                    <Badge variant="outline">{member.specialty}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Commitment */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Conservation Commitment</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that tourism should be a force for good, supporting both wildlife conservation and community development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kenya-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wildlife Conservation</h3>
                  <p className="text-muted-foreground">10% of our profits directly support anti-poaching efforts and wildlife research programs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kenya-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Development</h3>
                  <p className="text-muted-foreground">We employ local guides, use community-owned accommodations, and support education initiatives.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-kenya-magenta rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Responsible Tourism</h3>
                  <p className="text-muted-foreground">We follow strict guidelines to minimize environmental impact and ensure ethical wildlife interactions.</p>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img 
                src={kenyaLion} 
                alt="Conservation efforts"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Certifications & Memberships</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Kenya Association of Tour Operators</h3>
              <p className="text-muted-foreground text-sm">Licensed member since 2008</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Ecotourism Kenya</h3>
              <p className="text-muted-foreground text-sm">Certified eco-friendly operator</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Kenya Wildlife Service</h3>
              <p className="text-muted-foreground text-sm">Authorized safari operator</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;