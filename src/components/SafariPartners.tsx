import { useEffect, useRef } from 'react';

const SafariPartners = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Adjust speed as needed
    const scrollWidth = scrollContainer.scrollWidth / 2; // Since we duplicate the content

    const scroll = () => {
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    // Start scrolling
    const animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      scrollContainer.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = () => {
      scrollContainer.style.animationPlayState = 'running';
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const partners = [
    {
      name: "Tour Operators Society Of Kenya",
      logo: "https://media.licdn.com/dms/image/v2/C4D0BAQGfg4zaC40NQw/company-logo_200_200/company-logo_200_200/0/1653913250452?e=2147483647&v=beta&t=9CnEyPc-ZYoUNkVP_1iP_r_kdOpwLq63DMKDetbUynk",
      description: "Tour Operators Society"
    },
    {
      name: "Magical Kenya",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFFQaHC4-XmaUdMWi5mjk46Pkozjux2WVJw&s",
      description: "Destination Marketing"
    },
    {
      name: "Eco Tourism Kenya",
      logo: "https://ecotourismkenya.org/wp-content/uploads/2023/01/EK-Revised-Logo_340x263.gif",
      description: "Sustainable Tourism"
    },
    {
      name: "Tourism Regulatory Authority",
      logo: "https://pbs.twimg.com/profile_images/1275038009243697153/fXbsqS7H_400x400.jpg",
      description: "Tourism Regulation"
    },
    {
      name: "Kenya Wildlife Service",
      logo: "https://kenyaclimatedirectory.org/assets/images/events/3ac384670ae76ff7ce548da01956c96b.png",
      description: "Wildlife Conservation"
    },
    {
      name: "AMREF Flying Doctors",
      logo: "https://i0.wp.com/atcnews.org/wp-content/uploads/2023/10/Flying-Doctors-logo.jpg?fit=661%2C382&ssl=1",
      description: "Medical Emergency Services"
    },
    {
      name: "Kenya Tourism Board",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQGXDCv8yAjwVw/company-logo_200_200/company-logo_200_200/0/1714655689112/kenya_tourism_board_logo?e=2147483647&v=beta&t=an7K5vcByTzSfHGfjQzuK5Db-TGGery_gWmg7f4-0os",
      description: "Tourism Development"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)`,
          backgroundSize: '200px 200px, 300px 300px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Safari Partners
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Reyona Safaris partners with Africa's top safari operators and government regulators 
            ensuring a safe, world-class luxury African safari experience.
          </p>
        </div>

        {/* Scrolling Partners */}
        <div className="relative px-4">
          <div 
            ref={scrollContainerRef}
            className="flex space-x-4 md:space-x-6 overflow-hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* First set of partners */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-32 h-20 md:w-40 md:h-24"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-32 h-20 md:w-40 md:h-24"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kenya-gold rounded-full"></div>
              <span className="text-sm md:text-base">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kenya-gold rounded-full"></div>
              <span className="text-sm md:text-base">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kenya-gold rounded-full"></div>
              <span className="text-sm md:text-base">Safety Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-kenya-gold rounded-full"></div>
              <span className="text-sm md:text-base">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default SafariPartners;
