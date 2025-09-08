import { useState, useEffect } from 'react';
import { MapPin, Star, Award } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

/**
 * SplashScreen Component
 * 
 * This component displays a professional animated splash screen
 * that only appears when the app is running as an installed PWA.
 * It does not show during regular web browsing to maintain
 * a fast and clean web experience.
 */

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Add splash-active class to body to prevent scrolling
    document.body.classList.add('splash-active');
    
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          // Remove splash-active class when splash is complete
          document.body.classList.remove('splash-active');
          onComplete();
        }, 100);
      }, 500); // Wait for fade out animation
    }, 3000); // Show splash for 3 seconds

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('splash-active');
    };
  }, [onComplete]);

  useEffect(() => {
    const phaseTimer = setTimeout(() => {
      setAnimationPhase(1);
    }, 800);

    const phaseTimer2 = setTimeout(() => {
      setAnimationPhase(2);
    }, 1600);

    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(phaseTimer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`splash-screen flex items-center justify-center bg-gradient-to-br from-kenya-gold via-kenya-burgundy to-kenya-purple overflow-hidden relative transition-opacity duration-500 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
          backgroundSize: '200px 200px, 300px 300px, 150px 150px'
        }}></div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Safari Elements */}
        <div className="absolute top-20 left-10 w-8 h-8 text-kenya-gold/20 animate-float-slow">
          <MapPin className="w-full h-full" />
        </div>
        <div className="absolute top-32 right-16 w-6 h-6 text-kenya-gold/20 animate-float-medium">
          <Star className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-20 w-7 h-7 text-kenya-gold/20 animate-float-fast">
          <Award className="w-full h-full" />
        </div>
        <div className="absolute bottom-20 right-12 w-5 h-5 text-kenya-gold/20 animate-float-slow">
          <Star className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-8 w-6 h-6 text-kenya-gold/20 animate-float-medium">
          <MapPin className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-8 w-7 h-7 text-kenya-gold/20 animate-float-fast">
          <Award className="w-full h-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo/Icon Animation */}
        <div className="mb-8">
          <div className={`w-24 h-24 mx-auto rounded-full bg-white/10 backdrop-blur-sm border-2 border-kenya-gold/30 flex items-center justify-center transition-all duration-1000 ${
            animationPhase >= 0 ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}>
            <div className="w-16 h-16 bg-gradient-to-br from-kenya-gold to-kenya-burgundy rounded-full flex items-center justify-center animate-pulse-gentle overflow-hidden">
              <img 
                src="/favicon-64.png" 
                alt="Reyona Safaris" 
                className="w-12 h-12 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
          </div>
        </div>

        {/* Company Name Animation */}
        <div className="mb-4">
          <h1 className={`text-4xl md:text-5xl font-bold text-white transition-all duration-1000 delay-300 ${
            animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Reyona Safaris
          </h1>
        </div>

        {/* Tagline Animation */}
        <div className="mb-8">
          <p className={`text-lg md:text-xl text-white/90 font-medium transition-all duration-1000 delay-500 ${
            animationPhase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Premium African Safari Adventures
          </p>
        </div>

        {/* Loading Animation */}
        <div className={`transition-all duration-1000 delay-700 ${
          animationPhase >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-kenya-gold rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-kenya-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-kenya-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          <p className="text-sm text-white/70 mt-4 animate-pulse">Loading your safari adventure...</p>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute inset-0 border-4 border-kenya-gold/20 rounded-none animate-border-glow"></div>
    </div>
  );
};

export default SplashScreen;
