import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Compass, Users, Heart, Star, Gift, Info, Mail, Phone, MapPin, DollarSign } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Guide Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Discover East Africa through the expertise of our local guides
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
                <strong>Last Updated:</strong> October 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Compass className="w-6 h-6" />
                Discover Kenya & Tanzania Through the Eyes of our Local Experts
              </h2>
              <p className="text-gray-700 mb-4">
                Our immersive Kenya and Tanzania tours are led by passionate local guides, born and raised in East Africa. They are not just guides, they are storytellers, cultural ambassadors, and wildlife enthusiasts with an unparalleled understanding of the land, its people, and its wildlife.
              </p>
              <p className="text-gray-700 mb-4">
                Go beyond the typical tourist experience and uncover hidden gems, connect with communities, and gain authentic insights into the heart of East Africa. With our local guides, you are not just seeing Kenya and Tanzania, you are experiencing them.
              </p>
              <p className="text-gray-700">
                Benefit from their insider knowledge, discover secret spots, and create memories that will last a lifetime.
              </p>
            </div>

            {/* Why Travel With Our Local Guides */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Why Travel With Our Local Guides</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-kenya-purple/10 p-6 rounded-lg border border-kenya-purple/20 text-center">
                  <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-kenya-gold" />
                  </div>
                  <h3 className="font-semibold text-kenya-gold mb-2">Authentic Connections</h3>
                  <p className="text-gray-700 text-sm">Engage with local communities and cultures in a respectful, meaningful way.</p>
                </div>
                <div className="bg-kenya-purple/10 p-6 rounded-lg border border-kenya-purple/20 text-center">
                  <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-kenya-gold" />
                  </div>
                  <h3 className="font-semibold text-kenya-gold mb-2">Insider Knowledge</h3>
                  <p className="text-gray-700 text-sm">Discover hidden gems and secret spots that typical tours miss.</p>
                </div>
                <div className="bg-kenya-purple/10 p-6 rounded-lg border border-kenya-purple/20 text-center">
                  <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-6 h-6 text-kenya-gold" />
                  </div>
                  <h3 className="font-semibold text-kenya-gold mb-2">Passion for Wildlife</h3>
                  <p className="text-gray-700 text-sm">Travel with guides who live and breathe East Africa’s wilderness.</p>
                </div>
              </div>
            </div>

            {/* Tipping Guidelines */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Gift className="w-6 h-6" />
                Tipping Guidelines
              </h2>
              <p className="text-gray-700 mb-6">
                At Reyona, we believe in recognizing the hard work of our dedicated guides and staff who make your journey unforgettable. Tipping is a personal choice, and while it’s not mandatory, it is a wonderful way to acknowledge exceptional service and enhance the livelihoods of those who work hard to make your safari unforgettable.
              </p>
              <div className="space-y-8">
                <div className="border border-kenya-gold rounded-lg p-6 bg-kenya-gold/10">
                  <h3 className="text-xl font-semibold text-kenya-gold mb-2">For Your Guides</h3>
                  <ul className="list-disc pl-6 text-kenya-gold/90 space-y-2">
                    <li>
                      <span className="font-medium">Safari Guides:</span> We recommend a gratuity of $10 to $15 USD per guest per day for your safari guide. Their expertise, local knowledge, and passion for wildlife ensure you have an enriching experience.
                    </li>
                    <li>
                      <span className="font-medium">Driver-Guide:</span> If your guide also drives, consider an additional $5 to $10 USD per guest per day for their dual role in enhancing your journey.
                    </li>
                  </ul>
                </div>
                <div className="border border-kenya-purple rounded-lg p-6 bg-kenya-purple/10">
                  <h3 className="text-xl font-semibold text-kenya-purple mb-2">For Lodge and Camp Staff</h3>
                  <p className="text-kenya-purple/90">A tip of $5 to $10 USD per guest per day is a thoughtful way to show appreciation for the hard work of the staff who take care of you during your stay. This can often be pooled and divided among the team.</p>
                </div>
                <div className="border border-kenya-burgundy rounded-lg p-6 bg-kenya-burgundy/10">
                  <h3 className="text-xl font-semibold text-kenya-burgundy mb-2">For Local Community Experiences</h3>
                  <p className="text-kenya-burgundy/90">If you participate in community visits or cultural experiences, a tip of $5 to $10 USD for local guides is a kind gesture that supports their efforts and communities.</p>
                </div>
                <div className="bg-kenya-purple/10 border border-kenya-purple/20 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-kenya-purple mb-2 flex items-center gap-2"><DollarSign className="w-5 h-5" />General Tips</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><span className="font-medium">Cash Tips:</span> We recommend tipping in cash, as it allows guides and staff to receive the full amount directly.</li>
                    <li><span className="font-medium">Discretion:</span> Tipping should reflect your satisfaction with the service received. If you feel your guide or staff went above and beyond, feel free to adjust your tip accordingly.</li>
                    <li><span className="font-medium">Group Considerations:</span> If traveling in a group, consider collectively deciding on a tipping amount for guides and staff to streamline the process.</li>
                  </ul>
                </div>
                <div className="bg-kenya-gold/10 border border-kenya-gold/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-kenya-gold mb-2">A Note on Gratitude</h3>
                  <p className="text-kenya-gold/80">Tipping is a wonderful way to express your gratitude for the exceptional service you receive. Your generosity not only rewards individual effort but also supports local economies and communities. We hope these guidelines enhance your safari experience, allowing you to show appreciation in a meaningful way.</p>
                </div>
              </div>
            </div>

            {/* Helpful Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Helpful Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Travel Pace & Comfort</h4>
                  <p className="text-gray-700 text-sm">Our guides tailor each day to your comfort level and preferences, ensuring a balanced blend of adventure and relaxation.</p>
                </div>
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Wildlife Etiquette</h4>
                  <p className="text-gray-700 text-sm">We uphold responsible wildlife viewing with respect for animals, habitats, and park rules at all times.</p>
                </div>
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Community Respect</h4>
                  <p className="text-gray-700 text-sm">We encourage mindful interactions and support fair-trade cultural experiences that benefit local communities.</p>
                </div>
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Safety First</h4>
                  <p className="text-gray-700 text-sm">Your guide will brief you on safety best practices and is trained for emergency response across our routes.</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-kenya-purple/15 border border-kenya-purple/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our guides, tipping, or planning your safari, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Email: info@reyonasafaris.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Phone: +254 707 694388</span>
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

export default CookiePolicy;
