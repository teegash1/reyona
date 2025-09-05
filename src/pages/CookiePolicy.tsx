import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cookie, Settings, Eye, Shield, Info, XCircle, CheckCircle, Clock, Mail, Phone, MapPin } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Understanding how we use cookies to enhance your experience
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
                <Cookie className="w-6 h-6" />
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                This Cookie Policy explains how Reyona Safaris ("we," "our," or "us") uses cookies and similar technologies on our website to enhance your browsing experience, analyze website traffic, and provide personalized content.
              </p>
              <p className="text-gray-700">
                By continuing to use our website, you consent to our use of cookies in accordance with this policy. You can manage your cookie preferences at any time through your browser settings or our cookie consent banner.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">What Are Cookies?</h2>
              
              <div className="bg-kenya-purple/10 p-6 rounded-lg border border-kenya-purple/20">
                <p className="text-gray-700 mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They help websites remember information about your visit, such as your preferred language and other settings, which can make your next visit easier and more useful.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Info className="w-6 h-6 text-kenya-gold" />
                    </div>
                    <p className="text-sm font-medium text-kenya-gold">Information Storage</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-6 h-6 text-kenya-gold" />
                    </div>
                    <p className="text-sm font-medium text-kenya-gold">Session Management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-kenya-gold/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Settings className="w-6 h-6 text-kenya-gold" />
                    </div>
                    <p className="text-sm font-medium text-kenya-gold">Preferences</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Cookies We Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-kenya-gold rounded-lg p-6 bg-kenya-gold/10">
                  <div className="flex items-center gap-3 mb-3">
                    <CheckCircle className="w-6 h-6 text-kenya-gold" />
                    <h3 className="text-xl font-semibold text-kenya-gold">Essential Cookies</h3>
                  </div>
                  <p className="text-kenya-gold/80 mb-3">
                    These cookies are necessary for the website to function properly and cannot be disabled. They do not store any personally identifiable information.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-kenya-gold mb-2">Purpose:</h4>
                      <ul className="text-kenya-gold/80 text-sm space-y-1">
                        <li>• Maintain user sessions</li>
                        <li>• Process form submissions</li>
                        <li>• Security and fraud prevention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kenya-gold mb-2">Duration:</h4>
                      <p className="text-kenya-gold/80 text-sm">Session or up to 1 year</p>
                      <h4 className="font-semibold text-kenya-gold mb-2 mt-3">Examples:</h4>
                      <p className="text-kenya-gold/80 text-sm">Shopping cart, security, form processing</p>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-kenya-purple rounded-lg p-6 bg-kenya-purple/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Info className="w-6 h-6 text-kenya-purple" />
                    <h3 className="text-xl font-semibold text-kenya-purple">Analytics Cookies</h3>
                  </div>
                  <p className="text-kenya-purple/80 mb-3">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-kenya-purple mb-2">Purpose:</h4>
                      <ul className="text-kenya-purple/80 text-sm space-y-1">
                        <li>• Website traffic analysis</li>
                        <li>• User behavior insights</li>
                        <li>• Performance optimization</li>
                        <li>• Content improvement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kenya-purple mb-2">Duration:</h4>
                      <p className="text-kenya-purple/80 text-sm">Up to 2 years</p>
                      <h4 className="font-semibold text-kenya-purple mb-2 mt-3">Examples:</h4>
                      <p className="text-kenya-purple/80 text-sm">Google Analytics, page views, time on site</p>
                    </div>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="border border-kenya-burgundy rounded-lg p-6 bg-kenya-burgundy/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-6 h-6 text-kenya-burgundy" />
                    <h3 className="text-xl font-semibold text-kenya-burgundy">Functional Cookies</h3>
                  </div>
                  <p className="text-kenya-burgundy/80 mb-3">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-kenya-burgundy mb-2">Purpose:</h4>
                      <ul className="text-kenya-burgundy/80 text-sm space-y-1">
                        <li>• Remember user preferences</li>
                        <li>• Language and region settings</li>
                        <li>• Customized content</li>
                        <li>• Enhanced user experience</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kenya-burgundy mb-2">Duration:</h4>
                      <p className="text-kenya-burgundy/80 text-sm">Up to 1 year</p>
                      <h4 className="font-semibold text-kenya-burgundy mb-2 mt-3">Examples:</h4>
                      <p className="text-kenya-burgundy/80 text-sm">Language preference, theme selection, form data</p>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="border border-kenya-gold rounded-lg p-6 bg-kenya-gold/10">
                  <div className="flex items-center gap-3 mb-3">
                    <Cookie className="w-6 h-6 text-kenya-gold" />
                    <h3 className="text-xl font-semibold text-kenya-gold">Marketing Cookies</h3>
                  </div>
                  <p className="text-kenya-gold/80 mb-3">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-kenya-gold mb-2">Purpose:</h4>
                      <ul className="text-kenya-gold/80 text-sm space-y-1">
                        <li>• Targeted advertising</li>
                        <li>• Social media integration</li>
                        <li>• Campaign tracking</li>
                        <li>• Remarketing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kenya-gold mb-2">Duration:</h4>
                      <p className="text-kenya-gold/80 text-sm">Up to 2 years</p>
                      <h4 className="font-semibold text-kenya-gold mb-2 mt-3">Examples:</h4>
                      <p className="text-kenya-gold/80 text-sm">Facebook Pixel, Google Ads, social sharing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specific Cookies Used */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Specific Cookies We Use</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Cookie Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">session_id</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Maintain user session</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Session</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Essential</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">_ga</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics tracking</td>
                      <td className="px-4 py-3 text-sm text-gray-700">2 years</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">_gid</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Google Analytics session</td>
                      <td className="px-4 py-3 text-sm text-gray-700">24 hours</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Analytics</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">language</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Language preference</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Functional</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">theme</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Theme preference</td>
                      <td className="px-4 py-3 text-sm text-gray-700">1 year</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Functional</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-bold text-kenya-purple">fbp</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Facebook Pixel tracking</td>
                      <td className="px-4 py-3 text-sm text-gray-700">3 months</td>
                      <td className="px-4 py-3 text-sm text-gray-700">Marketing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Third-Party Cookies</h2>
              
              <p className="text-gray-700 mb-4">
                Some cookies on our website are set by third-party services that we use to enhance functionality and analyze website performance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Google Analytics</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Helps us understand how visitors use our website and improve user experience.
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" className="text-kenya-gold hover:underline">Google Privacy Policy</a>
                  </p>
                </div>
                
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Facebook Pixel</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Enables us to measure the effectiveness of our advertising campaigns.
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Privacy Policy:</strong> <a href="https://www.facebook.com/policy.php" className="text-kenya-gold hover:underline">Facebook Privacy Policy</a>
                  </p>
                </div>
                
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Payment Processors</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Secure payment processing and fraud prevention services.
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Examples:</strong> Stripe, PayPal, M-Pesa
                  </p>
                </div>
                
                <div className="bg-kenya-purple/10 p-4 rounded-lg border border-kenya-purple/20">
                  <h4 className="font-semibold text-kenya-gold mb-2">Social Media</h4>
                  <p className="text-gray-700 text-sm mb-2">
                    Social sharing buttons and embedded content from social platforms.
                  </p>
                  <p className="text-xs text-gray-700">
                    <strong>Examples:</strong> Facebook, Instagram, Twitter
                  </p>
                </div>
              </div>
            </div>

            {/* Managing Your Cookie Preferences */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Settings className="w-6 h-6" />
                Managing Your Cookie Preferences
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-kenya-gold mb-3">Browser Settings</h3>
                  <p className="text-gray-700 mb-4">
                    You can control and manage cookies through your browser settings. Most browsers allow you to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies</li>
                    <li>Set preferences for different types of cookies</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-kenya-gold mb-3">Cookie Consent Banner</h3>
                  <p className="text-gray-700 mb-4">
                    When you first visit our website, you'll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences</li>
                    <li>Learn more about our cookie usage</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-kenya-gold mb-3">Opt-Out Options</h3>
                  <p className="text-gray-700 mb-4">
                    For specific third-party services, you can opt out directly:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-kenya-purple/10 p-3 rounded border border-kenya-purple/20">
                      <p className="font-medium text-sm mb-2">Google Analytics</p>
                      <a href="https://tools.google.com/dlpage/gaoptout" className="text-kenya-gold text-sm hover:underline">Google Analytics Opt-out</a>
                    </div>
                    <div className="bg-kenya-purple/10 p-3 rounded border border-kenya-purple/20">
                      <p className="font-medium text-sm mb-2">Facebook</p>
                      <a href="https://www.facebook.com/settings?tab=ads" className="text-kenya-gold text-sm hover:underline">Facebook Ad Preferences</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact of Disabling Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Impact of Disabling Cookies</h2>
              
              <div className="bg-kenya-gold/10 border border-kenya-gold/30 rounded-lg p-6">
                <h4 className="font-semibold text-kenya-gold mb-3">Important Notice</h4>
                <p className="text-kenya-gold/80 mb-4">
                  While you can disable cookies, please note that some features of our website may not function properly without them:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-kenya-gold mb-2">Essential Features</h5>
                    <ul className="text-kenya-gold/80 text-sm space-y-1">
                      <li>• Shopping cart functionality</li>
                      <li>• Form submissions</li>
                      <li>• Security features</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-kenya-gold mb-2">Enhanced Features</h5>
                    <ul className="text-kenya-gold/80 text-sm space-y-1">
                      <li>• Personalized content</li>
                      <li>• Language preferences</li>
                      <li>• Analytics and insights</li>
                      <li>• Marketing optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates to Cookie Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Updates to This Cookie Policy</h2>
              
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
              </p>
              
              <p className="text-gray-700">
                We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-kenya-purple/15 border border-kenya-purple/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Email: privacy@reyonasafaris.com</span>
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

export default CookiePolicy;
