import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TsavoWest = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="relative h-[80vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-gold/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Tsavo West</h1>
        <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-4">Land of Lava & Springs</p>
        <p className="text-lg md:text-xl text-white/90 mb-8">Diverse landscapes from volcanic hills to crystal-clear springs</p>
        <Button variant="luxury" size="lg">Book Tsavo West Safari</Button>
      </div>
    </section>
    <Footer />
  </div>
);

export default TsavoWest;