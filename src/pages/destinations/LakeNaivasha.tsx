import { DestinationShell, Clock, Camera, Users, MapPin, Star, Bird } from './_DestinationTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LakeNaivasha = () => (
  <DestinationShell
    title="Lake Naivasha"
    subtitle="Highland Oasis"
    hero={{
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lake_Naivasha%2C_Kenya_%2832487531978%29.jpg/2560px-Lake_Naivasha%2C_Kenya_%2832487531978%29.jpg',
      alt: 'Lake Naivasha boat and shores',
      objectPosition: 'center 60%',
      overlay: 'bg-black/70'
    }}
    bookSubject="Lake Naivasha"
    facts={[
      { title: 'Signature', value: 'Boat Rides', icon: Star, description: 'Glide past hippos and waterbirds at golden hour.' },
      { title: 'Walks', value: 'Crescent Island', icon: Users, description: 'Open plains with giraffe, antelope and views.' },
      { title: 'Best Time', value: 'Nov – Mar', icon: Clock, description: 'Clear skies and pleasant temperatures.' },
      { title: 'Nearby', value: 'Longonot • Hell’s Gate', icon: MapPin, description: 'Hiking and cycling day trips close by.' },
    ]}
    highlights={[
      { title: 'Crescent Island Walk', description: 'Guided walk among giraffes with lake backdrops.', icon: Users },
      { title: 'Mount Longonot', description: 'Crater rim hike with sweeping Rift views.', icon: MapPin },
      { title: 'Hell’s Gate Cycling', description: 'Ride past cliffs, geysers and wildlife.', icon: Camera },
      { title: 'Birdlife', description: 'Cormorants, fish eagles, kingfishers and more.', icon: Bird },
    ]}
    activities={[
      { name: 'Boat Ride', blurb: 'Spot hippos and photograph lakeside life up close.' },
      { name: 'Walking Tour (Crescent Island)', blurb: 'Gentle wildlife walk with wide‑open views.' },
      { name: 'Hike & Cycle', blurb: 'Mount Longonot hikes; cycling in Hell’s Gate National Park.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'Nov – Mar', title: 'Clear & Warm', desc: 'Best for boating, hiking Longonot and cycling Hell’s Gate.' },
          { period: 'Jun – Sep', title: 'Dry Season', desc: 'Comfortable days with excellent visibility and lower humidity.' },
          { period: 'Apr – May', title: 'Long Rains', desc: 'Lush scenery; check trail conditions for hikes.' }
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
            <p><span className="font-semibold text-foreground">By road:</span> ~95 km (1.5–2.5 hrs) from Nairobi via Mai Mahiu or Naivasha routes.</p>
            <p><span className="font-semibold text-foreground">By rail:</span> SGR stop at Naivasha/ Suswa with road connection to lakeshore hotels.</p>
            <p><span className="font-semibold text-foreground">Activities:</span> Boat rides, Crescent Island walks, Longonot hikes, Hell’s Gate cycling.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Naivasha Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Lake%20Naivasha%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default LakeNaivasha;
