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
      src: 'https://www.kenyasafari.com/images/salt-lick-elephants-590x390.jpeg',
      alt: 'Salt Lick Sanctuary waterhole and wildlife',
      objectPosition: 'center 70%',
      overlay: 'bg-black/70'
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

  </DestinationShell>
);

export default SaltLickSanctuary;
