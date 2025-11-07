import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
import CountryCodeSelect from '@/components/CountryCodeSelect';
import { Checkbox } from '@/components/ui/checkbox';
import { Users, MapPin, Clock, Star, Phone, Mail, Plus, Minus, Calendar as CalendarIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const CustomSafari = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCountry: '+254',
    phoneNumber: '',
    duration: '',
    groupSize: '',
    budget: '',
    destinations: [],
    experiences: [],
    accommodation: '',
    travelDates: '',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState<string>('');
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [openCalendar, setOpenCalendar] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());
  const budgetRef = useRef<HTMLDivElement | null>(null);
  const safariDetailsRef = useRef<HTMLDivElement | null>(null);
  // Group size (match Contact form behavior)
  const [adults, setAdults] = useState<number>(2);
  const [childrenUnder12, setChildrenUnder12] = useState<number>(0);
  const [childrenAges, setChildrenAges] = useState<number[]>([]);
  const [showAgesDialog, setShowAgesDialog] = useState<boolean>(false);
  const [childrenAgesError, setChildrenAgesError] = useState<string>('');

  useEffect(() => {
    // Keep calendar month aligned with chosen start date when opening
    if (openCalendar) {
      setCalendarMonth((dateRange as any)?.from || new Date());
    }
  }, [openCalendar]);

  const formatDate = (d?: Date) =>
    d ? d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : '';
  const rangeLabel = dateRange.from && dateRange.to
    ? `${formatDate(dateRange.from)} – ${formatDate(dateRange.to)}`
    : dateRange.from
    ? `${formatDate(dateRange.from)} – …`
    : '';

  const destinations = [
    // Kenya
    'Masai Mara National Reserve',
    'Amboseli National Park',
    'Tsavo East National Park',
    'Tsavo West National Park',
    'Lake Nakuru National Park',
    'Samburu National Reserve',
    'Salt Lick Sanctuary',
    'Ol Pejeta Conservancy',
    'Solio Conservancy',
    'Meru National Park',
    'Lake Elementaita',
    'Lake Bogoria',
    'Lake Naivasha',
    'Diani Beach',
    'Aberdare National Park',
    'Hell\'s Gate National Park',
    // Tanzania
    'Serengeti National Park',
    'Ngorongoro Conservation Area',
    'Tarangire National Park',
    'Lake Manyara National Park'
    ,
    'Zanzibar'
  ];

  const experiences = [
    // Match Experiences page
    'Sunrise Hot Air Balloon Safari',
    'Cultural Immersion in Maasai Villages',
    'Guided Nature Walks with Local Experts',
    'Night Game Drives',
    'Traditional Cooking Classes',
    'Community Conservation Projects',
    'Bird Watching Expeditions',
    'Horse Riding Safaris',
    'Coffee Farm Visits',
    'Boat Riding on Lake Naivasha',
    'Boat Safaris on Lake Nakuru',
    'Bush Dinner Under the Stars',
    'Bush Breakfast Experience',
    'Sundowner Experiences',
    'Flower Farm Visits',
    'Massage Therapy',
    // General add-ons
    'Beach Activities',
    'Game Drives'
  ];

  const budgetRanges = [
    { value: 'budget', label: '$1,000 - $2,500 per person', description: 'Budget accommodations, group tours' },
    { value: 'mid-range', label: '$2,500 - $5,000 per person', description: 'Comfortable lodges, semi-private tours' },
    { value: 'luxury', label: '$5,000 - $10,000 per person', description: 'Luxury lodges, private tours' },
    { value: 'ultra-luxury', label: '$10,000+ per person', description: 'Ultra-luxury, exclusive experiences' }
  ];

  // Map accommodation internal values to full labels for submission
  const accommodationLabels: Record<string, string> = {
    'luxury-lodge': 'Luxury Lodges',
    'tented-camp': 'Luxury Tented Camps',
    'eco-lodge': 'Eco Lodges',
    'budget-camp': 'Budget Camps',
    'mixed': 'Mix of Different Types',
  };

  // Country selection handled by CountryCodeSelect (searchable + recents)

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
    
    // Validate children ages (same as Contact form)
    if (childrenUnder12 > 0) {
      if (childrenAges.length !== childrenUnder12) {
        setChildrenAgesError('Please provide the age for each child under 12.');
        setShowAgesDialog(true);
        return;
      }
      const invalid = childrenAges.some((age) => isNaN(age as any) || age < 0 || age > 11);
      if (invalid) {
        setChildrenAgesError('Ages must be between 0 and 11 years.');
        setShowAgesDialog(true);
        return;
      }
    } else {
      setChildrenAgesError('');
    }
    
    // Format data with descriptive text
    // Duration comes as label like "7 Days" from dropdown; group size derived from counters
    
    const formatBudget = (value) => {
      if (!value) return '';
      const budgetRange = budgetRanges.find(b => b.value === value);
      return budgetRange ? budgetRange.label : value;
    };
    
    // Basic per-country phone validation
    const digitsLocal = (formData.phoneNumber || '').replace(/[^0-9]/g, '');
    const rules: Record<string, { min: number; max: number }> = {
      '+254': { min: 9, max: 9 }, '+255': { min: 9, max: 9 }, '+256': { min: 9, max: 9 }, '+250': { min: 9, max: 9 },
      '+257': { min: 8, max: 9 }, '+260': { min: 9, max: 9 }, '+27': { min: 9, max: 9 }, '+20': { min: 9, max: 10 },
      '+971': { min: 9, max: 9 }, '+91': { min: 10, max: 10 }, '+61': { min: 9, max: 9 }, '+44': { min: 9, max: 10 },
      '+1': { min: 10, max: 10 }, '+49': { min: 10, max: 11 }, '+33': { min: 9, max: 9 }, '+39': { min: 9, max: 10 },
      '+34': { min: 9, max: 9 }, '+81': { min: 9, max: 10 }, '+86': { min: 8, max: 11 }, '+353': { min: 9, max: 9 }, '+46': { min: 7, max: 10 },
    };
    const rr = rules[formData.phoneCountry] || { min: 6, max: 14 };
    if (!digitsLocal || digitsLocal.length < rr.min || digitsLocal.length > rr.max) {
      setPhoneError(`Please enter ${rr.min === rr.max ? rr.min : `${rr.min}-${rr.max}`} digits for ${formData.phoneCountry}.`);
      return;
    }
    setPhoneError('');

    // Update hidden fields with current form data
    const form = e.target;
    form.querySelector('input[name="destinations"]').value = formData.destinations.join(', ');
    form.querySelector('input[name="experiences"]').value = formData.experiences.join(', ');
    form.querySelector('input[name="budget"]').value = formatBudget(formData.budget);
    form.querySelector('input[name="duration"]').value = formData.duration || '';
    const groupTotal = adults + childrenUnder12;
    form.querySelector('input[name="groupSize"]').value = groupTotal ? `${groupTotal} people` : '';
    const breakdown = `Adults: ${adults}; Children <12: ${childrenUnder12}${childrenUnder12 > 0 ? ` (Ages: ${childrenAges.filter((a)=>!isNaN(a as any)).join(', ')})` : ''}; Total: ${groupTotal}`;
    const groupBreakdownInput = form.querySelector('input[name="groupSizeBreakdown"]') as HTMLInputElement | null;
    if (groupBreakdownInput) groupBreakdownInput.value = breakdown;
    // Extra group fields for clarity
    const adultsInput = form.querySelector('input[name="adults"]') as HTMLInputElement | null;
    if (adultsInput) adultsInput.value = String(adults);
    const childrenInput = form.querySelector('input[name="childrenUnder12"]') as HTMLInputElement | null;
    if (childrenInput) childrenInput.value = String(childrenUnder12);
    const childrenAgesInput = form.querySelector('input[name="childrenUnder12Ages"]') as HTMLInputElement | null;
    if (childrenAgesInput) childrenAgesInput.value = childrenAges.join(', ');
    const groupSizeTotalInput = form.querySelector('input[name="groupSizeTotal"]') as HTMLInputElement | null;
    if (groupSizeTotalInput) groupSizeTotalInput.value = String(groupTotal);
    const accommodationLabel = accommodationLabels[formData.accommodation] || formData.accommodation || '';
    form.querySelector('input[name="accommodation"]').value = accommodationLabel;
    // Ensure travel dates are submitted (fallback to current label if needed)
    form.querySelector('input[name="travelDates"]').value = formData.travelDates || (rangeLabel || '');
    // Compose and include canonical phone field
    const cleanedLocal = (formData.phoneNumber || '').replace(/[^0-9]/g, '');
    const fullPhone = `${formData.phoneCountry}${cleanedLocal}`;
    const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement | null;
    if (phoneInput) phoneInput.value = fullPhone;
    const phoneCountryInput = form.querySelector('input[name="phoneCountry"]') as HTMLInputElement | null;
    if (phoneCountryInput) phoneCountryInput.value = formData.phoneCountry;
    const phoneNumberInput = form.querySelector('input[name="phoneNumber"]') as HTMLInputElement | null;
    if (phoneNumberInput) phoneNumberInput.value = cleanedLocal;
    
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
        duration: '',
        groupSize: '',
        travelDates: '',
        budget: '',
        destinations: [],
        experiences: [],
        accommodation: '',
        specialRequests: ''
      });
      // Reset group size state
      setAdults(2);
      setChildrenUnder12(0);
      setChildrenAges([]);
      setChildrenAgesError('');
      setShowAgesDialog(false);
      
      // Scroll to the success message
      setTimeout(() => {
        const formSection = document.getElementById('custom-safari-form');
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
      alert('There was an error submitting your request. Please try again or contact us directly.');
    });
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    // Clear any previously selected dates when starting a new request
    setDateRange({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Plan Your Custom Safari | Tailor‑Made Itineraries | Reyona Safaris</title>
        <meta name="description" content="Design your tailor‑made safari with expert planners. Choose dates, destinations, budget and experiences for a personalized itinerary." />
        <link rel="canonical" href="https://reyonasafaris.com/custom-safari" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
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
          {!isSubmitted ? (
            <Card className="shadow-luxury">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Plan Your Custom Safari</CardTitle>
              <p className="text-center text-muted-foreground">
                Fill out this form and our safari experts will create a personalized itinerary just for you
              </p>
            </CardHeader>
            <CardContent>
              <form 
                name="custom-safari" 
                method="POST" 
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                {/* Netlify Forms Hidden Fields */}
                <input type="hidden" name="form-name" value="custom-safari" />
                <div className="hidden">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="destinations" value={formData.destinations.join(', ')} />
                  <input type="hidden" name="experiences" value={formData.experiences.join(', ')} />
                  <input type="hidden" name="budget" value={formData.budget} />
                  <input type="hidden" name="duration" value={formData.duration} />
                  {/* Human-friendly group size summary */}
                  <input type="hidden" name="groupSize" value={`${adults + childrenUnder12} people`} />
                  {/* Group size breakdown for clarity */}
                  <input type="hidden" name="adults" value={`${adults}`} />
                  <input type="hidden" name="childrenUnder12" value={`${childrenUnder12}`} />
                  <input type="hidden" name="childrenUnder12Ages" value={childrenAges.filter((a)=>!isNaN(a as any)).join(', ')} />
                  <input type="hidden" name="groupSizeTotal" value={`${adults + childrenUnder12}`} />
                  <input type="hidden" name="groupSizeBreakdown" value={`Adults: ${adults}; Children <12: ${childrenUnder12}${childrenUnder12 > 0 ? ` (Ages: ${childrenAges.filter((a)=>!isNaN(a as any)).join(', ')})` : ''}; Total: ${adults + childrenUnder12}`}
                  />
                  {/* Accommodation label */}
                  <input type="hidden" name="accommodation" value={accommodationLabels[formData.accommodation] || formData.accommodation} />
                  {/* Ensure travel dates are included in submission */}
                  <input type="hidden" name="travelDates" value={formData.travelDates} />
                  {/* Canonical phone value populated on submit */}
                  <input type="hidden" name="phone" />
                  <input type="hidden" name="phoneCountry" />
                  <input type="hidden" name="phoneNumber" />
                </div>
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Personal Information</h3>
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
                            '+254': { min: 9, max: 9 }, '+255': { min: 9, max: 9 }, '+256': { min: 9, max: 9 }, '+250': { min: 9, max: 9 },
                            '+257': { min: 8, max: 9 }, '+260': { min: 9, max: 9 }, '+27': { min: 9, max: 9 }, '+20': { min: 9, max: 10 },
                            '+971': { min: 9, max: 9 }, '+91': { min: 10, max: 10 }, '+61': { min: 9, max: 9 }, '+44': { min: 9, max: 10 },
                            '+1': { min: 10, max: 10 }, '+49': { min: 10, max: 11 }, '+33': { min: 9, max: 9 }, '+39': { min: 9, max: 10 },
                            '+34': { min: 9, max: 9 }, '+81': { min: 9, max: 10 }, '+86': { min: 8, max: 11 }, '+353': { min: 9, max: 9 }, '+46': { min: 7, max: 10 },
                          }[formData.phoneCountry] || { min: 6, max: 14 };
                          if (!d || d.length < r.min || d.length > r.max) setPhoneError(`Enter ${r.min === r.max ? r.min : `${r.min}-${r.max}`} digits for ${formData.phoneCountry}.`);
                          else setPhoneError('');
                        }}
                      />
                      {/* Warning text intentionally removed per request; visual highlight remains */}
                    </div>
                  </div>
                </div>

                {/* Safari Details */}
                <div ref={safariDetailsRef} className="space-y-4">
                  <h3 className="text-lg font-semibold border-b border-border pb-2">Safari Details</h3>
                  {/* Duration + Preferred Travel Dates side-by-side */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Select onValueChange={(value) => {
                        setFormData(prev => ({ ...prev, duration: value }));
                        // Smooth scroll to Safari Details section after selecting duration
                        setTimeout(() => {
                          const headerHeight = 120; // approximate fixed header height
                          const el = safariDetailsRef.current;
                          if (el) {
                            const rect = el.getBoundingClientRect();
                            const top = window.scrollY + rect.top - headerHeight - 16;
                            window.scrollTo({ top, behavior: 'smooth' });
                          }
                        }, 50);
                      }}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 30 }).map((_, i) => {
                            const d = i + 1;
                            return (
                              <SelectItem key={d} value={`${d} ${d === 1 ? 'Day' : 'Days'}`}>
                                {d} {d === 1 ? 'Day' : 'Days'}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Preferred Travel Dates</Label>
                      <Popover open={openCalendar} onOpenChange={setOpenCalendar}>
                        <PopoverTrigger asChild>
                          <button
                            type="button"
                            className="w-full h-10 mt-1 px-3 py-2 rounded-md border border-input bg-background text-base md:text-sm focus:outline-none focus:ring-2 focus:ring-kenya-gold flex items-center justify-between"
                          >
                            <span className="text-left">{rangeLabel || 'Select date range'}</span>
                            <CalendarIcon className="w-4 h-4 opacity-70" />
                          </button>
                        </PopoverTrigger>
                        <PopoverContent
                          align="start"
                          className="p-0 origin-top-left bg-gradient-to-b from-black/90 to-kenya-burgundy/80 text-white border-kenya-burgundy/40"
                          onKeyDown={(e) => {
                            if (e.key === 'ArrowRight') {
                              setCalendarMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1));
                            } else if (e.key === 'ArrowLeft') {
                              setCalendarMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1));
                            }
                          }}
                        >
                          <Calendar
                            mode="range"
                            numberOfMonths={1}
                            selected={dateRange as any}
                            disabled={{ before: new Date(new Date().setHours(0,0,0,0)) }}
                            month={calendarMonth}
                            onMonthChange={(m:any)=>setCalendarMonth(m)}
                            onDayClick={(day: Date) => {
                              const hasFrom = !!dateRange?.from;
                              const hasTo = !!dateRange?.to;
                              if (hasFrom && !hasTo) {
                                let start = dateRange.from as Date;
                                let end = day;
                                if (end < start) { const tmp = start; start = end; end = tmp; }
                                setDateRange({ from: start, to: end });
                                const label = `${formatDate(start)} – ${formatDate(end)}`;
                                setFormData(prev => ({ ...prev, travelDates: label }));
                                setOpenCalendar(false);
                              } else {
                                setDateRange({ from: day, to: undefined });
                              }
                            }}
                            classNames={{
                              cell: [
                                'h-9 w-9 text-center text-sm p-0 relative',
                                '[&:has([aria-selected].day-range-start)]:rounded-l-full',
                                '[&:has([aria-selected].day-range-end)]:rounded-r-full',
                                '[&:has([aria-selected].day-outside)]:bg-kenya-gold/70',
                                'focus-within:relative focus-within:z-20',
                              ].join(' '),
                              day_selected: 'bg-kenya-burgundy text-white rounded-full',
                              day_range_middle: 'aria-selected:bg-kenya-gold/50 aria-selected:text-foreground',
                              day_range_start: 'bg-kenya-burgundy text-white rounded-l-full',
                              day_range_end: 'bg-kenya-burgundy text-white rounded-r-full',
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  {/* Group Size placed below, boxes side-by-side */}
                  <div>
                    <Label>Group Size</Label>
                    <div className="mt-2 grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Adults</span>
                          <div className="flex items-center gap-2">
                            <Button type="button" variant="outline" size="icon" onClick={() => setAdults((n) => Math.max(1, n - 1))} aria-label="Decrease adults">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center select-none">{adults}</span>
                            <Button type="button" variant="outline" size="icon" onClick={() => setAdults((n) => n + 1)} aria-label="Increase adults">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="border rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">Children (under 12)</div>
                            <div className="text-xs text-muted-foreground">Ages required</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button type="button" variant="outline" size="icon" onClick={() => {
                              setChildrenUnder12((n) => {
                                const next = Math.max(0, n - 1);
                                setChildrenAges((ages) => ages.slice(0, next));
                                return next;
                              });
                            }} aria-label="Decrease children">
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center select-none">{childrenUnder12}</span>
                            <Button type="button" variant="outline" size="icon" onClick={() => {
                              setChildrenUnder12((n) => {
                                const next = n + 1;
                                setShowAgesDialog(true);
                                setChildrenAges((ages) => {
                                  const copy = [...ages];
                                  while (copy.length < next) copy.push(NaN as any);
                                  return copy;
                                });
                                return next;
                              });
                            }} aria-label="Increase children">
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        {childrenUnder12 > 0 && childrenAges.filter((a) => !isNaN(a as any)).length === childrenUnder12 && (
                          <div className="mt-2 text-xs text-muted-foreground">Ages: {childrenAges.join(', ')}</div>
                        )}
                        {childrenAgesError && (
                          <div className="mt-2 text-xs text-red-600">{childrenAgesError}</div>
                        )}
                        {childrenUnder12 > 0 && (
                          <div className="mt-2">
                            <Button type="button" variant="outline" size="sm" className="border-kenya-gold text-kenya-gold rounded-md hover:bg-kenya-gold hover:text-black transition-colors" onClick={() => setShowAgesDialog(true)}>
                              Edit children ages
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Children Ages Dialog */}
                <Dialog open={showAgesDialog} onOpenChange={setShowAgesDialog}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Children Ages (under 12)</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      {childrenUnder12 === 0 ? (
                        <div className="text-sm text-muted-foreground">No children added.</div>
                      ) : (
                        <div className="space-y-3">
                          {Array.from({ length: childrenUnder12 }).map((_, idx) => (
                            <div key={idx} className="grid grid-cols-[1fr,120px] items-center gap-3">
                              <Label className="text-sm">Child {idx + 1} Age</Label>
                              <Input
                                inputMode="numeric"
                                placeholder="0-11"
                                value={
                                  Number.isNaN(childrenAges[idx] as any) || childrenAges[idx] === undefined
                                    ? ''
                                    : String(childrenAges[idx])
                                }
                                onChange={(e) => {
                                  const val = e.target.value.replace(/[^0-9]/g, '');
                                  const num = val === '' ? NaN : parseInt(val, 10);
                                  setChildrenAges((prev) => {
                                    const next = [...prev];
                                    next[idx] = num as any;
                                    return next;
                                  });
                                }}
                              />
                            </div>
                          ))}
                          {childrenAgesError && (
                            <div className="text-sm text-red-600">{childrenAgesError}</div>
                          )}
                        </div>
                      )}
                    </div>
                    <DialogFooter>
                      <Button
                        type="button"
                        onClick={() => {
                          if (childrenUnder12 > 0) {
                            if (childrenAges.length !== childrenUnder12) {
                              setChildrenAgesError('Please provide the age for each child under 12.');
                              return;
                            }
                            const invalid = childrenAges.some((age) => isNaN(age as any) || age < 0 || age > 11);
                            if (invalid) {
                              setChildrenAgesError('Ages must be between 0 and 11 years.');
                              return;
                            }
                          }
                          setChildrenAgesError('');
                          setShowAgesDialog(false);
                        }}
                        variant="luxury"
                      >
                        Save Ages
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                {/* Budget */}
                <div ref={budgetRef} className="space-y-4">
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
                      name="specialRequests"
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
          ) : (
            <Card className="shadow-luxury">
              <CardContent className="py-16 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-kenya-purple mb-4">Successfully Sent!</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Thank you for your custom safari request! Our safari experts have received your details and will contact you within 24 hours to discuss your dream safari and create a personalized itinerary.
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
                    Or <a href="/contact" className="text-kenya-purple hover:underline">contact us directly</a> if you prefer
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
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
                  <p className="text-white/90">+254 707 694388</p>
                  <p className="text-white/70 text-sm">Available 24/7</p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-kenya-gold" />
                  <h3 className="font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-white/90">info@reyonasafaris.com</p>
                  <p className="text-white/70 text-sm">Response within 24 hours</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="luxury" size="lg">
                <a href="tel:+254707694388">Call Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="mailto:info@reyonasafaris.com">Send Email</a>
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
