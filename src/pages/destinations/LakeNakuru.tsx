import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const LakeNakuru = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <section className="relative h-[80vh] bg-gradient-to-br from-pink-500/20 to-kenya-purple/20 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">Lake Nakuru</h1>
        <p className="text-2xl md:text-3xl text-pink-400 font-semibold mb-4">Pink Flamingo Paradise</p>
        <p className="text-lg md:text-xl text-white/90 mb-8">Millions of flamingos and successful rhino conservation</p>
        <Button variant="luxury" size="lg">Book Lake Nakuru Safari</Button>
      </div>
    </section>
    <Footer />
  </div>
);

export default LakeNakuru;