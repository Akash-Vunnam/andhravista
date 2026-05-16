/**
 * Destination copy is kept short and aligned with each place name.
 * Photos live under /public in each place’s own folder (see placeImagePaths.js).
 */

import { placeExtras } from './placeExtras'
import { placePublicImage as p } from './placeImagePaths'

export const places = [
  {
    id: 'araku',
    name: 'Araku Valley',
    location: 'Araku, Alluri Sitharama Raju district — hill country in the Eastern Ghats, northeast of Visakhapatnam',
    description:
      'A green hill station known for coffee plantations, tribal culture, and views over the Eastern Ghats. Many visitors pair it with Borra Caves.',
    bestTime:
      'October–February for cool, clear weather. Monsoon is lush but roads can be slippery; check forecasts before travel.',
    famousFor: [
      'Coffee estates and the Araku Valley Coffee Museum',
      'Tribal arts and the Araku Tribal Museum',
      'Scenic road or train journey from Visakhapatnam',
      'Padmapuram Botanical Garden',
    ],
    tips: [
      'Combine with Borra Caves on a day trip or two-day loop from Visakhapatnam.',
      'Carry a light jacket in winter; book stays early on long weekends.',
      'Ask before photographing in tribal villages.',
    ],
    nearbyAttractions: [
      'Borra Caves',
      'Ananthagiri (coffee and forest views)',
      'Visakhapatnam city and beaches',
    ],
    tag: 'Hills & coffee',
    mapsQuery: 'Araku Valley Andhra Pradesh',
    image: p('araku', 'araku-valley (4).jpg'),
    imageFallback: p('araku', 'araku-valley.jpg'),
    imageAlt: 'Scenic view of Araku Valley hills and forest, Andhra Pradesh',
  },
  {
    id: 'borra',
    name: 'Borra Caves',
    location: 'Ananthagiri–Araku area, Alluri Sitharama Raju district — about 90 km from Visakhapatnam by road',
    description:
      'Large limestone caves with stalactites and stalagmites, formed along the Gosthani River. Lit walkways and guides help visitors explore safely.',
    bestTime:
      'November–February for comfortable weather inside and outside the caves.',
    famousFor: [
      'Limestone formations and large chambers',
      'Rail halt on the Visakhapatnam–Kirandul line (check current timings)',
      'Views over forested hills near the cave entrance',
      'Guided visitor routes with lighting',
    ],
    tips: [
      'Wear shoes with good grip; surfaces can be damp.',
      'Check opening hours and fees on site before you go.',
      'Pair with Araku Valley for one itinerary.',
    ],
    nearbyAttractions: [
      'Araku Valley town',
      'Seasonal waterfalls after monsoon',
      'Visakhapatnam for onward travel',
    ],
    tag: 'Caves',
    mapsQuery: 'Borra Caves Visakhapatnam Andhra Pradesh',
    image: p('borra', 'caption (14).jpg'),
    imageFallback: p('borra', 'caption (11).jpg'),
    imageAlt: 'Illuminated limestone formations inside Borra Caves, Andhra Pradesh',
  },
  {
    id: 'rk-beach',
    name: 'RK Beach (Ramakrishna Beach)',
    location: 'Beach Road, Visakhapatnam — urban seafront on the Bay of Bengal',
    description:
      'A long city beach and promenade with sea views, evening crowds, and museums along the road. Named after the Ramakrishna Mission nearby.',
    bestTime:
      'October–March for milder weather. Mornings and evenings are best for walks; follow local safety flags for the sea.',
    famousFor: [
      'INS Kurusura submarine museum and aircraft museum nearby',
      'Kali Temple, Victory at Sea Memorial, and lighthouse area',
      'City festivals on the beach when scheduled',
      'Street food along the promenade',
    ],
    tips: [
      'Use marked crossings; Beach Road is busy.',
      'Weekday mornings are quieter for photos.',
      'Add Kailasagiri or Yarada Beach for a longer coastal day.',
    ],
    nearbyAttractions: [
      'Kailasagiri hill park',
      'Aircraft and submarine museums on Beach Road',
      'Yarada Beach and Rushikonda (short drives)',
    ],
    tag: 'Coast',
    mapsQuery: 'Ramakrishna Beach Visakhapatnam',
    image: p('rkBeach', 'sunrise-at-r-k-beach (1).jpg'),
    imageFallback: p('rkBeach', 'sunrise-at-r-k-beach.jpg'),
    imageAlt: 'Sunrise at RK Beach (Ramakrishna Beach), Visakhapatnam',
  },
  {
    id: 'tirumala',
    name: 'Sri Venkateswara Temple, Tirumala',
    location: 'Tirumala, Tirupati, Chittoor district — hill temple above Tirupati town',
    description:
      'The famous hill temple of Lord Venkateswara on the Tirumala hills. Managed by TTD; millions visit each year for darshan.',
    bestTime:
      'September–February for cooler weather on the ghat. Weekdays are often less crowded than major festivals—check TTD notices before travel.',
    famousFor: [
      'Main shrine and traditional darshan routes (TTD)',
      'Tirupati laddu prasadam from official counters',
      'Forested Seshachalam hills around the ghat road',
      'Tirupati town shrines and markets at the foothills',
    ],
    tips: [
      'Book darshan and rooms only through official TTD channels.',
      'Carry a shawl for early mornings; allow extra time in peak season.',
      'Use TTD buses or your own vehicle on the ghat as you prefer.',
    ],
    nearbyAttractions: [
      'Sri Padmavathi Ammavari Temple, Tiruchanoor',
      'Kapila Theertham waterfall temple',
      'Chandragiri Fort and Sri Venkateswara National Park (day trips)',
    ],
    tag: 'Spiritual',
    mapsQuery: 'Tirumala Tirupati Devasthanam temple',
    /** Photos: Wikimedia Commons (CC), saved under `public/Sri Venkateswara Temple, Tirumala pics/`. */
    image: p('tirumala', 'tirumala-hero-gopuram.jpg'),
    imageFallback: p('tirumala', 'tirumala-overview.jpg'),
    imageLastResort: p('tirumala', 'tirumala-temple-entrance.jpg'),
    imageAlt: 'Sri Venkateswara Temple gopurams at Tirumala, Andhra Pradesh',
  },
  {
    id: 'belum',
    name: 'Belum Caves',
    location: 'Belum village, near Kolimigundla, Nandyal district — road access from Kurnool or Nandyal',
    description:
      'Long underground caves with wide passages, stalactites, and historic use. Andhra Pradesh Tourism maintains paths, lighting, and guides.',
    bestTime:
      'November–February for cooler weather above ground; inside the caves stays fairly even year-round.',
    famousFor: [
      'Long developed visitor route inside the cave system',
      'Large chambers and distinctive rock shapes',
      'Buddhist and Jain links recorded by archaeologists',
      'Guided tours with safety barriers',
    ],
    tips: [
      'Expect some low passages; wear closed shoes.',
      'Carry water; humidity is high inside.',
      'Combine with Orvakal rock garden on a Kurnool-area trip.',
    ],
    nearbyAttractions: [
      'Orvakal rock garden',
      'Yaganti and Ahobilam (longer drives)',
      'Kurnool city for transport',
    ],
    tag: 'Adventure',
    mapsQuery: 'Belum Caves Kolimigundla Andhra Pradesh',
    image: p('belum', 'the-stalactites-and-stalagmite.jpg'),
    imageFallback: p('belum', 'inside-the-caves.jpg'),
    imageAlt: 'Stalactites and stalagmites inside Belum Caves, Andhra Pradesh',
  },
  {
    id: 'horsley',
    name: 'Horsley Hills',
    location: 'Madanapalle area, Chittoor district — small hill station above the plains',
    description:
      'A compact hill station with viewpoints, eucalyptus woods, and a mild climate. Popular for short breaks from nearby cities.',
    bestTime:
      'October–March for pleasant days; peak winter mornings can be quite cool.',
    famousFor: [
      'Viewpoints such as Galibanda (Wind Rocks)',
      'Gangotri Lake and short nature walks',
      'Old Kalyani eucalyptus tree in the hill area',
      'Resorts and soft adventure when operators are open',
    ],
    tips: [
      'Fill fuel before the ghat; carry cash for small shops.',
      'Book activities in advance on busy holidays.',
      'Check road conditions if adding distant waterfalls.',
    ],
    nearbyAttractions: [
      'Madanapalle town',
      'Talakona area (longer drive)',
      'Lepakshi heritage site (long day trip by car)',
    ],
    tag: 'Hill station',
    mapsQuery: 'Horsley Hills Andhra Pradesh',
    image: p('horsley', 'l-5.jpg'),
    imageFallback: p('horsley', 'l-6.jpg'),
    imageAlt: 'Hills and trees at Horsley Hills, Andhra Pradesh',
  },
]

