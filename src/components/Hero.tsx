import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-safari.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    heroImage,
    'https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/25/11/11/zebra-5516455_1280.jpg',
    'https://cdn.pixabay.com/photo/2021/05/21/12/35/giraffe-6271050_1280.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000); // 7 seconds total cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40"
    >
      {/* Background Images with Fast Scrolling and Zoom Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          // Special positioning for giraffe image (4th image, index 3)
          const isGiraffe = index === 3;
          const backgroundPosition = isGiraffe ? 'center top' : 'center center';
          
          return (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-no-repeat transition-all duration-1000 ease-in-out hero-bg-mobile ${
                index === currentImageIndex 
                  ? 'opacity-100 scale-100' 
                  : index === (currentImageIndex + 1) % heroImages.length
                  ? 'opacity-0 scale-110 translate-x-full'
                  : 'opacity-0 scale-95 -translate-x-full'
              }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${image})`,
                backgroundPosition: backgroundPosition,
                backgroundAttachment: 'scroll',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh'
              }}
            />
          );
        })}
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 text-center text-white">
        <div className="mb-4 md:mb-6">
          <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-kenya-gold/20 border border-kenya-gold/30 rounded-full text-kenya-gold text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span className="hidden xs:inline">PREMIUM SAFARI EXPERIENCES</span>
            <span className="xs:hidden">PREMIUM SAFARIS</span>
          </span>
        </div>

        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight md:leading-relaxed px-2">
          Adventure Inspired by
          <span className="block text-kenya-gold leading-tight md:leading-relaxed">
            the Wild Kenya
          </span>
        </h1>

        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200 px-4">
          Embark on extraordinary journeys through Kenya's magnificent landscapes. 
          Where every moment tells a story of wilderness and wonder.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
          <Link to="/safaris">
            <Button variant="hero" size="lg" className="group w-full sm:w-auto">
              Explore Our Safaris
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              About Us
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-kenya-gold mr-1" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-kenya-gold mr-1" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-kenya-gold mr-1" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-kenya-gold mr-1" />
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-kenya-gold" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">5.0</h3>
            <p className="text-sm sm:text-base text-gray-300">Customer Rating</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">200+</h3>
            <p className="text-sm sm:text-base text-gray-300">Safari Adventures</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">15+</h3>
            <p className="text-sm sm:text-base text-gray-300">Years Experience</p>
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