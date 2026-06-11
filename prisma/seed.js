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
      { name: "Seasonal Berries", description: "Fresh seasonal berries", price: "$9", category: "breakfast", section: "seasonal-fruit", featured: false },
      { name: "Texas Fruit Plate", description: "Seasonal fresh cut fruit, berries, honey Greek yogurt, banana bread", price: "$14", category: "breakfast", section: "seasonal-fruit", featured: false },
      { name: "Belgian Waffle", description: "Strawberries, whipped cream", price: "$15", category: "breakfast", section: "sweet", featured: false },
      { name: "Mascarpone French Toast", description: "Slow dough challah bread, milk bath, honey & cinnamon mascarpone, syrup, seasonal berries", price: "$18", category: "breakfast", section: "sweet", featured: true },
      { name: "Buttermilk Pancakes", description: "Syrup, butter, powdered sugar", price: "$14", category: "breakfast", section: "sweet", featured: false },
      { name: "Huevos Rancheros", description: "Two eggs any style, cheese quesadilla, corn tortilla, pinto bean, avocado, cotija, house salsa", price: "$16", category: "breakfast", section: "eggs", featured: true },
      { name: "Roasted Poblano Benedict", description: "Two poached eggs, English muffin, sauteed onions, poblano peppers, hashbrowns", price: "$18", category: "breakfast", section: "eggs", featured: false },
      { name: "Farm Fresh Eggs & Meat", description: "Cage free egg any style, choice of meat: pecan smoked bacon, chicken sausage, honey glazed ham, pork sausage, turkey bacon, hashbrowns. Add 6oz sirloin +$12", price: "$17", category: "breakfast", section: "eggs", featured: false },
      { name: "Chilaquiles", description: "Cage free soft scramble, roasted poblano, pinto beans, street corn, house salsa, cojita", price: "$16", category: "breakfast", section: "eggs", featured: true },
      { name: "Bacon & Egg Sandwich", description: "Cage free scrambled egg, smashed avocado, cheddar, pecan smoked bacon, English muffin, seasonal fresh cut fruit", price: "$15", category: "breakfast", section: "eggs", featured: false },
      { name: "Lox & Bagel", description: "Cream cheese, onion, caper, tomato, cucumber, everything bagel", price: "$17", category: "breakfast", section: "eat-well", featured: false },
      { name: "Miracle Avocado Toast", description: "Poached egg, pecan smoked bacon, smashed avocado, sliced tomato, arugula, whole wheat toast. Add smoked salmon +$6", price: "$16", category: "breakfast", section: "eat-well", featured: true },
      { name: "Protein Workout", description: "Two egg whites & one egg omelet, chicken sausage, cheddar, mushrooms, onion, bell pepper, seasonal fruit", price: "$16", category: "breakfast", section: "eat-well", featured: false },
      { name: "Chia Yogurt Parfait", description: "Greek yogurt, chia seed, seasonal berries, granola, agave nectar", price: "$12", category: "breakfast", section: "eat-well", featured: false },
      { name: "Powerhouse Oatmeal", description: "Steel cut oats, cinnamon, coconut, raisins, honey, seasonal berries, granola", price: "$12", category: "breakfast", section: "eat-well", featured: false },
      { name: "Burrata Avocado Toast", description: "Two eggs, smashed avocado, cherry tomato confit, burrata, balsamic glaze, whole wheat toast", price: "$18", category: "breakfast", section: "eat-well", featured: false },

      { name: "Buffalo Chicken Wings", description: "Celery, carrots, ranch", price: "$14", category: "allday", section: "starters", featured: false },
      { name: "Peppercorn Calamari", description: "Breaded, marinara", price: "$14", category: "allday", section: "starters", featured: false },
      { name: "Chicken Quesadilla", description: "Jalapeno Jack cheese, house salsa, sour cream", price: "$14", category: "allday", section: "starters", featured: false },
      { name: "Beef Fajita Quesadilla", description: "Jalapeno Jack cheese, house salsa, sour cream", price: "$16", category: "allday", section: "starters", featured: false },
      { name: "Chicken Gyoza", description: "Plum sauce, sriracha", price: "$14", category: "allday", section: "starters", featured: false },
      { name: "Crispy Brussel Sprouts", description: "Ponzu, crushed red pepper", price: "$12", category: "allday", section: "starters", featured: true },
      { name: "Steak Salad", description: "Sirloin steak, mixed greens, pecan smoked bacon, za'atar, avocado, tomato, raspberry vinaigrette", price: "$22", category: "allday", section: "salads", featured: false },
      { name: "House Salad", description: "Grilled chicken, mixed greens, feta cheese, glazed pecans, apples, balsamic vinaigrette", price: "$16", category: "allday", section: "salads", featured: false },
      { name: "Traditional Caesar Salad", description: "Romaine lettuce, caesar dressing, parmesan cheese, croutons", price: "$14", category: "allday", section: "salads", featured: false },
      { name: "Burrata Salad", description: "Heirloom tomatoes, burrata, balsamic pearls, balsamic glaze, micro basil", price: "$18", category: "allday", section: "salads", featured: true },
      { name: "Cobb Salad", description: "Hard boiled egg, avocado, bacon bits, cheddar cheese, roasted corn, cherry tomatoes, pickled red onion, chipotle ranch dressing", price: "$18", category: "allday", section: "salads", featured: false },
      { name: "Farmer's Market Veggie Burger", description: "Chipotle black bean, LTP, grilled onion, garlic boursin aioli, slow dough butter flake bun", price: "$17", category: "allday", section: "handhelds", featured: false },
      { name: "White Oak Cheeseburger", description: "Mozzarella cheese, LTP, grilled onion, garlic boursin aioli, slow dough butter flake bun", price: "$18", category: "allday", section: "handhelds", featured: true },
      { name: "Cubano Sandwich", description: "Pulled pork, smoked ham, Swiss cheese, mustard aioli, French bread", price: "$17", category: "allday", section: "handhelds", featured: false },
      { name: "BLTA Chicken Club Sandwich", description: "Herb marinated chicken, pecan smoked bacon, avocado, Swiss cheese, lettuce, tomato, chipotle aioli, slow dough wheat toast", price: "$18", category: "allday", section: "handhelds", featured: false },
      { name: "Marina's Fried Chicken", description: "Half chicken, original cheesy mac, sauteed kale, pecan smoked bacon bits, gravy", price: "$24", category: "allday", section: "farm-to-table", featured: true },
      { name: "Shrimp & Chicken Pad Thai", description: "Rice noodles, scrambled egg, scallion, tofu, peanuts, chili flakes, bean sprouts, cilantro, lime", price: "$22", category: "allday", section: "farm-to-table", featured: true },
      { name: "Steak & Pineapple Fried Rice", description: "Cage free egg sunny side up, bell pepper, scallions, jasmine rice", price: "$22", category: "allday", section: "farm-to-table", featured: false },
      { name: "Pasta Primavera", description: "Capellini, zucchini, broccoli, cherry tomato, red bell pepper, marinara, parmesan", price: "$18", category: "allday", section: "farm-to-table", featured: false },
      { name: "Bolognese", description: "Linguini pasta, ground beef, house made ragu sauce, fresh basil, parmesan cheese", price: "$20", category: "allday", section: "farm-to-table", featured: false },
      { name: "Scotch Fillet", description: "12oz rib eye fillet, house made chimichurri, mashed potato, seasonal vegetables", price: "$42", category: "allday", section: "farm-to-table", featured: true },
      { name: "Steak Frites", description: "10oz New York strip, truffle parmesan fries, onion & mushroom jam, roasted garlic aioli", price: "$36", category: "allday", section: "farm-to-table", featured: true },
      { name: "Pistachio Salmon", description: "Tri-color fingerling potatoes, seasonal vegetables, pistachio sauce, tuile", price: "$29", category: "allday", section: "farm-to-table", featured: false },
      { name: "Red Fish", description: "Tri-color fingerling potatoes, seasonal vegetables, carrot puree, mango relish", price: "$28", category: "allday", section: "farm-to-table", featured: false },
      { name: "Chicken Tortilla Soup", description: "Crafted daily", price: "$10", category: "allday", section: "eat-well", featured: false },
      { name: "Hummus", description: "Carrots, celery, broccoli", price: "$10", category: "allday", section: "eat-well", featured: false },
      { name: "Buddha Bowl", description: "Cauliflower, broccoli, sweet potato, quinoa, farro, avocado, sunny side up egg", price: "$17", category: "allday", section: "eat-well", featured: false },
      { name: "Juan's Fish Tacos", description: "Two tacos, salmon, mahi mahi, queso fresco, chipotle aioli, cabbage, plantain, house salsa", price: "$18", category: "allday", section: "eat-well", featured: false },

      { name: "Morning Bird", description: "Half fried chicken, cheesy mac, sauteed kale, pecan smoked bacon bits, gravy", price: "$22", category: "brunch", section: "globally-inspired", featured: true },
      { name: "Eggs Benedict", description: "English muffin, two poached eggs, breakfast potatoes. Classic, roasted poblano, or smoked salmon", price: "$18", category: "brunch", section: "globally-inspired", featured: true },
      { name: "Shrimp & Chicken Pad Thai", description: "Rice noodles, scrambled eggs, scallion, tofu, peanuts, red pepper flakes, bean sprouts, cilantro, lime", price: "$22", category: "brunch", section: "globally-inspired", featured: false },
      { name: "Brunch Burger", description: "Beef patty, sunny side up egg, Swiss cheese, bacon jam, aioli, watercress, pickled red onion", price: "$19", category: "brunch", section: "the-classics", featured: true },
      { name: "Burrata Avocado Toast", description: "Whole wheat toast, two eggs any style, cherry tomato confit, smashed avocado, burrata, balsamic glaze", price: "$17", category: "brunch", section: "the-classics", featured: false },
      { name: "Salmon Lox", description: "Cream cheese, onion, capers, tomato, cucumber, everything bagel", price: "$17", category: "brunch", section: "the-classics", featured: false },
      { name: "Chicken & Bacon Waffle", description: "Crispy chicken wings, pecan smoked bacon, syrup, powdered sugar", price: "$20", category: "brunch", section: "the-sweet-spot", featured: true },
      { name: "Mascarpone French Toast", description: "Challah bread, milk bath, honey & cinnamon mascarpone, syrup, seasonal berries, powdered sugar", price: "$18", category: "brunch", section: "the-sweet-spot", featured: false },
      { name: "Buttermilk Pancakes", description: "Syrup, butter, powdered sugar", price: "$14", category: "brunch", section: "the-sweet-spot", featured: false },

      { name: "Cotton Kiss", description: "Vanilla vodka, St. Germain, lemon juice, sparkling wine, cotton candy", price: "$16", category: "drinks", section: "cocktails", featured: false },
      { name: "Agave Sunrise", description: "Blanco tequila, tomato juice, Tabasco, Worcestershire, celery salt, pickled okra", price: "$15", category: "drinks", section: "cocktails", featured: false },
      { name: "Donut Disturb", description: "Vodka, coffee liqueur, espresso, simple syrup, mini donut", price: "$16", category: "drinks", section: "cocktails", featured: false },
      { name: "Lemon Sparkler", description: "Gin, lemon juice, triple sec, simple syrup, sparkling wine", price: "$15", category: "drinks", section: "cocktails", featured: false },
      { name: "Pear Pressure", description: "Vodka, pear puree, lime juice, ginger liqueur, ginger beer", price: "$15", category: "drinks", section: "cocktails", featured: false },
      { name: "Citrus Siesta", description: "Blanco tequila, grapefruit juice, lime juice, agave, triple sec", price: "$15", category: "drinks", section: "cocktails", featured: false },
    ],
  });

  await prisma.review.createMany({
    data: [
      { name: "Lee-Ann", rating: 5, text: "Service and food and atmosphere were excellent!!! We all enjoyed the dining experience.", source: "google", approved: true },
      { name: "Allie S", rating: 5, text: "Wow! I was blown away by the food at this restaurant. I couldn't believe a hotel restaurant could be so good. Definitely worth the trip!!", source: "tripadvisor", approved: true },
      { name: "Maria G", rating: 5, text: "We were visiting Houston for the first time and decided to have dinner here. A perfect combination of everything! Amazing food, hospitality and ambiance.", source: "opentable", approved: true },
      { name: "Peter", rating: 4, text: "Limited menu but food was tasty. Service was a little slow, but the quality of the dishes made up for it.", source: "google", approved: true },
      { name: "T Ashley", rating: 4, text: "Overall it was good and would go back. They were a little slow to serve, but the food was great. Had a Caesar salmon salad, great portions.", source: "google", approved: true },
      { name: "Keila B", rating: 5, text: "Dined in and had the cheeseburger which surpassed my expectations. The sweet potato fries were perfect too.", source: "yelp", approved: true },
      { name: "Sarah L", rating: 4, text: "Great location inside the Galleria. We had dinner here and the steak salad was good.", source: "yelp", approved: true },
      { name: "Jooy C", rating: 5, text: "One of the only restaurants inside Galleria Mall that opens early! The chilaquiles were super tasty.", source: "yelp", approved: true },
      { name: "Annie B", rating: 4, text: "White Oak is a great place to stop for a bite when shopping around the Galleria. The mac and cheese was delicious.", source: "yelp", approved: true },
      { name: "Mark T", rating: 5, text: "Amazing brunch! The Huevos Rancheros are very good and the service is always attentive.", source: "google", approved: true },
    ],
  });

  await prisma.galleryImage.createMany({
    data: [
      { url: "/images/food-1.jpg", alt: "Steak Frites", caption: "10oz New York Strip with Truffle Parmesan Fries", category: "food" },
      { url: "/images/food-2.jpg", alt: "Pistachio Salmon", caption: "Tri-color Fingerling Potatoes with Pistachio Sauce", category: "food" },
      { url: "/images/food-3.jpg", alt: "Mascarpone French Toast", caption: "Slow Dough Challah with Seasonal Berries", category: "food" },
      { url: "/images/interior-1.jpg", alt: "Main Dining Room", caption: "Elegant dining with modern rustic decor", category: "interior" },
      { url: "/images/interior-2.jpg", alt: "Bar Area", caption: "Craft cocktails and premium spirits", category: "interior" },
      { url: "/images/drinks-1.jpg", alt: "Cotton Kiss Cocktail", caption: "Vanilla vodka, St. Germain, sparkling wine, cotton candy", category: "drinks" },
      { url: "/images/food-4.jpg", alt: "White Oak Cheeseburger", caption: "Mozzarella, LTP, Garlic Boursin Aioli", category: "food" },
      { url: "/images/food-5.jpg", alt: "Marina's Fried Chicken", caption: "Original Cheesy Mac with Sauteed Kale", category: "food" },
      { url: "/images/interior-3.jpg", alt: "Private Dining Room", caption: "Accommodates up to 40 guests", category: "events" },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await prisma.$disconnect(); });
