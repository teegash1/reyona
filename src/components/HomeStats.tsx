import { Star } from 'lucide-react';

const HomeStats = () => {
  return (
    <section className="py-16">
      <div className="w-full px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold mr-1" />
              <Star className="w-5 h-5 text-kenya-gold" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">5.0</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Customer Rating</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">200+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Safari Adventures</p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-kenya-gold">15+</h3>
            <p className="text-sm sm:text-base text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;