export const galleryImages = [
  { src: p('rkBeach', 'that-submarine-view.jpg'), alt: 'Submarine Museum at RK Beach, Visakhapatnam' },
  { src: p('araku', 'araku-valley (1).jpg'), alt: 'Araku Valley scenic landscape' },
  { src: p('borra', 'caption (1).jpg'), alt: 'Limestone formations in Borra Caves' },
  { src: p('tirumala', 'tirumala-hero-gopuram.jpg'), alt: 'Sri Venkateswara Temple Gopuram' },
  { src: p('belum', 'belum-caves (1).jpg'), alt: 'Passages of Belum Caves' },
  { src: p('horsley', 'l-1.jpg'), alt: 'Horsley Hills viewpoint' },
  { src: p('rkBeach', 'sunrise-at-r-k-beach.jpg'), alt: 'Sunrise over Bay of Bengal at RK Beach' },
  { src: p('araku', 'katiki-waterfalls.jpg'), alt: 'Katiki Waterfalls in Araku' },
  { src: p('borra', 'caption (12).jpg'), alt: 'Illuminated stalactites in Borra Caves' },
  { src: p('tirumala', 'tirumala-complex-courtyard.jpg'), alt: 'Tirumala Temple complex courtyard' },
  { src: p('belum', 'cave-halogen-lighting.jpg'), alt: 'Belum Caves interior with halogen lighting' },
  { src: p('horsley', 'l-2.jpg'), alt: 'Scenic road in Horsley Hills' },
  { src: p('rkBeach', 'rama-krishna-beach.jpg'), alt: 'Waves at Rama Krishna Beach' },
  { src: p('araku', 'araku-valley-has-beautiful.jpg'), alt: 'Beautiful lush hills of Araku Valley' },
  { src: p('borra', 'caption (7).jpg'), alt: 'Colorful lighting in Borra Caves' },
  { src: p('tirumala', 'tirumala-overview.jpg'), alt: 'Overview of Tirumala hills and temple' },
  { src: p('belum', 'kotilingalu.jpg'), alt: 'Kotilingalu section of Belum Caves' },
  { src: p('horsley', 'l-3.jpg'), alt: 'Eucalyptus trees in Horsley Hills' },
  { src: p('rkBeach', 'sunset-view-in-rk-beach.jpg'), alt: 'Sunset view at RK Beach' },
  { src: p('araku', 'chaaparayi.jpg'), alt: 'Chaaparayi water cascade, Araku' },
  { src: p('borra', 'caption (14).jpg'), alt: 'Large stalagmite in Borra Caves' },
  { src: p('tirumala', 'tirumala-maha-dwaram.jpg'), alt: 'Maha Dwaram entrance of Tirumala Temple' },
  { src: p('belum', 'the-stalactites-and-stalagmite.jpg'), alt: 'Stalactites and stalagmites in Belum' },
  { src: p('horsley', 'l-4.jpg'), alt: 'Rocky formations at Horsley Hills' },
  { src: p('rkBeach', 'photo0jpg.jpg'), alt: 'Ramakrishna Beach promenade' },
  { src: p('araku', 'photo0jpg.jpg'), alt: 'Tribal village in Araku Valley' },
  { src: p('borra', 'caption (15).jpg'), alt: 'Deep cave passages in Borra' },
  { src: p('tirumala', 'tirumala-pushkarini.jpg'), alt: 'Swamy Pushkarini tank, Tirumala' },
  { src: p('belum', 'fb-img-1476280681039.jpg'), alt: 'Belum Caves exploration' },
  { src: p('horsley', 'l-5.jpg'), alt: 'Lush greenery at Horsley Hills' },
  { src: p('rkBeach', 'rama-krishna-beach (1).jpg'), alt: 'Coastal view of RK Beach' },
  { src: p('araku', 'araku-valley (4).jpg'), alt: 'Panoramic view of Araku Valley' },
  { src: p('borra', 'caption (2).jpg'), alt: 'Natural cave entrance, Borra Caves' },
  { src: p('tirumala', 'tirumala-temple-entrance.jpg'), alt: 'Entrance to Sri Venkateswara Temple' },
  { src: p('belum', 'caption.jpg'), alt: 'Belum Caves natural structures' },
  { src: p('horsley', 'l-6.jpg'), alt: 'Horsley Hills misty morning' },
  { src: p('araku', 'araku-valley (5).jpg'), alt: 'Mist over Araku Valley hills' },
  { src: p('borra', 'caption (8).jpg'), alt: 'Cave ceiling details, Borra Caves' },
  { src: p('tirumala', 'tirumala-pilgrims-courtyard.jpg'), alt: 'Pilgrims waiting at Tirumala' },
  { src: p('belum', 'dscn0102-largejpg.jpg'), alt: 'Textured walls of Belum Caves' },
  { src: p('araku', 'araku-valley (2).jpg'), alt: 'Coffee plantations in Araku' },
  { src: p('borra', 'caption (11).jpg'), alt: 'Stunning cave chamber in Borra' },
  { src: p('tirumala', 'tirumala-temple-wide.jpg'), alt: 'Wide view of the Tirumala Temple' },
  { src: p('belum', 'photo4jpg.jpg'), alt: 'Massive hall in Belum Caves' },
  { src: p('araku', 'araku-valley.jpg'), alt: 'Eastern Ghats mountain range' },
  { src: p('borra', 'caption (5).jpg'), alt: 'Illuminated paths in Borra Caves' },
  { src: p('belum', 'belum-caves-longest-cave.jpg'), alt: 'Longest cave passages in Belum' },
  { src: p('borra', 'caption.jpg'), alt: 'Borra Caves main cavern' },
  { src: p('belum', 'caption (2).jpg'), alt: 'Natural sinkhole at Belum Caves' },
  { src: p('belum', 'caption (3).jpg'), alt: 'Underground chamber, Belum' },
  { src: p('belum', 'belum-caves-longest-cave (1).jpg'), alt: 'Deep sections of Belum Caves' },
  { src: p('belum', 'group-outing-belum-caves3.jpg'), alt: 'Tourists exploring Belum Caves' },
]

