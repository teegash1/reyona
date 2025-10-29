import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, AlertTriangle, CheckCircle, XCircle, Clock, CreditCard, Shield, Users, Mail, Phone, MapPin } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Clear, traveler-friendly policies for a seamless safari experience
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
                Terms and Conditions
              </h2>
              <p className="text-gray-700">
                With these policies, we aim to provide you with a seamless and enjoyable experience from booking to adventure. Join us for an unforgettable journey through the breathtaking landscapes of Kenya and Tanzania!
              </p>
            </div>

            {/* Payment Options */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Options
              </h2>
              <p className="text-gray-700 mb-4">We offer flexible payment options to make reserving your dream safari easy and convenient:</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Wire Transfer</h4>
                  <p className="text-sm text-gray-700">Secure your booking with a straightforward wire transfer.</p>
                </div>
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Credit Card Payments</h4>
                  <p className="text-sm text-gray-700">Pay by card with a nominal 5% surcharge for processing.</p>
                </div>
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Cash on Arrival</h4>
                  <p className="text-sm text-gray-700">Cash payments can be made upon arrival before your safari begins.</p>
                </div>
              </div>
            </div>

            {/* Deposit Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Secure Your Booking with a Deposit
              </h2>
              <div className="bg-kenya-gold/10 border border-kenya-gold/30 rounded-lg p-6">
                <p className="text-kenya-gold/90">
                  To ensure your spot on our unforgettable safari experience, a <strong>40% deposit</strong> of the total amount is required at the time of booking. This guarantees your reservation and allows us to prepare for your arrival. In the event of any flight bookings you will be required to pay more than 40% deposit to allow us to pay full payment to secure the flight booking.
                </p>
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

            {/* Cancellation Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <XCircle className="w-6 h-6" />
                Flexible Cancellation Policy
              </h2>
              <p className="text-gray-700 mb-4">We understand that plans can change. Our cancellation policy is designed to give you peace of mind while securing your adventure:</p>
              <div className="bg-kenya-burgundy/10 border border-kenya-burgundy/30 rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-kenya-burgundy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-kenya-burgundy">60 – 90 Days Prior to Arrival</p>
                    <p className="text-kenya-burgundy/80 text-sm">Only 20% of the total amount will be charged.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-kenya-burgundy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-kenya-burgundy">45 – 59 Days Prior to Arrival</p>
                    <p className="text-kenya-burgundy/80 text-sm">A 50% charge applies.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-kenya-burgundy mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-kenya-burgundy">Within 30 Days of Arrival</p>
                    <p className="text-kenya-burgundy/80 text-sm">A 100% charge will be incurred.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safari Comfort and Experience */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Safari Comfort and Experience
              </h2>
              <p className="text-gray-700">While our safari vehicles are designed for adventure and game viewing, please note they do not feature air conditioning. We believe in an authentic experience that connects you to the wild landscapes of Africa.</p>
            </div>

            {/* Easy Amendment Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Easy Amendment Process</h2>
              <p className="text-gray-700">Need to make a change to your itinerary? Amendments are possible, subject to availability, ensuring your travel plans fit your needs.</p>
            </div>

            {/* Travel Insurance and Health & Safety */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Travel Insurance & Health and Safety</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Travel Insurance:</strong> We highly recommend purchasing travel insurance to cover any unforeseen circumstances.</li>
                <li><strong>Health and Safety:</strong> Your safety is our priority. We adhere to strict health and safety guidelines during all tours.</li>
              </ul>
            </div>

            {/* Code of Conduct */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Users className="w-6 h-6" />
                Code of Conduct
              </h2>
              <p className="text-gray-700">We expect all travelers to conduct themselves in a respectful manner towards local cultures, the environment, and other travelers. We reserve the right to terminate the tour of any participant who violates this code of conduct. </p>
            </div>

            {/* Complaints Procedure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                Complaints Procedure
              </h2>
              <p className="text-gray-700">If you have any complaints during your tour, please inform your representative immediately, so that we can address the issue promptly. Written complaints must be submitted within 30 days of the tour completion date. If you ignore your dissatisfaction then it will be hard for us to resolve the issue.</p>
            </div>

            {/* Force Majeure */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Force Majeure</h2>
              <p className="text-gray-700">In the event of force majeure ie, natural disasters, political instability we will offer alternative travel dates.</p>
            </div>

            {/* Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Liability</h2>
              <p className="text-gray-700">We are not liable for any loss, injury, or damage to personal property during your trip. Our liability is limited to the contractual value of the tour.</p>
            </div>

            {/* Dietary Requirements */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Dietary Requirements</h2>
              <p className="text-gray-700">Please inform us of any dietary requirements or allergies at the time of booking. We will do our best to accommodate your needs, but cannot guarantee all requests can be met.</p>
            </div>

            {/* Sustainability Commitment */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Sustainability Commitment</h2>
              <p className="text-gray-700">We are dedicated to responsible tourism, ensuring that your adventure positively impacts local communities and wildlife conservation efforts.</p>
            </div>

            {/* Data Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6" />
                Data Privacy
              </h2>
              <p className="text-gray-700">We are committed to protecting your personal data. As a company it is our main responsibility to protect and preserve our customer’s privacy.</p>
            </div>

            {/* Contact Information */}
            <div className="bg-kenya-purple/15 border border-kenya-purple/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-4">
                For questions about these Terms and Conditions, please contact us:
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
                  <span className="text-gray-700">Address: Delta Chambers, P.O.BOX 172-00100, Nairobi, Kenya</span>
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
