import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-safari.jpg';
import pexelsImage from '@/assets/pexels-charldurand-6404789.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  type Slide =
    | { type: 'image'; src: string }
    | { type: 'video'; src: string };

  // Include local assets and keep remote fallbacks. Add optional video in public folder.
  const heroSlides: Slide[] = [
    { type: 'image', src: heroImage },
    { type: 'image', src: pexelsImage },
    // Insert public AAballoon.jpeg as the 3rd slide
    { type: 'image', src: '/AAballoon.jpeg' },
    { type: 'image', src: 'https://cdn.pixabay.com/photo/2015/09/22/14/34/lion-951778_1280.jpg' },
    { type: 'image', src: 'https://cdn.pixabay.com/photo/2020/08/25/11/11/zebra-5516455_1280.jpg' },
    { type: 'image', src: 'https://cdn.pixabay.com/photo/2021/05/21/12/35/giraffe-6271050_1280.jpg' }
  ];

  // If a WhatsApp video is placed in public (e.g. public/whatsapp-video.mp4), include it as a slide at index 1
  const whatsappVideoSrc = '/whatsapp-video.mp4';
  // We cannot synchronously know if the file exists at build-time; attempt to prefetch and conditionally include
  const [slides, setSlides] = useState<Slide[]>(heroSlides);

  useEffect(() => {
    let cancelled = false;
    fetch(whatsappVideoSrc, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled && res.ok) {
          const withVideo = [...heroSlides];
          withVideo.splice(1, 0, { type: 'video', src: whatsappVideoSrc });
          setSlides(withVideo);
        }
      })
      .catch(() => {
        // ignore if not found
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // 7 seconds total cycle

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-32 lg:pt-40"
    >
      {/* Background Images with Fast Scrolling and Zoom Effect */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => {
          // Special positioning for giraffe image (4th image in original set, index 4 or 5 with video)
          const isGiraffeImage = slide.type === 'image' && (slide.src.includes('giraffe-6271050_1280.jpg'));
          const backgroundPosition = isGiraffeImage ? 'center top' : 'center center';
          const isActive = index === currentImageIndex;
          const isNext = index === (currentImageIndex + 1) % slides.length;

          return (
            <div
              key={`${slide.type}-${index}`}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out hero-bg-mobile ${
                isActive
                  ? 'opacity-100 scale-100'
                  : isNext
                  ? 'opacity-0 scale-110 translate-x-full'
                  : 'opacity-0 scale-95 -translate-x-full'
              }`}
            >
              {slide.type === 'image' ? (
                <div
                  className="absolute inset-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${slide.src})`,
                    backgroundPosition: backgroundPosition,
                    backgroundAttachment: 'scroll',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh'
                  }}
                />
              ) : (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={slide.src}
                  muted
                  playsInline
                  autoPlay
                  loop
                  // Ensure the video starts even on iOS
                  preload="metadata"
                />
              )}
            </div>
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

        {/* Primary CTAs are rendered above packages section for maximum hero visibility */}

        {/* Stats moved to HomeStats section below Experiences */}
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
