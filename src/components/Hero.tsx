import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-safari.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40"
    >
      {/* Background Image with Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-zoom"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundAttachment: 'fixed'
        }}
      />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 text-center text-white">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-kenya-gold/20 border border-kenya-gold/30 rounded-full text-kenya-gold text-sm font-medium backdrop-blur-sm">
            <Award className="w-4 h-4 mr-2" />
            PREMIUM SAFARI EXPERIENCES
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Adventure Inspired by
          <span className="block bg-gradient-primary bg-clip-text text-transparent">
            the Wild Kenya
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Embark on extraordinary journeys through Kenya's magnificent landscapes. 
          Where every moment tells a story of wilderness and wonder.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link to="/safaris">
            <Button variant="hero" size="xl" className="group">
              Explore Our Safaris
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="xl">
              About Us
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold" />
            </div>
            <h3 className="text-3xl font-bold text-kenya-gold">5.0</h3>
            <p className="text-gray-300">Customer Rating</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-kenya-gold">200+</h3>
            <p className="text-gray-300">Safari Adventures</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-kenya-gold">15+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;