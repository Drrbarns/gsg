import { ShoppingBag, Users, Shield, MapPin, TrendingUp, Clock, Globe, Lightbulb, Target, Heart } from 'lucide-react';

export const businessUnits = [
    {
        title: 'Convenience Goods',
        description: 'Your one-stop shop for everyday essentials, groceries, household items, and personal care products. We bring quality products to your doorstep with fast delivery and competitive pricing.',
        icon: ShoppingBag,
        url: 'https://goods.gsgbrands.com.gh',
        active: true,
        category: 'Shopping',
        features: ['Fast Delivery', 'Quality Products', 'Competitive Prices', 'Wide Selection'],
    },
    {
        title: 'My Personal Shopper',
        description: 'Experience personalized shopping assistance with our dedicated team. We help you find exactly what you need, compare prices, and make informed purchasing decisions.',
        icon: Users,
        url: 'https://shopper.gsgbrands.com.gh',
        active: true,
        category: 'Services',
        features: ['Personal Assistant', 'Price Comparison', 'Expert Advice', 'Time Saving'],
    },
    {
        title: 'Sell-Safe Buy-Safe Marketplace',
        description: 'A secure platform connecting buyers and sellers across Ghana. Trade with confidence knowing every transaction is protected by our verification and security measures.',
        icon: Shield,
        url: 'https://sellbuysafe.gsg-brands.com',
        active: true,
        category: 'Marketplace',
        features: ['Verified Sellers', 'Secure Payments', 'Buyer Protection', 'Wide Categories'],
    },
    {
        title: 'StreetCuisine By GSG',
        description: 'Discover authentic Ghanaian street food and local delicacies delivered fresh to your location. Supporting local food vendors while ensuring quality and hygiene standards.',
        icon: ShoppingBag,
        url: '/street-cuisine',
        active: true,
        category: 'Food',
        features: ['Local Cuisine', 'Fresh Delivery', 'Verified Vendors', 'Hygiene Standards'],
    },
    {
        title: 'Courier & Delivery By GSG',
        description: 'Reliable courier and delivery services across Ghana. From documents to packages, we ensure your items reach their destination safely and on time.',
        icon: MapPin,
        url: '/courier-delivery',
        active: true,
        category: 'Logistics',
        features: ['Fast Delivery', 'Package Tracking', 'Nationwide Coverage', 'Secure Handling'],
    },
    {
        title: 'Affiliates',
        description: 'Join our growing network of partners and affiliates. Earn commissions by promoting GSG Brands services and help us expand our reach across Ghana.',
        icon: TrendingUp,
        url: '/affiliates',
        active: true,
        comingSoon: false,
        category: 'Partnership',
        features: ['Commission Earnings', 'Marketing Support', 'Growth Opportunities', 'Partner Network'],
    },
];

