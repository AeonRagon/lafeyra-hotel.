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
    image: 'images-resized/double-room-sea-view/ROOM%20205%20(9).jpg',
    imageLarge: 'images-resized/double-room-sea-view/ROOM%20205%20(9).jpg',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'double-room-pool-view',
    title: 'Double Room Pool View',
    image: 'images-resized/double-room-pool-view/ROOM%20103%20(2).jpg',
    imageLarge: 'images-resized/double-room-pool-view/ROOM%20103%20(2).jpg',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'double-room-mountain-view',
    title: 'Double Room Mountain View',
    image: 'images-resized/double-room-mountain-view/ROOM%20206%20(2).jpg',
    imageLarge: 'images-resized/double-room-mountain-view/ROOM%20206%20(2).jpg',
    guests: '2',
    area: '18-22 m²',
    description: 'The double room has stylish decoration and is ideal for couples since it can accommodate up to two people. The room features a double bed, mini-fridge, a modern bathroom with a shower and all the necessary amenities that will make your stay comfortable.'
  },
  {
    slug: 'triple-room-sea-view',
    title: 'Triple Room Sea View',
    image: 'images-resized/triple-room-sea-view/ROOM%20202%20(2).jpg',
    imageLarge: 'images-resized/triple-room-sea-view/ROOM%20202%20(2).jpg',
    guests: '3',
    area: '18-22 m²',
    description: 'The triple room is spacious, stylishly decorated, and features a double bed as well as a sofa bed which can accommodate up to three people. The room also features a spacious living area, mini-fridge, a modern bathroom with a shower, and all the necessary amenities.'
  },
  {
    slug: 'triple-room-pool-view',
    title: 'Triple Room Pool View',
    image: 'images-resized/triple-room-pool-view/ROOM%20102%20(3).jpg',
    imageLarge: 'images-resized/triple-room-pool-view/ROOM%20102%20(3).jpg',
    guests: '3',
    area: '18-22 m²',
    description: 'The triple room is spacious, stylishly decorated and features a double bed as well as a sofa bed which can accommodate up to three people. The room also features a spacious closet, mini-fridge, a modern bathroom with a shower, and all the necessary amenities.'
  },
  {
    slug: 'quadruple-studio-upper-floor',
    title: 'Quadruple Studio (Upper Floor)',
    image: 'images-resized/quadruple-studio-upper-floor/IMG_7831.jpg',
    imageLarge: 'images-resized/quadruple-studio-upper-floor/IMG_7831.jpg',
    guests: '4',
    area: '30-35 m²',
    description: 'The quadruple studio is spacious and can accommodate up to four people. Each studio features either a comfortable double bed or two single beds along with two sofa beds. It also includes a small kitchen, a refrigerator, and various cooking utensils.'
  },
  {
    slug: 'quadruple-studio-ground-floor',
    title: 'Quadruple Studio Ground Floor',
    image: 'images-resized/quadruple-studio-ground-floor/IMG_7834.jpg',
    imageLarge: 'images-resized/quadruple-studio-ground-floor/IMG_7834.jpg',
    guests: '4',
    area: '30-35 m²',
    description: 'The quadruple studio is spacious and can accommodate up to four guests. Each studio features either a comfortable double bed or two single beds along with two sofa beds. It also includes a small kitchen, a refrigerator, and various cooking utensils.'
  },
  {
    slug: 'deluxe-triple-suite',
    title: 'Deluxe Triple Suite',
    image: 'images-resized/deluxe-triple-suite/IMG_7920.jpg',
    imageLarge: 'images-resized/deluxe-triple-suite/IMG_7920.jpg',
    guests: '3',
    area: '40 m²',
    description: 'The deluxe triple suite is spacious and can accommodate up to three people. It features a double bed as well as a sofa bed. It also features a spacious closet, mini-fridge, two modern bathrooms, and all the necessary amenities that will make you feel right at home.'
  }
];
