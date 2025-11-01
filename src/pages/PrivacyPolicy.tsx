import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Eye, Lock, Users, Globe, Phone, Mail, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-burgundy/20 flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Protecting your privacy and personal information
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
                <Shield className="w-6 h-6" />
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                Reyona Safaris ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
              </p>
              <p className="text-gray-700">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Eye className="w-6 h-6" />
                Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-kenya-gold mb-3">Personal Information</h3>
                            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Full name and contact details (email, phone number)</li>
                <li>Passport information and travel documents</li>
                <li>Travel preferences and special requirements</li>
                <li>Emergency contact information</li>
              </ul>

              <h3 className="text-xl font-semibold text-kenya-gold mb-3">Website Usage Information</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent</li>
                <li>Referring website information</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-kenya-gold mb-3">Communication Data</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Email communications and inquiries</li>
                <li>Customer service interactions</li>
                <li>Feedback and survey responses</li>
                <li>Social media interactions</li>
              </ul>
            </div>



            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6" />
                Information Sharing and Disclosure
              </h2>
              
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you (hotels, transport companies, guides)</li>
                <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                <li><strong>Emergency Situations:</strong> We may share information in emergency situations to ensure your safety</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4 flex items-center gap-2">
                <Lock className="w-6 h-6" />
                Data Security
              </h2>
              
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <div className="bg-kenya-gold/10 border-l-4 border-kenya-gold p-4">
                <h4 className="font-semibold text-kenya-gold mb-2">Security Measures Include:</h4>
                <ul className="text-kenya-gold/80 space-y-1">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Regular security assessments</li>
                  <li>• Limited access to personal information</li>
                  <li>• Secure data storage systems</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Your Rights and Choices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kenya-gold mb-3">Access and Control</h4>
                  <ul className="text-muted-foreground space-y-2">
                                      <li>• Access your personal information</li>
                  <li>• Update or correct your data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to processing of your data</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-kenya-gold mb-3">Marketing Preferences</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Opt-out of marketing communications</li>
                  <li>• Manage email preferences</li>
                  <li>• Control cookie settings</li>
                  <li>• Unsubscribe from newsletters</li>
                </ul>
              </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Data Retention</h2>
              
              <p className="text-gray-700 mb-4">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              
              <div className="bg-kenya-burgundy/10 border-l-4 border-kenya-burgundy p-4">
                <h4 className="font-semibold text-kenya-burgundy mb-2">Retention Periods:</h4>
                <ul className="text-kenya-burgundy/80 space-y-1">
                  <li>• <strong>Booking Information:</strong> 7 years (legal requirements)</li>
                  <li>• <strong>Marketing Data:</strong> Until consent withdrawal</li>
                  <li>• <strong>Website Analytics:</strong> 2 years</li>
                  <li>• <strong>Customer Service:</strong> 3 years</li>
                </ul>
              </div>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">International Data Transfers</h2>
              
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>
              
              <p className="text-gray-700">
                <strong>Primary Data Processing:</strong> Kenya<br/>
                <strong>Backup and Support:</strong> May include international locations<br/>
                <strong>Legal Basis:</strong> Contract performance and legitimate interests
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Children's Privacy</h2>
              
              <p className="text-gray-700 mb-4">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Changes to This Privacy Policy</h2>
              
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              
              <p className="text-gray-700">
                Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-kenya-purple/15 border border-kenya-purple/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-kenya-purple mb-4">Contact Us</h2>
              
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Email: privacy@reyonasafaris.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-kenya-gold" />
                  <span className="text-gray-700">Phone: +254 740 086688</span>
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

export default PrivacyPolicy;
