import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Camera, Star, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LakeManyara = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[70vh] flex items-center justify-center pt-28">
        <img src="https://images.unsplash.com/photo-1565787153192-9b3e226d1b4d?q=80&w=1600&auto=format&fit=crop" alt="Lake Manyara" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Lake Manyara</h1>
          <p className="text-xl md:text-2xl text-kenya-gold font-semibold mb-2">A Colorful Oasis</p>
          <p className="text-white/90">Famous for tree‑climbing lions, flamingo‑lined shores and a vibrant mix of forests and soda lakes.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="luxury" onClick={() => navigate('/contact?subject=Lake%20Manyara%20Safari')}>Book Lake Manyara Safari</Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2"><MapPin className="w-8 h-8 text-white" /></div>
            <h4 className="font-semibold">Best Time</h4>
            <p className="text-muted-foreground">June–Sept; Nov–Mar for birds</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2"><Users className="w-8 h-8 text-white" /></div>
            <h4 className="font-semibold">Group Size</h4>
            <p className="text-muted-foreground">2–6 people</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2"><Clock className="w-8 h-8 text-white" /></div>
            <h4 className="font-semibold">Suggested Stay</h4>
            <p className="text-muted-foreground">1–2 days</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2"><Star className="w-8 h-8 text-white" /></div>
            <h4 className="font-semibold">Highlights</h4>
            <p className="text-muted-foreground">Flamingos & tree‑climbing lions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-3">About Lake Manyara</h2>
            <p className="text-muted-foreground">A compact park with outsized diversity — groundwater forests, open floodplains and a shimmering soda lake that draws clouds of flamingos and countless birds.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Why Visit</h3>
            <p className="text-muted-foreground">Cruise along the lake edge for flamingo vistas, scan fig trees for lions and enjoy lush forest drives — a photographer’s dream in changing light.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LakeManyara;

