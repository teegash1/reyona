import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone, Monitor, Tablet, Share2, Home } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSHint, setShowIOSHint] = useState(false);

  useEffect(() => {
    // Detect device type
    const detectDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    detectDevice();
    // Detect iOS Safari
    const ua = window.navigator.userAgent || '';
    const iOSLike = /iPad|iPhone|iPod/.test(ua);
    const isTouchMac = /Macintosh/.test(ua) && 'ontouchend' in document;
    setIsIOS(iOSLike || isTouchMac);
    window.addEventListener('resize', detectDevice);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || 
        (window.navigator as any).standalone === true) {
      setIsInstalled(true);
    }

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallPrompt(true);
      
      // Auto-hide after 5 seconds
      const timeoutId = setTimeout(() => {
        setShowInstallPrompt(false);
      }, 5000);
      
      // Cleanup timeout if component unmounts
      return () => clearTimeout(timeoutId);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallPrompt(false);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    // If iOS and not installed, show an educational hint after a short delay
    if ((iOSLike || isTouchMac) && !(window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone)) {
      const t = setTimeout(() => setShowIOSHint(true), 1500);
      return () => {
        window.removeEventListener('resize', detectDevice);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', handleAppInstalled);
        clearTimeout(t);
      };
    }
    return () => {
      window.removeEventListener('resize', detectDevice);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
        setShowInstallPrompt(false);
      } else {
        console.log('User dismissed the install prompt');
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
  };

  const renderIOSBanner = () => {
    if (!isIOS || isInstalled || !showIOSHint) return null;
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 bg-background/95 backdrop-blur-md rounded-lg shadow-lg border border-border text-foreground">
        <div className="flex items-center justify-between p-4">
          <div className="text-sm">
            <div className="font-semibold mb-1">Add Reyona Safaris to your Home Screen</div>
            <div className="text-muted-foreground">Follow these steps in Safari:</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted/50 border border-border animate-pulse ring-2 ring-kenya-gold/50">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">Share</span>
              </span>
              <span className="text-xs text-muted-foreground">then</span>
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted/50 border border-border">
                <Home className="w-4 h-4" />
                <span className="text-xs">Add to Home Screen</span>
              </span>
            </div>
          </div>
          <Button size="sm" variant="outline" onClick={() => setShowIOSHint(false)}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>
    );
  };

  if (isInstalled) return null;
  if (isIOS) return renderIOSBanner();
  if (!showInstallPrompt) return null;

  const getDeviceIcon = () => {
    switch (deviceType) {
      case 'mobile':
        return <Smartphone className="w-6 h-6" />;
      case 'tablet':
        return <Tablet className="w-6 h-6" />;
      default:
        return <Monitor className="w-6 h-6" />;
    }
  };

  const getInstallText = () => {
    switch (deviceType) {
      case 'mobile':
        return 'Install';
      case 'tablet':
        return 'Add to Home Screen';
      default:
        return 'Install Reyona Safaris App';
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 bg-gradient-primary rounded-lg shadow-lg border border-white/30 text-white">
      <div className={`flex items-center justify-between ${deviceType === 'mobile' ? 'p-3' : 'p-4'}`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            {getDeviceIcon()}
          </div>
          <div>
            <h3 className="font-semibold text-sm">Install Reyona Safaris</h3>
            {/* Only show description for non-mobile devices */}
            {deviceType !== 'mobile' && (
              <p className="text-xs text-white/80">
                Get quick access and offline features
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={handleInstallClick}
            size="sm"
            className={`bg-white text-kenya-purple hover:bg-white/90 text-xs py-1 ${
              deviceType === 'mobile' ? 'px-2' : 'px-3'
            }`}
          >
            <Download className="w-3 h-3 mr-1" />
            {getInstallText()}
          </Button>
          {/* Only show dismiss button for non-mobile devices */}
          {deviceType !== 'mobile' && (
            <Button
              onClick={handleDismiss}
              size="sm"
              variant="ghost"
              className="text-white hover:bg-white/10 p-1"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
