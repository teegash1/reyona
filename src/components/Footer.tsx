import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter Section */}
      <div className="bg-gradient-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Stay Connected with Reyona Safaris
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive safari deals, wildlife photography tips, and Kenya travel insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border-0 text-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-kenya-gold"
            />
            <Button variant="luxury" size="lg" className="w-full sm:w-auto">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <a 
                  href="/" 
                  className="hover:opacity-80 transition-opacity flex items-center space-x-3"
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
                  <div>
                    <h1 className="text-xl font-bold text-foreground">Reyona Safaris</h1>
                    <p className="text-sm text-muted-foreground">Premium African Adventures</p>
                  </div>
                </a>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Experience the magic of Kenya through expertly crafted safari adventures. 
                We create unforgettable memories in Africa's most spectacular wilderness destinations.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-kenya-gold/10 hover:text-kenya-gold">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-kenya-gold/10 hover:text-kenya-gold">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-kenya-gold/10 hover:text-kenya-gold">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-kenya-gold/10 hover:text-kenya-gold">
                  <Youtube className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-muted-foreground hover:text-kenya-gold transition-colors">Home</a></li>
                <li><a href="/safaris" className="text-muted-foreground hover:text-kenya-gold transition-colors">Safari Packages</a></li>
                <li><a href="/experiences" className="text-muted-foreground hover:text-kenya-gold transition-colors">Experiences</a></li>
                <li><a href="/accommodations" className="text-muted-foreground hover:text-kenya-gold transition-colors">Accommodations</a></li>
                <li><a href="/about" className="text-muted-foreground hover:text-kenya-gold transition-colors">About Us</a></li>
                <li><a href="/contact" className="text-muted-foreground hover:text-kenya-gold transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Safari Destinations */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Popular Destinations</h3>
              <ul className="space-y-3">
                <li><a href="/destinations/masai-mara" className="text-muted-foreground hover:text-kenya-gold transition-colors">Masai Mara</a></li>
                <li><a href="/destinations/amboseli" className="text-muted-foreground hover:text-kenya-gold transition-colors">Amboseli National Park</a></li>
                <li><a href="/destinations/tsavo-east" className="text-muted-foreground hover:text-kenya-gold transition-colors">Tsavo East</a></li>
                <li><a href="/destinations/tsavo-west" className="text-muted-foreground hover:text-kenya-gold transition-colors">Tsavo West</a></li>
                <li><a href="/destinations/lake-nakuru" className="text-muted-foreground hover:text-kenya-gold transition-colors">Lake Nakuru</a></li>
                <li><a href="/destinations/samburu" className="text-muted-foreground hover:text-kenya-gold transition-colors">Samburu Reserve</a></li>
                <li><a href="/destinations/mount-kenya" className="text-muted-foreground hover:text-kenya-gold transition-colors">Mount Kenya</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-kenya-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">
                      Safari Centre, Westlands<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-kenya-gold flex-shrink-0" />
                  <a 
                    href="tel:+254707694388" 
                    className="text-muted-foreground hover:text-kenya-gold transition-colors"
                  >
                    +254 707 694 388
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-kenya-gold flex-shrink-0" />
                  <a 
                    href="mailto:booking@reyonasafaris.com" 
                    className="text-muted-foreground hover:text-kenya-gold transition-colors"
                  >
                    booking@reyonasafaris.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
                            <p>&copy; 2025 Reyona Safaris. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-kenya-gold transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-kenya-gold transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="hover:text-kenya-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;