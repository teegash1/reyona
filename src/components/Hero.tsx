import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import heroImage from '@/assets/hero-safari.jpg';
import pexelsImage from '@/assets/pexels-charldurand-6404789.jpg';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [textVariant, setTextVariant] = useState<0 | 1>(0);

  type Slide =
    | { type: 'image'; src: string }
    | { type: 'video'; src: string };

  // Desktop slides: keep first image + AAAAfr 1-4, then desktop-only Herodes images
  const desktopSlides: Slide[] = [
    { type: 'image', src: heroImage },
    { type: 'image', src: '/AAAAfr.jpeg' },
    { type: 'image', src: '/AAAAfr2.jpeg' },
    { type: 'image', src: '/AAAAfr3.jpeg' },
    { type: 'image', src: '/AAAAfr4.jpeg' },
    // Replace the previous 6th–8th images with these desktop-only variants
    { type: 'image', src: '/Herodes1.jpeg' },
    { type: 'image', src: '/Herodes2.jpeg' },
    { type: 'image', src: '/Herodes3.jpeg' },
    { type: 'image', src: '/Herodes5.jpeg' },
    { type: 'image', src: '/Herodes7.jpg' },
    { type: 'image', src: '/Herodes8.jpg' },
  ];

  // Mobile slides: keep only the first image + mobile-only images
  const mobileSlides: Slide[] = [
    { type: 'image', src: heroImage },
    { type: 'image', src: '/Heromob1.jpeg' },
    { type: 'image', src: '/Heromob2.jpeg' },
    { type: 'image', src: '/Heromob3.jpeg' },
    { type: 'image', src: '/Heromob4.jpeg' },
  ];

  // Include a hero video from public as second slide if present
  const heroVideoSrc = '/herovideo.mp4';
  // Choose slides per viewport (mobile vs desktop)
  const [slides, setSlides] = useState<Slide[]>(desktopSlides);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);

  // Alternate hero text visibility and variants
  useEffect(() => {
    let cancelled = false;
    let firstVisible = true;
    let visible = true;
    let variant: 0 | 1 = 0;

    const run = () => {
      if (cancelled) return;
      setShowText(visible);
      if (visible) setTextVariant(variant);
      const delay = visible ? (firstVisible ? 5000 : 6000) : 5000; // show 5s initially, then 6s; hide 5s
      firstVisible = false;
      setTimeout(() => {
        if (cancelled) return;
        if (visible) {
          visible = false; // hide
        } else {
          visible = true; // show next variant
          variant = variant === 0 ? 1 : 0;
        }
        run();
      }, delay);
    };
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    const candidates = isMobile ? mobileSlides : desktopSlides;

    const resolveSlides = async () => {
      const result: Slide[] = [];
      for (const slide of candidates) {
        if (slide.type === 'image') {
          // Always keep the imported hero image
          if (slide.src === heroImage) {
            result.push(slide);
            continue;
          }
          // For public assets, only include if the file exists
          if (slide.src.startsWith('/')) {
            try {
              const res = await fetch(slide.src, { method: 'HEAD' });
              if (res.ok) result.push(slide);
            } catch {
              // ignore missing
            }
            continue;
          }
        }
        // Default: include
        result.push(slide);
      }
      if (!cancelled) setSlides(result);
    };

    resolveSlides();
    return () => {
      cancelled = true;
    };
  }, [isMobile]);

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
          const backgroundPosition = 'center center';
          const mobileNudge = (
            isMobile && slide.type === 'image' && typeof (slide as any).src === 'string' &&
            ((slide as any).src.endsWith('/Heromob1.jpeg') || (slide as any).src.endsWith('/Heromob4.jpeg'))
          );
          const bgPos = mobileNudge ? 'center 1%' : backgroundPosition;
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
                    backgroundPosition: bgPos,
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
                  onLoadedMetadata={(e) => {
                    try { (e.currentTarget as HTMLVideoElement).playbackRate = 0.7; } catch {}
                  }}
                  onPlay={(e) => {
                    try { (e.currentTarget as HTMLVideoElement).playbackRate = 0.7; } catch {}
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      
      {/* Content (alternating text) */}
      <div className="relative z-10 w-full px-4 sm:px-6 text-center text-white">
        <div className={`mb-4 md:mb-6 transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-kenya-gold/20 border border-kenya-gold/30 rounded-full text-kenya-gold text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            <span className="hidden xs:inline">PREMIUM SAFARI EXPERIENCES</span>
            <span className="xs:hidden">PREMIUM SAFARIS</span>
          </span>
        </div>

        <div className={`transition-opacity duration-700 ${showText ? 'opacity-100' : 'opacity-0'}`}>
          {textVariant === 0 ? (
            <>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight md:leading-relaxed px-2">
                <span className="block">Experience the majesty of Africa</span>
                <span className="block text-kenya-gold leading-tight md:leading-relaxed">with Reyona</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200 px-4">
                Where every step is a story and every moment is magic
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight md:leading-relaxed px-2">
                Feel the pulse of the wild
                <span className="block text-kenya-gold leading-tight md:leading-relaxed">
                  
                </span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200 px-4">
                Experience Africa's wonders through Reyona's eyes
              </p>
            </>
          )}
        </div>

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
