import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { galleryItems, type GalleryItem } from '@/data/galleryItems';
import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const prioritizedItems = useMemo(() => {
    const highlightTitle = 'Safari Highlight 2025-10-28 At 12.50.47';
    const spotlightTitle = 'Safari Moment 2025-10-28 At 13.22.06';
    const middleVideoTitle = 'Safari Clip (4)';

    const highlightItem = galleryItems.find((item) => item.title === highlightTitle);
    const spotlightItem = galleryItems.find((item) => item.title === spotlightTitle);

    const remainingItems = galleryItems.filter(
      (item) => item.title !== highlightTitle && item.title !== spotlightTitle
    );

    const imageItems = remainingItems.filter((item) => item.type === 'image');
    const videoItems = remainingItems.filter((item) => item.type === 'video');

    const middleVideo =
      videoItems.find((item) => item.title === middleVideoTitle) ??
      videoItems.find((item) => item.src.includes('Untitled design (4).mp4'));

    const otherVideos = middleVideo
      ? videoItems.filter((item) => item !== middleVideo)
      : videoItems;

    const arrangedMedia = [...imageItems];
    if (middleVideo) {
      const insertIndex = Math.max(0, Math.floor(arrangedMedia.length / 2));
      arrangedMedia.splice(insertIndex, 0, middleVideo);
    }

    return [
      ...(highlightItem ? [highlightItem] : []),
      ...(spotlightItem ? [spotlightItem] : []),
      ...arrangedMedia,
      ...otherVideos,
    ];
  }, []);

  const handleOpenItem = (item: GalleryItem) => {
    setSelectedItem(item);
    setOpen(true);
    setHoveredIndex(null);
  };

  const handleToggleOpen = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setSelectedItem(null);
      setHoveredIndex(null);
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
              {prioritizedItems.map((item, index) => {
                const isHovered = hoveredIndex === index;
                const isNeighbor =
                  hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

                const hoverEffect = 0.035;
                const neighborEffect = hoverEffect * 0.15;

                const scale = isHovered
                  ? 1 + hoverEffect
                  : isNeighbor
                  ? 1 + neighborEffect
                  : 1;

                const rotate = isHovered ? 3 : isNeighbor ? 0.75 : 0;
                const transformStyle = {
                  transform: `perspective(1400px) scale(${scale}) rotateX(${rotate}deg)`,
                };
                const overlayOpacity = isHovered ? 0.45 : isNeighbor ? 0.15 : 0;
                const saturation = isHovered ? 1.04 : isNeighbor ? 1.01 : 1;

                return (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => handleOpenItem(item)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    className="relative mb-4 block w-full break-inside-avoid focus:outline-none focus-visible:ring-2 focus-visible:ring-kenya-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <div
                      className={cn(
                        'relative overflow-visible rounded-3xl bg-muted/10 shadow-lg transition-all duration-500',
                        isHovered
                          ? '-translate-y-1 shadow-[0_28px_60px_rgba(17,25,40,0.35)]'
                          : isNeighbor
                          ? '-translate-y-0.5 shadow-[0_18px_45px_rgba(17,25,40,0.25)]'
                          : ''
                      )}
                    >
                      <div
                        className="relative rounded-3xl transform-gpu transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                        style={transformStyle}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="block w-full rounded-3xl object-cover transition-[filter] duration-500"
                            style={{ filter: `saturate(${saturation})` }}
                          />
                        ) : (
                          <video
                            src={item.src}
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="block w-full rounded-3xl object-cover transition-[filter] duration-500"
                            style={{ filter: `saturate(${saturation})` }}
                          />
                        )}
                        <div
                          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/45 via-transparent to-black/20 transition-opacity duration-500"
                          style={{ opacity: overlayOpacity }}
                        />
                      </div>

                      {item.type === 'video' && (
                        <div className="pointer-events-none absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-opacity duration-500">
                          <Play className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Dialog open={open} onOpenChange={handleToggleOpen}>
        <DialogContent className="w-[94vw] max-w-5xl border-none bg-transparent p-0 shadow-none focus:outline-none sm:w-auto [&_[data-radix-dialog-close]]:bg-white [&_[data-radix-dialog-close]]:hover:bg-white [&_[data-radix-dialog-close]]:!text-black [&_[data-radix-dialog-close]]:hover:!text-black [&_[data-radix-dialog-close]]:focus-visible:ring-kenya-gold">
          {selectedItem && (
            <div className="flex w-full items-center justify-center">
              <div className="relative w-full max-h-[85vh] overflow-hidden rounded-3xl bg-black/90 shadow-2xl sm:w-auto">
                {selectedItem.type === 'image' ? (
                  <img
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    className="h-full max-h-[85vh] w-full object-contain"
                  />
                ) : (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="h-full max-h-[85vh] w-full object-contain"
                  />
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default GalleryPage;
