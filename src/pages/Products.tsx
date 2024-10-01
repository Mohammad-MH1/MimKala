import ProductCard from '../components/ProductCard';

const data = [
  {
    id: 25,
    title: 'Stylish Red & Silver Over-Ear Headphones',
    price: 30,
    description:
      'Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.',
    images: ['https://i.imgur.com/YaSqa06.jpeg'],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T12:14:32.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 27,
    title: 'Sleek Smartwatch with Vibrant Display',
    price: 16,
    description:
      'Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.',
    images: ['https://i.imgur.com/ZANVnHE.jpeg'],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T14:59:10.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 29,
    title: 'Mid-Century Modern Wooden Dining Table Updated',
    price: 24,
    description:
      'Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.',
    images: [
      'https://i.imgur.com/DMQHGA0.jpeg',
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/XVp8T1I.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T14:54:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 30,
    title: 'Elegant Golden-Base Stone Top Dining Table',
    price: 66,
    description:
      'Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.',
    images: [
      'https://i.imgur.com/NWIJKUj.jpeg',
      'https://i.imgur.com/Jn1YSLk.jpeg',
      'https://i.imgur.com/VNZRvx5.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-09-30T16:59:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 31,
    title: 'Modern Elegance Teal Armchair',
    price: 25,
    description:
      'Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.',
    images: [
      'https://i.imgur.com/6wkyyIN.jpeg',
      'https://i.imgur.com/Ald3Rec.jpeg',
      'https://i.imgur.com/dIqo03c.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-09-30T16:59:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 25,
    title: 'Stylish Red & Silver Over-Ear Headphones',
    price: 30,
    description:
      'Immerse yourself in superior sound quality with these sleek red and silver over-ear headphones. Designed for comfort and style, the headphones feature cushioned ear cups, an adjustable padded headband, and a detachable red cable for easy storage and portability. Perfect for music lovers and audiophiles who value both appearance and audio fidelity.',
    images: ['https://i.imgur.com/YaSqa06.jpeg'],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T12:14:32.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 27,
    title: 'Sleek Smartwatch with Vibrant Display',
    price: 16,
    description:
      'Experience modern timekeeping with our high-tech smartwatch, featuring a vivid touch screen display, customizable watch faces, and a comfortable blue silicone strap. This smartwatch keeps you connected with notifications and fitness tracking while showcasing exceptional style and versatility.',
    images: ['https://i.imgur.com/ZANVnHE.jpeg'],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T14:59:10.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/ZANVnHE.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 29,
    title: 'Mid-Century Modern Wooden Dining Table Updated',
    price: 24,
    description:
      'Elevate your dining room with this sleek Mid-Century Modern dining table, featuring an elegant walnut finish and tapered legs for a timeless aesthetic. Its sturdy wood construction and minimalist design make it a versatile piece that fits with a variety of decor styles. Perfect for intimate dinners or as a stylish spot for your morning coffee.',
    images: [
      'https://i.imgur.com/DMQHGA0.jpeg',
      'https://i.imgur.com/qrs9QBg.jpeg',
      'https://i.imgur.com/XVp8T1I.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-10-01T14:54:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 30,
    title: 'Elegant Golden-Base Stone Top Dining Table',
    price: 66,
    description:
      'Elevate your dining space with this luxurious table, featuring a sturdy golden metal base with an intricate rod design that provides both stability and chic elegance. The smooth stone top in a sleek round shape offers a robust surface for your dining pleasure. Perfect for both everyday meals and special occasions, this table easily complements any modern or glam decor.',
    images: [
      'https://i.imgur.com/NWIJKUj.jpeg',
      'https://i.imgur.com/Jn1YSLk.jpeg',
      'https://i.imgur.com/VNZRvx5.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-09-30T16:59:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
  {
    id: 31,
    title: 'Modern Elegance Teal Armchair',
    price: 25,
    description:
      'Elevate your living space with this beautifully crafted armchair, featuring a sleek wooden frame that complements its vibrant teal upholstery. Ideal for adding a pop of color and contemporary style to any room, this chair provides both superb comfort and sophisticated design. Perfect for reading, relaxing, or creating a cozy conversation nook.',
    images: [
      'https://i.imgur.com/6wkyyIN.jpeg',
      'https://i.imgur.com/Ald3Rec.jpeg',
      'https://i.imgur.com/dIqo03c.jpeg',
    ],
    creationAt: '2024-09-30T16:59:20.000Z',
    updatedAt: '2024-09-30T16:59:20.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/Qphac99.jpeg',
      creationAt: '2024-09-30T16:59:20.000Z',
      updatedAt: '2024-09-30T16:59:20.000Z',
    },
  },
];

function Products() {
  return (
    <section>
      <ul className='grid grid-cols-5 gap-x-4 gap-y-10'>
        {data.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ul>
    </section>
  );
}

export default Products;