export const newsArticles = [
    {
        slug: 'gsg-brands-expands-service-coverage',
        title: 'GSG Brands Expands Service Coverage Across Ghana',
        category: 'Announcements',
        date: '2024-01-15',
        excerpt: 'We are thrilled to announce the expansion of our service coverage to include more regions across Ghana, bringing our comprehensive ecosystem of services to even more communities.',
        content: `
      <p>We are thrilled to announce the expansion of our service coverage to include more regions across Ghana, bringing our comprehensive ecosystem of services to even more communities.</p>
      <h2>Expanding Our Reach</h2>
      <p>This expansion marks a significant milestone in our mission to make quality services accessible to all Ghanaians. We have established new logistics hubs in Kumasi and Takoradi to ensure faster delivery times and better service reliability.</p>
      <h2>What This Means for You</h2>
      <ul>
        <li><strong>Faster Delivery:</strong> Reduced delivery times for customers in the new regions.</li>
        <li><strong>Wider Availability:</strong> Access to our full range of products and services.</li>
        <li><strong>Local Support:</strong> Dedicated customer support teams in key locations.</li>
      </ul>
      <p>We are committed to continuing this growth and bringing GSG Brands to every corner of the country.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=modern%20african%20business%20expansion%20map%20ghana%20regions%20network%20growth%20professional%20corporate%20photography%20vibrant%20colors%20optimistic%20atmosphere%20business%20development%20success%20story&width=1200&height=600&seq=news-001&orientation=landscape',
    },
    {
        slug: 'new-partnership-local-vendors',
        title: 'New Partnership with Local Vendors Strengthens Marketplace',
        category: 'Updates',
        date: '2024-01-10',
        excerpt: 'GSG Brands announces strategic partnerships with verified local vendors to enhance our Sell-Safe Buy-Safe Marketplace, offering customers more choices and better value.',
        content: `
      <p>GSG Brands announces strategic partnerships with verified local vendors to enhance our Sell-Safe Buy-Safe Marketplace, offering customers more choices and better value.</p>
      <h2>Empowering Local Businesses</h2>
      <p>Our goal is to support local entrepreneurs by providing them with a platform to reach a wider audience. We have onboarded over 500 new vendors across various categories, including fashion, electronics, and home goods.</p>
      <h2>Quality Assurance</h2>
      <p>All new vendors undergo a rigorous verification process to ensure they meet our quality and service standards. This guarantees that our customers can shop with confidence.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=african%20marketplace%20vendors%20partnership%20handshake%20business%20collaboration%20local%20entrepreneurs%20ghana%20commerce%20community%20professional%20photography%20warm%20lighting%20authentic&width=1200&height=600&seq=news-002&orientation=landscape',
    },
    {
        slug: 'customer-satisfaction-reaches-98-percent',
        title: 'Customer Satisfaction Reaches 98% Milestone',
        category: 'Press',
        date: '2024-01-05',
        excerpt: 'Our commitment to excellence continues to deliver outstanding results as customer satisfaction ratings reach an impressive 98%, reflecting our dedication to quality service.',
        content: `
      <p>Our commitment to excellence continues to deliver outstanding results as customer satisfaction ratings reach an impressive 98%, reflecting our dedication to quality service.</p>
      <h2>A Testament to Our Team</h2>
      <p>This achievement is a direct result of the hard work and dedication of our customer experience team. We have implemented new training programs and feedback loops to ensure we are always improving.</p>
      <h2>Listening to Our Customers</h2>
      <p>We actively listen to customer feedback and use it to drive our decision-making process. Thank you to all our customers for their trust and support.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=happy%20satisfied%20african%20customers%20smiling%20positive%20feedback%20testimonials%20customer%20service%20excellence%20ghana%20professional%20photography%20bright%20cheerful%20atmosphere%20success%20celebration&width=1200&height=600&seq=news-003&orientation=landscape',
    },
    {
        slug: 'how-to-use-personal-shopper-service',
        title: 'How to Make the Most of Our Personal Shopper Service',
        category: 'Guides',
        date: '2023-12-28',
        excerpt: 'Learn how to leverage our Personal Shopper service to save time, compare prices effectively, and make informed purchasing decisions with expert assistance.',
        content: `
      <p>Learn how to leverage our Personal Shopper service to save time, compare prices effectively, and make informed purchasing decisions with expert assistance.</p>
      <h2>1. Define Your Needs</h2>
      <p>Be as specific as possible about what you are looking for. Include details like brand, size, color, and budget.</p>
      <h2>2. Connect with an Expert</h2>
      <p>Our personal shoppers are experts in their fields. Don't hesitate to ask for recommendations or advice.</p>
      <h2>3. Enjoy the Convenience</h2>
      <p>Sit back and relax while we handle the sourcing, purchasing, and delivery of your items.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=personal%20shopping%20assistant%20helping%20customer%20african%20woman%20professional%20service%20guidance%20shopping%20bags%20retail%20experience%20ghana%20modern%20lifestyle%20convenience&width=1200&height=600&seq=news-004&orientation=landscape',
    },
    {
        slug: 'streetcuisine-launch-announcement',
        title: 'StreetCuisine By GSG: Coming Soon to Your Neighborhood',
        category: 'Announcements',
        date: '2023-12-20',
        excerpt: 'Get ready for authentic Ghanaian street food delivered fresh to your doorstep. StreetCuisine By GSG is launching soon, bringing local flavors with quality assurance.',
        content: `
      <p>Get ready for authentic Ghanaian street food delivered fresh to your doorstep. StreetCuisine By GSG is launching soon, bringing local flavors with quality assurance.</p>
      <h2>Authentic Flavors, Modern Convenience</h2>
      <p>We are partnering with the best local food vendors to bring you your favorite dishes, prepared with care and delivered with speed.</p>
      <h2>Hygiene First</h2>
      <p>All our vendor partners undergo strict hygiene training and inspections to ensure your food is safe and delicious.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=delicious%20ghanaian%20street%20food%20local%20cuisine%20authentic%20dishes%20colorful%20presentation%20traditional%20african%20food%20culture%20appetizing%20fresh%20ingredients%20culinary%20heritage&width=1200&height=600&seq=news-005&orientation=landscape',
    },
    {
        slug: 'secure-shopping-tips',
        title: 'Top 5 Tips for Secure Online Shopping in Ghana',
        category: 'Guides',
        date: '2023-12-15',
        excerpt: 'Stay safe while shopping online with these essential security tips. Learn how to identify verified sellers, protect your payment information, and shop with confidence.',
        content: `
      <p>Stay safe while shopping online with these essential security tips. Learn how to identify verified sellers, protect your payment information, and shop with confidence.</p>
      <h2>1. Shop from Trusted Sites</h2>
      <p>Only shop on websites with a secure connection (https) and a good reputation.</p>
      <h2>2. Verify Sellers</h2>
      <p>Check ratings and reviews before making a purchase from a third-party seller.</p>
      <h2>3. Protect Your Date</h2>
      <p>Never share your password or financial information over email or social media.</p>
    `,
        image: 'https://readdy.ai/api/search-image?query=online%20shopping%20security%20digital%20safety%20african%20person%20using%20smartphone%20secure%20payment%20protection%20technology%20ghana%20modern%20lifestyle%20cybersecurity%20awareness%20professional&width=1200&height=600&seq=news-006&orientation=landscape',
    },
];

export const aidFocusAreas = [
    {
        title: 'Community Support',
        description: 'Providing essential resources and assistance to underserved communities across Ghana',
        icon: Users,
    },
    {
        title: 'Education & Training',
        description: 'Empowering individuals through skills development and educational programs',
        icon: Lightbulb,
    },
    {
        title: 'Economic Empowerment',
        description: 'Supporting local entrepreneurs and small businesses to create sustainable livelihoods',
        icon: Target,
    },
    {
        title: 'Social Impact',
        description: 'Creating positive change through strategic partnerships and community initiatives',
        icon: Globe,
    },
];

export const features = [
    {
        title: 'Trust & Security',
        description: 'Verified services and secure transactions for peace of mind',
        icon: Shield,
    },
    {
        title: 'Speed & Efficiency',
        description: 'Quick delivery and responsive service when you need it',
        icon: Clock,
    },
    {
        title: 'Value for Money',
        description: 'Competitive pricing and quality products that save you money',
        icon: TrendingUp,
    },
    {
        title: 'Customer Care',
        description: '24/7 support through WhatsApp, Telegram, and phone',
        icon: Users,
    },
];
