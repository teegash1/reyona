import { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState<null | 'kenya' | 'tanzania'>(null);
  const [mobileExpandedRegion, setMobileExpandedRegion] = useState<null | 'kenya' | 'tanzania'>(null);
  // Hover delay timers for submenu
  const openTimeout = useRef<number | null>(null);
  const closeTimeout = useRef<number | null>(null);
  const kenyaBtnRef = useRef<HTMLButtonElement>(null);
  const tanzaniaBtnRef = useRef<HTMLButtonElement>(null);

  const clearTimers = () => {
    if (openTimeout.current) {
      window.clearTimeout(openTimeout.current);
      openTimeout.current = null;
    }
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };
  const scheduleOpen = () => {
    clearTimers();
    openTimeout.current = window.setTimeout(() => setIsDestinationsOpen(true), 100);
  };
  const scheduleClose = () => {
    clearTimers();
    closeTimeout.current = window.setTimeout(() => {
      setIsDestinationsOpen(false);
      setHoveredRegion(null);
    }, 200);
  };
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleBookSafari = () => {
    navigate('/custom-safari?scrollToForm=true');
  };

  const kenyaDestinations = [
    { name: 'Masai Mara', path: '/destinations/masai-mara' },
    { name: 'Amboseli', path: '/destinations/amboseli' },
    { name: 'Lake Nakuru', path: '/destinations/lake-nakuru' },
    { name: 'Samburu', path: '/destinations/samburu' },
    { name: 'Tsavo East', path: '/destinations/tsavo-east' },
    { name: 'Tsavo West', path: '/destinations/tsavo-west' },
    { name: 'Diani Beach', path: '/destinations/diani-beach' },
    { name: 'Salt Lick Sanctuary', path: '/destinations/salt-lick-sanctuary' },
    { name: 'Ol Pejeta Conservancy', path: '/destinations/ol-pejeta' },
    { name: 'Solio Conservancy', path: '/destinations/solio-conservancy' },
    { name: 'Meru National Park', path: '/destinations/meru-national-park' },
    { name: 'Lake Elementaita', path: '/destinations/lake-elementaita' },
    { name: 'Lake Bogoria', path: '/destinations/lake-bogoria' },
    { name: 'Lake Naivasha', path: '/destinations/lake-naivasha' },
  ];
  const tanzaniaDestinations = [
    { name: 'Serengeti', path: '/destinations/serengeti' },
    { name: 'Ngorongoro', path: '/destinations/ngorongoro' },
    { name: 'Tarangire', path: '/destinations/tarangire' },
    { name: 'Lake Manyara', path: '/destinations/lake-manyara' },
    { name: 'Zanzibar', path: '/destinations/zanzibar' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Invisible SEO JSON-LD injection for /safaris only */}
      {location.pathname === '/safaris' && (
        <Helmet>
          {/* FAQPage using shared Contact FAQs (top 5) */}
          <script
            type="application/ld+json"
          >{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What makes Kenya and Tanzania the best destinations for safari adventures?',
                acceptedAnswer: { '@type': 'Answer', text: 'Kenya and Tanzania offer unparalleled wildlife safaris with iconic parks like Maasai Mara, Serengeti, Ngorongoro Crater, and Amboseli. Witness the Great Migration, spot the Big Five, and explore diverse ecosystems—all combined with authentic cultural experiences and luxury accommodations.' }
              },
              {
                '@type': 'Question',
                name: 'When is the best time to visit Kenya and Tanzania for wildlife viewing?',
                acceptedAnswer: { '@type': 'Answer', text: 'The prime safari season runs from June to October during the dry months when animals gather near waterholes, making game viewing spectacular. For photographers and honeymooners seeking lush scenery, the green season (March to May) offers fewer crowds and blooming landscapes.' }
              },
              {
                '@type': 'Question',
                name: 'Are Kenya and Tanzania safaris suitable for families with children?',
                acceptedAnswer: { '@type': 'Answer', text: 'Absolutely! Many safari lodges and tours are family‑friendly, offering educational activities for kids and safe, comfortable accommodations. Family safaris provide a unique opportunity for children to learn about wildlife conservation and experience nature up close.' }
              },
              {
                '@type': 'Question',
                name: 'What special experiences do you offer for couples and honeymooners?',
                acceptedAnswer: { '@type': 'Answer', text: 'Couples and honeymooners can enjoy romantic private game drives, luxury tented camps with stunning views, sundowners overlooking the savannah, and exclusive cultural visits. Customized honeymoon safari packages ensure privacy, memorable moments, and unique adventures.' }
              },
              {
                '@type': 'Question',
                name: 'Can photographers expect good wildlife and landscape opportunities on these safaris?',
                acceptedAnswer: { '@type': 'Answer', text: 'Yes! Kenya and Tanzania are world‑renowned for spectacular wildlife photography. Our expert guides know the best locations and times to capture lions, elephants, cheetahs, flamingos, and the Great Migration. We also offer tailored photography safaris with extended game drives and specialized vehicles.' }
              },
            ],
          })}</script>
          {/* TouristTrip + Offer for a few core packages */}
          <script
            type="application/ld+json"
          >{JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'TouristTrip',
                name: '6 Days Ultimate Amboseli, Lake Nakuru, Masai Mara Safari',
                description: 'Experience Kenya\'s best parks with private 4x4, expert guides, and full-board stays.',
                image: ['https://reyonasafaris.com/AAAAAApk2.jpeg'],
                itinerary: ['Nairobi', 'Amboseli', 'Lake Nakuru', 'Masai Mara', 'Nairobi'],
                offers: {
                  '@type': 'Offer',
                  price: '2260',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://reyonasafaris.com/safaris'
                }
              },
              {
                '@type': 'TouristTrip',
                name: '3 Days Private Holiday in Amboseli',
                description: 'Short private getaway to Amboseli with elephant herds and Kilimanjaro views.',
                image: ['https://reyonasafaris.com/ambos.jpeg'],
                itinerary: ['Nairobi', 'Amboseli', 'Nairobi'],
                offers: {
                  '@type': 'Offer',
                  price: '1125',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://reyonasafaris.com/safaris'
                }
              },
              {
                '@type': 'TouristTrip',
                name: '8 Days Kenya & Tanzania Private Safari',
                description: 'Cross-border highlights including Serengeti and Masai Mara with private vehicle and guide.',
                image: ['https://reyonasafaris.com/AAAAAApk3.jpeg'],
                itinerary: ['Nairobi', 'Masai Mara', 'Serengeti', 'Ngorongoro', 'Arusha'],
                offers: {
                  '@type': 'Offer',
                  price: '4860',
                  priceCurrency: 'USD',
                  availability: 'https://schema.org/InStock',
                  url: 'https://reyonasafaris.com/safaris'
                }
              }
            ]
          })}</script>
        </Helmet>
      )}
      {/* Top Contact Bar */}
      <div className="bg-muted/50 border-b border-border/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a 
                  href="tel:+254707694388" 
                  className="hover:text-kenya-gold transition-colors"
                >
                  +254 707 694388
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a 
                href="mailto:info@reyonasafaris.com" 
                className="hover:text-kenya-gold transition-colors"
              >
                info@reyonasafaris.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-6 hover:opacity-80 transition-opacity"
            onClick={() => {
              // Always scroll to top when logo is clicked, regardless of current page
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          >
            <div className="w-24 h-14 rounded-lg overflow-hidden shadow-lg ring-2 ring-kenya-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1756498017532-7e1b6fd67eec?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Reyona Safaris Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-bold text-foreground">Reyona Safaris</h1>
              <p className="text-sm text-muted-foreground">Premium African Adventures</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className={`transition-colors font-medium ${isActive('/') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Home
            </a>
            <a href="/safaris" className={`transition-colors font-medium ${isActive('/safaris') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Safaris
            </a>
            <a href="/experiences" className={`transition-colors font-medium ${isActive('/experiences') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Experiences
            </a>
            <a href="/gallery" className={`transition-colors font-medium ${isActive('/gallery') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Gallery
            </a>
            
            {/* Destinations Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                onMouseEnter={scheduleOpen}
                onMouseLeave={scheduleClose}
                onClick={() => navigate('/destinations')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setIsDestinationsOpen(true);
                    setHoveredRegion('kenya');
                    // Focus first region button after render
                    setTimeout(() => {
                      kenyaBtnRef.current?.focus();
                    }, 0);
                  } else if (e.key === 'Escape') {
                    setIsDestinationsOpen(false);
                    setHoveredRegion(null);
                  }
                }}
                className={`relative flex items-center transition-colors font-medium ${isActive('/destinations') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
              >
                <span>Destinations</span>
                {/* Yellow Glow Effect Above */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-yellow-400 opacity-[0.20] rounded-full blur-sm"></div>
                {/* Chevron Arrow Below - Overlay */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <ChevronDown className="w-3 h-3 text-yellow-400 animate-bounce bg-transparent" />
                </div>
              </button>
              
              {/* Dropdown Menu */}
              {isDestinationsOpen && (
                <div 
                  className="absolute top-full -left-4 mt-2 bg-background border border-border rounded-lg shadow-lg py-2 z-50 w-56"
                  onMouseEnter={scheduleOpen}
                  onMouseLeave={scheduleClose}
                >
                  {/* Regions column */}
                  <div className="relative">
                    <button
                      ref={kenyaBtnRef}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-kenya-gold transition-colors focus:outline-none focus:bg-muted"
                      onMouseEnter={() => setHoveredRegion('kenya')}
                      onFocus={() => setHoveredRegion('kenya')}
                      onClick={() => navigate('/destinations?filter=kenya')}
                      type="button"
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowRight') {
                          setHoveredRegion('kenya');
                        } else if (e.key === 'ArrowLeft') {
                          setHoveredRegion(null);
                        } else if (e.key === 'Escape') {
                          setIsDestinationsOpen(false);
                          setHoveredRegion(null);
                        }
                      }}
                    >
                      <span>Kenya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button
                      ref={tanzaniaBtnRef}
                      className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-kenya-gold transition-colors focus:outline-none focus:bg-muted"
                      onMouseEnter={() => setHoveredRegion('tanzania')}
                      onFocus={() => setHoveredRegion('tanzania')}
                      onClick={() => navigate('/destinations?filter=tanzania')}
                      type="button"
                      onKeyDown={(e) => {
                        if (e.key === 'ArrowRight') {
                          setHoveredRegion('tanzania');
                        } else if (e.key === 'ArrowLeft') {
                          setHoveredRegion(null);
                        } else if (e.key === 'Escape') {
                          setIsDestinationsOpen(false);
                          setHoveredRegion(null);
                        }
                      }}
                    >
                      <span>Tanzania</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    {/* Submenu */}
                    {hoveredRegion && (
                      <div className="absolute top-0 left-full ml-2 w-56 bg-background border border-border rounded-lg shadow-lg py-2"
                           onMouseEnter={scheduleOpen}
                           onMouseLeave={scheduleClose}
                      >
                        {(hoveredRegion === 'kenya' ? kenyaDestinations : tanzaniaDestinations).map((d) => (
                          <a
                            key={d.path}
                            href={d.path}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-kenya-gold transition-colors whitespace-nowrap"
                          >
                            {d.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            
            <a href="/about" className={`transition-colors font-medium ${isActive('/about') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              About Us
            </a>
            <a href="/contact" className={`transition-colors font-medium ${isActive('/contact') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="luxury" size="lg" onClick={handleBookSafari}>
              Custom Safari
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-kenya-gold transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="w-full px-4 sm:px-6 lg:px-8 py-4 space-y-2">
            <a 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              Home
            </a>
            <a 
              href="/safaris" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/safaris') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              Safaris
            </a>
            <a 
              href="/experiences" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/experiences') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              Experiences
            </a>
            <a 
              href="/gallery" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/gallery') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              Gallery
            </a>
            
            {/* Mobile Destinations Section - Grouped with Expandable Kenya/Tanzania */}
            <div className="space-y-2 py-2">
              <div className="flex items-center space-x-2 mb-2">
                <span className={`font-medium text-sm ${isActive('/destinations') ? 'text-kenya-gold' : 'text-foreground'}`}>
                  Destinations
                </span>
              </div>
              
              {/* Kenya and Tanzania Buttons Side by Side */}
              <div className="grid grid-cols-2 gap-2 mb-2">
                <button
                  type="button"
                  onClick={() => setMobileExpandedRegion(mobileExpandedRegion === 'kenya' ? null : 'kenya')}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all ${
                    mobileExpandedRegion === 'kenya'
                      ? 'bg-kenya-gold/10 border-kenya-gold text-kenya-gold'
                      : 'bg-muted/30 border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="text-sm font-medium">Kenya</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      mobileExpandedRegion === 'kenya' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <button
                  type="button"
                  onClick={() => setMobileExpandedRegion(mobileExpandedRegion === 'tanzania' ? null : 'tanzania')}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg border transition-all ${
                    mobileExpandedRegion === 'tanzania'
                      ? 'bg-kenya-gold/10 border-kenya-gold text-kenya-gold'
                      : 'bg-muted/30 border-border text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className="text-sm font-medium">Tanzania</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      mobileExpandedRegion === 'tanzania' ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              
              {/* Kenya Destinations List */}
              {mobileExpandedRegion === 'kenya' && (
                <div className="ml-2 grid grid-cols-2 gap-2 bg-muted/20 rounded-lg p-2 transition-all duration-200">
                  {kenyaDestinations.map((destination) => (
                    <a
                      key={destination.path}
                      href={destination.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileExpandedRegion(null);
                      }}
                      className="block text-xs font-medium text-foreground hover:text-kenya-gold transition-colors py-1.5 px-2 rounded hover:bg-muted/40"
                    >
                      {destination.name}
                    </a>
                  ))}
                </div>
              )}
              
              {/* Tanzania Destinations List */}
              {mobileExpandedRegion === 'tanzania' && (
                <div className="ml-2 space-y-1 bg-muted/20 rounded-lg p-2 transition-all duration-200">
                  {tanzaniaDestinations.map((destination) => (
                    <a
                      key={destination.path}
                      href={destination.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setMobileExpandedRegion(null);
                      }}
                      className="block text-xs font-medium text-foreground hover:text-kenya-gold transition-colors py-1.5 px-2 rounded hover:bg-muted/40"
                    >
                      {destination.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/about') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              About Us
            </a>
            <a 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 transition-colors font-medium ${isActive('/contact') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}
            >
              Contact
            </a>
            <Button 
              variant="luxury" 
              size="lg" 
              className="w-full mt-3" 
              onClick={() => {
                handleBookSafari();
                setIsMenuOpen(false);
              }}
            >
              Custom Safari
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
