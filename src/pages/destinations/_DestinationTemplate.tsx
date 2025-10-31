import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Camera, Star, Clock, Users, Bird, TreePine } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { ReactNode } from 'react';

type Section = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Facts = { title: string; value: string; icon: LucideIcon; description: string }[];

export const DestinationShell = ({
  title,
  subtitle,
  hero,
  bookSubject,
  facts,
  highlights,
  activities,
  children,
}: {
  title: string;
  subtitle: string;
  hero: { src: string; alt: string; objectPosition?: string; overlay?: string };
  bookSubject: string;
  facts: Facts;
  highlights: Section[];
  activities: { name: string; duration?: string; blurb: string }[];
  children?: ReactNode;
}) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="relative h-[80vh] flex items-center justify-center">
        <img src={hero.src} alt={hero.alt} className="absolute inset-0 w-full h-full object-cover" style={hero.objectPosition ? { objectPosition: hero.objectPosition } : undefined} />
        <div className={`absolute inset-0 ${hero.overlay ?? 'bg-black/55'}`} />
        <div className="relative z-10 text-center px-4 max-w-3xl text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">{title}</h1>
          <p className="text-2xl md:text-3xl text-kenya-gold font-semibold mb-2">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button variant="luxury" onClick={() => navigate(`/contact?subject=${encodeURIComponent(bookSubject)}`)}>Book This Experience</Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((f, i) => { const Icon = f.icon; return (
            <Card key={i} className="text-center hover:shadow-luxury transition-all duration-300">
              <CardContent className="pt-8 pb-6 space-y-3">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white"><Icon className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-kenya-gold font-semibold">{f.value}</p>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </CardContent>
            </Card>
          );})}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, i) => { const Icon = h.icon; return (
              <Card key={i} className="text-center hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-8 pb-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto text-white"><Icon className="w-8 h-8" /></div>
                  <h3 className="text-xl font-semibold">{h.title}</h3>
                  <p className="text-muted-foreground text-sm">{h.description}</p>
                </CardContent>
              </Card>
            );})}
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <Card key={i} className="hover:shadow-luxury transition-all duration-300">
                <CardHeader>
                  <Badge className="bg-kenya-gold text-black w-fit">{a.duration ?? 'Flexible'}</Badge>
                  <CardTitle className="text-lg">{a.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>{a.blurb}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {children}
      <Footer />
    </div>
  );
};

export { MapPin, Camera, Star, Clock, Users, Bird, TreePine };
