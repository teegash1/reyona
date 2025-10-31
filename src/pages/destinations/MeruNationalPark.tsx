import { DestinationShell, Clock, Camera, Users, MapPin, Star, TreePine, Bird } from './_DestinationTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MeruNationalPark = () => (
  <DestinationShell
    title="Meru National Park"
    subtitle="Wild & Undiscovered"
    hero={{
      src: 'https://images.pexels.com/photos/163279/waterfall-africa-kenya-163279.jpeg',
      alt: 'Meru rivers and palms',
      objectPosition: 'center 60%'
    }}
    bookSubject="Meru National Park"
    facts={[
      { title: 'Habitats', value: 'Rivers • Doum Palms', icon: TreePine, description: 'Riverine forests, acacia bush and volcanic hills.' },
      { title: 'Wildlife', value: 'Big Cats & Elephants', icon: Users, description: 'Rewarding sightings with fewer vehicles.' },
      { title: 'Best Time', value: 'Jun – Sep', icon: Clock, description: 'Dry season accessibility and visibility.' },
      { title: 'Legacy', value: 'Conservation Story', icon: Star, description: 'Linked to Born Free and ongoing restoration.' },
    ]}
    highlights={[
      { title: 'Rivers & Pools', description: 'Cool waterways and palm‑lined channels.', icon: MapPin },
      { title: 'Open Space', description: 'Vast, rarely crowded savannahs.', icon: Camera },
      { title: 'Varied Wildlife', description: 'Elephants, buffalo, lions and diverse antelope.', icon: Bird },
      { title: 'Scenic Hills', description: 'Photogenic geology and big skies.', icon: Star },
    ]}
    activities={[
      { name: 'Game Drives', blurb: 'Explore river loops and open plains in morning and late afternoon.' },
      { name: 'Guided Walks (select areas)', blurb: 'Discover smaller wonders with a ranger/guide where permitted.' },
      { name: 'Sundowners', blurb: 'Unwind at a viewpoint with sweeping vistas.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'June – September', title: 'Dry Season', desc: 'Best road conditions and widest wildlife visibility.' },
          { period: 'October – December', title: 'Short Rains', desc: 'Fresh green scenes; occasional showers and dramatic clouds.' },
          { period: 'January – March', title: 'Warm & Clear', desc: 'Good sightings with fewer visitors than peak season.' }
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
          { tier: 'Luxury', name: "Elsa's Kopje", blurb: 'Clifftop lodge with sweeping park views; a Meru classic.', img: 'https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg' },
          { tier: 'Mid‑Range', name: 'Ikweta Safari Camp', blurb: 'Comfortable base close to the Murera Gate.', img: 'https://images.pexels.com/photos/210542/pexels-photo-210542.jpeg' },
          { tier: 'Tented', name: 'Rhino River Camp', blurb: 'Chic tents along the Kindani River in a forested setting.', img: 'https://images.pexels.com/photos/259733/pexels-photo-259733.jpeg' },
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
            <p><span className="font-semibold text-foreground">By road:</span> ~300 km (5–6 hrs) from Nairobi via Embu/ Meru; multiple gates including Murera.</p>
            <p><span className="font-semibold text-foreground">By air:</span> Daily/ charter flights to Mulika or Kinna airstrips within/near the park.</p>
            <p><span className="font-semibold text-foreground">Notes:</span> 4x4 recommended in rains; combine with Samburu or Aberdares.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Meru Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Meru%20National%20Park%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default MeruNationalPark;
