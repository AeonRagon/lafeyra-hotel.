/**
 * LaFeyra Hotel — Λίστα δωματίων (single source of truth)
 *
 * Όλες οι αλλαγές (προσθήκη/αφαίρεση δωματίου, αλλαγή φωτό, τίτλου, κλπ.)
 * γίνονται ΕΔΩ. Δεν χρειάζεται να αλλάζεις HTML στα index.html / rooms.html.
 *
 * Πεδία ανά δωμάτιο:
 *   slug         → όνομα αρχείου χωρίς .html (π.χ. double-room-sea-view)
 *   title        → τίτλος που εμφανίζεται (π.χ. "Double Room Sea View")
 *   image        → URL εικόνας για carousel (καλή ανάλυση π.χ. 400x280)
 *   imageLarge   → URL εικόνας για τη σελίδα "Όλα τα δωμάτια" (π.χ. 720x480)
 *   guests       → αριθμός ατόμων (string, π.χ. "2" ή "3")
 *   area         → τετραγωνικά (string, π.χ. "18-22 m²" ή "40 m²")
 *   description  → σύντομη περιγραφή για την κάρτα στη σελίδα rooms.html
 */
window.ROOMS = [
  {
    slug: 'double-room-sea-view',
    title: 'Double Room Sea View',
    image: 'https://placehold.co/400x280/6b8a9e/ffffff?text=Double+Sea+View',
    imageLarge: 'https://placehold.co/720x480/6b8a9e/ffffff?text=Double+Sea+View',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'double-room-pool-view',
    title: 'Double Room Pool View',
    image: 'https://placehold.co/400x280/5a7a6a/ffffff?text=Double+Pool+View',
    imageLarge: 'https://placehold.co/720x480/5a7a6a/ffffff?text=Double+Pool+View',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'double-room-mountain-view',
    title: 'Double Room Mountain View',
    image: 'https://placehold.co/400x280/5a6b5a/ffffff?text=Double+Mountain',
    imageLarge: 'https://placehold.co/720x480/5a6b5a/ffffff?text=Double+Mountain+View',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'triple-room-sea-view',
    title: 'Triple Room Sea View',
    image: 'https://placehold.co/400x280/6b8a9e/ffffff?text=Triple+Sea+View',
    imageLarge: 'https://placehold.co/720x480/6b8a9e/ffffff?text=Triple+Sea+View',
    guests: '3',
    area: '18-22 m²',
    description: 'The triple room is spacious, stylishly decorated, and features a double bed as well as a sofa bed which can accommodate up to three people. The room also features a spacious living area, mini-fridge, a modern bathroom with a shower, and all the necessary amenities.'
  },
  {
    slug: 'triple-room-pool-view',
    title: 'Triple Room Pool View',
    image: 'https://placehold.co/400x280/5a7a6a/ffffff?text=Triple+Pool+View',
    imageLarge: 'https://placehold.co/720x480/5a7a6a/ffffff?text=Triple+Pool+View',
    guests: '3',
    area: '18-22 m²',
    description: 'The triple room is spacious, stylishly decorated and features a double bed as well as a sofa bed which can accommodate up to three people. The room also features a spacious closet, mini-fridge, a modern bathroom with a shower, and all the necessary amenities.'
  },
  {
    slug: 'quadruple-studio-upper-floor',
    title: 'Quadruple Studio (Upper Floor)',
    image: 'https://placehold.co/400x280/7a8b7a/ffffff?text=Studio+Upper',
    imageLarge: 'https://placehold.co/720x480/7a8b7a/ffffff?text=Studio+Upper+Floor',
    guests: '4',
    area: '30-35 m²',
    description: 'The quadruple studio is spacious and can accommodate up to four people. Each studio features either a comfortable double bed or two single beds along with two sofa beds. It also includes a small kitchen, a refrigerator, and various cooking utensils.'
  },
  {
    slug: 'quadruple-studio-ground-floor',
    title: 'Quadruple Studio Ground Floor',
    image: 'https://placehold.co/400x280/7a8b7a/ffffff?text=Studio+Ground',
    imageLarge: 'https://placehold.co/720x480/7a8b7a/ffffff?text=Studio+Ground+Floor',
    guests: '4',
    area: '30-35 m²',
    description: 'The quadruple studio is spacious and can accommodate up to four guests. Each studio features either a comfortable double bed or two single beds along with two sofa beds. It also includes a small kitchen, a refrigerator, and various cooking utensils.'
  },
  {
    slug: 'deluxe-triple-suite',
    title: 'Deluxe Triple Suite',
    image: 'https://placehold.co/400x280/6b7a8a/ffffff?text=Deluxe+Suite',
    imageLarge: 'https://placehold.co/720x480/6b7a8a/ffffff?text=Deluxe+Triple+Suite',
    guests: '3',
    area: '40 m²',
    description: 'The deluxe triple suite is spacious and can accommodate up to three people. It features a double bed as well as a sofa bed. It also features a spacious closet, mini-fridge, two modern bathrooms, and all the necessary amenities that will make you feel right at home.'
  }
];
