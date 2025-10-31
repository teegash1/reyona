import { DestinationShell, Clock, Camera, Users, MapPin, Star, Bird } from './_DestinationTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LakeBogoria = () => (
  <DestinationShell
    title="Lake Bogoria"
    subtitle="Flamingos & Hot Springs"
    hero={{
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lesser_Flamingos_at_Lake_Bogoria.jpg/640px-Lesser_Flamingos_at_Lake_Bogoria.jpg',
      alt: 'Lake Bogoria flamingos and hot springs',
      objectPosition: 'center 60%'
    }}
    bookSubject="Lake Bogoria"
    facts={[
      { title: 'Signature', value: 'Hot Springs', icon: Star, description: 'Geysers and fumaroles around the lakeshore.' },
      { title: 'Birdlife', value: 'Flamingo Spectacle', icon: Bird, description: 'Seasonal pink bands along alkaline waters.' },
      { title: 'Best Time', value: 'Nov – Apr', icon: Clock, description: 'Pleasant weather and prime birding months.' },
      { title: 'Pace', value: 'Leisurely', icon: Users, description: 'Gentle walks and viewpoint photography.' },
    ]}
    highlights={[
      { title: 'Geothermal Features', description: 'Boiling springs, steaming vents and mineral terraces.', icon: MapPin },
      { title: 'Birding', description: 'Shoreline waders and raptors overhead.', icon: Bird },
      { title: 'Photography', description: 'Reflections, color gradients and misty mornings.', icon: Camera },
      { title: 'Guided Walks', description: 'Interpret geology and ecology with a local guide.', icon: Users },
    ]}
    activities={[
      { name: 'Guided Walking Tours', blurb: 'Explore geothermal sites safely with a guide.' },
      { name: 'Bird Watching', blurb: 'Scan flocks and shoreline habitats for specialties.' },
      { name: 'Scenic Drives', blurb: 'Short drives between viewpoints and springs.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'Nov – Apr', title: 'Prime Birding', desc: 'Peak flamingo presence (water‑level dependent) and pleasant weather.' },
          { period: 'May – Jun', title: 'Transitional', desc: 'Fewer crowds, variable water levels and moody skies.' },
          { period: 'Jul – Oct', title: 'Dry Season', desc: 'Clear days; combine with Baringo/ Nakuru for varied birding.' }
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
          { tier: 'Resort', name: 'Lake Bogoria Spa Resort', blurb: 'Comfortable base with access to geothermal features and birding sites.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Lesser_Flamingos_at_Lake_Bogoria.jpg/640px-Lesser_Flamingos_at_Lake_Bogoria.jpg' },
          { tier: 'Nearby', name: 'Baringo Lodges', blurb: 'Combine Bogoria with Lake Baringo birding a short drive north.', img: 'https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg' },
          { tier: 'Simple Stays', name: 'Local Guesthouses', blurb: 'Budget‑friendly options in the area for short stops.', img: 'https://images.pexels.com/photos/210542/pexels-photo-210542.jpeg' },
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
            <p><span className="font-semibold text-foreground">By road:</span> ~280 km (5–6 hrs) from Nairobi via Nakuru; final approach on Baringo road.</p>
            <p><span className="font-semibold text-foreground">Pairing:</span> Commonly combined with Lake Baringo and Lake Nakuru for a Rift Valley circuit.</p>
            <p><span className="font-semibold text-foreground">Safety:</span> Follow ranger guidance near hot springs and geysers.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Bogoria Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Lake%20Bogoria%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default LakeBogoria;
