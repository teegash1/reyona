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
import CountryCodeSelect from '@/components/CountryCodeSelect';
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountry: '+254',
    phoneNumber: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<Set<number>>(new Set());
  const [phoneError, setPhoneError] = useState<string>('');
  
  // Map internal values to human-friendly labels for submission
  const inquiryTypeLabels: Record<string, string> = {
    general: 'General Information',
    booking: 'Safari Booking',
    custom: 'Custom Safari',
    group: 'Group Travel',
    support: 'Customer Support',
  };

  // Country selection handled by CountryCodeSelect (searchable + recents)

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
    
    // Validate phone quickly
    const digits = (formData.phoneNumber || '').replace(/[^0-9]/g, '');
    const rules: Record<string, { min: number; max: number }> = {
      '+254': { min: 9, max: 9 },
      '+255': { min: 9, max: 9 },
      '+256': { min: 9, max: 9 },
      '+250': { min: 9, max: 9 },
      '+257': { min: 8, max: 9 },
      '+260': { min: 9, max: 9 },
      '+27': { min: 9, max: 9 },
      '+20': { min: 9, max: 10 },
      '+971': { min: 9, max: 9 },
      '+91': { min: 10, max: 10 },
      '+61': { min: 9, max: 9 },
      '+44': { min: 9, max: 10 },
      '+1': { min: 10, max: 10 },
      '+49': { min: 10, max: 11 },
      '+33': { min: 9, max: 9 },
      '+39': { min: 9, max: 10 },
      '+34': { min: 9, max: 9 },
      '+81': { min: 9, max: 10 },
      '+86': { min: 8, max: 11 },
      '+353': { min: 9, max: 9 },
      '+46': { min: 7, max: 10 },
    };
    const r = rules[formData.phoneCountry] || { min: 6, max: 14 };
    if (!digits || digits.length < r.min || digits.length > r.max) {
      setPhoneError(`Please enter ${r.min === r.max ? r.min : `${r.min}-${r.max}`} digits for ${formData.phoneCountry}.`);
      return;
    }
    setPhoneError('');

    // Update hidden fields with current form data
    const form = e.target;
    // Compose full E.164 phone number and populate hidden fields
    const cleanedLocal = (formData.phoneNumber || '').replace(/[^0-9]/g, '');
    const fullPhone = `${formData.phoneCountry}${cleanedLocal}`;
    const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement | null;
    if (phoneInput) phoneInput.value = fullPhone;
    // Keep country and local as hidden too for clarity
    const phoneCountryInput = form.querySelector('input[name="phoneCountry"]') as HTMLInputElement | null;
    if (phoneCountryInput) phoneCountryInput.value = formData.phoneCountry;
    const phoneNumberInput = form.querySelector('input[name="phoneNumber"]') as HTMLInputElement | null;
    if (phoneNumberInput) phoneNumberInput.value = cleanedLocal;
    // Ensure we submit the full label, not the internal value
    const inquiryLabel = inquiryTypeLabels[formData.inquiryType] || formData.inquiryType || '';
    form.querySelector('input[name="inquiryType"]').value = inquiryLabel;
    
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
        phoneCountry: '+254',
        phoneNumber: '',
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
    const emailUrl = `mailto:info@reyonasafaris.com?subject=${encodeURIComponent(subject)}`;
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
    const emailUrl = `mailto:info@reyonasafaris.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      details: ["Delta Chambers", "P.O.BOX 172-00100", "Nairobi, Kenya"],
      description: "Come see us for personalized safari planning",
      clickable: false
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+254 707 694388"],
      description: "Available 24/7 for emergency support",
      clickable: true,
      action: "tel:+254707694388"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["info@reyonasafaris.com"],
      description: "We respond within 2 hours during business hours",
      clickable: true,
      action: "mailto:info@reyonasafaris.com"
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
      question: 'What makes Kenya and Tanzania the best destinations for safari adventures?',
      answer:
        'Kenya and Tanzania offer unparalleled wildlife safaris with iconic parks like Maasai Mara, Serengeti, Ngorongoro Crater, and Amboseli. Witness the Great Migration, spot the Big Five, and explore diverse ecosystems—all combined with authentic cultural experiences and luxury accommodations.'
    },
    {
      question: 'When is the best time to visit Kenya and Tanzania for wildlife viewing?',
      answer:
        'The prime safari season runs from June to October during the dry months when animals gather near waterholes, making game viewing spectacular. For photographers and honeymooners seeking lush scenery, the green season (March to May) offers fewer crowds and blooming landscapes.'
    },
    {
      question: 'Are Kenya and Tanzania safaris suitable for families with children?',
      answer:
        'Absolutely! Many safari lodges and tours are family‑friendly, offering educational activities for kids and safe, comfortable accommodations. Family safaris provide a unique opportunity for children to learn about wildlife conservation and experience nature up close.'
    },
    {
      question: 'What special experiences do you offer for couples and honeymooners?',
      answer:
        'Couples and honeymooners can enjoy romantic private game drives, luxury tented camps with stunning views, sundowners overlooking the savannah, and exclusive cultural visits. Customized honeymoon safari packages ensure privacy, memorable moments, and unique adventures.'
    },
    {
      question: 'Can photographers expect good wildlife and landscape opportunities on these safaris?',
      answer:
        'Yes! Kenya and Tanzania are world‑renowned for spectacular wildlife photography. Our expert guides know the best locations and times to capture lions, elephants, cheetahs, flamingos, and the Great Migration. We also offer tailored photography safaris with extended game drives and specialized vehicles.'
    },
    {
      question: 'How safe is it to travel on safari in Kenya and Tanzania?',
      answer:
        'Both countries are safe for tourists when traveling with experienced guides and reputable operators. We prioritize your safety with secure transportation, well‑maintained vehicles, and adherence to park regulations. Staying informed and following your guide’s advice ensures a smooth and secure experience.'
    },
    {
      question: 'What should I pack for my Kenya and Tanzania safari?',
      answer:
        'Pack lightweight, neutral‑colored clothing, a wide‑brimmed hat, sunglasses, insect repellent, sunscreen, sturdy walking shoes, binoculars, and a high‑quality camera. For honeymooners and photographers, consider additional lenses and memory cards. Don’t forget travel documents and essential medications.'
    },
    {
      question: 'Are safari itineraries customizable for different interests and group types?',
      answer:
        'Yes! We tailor itineraries for families, couples, wildlife photographers, and adventure seekers. Whether you want to focus on Big Five sightings, cultural village visits, hot air balloon rides, or beach extensions, we craft the perfect personalized safari experience.'
    },
    {
      question: 'What types of accommodations are available during the safari?',
      answer:
        'Our safaris include a range of accommodations from luxury lodges and boutique tented camps to family‑friendly resorts and eco‑friendly camps. All provide comfort, safety, and breathtaking views of the African wilderness.'
    },
    {
      question: 'Do I need visas or vaccinations before traveling to Kenya and Tanzania?',
      answer:
        'Most travelers require a valid visa for Kenya and Tanzania, often obtainable online in advance. Recommended vaccinations include Yellow Fever, Hepatitis A, Typhoid, and routine immunizations. Consult your healthcare provider well before your trip for updated advice.'
    },
    {
      question: 'How do you support sustainable and eco‑friendly tourism?',
      answer:
        'We partner with eco‑conscious lodges and local communities to promote responsible tourism. Our safaris emphasize wildlife conservation, reduce environmental impact, and contribute to local livelihoods, offering an authentic and ethical travel experience.'
    },
    {
      question: 'What is the process for booking a Kenya and Tanzania safari with your company?',
      answer:
        'Booking is straightforward: browse our safari packages or contact our specialists for a free consultation. We help you select the best itinerary, customize it to your needs, and guide you through payment and travel preparations.'
    },
    {
      question: 'Are special arrangements available for honeymooners and romantic getaways?',
      answer:
        'Yes! We offer honeymoon packages with private transfers, candlelit dinners in the bush, spa treatments, and special surprises to make your romantic trip unforgettable.'
    },
    {
      question: 'What wildlife can I expect to see on a typical safari?',
      answer:
        'Expect Africa’s Big Five—lion, elephant, leopard, buffalo, and rhino—plus giraffes, zebras, cheetahs, hippos, crocodiles, and a spectacular variety of birds like flamingos and eagles, depending on the park and season.'
    },
    {
      question: 'Can I combine a Kenya and Tanzania safari with beach vacations?',
      answer:
        'Definitely! Many travelers extend their safari with relaxing beach stays on Kenya’s coast (Diani, Malindi) or Tanzania’s Zanzibar—perfect for balancing adventure and relaxation.'
    },
    {
      question: 'What should I pack when travelling with infants?',
      answer:
        'We recommend nappies/diapers, formulas, books and games, and a variety of snacks for the trip.'
    },
    {
      question: 'What is the tipping culture in Kenya & Tanzania?',
      answer:
        'Tipping is common in tourism and hospitality. For safari guides, $10–$20 per person per day is encouraged, depending on trip length. In restaurants and hotels, consider $5–$10 overall. Tipping is appreciation—both Kenyan Shillings and USD are accepted.'
    }
  ];

  // Build FAQPage structured data for SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faqs || []).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Reyona Safaris | 24/7 Support</title>
        <meta name="description" content="Contact Reyona Safaris for safari planning, custom itineraries, bookings, and 24/7 emergency support." />
        <link rel="canonical" href="https://reyonasafaris.com/contact" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <img 
          src="/contact.png"
          alt="Contact us background"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-30"
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
                        {/* Hidden canonical phone fields populated on submit */}
                        <input name="phone" />
                        <input name="phoneCountry" />
                        <input name="phoneNumber" />
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
                        <div className="relative pb-5">
                          <Label>Phone Number</Label>
                          <div className="flex gap-2 mt-1">
                            <CountryCodeSelect value={formData.phoneCountry} onChange={(code) => setFormData(prev => ({ ...prev, phoneCountry: code }))} className="w-48" />
                      <Input
                        inputMode="tel"
                        placeholder="Phone number"
                        value={formData.phoneNumber}
                        className={`${phoneError ? 'border-red-500/70 ring-2 ring-red-500/60 focus-visible:ring-red-500/70 focus:border-red-500/70' : ''} transition-all`}
                        aria-invalid={!!phoneError}
                        onChange={(e) => {
                          const v = e.target.value;
                          setFormData(prev => ({ ...prev, phoneNumber: v }));
                          const d = v.replace(/[^0-9]/g, '');
                          const r = {
                            '+254': { min: 9, max: 9 }, '+255': { min: 9, max: 9 }, '+256': { min: 9, max: 9 }, '+250': { min: 9, max: 9 }, '+257': { min: 8, max: 9 }, '+260': { min: 9, max: 9 }, '+27': { min: 9, max: 9 }, '+20': { min: 9, max: 10 }, '+971': { min: 9, max: 9 }, '+91': { min: 10, max: 10 }, '+61': { min: 9, max: 9 }, '+44': { min: 9, max: 10 }, '+1': { min: 10, max: 10 }, '+49': { min: 10, max: 11 }, '+33': { min: 9, max: 9 }, '+39': { min: 9, max: 10 }, '+34': { min: 9, max: 9 }, '+81': { min: 9, max: 10 }, '+86': { min: 8, max: 11 }, '+353': { min: 9, max: 9 }, '+46': { min: 7, max: 10 },
                          }[formData.phoneCountry] || { min: 6, max: 14 };
                          if (!d || d.length < r.min || d.length > r.max) {
                            setPhoneError(`Enter ${r.min === r.max ? r.min : `${r.min}-${r.max}`} digits for ${formData.phoneCountry}.`);
                          } else {
                            setPhoneError('');
                          }
                        }}
                      />
                      {/* Warning text intentionally removed per request; visual highlight remains */}
                          </div>
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
                      <p>Delta Chambers, P.O.BOX 172-00100</p>
                      <p>Nairobi, Kenya</p>
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
                      <span className="font-semibold">+254 707 694388</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@reyonasafaris.com</span>
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
      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  );
};

export default Contact;
