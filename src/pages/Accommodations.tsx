import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { galleryItems, type GalleryItem } from '@/data/galleryItems';
import { Play } from 'lucide-react';

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleOpenItem = (item: GalleryItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleToggleOpen = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setSelectedItem(null);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-24 md:pt-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-kenya-purple/35 via-kenya-gold/10 to-kenya-burgundy/30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),transparent_60%)]" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pb-20 pt-16 text-center md:pb-24 md:pt-20">
            <span className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Immersive Moments
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Safari Gallery
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
              Wander through an ever-growing collection of Reyona Safaris memories—sunlit savannas,
              golden-hour game drives, and cinematic lodge escapes captured by our team in the wild.
            </p>
          </div>
        </section>

        <section className="pb-20 pt-12 md:pb-28 md:pt-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold md:text-4xl">The Heartbeat of the Bush</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Swipe through cinematic stills and quick safari reels. Hover to feel the dock-style
                zoom, click to step inside each moment in a crisp lightbox experience.
              </p>
            </div>

            <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
              {galleryItems.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => handleOpenItem(item)}
                  className="group relative mb-4 block w-full break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-kenya-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div className="relative overflow-hidden rounded-3xl bg-muted/10 shadow-lg transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        className="block w-full transform-gpu rounded-3xl object-cover transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                      />
                    ) : (
                      <video
                        src={item.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                        className="block w-full transform-gpu rounded-3xl object-cover transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                      />
                    )}

                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/45 via-transparent to-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between text-white drop-shadow-lg">
                      <span className="text-sm font-medium md:text-base">{item.title}</span>
                      {item.type === 'video' && (
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                          <Play className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={open} onOpenChange={handleToggleOpen}>
        <DialogContent className="max-w-5xl w-[92vw] border-none bg-transparent p-0 shadow-none focus:outline-none">
          {selectedItem && (
            <div className="relative overflow-hidden rounded-3xl bg-black">
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="block w-full"
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="block w-full"
                />
              )}
            </div>
          )}
          <DialogHeader className="px-4 pt-4 text-center">
            <DialogTitle className="text-base font-semibold text-white md:text-lg">
              {selectedItem?.title}
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryPage;
