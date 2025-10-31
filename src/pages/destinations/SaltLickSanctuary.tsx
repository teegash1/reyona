import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DestinationShell, Clock, Camera, Users, MapPin, Star } from './_DestinationTemplate';
import { useNavigate } from 'react-router-dom';

const SaltLickSanctuary = () => (
  <DestinationShell
    title="Salt Lick Sanctuary"
    subtitle="Waterhole Watchtowers"
    hero={{
      src: 'https://images.pexels.com/photos/259470/pexels-photo-259470.jpeg',
      alt: 'Salt Lick Sanctuary waterhole and wildlife',
      objectPosition: 'center 70%'
    }}
    bookSubject="Salt Lick Sanctuary"
    facts={[
      { title: 'Signature', value: 'Elevated Walkways', icon: Star, description: 'Unique viewing platforms over active waterholes.' },
      { title: 'Wildlife', value: 'Elephants, Buffalo', icon: Users, description: 'Regular visits to waterholes in dry months.' },
      { title: 'Best Time', value: 'Jun – Sep', icon: Clock, description: 'Comfortable temps and steady wildlife at water.' },
      { title: 'Setting', value: 'Tsavo Ecosystem', icon: MapPin, description: 'Scenic low hills and open plains around Taita.' },
    ]}
    highlights={[
      { title: 'Waterhole Action', description: 'See herds arrive and interact from safe vantage points.', icon: Camera },
      { title: 'Quiet Atmosphere', description: 'Serene stays away from busy circuits.', icon: Star },
      { title: 'Night Viewing', description: 'After‑dark sightings around lit waterholes.', icon: Camera },
      { title: 'Easy Access', description: 'Convenient link with Tsavo East/West safaris.', icon: MapPin },
    ]}
    activities={[
      { name: 'Game Drives', blurb: 'Morning and afternoon drives through sanctuary and nearby conservancies.' },
      { name: 'Waterhole Watching', blurb: 'Relax on elevated decks as wildlife cycles to the water.' },
      { name: 'Photography Sessions', blurb: 'Low‑angle and elevated perspectives for behavior shots.' },
    ]}
  >
  {/* Seasons */}
  <section className="py-16 bg-card">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">When To Visit</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { period: 'June – September', title: 'Dry Season', desc: 'Best waterhole activity as herds concentrate near permanent water.' },
          { period: 'October – December', title: 'Short Rains', desc: 'Green backdrops; occasional showers and fewer vehicles.' },
          { period: 'January – March', title: 'Warm & Clear', desc: 'Good visibility and comfortable mornings; heat builds mid‑day.' }
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
          { tier: 'Signature', name: 'Salt Lick Safari Lodge', blurb: 'Iconic stilted lodge overlooking waterholes for round‑the‑clock viewing.', img: 'https://i.imgur.com/1oZ6JmU.jpeg' },
          { tier: 'Nearby', name: 'Taita Hills Safari Resort', blurb: 'Set amid landscaped gardens; easy access to the sanctuary.', img: 'https://i.imgur.com/7yC2Q5J.jpeg' },
          { tier: 'Conservancy', name: 'Lions Bluff Lodge', blurb: 'Clifftop lodge in Lumo Conservancy with sweeping plains views.', img: 'https://i.imgur.com/VOlZf4K.jpeg' }
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
            <p><span className="font-semibold text-foreground">By road:</span> ~330 km from Nairobi via Mombasa Road; final approach through Voi and sanctuary tracks.</p>
            <p><span className="font-semibold text-foreground">By air:</span> Charter flights can land at nearby airstrips serving Taita Hills.</p>
            <p><span className="font-semibold text-foreground">Pairing:</span> Often combined with Tsavo East/West for extended safaris.</p>
          </CardContent>
        </Card>
        <div className="relative rounded-xl overflow-hidden border border-border shadow-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe title="Salt Lick Map" className="absolute inset-0 w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Taita%20Hills%20Wildlife%20Sanctuary%2C%20Kenya&t=k&z=10&hl=en&output=embed" />
        </div>
      </div>
    </div>
  </section>
  </DestinationShell>
);

export default SaltLickSanctuary;
