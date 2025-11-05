import { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';

type Country = { code: string; name: string; flag: string };

const ALL_COUNTRIES: Country[] = [
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+32', name: 'Belgium', flag: '🇧🇪' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+372', name: 'Estonia', flag: '🇪🇪' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+354', name: 'Iceland', flag: '🇮🇸' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+371', name: 'Latvia', flag: '🇱🇻' },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+507', name: 'Panama', flag: '🇵🇦' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: '+1', name: 'United States', flag: '🇺🇸' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+260', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+257', name: 'Burundi', flag: '🇧🇮' },
];

const STORAGE_KEY = 'recent_country_codes_v1';

function getSortedCountries(): Country[] {
  return [...ALL_COUNTRIES].sort((a, b) => a.name.localeCompare(b.name));
}

function useRecentCodes() {
  const [recent, setRecent] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setRecent(JSON.parse(raw));
    } catch {}
  }, []);
  const addRecent = (code: string) => {
    setRecent((prev) => {
      const next = [code, ...prev.filter((c) => c !== code)].slice(0, 6);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  return { recent, addRecent };
}

export default function CountryCodeSelect({ value, onChange, className }: { value: string; onChange: (code: string) => void; className?: string; }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { recent, addRecent } = useRecentCodes();
  const countries = useMemo(() => getSortedCountries(), []);
  const selected = countries.find((c) => c.code === value) || { code: value, name: '', flag: '🌍' };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) => c.name.toLowerCase().startsWith(q) || c.code.replace('+','').startsWith(q));
  }, [countries, query]);

  const recentCountries = recent
    .map((code) => countries.find((c) => c.code === code))
    .filter(Boolean) as Country[];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className={`flex items-center justify-between border rounded-md px-3 py-2 bg-background w-48 ${className ?? ''}`}>
          <span className="flex items-center gap-2">
            <span className="text-lg leading-none">{selected.flag}</span>
            <span>{selected.code || '+Code'}</span>
          </span>
          <ChevronDown className="w-4 h-4 opacity-60" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-72" align="start">
        <Command>
          <CommandInput placeholder="Search country or code" value={query} onValueChange={setQuery} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {recentCountries.length > 0 && !query && (
              <CommandGroup heading="Recent">
                {recentCountries.map((c) => (
                  <CommandItem
                    key={`recent-${c.code}`}
                    value={`${c.name} ${c.code}`}
                    className="hover:bg-kenya-burgundy/50 data-[selected=true]:bg-kenya-burgundy/50 data-[selected=true]:text-foreground"
                    onSelect={() => { onChange(c.code); addRecent(c.code); setOpen(false); }}
                  >
                    <span className="mr-2">{c.flag}</span> {c.name} ({c.code})
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {recentCountries.length > 0 && !query && <CommandSeparator />}
            <CommandGroup heading="All Countries">
              {filtered.map((c) => (
                <CommandItem
                  key={c.name}
                  value={`${c.name} ${c.code}`}
                  className="hover:bg-kenya-burgundy/50 data-[selected=true]:bg-kenya-burgundy/50 data-[selected=true]:text-foreground"
                  onSelect={() => { onChange(c.code); addRecent(c.code); setOpen(false); }}
                >
                  <span className="mr-2">{c.flag}</span> {c.name} ({c.code})
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
