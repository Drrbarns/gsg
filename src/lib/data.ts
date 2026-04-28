import { ShoppingBag, Users, Shield, MapPin, TrendingUp, Clock, Globe, Lightbulb, Target, Heart } from 'lucide-react';

export const businessUnits = [
    {
        title: 'Convenience Goods & More',
        description: 'Your one-stop shop for everyday essentials, groceries, household items, and personal care products. We bring quality products to your doorstep with fast delivery and competitive pricing.',
        icon: ShoppingBag,
        url: 'https://goods.gsgbrands.com.gh',
        active: true,
        category: 'E-commerce',
        features: ['Fast Delivery', 'Quality Products', 'Competitive Prices', 'Wide Selection'],
    },
    {
        title: 'Personal Shopper',
        description: 'Experience personalized shopping assistance with our dedicated team. We help you find exactly what you need, compare prices, and make informed purchasing decisions. We shop from traditional markets like Makola Market (Accra), Adabrakah Fish Market, Bawjiase Market, wholesale stores, and non-traditional markets. From the minutest to the largest item.',
        icon: Users,
        url: 'https://shopper.gsgbrands.com.gh',
        active: true,
        category: 'Personal-Shopping',
        features: ['Personal Assistant', 'Time Saving', 'Money Saving', 'Exceeding Expectations'],
    },
    {
        title: 'Sell-Safe Buy-Safe Marketplace',
        description: 'Do goods or services transactions on any marketplace/e-commerce platform, social media, website, or physical channel without fear of scams. Buyer concern: "What if I pay and you do not deliver?" Seller concern: "What if I deliver and you do not show up?" Our process enforces fairness for both sides with secure and approved payment gateway integration. Ts & Cs apply.',
        icon: Shield,
        url: 'https://sellbuysafe.gsgbrands.com.gh',
        active: true,
        category: 'Marketplace',
        features: ['All Marketplaces', 'Buyer Protected', 'Seller Protected', 'Tracking Available'],
    },
    {
        title: 'StreetCuisine',
        description: 'Discover authentic Ghanaian street food and local delicacies delivered fresh to your location. Supporting local food vendors while ensuring quality and hygiene standards.',
        icon: ShoppingBag,
        url: 'https://cuisine.gsgbrands.com.gh',
        active: true,
        category: 'Food',
        features: ['Local Cuisine', 'Fresh Delivery', 'Verified Vendors', 'Hygiene Standards'],
    },
    {
        title: 'Courier',
        description: 'Reliable courier and delivery services across Ghana. From documents to packages, we ensure your items reach their destination safely and on time.',
        icon: MapPin,
        url: 'https://courier.gsgbrands.com.gh',
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
      <p class="lead">We are thrilled to announce a major milestone in our journey: the expansion of GSG Brands' service coverage to include multiple new regions across Ghana. This move brings our comprehensive ecosystem of services—from Convenience Goods to Courier logistics—directly to the doorsteps of even more communities.</p>
      
      <h2>Expanding Our Reach to Meet Your Needs</h2>
      <p>This strategic expansion marks a significant step forward in our core mission: making high-quality, reliable, and affordable services accessible to all Ghanaians. As part of this rollout, we have successfully established cutting-edge logistics hubs in both <strong>Kumasi</strong> and <strong>Takoradi</strong>. These new centers are designed to drastically reduce delivery times, enhance service reliability, and create hundreds of local jobs.</p>
      
      <blockquote>"Our vision has always been to bridge the gap between quality service and accessibility. By expanding to these key regions, we are not just growing our footprint; we are empowering local economies and saving our customers valuable time and money." — The GSG Brands Leadership Team</blockquote>

      <h2>What This Means for Our Customers</h2>
      <p>If you reside in our newly covered areas, here is what you can expect starting today:</p>
      <ul>
        <li><strong>Lightning-Fast Delivery:</strong> Experience significantly reduced wait times for all Convenience Goods and Courier services.</li>
        <li><strong>Full Ecosystem Access:</strong> Gain immediate access to our complete range of products, including the highly anticipated StreetCuisine and our Sell-Safe Buy-Safe Marketplace.</li>
        <li><strong>Dedicated Local Support:</strong> Enjoy peace of mind with customer support teams based right in your region, ready to assist you in real-time.</li>
      </ul>
      
      <h2>Looking Ahead</h2>
      <p>We are incredibly grateful for the trust and loyalty our customers have shown us, which has made this rapid growth possible. However, this is just the beginning. We remain deeply committed to continuing this upward trajectory, with plans to bring the GSG Brands standard of excellence to every single corner of the country over the next 24 months.</p>
      <p>Stay tuned for more updates as we continue to build a brighter, more connected Ghana.</p>
    `,
        image: '/news/news-expansion.webp',
    },
    {
        slug: 'new-partnership-local-vendors',
        title: 'New Partnership with Local Vendors Strengthens Marketplace',
        category: 'Updates',
        date: '2024-01-10',
        excerpt: 'GSG Brands announces strategic partnerships with verified local vendors to enhance our Sell-Safe Buy-Safe Marketplace, offering customers more choices and better value.',
        content: `
      <p class="lead">In our ongoing effort to revolutionize digital commerce in Ghana, GSG Brands is proud to announce a series of strategic partnerships with top-tier, verified local vendors. This initiative is set to massively enhance our Sell-Safe Buy-Safe Marketplace.</p>
      
      <h2>Empowering Local Businesses, Empowering You</h2>
      <p>Our ultimate goal has always been dual-purpose: to provide unparalleled value to our buyers while simultaneously supporting local entrepreneurs by giving them a robust, secure platform to reach a national audience. Over the past quarter, we have successfully onboarded over <strong>500 new vendors</strong> across a diverse array of categories, including cutting-edge electronics, high-quality fashion, and essential home goods.</p>
      
      <p>By bringing these vendors into the GSG ecosystem, we are effectively cutting out the middlemen. This means better profit margins for hard-working Ghanaian business owners and consistently lower prices for you, the consumer.</p>

      <h2>Uncompromising Quality Assurance</h2>
      <p>Growth cannot come at the expense of quality. That is why every single vendor joining the Sell-Safe Buy-Safe Marketplace undergoes a rigorous, multi-stage verification process.</p>
      <ul>
        <li><strong>Business Verification:</strong> We physically and legally verify the existence and legitimacy of the business.</li>
        <li><strong>Product Quality Checks:</strong> Random sampling and quality control tests are conducted to ensure products match their descriptions.</li>
        <li><strong>Service Standard Agreements:</strong> Vendors must commit to our strict Service Level Agreements (SLAs) regarding shipping times and customer communication.</li>
      </ul>
      
      <h2>The Sell-Safe Buy-Safe Promise</h2>
      <p>Whether you are purchasing a brand-new smartphone or bespoke traditional wear, our integrated payment gateway holds funds securely until the buyer confirms receipt and satisfaction. This zero-risk environment is the future of e-commerce in Africa, and we are proud to lead the charge.</p>
    `,
        image: '/news/news-partnership.webp',
    },
    {
        slug: 'customer-satisfaction-reaches-98-percent',
        title: 'Customer Satisfaction Reaches 98% Milestone',
        category: 'Press',
        date: '2024-01-05',
        excerpt: 'Our commitment to excellence continues to deliver outstanding results as customer satisfaction ratings reach an impressive 98%, reflecting our dedication to quality service.',
        content: `
      <p class="lead">Excellence is not an act, but a habit. Today, we are incredibly proud to announce that GSG Brands has officially achieved an all-time high customer satisfaction (CSAT) rating of <strong>98%</strong> across all our active business units.</p>
      
      <h2>A Testament to Our Dedicated Team</h2>
      <p>This monumental achievement is a direct reflection of the relentless hard work, empathy, and dedication of our Customer Experience team and on-the-ground staff. From our delivery riders braving the traffic to our 24/7 support agents handling inquiries at 2:00 AM, every team member has played a crucial role.</p>
      
      <p>Over the last six months, we implemented several key initiatives that drove this metric upward:</p>
      <ul>
        <li><strong>Advanced Training Programs:</strong> Equipping our staff with better conflict resolution and empathetic communication skills.</li>
        <li><strong>Streamlined Feedback Loops:</strong> Cutting the time it takes for customer feedback to reach the product development team by 80%.</li>
        <li><strong>Proactive Issue Resolution:</strong> Our systems now flag potential delivery delays before the customer even notices, allowing our team to proactively reach out with solutions.</li>
      </ul>

      <h2>Listening to the Voices That Matter Most</h2>
      <p>We actively listen to customer feedback through our multi-channel support system (WhatsApp, Telegram, Phone, and Email) and use this invaluable data to drive our high-level decision-making process.</p>
      
      <blockquote>"Achieving 98% is phenomenal, but our eyes are fixed on that remaining 2%. We will not rest until every single interaction with GSG Brands is perfect." — Head of Customer Experience</blockquote>
      
      <p>To all our customers: thank you. Your trust, your feedback, and your continuous support are the fuel that drives the GSG Brands engine. We promise to keep raising the bar.</p>
    `,
        image: '/news/news-satisfaction.webp',
    },
    {
        slug: 'how-to-use-personal-shopper-service',
        title: 'How to Make the Most of Our Personal Shopper Service',
        category: 'Guides',
        date: '2023-12-28',
        excerpt: 'Learn how to leverage our Personal Shopper service to save time, compare prices effectively, and make informed purchasing decisions with expert assistance.',
        content: `
      <p class="lead">Navigating crowded markets or spending hours browsing online stores can be exhausting. That's exactly why we created the GSG Brands Personal Shopper service. Here is your ultimate guide to leveraging this premium service to save both time and money.</p>
      
      <h2>1. Define Your Needs with Precision</h2>
      <p>The key to a perfect shopping experience is communication. When submitting a request, be as specific as possible. The more details you provide, the faster our shoppers can locate exactly what you need.</p>
      <ul>
        <li><strong>Specify Details:</strong> Include the brand, preferred size, exact color, and acceptable alternatives.</li>
        <li><strong>Set a Clear Budget:</strong> Give us a budget range. Our shoppers are trained negotiators, especially in traditional markets like Makola or Adabrakah, and will always aim for the lower end of your budget without compromising quality.</li>
        <li><strong>Deadline:</strong> Let us know when you need the item by so we can prioritize accordingly.</li>
      </ul>
      
      <h2>2. Connect and Collaborate with an Expert</h2>
      <p>Our personal shoppers are not just delivery personnel; they are local market experts. They know which stall has the freshest fish, which wholesale store offers the best bulk discounts, and how to spot a counterfeit product.</p>
      <p>Don't hesitate to ask for recommendations. If you need a gift for a colleague but aren't sure what to get, simply describe the person and your budget, and let our experts curate a list of options for you to choose from.</p>
      
      <h2>3. The Power of Real-Time Updates</h2>
      <p>While our shopper is in the field, they can send you real-time pictures of items, allowing you to make instant decisions from the comfort of your home or office. It's like being at the market, but without the heat and the crowds!</p>
      
      <h2>4. Sit Back and Enjoy the Convenience</h2>
      <p>Once you've made your choices, we handle the rest. We negotiate the final price, securely package your items, and coordinate with our Courier unit to deliver everything straight to your door. Experience the ultimate convenience today.</p>
    `,
        image: '/news/news-shopper.webp',
    },
    {
        slug: 'streetcuisine-launch-announcement',
        title: 'StreetCuisine By GSG: Coming Soon to Your Neighborhood',
        category: 'Announcements',
        date: '2023-12-20',
        excerpt: 'Get ready for authentic Ghanaian street food delivered fresh to your doorstep. StreetCuisine By GSG is launching soon, bringing local flavors with quality assurance.',
        content: `
      <p class="lead">The aroma of perfectly spiced waakye, the sizzle of fresh kelewele, the comfort of a hot bowl of fufu—Ghanaian street food is an essential part of our culture. Very soon, you'll be able to enjoy it all without leaving your home with the launch of <strong>StreetCuisine By GSG</strong>.</p>
      
      <h2>Authentic Flavors, Modern Convenience</h2>
      <p>We know that the best food often doesn't come from fancy restaurants, but from the dedicated local vendors who have perfected their craft over generations. We are actively partnering with the highest-rated, most beloved street food vendors in your neighborhood.</p>
      <p>Through the StreetCuisine platform, you can browse menus from multiple local vendors, place a single order, and have it delivered blazing fast while it's still piping hot.</p>
      
      <h2>Uncompromising Hygiene and Quality Standards</h2>
      <p>We understand that while people love street food, hygiene is a common concern. That is exactly where GSG Brands steps in to make a difference.</p>
      <ul>
        <li><strong>Mandatory Training:</strong> All our vendor partners must undergo strict food safety and hygiene training before joining the platform.</li>
        <li><strong>Regular Inspections:</strong> Our quality assurance team conducts regular, unannounced inspections of our partners' preparation areas.</li>
        <li><strong>Premium Packaging:</strong> We provide our vendors with high-quality, eco-friendly, and secure packaging to ensure your food arrives exactly as it was prepared—safe and delicious.</li>
      </ul>
      
      <h2>Empowering the Grassroots Economy</h2>
      <p>By ordering through StreetCuisine, you aren't just getting a great meal; you are directly supporting the grassroots economy. We provide these micro-entrepreneurs with the digital tools and logistics network they need to scale their businesses exponentially.</p>
      <p>Keep an eye on our social media channels for the official launch date in your area. Your favorite local flavors are about to get a major upgrade.</p>
    `,
        image: '/news/news-cuisine.webp',
    },
    {
        slug: 'secure-shopping-tips',
        title: 'Top 5 Tips for Secure Online Shopping in Ghana',
        category: 'Guides',
        date: '2023-12-15',
        excerpt: 'Stay safe while shopping online with these essential security tips. Learn how to identify verified sellers, protect your payment information, and shop with confidence.',
        content: `
      <p class="lead">The convenience of online shopping has revolutionized how we buy goods in Ghana. However, this digital shift also brings new risks. At GSG Brands, your security is our priority. Here are our top five expert tips to ensure you stay safe while shopping online.</p>
      
      <h2>1. Use Escrow Services (Like Sell-Safe Buy-Safe)</h2>
      <p>The number one rule of online shopping, especially on social media platforms like Instagram or Facebook, is to never pay directly to a vendor's personal account before receiving the goods. Always insist on using an escrow-style service like the GSG Brands <strong>Sell-Safe Buy-Safe Marketplace</strong>. We hold your funds securely and only release them to the seller once you have received and approved the item.</p>
      
      <h2>2. Look for the Padlock (HTTPS)</h2>
      <p>Before entering any payment information or personal details on a website, check the URL bar at the top of your browser. Make sure the website address begins with "https://" (the 's' stands for secure) and look for a small padlock icon. This indicates that your data is encrypted.</p>
      
      <h2>3. Verify the Seller's Reputation</h2>
      <p>If you are buying from a third-party seller on a marketplace, do your homework:</p>
      <ul>
        <li><strong>Read Reviews:</strong> Look beyond the 5-star ratings. Read what customers actually say about the product quality and delivery times.</li>
        <li><strong>Check Social Proof:</strong> Look at their social media presence. Are real people engaging with their posts?</li>
        <li><strong>Beware of Unrealistic Prices:</strong> If an iPhone is being sold for 80% less than its market value, it is almost certainly a scam or a counterfeit product.</li>
      </ul>
      
      <h2>4. Protect Your Financial Data</h2>
      <p>Never share your mobile money PIN, bank card CVV (the 3 digits on the back), or passwords with anyone over email, phone, or direct message. Legitimate companies (including GSG Brands) will <strong>never</strong> ask you for this information.</p>
      
      <h2>5. Keep Your Devices Secure</h2>
      <p>Ensure the phone or computer you use for shopping has up-to-date antivirus software and operating systems. Avoid making sensitive purchases while connected to public, unsecured Wi-Fi networks (like in cafes or malls), as hackers can easily intercept your data on these networks.</p>
      
      <p>By following these simple steps, you can enjoy all the benefits of online commerce with total peace of mind. Happy, safe shopping!</p>
    `,
        image: '/news/news-secure.webp',
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