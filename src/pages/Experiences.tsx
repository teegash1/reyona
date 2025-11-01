import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Wind, Users2, Tent, Utensils } from 'lucide-react';
import maraBalloon from '@/assets/Mara Hot Air Ballooning.jpeg';
// Updated to use external images for better quality and variety
// import heroSafari from '@/assets/hero-safari.jpg';
// import luxuryCamp from '@/assets/luxury-camp.jpg';
// import kenyaLion from '@/assets/kenya-lion.jpg';

const Experiences = () => {
  const navigate = useNavigate();

  const handleCustomExperienceClick = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  const handleBookExperienceClick = (experienceTitle) => {
    // Navigate to contact page with subject parameter and scroll to form
    navigate(`/contact?subject=${encodeURIComponent(experienceTitle)}`);
  };

  const experiences = [
    {
      icon: Wind,
      title: "Sunrise Hot Air Balloon Safari",
      description: "Experience the breathtaking beauty of the African savanna from above with a sunrise hot air balloon safari. As the sun rises, witness the stunning landscapes of the Maasai Mara or Serengeti and the wildlife awakening below. This serene adventure concludes with a celebratory champagne breakfast in the wild, creating unforgettable memories.",
      image: maraBalloon,
      duration: "Half day",
      price: "On request"
    },
    {
      icon: Heart,
      title: "Cultural Immersion in Maasai Villages",
      description: "Engage with the vibrant Maasai culture through a guided visit to local villages. Participate in traditional dances, learn about their customs, and enjoy authentic Maasai cuisine. This unique interaction not only enriches your travel experience but also supports local communities.",
      image: "/AAcultureimersion.jpeg",
      duration: "Half to full day",
      price: "On request"
    },
    {
      icon: Camera,
      title: "Guided Nature Walks with Local Experts",
      description: "Take a break from safari vehicles and join our knowledgeable local guides for a nature walk. Explore the flora and fauna of East Africa on foot, gaining insights into the ecosystem and spotting wildlife in their natural habitat. These walks are perfect for nature enthusiasts and photographers.",
      image: "https://cdn.pixabay.com/photo/2019/03/23/13/54/canopy-4075422_1280.jpg",
      duration: "2-3 hours",
      price: "On request"
    },
    {
      icon: Users2,
      title: "Night Game Drives",
      description: "Embark on an exhilarating night game drive to witness the nocturnal wildlife of Kenya and Tanzania. With the help of experienced guides, discover the unique behaviors of animals after dark, such as lions hunting and hyenas scavenging. This thrilling experience adds a new dimension to your safari adventure.",
      image: "https://cdn.pixabay.com/photo/2020/02/22/23/03/lion-4871786_1280.jpg",
      duration: "2-3 hours",
      price: "On request"
    },
    {
      icon: Utensils,
      title: "Traditional Cooking Classes",
      description: "Immerse yourself in the culinary delights of East Africa with a traditional cooking class. Learn to prepare local dishes using fresh ingredients while discovering the cultural significance of each meal. This hands-on experience is a delicious way to connect with the local culture.",
      image: "/AAtraditionalcooking.jpeg",
      duration: "Half day",
      price: "On request"
    },
    {
      icon: Heart,
      title: "Community Conservation Projects",
      description: "Participate in community-based conservation projects that support wildlife preservation and local communities. Engage in activities like tree planting, wildlife monitoring, or educational programs. This meaningful experience allows you to give back while learning about sustainable practices.",
      image: "/AAcommcons.jpeg",
      duration: "Half to full day",
      price: "On request"
    },
    {
      icon: Camera,
      title: "Bird Watching Expeditions",
      description: "Explore the rich avian diversity of Kenya and Tanzania on specialized bird watching expeditions. Guided by local ornithologists, you’ll spot both endemic and migratory species in stunning settings. This activity is perfect for bird lovers and nature enthusiasts alike.",
      image: "https://cdn.pixabay.com/photo/2021/08/29/13/19/kingfisher-6583229_1280.jpg",
      duration: "Half to full day",
      price: "On request"
    },
    {
      icon: Users2,
      title: "Horse Riding Safaris",
      description: "Experience the African landscape in a whole new way with our horse riding safaris. Ride through the stunning savannahs, guided by experienced equestrians, and get up close to wildlife in a serene and immersive setting. This unique perspective allows you to connect with nature while enjoying the thrill of riding.",
      image: "/horseriding.jpeg",
      duration: "Half to full day",
      price: "On request"
    },
    {
      icon: Heart,
      title: "Coffee Farm Visits",
      description: "Discover the rich flavors of East Africa with a visit to a local coffee farm. Learn about the coffee-making process from bean to cup, participate in tastings, and understand the impact of coffee farming on local communities. This engaging experience is perfect for coffee lovers and those interested in sustainable agriculture.",
      image: "/coffee-farm.jpeg",
      duration: "Half day",
      price: "On request"
    },
    {
      icon: Users2,
      title: "Boat Riding on Lake Naivasha",
      description: "Enjoy a tranquil boat ride on Lake Naivasha, known for its stunning scenery and abundant wildlife. Keep an eye out for hippos, various bird species, and beautiful flora as you glide across the water. This relaxing activity is ideal for families or anyone looking to unwind in nature.",
      image: "/AAboatride.jpg",
      duration: "1-2 hours",
      price: "On request"
    },
    {
      icon: Users2,
      title: "Boat Safaris on Lake Nakuru",
      description: "Explore the beautiful Lake Nakuru on a boat safari, where you can witness the lake's famous pink flamingos and other wildlife from a unique vantage point. Guided by local experts, this experience combines stunning scenery with the opportunity to learn about the lake's ecosystem and conservation efforts.",
      image: "/AAboat ride nakuru.jpg",
      duration: "1-2 hours",
      price: "On request"
    },
    {
      icon: Utensils,
      title: "Bush Dinner Under the Stars",
      description: "Indulge in a magical bush dinner, where you can savor gourmet dishes prepared by skilled chefs while surrounded by the sounds of the African wilderness. Set under a canopy of stars, this enchanting dining experience offers a perfect blend of adventure and romance, making it ideal for couples and special occasions.",
      image: "/AAdinner.png",
      duration: "Evening",
      price: "On request"
    },
    {
      icon: Utensils,
      title: "Bush Breakfast Experience",
      description: "Start your day with a unique bush breakfast, served in the heart of nature after an early morning game drive. Enjoy freshly prepared meals while taking in the stunning views and sounds of the wild. This invigorating experience adds a special touch to your safari adventure.",
      image: "/AAbushbreakfast.jpg",
      duration: "Morning",
      price: "On request"
    },
    {
      icon: Heart,
      title: "Sundowner Experiences",
      description: "Cap off your day with a memorable sundowner experience, enjoying drinks and snacks as the sun sets over the African landscape. Choose from various stunning viewpoints to watch the sky transform into vibrant hues. This relaxing ritual is perfect for unwinding after a day of exploration.",
      image: "/AAsundowne.jpg",
      duration: "Evening",
      price: "On request"
    },
    {
      icon: Camera,
      title: "Flower Farm Visits",
      description: "Explore the vibrant world of East African floriculture with a visit to a local flower farm. Learn about the cultivation and export process of stunning blooms while enjoying guided tours through colorful fields. This unique experience is perfect for nature lovers and those interested in sustainable farming practices.",
      image: "https://cdn.pixabay.com/photo/2016/01/08/05/24/sunflower-1127174_1280.jpg",
      duration: "Half day",
      price: "On request"
    }
    ,
    {
      icon: Heart,
      title: "Massage Therapy",
      description: "Unwind after a day of adventure with a soothing massage provided by trained therapists. Choose from deep tissue, aromatherapy, or hot-stone sessions — perfect for restoring energy between game drives.",
      image: "/AAmassage.jpeg",
      duration: "60–90 minutes",
      price: "On request"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <img
          src="https://images.unsplash.com/photo-1695459323889-6176e43fdb77?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Unique safari experiences backdrop"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
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
                    style={experience.title === 'Coffee Farm Visits' ? { objectPosition: 'center 88%' } : undefined}
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
                  <h3 className="text-xl font-bold text-kenya-gold transition-all [text-shadow:0_0_0_rgba(0,0,0,0)] group-hover:[text-shadow:0_0_10px_rgba(212,175,55,0.9)]">
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
                  
                  <Button 
                    className="w-full mt-4" 
                    variant="luxury"
                    onClick={() => handleBookExperienceClick(experience.title)}
                  >
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
