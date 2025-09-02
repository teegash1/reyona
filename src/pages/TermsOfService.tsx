import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, CheckCircle, XCircle, Clock, CreditCard, Shield, Users, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-magenta/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Understanding our service terms and conditions
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-kenya-purple/10 border-l-4 border-kenya-purple p-4 mb-8">
              <p className="text-kenya-purple font-medium">
                <strong>Last Updated:</strong> December 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") govern your use of Reyona Safaris' website and services. By accessing our website, making bookings, or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-700">
                Reyona Safaris ("we," "our," or "us") reserves the right to modify these Terms at any time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            {/* Service Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Service Description</h2>
              
              <p className="text-gray-700 mb-4">
                Reyona Safaris provides safari tours, wildlife experiences, accommodation bookings, and travel services throughout Kenya and East Africa. Our services include:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Safari Services</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Wildlife game drives</li>
                    <li>• National park tours</li>
                    <li>• Cultural experiences</li>
                    <li>• Photography safaris</li>
                  </ul>
                </div>
                
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Travel Services</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Accommodation booking</li>
                    <li>• Transportation arrangements</li>
                    <li>• Tour guiding</li>
                    <li>• Travel planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Booking and Reservations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Booking and Reservations
              </h2>
              
              <div className="space-y-4">
                <div className="bg-kenya-gold/10 border-l-4 border-kenya-gold p-4">
                  <h4 className="font-semibold text-kenya-gold mb-2">Booking Process</h4>
                  <ul className="text-kenya-gold/80 space-y-1">
                    <li>• All bookings must be confirmed in writing</li>
                    <li>• A deposit is required to secure reservations</li>
                    <li>• Full payment is due before departure</li>
                    <li>• Bookings are subject to availability</li>
                  </ul>
                </div>
                
                <div className="bg-kenya-magenta/10 border-l-4 border-kenya-magenta p-4">
                  <h4 className="font-semibold text-kenya-magenta mb-2">Required Information</h4>
                  <ul className="text-kenya-magenta/80 space-y-1">
                    <li>• Full names of all travelers</li>
                    <li>• Passport details and validity</li>
                    <li>• Travel dates and preferences</li>
                    <li>• Special requirements or dietary needs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Terms
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Payment Schedule</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Deposit:</strong> 30% of total cost to confirm booking</li>
                    <li><strong>Balance:</strong> Due 30 days before departure</li>
                    <li><strong>Late Bookings:</strong> Full payment may be required immediately</li>
                    <li><strong>Currency:</strong> All prices in USD unless specified</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Accepted Payment Methods</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Bank transfers</li>
                    <li>• Credit/debit cards</li>
                    <li>• Mobile money (M-Pesa)</li>
                    <li>• Cash (in person only)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Cancellation and Refunds
              </h2>
              
              <div className="bg-kenya-magenta/10 border border-kenya-magenta/30 rounded-lg p-6">
                <h4 className="font-semibold text-kenya-magenta mb-3">Cancellation Policy</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-kenya-magenta mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-kenya-magenta">More than 60 days before departure</p>
                      <p className="text-kenya-magenta/80 text-sm">Full refund minus 10% administrative fee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-kenya-magenta mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-kenya-magenta">30-60 days before departure</p>
                      <p className="text-kenya-magenta/80 text-sm">50% refund of total cost</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-kenya-magenta mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-kenya-magenta">Less than 30 days before departure</p>
                      <p className="text-kenya-magenta/80 text-sm">No refund available</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-kenya-magenta/20 rounded">
                  <p className="text-kenya-magenta/90 text-sm">
                    <strong>Note:</strong> Force majeure events (natural disasters, political unrest, etc.) may result in different refund policies. Travel insurance is strongly recommended.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Travel Requirements and Responsibilities
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Traveler Responsibilities</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Obtain valid travel documents and visas</li>
                    <li>• Ensure adequate travel insurance coverage</li>
                    <li>• Comply with local laws and customs</li>
                    <li>• Follow safety instructions from guides</li>
                    <li>• Respect wildlife and natural environments</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Health and Safety</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Consult healthcare providers for vaccinations</li>
                    <li>• Disclose any medical conditions</li>
                    <li>• Carry necessary medications</li>
                    <li>• Follow COVID-19 protocols if applicable</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Age Restrictions</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Children under 5: Free (sharing accommodation)</li>
                    <li>• Children 5-12: 50% of adult rate</li>
                    <li>• Children 13+: Full adult rate</li>
                    <li>• Minimum age for certain activities may apply</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Service Modifications</h2>
              
              <div className="bg-kenya-gold/10 border-l-4 border-kenya-gold p-4">
                <h4 className="font-semibold text-kenya-gold mb-2">Important Notice</h4>
                <p className="text-kenya-gold/80 mb-3">
                  Reyona Safaris reserves the right to modify itineraries, accommodations, or services due to:
                </p>
                <ul className="text-kenya-gold/80 space-y-1">
                  <li>• Weather conditions or natural events</li>
                  <li>• Safety concerns or security issues</li>
                  <li>• Operational requirements</li>
                  <li>• Force majeure circumstances</li>
                </ul>
              </div>
              
              <p className="text-gray-700 mt-4">
                We will provide reasonable alternatives when possible and communicate changes promptly. No compensation will be provided for minor itinerary adjustments that maintain the overall quality of the experience.
              </p>
            </div>

            {/* Liability and Insurance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Liability and Insurance</h2>
              
              <div className="space-y-4">
                <div className="bg-kenya-magenta/10 border border-kenya-magenta/30 rounded-lg p-4">
                  <h4 className="font-semibold text-kenya-magenta mb-2">Limitation of Liability</h4>
                  <p className="text-kenya-magenta/80 text-sm">
                    Reyona Safaris' liability is limited to the amount paid for the service. We are not liable for indirect, incidental, or consequential damages.
                  </p>
                </div>
                
                <div className="bg-kenya-purple/10 border border-kenya-purple/30 rounded-lg p-4">
                  <h4 className="font-semibold text-kenya-purple mb-2">Travel Insurance</h4>
                  <p className="text-kenya-purple/80 text-sm">
                    Comprehensive travel insurance is strongly recommended and should cover medical expenses, trip cancellation, and personal liability.
                  </p>
                </div>
              </div>
            </div>

            {/* Code of Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Code of Conduct
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-kenya-gold/10 p-4 rounded-lg border border-kenya-gold/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Expected Behavior</h4>
                  <ul className="text-kenya-gold/80 space-y-1 text-sm">
                    <li>• Respect local cultures and traditions</li>
                    <li>• Follow guide instructions</li>
                    <li>• Maintain appropriate dress codes</li>
                    <li>• Be punctual for scheduled activities</li>
                  </ul>
                </div>
                
                <div className="bg-kenya-magenta/10 p-4 rounded-lg border border-kenya-magenta/20">
                  <h4 className="font-semibold text-kenya-magenta mb-2">Prohibited Behavior</h4>
                  <ul className="text-kenya-magenta/80 space-y-1 text-sm">
                    <li>• Harassment or discrimination</li>
                    <li>• Illegal activities</li>
                    <li>• Endangering wildlife or environment</li>
                    <li>• Excessive alcohol consumption</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 mt-4">
                Violation of the code of conduct may result in immediate termination of services without refund.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Dispute Resolution</h2>
              
              <p className="text-gray-700 mb-4">
                We encourage open communication to resolve any issues. If disputes cannot be resolved amicably:
              </p>
              
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>Submit a formal complaint in writing within 30 days</li>
                <li>We will respond within 14 business days</li>
                <li>If unresolved, mediation may be suggested</li>
                <li>Legal proceedings are subject to Kenyan law and jurisdiction</li>
              </ol>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Force Majeure</h2>
              
              <p className="text-gray-700 mb-4">
                Reyona Safaris is not liable for failure to perform due to circumstances beyond our control, including:
              </p>
              
              <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                <ul className="text-gray-700 space-y-2">
                  <li>• Natural disasters (earthquakes, floods, wildfires)</li>
                  <li>• Political unrest or government actions</li>
                  <li>• Transportation strikes or delays</li>
                  <li>• Disease outbreaks or health emergencies</li>
                  <li>• Acts of terrorism or war</li>
                </ul>
              </div>
              
              <p className="text-gray-700 mt-4">
                In such cases, we will work with you to reschedule or provide appropriate alternatives when possible.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Governing Law</h2>
              
              <p className="text-gray-700">
                These Terms are governed by and construed in accordance with the laws of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kenya.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-kenya-purple/15 border border-kenya-purple/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Email: legal@reyonasafaris.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Phone: +254 700 123 456</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Address: Safari Centre, Westlands, Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
