import { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleBookSafari = () => {
    navigate('/contact', { 
      state: { 
        inquiryType: 'safari',
        scrollToForm: true 
      } 
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top Contact Bar */}
      <div className="bg-muted/50 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+254 700 123 456</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@reyonasafaris.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-6 hover:opacity-80 transition-opacity">
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
            <a href="/accommodations" className={`transition-colors font-medium ${isActive('/accommodations') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Accommodations
            </a>
            <a href="/destinations" className={`transition-colors font-medium ${isActive('/destinations') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Destinations
            </a>
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
              Book Your Safari
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
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-4">
            <a href="/" className={`block transition-colors font-medium ${isActive('/') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Home
            </a>
            <a href="/safaris" className={`block transition-colors font-medium ${isActive('/safaris') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Safaris
            </a>
            <a href="/experiences" className={`block transition-colors font-medium ${isActive('/experiences') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Experiences
            </a>
            <a href="/accommodations" className={`block transition-colors font-medium ${isActive('/accommodations') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Accommodations
            </a>
            <a href="/destinations" className={`block transition-colors font-medium ${isActive('/destinations') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Destinations
            </a>
            <a href="/about" className={`block transition-colors font-medium ${isActive('/about') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              About Us
            </a>
            <a href="/contact" className={`block transition-colors font-medium ${isActive('/contact') ? 'text-kenya-gold' : 'text-foreground hover:text-kenya-gold'}`}>
              Contact
            </a>
            <Button variant="luxury" size="lg" className="w-full mt-4" onClick={handleBookSafari}>
              Book Your Safari
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;