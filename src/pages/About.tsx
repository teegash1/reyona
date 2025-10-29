import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Globe, Award, Heart, Shield, Leaf, Camera, Compass, Sparkles, Waves, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
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
      name: "Nathaniel Gachukia",
      role: "Founder & CEO",
      experience: "12+ years",
      specialty: "Travel & Tourism",
      image: "/AACEO.jpeg",
      description: "Nathaniel leads Reyona Safaris with a clear vision for authentic, guest-first safaris and a deep love for Kenya's wild places."
    },
    {
      name: "Victor Timona",
      role: "Operations Manager",
      experience: "12+ years",
      specialty: "Operations & Logistics",
      image: "/AAtim.jpeg",
      description: "Victor orchestrates daily operations and ensures every itinerary runs smoothly from touchdown to takeoff."
    },
    {
      name: "Tanu Mutanu",
      role: "Concierge",
      experience: "10+ years",
      specialty: "Guest Experience",
      image: "/AATANU.jpeg",
      description: "Tanu is your dedicated concierge, curating thoughtful touches and tailored experiences throughout your safari."
    }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "5,000+", label: "Happy Travelers" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="w-6 h-6" />, number: "15+", label: "Years Experience" },
    { icon: <Star className="w-6 h-6" />, number: "4.9", label: "Average Rating" }
  ];

  const services = [
    {
      title: 'Private Safaris',
      description: 'Tailor-made itineraries with dedicated guides, exclusive camps, and seamless logistics from start to finish.',
      icon: <Compass className="w-7 h-7" />,
      highlights: [
        'Dedicated driver-guides with deep regional knowledge',
        'Custom pacing that fits your travel style',
        'Luxury 4x4 Land Cruisers with premium onboard comforts'
      ]
    },
    {
      title: 'Honeymoon Getaways',
      description: 'Romantic bush escapes with candlelit dinners, private game drives, and thoughtful surprises for two.',
      icon: <Sparkles className="w-7 h-7" />,
      highlights: [
        'Boutique camps and secluded suites handpicked for couples',
        'Sunset champagne setups in the savannah',
        'Optional hot air balloon and spa experiences'
      ]
    },
    {
      title: 'Family Adventures',
      description: 'Flexible itineraries with kid-friendly lodges, engaging junior ranger activities, and multi-generational fun.',
      icon: <Users className="w-7 h-7" />,
      highlights: [
        'Family suites and interconnecting rooms where available',
        'Educator-led bush walks and wildlife talks for kids',
        'On-demand pacing for nap times, school breaks, and energy levels'
      ]
    },
    {
      title: 'Beach Extensions',
      description: 'Seamless Mara-to-coast combinations with private transfers to Diani, Watamu, or Lamu for barefoot luxury.',
      icon: <Waves className="w-7 h-7" />,
      highlights: [
        'Tropical resorts and boutique villas with ocean views',
        'Curated snorkeling, kite surfing, and dhow sunset cruises',
        'Expert concierge support for dining and local culture tips'
      ]
    }
  ];

  const VEHICLE_CARD_COUNT = 4;

  const vehicleImagesCandidates = [
    '/tourvehicle.jpeg',
    '/vehicles-landcruiser.jpg',
    '/vehicles-safari-van.jpg',
    '/WhatsApp Image 2025-09-22 at 19.32.05.jpeg',
    '/whatsapp-image-vehicle.jpeg'
  ];

  const vehiclesFallback = [
    'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
    'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg',
    'https://images.pexels.com/photos/167475/pexels-photo-167475.jpeg',
    'https://images.pexels.com/photos/887828/pexels-photo-887828.jpeg'
  ];

  const resolveVehicleImages = async (): Promise<string[]> => {
    const checks = await Promise.allSettled(
      vehicleImagesCandidates.map((p) => fetch(p, { method: 'HEAD' }).then((r) => ({ ok: r.ok, path: p })))
    );
    const found = checks
      .filter((r) => r.status === 'fulfilled' && (r as any).value.ok)
      .map((r) => (r as any).value.path);

    const selected = found.slice(0, VEHICLE_CARD_COUNT);
    if (selected.length < VEHICLE_CARD_COUNT) {
      const remainingFallback = vehiclesFallback.filter((url) => !selected.includes(url));
      while (selected.length < VEHICLE_CARD_COUNT && remainingFallback.length) {
        selected.push(remainingFallback.shift()!);
      }
    }

    return selected.length ? selected : vehiclesFallback.slice(0, VEHICLE_CARD_COUNT);
  };

  const [activeService, setActiveService] = useState(0);
  const [vehicleImages, setVehicleImages] = useState<string[]>(vehiclesFallback.slice(0, VEHICLE_CARD_COUNT));
  const navigate = useNavigate();

  useEffect(() => {
    let cancelled = false;
    resolveVehicleImages().then((imgs) => {
      if (!cancelled) setVehicleImages(imgs);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
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

      {/* Reyona Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground text-center">
            <p>
              At Reyona, we turn travel dreams into hand-crafted realities. With nearly a decade of experience in the travel industry, our founder has dedicated their life to crafting unforgettable journeys that connect travelers with the vibrant culture, breathtaking landscapes, and incredible wildlife of the remarkable East Africa region.
            </p>
            <p>
              We believe that every journey should be as unique as the traveler embarking on it. Our passionate team, equipped with years of expertise in tour planning and itinerary creation, is committed to delivering personalized experiences that resonate with your individual interests and desires. We take pride in understanding your needs and transforming them into extraordinary adventures.
            </p>
            <p className="font-semibold text-foreground">We don’t sell itineraries; we design experiences.</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-16 overflow-hidden">
        {/* Solid backdrop */}
        <div className="absolute inset-0" style={{ backgroundColor: '#616569' }} />
        {/* Image overlay at 40% opacity */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/AATIG.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        {/* Darkest readability overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
          <div className="space-y-8 text-lg leading-relaxed text-center">
            <p className="text-muted-foreground">
              Reyona started with a single conviction: the best journeys are the ones that change you. Our founder spent years working in tour agencies, negotiating with lodges, and building relationships with local communities and guides. That meant late nights shaping itineraries and hundreds of conversations with travelers about what truly made their trip special — plus first‑hand familiarisation of hotels, lodges, and tented camps to identify the very best for our guests.
            </p>
            <p className="text-muted-foreground">
              Those first experiences taught us three things: authenticity matters, detail wins trust, and stories create connections. We built Reyona to honor those lessons. What began as carefully arranged bespoke safaris for friends and visitors grew into a team of passionate professionals who believe travel should be soulful, sustainable, and precisely tailored.
            </p>
            <p className="text-muted-foreground">
              Today, Reyona is a collective of seasoned guides, planners, and local specialists who wake up excited to craft days you’ll remember forever. We measure success not by the number of bookings, but by the quiet moments — a child’s first zebra sighting, a couple’s private sundowner, a guest who unwinds in a morning yoga session framed by acacias.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Our mission is simple: to design authentic journeys that leave an indelible mark on your heart. Our team of seasoned planners, drivers, guides and local partners bring decades of combined experience in every facet of travel, ensuring that your adventure is not only seamless but also enriching. We listen to your desires and transform them into personalized itineraries that reflect your unique interests — whether it’s a thrilling safari, a cultural immersion, or a serene wellness retreat.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Why Choose Us?</h2>
          <ol className="space-y-6 list-decimal pl-6 text-muted-foreground text-lg">
            <li className="group cursor-default rounded-xl border border-kenya-gold/50 p-4 transition-[box-shadow,ring,transform] duration-[4000ms] md:hover:duration-[1000ms] md:group-hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] md:group-hover:ring-2 md:group-hover:ring-kenya-gold/50">
              <span className="font-semibold text-foreground">Expertise You Can Trust:</span>
              <p className="mt-2">
                Our knowledgeable team brings together years of experience in every aspect of tours and travel, ensuring the highest level of service and attention to detail. From the moment you reach out, we’re here to support you every step of the way.
              </p>
            </li>

            <li className="group cursor-default rounded-xl border border-kenya-gold/50 p-4 transition-[box-shadow,ring,transform] duration-[4000ms] md:hover:duration-[1000ms] md:group-hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] md:group-hover:ring-2 md:group-hover:ring-kenya-gold/50">
              <span className="font-semibold text-foreground">Authentic Experiences:</span>
              <p className="mt-2">
                We craft encounters that immerse you in local culture — engaging with communities, savoring traditional cuisine, and exploring stunning natural wonders — to create memories that last a lifetime.
              </p>
            </li>

            <li className="group cursor-default rounded-xl border border-kenya-gold/50 p-4 transition-[box-shadow,ring,transform] duration-[4000ms] md:hover:duration-[1000ms] md:group-hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] md:group-hover:ring-2 md:group-hover:ring-kenya-gold/50">
              <span className="font-semibold text-foreground">Tailored Itineraries:</span>
              <p className="mt-2">
                No two travelers are alike. We design custom itineraries that reflect your preferences, budget, and aspirations — from thrilling safaris to relaxing wellness retreats and cultural explorations.
              </p>
            </li>

            <li className="group cursor-default rounded-xl border border-kenya-gold/50 p-4 transition-[box-shadow,ring,transform] duration-[4000ms] md:hover:duration-[1000ms] md:group-hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] md:group-hover:ring-2 md:group-hover:ring-kenya-gold/50">
              <span className="font-semibold text-foreground">Commitment to Sustainability:</span>
              <p className="mt-2">
                We champion conservation and community initiatives, so your trip contributes to places and people you’ll remember long after you return home.
              </p>
            </li>

            <li className="group cursor-default rounded-xl border border-kenya-gold/50 p-4 transition-[box-shadow,ring,transform] duration-[4000ms] md:hover:duration-[1000ms] md:group-hover:shadow-[0_0_28px_rgba(212,175,55,0.35)] md:group-hover:ring-2 md:group-hover:ring-kenya-gold/50">
              <span className="font-semibold text-foreground">Unwavering Support:</span>
              <p className="mt-2">
                Your journey doesn’t end at booking. Enjoy 24/7 personalized assistance — travel with peace of mind knowing help is always just a call away.
              </p>
            </li>
          </ol>
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

      {/* Our Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              Choose how you want to explore Kenya. Hover or focus a service to see how we bring each experience to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-stretch">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((svc, idx) => (
                <Card
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-pressed={activeService === idx}
                  onMouseEnter={() => setActiveService(idx)}
                  onFocus={() => setActiveService(idx)}
                  onClick={() => setActiveService(idx)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setActiveService(idx);
                    }
                  }}
                  className={`group relative overflow-hidden transition-all duration-300 border border-border bg-card shadow-sm hover:shadow-luxury focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kenya-gold ${
                    activeService === idx
                      ? 'ring-2 ring-kenya-gold shadow-luxury -translate-y-1'
                      : 'hover:-translate-y-1'
                  }`}
                >
                  <CardContent className="relative p-8 text-left">
                    <div className="flex items-center gap-4 mb-5">
                      <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-kenya-gold/10 text-kenya-gold transition-all duration-300 ${
                        activeService === idx ? 'bg-kenya-gold text-white scale-105 shadow-lg' : 'group-hover:bg-kenya-gold group-hover:text-white'
                      }`}>
                        {svc.icon}
                      </span>
                      <CardTitle className="text-lg font-semibold leading-snug">
                        {svc.title}
                      </CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {svc.description}
                    </p>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        if (activeService !== idx) {
                          setActiveService(idx);
                        }
                        navigate('/safaris');
                      }}
                      className="flex items-center gap-2 text-sm font-medium text-kenya-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-kenya-gold/70"
                      aria-label={`Discover more about ${svc.title}`}
                    >
                      <span>Discover more</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="group relative overflow-hidden border border-border bg-card shadow-luxury transition-colors duration-300">
              <CardHeader className="space-y-4 pt-10 pb-4 px-10">
                <Badge className="bg-kenya-gold text-white w-fit">Signature Experience</Badge>
                <CardTitle className="text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                  Signature Experience
                </CardTitle>
                <p className="text-sm font-medium uppercase tracking-wide text-foreground transition-colors duration-300 group-hover:text-white">
                  {services[activeService]?.title}
                </p>
                <p className="text-base leading-relaxed text-foreground transition-colors duration-300 group-hover:text-white group-hover:text-opacity-90">
                  {services[activeService]?.description}
                </p>
              </CardHeader>
              <CardContent className="relative px-10 pb-10">
                <div className="space-y-4">
                  {services[activeService]?.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-1 text-kenya-gold transition-transform duration-300 group-hover:scale-110">
                        <CheckCircle2 className="w-5 h-5" />
                      </span>
                      <p className="text-sm leading-relaxed text-foreground transition-colors duration-300 group-hover:text-white group-hover:text-opacity-90">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Vehicles */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Vehicles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {vehicleImages.map((img, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-luxury transition-all duration-300 flex flex-col">
                <div className="relative w-full" style={{ aspectRatio: '3 / 4' }}>
                  <img src={img} alt={`Safari Vehicle ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm text-muted-foreground">Spacious 4x4 with pop-up roof, charging ports, and fridge for cold drinks.</p>
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
                    className={`w-full h-full object-cover ${member.role === 'Founder & CEO' ? 'object-top' : ''}`}
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
                <div className="w-12 h-12 bg-kenya-burgundy rounded-full flex items-center justify-center flex-shrink-0">
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
                src="https://i.pinimg.com/736x/2c/56/16/2c5616a480d64e7e630dda8b138fcd78.jpg" 
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
