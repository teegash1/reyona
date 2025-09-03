import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Star, Clock, Users, MapPin, Heart, Plane, Car, Calendar, ExternalLink } from 'lucide-react';
import kenyaLion from '@/assets/kenya-lion.jpg';
import luxuryCamp from '@/assets/luxury-camp.jpg';
import heroSafari from '@/assets/hero-safari.jpg';

const Safaris = () => {
  const [filterCategory, setFilterCategory] = useState('all');

  const popularPackages = [
    {
      id: 1,
      title: "6 DAYS ULTIMATE AMBOSELI, LAKE NAKURU, MASAI MARA SAFARI PACKAGE",
      category: "popular",
      duration: "6 Days",
      groupSize: "2-8 People",
      location: "Amboseli, Lake Nakuru, Masai Mara",
      price: "$2,260",

      image: kenyaLion,
      description: "Experience the best of Kenya's wildlife in three iconic parks",
      features: ["Big Five", "Elephant Herds", "Flamingoes", "Migration Views"],
      badge: "Most Popular",
      options: [
        { name: "Option 1", price: "$3,300", lodges: ["Entim Main Camp", "The Cliff", "Tawi Lodge"] },
        { name: "Option 2", price: "$2,330", lodges: ["Sarova Mara Game Camp", "Sarova Lion Hill", "Oltukai Lodge"] },
        { name: "Option 3", price: "$2,260", lodges: ["Mara Sopa Lodge", "Lake Nakuru Sopa Lodge", "Sopa Amboseli Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - AMBOSELI (Approx 4hrs)",
          description: "Pick up from your hotel at 8am and proceed to Amboseli national park. Arrive with game enroute at your booked lodge/camp. Check in, have lunch, relax and around 3pm begin your game drives in the park in the search of the big four, giraffes, cheetahs, hyenas, impalas and other wildlife species. Later dinner and overnight at your booked lodges.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "AMBOSELI",
          description: "Enjoy your breakfast at the lodge, then proceed to the park famously known as the home of elephants in search of the lions, leopards, buffalos, cheetahs, antelopes, giraffes and other wild species found in the park. Enjoy the amazing views of the Mount Kilimanjaro as you do your game drives. Have lunch in the lodge and relax abit later in the evening continue on with your game drives.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "AMBOSELI - LAKE NAKURU (Approx 6hrs)",
          description: "Early morning breakfast at your lodge and proceed to Lake Nakuru national park. Arrive in time for late lunch at your booked lodge/camp, relax abit then begin your game drives in the park in search of the rhinos, lions, leopards, cheetahs, flamingoes and other bird species found in the park. Later dinner and overnight at your booked lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "LAKE NAKURU - MASAI MARA (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp and proceed to Masai Mara. Arrive in tie for lunch, relax abit then at 3pm or 4pm begin your game drives in the reserve in search of the big five, cheetahs, crocodiles, giraffes, wildbeests, impalas, ostriches, hyenas and other diverse wildlife found in the reserve. Later dinner and overnight at your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "MASAI MARA",
          description: "This day you will enjoy a full day game drive in the park with your picnic lunches in the park or alternatively have a morning and afternoon game drive with hot lunch in the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "MASAI MARA - NAIROBI (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and depart masai mara for Nairobi. Later drop off at your respective hotel / airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 2,
      title: "4 DAYS 3NIGHTS MASAI MARA SAFARI PACKAGE",
      category: "popular",
      duration: "4 Days",
      groupSize: "2-8 People",
      location: "Masai Mara",
      price: "$1,950",

      image: luxuryCamp,
      description: "Perfect introduction to Kenya's most famous wildlife reserve",
      features: ["Big Five", "Migration Views", "Cultural Experience", "Luxury Tents"],
      badge: "Best Value",
      options: [
        { name: "Option 1", price: "$2,270", lodges: ["Pride Inn Mara Camp", "Mara Kimana Camp"] },
        { name: "Option 2", price: "$2,045", lodges: ["Enkorok Mara Camp"] },
        { name: "Option 3", price: "$1,950", lodges: ["Oldarpoi Mara Camp"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5hrs)",
          description: "Pickup from your hotel of stay or airport at 7am and drive to Masai Mara. Quick stop over at the scenic great rift valley as you enjoy the beautiful views as you take pictures. Arrive in Masai Mara check in at your lodge/camp have lunch and relax. Game drives begin at 4pm in the reserve in search of the big 5, cheetahs, hippos, giraffes, impalas and other diverse wildlife found in the park.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - NAIROBI (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and immediately depart Masai Mara for Nairobi. Drop off at your respective hotel/airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 3,
      title: "8 DAYS KENYA & TANZANIA PRIVATE SAFARI PACKAGE",
      category: "popular",
      duration: "8 Days",
      groupSize: "2 People",
      location: "Masai Mara, Serengeti",
      price: "$4,400",
      image: heroSafari,
      description: "Cross-border adventure through Kenya and Tanzania's most iconic parks",
      features: ["Big Five", "Wildebeest Migration", "Cross-Border Safari", "Private Game Drives"],
      badge: "Cross-Border",
      options: [
        { name: "Option 1", price: "$6,202", lodges: ["Mara Ngenche Safari Camp", "KubuKubu Tented Camp"] },
        { name: "Option 2", price: "$5,785", lodges: ["Sarova Mara Game Camp", "Ilkeliani Camp", "Serena Serengeti Safari Lodge"] },
        { name: "Option 3", price: "$5,198", lodges: ["Zebra River Camp", "Mara Elaita Camp", "Mbuzi Mawe Safari Camp"] },
        { name: "Option 4", price: "$4,400", lodges: ["Osero Camp", "KatiKati Camp"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5hrs)",
          description: "Pick up from your Nairobi hotel or airport and immediately transfer to Masai Mara. Quick stop over at the unique great rift valley then proceed on to Masai Mara. Arrive at your camp/lodge for lunch. Game drives begin at 4pm in the main reserve in search of the big 5 and other wild animals found in the reserve like cheetahs, giraffes, antelopes and other wild species. Dinner and overnight at your lodge/camp.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you will have full day game drives in the reserve with your picnic lunches. This being migration season which is perfect timing to spot the famous wildebeests migration whereby millions of wildebeests, and thousands of zebras, antelopes migrate from Serengeti to Masai in search of fresh grazing. Get to enjoy game drives as you get to spot the big 5, cheetahs, hippos, giraffes, bird species and other diverse wild animals found in the reserve.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you will have full day game drives in the reserve with your picnic lunches. This being migration season which is perfect timing to spot the famous wildebeests migration whereby millions of wildebeests, and thousands of zebras, antelopes migrate from Serengeti to Masai in search of fresh grazing. Get to enjoy game drives as you get to spot the big 5, cheetahs, hippos, giraffes, bird species and other diverse wild animals found in the reserve.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - SERENGETI VIA ISEBANIA BORDER (Approx 3hrs-4hrs)",
          description: "Early morning breakfast at your lodge/camp, check out with your packed lunches and immediately depart Masai mara for Isebania border. Drop off at Isebania border by 10AM.",
          meals: "Breakfast & Packed Lunch"
        },
        {
          day: 5,
          title: "ISEBANIA - SERENGETI (Approx 3hrs)",
          description: "Pickup from Isebania border at 10AM, you will be met by your guide who will do a short briefing for you and then drive to Serengeti national park. Arrive with game drives, have lunch in the park and continue with game drives till late in the evening and later drive to your lodge/camp of stay for dinner and overnight.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "SERENGETI - FULL DAY",
          description: "Early morning breakfast at your lodge/camp and immediately leave with your picnic lunches for game drives in Serengeti national park. On this day, you will be having full day game drives in the reserve as well get to enjoy the scenic wildebeests migration along the river which is an unforgettable experience you can ever have. Later dinner and overnight.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 7,
          title: "SERENGETI - FULL DAY",
          description: "Early morning breakfast at your lodge/camp and immediately leave with your picnic lunches for game drives in Serengeti national park. On this day, you will be having full day game drives in the reserve as well get to enjoy the scenic wildebeests migration along the river which is an unforgettable experience you can ever have. Later dinner and overnight.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 8,
          title: "SERENGETI - ARUSHA",
          description: "Early morning breakfast at your lodge/camp, check out and depart Serengeti national park with a game enroute for Arusha. Drop off at your respective lodge/camp.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees/Concession Fees",
        "Accommodation on full board basis (1 Double Room)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser in both Kenya & Tanzania",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const honeymoonPackages = [
    {
      id: 4,
      title: "4 DAYS EXCLUSIVE MASAI MARA HONEYMOON SAFARI PACKAGE",
      category: "honeymoon",
      duration: "4 Days",
      groupSize: "2 People",
      location: "Masai Mara",
      price: "$3,800",

      image: luxuryCamp,
      description: "Romantic getaway in the heart of the African wilderness",
      features: ["Private Game Drives", "Bush Meals", "Sundowners", "Luxury Accommodation"],
      badge: "Honeymoon",
      options: [
        { name: "Option 1", price: "$7,360", lodges: ["JW Marriott Masai Mara Camp"] },
        { name: "Option 2", price: "$3,800", lodges: ["Entumoto Main Camp"] },
        { name: "Option 3", price: "$7,275", lodges: ["Sanctuary Olonana"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA VIA FLIGHT (Approx 45min)",
          description: "Pick up from your hotel/airport and immediately transfer to Wilson airport for your flight to the Masai Mara national reserve. Upon arrival you will be picked up by your guide who will brief you about your safari, then begin your game drives in the reserve till lunch time as you drive to the camp/lodge for check in and lunch. Kickstart your game drives in the reserve from around 4pm in search of the big five and other diverse wildlife found in the reserve.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast at your lodge/camp, on this day you can opt to do a full day game drives with your picnic lunches in the park or do a morning and afternoon game drives with hot lunches in the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast at your lodge/camp, on this day you can opt to do a full day game drives with your picnic lunches in the park or do a morning and afternoon game drives with hot lunches in the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - NAIROBI VIA FLIGHT (Approx 45min)",
          description: "Enjoy your delicious breakfast at the lodge/camp, check out and immediately transfer to the airstrip for your flight back to Nairobi. Upon arrival in at Wilson Airport, our driver will pick you up and transfer you to the hotel or airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "Accommodation and meals on FB basis, tea, water and coffee",
        "Selected alcoholic and non-alcoholic drinks",
        "Bush meals – Bush breakfast or picnic lunch, once during your stay",
        "Sundowner",
        "Entrance fees",
        "Domestic Flights",
        "Services of an English speaking guide/driver",
        "Airport/Airstrip transfers",
        "2 shared game drives per day",
        "Refreshments on game drives",
        "Guided walking safaris",
        "Wifi throughout the lodge",
        "Use of the JW photo studio, gym, pool and teens club",
        "Emergency Medical Evacuation Services",
        "Laundry services – 5 items per person per day"
      ],
      exclusions: [
        "Champagnes, premium wines and spirits",
        "Masai Mara Spa treatments",
        "Items of personal nature",
        "Gratuities",
        "Tips"
      ]
    },
    {
      id: 5,
      title: "7 DAYS 6NIGHTS MASAI MARA, LAKE NAKURU AND AMBOSELI HONEYMOON PACKAGE",
      category: "honeymoon",
      duration: "7 Days",
      groupSize: "2 People",
      location: "Masai Mara, Lake Nakuru, Amboseli",
      price: "$3,050",
      image: heroSafari,
      description: "Romantic multi-park adventure through Kenya's most iconic destinations",
      features: ["Private Game Drives", "Big Five", "Flamingoes", "Elephant Herds", "Luxury Accommodation"],
      badge: "Honeymoon",
      options: [
        { name: "Option 1", price: "$4,100", lodges: ["Entim Main Camp", "The Cliff", "Elephant Gorge Amboseli"] },
        { name: "Option 2", price: "$3,350", lodges: ["Sarova Mara Game Camp", "Ilkeliani Camp", "Sarova LionHill Game Lodge", "Oltukai Lodge"] },
        { name: "Option 3", price: "$3,050", lodges: ["Mara Sopa Lodge", "Pride Inn Mara Camp", "Lake Nakuru Sopa Lodge", "Amboseli Sopa Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5hrs - 6hrs)",
          description: "Pickup from your respective hotel/ airport at 7am and proceed to Masai Mara. Arrive in time for lunch at your lodge/camp, check in have lunch and later start off your game drives in the famous Masai land in search of the big 5 and other wildlife found here. Later dinner and overnight at your booked lodge/camp.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you can opt to do a full day game drive in the reserve with your picnic lunch boxes or alternatively you can decide to do morning and afternoon game drives with hot lunch in the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you can opt to do a full day game drive in the reserve with your picnic lunch boxes or alternatively you can decide to do morning and afternoon game drives with hot lunch in the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - LAKE NAKURU (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and drive to Lake Nakuru national park. Arrive in time for lunch, check in, have lunch and relax for some time. Start off your game drives around 4pm in the park in search of the rhinos, lions, leopards, flamingoes, giraffes and other diverse wildlife found in the park. Later drive back to the lodge/camp overnight.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "LAKE NAKURU - AMBOSELI (Approx 6hrs)",
          description: "Enjoy an early morning breakfast at the lodge/camp, check out and immediately depart Lake Nakuru for Amboseli national park. Arrive in time for late lunch, relax abit then kickstart your game drives in the park in search of lions, elephants, leopards, cheetahs and other diverse wildlife found in the park. Later dinner and overnight at your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "AMBOSELI - FULL DAY",
          description: "On this day you can opt for a full day game drive with packed lunches in the park or alternatively do a morning and afternoon game drive with hot lunch at the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 7,
          title: "AMBOSELI - NAIROBI (Approx 4hrs)",
          description: "Early morning breakfast, check out and depart Amboseli for Nairobi. Drop off at your respective hotel or airport.",
          meals: "Breakfast only"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (1 Double Room)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of English professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 6,
      title: "7 DAYS 6NIGHTS MASAI MARA & DIANI HONEYMOON PACKAGE",
      category: "honeymoon",
      duration: "7 Days",
      groupSize: "2 People",
      location: "Masai Mara, Diani Beach",
      price: "$3,315",
      image: luxuryCamp,
      description: "Perfect blend of wildlife adventure and beach relaxation for honeymooners",
      features: ["Private Game Drives", "Beach Relaxation", "Domestic Flights", "Luxury Accommodation", "Big Five"],
      badge: "Honeymoon",
      options: [
        { name: "Option 1", price: "$3,710", lodges: ["Entim Main Camp", "Swahili Beach Resort"] },
        { name: "Option 2", price: "$3,315", lodges: ["Ilkeliani Camp", "Sarova Mara Game Camp", "Baobab Beach Resort"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA VIA FLIGHT (Approx 45min)",
          description: "Pickup from your hotel and transfer to Wilson airport for your flight to the mara. Upon arrival you will be met by your guide who will take you through game drives till lunch time when you head to the hotel for check in. After a bit of relaxation, you will start off game drives in the park in search of the big five, giraffes, antelopes, hippos and other wildlife found in the park.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy full day game drives in the park with your picnic lunch boxes alternatively do morning game drives then head back to the hotel for hot lunch and later in the afternoon continue on with your game drives.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy full day game drives in the park with your picnic lunch boxes alternatively do morning game drives then head back to the hotel for hot lunch and later in the afternoon continue on with your game drives.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - DIANI VIA FLIGHT",
          description: "Early morning game drives in the camp/lodge, check out and immediately transfer to the airstrip for your flight to Diani. Upon arrival in Diani, you will be transferred to your hotel of stay, check in and relax for the day.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "DIANI - FULL DAY",
          description: "Enjoy the beach and hotel facilities.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "DIANI - FULL DAY",
          description: "Enjoy the beach and hotel facilities.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 7,
          title: "DIANI - MOMBASA AIRPORT",
          description: "Early morning breakfast at your hotel, check out and transfer from Diani to Mombasa airport.",
          meals: "Breakfast only"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Domestic flight",
        "Airport transfers",
        "Accommodation on full board basis (1 Double Room)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of English professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const groupPackages = [
    {
      id: 7,
      title: "5 DAYS MASAI MARA & LAKE NAIVASHA PRIVATE SAFARI PACKAGE",
      category: "group",
      duration: "5 Days",
      groupSize: "6 People",
      location: "Masai Mara, Lake Naivasha",
      price: "$1,500",

      image: kenyaLion,
      description: "Perfect group adventure for 6 people",
      features: ["Group Discount", "Private Vehicle", "Boat Ride", "Walking Safari"],
      badge: "Group",
      options: [
        { name: "Option 1", price: "$2,036", lodges: ["Ilkeliani Camp", "Enashipai Resort"] },
        { name: "Option 2", price: "$1,670", lodges: ["Sarova Mara Game Camp", "Enashipai Resort"] },
        { name: "Option 3", price: "$1,630", lodges: ["Zebra River Camp", "Great Rift Valley Lodge"] },
        { name: "Option 4", price: "$1,500", lodges: ["Mara Sopa Lodge", "Great Rift Valley Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5-6hrs)",
          description: "Pickup from your hotel/airport at 7AM and proceed to Masai Masai Mara National reserve. First stop over at the scenic Great Rift Valley where you get to enjoy amazing views as you take cute photos. Later continue your journey to the masai land arriving in time for lunch. Relax a bit then begin game drives at 4pm in the reserve. Afterward dinner and overnight at your booked lodge",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you have an option of doing full day game drives in the park with your packed lunches or alternatively do morning and afternoon game drives with hot lunch at the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you have an option of doing full day game drives in the park with your packed lunches or alternatively do morning and afternoon game drives with hot lunch at the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - LAKE NAIVASHA (Approx 5hrs)",
          description: "Early morning breakfast at your lodge, check out and depart Masai Mara for Lake Naivasha. Arrive in time for lunch and relax for the day as you enjoy hotel facilities.",
          meals: "Breakfast, lunch & Dinner"
        },
        {
          day: 5,
          title: "LAKE NAIVASHA - NAIROBI (Approx 2hrs)",
          description: "Enjoy a scrumptious breakfast at your lodge, check out then proceed to the lake for boat ride and walking tour in crescent island. Afterwards drive to Nairobi for drop off either at your booked hotel/airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (3 Double Rooms)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 8,
      title: "7 DAYS 6NIGHTS MASAI MARA, LAKE NAKURU AND AMBOSELI GROUP SAFARI PACKAGE",
      category: "group",
      duration: "7 Days",
      groupSize: "7 People",
      location: "Masai Mara, Lake Nakuru, Amboseli",
      price: "$1,820",
      image: heroSafari,
      description: "Comprehensive multi-park group adventure for 7 people",
      features: ["Group Discount", "Private Vehicle", "Big Five", "Flamingoes", "Elephant Herds", "Professional Guide"],
      badge: "Group",
      options: [
        { name: "Option 1", price: "$3,380", lodges: ["Ilkeliani Camp", "The Cliff", "Elephant Gorge Amboseli"] },
        { name: "Option 2", price: "$2,200", lodges: ["Sarova Mara Game Camp", "Sarova LionHill Game Lodge", "Oltukai Lodge"] },
        { name: "Option 3", price: "$2,140", lodges: ["Pride Inn Mara Camp", "Flamingoe Hill Camp", "Kibo Safari Camp"] },
        { name: "Option 4", price: "$1,820", lodges: ["Mara Sopa Lodge", "Lake Nakuru Sopa Lodge", "Amboseli Sopa Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5hrs - 6hrs)",
          description: "Pickup from your respective hotel/ airport at 7am and proceed to Masai Mara. Arrive in time for lunch at your lodge/camp, check in have lunch and later start off your game drives in the famous Masai land in search of the big 5 and other wildlife found here. Later dinner and overnight at your booked lodge/camp.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you can opt to do a full day game drive in the reserve with your picnic lunch boxes or alternatively you can decide to do morning and afternoon game drives with hot lunch in the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "On this day, you can opt to do a full day game drive in the reserve with your picnic lunch boxes or alternatively you can decide to do morning and afternoon game drives with hot lunch in the lodge.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - LAKE NAKURU (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and drive to Lake Nakuru national park. Arrive in time for lunch, check in, have lunch and relax for some time. Start off your game drives around 4pm in the park in search of the rhinos, lions, leopards, flamingoes, giraffes and other diverse wildlife found in the park. Later drive back to the lodge/camp overnight.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "LAKE NAKURU - AMBOSELI (Approx 6hrs)",
          description: "Enjoy an early morning breakfast at the lodge/camp, check out and immediately depart Lake Nakuru for Amboseli national park. Arrive in time for late lunch, relax abit then kickstart your game drives in the park in search of lions, elephants, leopards, cheetahs and other diverse wildlife found in the park. Later dinner and overnight at your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "AMBOSELI - FULL DAY",
          description: "On this day you can opt for a full day game drive with packed lunches in the park or alternatively do a morning and afternoon game drive with hot lunch at the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 7,
          title: "AMBOSELI - NAIROBI (Approx 4hrs)",
          description: "Early morning breakfast, check out and depart Amboseli for Nairobi. Drop off at your respective hotel or airport.",
          meals: "Breakfast only"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (3 Double Rooms, 1 Single)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of English professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 9,
      title: "4 DAYS 3NIGHTS MASAI MARA GROUP SAFARI PACKAGE",
      category: "group",
      duration: "4 Days",
      groupSize: "6 People",
      location: "Masai Mara",
      price: "$1,330",
      image: kenyaLion,
      description: "Perfect group adventure for 6 people in the iconic Masai Mara",
      features: ["Group Discount", "Private Vehicle", "Big Five", "Migration Views", "Professional Guide"],
      badge: "Group",
      options: [
        { name: "Option 1", price: "$1,987", lodges: ["Entim Main Camp"] },
        { name: "Option 2", price: "$1,755", lodges: ["Ilkeliani Camp", "Sarova Mara Game Camp"] },
        { name: "Option 3", price: "$1,547", lodges: ["Pride Inn Mara Camp"] },
        { name: "Option 4", price: "$1,330", lodges: ["Mara Kimana", "Oldarpoi Mara Camp"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA (Approx 5hrs)",
          description: "Pickup from your hotel of stay or airport at 7am and drive to Masai Mara. Quick stop over at the scenic great rift valley as you enjoy the beautiful views as you take pictures. Arrive in Masai Mara check in at your lodge/camp have lunch and relax. Game drives begin at 4pm in the reserve in search of the big 5, cheetahs, hippos, giraffes, impalas and other diverse wildlife found in the park.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. Alternatively you can have morning and afternoon game drives in the reserve with hot lunch in the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - NAIROBI (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and immediately depart Masai Mara for Nairobi. Drop off at your respective hotel/airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (3 Double Rooms)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of English professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const migrationPackages = [
    {
      id: 10,
      title: "4 DAYS MASAI MARA MIGRATION PRIVATE SAFARI PACKAGE",
      category: "migration",
      duration: "4 Days",
      groupSize: "2-8 People",
      location: "Masai Mara",
      price: "$2,120",

      image: luxuryCamp,
      description: "Witness the spectacular wildebeest migration",
      features: ["Migration Views", "Mara River", "Big Five", "Professional Guide"],
      badge: "Migration",
      options: [
        { name: "Option 1", price: "$3,095", lodges: ["Sarova Mara Game Camp", "Ilkeliani Camp"] },
        { name: "Option 2", price: "$2,610", lodges: ["Zebra River Camp", "Mara Elaita"] },
        { name: "Option 3", price: "$2,120", lodges: ["Osero Camp", "Mara Kimana Camp"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA",
          description: "Pickup from your hotel of stay or airport at 7am and drive to Masai Mara. Quick stop over at the scenic great rift valley as you enjoy the beautiful views as you take pictures. Arrive in Masai Mara check in at your lodge/camp have lunch and relax. Game drives begin at 4pm in the reserve in search of the big 5, cheetahs, hippos, giraffes, impalas and other diverse wildlife found in the park.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - NAIROBI",
          description: "Early morning breakfast at your lodge/camp, check out and immediately depart Masai Mara for Nairobi. Drop off at your respective hotel/airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 11,
      title: "5 DAYS LAKE NAKURU, MASAI MARA SAFARI PACKAGE",
      category: "migration",
      duration: "5 Days",
      groupSize: "2-8 People",
      location: "Lake Nakuru, Masai Mara",
      price: "$2,540",
      image: heroSafari,
      description: "Multi-park adventure combining Lake Nakuru's wildlife with Masai Mara's migration",
      features: ["Big Five", "Flamingoes", "Migration Views", "Private Game Drives", "Professional Guide"],
      badge: "Migration",
      options: [
        { name: "Option 1", price: "$3,830", lodges: ["Ilkeliani Camp", "The Cliff"] },
        { name: "Option 2", price: "$3,050", lodges: ["Mara Elaita", "Sarova Lion Hill"] },
        { name: "Option 3", price: "$2,610", lodges: ["Osero Camp", "Flamingo Hill Camp"] },
        { name: "Option 4", price: "$2,540", lodges: ["Oldarpoi Mara Camp", "Sopa Nakuru"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - LAKE NAKURU (Approx 3hrs)",
          description: "Pickup from your hotel/airport at 7am and transfer to Lake Nakuru. Arrive with enroute game drives to your booked lodge/camp. Check in, have lunch and relax for a while. Begin your game drives at 4pm in search of the lions, leopards, cheetahs, rhinos, buffalos, flamingoes and other diverse wild animals found in the park.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "LAKE NAKURU - MASAI MARA (Approx 5hrs)",
          description: "Early morning breakfast at the lodge, check out and immediately depart Lake Nakuru for Masai Mara with an enroute game drive. Arrive in time for lunch, check in then later game drives in the reserve in search of the big 5, impalas, giraffes, hippos, wildebeests, warthogs, different bird species and other wild species found in the reserve.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "MASAI MARA - NAIROBI (Approx 5hrs)",
          description: "Early morning breakfast at your lodge/camp, check out and depart Masai Mara for Nairobi. Drop off at your respective hotel of stay or airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (Double Room)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 12,
      title: "6 DAYS MASAI MARA MIGRATION SAFARI PACKAGE",
      category: "migration",
      duration: "6 Days",
      groupSize: "2-8 People",
      location: "Masai Mara, Lake Nakuru",
      price: "$3,190",
      image: heroSafari,
      description: "Extended migration safari with Masai Mara focus and Lake Nakuru finale",
      features: ["Wildebeest Migration", "Big Five", "Mara River Views", "Private Game Drives", "Professional Guide"],
      badge: "Migration",
      options: [
        { name: "Option 1", price: "$4,500", lodges: ["Entim Main Camp", "The Cliff"] },
        { name: "Option 2", price: "$3,955", lodges: ["Mara Maisha Camp", "Nakuru Sopa Lodge"] },
        { name: "Option 3", price: "$3,190", lodges: ["Mara Sopa Lodge", "Nakuru Sopa Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA",
          description: "Pickup from your hotel of stay or airport at 7am and drive to Masai Mara. Quick stop over at the scenic great rift valley as you enjoy the beautiful views as you take pictures. Arrive in Masai Mara check in at your lodge/camp have lunch and relax. Game drives begin at 4pm in the reserve in search of the big 5, cheetahs, hippos, giraffes, impalas and other diverse wildlife found in the park.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - FULL DAY",
          description: "Early morning breakfast and leave the lodge/camp with packed lunches. Enjoy full game drives in the reserve. During game drives you will have the chance to pass by the mara river where migration of the wildebeests takes place, every year millions of wildebeests and thousands of zebras and antelopes migrate from serengeti to Masai Mara in search of fresh grazing.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "MASAI MARA - LAKE NAKURU",
          description: "Early morning breakfast at your lodge/camp, check out and immediately depart Masai Mara for Lake Nakuru national park, check in and have lunch at the lodge/camp. Game drives will begin at 3pm till 6pm.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "LAKE NAKURU - NAIROBI",
          description: "Enjoy your breakfast at the lodge/camp, check out and have short morning game drives in the park as you depart Lake Nakuru for Nairobi. Upon arrival in Nairobi, you will be dropped off at your respective hotel or airport.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Park fees",
        "Accommodation on full board basis (Double Room)",
        "Bottled drinking water in the vehicle",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const flyInPackages = [
    {
      id: 13,
      title: "4 DAYS FLY IN SAFARI PRIVATE PACKAGE",
      category: "flyin",
      duration: "4 Days",
      groupSize: "2-8 People",
      location: "Masai Mara",
      price: "$1,850",

      image: kenyaLion,
      description: "Luxury air safari to Masai Mara",
      features: ["Domestic Flights", "Private Vehicle", "Luxury Lodges", "Quick Access"],
      badge: "Fly-In",
      options: [
        { name: "Option 1", price: "$2,885", lodges: ["Entim Mara Main Camp"] },
        { name: "Option 2", price: "$2,100", lodges: ["Sarova Mara Game Camp"] },
        { name: "Option 3", price: "$2,645", lodges: ["Zebra River Camp"] },
        { name: "Option 4", price: "$1,850", lodges: ["Osero Lodge"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA VIA FLIGHT (Approx 45min)",
          description: "Pick up from your hotel in the morning and transfer to Wilson airport for your flight to Masai Mara. Your flight will take 45minutes to arrive in the Mara. You will be met by your guide who will take you through game drives before you check in at your hotel. Arrive in time for lunch, relax abit later begin your game drives at 4pm in search of the big 5 and other wild animals found in the pack.",
          meals: "Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - NAIROBI VIA FLIGHT (Approx 45min)",
          description: "Early morning breakfast at your lodge/camp, check out and transfer to the airstrip for your flight to Nairobi. Upon arrival in Nairobi, you will be met by a driver who will transfer you to your respective hotel.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Domestic Flights as per itinerary",
        "Park fees",
        "Accommodation on full board basis (1 Double Room)",
        "Bottled drinking water in the vehicle during game drives",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)",
        "Airport transfers"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 14,
      title: "6 DAYS MASAI MARA, AMBOSELI SAFARI FLY-IN PACKAGE",
      category: "flyin",
      duration: "6 Days",
      groupSize: "2-8 People",
      location: "Masai Mara, Amboseli",
      price: "$3,200",
      image: heroSafari,
      description: "Luxury fly-in safari combining Masai Mara migration with Amboseli elephants",
      features: ["Domestic Flights", "Wildebeest Migration", "Elephant Views", "Private Game Drives", "Professional Guide"],
      badge: "Fly-In",
      options: [
        { name: "Option 1", price: "$4,600", lodges: ["Entim Main Camp", "Elephant Gorge Amboseli"] },
        { name: "Option 2", price: "$3,806", lodges: ["Ilkeliani Camp", "Tawi Lodge"] },
        { name: "Option 3", price: "$3,555", lodges: ["Mara Maisha Camp", "Oltukai Lodge"] },
        { name: "Option 4", price: "$3,200", lodges: ["Mara Sopa", "Amboseli Sopa"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "NAIROBI - MASAI MARA VIA FLIGHT",
          description: "Pick up from your hotel and transfer to Wilson airport for your flight to Mara. Upon arrival in the mara you will be met by your guide who will brief as you begin your game drives in the reserve. Check in at the lodge in time for lunch, relax then later at 4pm begin your game drives in search of the diverse wildlife found in the park.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 2,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 3,
          title: "MASAI MARA - FULL DAY",
          description: "Enjoy delicious breakfast in the lodge/camp and leave with packed lunches. You will get to have full day game drives in the park as you get to experience the migration along the mara river then later finalise the day with game drives as you head to your lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 4,
          title: "MASAI MARA - AMBOSELI (Approx 1hr)",
          description: "Early morning breakfast at your lodge/camp, check out and transfer to the airstrip for your next flight to amboseli. Upon arrival in amboseli you will be picked up by your guide and transferred to the camp for lunch. After lunch, start off your game drives in Amboseli in search of elephants, lions, cheetahs, giraffes and other diverse animals.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 5,
          title: "AMBOSELI",
          description: "Kickstart the day with either full day game drives in the park with your picnic lunch boxes or alternatively morning and afternoon game drives with hot lunch at the lodge/camp.",
          meals: "Breakfast, Lunch & Dinner"
        },
        {
          day: 6,
          title: "AMBOSELI - NAIROBI",
          description: "Early morning breakfast from the lodge/camp and transfer to the airstrip for your flight back to Nairobi. Upon arrival you will be transfered to the airport or respective hotel.",
          meals: "Breakfast"
        }
      ],
      inclusions: [
        "All government taxes/VAT",
        "Domestic Flights as per itinerary",
        "Park fees",
        "Accommodation on full board basis (1 Double Room)",
        "Bottled drinking water in the vehicle during game drives",
        "All game drives are PRIVATE in a 4/4 Land Cruiser",
        "Services of professional tour driver/guide (s)",
        "Airport Transfers"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const nairobiExcursions = [
    {
      id: 15,
      title: "FULL DAY NAIROBI PRIVATE EXCURSIONS",
      category: "nairobi",
      duration: "1 Day",
      groupSize: "2-8 People",
      location: "Nairobi",
      price: "$325",

      image: luxuryCamp,
      description: "Explore Nairobi in Elegance and Comfort",
      features: ["Nairobi National Park", "Elephant Orphanage", "Giraffe Centre", "Carnivore Restaurant"],
      badge: "Day Tour",
      options: [
        { name: "Standard Package", price: "$325", lodges: ["Nairobi National Park", "David Sheldrick Elephant Orphanage", "Giraffe Centre", "Carnivore Restaurant"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "FULL DAY NAIROBI TOUR",
          activities: [
            { time: "6:00 AM", activity: "Personal Pickup: Private pickup from our friendly guide at your hotel of stay or airport and immediately drive to the well-known Nairobi National Park for game drives. Kickstart your adventure with exclusive game drives in the park in search for the wild animals like Lions, Cheetah, Leopards, giraffes, rhinos, impalas, crocodiles and other diverse wild animals found here." },
            { time: "10:30 AM", activity: "ELEPHANT ORPHANAGE: Finalise your game drives as you head to the David Sheldrick as you get to experience this unique activity of the orphaned elephants and how they are fed and get to take amazing photos. This activity takes approximately one hour." },
            { time: "1:00 PM", activity: "Lunch at The Carnivore Restaurant: Delight your taste buds with an unforgettable lunch at The Carnivore, famous for its authentic African barbecue experience in a rustic setting. Vegetarian options are also available." },
            { time: "2:30 PM", activity: "Giraffe Centre Visit: Continue your journey with a visit to the Giraffe Centre. Feed and interact with the endangered Rothschild giraffes in a picturesque setting, perfect for photos and unforgettable memories." },
            { time: "4:00 PM", activity: "Karen Blixen Museum Tour: Travel back in time as you explore the former home of famous author Karen Blixen, experiencing the rich history and beautiful gardens described in 'Out of Africa.'" },
            { time: "5:30 PM", activity: "Kazuri Beads Women's Workshop: Discover handcrafted, colorful ceramic beads and pottery made by talented artisans. A wonderful opportunity to support local crafts." },
            { time: "6:30 PM", activity: "Return Drop-off: Your guide will safely return you to your location of choice, rounding off a day full of exploration, culture, and relaxation." }
          ],
          meals: "Lunch"
        }
      ],
      inclusions: [
        "Game drives in a 4X4 safari Landcruiser with a pop up roof hatch",
        "Entrance fees",
        "2litres of water and Lunch",
        "Services of an English speaking professional tour guide"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    },
    {
      id: 16,
      title: "COFFEE FARM/TEA FARM VISIT",
      category: "nairobi",
      duration: "1 Day",
      groupSize: "2-8 People",
      location: "Nairobi",
      price: "$240",

      image: kenyaLion,
      description: "Kenya's Flavorful Journey: Coffee and Tea Farm Experience",
      features: ["Farm Tour", "Hands-on Experience", "Tasting Session", "Local Lunch"],
      badge: "Cultural",
      options: [
        { name: "Coffee Farm Tour", price: "$240", lodges: ["Coffee Farm Experience", "Tea Farm Experience", "Local Farm Lunch"] }
      ],
      itinerary: [
        {
          day: 1,
          title: "COFFEE/TEA FARM TOUR",
          activities: [
            { time: "7:30 AM", activity: "Start your day with a private pick-up from your accommodation in Nairobi. Relax and enjoy the scenic drive to the heart of Kenya's lush coffee or tea plantations." },
            { time: "9:00 AM", activity: "Welcome to the Plantation: Arrive at the premier coffee or tea farm, where a warm welcome awaits you. Enjoy a refreshing beverage crafted from the farm's finest harvest before embarking on your tour. Get to learn more about the history of the farm and everything about coffee/tea farming." },
            { time: "9:30 AM", activity: "Immersive Farm Tour: Embark on a guided walk-through verdant field. Learn about the cultivation and harvesting process, from bean to cup or leaf to tea, with engaging talks from passionate local farmers." },
            { time: "11:00 AM", activity: "Hands-On Experience: Get your hands dirty with a unique opportunity to pick your own coffee berries or tea leaves, experiencing firsthand the effort and skill behind every perfect cup." },
            { time: "12:30 PM", activity: "Farm-to-Table Lunch: Indulge in a farm-to-table lunch featuring local specialties and seasonal produce. Pair your meal with freshly brewed tea or coffee, enhancing flavours with every sip." },
            { time: "2:00 PM", activity: "Coffee or Tea Tasting Workshop: Delight in a tasting session with seasoned experts. Discover the art of cupping, assessing distinct flavours notes, and aromas. Perfect for enthusiasts and newcomers alike!" },
            { time: "3:00 PM", activity: "Behind-the-Scenes Processing Tour: Witness the journey from raw harvest to the finished product. See the intricate roasting or withering and drying processes that culminate in the exquisite beverages loved worldwide." },
            { time: "4:30 PM", activity: "Shopping and Souvenirs: Before you leave, visit the gift shop to purchase your favourite blends directly from the source. Take home a piece of Kenya with exclusive, farm-fresh packs." },
            { time: "5:00 PM", activity: "Return Journey: Enjoy a picturesque drive back to Nairobi, enriched by the day's experiences. We'll drop you off at your choice of location, ensuring your comfort and satisfaction." }
          ],
          meals: "Lunch"
        }
      ],
      inclusions: [
        "Private transportation",
        "Farm tour and guide",
        "Hands-on experience",
        "Tasting session",
        "Farm-to-table lunch",
        "Souvenir shopping opportunity"
      ],
      exclusions: [
        "International flights",
        "Tips & porterage",
        "Visa fees (if applicable)",
        "Travel insurance",
        "Other personal items"
      ]
    }
  ];

  const allPackages = [...popularPackages, ...honeymoonPackages, ...groupPackages, ...migrationPackages, ...flyInPackages, ...nairobiExcursions];

  const categories = [
    { value: 'all', label: 'All Packages', icon: <Calendar className="w-4 h-4" /> },
    { value: 'popular', label: 'Popular', icon: <Star className="w-4 h-4" /> },
    { value: 'honeymoon', label: 'Honeymoon', icon: <Heart className="w-4 h-4" /> },
    { value: 'group', label: 'Group', icon: <Users className="w-4 h-4" /> },
    { value: 'migration', label: 'Migration', icon: <Car className="w-4 h-4" /> },
    { value: 'flyin', label: 'Fly-In', icon: <Plane className="w-4 h-4" /> },
    { value: 'nairobi', label: 'Nairobi Tours', icon: <MapPin className="w-4 h-4" /> }
  ];

  const filteredPackages = filterCategory === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === filterCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-kenya-purple/20 to-kenya-magenta/20 flex items-center justify-center pt-32">
        {/* Background Image with 50% opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.pixabay.com/photo/2016/12/05/11/39/zebras-1883654_1280.jpg')`,
            opacity: '0.5'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Safari Packages
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Discover Kenya's incredible wildlife through our carefully curated safari experiences
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filterCategory === category.value ? "luxury" : "outline"}
                onClick={() => setFilterCategory(category.value)}
                className="transition-all duration-300 flex items-center gap-2"
              >
                {category.icon}
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id} className="group hover:shadow-luxury transition-all duration-500 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-kenya-gold text-black font-semibold">
                      From {pkg.price}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-kenya-purple text-white">
                      {pkg.badge}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-kenya-purple text-white capitalize">
                      {pkg.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-kenya-gold transition-colors line-clamp-2">
                    {pkg.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {pkg.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <MapPin className="w-4 h-4 text-kenya-gold" />
                    <span>{pkg.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pkg.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  {/* Price */}
                  {pkg.options && (
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Price</h4>
                      <div className="text-sm">
                        <span className="text-muted-foreground">Starting from </span>
                        <span className="font-medium text-kenya-gold">
                          ${Math.min(...pkg.options.map(opt => parseInt(opt.price.replace(/[$,]/g, ''))))}
                        </span>
                      </div>
                    </div>
                  )}

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4" variant="luxury">
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-kenya-purple">
                          {pkg.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        {/* Package Overview */}
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">Package Overview</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Duration:</span>
                              <p>{pkg.duration}</p>
                            </div>
                            <div>
                              <span className="font-medium">Group Size:</span>
                              <p>{pkg.groupSize}</p>
                            </div>

                            <div>
                              <span className="font-medium">Starting From:</span>
                              <p className="text-kenya-gold font-bold">{pkg.price}</p>
                            </div>
                          </div>
                        </div>

                        {/* Itinerary */}
                        <div>
                          <h3 className="font-semibold text-lg mb-4">ITINERARY</h3>
                          <div className="space-y-4">
                            {pkg.itinerary.map((day) => (
                              <div key={day.day} className="border-l-4 border-kenya-gold pl-4">
                                <h4 className="font-semibold text-kenya-purple">
                                  DAY {day.day}: {day.title}
                                </h4>
                                {day.activities ? (
                                  // New format with activities array
                                  <div className="space-y-3 mt-3">
                                    {day.activities.map((activity, index) => (
                                      <div key={index} className="flex gap-3">
                                        <span className="font-semibold text-kenya-gold text-sm min-w-[80px]">
                                          {activity.time}
                                        </span>
                                        <p className="text-sm text-muted-foreground flex-1">
                                          {activity.activity}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  // Old format with description
                                  <p className="text-sm text-muted-foreground mt-2 mb-1">
                                    {day.description}
                                  </p>
                                )}
                                <p className="text-xs font-medium text-kenya-gold mt-3">
                                  Meals: {day.meals}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Price */}
                        {pkg.options && (
                          <div>
                            <h3 className="font-semibold text-lg mb-4">PRICE</h3>
                            <div className="space-y-4">
                              <div className="bg-muted/30 p-4 rounded-lg">
                                <div className="text-center mb-4">
                                  <span className="text-muted-foreground text-lg">Starting from</span>
                                  <div className="text-3xl font-bold text-kenya-gold mt-1">
                                    ${Math.min(...pkg.options.map(opt => parseInt(opt.price.replace(/[$,]/g, ''))))}
                                  </div>
                                </div>
                              </div>
                              {pkg.options
                                .sort((a, b) => parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, '')))
                                .map((option, index) => (
                                <div key={index} className="border border-border rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <h4 className="font-semibold text-kenya-purple">{option.name}</h4>
                                    <span className="text-xl font-bold text-kenya-gold">{option.price}</span>
                                  </div>
                                  <div className="space-y-1">
                                    {option.lodges.map((lodge, lodgeIndex) => (
                                      <div key={lodgeIndex} className="flex items-center gap-2 text-sm">
                                        <span className="text-muted-foreground">•</span>
                                        <a 
                                          href={`https://www.google.com/search?q=${encodeURIComponent(lodge + ' Kenya safari lodge')}`}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="text-kenya-gold hover:text-kenya-purple hover:underline transition-colors"
                                        >
                                          {lodge}
                                        </a>
                                        <ExternalLink className="w-3 h-3 text-kenya-gold" />
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Optional Activities */}
                        {pkg.category === 'group' && (
                          <div>
                            <h3 className="font-semibold text-lg mb-4 text-kenya-purple">OPTIONAL ACTIVITIES</h3>
                            <div className="bg-muted/30 p-4 rounded-lg space-y-3">
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Balloon Safari:</span>
                                <span className="text-kenya-gold font-bold">$495 per person</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">Masai Village Visit:</span>
                                <span className="text-kenya-gold font-bold">$20 per person</span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Inclusions & Exclusions */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-4 text-green-600">INCLUSIONS</h3>
                            <ul className="space-y-2">
                              {pkg.inclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-green-500 mt-1">✓</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-4 text-red-600">EXCLUSIONS</h3>
                            <ul className="space-y-2">
                              {pkg.exclusions.map((item, index) => (
                                <li key={index} className="flex items-start gap-2 text-sm">
                                  <span className="text-red-500 mt-1">✗</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center pt-6 border-t border-border">
                          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button 
                              variant="luxury" 
                              size="lg"
                              onClick={() => {
                                const url = `/contact?subject=${encodeURIComponent(pkg.title)}`;
                                window.location.href = url;
                              }}
                            >
                              Book This Safari
                            </Button>
                            <Button 
                              variant="outline" 
                              size="lg"
                              onClick={() => {
                                const message = encodeURIComponent(`Greetings, requesting for quote of ${pkg.title}. Kindly assist.`);
                                const whatsappUrl = `https://wa.me/254707694388?text=${message}`;
                                window.open(whatsappUrl, '_blank');
                              }}
                            >
                              Get Quote
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Safaris;