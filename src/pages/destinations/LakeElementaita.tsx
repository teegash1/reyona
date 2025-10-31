import { DestinationShell, Clock, Camera, Users, MapPin, Star, Bird } from './_DestinationTemplate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LakeElementaita = () => (
  <DestinationShell
    title="Lake Elementaita"
    subtitle="Quiet Soda Lake"
    hero={{
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lake_Elementaita.jpg/640px-Lake_Elementaita.jpg',
      alt: 'Lake Elementaita shoreline',
      objectPosition: 'center 65%'
    }}
    bookSubject="Lake Elementaita"
    facts={[
      { title: 'Signature', value: 'Flamingos & Pelicans', icon: Bird, description: 'Seasonal flocks along serene shores.' },
      { title: 'Best Time', value: 'Jun – Sep', icon: Clock, description: 'Comfortable days and clear evenings.' },
      { title: 'Setting', value: 'Rift Valley', icon: MapPin, description: 'Rolling hills and conservancy lands.' },
      { title: 'Pace', value: 'Relaxed', icon: Star, description: 'Ideal for slow nature days and sunsets.' },
    ]}
    highlights={[
      { title: 'Soysambu Conservancy', description: 'Birding, game drives and shoreline views.', icon: MapPin },
      { title: 'Sunset Colors', description: 'Photogenic evenings across calm waters.', icon: Camera },
      { title: 'Birding Variety', description: 'From flamingos to fish eagles.', icon: Bird },
      { title: 'Scenic Walks', description: 'Gentle trails with lake panoramas.', icon: Users },
    ]}
    activities={[
      { name: 'Bird Watching', blurb: 'Guided sessions to spot resident and seasonal species.' },
      { name: 'Conservancy Drives', blurb: 'Short game drives in Soysambu surroundings.' },
      { name: 'Shoreline Walks', blurb: 'Leisurely strolls along viewpoints and tracks.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'June – September', title: 'Dry & Clear', desc: 'Comfortable temperatures and excellent visibility.' },
          { period: 'October – November', title: 'Short Rains', desc: 'Greener scenery; great light for sunsets.' },
          { period: 'December – March', title: 'Warm & Calm', desc: 'Pleasant days ideal for relaxed walks and birding.' }
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
          { tier: 'Lakeside', name: 'Lake Elementaita Serena Camp', blurb: 'Stylish tents on a ridge with sweeping lake views.', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Lake_Elementaita.jpg/640px-Lake_Elementaita.jpg' },
          { tier: 'Boutique', name: 'Sunbird Lodge', blurb: 'Intimate setting overlooking the water with cozy chalets.', img: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg' },
          { tier: 'Conservancy', name: 'Soysambu Camps', blurb: 'Tented options within the conservancy close to birding spots.', img: 'https://images.pexels.com/photos/259733/pexels-photo-259733.jpeg' },
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
            <p><span className="font-semibold text-foreground">By road:</span> ~120 km (2.5 hrs) northwest of Nairobi along the Rift Valley escarpment.</p>
            <p><span className="font-semibold text-foreground">Nearby:</span> Lake Nakuru (45–60 min) and Hell’s Gate/ Naivasha (60–90 min).</p>
            <p><span className="font-semibold text-foreground">Notes:</span> Best explored with short conservancy drives and shoreline walks.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Elementaita Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Lake%20Elementaita%2C%20Kenya&t=k&z=11&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default LakeElementaita;
