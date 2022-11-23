export const categories = {
  man: [
    { name: 'sport', selected: false },
    { name: 'business', selected: false },
    { name: 'outdoor', selected: false },
    { name: 'premium', selected: false },
    { name: 'casual', selected: false },
  ],
  woman: [
    { name: 'sport', selected: false },
    { name: 'business', selected: false },
    { name: 'outdoor', selected: false },
    { name: 'casual', selected: false },
  ],
  all: [
    { name: 'sport', selected: false },
    { name: 'business', selected: false },
    { name: 'outdoor', selected: false },
    { name: 'premium', selected: false },
    { name: 'casual', selected: false },
  ],
};

export const brands = {
  man: [
    {
      id: '623457',
      image: '/images/emporio-armani-logo.png',
      model: ['SUPER DELUX'],
      name: 'EA7',
      selected: false,
    },
    {
      id: '111111111',
      image: '/images/nike-logo.webp',
      model: ['REPOSTO'],
      name: 'Nike',
      selected: false,
    },
    {
      id: '222222222222222',
      image: '/images/lacoste-logo.jpg',
      model: ['CROCOS', 'CROCOSSSS'],
      name: 'Lacoste',
      selected: false,
    },
    {
      id: '323451',
      image: '/images/salomon-logo.svg',
      model: ['XT-WINGS 2'],
      name: 'Salomon',
      selected: false,
    },
    {
      id: '46479',
      image: '/images/adidas-logo.svg',
      model: ['MULTIX'],
      name: 'adidas',
      selected: false,
    },
  ],
  woman: [
    {
      id: '59999976',
      image: '/images/puma-logo.jpg',
      model: ['NUCLEUS'],
      name: 'Puma',
      selected: false,
    },
    {
      id: '111111111',
      image: '/images/nike-logo.webp',
      model: ['REPOSTO'],
      name: 'Nike',
      selected: false,
    },
    {
      id: '222222222222222',
      image: '/images/lacoste-logo.jpg',
      model: ['CROCOS', 'CROCOSSSS'],
      name: 'Lacoste',
      selected: false,
    },
    {
      id: '323451',
      image: '/images/salomon-logo.svg',
      model: ['XT-WINGS 2'],
      name: 'Salomon',
      selected: false,
    },
    {
      id: '46479',
      image: '/images/adidas-logo.svg',
      model: ['MULTIX'],
      name: 'adidas',
      selected: false,
    },
  ],
};

export const products = [
  {
    _id: '111111111',
    name: 'REPOSTO',
    category: 'sport',
    image: [
      '/images/product-1-1.jpg',
      '/images/product-1-2.webp',
      '/images/product-1-3.webp',
      '/images/product-1-4.webp',
      '/images/product-1-5.webp',
      '/images/product-1-6.webp',
    ],
    price: 79,
    brand: 'Nike',
    brand_logo: '/images/nike-logo.webp',
    color: 'black',
    rating: 4.5,
    numReviews: 10,
    countInStock: [
      { size: 36, qty: 0 },
      { size: 37, qty: 1 },
      { size: 38, qty: 1 },
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 44, qty: 5 },
      { size: 45, qty: 3 },
    ],
    adding_date: '2022/01/02',
    onSale: 'true',
    sex: 'unisex',
  },
  {
    _id: '222222222222222',
    name: 'CROCOS',
    category: 'business',
    image: ['/images/product-2.jpg'],
    price: 117,
    brand: 'Lacoste',
    brand_logo: '/images/lacoste-logo.jpg',
    color: 'black',
    rating: 4.2,
    numReviews: 3345,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2021/12/02',
    onSale: 'false',
    sex: 'unisex',
  },
  {
    _id: '10123',
    name: 'CROCOSSSS',
    category: 'business',
    image: ['/images/product-2.jpg'],
    price: 117,
    brand: 'Lacoste',
    brand_logo: '/images/lacoste-logo.jpg',
    color: 'black',
    rating: 4.2,
    numReviews: 3345,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2021/12/02',
    onSale: 'false',
    sex: 'unisex',
  },
  {
    _id: '323451',
    name: 'XT-WINGS 2',
    category: 'outdoor',
    image: ['/images/product-3.jpg'],
    price: 129,
    brand: 'Salomon',
    brand_logo: '/images/salomon-logo.svg',
    color: 'black',
    rating: 5.0,
    numReviews: 2345,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2021/11/02',
    onSale: 'false',
    sex: 'unisex',
  },
  {
    _id: '46479',
    name: 'MULTIX',
    category: 'casual',
    image: ['/images/product-4.jpg'],
    price: 89,
    brand: 'adidas',
    brand_logo: '/images/adidas-logo.svg',
    color: 'gray',
    rating: 3.5,
    numReviews: 345,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2021/10/02',
    onSale: 'true',
    sex: 'unisex',
  },
  {
    _id: '59999976',
    name: 'NUCLEUS',
    category: 'sport',
    image: ['/images/product-5.jpg'],
    price: 40,
    brand: 'Puma',
    brand_logo: '/images/puma-logo.jpg',
    color: 'white',
    rating: 2.5,
    numReviews: 35,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2021/09/02',
    onSale: 'true',
    sex: 'woman',
  },
  {
    _id: '623457',
    name: 'SUPER DELUX',
    category: 'premium',
    image: ['/images/product-6.jpg'],
    price: 149,
    brand: 'EA7',
    brand_logo: '/images/emporio-armani-logo.png',
    color: 'black',
    rating: 1.5,
    numReviews: 6665,
    countInStock: [
      { size: 39, qty: 3 },
      { size: 40, qty: 1 },
      { size: 42, qty: 0 },
      { size: 43, qty: 3 },
      { size: 44, qty: 5 },
    ],
    adding_date: '2022/02/02',
    onSale: 'false',
    sex: 'man',
  },
];
