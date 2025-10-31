import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DestinationShell, Clock, Camera, Users, MapPin, Star, Bird } from './_DestinationTemplate';

const OlPejeta = () => (
  <DestinationShell
    title="Ol Pejeta Conservancy"
    subtitle="Conservation & Big Five"
    hero={{
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwHXs4mLmvgipw3pDkyhH8rT9ZTJrkE_yNKbLdWIl9_BWbAVIlLKTxU055DU8fItpIp3Bsucs7dB1R3uFD-Hth7ZCpdCPSvLABqI5GiZ26NuDxJVegQYRvY2_BCtYRHy_9pvbdC2YWdo1VD=s1360-w1360-h1020-rw',
      alt: 'Rhinos and plains at Ol Pejeta',
      objectPosition: 'center 60%',
      overlay: 'bg-black/70'
    }}
    bookSubject="Ol Pejeta Conservancy"
    facts={[
      { title: 'Signature', value: 'Rhino Conservation', icon: Star, description: 'Home to globally significant rhino programs.' },
      { title: 'Wildlife', value: 'Big Five + Chimps', icon: Users, description: 'Game drives plus a chimpanzee sanctuary visit.' },
      { title: 'Best Time', value: 'Jul – Sep', icon: Clock, description: 'Clear views and comfortable weather in dry months.' },
      { title: 'Location', value: 'Laikipia Plateau', icon: MapPin, description: 'Between Mount Kenya and Aberdares.' },
    ]}
    highlights={[
      { title: 'Northern White Rhino Visit', description: 'Learn about the last two northern white rhinos (by special arrangement).', icon: Star },
      { title: 'Night Game Drives', description: 'Explore after dark with expert spotters.', icon: Camera },
      { title: 'Chimp Sanctuary', description: 'Care center for rescued chimpanzees.', icon: Users },
      { title: 'Open Plains & Rivers', description: 'Varied habitats supporting rich wildlife.', icon: Bird },
    ]}
    activities={[
      { name: 'Day & Night Game Drives', blurb: 'Track lions, rhinos and other predators with seasoned guides.' },
      { name: 'Guided Bush Walks', blurb: 'Interpret tracks, plants and smaller wildlife on foot (where permitted).' },
      { name: 'Conservation Visits', blurb: 'Optional behind‑the‑scenes briefings on rhino protection.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'July – September', title: 'Dry Season', desc: 'Prime visibility and comfortable days on open plains.' },
          { period: 'January – March', title: 'Warm & Clear', desc: 'Good game viewing with fewer vehicles than peak months.' },
          { period: 'April – June', title: 'Long Rains', desc: 'Lush backdrops; some tracks muddy but rewarding predator sightings.' }
        ].map((s,i)=> (
          <Card key={i} className="hover:shadow-luxury transition-all duration-300">
            <CardHeader>
              <Badge className="bg-kenya-gold text-black w-fit">{s.period}</Badge>
              <CardTitle className="text-lg">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground"><p>{s.desc}</p></CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>


  {/* Getting There & Map */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Getting There & Map</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="hover:shadow-luxury transition-all duration-300">
          <CardHeader><CardTitle className="text-xl">Travel Logistics</CardTitle></CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">By road:</span> ~220 km (4–5 hrs) from Nairobi via Nanyuki; all‑weather access roads within the conservancy.</p>
            <p><span className="font-semibold text-foreground">By air:</span> Daily flights to Nanyuki Airstrip; road transfer ~45–60 minutes to most camps.</p>
            <p><span className="font-semibold text-foreground">Activities:</span> Day/night drives, lion tracking, chimp sanctuary visits, guided walks.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Ol Pejeta Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Ol%20Pejeta%20Conservancy%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default OlPejeta;
