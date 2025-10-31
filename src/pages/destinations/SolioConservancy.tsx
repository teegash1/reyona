import { DestinationShell, Clock, Camera, Users, MapPin, Star, Bird } from './_DestinationTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SolioConservancy = () => (
  <DestinationShell
    title="Solio Conservancy"
    subtitle="Rhino Stronghold"
    hero={{
      src: 'https://images.pexels.com/photos/46251/rhino-horn-animal-africa-46251.jpeg',
      alt: 'Rhino at Solio Conservancy',
      objectPosition: 'center 55%'
    }}
    bookSubject="Solio Conservancy"
    facts={[
      { title: 'Signature', value: 'Rhino Encounters', icon: Star, description: 'One of Kenya’s notable rhino sanctuaries.' },
      { title: 'Landscape', value: 'Mt Kenya Views', icon: MapPin, description: 'Open grasslands framed by highland ranges.' },
      { title: 'Best Time', value: 'Jun – Sep', icon: Clock, description: 'Dry season offers excellent visibility.' },
      { title: 'Experience', value: 'Private Feel', icon: Users, description: 'Quiet drives with limited vehicles.' },
    ]}
    highlights={[
      { title: 'Conservation Success', description: 'Rhino populations carefully protected and monitored.', icon: Star },
      { title: 'Calm Drives', description: 'Tranquil routes ideal for photography and families.', icon: Camera },
      { title: 'Birdlife', description: 'Grassland and acacia species frequent the area.', icon: Bird },
      { title: 'Scenic Backdrops', description: 'Mount Kenya and Aberdares on clear days.', icon: MapPin },
    ]}
    activities={[
      { name: 'Game Drives', blurb: 'Track rhinos and plains game across the conservancy.' },
      { name: 'Photography', blurb: 'Golden hour light over expansive plains and fever trees.' },
      { name: 'Bush Breakfasts', blurb: 'Optional catered stops in scenic spots (advance request).' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'June – September', title: 'Dry Season', desc: 'Clear grasslands and reliable rhino sightings.' },
          { period: 'October – December', title: 'Short Rains', desc: 'Fresh greens and dramatic skies for photography.' },
          { period: 'January – March', title: 'Warm & Clear', desc: 'Comfortable days with excellent game viewing.' },
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

  {/* Where To Stay */}
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Where To Stay</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { tier: 'Signature', name: 'Solio Lodge', blurb: 'Boutique property with direct access to the conservancy and rhino plains.', img: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg' },
          { tier: 'Nearby', name: 'Nanyuki Area Lodges', blurb: 'Comfortable bases in the Laikipia region within easy drive to the gate.', img: 'https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg' },
          { tier: 'Private Houses', name: 'Highland Cottages', blurb: 'Intimate stays ideal for families seeking privacy.', img: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg' },
        ].map((l,i)=> (
          <Card key={i} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
            <div className="relative h-44 overflow-hidden">
              <img src={l.img} alt={l.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <CardHeader>
              <Badge className="bg-kenya-gold text-black w-fit">{l.tier}</Badge>
              <CardTitle className="text-lg">{l.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground"><p>{l.blurb}</p></CardContent>
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
            <p><span className="font-semibold text-foreground">By road:</span> ~190 km (3.5–4.5 hrs) from Nairobi toward Nyeri/ Naro Moru; conservancy tracks are well maintained.</p>
            <p><span className="font-semibold text-foreground">By air:</span> Flights to Nanyuki or private charters to nearby strips; transfer 30–60 minutes.</p>
            <p><span className="font-semibold text-foreground">Notes:</span> Visits are typically pre‑arranged; check access requirements with your lodge.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Solio Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Solio%20Game%20Reserve%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default SolioConservancy;
