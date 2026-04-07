export const products = [
  // ================= BITE PRODUCTS =================
  {
    id: 'Strawberry-delight',
    name: 'Strawberry Wafer Bites',
    category: 'Signature Wafer Bites',
    description: 'Strawberry cream filling sandwiched between light crispy layers.',
    fullDescription: 'A fruity burst of strawberry cream layered between delicate crispy wafers. Perfectly balanced sweetness with a refreshing finish.',
    color: '#ff4d6d',
    image: '/bitesstr.png',
    features: ['Strawberry Flavor', 'Crispy Layers', 'Light Snack']
  },
  {
    id: 'Chocolate-delight',
    name: 'Chocolate Wafer Bites',
    category: 'Signature Wafer Bites',
    description: 'Smooth chocolate cream filling.',
    fullDescription: 'Rich and creamy chocolate filling layered with crispy wafers, delivering a satisfying crunch with every bite.',
    color: '#5a3e36',
    image: '/bitescho.png',
    features: ['Chocolate Flavor', 'Crispy Layers', 'Rich Taste']
  },

  // ================= WAFER CONES =================
  {
    id: 'cone-orange',
    name: 'Orange Wafer Cone',
    category: 'Classic Wafer Cones',
    description: 'Zesty orange flavored wafer cone.',
    fullDescription: 'A refreshing citrus twist with crispy wafer cone filled with smooth orange cream.',
    color: '#ffa500',
    image: '/waferconeorng.png',
    features: ['Citrus Flavor', 'Crispy Cone', 'Refreshing Taste']
  },
  {
    id: 'cone-strawberry',
    name: 'Strawberry Wafer Cone',
    category: 'Classic Wafer Cones',
    description: 'Sweet strawberry flavored cone.',
    fullDescription: 'Delicious strawberry cream packed inside a crunchy wafer cone.',
    color: '#ff6f91',
    image: '/conestr.png',
    features: ['Strawberry Flavor', 'Crispy Cone', 'Sweet Taste']
  },
  {
    id: 'cone-chocolate',
    name: 'Chocolate Wafer Cone',
    category: 'Classic Wafer Cones',
    description: 'Classic chocolate cone delight.',
    fullDescription: 'Rich chocolate cream filling in a crunchy wafer cone for chocolate lovers.',
    color: '#6b4226',
    image: '/waferconecho.png',
    features: ['Chocolate Flavor', 'Crunchy Cone', 'Rich Taste']
  },
  {
    id: 'cone-kesar-pista',
    name: 'Kesar Pista Wafer Cone',
    category: 'Classic Wafer Cones',
    description: 'Royal kesar pista flavored cone.',
    fullDescription: 'A luxurious blend of saffron and pista in a crispy wafer cone.',
    color: '#86b615a1',
    image: '/conepista.png',
    features: ['Kesar Flavor', 'Pista Blend', 'Premium Taste']
  },

  // ================= WAFER ROLLS =================
  {
    id: 'roll-strawberry',
    name: 'Strawberry Wafer Roll',
    category: 'Wafer Rolls',
    description: 'Strawberry cream filled crispy rolls.',
    fullDescription: 'Crunchy wafer rolls filled with smooth strawberry cream.',
    color: '#ff85a2',
    image: '/waferRoll.png',
    features: ['Strawberry Flavor', 'Crunchy Roll', 'Light Snack']
  },
  {
    id: 'roll-chocolate',
    name: 'Chocolate Wafer Roll',
    category: 'Wafer Rolls',
    description: 'Chocolate filled crispy wafer rolls.',
    fullDescription: 'Crispy wafer rolls filled with rich chocolate cream.',
    color: '#4e342e',
    image: '/waferRoll.png',
    features: ['Chocolate Flavor', 'Crunchy Roll', 'Rich Taste']
  },

  // ================= CHOCOHOLIC =================
  {
    id: 'chocoholic-30',
    name: 'Chocoholic Wafer (30 pcs)',
    category: 'Dark Chocolate Wafer',
    description: 'Dark chocolate coated wafer pack of 30.',
    fullDescription: 'Premium dark chocolate coated wafers in a large family pack.',
    color: '#2c2c2c',
    image: '/chocoholidbig.png',
    features: ['Dark Chocolate', '30 Pieces', 'Premium Quality']
  },
  {
    id: 'chocoholic-10',
    name: 'Chocoholic Mini Box (10 pcs)',
    category: 'Dark Chocolate Wafer',
    description: 'Mini pack of dark chocolate wafers.',
    fullDescription: 'Compact box of 10 dark chocolate coated wafers for quick cravings.',
    color: '#3a3a3a',
    image: '/chocoholicMini.png',
    features: ['Dark Chocolate', '10 Pieces', 'Mini Pack']
  },

  // ================= DINGWANI WAFER =================
  {
    id: 'dingwani-orange',
    name: 'Dingwani Wafer Orange',
    category: 'Dingwani Wafer',
    description: 'Mini orange wafer bites.',
    fullDescription: 'Box of 8 mini orange flavored wafer pieces.',
    color: '#ffa500',
    image: '/wafer_orange.png',
    features: ['Orange Flavor', '8 Pieces', 'Mini Bites']
  },
  {
    id: 'dingwani-strawberry',
    name: 'Dingwani Wafer Pineapple',
    category: 'Dingwani Wafer',
    description: 'Mini strawberry wafer bites.',
    fullDescription: 'Box of 8 mini strawberry flavored wafer pieces.',
    color: '#ff6f91',
    image: '/wafer_pine.png',
    features: ['Strawberry Flavor', '8 Pieces', 'Mini Bites']
  },
  {
    id: 'dingwani-chocolate',
    name: 'Dingwani Wafer Chocolate',
    category: 'Dingwani Wafer',
    description: 'Mini chocolate wafer bites.',
    fullDescription: 'Box of 8 mini chocolate flavored wafer pieces.',
    color: '#6b4226',
    image: '/wafer_chocolate.png',
    features: ['Chocolate Flavor', '8 Pieces', 'Mini Bites']
  },
  {
    id: 'dingwani-kesar-pista',
    name: 'Dingwani Wafer Kesar Pista',
    category: 'Dingwani Wafer',
    description: 'Mini kesar pista wafer bites.',
    fullDescription: 'Box of 8 mini kesar pista flavored wafer pieces.',
    color: '#c9a227',
    image: '/wafer_pista.png',
    features: ['Kesar Pista', '8 Pieces', 'Mini Bites']
  },

  // ================= CHOCOPEANUT =================
  {
    id: 'chocopeanut',
    name: 'Choco Peanut',
    category: 'Snacks',
    description: 'Chocolate coated peanuts.',
    fullDescription: 'Crunchy peanuts coated with smooth chocolate for a perfect sweet and salty combo.',
    color: '#5c4033',
    image: '/Chocopeanut.png',
    features: ['Chocolate Coated', 'Crunchy Peanut', 'Sweet & Salty']
  }
];

export const categories = [
  {
    title: 'Signature Wafer Bites',
    itemIds: ['Strawberry-delight', 'Chocolate-delight']
  },
  {
    title: 'Classic Wafer Cones',
    itemIds: ['cone-orange', 'cone-strawberry', 'cone-chocolate', 'cone-kesar-pista']
  },
  {
    title: 'Wafer Rolls',
    itemIds: ['roll-strawberry', 'roll-chocolate']
  },
  {
    title: 'Dark Chocolate Wafer',
    itemIds: ['chocoholic-30', 'chocoholic-10']
  },
  {
    title: 'Dingwani Wafer',
    itemIds: ['dingwani-orange', 'dingwani-strawberry', 'dingwani-chocolate', 'dingwani-kesar-pista']
  },
  {
    title: 'Snacks',
    itemIds: ['chocopeanut']
  }
];