export const quickFacts = [
  {
    label: 'Bay of Bengal coastline',
    value: '~974 km',
    hint: 'Surf, ports, and fishing towns along Andhra',
  },
  {
    label: 'Living heritage',
    value: 'Amaravati–Satavahana',
    hint: 'Ancient sites to present-day craft towns',
  },
  {
    label: 'Show caves',
    value: 'Belum + Borra',
    hint: 'Two major cave destinations in the state',
  },
  {
    label: 'Tirumala pilgrims',
    value: 'Very high annual visits',
    hint: 'Use official TTD booking only',
  },
]

export const whyVisit = [
  {
    title: 'Coast, caves, and hills',
    text: 'You can enjoy the sea at Visakhapatnam, explore limestone caves, and relax in hill stations such as Araku or Horsley on one trip.',
  },
  {
    title: 'Temples and traditions',
    text: 'Tirumala is world famous; the same region has smaller shrines, ghats, and village festivals across the year.',
  },
  {
    title: 'Distinct flavours',
    text: 'Coastal seafood, millet-based rural meals, and Rayalaseema-style spice are easy to find as you move across districts.',
  },
  {
    title: 'Scenic travel',
    text: 'The Visakhapatnam–Araku rail route, ghat roads to Horsley, and highways toward Kurnool are part of the experience.',
  },
]

