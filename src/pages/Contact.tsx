import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Globe } from 'lucide-react';

const Contact = () => {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Handle navigation state from other pages
    if (location.state?.inquiryType) {
      setFormData(prev => ({ ...prev, inquiryType: location.state.inquiryType }));
    }
    
    // Handle URL search parameters
    const searchParams = new URLSearchParams(location.search);
    const subject = searchParams.get('subject');
    const scrollToGetInTouch = searchParams.get('scrollToGetInTouch');
    
    if (subject) {
      setFormData(prev => ({ ...prev, subject: subject }));
      
      // Scroll to form when subject is pre-filled - position to show form section header
      setTimeout(() => {
        const formElement = document.getElementById('contact-form');
        if (formElement) {
          const headerHeight = 120; // Approximate header height
          const formTop = formElement.offsetTop;
          // Scroll to show the form section header prominently, matching the image position
          window.scrollTo({
            top: formTop - headerHeight - 60, // More spacing to show section header
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    // Scroll to Get In Touch section if requested
    if (scrollToGetInTouch) {
      setTimeout(() => {
        const getInTouchElement = document.getElementById('get-in-touch');
        if (getInTouchElement) {
          const headerHeight = 120; // Approximate header height
          const sectionTop = getInTouchElement.offsetTop;
          window.scrollTo({
            top: sectionTop - headerHeight - 20, // 20px additional spacing
            behavior: 'smooth'
          });
        }
      }, 100);
    }
    
    // Scroll to form if requested
    if (location.state?.scrollToForm) {
      const formElement = document.getElementById('contact-form');
      if (formElement) {
        // Scroll to form with precise positioning to match the image
        setTimeout(() => {
          const headerHeight = 120; // Approximate header height
          const formTop = formElement.offsetTop;
          // Scroll to show the form section header prominently, matching the image position
          window.scrollTo({
            top: formTop - headerHeight - 60, // More spacing to show section header
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [location.state, location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Update hidden fields with current form data
    const form = e.target;
    form.querySelector('input[name="inquiryType"]').value = formData.inquiryType || '';
    
    // Submit the form to Netlify
    const formDataToSubmit = new FormData(form);
    const urlSearchParams = new URLSearchParams();
    
    // Convert FormData to URLSearchParams
    for (const [key, value] of formDataToSubmit.entries()) {
      urlSearchParams.append(key, value as string);
    }
    
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: urlSearchParams.toString()
    })
    .then(() => {
      // Set success state
      setIsSubmitted(true);
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
      
      // Scroll to the success message
      setTimeout(() => {
        const formSection = document.getElementById('contact-form');
        if (formSection) {
          const headerHeight = 120; // Approximate header height
          const formTop = formSection.offsetTop;
          window.scrollTo({
            top: formTop - headerHeight - 20, // 20px additional spacing
            behavior: 'smooth'
          });
        }
      }, 100); // Small delay to ensure state update and re-render
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting your message. Please try again or contact us directly.');
    });
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
  };

  const handleScheduleConsultation = () => {
    const subject = 'Request of Consultation Call';
    const emailUrl = `mailto:booking@reyonasafaris.com?subject=${encodeURIComponent(subject)}`;
    window.open(emailUrl, '_blank');
  };

  const handleLiveChatSupport = () => {
    const message = 'Hi Reyona Safaris, kindly assist';
    const whatsappUrl = `https://wa.me/254707694388?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleRequestBrochures = () => {
    const subject = 'Brochures Request';
    const body = 'Greetings Reyona Safaris, kindly share some brochures, thanks.';
    const emailUrl = `mailto:booking@reyonasafaris.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Our Office",
      details: ["Westlands, Nairobi", "Kenya"],
      description: "Come see us for personalized safari planning",
      clickable: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+254 707 694 388"],
      description: "Available 24/7 for emergency support",
      clickable: true,
      action: "tel:+254707694388"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["booking@reyonasafaris.com"],
      description: "We respond within 2 hours during business hours",
      clickable: true,
      action: "mailto:booking@reyonasafaris.com"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"],
      description: "East Africa Time (GMT+3)",
      clickable: false
    }
  ];

  const faqs = [
    {
      question: "What's the best time to visit Kenya for safari?",
      answer: "The Great Migration (July-October) offers spectacular wildlife viewing, but Kenya is excellent year-round. Dry seasons (June-October, December-March) are ideal for game viewing."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking 3-6 months in advance, especially for peak seasons. However, we can often accommodate last-minute requests based on availability."
    },
    {
      question: "What vaccinations do I need?",
      answer: "Yellow fever vaccination is required if arriving from an endemic area. We recommend consulting your doctor about malaria prophylaxis and other travel health precautions."
    },
    {
      question: "What should I pack for a safari?",
      answer: "Light, neutral-colored clothing, comfortable walking shoes, hat, sunscreen, binoculars, and camera. We provide a detailed packing list upon booking."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-gold/20 to-kenya-magenta/20 flex items-center justify-center pt-32">
        <img 
          src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?_gl=1*9amud7*_ga*MTk4OTgwMDYwOC4xNzQ1NTg5OTU0*_ga_8JE65Q40S6*czE3NTcwMTgxNDMkbzMxJGcxJHQxNzU3MDE4MTczJGozMCRsMCRoMA.."
          alt="Contact us background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Ready to start planning your dream Kenya safari? We're here to help every step of the way
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section id="get-in-touch" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className={`text-center transition-all duration-300 ${
                  info.clickable 
                    ? 'hover:shadow-luxury hover:scale-105 cursor-pointer' 
                    : 'hover:shadow-luxury'
                }`}
                onClick={info.clickable ? () => window.open(info.action, '_blank') : undefined}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground font-medium">{detail}</p>
                  ))}
                  <p className="text-sm text-muted-foreground mt-2">{info.description}</p>
                  {info.clickable && (
                    <p className="text-xs text-kenya-gold mt-2 font-medium">Click to {info.title === "Call Us" ? "call" : "email"}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card id="contact-form" className="shadow-luxury">
              {!isSubmitted ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 2 hours during business hours
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form 
                      name="contact-form" 
                      method="POST" 
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      {/* Netlify Forms Hidden Fields */}
                      <input type="hidden" name="form-name" value="contact-form" />
                      <div className="hidden">
                        <input name="bot-field" />
                        <input name="inquiryType" value={formData.inquiryType} />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          />
                        </div>
                        <div>
                          <Label htmlFor="inquiryType">Inquiry Type</Label>
                          <Select onValueChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                                                    <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="booking">Safari Booking</SelectItem>
                          <SelectItem value="custom">Custom Safari</SelectItem>
                          <SelectItem value="group">Group Travel</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                        </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          rows={6}
                          placeholder="Tell us about your safari interests, preferred dates, group size, or any questions you have..."
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" variant="luxury" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </>
              ) : (
                <CardContent className="py-16 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-kenya-purple mb-4">Successfully Sent!</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Thank you for your message! We have received your inquiry and will get back to you within 2 hours during business hours.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      onClick={handleSendAnother} 
                      variant="luxury" 
                      size="lg"
                      className="px-8"
                    >
                      Send Another Message
                    </Button>
                    <div className="text-sm text-muted-foreground">
                      Or <a href="/safaris" className="text-kenya-purple hover:underline">browse our safari packages</a> while you wait
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Office Info & Quick Actions */}
            <div className="space-y-8">
              {/* Office Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-kenya-gold" />
                    Our Nairobi Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-primary rounded-lg h-48 flex items-center justify-center text-white">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Reyona Safaris</h3>
                      <p>Westlands, Nairobi</p>
                      <p>Kenya</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Located in the heart of Nairobi's business district, our office is easily accessible 
                    and staffed with experienced safari consultants ready to help plan your perfect Kenya adventure.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleScheduleConsultation}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Consultation Call
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleLiveChatSupport}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat Support
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={handleRequestBrochures}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Request Brochures
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-primary text-white">
                <CardHeader>
                  <CardTitle>24/7 Emergency Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">For travelers currently on safari needing immediate assistance:</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span className="font-semibold">+254 700 911 911</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>emergency@reyonasafaris.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className="group cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-kenya-gold/20 hover:scale-[1.01]"
                onClick={() => toggleFaq(index)}
              >
                <CardContent className="pt-4 pb-4 md:pt-6 md:pb-6 transition-all duration-500">
                  <h3 className="text-lg font-semibold mb-0 md:mb-3 text-kenya-purple group-hover:text-kenya-gold transition-all duration-300">
                    {faq.question}
                  </h3>
                  <div className="overflow-hidden transition-all duration-500 ease-in-out">
                    <p className={`text-muted-foreground leading-relaxed transition-all duration-500 ${
                      // On mobile (below md breakpoint), show/hide based on click state
                      // On desktop (md and above), show on hover with smooth expansion
                      expandedFaqs.has(index) 
                        ? 'max-h-96 opacity-100 translate-y-0 mt-3' 
                        : 'max-h-0 opacity-0 -translate-y-2 mt-0 md:max-h-0 md:opacity-0 md:translate-y-0 md:mt-0 md:group-hover:max-h-96 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:group-hover:mt-3'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;