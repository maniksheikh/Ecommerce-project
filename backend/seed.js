require('dotenv').config();
const getMongoConnection = require('./services/mongo-crud');

const sampleProducts = [
    // Electronics
    {
        name: 'AirPods Pro Max — Active Noise Cancellation',
        category: 'Electronics',
        emoji: '🎧',
        price: '249',
        originalPrice: '299',
        badge: 'Sale',
        badgeClass: 'bg-red-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-blue-900/40 to-violet-900/40',
        rating: 5,
        reviews: '1.2k'
    },
    {
        name: 'Galaxy S25 Ultra Smartphone 512GB',
        category: 'Electronics',
        emoji: '📱',
        price: '999',
        originalPrice: '1199',
        badge: 'Hot',
        badgeClass: 'bg-orange-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-gray-800/60 to-gray-900/60',
        rating: 5,
        reviews: '2.1k'
    },
    {
        name: 'MacBook Pro 14" M3 Chip',
        category: 'Electronics',
        emoji: '💻',
        price: '1599',
        originalPrice: null,
        badge: 'New',
        badgeClass: 'bg-green-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-slate-800/60 to-slate-900/60',
        rating: 5,
        reviews: '850'
    },
    {
        name: 'Sony WH-1000XM5 Wireless Headphones',
        category: 'Electronics',
        emoji: '🎧',
        price: '348',
        originalPrice: '399',
        badge: 'Best Seller',
        badgeClass: 'bg-indigo-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-blue-900/30 to-indigo-900/40',
        rating: 5,
        reviews: '4.5k'
    },

    // Fashion
    {
        name: 'Leather Crossbody Handbag — Premium',
        category: 'Fashion',
        emoji: '👜',
        price: '89',
        originalPrice: null,
        badge: null,
        badgeClass: '',
        imageBg: 'bg-gradient-to-br from-amber-900/30 to-yellow-900/30',
        rating: 4,
        reviews: '544'
    },
    {
        name: 'Floral Maxi Dress — Summer Collection',
        category: 'Fashion',
        emoji: '👗',
        price: '59',
        originalPrice: '79',
        badge: 'Sale',
        badgeClass: 'bg-pink-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-pink-900/30 to-fuchsia-900/30',
        rating: 4,
        reviews: '321'
    },
    {
        name: 'Men\'s Slim Fit Denim Jacket',
        category: 'Fashion',
        emoji: '🧥',
        price: '45',
        originalPrice: '65',
        badge: 'Limited',
        badgeClass: 'bg-purple-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-blue-800/30 to-blue-900/40',
        rating: 4,
        reviews: '120'
    },
    {
        name: 'Classic Aviator Sunglasses',
        category: 'Fashion',
        emoji: '🕶️',
        price: '25',
        originalPrice: null,
        badge: 'Hot',
        badgeClass: 'bg-orange-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-gray-700/40 to-gray-800/50',
        rating: 4,
        reviews: '2.3k'
    },

    // Footwear
    {
        name: 'Nike Air Max 2026 Running Shoes',
        category: 'Footwear',
        emoji: '👟',
        price: '129',
        originalPrice: null,
        badge: 'New',
        badgeClass: 'bg-green-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-orange-900/30 to-red-900/30',
        rating: 4,
        reviews: '896'
    },
    {
        name: 'Adidas Ultraboost 24 Performance',
        category: 'Footwear',
        emoji: '🥿',
        price: '169',
        originalPrice: null,
        badge: 'New',
        badgeClass: 'bg-green-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-green-900/30 to-teal-900/30',
        rating: 4,
        reviews: '678'
    },
    {
        name: 'Classic White Canvas Sneakers',
        category: 'Footwear',
        emoji: '👟',
        price: '40',
        originalPrice: '55',
        badge: 'Sale',
        badgeClass: 'bg-red-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-gray-200/20 to-gray-300/30',
        rating: 4,
        reviews: '1.5k'
    },
    {
        name: 'Formal Leather Oxford Shoes',
        category: 'Footwear',
        emoji: '👞',
        price: '95',
        originalPrice: null,
        badge: 'Best Seller',
        badgeClass: 'bg-indigo-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-amber-800/20 to-amber-900/30',
        rating: 5,
        reviews: '430'
    },

    // Home
    {
        name: 'Smart LED Desk Lamp',
        category: 'Home',
        emoji: '💡',
        price: '35',
        originalPrice: '49',
        badge: 'Hot',
        badgeClass: 'bg-orange-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-yellow-800/20 to-yellow-900/30',
        rating: 4,
        reviews: '210'
    },
    {
        name: 'Orthopedic Memory Foam Pillow',
        category: 'Home',
        emoji: '🛌',
        price: '55',
        originalPrice: null,
        badge: 'New',
        badgeClass: 'bg-green-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-blue-700/20 to-blue-800/30',
        rating: 5,
        reviews: '150'
    },
    {
        name: 'Ceramic Essential Oil Diffuser',
        category: 'Home',
        emoji: '🕯️',
        price: '28',
        originalPrice: '35',
        badge: 'Sale',
        badgeClass: 'bg-red-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-teal-800/20 to-teal-900/30',
        rating: 4,
        reviews: '340'
    },
    {
        name: 'Modern Wall Clock Silver',
        category: 'Home',
        emoji: '⏰',
        price: '18',
        originalPrice: null,
        badge: null,
        badgeClass: '',
        imageBg: 'bg-gradient-to-br from-gray-600/20 to-gray-700/30',
        rating: 4,
        reviews: '85'
    },

    // Beauty
    {
        name: 'Luxury Skincare Gift Set — 12 Pieces',
        category: 'Beauty',
        emoji: '🧴',
        price: '79',
        originalPrice: '120',
        badge: 'Sale',
        badgeClass: 'bg-red-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-rose-900/30 to-pink-900/40',
        rating: 5,
        reviews: '892'
    },
    {
        name: 'Professional Hair Dryer Brush',
        category: 'Beauty',
        emoji: '💇',
        price: '42',
        originalPrice: '59',
        badge: 'Best Seller',
        badgeClass: 'bg-indigo-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-purple-800/20 to-purple-900/30',
        rating: 5,
        reviews: '1.8k'
    },
    {
        name: 'Organic Face Serum Vitamin C',
        category: 'Beauty',
        emoji: '🧪',
        price: '24',
        originalPrice: null,
        badge: 'New',
        badgeClass: 'bg-green-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-teal-700/20 to-teal-800/30',
        rating: 4,
        reviews: '670'
    },
    {
        name: 'Matte Liquid Lipstick Set',
        category: 'Beauty',
        emoji: '💄',
        price: '32',
        originalPrice: '45',
        badge: 'Limited',
        badgeClass: 'bg-purple-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-red-800/20 to-red-900/30',
        rating: 4,
        reviews: '230'
    },

    // Sports
    {
        name: 'Quick-Dry Yoga Mat Premium',
        category: 'Sports',
        emoji: '🧘',
        price: '48',
        originalPrice: null,
        badge: 'Hot',
        badgeClass: 'bg-orange-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-blue-800/20 to-blue-900/30',
        rating: 5,
        reviews: '410'
    },
    {
        name: 'Adjustable Dumbbell Set 20kg',
        category: 'Sports',
        emoji: '🏋️',
        price: '110',
        originalPrice: '140',
        badge: 'Sale',
        badgeClass: 'bg-red-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-gray-800/40 to-gray-900/50',
        rating: 5,
        reviews: '120'
    },
    {
        name: 'Water-Resistant Hiking Backpack',
        category: 'Sports',
        emoji: '🎒',
        price: '65',
        originalPrice: null,
        badge: 'Best Seller',
        badgeClass: 'bg-indigo-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-green-800/20 to-green-900/30',
        rating: 4,
        reviews: '560'
    },
    {
        name: 'Smart Fitness Tracker Band',
        category: 'Sports',
        emoji: '⌚',
        price: '38',
        originalPrice: '55',
        badge: 'Limited',
        badgeClass: 'bg-purple-500/80 text-white',
        imageBg: 'bg-gradient-to-br from-cyan-800/20 to-cyan-900/30',
        rating: 4,
        reviews: '890'
    }
];

async function seed() {
    let client, db;
    try {
        const connection = await getMongoConnection();
        client = connection.client;
        db = connection.db;

        console.log('Connected to MongoDB for seeding...');

        // Clear existing products
        await db.collection('products').deleteMany({});
        console.log('Cleared existing products.');

        // Insert sample products
        const result = await db.collection('products').insertMany(sampleProducts);
        console.log(`${result.insertedCount} products seeded successfully!`);

    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        if (client) await client.close();
        process.exit();
    }
}

seed();