export const testimonials = [
  {
    quote:
      'We did Visakhapatnam, Araku, and Borra over a few days. The train through the ghats was slow and scenic, and Borra felt huge inside.',
    name: 'Priya Natarajan',
    role: 'Chennai · family trip, February 2025',
  },
  {
    quote:
      'Belum Caves was the highlight—long walkways, good lighting, and guides who explained the rock shapes clearly.',
    name: 'David & Helen Morris',
    role: 'UK · backpacking Andhra, January 2025',
  },
  {
    quote:
      'RK Beach at sunrise, then the museums on Beach Road—Vizag felt easy to walk and photograph.',
    name: 'Imran Sheikh',
    role: 'Hyderabad · long weekend, December 2024',
  },
]

export const faqs = [
  {
    q: 'How many days do I need for Visakhapatnam + Araku + Borra?',
    a: 'Many people spend about two nights in Visakhapatnam, then either a long day trip or one night in Araku to include Borra Caves. Three full days is a comfortable minimum.',
  },
  {
    q: 'What is the best way to reach Tirumala safely?',
    a: 'Use official TTD buses or a private vehicle on the ghat road in daylight when possible. Book darshan and rooms only through the official TTD website (tirumala.org) or authorised channels.',
  },
  {
    q: 'Are Belum and Borra Caves suitable for children and seniors?',
    a: 'Both sites have steps and some low passages. Most active seniors and school-age children manage with breaks. Strollers are not practical. Follow barriers and staff instructions.',
  },
  {
    q: 'When should I be careful on the Andhra coast?',
    a: 'During cyclone alerts (often in late monsoon or post-monsoon months) seas can be rough and beaches may be closed. Check IMD warnings and local police advice before swimming.',
  },
  {
    q: 'Do I need permits for tribal areas around Araku?',
    a: 'Main tourist routes do not need special permits. Some hamlets restrict photography—use local guides where advised and ask people before taking photos.',
  },
  {
    q: 'What should I pack for Horsley Hills in winter?',
    a: 'December–January mornings can be cool. Pack a warm layer, closed shoes for viewpoints, and a light rain layer if monsoon moisture remains on the roads.',
  },
]

/** Merged place objects for detail pages (includes long copy, foods, galleries). */
export const placesFull = places.map((p) => ({
  ...p,
  ...(placeExtras[p.id] || {}),
}))

export function getPlaceBySlug(slug) {
  return placesFull.find((p) => p.id === slug) ?? null
}

/** Flat list for global gallery page (site gallery + destination detail shots). */
export function getAllGalleryItems() {
  return galleryImages.map((g) => ({
    src: g.src,
    alt: g.alt,
    fallbackSrc: g.fallbackSrc,
  }))
}
