/**
 * Extended copy for destination detail pages (foods, galleries, fun facts).
 * Gallery images are served from each destination’s folder under /public.
 */

import { placePublicImage as p } from './placeImagePaths'

export const placeExtras = {
  araku: {
    slug: 'araku',
    longDescription: `Araku Valley is a hill town in the Eastern Ghats where the air is cooler than on the coast and the slopes are covered with forest and coffee. Visitors come for viewpoints, plantation visits, and the small museums that explain tribal life and coffee growing.

The road or rail journey from Visakhapatnam is part of the experience. Add Borra Caves if you want caves and hills in one itinerary.`,
    famousFoods: [
      'Bamboo chicken — a well-known dish on the Araku–Visakhapatnam route',
      'Araku Valley coffee from local estates and tasting counters',
      'Millet-based snacks and seasonal fruit from local markets',
    ],
    funFacts: [
      'The Visakhapatnam–Kirandul railway crosses many bridges and tunnels in the ghats.',
      'The valley sits at roughly 900 m above sea level.',
      'Coffee and cultural events are held at different times of year—check local listings.',
    ],
    detailGallery: [
      {
        src: p('araku', 'araku-valley (5).jpg'),
        alt: 'Hills and mist in Araku Valley',
        fallbackSrc: p('araku', 'araku-valley (3).jpg'),
      },
      {
        src: p('araku', 'katiki-waterfalls.jpg'),
        alt: 'Katiki Waterfalls near the Araku region',
        fallbackSrc: p('araku', 'chaaparayi.jpg'),
      },
      {
        src: p('araku', 'araku-in-blossom.jpg'),
        alt: 'Coffee or forest blossom season in Araku Valley',
        fallbackSrc: p('araku', 'gr8.jpg'),
      },
    ],
  },
  borra: {
    slug: 'borra',
    longDescription: `Borra Caves are limestone caves where underground water has carved passages and chambers over a very long time. Visitors follow marked paths with lighting to see stalactites, stalagmites, and large open spaces.

The site lies in the Ananthagiri hills near the Araku area. Guides explain the geology in simple terms. Wear steady footwear because steps can be wet.`,
    famousFoods: [
      'Hot idli and sambar from stalls near the visitor area',
      'Coffee and snacks on the drive to or from Visakhapatnam',
      'Seasonal fruit from roadside sellers on the ghat road',
    ],
    funFacts: [
      'The caves are among the largest show-cave systems in India.',
      'A small railway halt serves some trains on the Visakhapatnam–Araku line.',
      'Local guides often point out shapes in the rock that resemble people or animals.',
    ],
    detailGallery: [
      {
        src: p('borra', 'caption (12).jpg'),
        alt: 'Lit limestone formations in Borra Caves',
        fallbackSrc: p('borra', 'caption (13).jpg'),
      },
      {
        src: p('borra', 'borra-caves.jpg'),
        alt: 'Borra Caves visitor route',
        fallbackSrc: p('borra', 'caption (10).jpg'),
      },
      {
        src: p('borra', 'caption (15).jpg'),
        alt: 'Borra Caves interior chambers',
        fallbackSrc: p('borra', 'caption (17).jpg'),
      },
    ],
  },
  'rk-beach': {
    slug: 'rk-beach',
    longDescription: `Ramakrishna Beach—usually called RK Beach—is Visakhapatnam’s main urban beach. The long promenade faces the Bay of Bengal and is busy with walkers, families, and food vendors, especially in the evening.

Museums and memorials sit along Beach Road, so you can mix sea air with short indoor visits. Swimming conditions change with the season; always follow local safety advice.`,
    famousFoods: [
      'Masala muri and chaat along the promenade',
      'Andhra-style seafood meals in city restaurants',
      'Evening snacks such as punugulu and sugarcane juice from carts',
    ],
    funFacts: [
      'The beach is named for the Ramakrishna Mission ashram nearby.',
      'Submarine and aircraft museums on the same road are rare in India.',
      'Sunrise walks are popular with residents and visitors.',
    ],
    detailGallery: [
      {
        src: p('rkBeach', 'that-submarine-view.jpg'),
        alt: 'RK Beach with Visakhapatnam port and submarine museum view',
        fallbackSrc: p('rkBeach', 'rama-krishna-beach (3).jpg'),
      },
      {
        src: p('rkBeach', 'photo0jpg.jpg'),
        alt: 'Ramakrishna Beach promenade and sea',
        fallbackSrc: p('rkBeach', 'beach.jpg'),
      },
      {
        src: p('rkBeach', 'sunset-view-in-rk-beach.jpg'),
        alt: 'Sunset colours over RK Beach',
        fallbackSrc: p('rkBeach', 'rama-krishna-beach (2).jpg'),
      },
    ],
  },
  tirumala: {
    slug: 'tirumala',
    longDescription: `The Sri Venkateswara Temple stands on Tirumala hill above Tirupati. It is one of the most visited Hindu temples in the world. TTD manages queues, accommodation options, and transport on the ghat road.

Tirupati at the foothills has other important shrines and markets. Plan ahead for darshan time, carry essentials for waiting in queue, and use only official booking channels.`,
    famousFoods: [
      'Tirupati laddu from official temple counters',
      'Pulihora and other prasadam meals at TTD annadanam halls',
      'Andhra vegetarian meals in Tirupati restaurants',
    ],
    funFacts: [
      'The temple sits in the Seshachalam hill range.',
      'The ghat road has tight hairpin bends familiar to every visitor.',
      'Talakona waterfall and Chandragiri Fort are common add-on visits.',
    ],
    detailGallery: [
      {
        src: p('tirumala', 'tirumala-complex-courtyard.jpg'),
        alt: 'Sri Venkateswara Temple complex and courtyards, Tirumala',
        fallbackSrc: p('tirumala', 'tirumala-night-lights.jpg'),
        lastResortSrc: p('tirumala', 'tirumala-overview.jpg'),
      },
      {
        src: p('tirumala', 'tirumala-maha-dwaram.jpg'),
        alt: 'Maha Dwaram of Sri Venkateswara Temple at Tirumala',
        fallbackSrc: p('tirumala', 'tirumala-pilgrims-courtyard.jpg'),
        lastResortSrc: p('tirumala', 'tirumala-pushkarini-srivari.jpg'),
      },
      {
        src: p('tirumala', 'tirumala-pushkarini.jpg'),
        alt: 'Swamy Pushkarini, Tirumala',
        fallbackSrc: p('tirumala', 'tirumala-hills-view.jpg'),
        lastResortSrc: p('tirumala', 'tirumala-overview.jpg'),
      },
    ],
  },
  belum: {
    slug: 'belum',
    longDescription: `Belum Caves are long natural caves near Belum village in Nandyal district. Visitors walk on built paths through large halls and narrower sections, with guides pointing out interesting rock shapes and history.

The Andhra Pradesh Tourism department runs the visitor facilities. Combine with Orvakal or Kurnool if you are touring the region by car.`,
    famousFoods: [
      'Rayalaseema-style meals in Kurnool or Nandyal',
      'Jonna rotte (sorghum flatbread) with chutney at highway eateries',
      'Milk sweets from local sweet shops',
    ],
    funFacts: [
      'Belum is one of the longest publicly accessible natural cave networks in India.',
      'The caves appear in survey records from the 1800s and opened for tourism in recent decades.',
      'Guides sometimes demonstrate a “musical” stone in one section.',
    ],
    detailGallery: [
      {
        src: p('belum', 'photo4jpg.jpg'),
        alt: 'Wide chamber inside Belum Caves',
        fallbackSrc: p('belum', 'belum-caves (1).jpg'),
      },
      {
        src: p('belum', 'cave-halogen-lighting.jpg'),
        alt: 'Belum Caves passage with lighting',
        fallbackSrc: p('belum', 'water-wonder.jpg'),
      },
      {
        src: p('belum', 'belum-caves (2).jpg'),
        alt: 'Belum Caves rock textures and walkway',
        fallbackSrc: p('belum', 'inside-the-caves.jpg'),
      },
    ],
  },
  horsley: {
    slug: 'horsley',
    longDescription: `Horsley Hills is a small hill station in Chittoor district. It offers viewpoints, short walks, and a cooler climate than the surrounding plains. Resorts and a few adventure activities operate depending on the season.

The place is a common weekend choice from nearby cities. Madanapalle is the nearest large town for supplies.`,
    famousFoods: [
      'Simple vegetarian thalis at hill resorts',
      'Tomato-based dishes using Madanapalle tomatoes in town eateries',
      'South Indian snacks on the drive from the plains',
    ],
    funFacts: [
      'The hill station is named after W. D. Horsley, a British officer.',
      'A large old eucalyptus tree (Kalyani) is a known landmark on the hill.',
      'Galibanda viewpoint is known for strong winds.',
    ],
    detailGallery: [
      {
        src: p('horsley', 'l-2.jpg'),
        alt: 'Horsley Hills forest path',
        fallbackSrc: p('horsley', 'l-6.jpg'),
      },
      {
        src: p('horsley', 'l-3.jpg'),
        alt: 'Horsley Hills landscape',
        fallbackSrc: p('horsley', 'l-1.jpg'),
      },
      {
        src: p('horsley', 'l-4.jpg'),
        alt: 'Horsley Hills ridge and sky',
        fallbackSrc: p('horsley', 'l-2.jpg'),
      },
    ],
  },
}
