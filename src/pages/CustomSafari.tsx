import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Users, MapPin, Clock, Star, Phone, Mail } from 'lucide-react';

const CustomSafari = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    duration: '',
    groupSize: '',
    budget: '',
    destinations: [],
    experiences: [],
    accommodation: '',
    travelDates: '',
    specialRequests: ''
  });

  const destinations = [
    'Masai Mara National Reserve',
    'Amboseli National Park',
    'Tsavo East National Park',
    'Tsavo West National Park',
    'Lake Nakuru National Park',
    'Samburu National Reserve',
    'Mount Kenya National Park',
    'Aberdare National Park',
    'Hell\'s Gate National Park',
    'Lake Naivasha',
    'Diani Beach',
    'The Serengeti'
  ];

  const experiences = [
    'Game Drives',
    'Hot Air Balloon Safari',
    'Walking Safaris',
    'Night Game Drives',
    'Bird Watching',
    'Cultural Village Visits',
    'Photography Workshops',
    'Horseback Riding',
    'Fishing',
    'Mountain Climbing',
    'Beach Activities',
    'Snorkeling'
  ];

  const budgetRanges = [
    { value: 'budget', label: '$1,000 - $2,500 per person', description: 'Budget accommodations, group tours' },
    { value: 'mid-range', label: '$2,500 - $5,000 per person', description: 'Comfortable lodges, semi-private tours' },
    { value: 'luxury', label: '$5,000 - $10,000 per person', description: 'Luxury lodges, private tours' },
    { value: 'ultra-luxury', label: '$10,000+ per person', description: 'Ultra-luxury, exclusive experiences' }
  ];

  const handleDestinationChange = (destination, checked) => {
    setFormData(prev => ({
      ...prev,
      destinations: checked
        ? [...prev.destinations, destination]
        : prev.destinations.filter(d => d !== destination)
    }));
  };

  const handleExperienceChange = (experience, checked) => {
    setFormData(prev => ({
      ...prev,
      experiences: checked
        ? [...prev.experiences, experience]
        : prev.experiences.filter(e => e !== experience)
    }));
  };

  const location = useLocation();

  useEffect(() => {
    // Handle URL search parameters for scrolling
    const searchParams = new URLSearchParams(location.search);
    const scrollToForm = searchParams.get('scrollToForm');
    
    if (scrollToForm) {
      setTimeout(() => {
        const formElement = document.getElementById('custom-safari-form');
        if (formElement) {
          const headerHeight = 120; // Approximate header height
          const formTop = formElement.offsetTop;
          window.scrollTo({
            top: formTop - headerHeight - 20, // 20px additional spacing
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom Safari Request:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-magenta/20 to-kenya-gold/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Design Your Safari
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Create a completely personalized Kenya safari experience tailored to your dreams
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Tell Us Your Dreams", description: "Share your preferences, interests, and must-see destinations" },
              { step: 2, title: "Expert Consultation", description: "Our safari specialists design your perfect itinerary" },
              { step: 3, title: "Customize & Refine", description: "Adjust details until everything matches your vision" },
              { step: 4, title: "Book & Depart", description: "Secure your dates and embark on your dream safari" }
            ].map((item) => (
              <Card key={item.step} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Safari Form */}
      <section id="custom-safari-form" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Plan Your Custom Safari</CardTitle>
              <p className="text-center text-muted-foreground">
                Fill out this form and our safari experts will create a personalized itinerary just for you
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Safari Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Safari Details</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="3-4">3-4 days</SelectItem>
                          <SelectItem value="5-7">5-7 days</SelectItem>
                          <SelectItem value="8-10">8-10 days</SelectItem>
                          <SelectItem value="11-14">11-14 days</SelectItem>
                          <SelectItem value="15+">15+ days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 people</SelectItem>
                          <SelectItem value="3-4">3-4 people</SelectItem>
                          <SelectItem value="5-8">5-8 people</SelectItem>
                          <SelectItem value="9-12">9-12 people</SelectItem>
                          <SelectItem value="13+">13+ people</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                      <Input
                        id="travelDates"
                        value={formData.travelDates}
                        onChange={(e) => setFormData(prev => ({ ...prev, travelDates: e.target.value }))}
                        placeholder="e.g., June 2025"
                      />
                    </div>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Budget Range</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {budgetRanges.map((budget) => (
                      <Card
                        key={budget.value}
                        className={`cursor-pointer transition-all duration-300 ${
                          formData.budget === budget.value ? 'ring-2 ring-kenya-purple bg-kenya-purple/5' : 'hover:shadow-md'
                        }`}
                        onClick={() => setFormData(prev => ({ ...prev, budget: budget.value }))}
                      >
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <div className={`w-4 h-4 rounded-full border-2 mt-1 ${
                              formData.budget === budget.value ? 'bg-kenya-purple border-kenya-purple' : 'border-muted-foreground'
                            }`} />
                            <div>
                              <h4 className="font-semibold">{budget.label}</h4>
                              <p className="text-sm text-muted-foreground">{budget.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Destinations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Preferred Destinations</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {destinations.map((destination) => (
                      <div key={destination} className="flex items-center space-x-2">
                        <Checkbox
                          id={destination}
                          checked={formData.destinations.includes(destination)}
                          onCheckedChange={(checked) => handleDestinationChange(destination, checked)}
                        />
                        <Label htmlFor={destination} className="text-sm cursor-pointer">
                          {destination}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experiences */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Desired Experiences</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {experiences.map((experience) => (
                      <div key={experience} className="flex items-center space-x-2">
                        <Checkbox
                          id={experience}
                          checked={formData.experiences.includes(experience)}
                          onCheckedChange={(checked) => handleExperienceChange(experience, checked)}
                        />
                        <Label htmlFor={experience} className="text-sm cursor-pointer">
                          {experience}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accommodation Preference */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Accommodation Style</h3>
                  <Select onValueChange={(value) => setFormData(prev => ({ ...prev, accommodation: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select accommodation preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="luxury-lodge">Luxury Lodges</SelectItem>
                      <SelectItem value="tented-camp">Luxury Tented Camps</SelectItem>
                      <SelectItem value="eco-lodge">Eco Lodges</SelectItem>
                      <SelectItem value="budget-camp">Budget Camps</SelectItem>
                      <SelectItem value="mixed">Mix of Different Types</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Special Requests */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Special Requests or Requirements</h3>
                  <Textarea
                    value={formData.specialRequests}
                    onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                    placeholder="Any special dietary requirements, accessibility needs, photography focus, celebration occasions, or other specific requests..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full" variant="luxury" size="lg">
                  Submit Custom Safari Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center p-8 bg-gradient-primary rounded-2xl border border-white/30 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Prefer to Talk Directly?</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Our safari experts are available to discuss your dream safari personally and create the perfect itinerary for your adventure.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-white/90">+254 700 123 456</p>
                  <p className="text-white/70 text-sm">Available 24/7</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-white/90">custom@reyonasafaris.com</p>
                  <p className="text-white/70 text-sm">Response within 2 hours</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="luxury" size="lg">
                Call Now
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomSafari;