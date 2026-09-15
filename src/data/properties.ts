export type PropertyType =
  | "Residence"
  | "Apartment"
  | "Villa"
  | "Penthouse"
  | "Cottage";

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  perMonth: boolean;
  type: PropertyType;
  beds: number;
  baths: number;
  sqft: number;
  lot?: string;
  yearBuilt: number;
  description: string;
  features: string[];
  images: string[];
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
    avatar: string;
  };
  lat: number;
  lng: number;
  isNew?: boolean;
  featured?: boolean;
}

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

export const PROPERTIES: Property[] = [
  {
    id: "adams-bluv-east",
    title: "Adam's Bluv East",
    address: "350 Palace Road",
    city: "Austin",
    state: "Texas",
    zip: "78704",
    price: 3450,
    perMonth: true,
    type: "Villa",
    beds: 4,
    baths: 3,
    sqft: 2840,
    lot: "0.28 acres",
    yearBuilt: 2019,
    description:
      "A sculptural modern villa minutes from South Congress. Walls of glass open to a resort-style pool terrace, double-height living room, chef's kitchen with honed quartzite, and a detached guest suite ideal for remote work or visitors.",
    features: [
      "Heated saltwater pool",
      "Home office + guest suite",
      "Chef's kitchen with Wolf range",
      "3-car garage with EV charger",
      "Smart home + solar array",
      "Outdoor kitchen & fire pit",
    ],
    images: [
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753086-00f18fb6b3ea"),
      img("photo-1600585154526-990dced4db0d"),
    ],
    agent: {
      name: "Maya Thompson",
      role: "Principal Broker",
      phone: "+1 (512) 555-0148",
      email: "maya@zuno.estate",
      avatar: img("photo-1573496359142-b8d87734a5a2", 200),
    },
    lat: 30.2461,
    lng: -97.749,
    isNew: true,
    featured: true,
  },
  {
    id: "espanio-ladib-plak",
    title: "Espanio Ladib Plak",
    address: "12 Magnolia Bluff Lane",
    city: "Highland Park",
    state: "Texas",
    zip: "75205",
    price: 4120,
    perMonth: true,
    type: "Residence",
    beds: 5,
    baths: 4,
    sqft: 3420,
    lot: "0.41 acres",
    yearBuilt: 2004,
    description:
      "Classic brick residence on a tree-lined cul-de-sac. Formal dining with millwork, renovated kitchen with marble island, primary suite with sitting room, plus a shaded loggia overlooking the lawn.",
    features: [
      "Renovated marble kitchen",
      "Primary suite + sitting room",
      "Covered loggia & lawn",
      "Mudroom + butler's pantry",
      "Heated floors in baths",
      "Whole-home generator",
    ],
    images: [
      img("photo-1564013799919-ab600027ffc6"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687920-4e2a09cf159d"),
    ],
    agent: {
      name: "Daniel Reyes",
      role: "Senior Listing Agent",
      phone: "+1 (214) 555-0193",
      email: "daniel@zuno.estate",
      avatar: img("photo-1560250097-0b93528c311a", 200),
    },
    lat: 32.8337,
    lng: -96.7966,
    featured: true,
  },
  {
    id: "double-flax-apartment",
    title: "Double Flax Apartment",
    address: "88 Mercer Residences, Apt 12B",
    city: "New York",
    state: "New York",
    zip: "10012",
    price: 7891,
    perMonth: true,
    type: "Apartment",
    beds: 3,
    baths: 3,
    sqft: 2180,
    yearBuilt: 2021,
    description:
      "Corner residence with 11-foot ceilings and a 600 sq ft terrace over SoHo. Wide-plank oak, fluted stone kitchen, spa primary bath, white-glove amenities with concierge, fitness center, and residents' lounge.",
    features: [
      "600 sq ft private terrace",
      "White-glove concierge",
      "Spa bath + radiant floors",
      "Residents' lounge & gym",
      "Key-locked elevator entry",
      "Two side-by-side parking",
    ],
    images: [
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600585154340-be6161a56a0c"),
    ],
    agent: {
      name: "Sofia Bennett",
      role: "Luxury Specialist",
      phone: "+1 (212) 555-0176",
      email: "sofia@zuno.estate",
      avatar: img("photo-1580489944761-15a19d654956", 200),
    },
    lat: 40.7223,
    lng: -74.002,
    isNew: true,
  },
  {
    id: "duplex-slap-lak",
    title: "Duplex Slap Lak",
    address: "4210 Travis Street, Unit A",
    city: "Houston",
    state: "Texas",
    zip: "77006",
    price: 2180,
    perMonth: true,
    type: "Residence",
    beds: 3,
    baths: 2,
    sqft: 1890,
    yearBuilt: 2016,
    description:
      "Striking glass-and-cedar duplex in the heart of Montrose. Open-plan living with polished concrete, floating staircase, private patio, and a rooftop deck with skyline views.",
    features: [
      "Rooftop deck + skyline view",
      "Polished concrete floors",
      "Quartz waterfall island",
      "Private fenced patio",
      "Tankless water heaters",
      "Gated parking for 2",
    ],
    images: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1600585154526-990dced4db0d"),
      img("photo-1600573472592-401b489a3cdc"),
    ],
    agent: {
      name: "Chris Delgado",
      role: "Buyer's Agent",
      phone: "+1 (713) 555-0119",
      email: "chris@zuno.estate",
      avatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    },
    lat: 29.7485,
    lng: -95.39,
  },
  {
    id: "willow-creek-farmhouse",
    title: "Willow Creek Farmhouse",
    address: "77 Willow Creek Drive",
    city: "Round Rock",
    state: "Texas",
    zip: "78664",
    price: 3450,
    perMonth: true,
    type: "Cottage",
    beds: 4,
    baths: 3,
    sqft: 2560,
    lot: "0.62 acres",
    yearBuilt: 1998,
    description:
      "Charming modern farmhouse with wraparound porch, shiplap interiors, and mature oaks. Updated systems, new roof 2023, garden beds, chicken coop, and a detached studio barn.",
    features: [
      "Wraparound porch",
      "Detached studio barn",
      "New roof (2023)",
      "Garden + chicken coop",
      "Shiplap great room",
      "Fireplace + reading nook",
    ],
    images: [
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600047509358-9dc75507daeb"),
    ],
    agent: {
      name: "Emily Carter",
      role: "Listing Agent",
      phone: "+1 (512) 555-0162",
      email: "emily@zuno.estate",
      avatar: img("photo-1438761681033-6461ffad8d80", 200),
    },
    lat: 30.5083,
    lng: -97.6789,
  },
  {
    id: "paklow-apartment",
    title: "Paklow Apartment",
    address: "9 Seaside Bluff Court",
    city: "Malibu",
    state: "California",
    zip: "90265",
    price: 6450,
    perMonth: true,
    type: "Penthouse",
    beds: 3,
    baths: 3,
    sqft: 2410,
    yearBuilt: 2014,
    description:
      "Coastal craftsman with stone chimney, vaulted cedar ceilings, and ocean-breeze decks on two levels. Updated kitchen opens to a dining terrace framed by palms.",
    features: [
      "Ocean-breeze decks",
      "Vaulted cedar ceilings",
      "Stone fireplace",
      "Outdoor shower",
      "Wine fridge + bar",
      "2-car garage + storage",
    ],
    images: [
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600607687939-ce8a6c25118c"),
    ],
    agent: {
      name: "Sofia Bennett",
      role: "Luxury Specialist",
      phone: "+1 (310) 555-0184",
      email: "sofia@zuno.estate",
      avatar: img("photo-1580489944761-15a19d654956", 200),
    },
    lat: 34.0359,
    lng: -118.6895,
    isNew: true,
    featured: true,
  },
  {
    id: "palm-court-villa",
    title: "Palm Court Villa",
    address: "2500 Biscayne Bay Drive",
    city: "Miami",
    state: "Florida",
    zip: "33130",
    price: 8950,
    perMonth: true,
    type: "Villa",
    beds: 5,
    baths: 6,
    sqft: 4820,
    lot: "0.35 acres",
    yearBuilt: 2022,
    description:
      "New-build Bayfront villa with infinity edge pool, summer kitchen, and glass pocket doors that dissolve the living level into the terrace. Five en-suite bedrooms, wellness suite with sauna and cold plunge.",
    features: [
      "Infinity edge pool",
      "Wellness suite + sauna",
      "Summer kitchen",
      "Pocket glass walls",
      "5 en-suite bedrooms",
      "Smart security + gate",
    ],
    images: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600566753086-00f18fb6b3ea"),
    ],
    agent: {
      name: "Maya Thompson",
      role: "Principal Broker",
      phone: "+1 (305) 555-0131",
      email: "maya@zuno.estate",
      avatar: img("photo-1573496359142-b8d87734a5a2", 200),
    },
    lat: 25.7617,
    lng: -80.1918,
    featured: true,
  },
  {
    id: "cedar-line-loft",
    title: "Cedar Line Loft",
    address: "1100 E 6th Street, #304",
    city: "Austin",
    state: "Texas",
    zip: "78702",
    price: 1895,
    perMonth: true,
    type: "Apartment",
    beds: 2,
    baths: 2,
    sqft: 1280,
    yearBuilt: 2018,
    description:
      "Industrial-chic loft with 14-ft ceilings, exposed ductwork, and a wall of steel windows. Walk to East Austin's best coffee, tacos, and galleries.",
    features: [
      "14-ft ceilings",
      "Steel casement windows",
      "Quartz + butcher block",
      "Secure bike storage",
      "Rooftop lounge + pool",
      "Pet friendly",
    ],
    images: [
      img("photo-1502672260266-1c1ef2d93688"),
      img("photo-1560448204-e02f11c3d0e2"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687920-4e2a09cf159d"),
    ],
    agent: {
      name: "Chris Delgado",
      role: "Buyer's Agent",
      phone: "+1 (713) 555-0119",
      email: "chris@zuno.estate",
      avatar: img("photo-1507003211169-0a1dd7228f2d", 200),
    },
    lat: 30.2672,
    lng: -97.7331,
  },
  {
    id: "oak-hollow-estate",
    title: "Oak Hollow Estate",
    address: "5 Oak Hollow Preserve",
    city: "Beverly Hills",
    state: "California",
    zip: "90210",
    price: 24500,
    perMonth: true,
    type: "Penthouse",
    beds: 6,
    baths: 7,
    sqft: 8900,
    lot: "1.1 acres",
    yearBuilt: 2020,
    description:
      "Gated architectural estate behind olive trees. Zero-edge pool, guest house, theater, 1,000-bottle cellar, and canyon views from nearly every room.",
    features: [
      "Zero-edge pool + spa",
      "Guest house + theater",
      "1,000-bottle cellar",
      "Canyon + city views",
      "Gated + private well",
      "4-car gallery garage",
    ],
    images: [
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    agent: {
      name: "Daniel Reyes",
      role: "Senior Listing Agent",
      phone: "+1 (310) 555-0193",
      email: "daniel@zuno.estate",
      avatar: img("photo-1560250097-0b93528c311a", 200),
    },
    lat: 34.0736,
    lng: -118.4004,
  },
  {
    id: "harbor-light-cottage",
    title: "Harbor Light Cottage",
    address: "18 Harbor Light Way",
    city: "Tampa",
    state: "Florida",
    zip: "33606",
    price: 2750,
    perMonth: true,
    type: "Cottage",
    beds: 3,
    baths: 2,
    sqft: 1740,
    lot: "0.18 acres",
    yearBuilt: 1948,
    description:
      "Sun-washed bungalow two blocks from Bayshore. Original hardwoods, updated electrical/plumbing, detached garage studio, and a jasmine-covered pergola.",
    features: [
      "Original hardwoods",
      "Detached garage studio",
      "Jasmine pergola",
      "Updated systems",
      "Outdoor dining deck",
      "Citrus garden",
    ],
    images: [
      img("photo-1580587771525-78b9dba3b914"),
      img("photo-1568605114967-8130f3a36994"),
      img("photo-1570129477492-45c003edd2be"),
      img("photo-1600047509807-ba8f99d2cdde"),
    ],
    agent: {
      name: "Emily Carter",
      role: "Listing Agent",
      phone: "+1 (813) 555-0127",
      email: "emily@zuno.estate",
      avatar: img("photo-1438761681033-6461ffad8d80", 200),
    },
    lat: 27.9378,
    lng: -82.4884,
    isNew: true,
  },
  {
    id: "the-beacon-penthouse",
    title: "The Beacon Penthouse",
    address: "400 Park Avenue South, PH1",
    city: "New York",
    state: "New York",
    zip: "10016",
    price: 12800,
    perMonth: true,
    type: "Penthouse",
    beds: 4,
    baths: 5,
    sqft: 3650,
    yearBuilt: 2023,
    description:
      "Full-service penthouse with private elevator landing, 1,200 sq ft wraparound terrace, Empire State views, library with bronze shelving, and five-star amenities.",
    features: [
      "Private elevator landing",
      "1,200 sq ft terrace",
      "Empire State views",
      "Library + bronze shelves",
      "Doorman + valet",
      "Private storage + parking",
    ],
    images: [
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1600566753190-17f0baa2a6c3"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600585154340-be6161a56a0c"),
    ],
    agent: {
      name: "Sofia Bennett",
      role: "Luxury Specialist",
      phone: "+1 (212) 555-0176",
      email: "sofia@zuno.estate",
      avatar: img("photo-1580489944761-15a19d654956", 200),
    },
    lat: 40.7445,
    lng: -73.9826,
  },
  {
    id: "sagebrush-modern",
    title: "Sagebrush Modern",
    address: "6208 Valleydale Terrace",
    city: "Dallas",
    state: "Texas",
    zip: "75230",
    price: 3950,
    perMonth: true,
    type: "Residence",
    beds: 4,
    baths: 3,
    sqft: 2980,
    yearBuilt: 2017,
    description:
      "Warm modern with white oak, plaster walls, and accordion doors to a covered patio with fireplace. Oversized island, scullery, mudroom, and upstairs game room.",
    features: [
      "Covered patio + fireplace",
      "White oak + plaster",
      "Scullery + mudroom",
      "Game room upstairs",
      "Saltwater plunge pool",
      "Outdoor shower",
    ],
    images: [
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1600585154340-be6161a56a0c"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1600566753086-00f18fb6b3ea"),
    ],
    agent: {
      name: "Daniel Reyes",
      role: "Senior Listing Agent",
      phone: "+1 (214) 555-0193",
      email: "daniel@zuno.estate",
      avatar: img("photo-1560250097-0b93528c311a", 200),
    },
    lat: 32.8674,
    lng: -96.7823,
  },
];

export function getProperty(id: string): Property | undefined {
  return PROPERTIES.find((p) => p.id === id);
}

export function formatPrice(p: Property): string {
  return `$${p.price.toLocaleString("en-US")}`;
}

export const LOCATIONS = Array.from(
  new Set(PROPERTIES.map((p) => p.state)),
).sort();

export const TYPES: PropertyType[] = [
  "Residence",
  "Apartment",
  "Villa",
  "Penthouse",
  "Cottage",
];

export const PRICE_RANGES = [
  { label: "$1,000 – $50,000", min: 1000, max: 50000 },
  { label: "$1,000 – $3,000", min: 1000, max: 3000 },
  { label: "$3,000 – $5,000", min: 3000, max: 5000 },
  { label: "$5,000 – $10,000", min: 5000, max: 10000 },
  { label: "$10,000+", min: 10000, max: 100000 },
] as const;
