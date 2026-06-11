require("dotenv/config");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.menuItem.deleteMany();
  await prisma.review.deleteMany();
  await prisma.reservation.deleteMany();
  await prisma.galleryImage.deleteMany();
  await prisma.contactMessage.deleteMany();

  await prisma.menuItem.createMany({
    data: [
      // Starters / Appetizers
      { name: "Dahi Ke Kebab", description: "Crispy yogurt kebab with mint chutney", price: "₹295", category: "starters", section: "vegetarian", featured: true },
      { name: "Paneer Achari Tikka", description: "Achari spiced paneer tikka, charcoal grilled", price: "₹345", category: "starters", section: "vegetarian", featured: true },
      { name: "Hara Bhara Kebab", description: "Spinach and green pea patties with tamarind chutney", price: "₹265", category: "starters", section: "vegetarian", featured: false },
      { name: "Tandoori Soya Chaap Masala", description: "Soya chaap in rich tandoori masala", price: "₹325", category: "starters", section: "vegetarian", featured: true },
      { name: "Paneer Tikka", description: "Classic charcoal grilled paneer tikka", price: "₹335", category: "starters", section: "vegetarian", featured: false },
      { name: "Veg Manchurian Dry", description: "Crispy veg manchurian in Indo-Chinese sauce", price: "₹285", category: "starters", section: "vegetarian", featured: false },
      { name: "Peri Peri Chicken Tikka", description: "Spicy peri peri marinated chicken tikka", price: "₹395", category: "starters", section: "non-vegetarian", featured: true },
      { name: "Amritsari Tandoori Chicken", description: "Half tandoori chicken, Amritsari style", price: "₹445", category: "starters", section: "non-vegetarian", featured: true },
      { name: "Chicken Seekh Kebab", description: "Minced chicken seekh, charcoal grilled", price: "₹375", category: "starters", section: "non-vegetarian", featured: false },
      { name: "Mutton Seekh Kebab", description: "Succulent minced mutton seekh kebab", price: "₹425", category: "starters", section: "non-vegetarian", featured: true },
      { name: "Chicken Wings", description: "Spicy buffalo chicken wings with dip", price: "₹345", category: "starters", section: "non-vegetarian", featured: false },
      { name: "Fish Fingers", description: "Crispy battered fish fingers with tartar sauce", price: "₹395", category: "starters", section: "non-vegetarian", featured: false },

      // Main Course - Vegetarian
      { name: "Paneer Butter Masala", description: "Creamy tomato gravy with soft paneer cubes", price: "₹345", category: "mains", section: "vegetarian", featured: true },
      { name: "Shahi Paneer", description: "Rich cashew and cream based paneer curry", price: "₹355", category: "mains", section: "vegetarian", featured: true },
      { name: "Dal Makhani", description: "Slow cooked black lentils in butter and cream", price: "₹295", category: "mains", section: "vegetarian", featured: true },
      { name: "Palak Paneer", description: "Fresh spinach curry with paneer", price: "₹325", category: "mains", section: "vegetarian", featured: false },
      { name: "Kadhai Paneer", description: "Paneer in spiced capsicum and tomato gravy", price: "₹335", category: "mains", section: "vegetarian", featured: false },
      { name: "Veg Biryani", description: "Fragrant basmati rice with mixed vegetables", price: "₹285", category: "mains", section: "vegetarian", featured: false },
      { name: "Chole Bhature", description: "Spicy chickpea curry with fluffy bhature", price: "₹245", category: "mains", section: "vegetarian", featured: false },

      // Main Course - Non-Vegetarian
      { name: "Butter Chicken", description: "Classic creamy tomato butter chicken", price: "₹395", category: "mains", section: "non-vegetarian", featured: true },
      { name: "Chicken Biryani", description: "Dum cooked chicken biryani with raita", price: "₹345", category: "mains", section: "non-vegetarian", featured: true },
      { name: "Mutton Biryani", description: "Aromatic mutton biryani, slow cooked", price: "₹425", category: "mains", section: "non-vegetarian", featured: true },
      { name: "Chicken Tikka Masala", description: "Grilled chicken tikka in rich masala gravy", price: "₹385", category: "mains", section: "non-vegetarian", featured: false },
      { name: "Mutton Rogan Josh", description: "Kashmiri style slow cooked mutton curry", price: "₹445", category: "mains", section: "non-vegetarian", featured: false },
      { name: "Fish Curry", description: "Bengali style fish curry in mustard gravy", price: "₹395", category: "mains", section: "non-vegetarian", featured: false },
      { name: "Tandoori Chicken Full", description: "Full charcoal grilled tandoori chicken", price: "₹595", category: "mains", section: "non-vegetarian", featured: false },

      // Chinese
      { name: "Chicken Fried Rice", description: "Wok tossed chicken fried rice", price: "₹285", category: "mains", section: "chinese", featured: true },
      { name: "Veg Fried Rice", description: "Wok tossed vegetable fried rice", price: "₹245", category: "mains", section: "chinese", featured: false },
      { name: "Chicken Manchurian", description: "Indo-Chinese chicken manchurian gravy", price: "₹325", category: "mains", section: "chinese", featured: false },
      { name: "Hakka Noodles", description: "Spicy hakka noodles with vegetables", price: "₹225", category: "mains", section: "chinese", featured: false },
      { name: "Chilli Chicken", description: "Indo-Chinese chilli chicken dry", price: "₹345", category: "mains", section: "chinese", featured: false },
      { name: "Momos (Veg)", description: "Steamed vegetable momos with spicy sauce", price: "₹195", category: "starters", section: "chinese", featured: true },
      { name: "Momos (Chicken)", description: "Steamed chicken momos with spicy sauce", price: "₹225", category: "starters", section: "chinese", featured: false },

      // Breads
      { name: "Plain Roti", description: "Whole wheat tandoori roti", price: "₹42", category: "breads", section: "breads", featured: false },
      { name: "Butter Roti", description: "Whole wheat roti with butter", price: "₹48", category: "breads", section: "breads", featured: false },
      { name: "Missi Roti", description: "Gram flour flavoured tandoori roti", price: "₹57", category: "breads", section: "breads", featured: false },
      { name: "Plain Laccha Paratha", description: "Flaky layered tandoori paratha", price: "₹84", category: "breads", section: "breads", featured: false },
      { name: "Butter Naan", description: "Soft tandoori naan with butter", price: "₹75", category: "breads", section: "breads", featured: false },
      { name: "Garlic Naan", description: "Naan topped with garlic and coriander", price: "₹85", category: "breads", section: "breads", featured: false },
      { name: "Lal Mirch Ka Paratha", description: "Stuffed red chilli paratha", price: "₹94", category: "breads", section: "breads", featured: false },
      { name: "Cheese Naan", description: "Naan stuffed with melting cheese", price: "₹110", category: "breads", section: "breads", featured: false },

      // Beverages
      { name: "Fresh Lime Soda", description: "Sweet or salty fresh lime soda", price: "₹95", category: "beverages", section: "beverages", featured: false },
      { name: "Mango Lassi", description: "Creamy mango yoghurt shake", price: "₹135", category: "beverages", section: "beverages", featured: false },
      { name: "Cold Coffee", description: "Iced coffee with cream", price: "₹155", category: "beverages", section: "beverages", featured: false },
      { name: "Masala Chai", description: "Spiced Indian tea", price: "₹75", category: "beverages", section: "beverages", featured: false },
      { name: "Fresh Orange Juice", description: "Freshly squeezed orange juice", price: "₹125", category: "beverages", section: "beverages", featured: false },

      // Cocktails
      { name: "Classic Margarita", description: "Tequila, triple sec, lime juice", price: "₹350", category: "drinks", section: "cocktails", featured: true },
      { name: "Long Island Iced Tea", description: "LIIT with five spirits and cola", price: "₹395", category: "drinks", section: "cocktails", featured: true },
      { name: "Blue Lagoon Daiquiri", description: "Vodka, blue curacao, pineapple juice", price: "₹350", category: "drinks", section: "cocktails", featured: false },
      { name: "Bombshell", description: "Vodka, peach schnapps, orange juice", price: "₹375", category: "drinks", section: "cocktails", featured: true },
      { name: "Classic Martini", description: "Gin, dry vermouth, olive garnish", price: "₹395", category: "drinks", section: "cocktails", featured: false },
      { name: "Whiskey Sour", description: "Bourbon, lemon juice, sugar syrup", price: "₹350", category: "drinks", section: "cocktails", featured: false },

      // Desserts
      { name: "Gulab Jamun", description: "Warm milk dumplings in rose syrup", price: "₹145", category: "desserts", section: "desserts", featured: false },
      { name: "Rasmalai", description: "Soft paneer discs in saffron milk", price: "₹165", category: "desserts", section: "desserts", featured: false },
      { name: "Kulfi Falooda", description: "Traditional Indian ice cream with falooda", price: "₹175", category: "desserts", section: "desserts", featured: true },
      { name: "Brownie with Ice Cream", description: "Chocolate brownie with vanilla ice cream", price: "₹195", category: "desserts", section: "desserts", featured: false },
    ],
  });

  await prisma.review.createMany({
    data: [
      { name: "Rahul Sharma", rating: 5, text: "Absolutely delicious food! The Dahi Ke Kebab and Butter Chicken were outstanding. Great ambience and the staff was very attentive. Highly recommend for a family dinner.", source: "google", approved: true },
      { name: "Priya Gupta", rating: 5, text: "One of the best restaurants in Paharganj! The Paneer Achari Tikka is a must-try. Live music on weekends adds to the vibe. Price is reasonable for the quality you get.", source: "google", approved: true },
      { name: "Amit Kumar", rating: 4, text: "Great place for North Indian food. The Mutton Biryani was flavorful and the portions were generous. Only downside is the service can be a bit slow during peak hours.", source: "zomato", approved: true },
      { name: "Sneha Reddy", rating: 5, text: "Visited this place during my Delhi trip and it exceeded my expectations! The Tandoori Soya Chaap Masala was incredible. The cocktails are also well-made. Will definitely visit again!", source: "google", approved: true },
      { name: "Vikram Singh", rating: 4, text: "Good food, nice ambience. The Amritsari Tandoori Chicken was perfectly cooked. The bar area is lively. A bit noisy on weekends but that adds to the atmosphere.", source: "swiggy", approved: true },
      { name: "Neha Kapoor", rating: 5, text: "Perfect place for a night out! The LIIT and Margaritas are strong and well-mixed. The food menu is extensive and everything we ordered was delicious. The Momos are a must-try!", source: "google", approved: true },
      { name: "Rohit Verma", rating: 4, text: "Visited with friends for dinner. The Chicken Fried Rice and Chilli Chicken were amazing. The staff was friendly and the service was good. Will come back for sure.", source: "zomato", approved: true },
      { name: "Ananya Das", rating: 5, text: "This place is a gem! The Dal Makhani is the best I've ever had. The ambience is vibrant and the music is great. Perfect for both couples and groups.", source: "google", approved: true },
      { name: "Karan Malhotra", rating: 4, text: "Solid restaurant with great food. The Mutton Seekh Kebab was cooked to perfection. The drinks menu is impressive. Only suggestion would be to improve the seating comfort.", source: "magicpin", approved: true },
      { name: "Deepika Nair", rating: 5, text: "Amazing experience! From the moment we walked in, the service was impeccable. The Shahi Paneer was creamy and rich. The Kulfi Falooda was the perfect ending to our meal.", source: "google", approved: true },
    ],
  });

  await prisma.galleryImage.createMany({
    data: [
      { url: "/images/food-1.jpg", alt: "Paneer Tikka", caption: "Charcoal Grilled Paneer Tikka", category: "food" },
      { url: "/images/food-2.jpg", alt: "Butter Chicken", caption: "Classic Creamy Butter Chicken", category: "food" },
      { url: "/images/food-3.jpg", alt: "Biryani", caption: "Dum Cooked Chicken Biryani", category: "food" },
      { url: "/images/food-4.jpg", alt: "Tandoori Chicken", caption: "Amritsari Tandoori Chicken", category: "food" },
      { url: "/images/food-5.jpg", alt: "Naan", caption: "Fresh Tandoori Naan", category: "food" },
      { url: "/images/food-6.jpg", alt: "Dal Makhani", caption: "Slow Cooked Dal Makhani", category: "food" },
      { url: "/images/restaurant-1.jpg", alt: "Restaurant Interior", caption: "Contemporary Dining Ambience", category: "interior" },
      { url: "/images/restaurant-2.jpg", alt: "Bar Area", caption: "Full Bar with Cocktails", category: "interior" },
      { url: "/images/restaurant-3.jpg", alt: "Outdoor Seating", caption: "Vibrant Outdoor Seating", category: "interior" },
      { url: "/images/restaurant-4.jpg", alt: "Live Music", caption: "Live Music Nights", category: "events" },
      { url: "/images/restaurant-5.jpg", alt: "Private Dining", caption: "Private Dining Area", category: "events" },
      { url: "/images/restaurant-6.jpg", alt: "Restaurant Entrance", caption: "Welcome to White Oak", category: "interior" },
    ],
  });

  console.log("Database seeded successfully with Delhi restaurant data!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
