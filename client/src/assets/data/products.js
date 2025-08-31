export default {
  "productId": "string",       // unique ID
  "name": "string",            // e.g., "Veggie Pizza"
  "category": "string",        // e.g., "Pizza", "Burger", "Salad"
  "ingredients": ["string"],   // e.g., ["Tomato", "Cheese", "Basil"]
  "price": 12.99,              // float
  "rating": 4.5,               // average rating (optional)
  "imageUrl": "string",        // URL to food image
  "tags": ["string"]           // e.g., ["vegan", "spicy", "quick"]
}
export const pizzaRecipes = [
  {
    productId: "00001",
    name: "Pepperoni Pizza",
    category: ["Pizza", "Meat", "Spicy"],
    ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
    price: 12.99,
    rating: 4.8,
    tags: ["meat", "spicy"]
  },
  {
    productId: "00002",
    name: "Vegetarian Supreme Pizza",
    category: ["Pizza", "Vegetarian", "Healthy"],
    ingredients: ["Bell Peppers", "Mushrooms", "Olives", "Onions", "Spinach", "Tomato Sauce"],
    price: 14.99,
    rating: 4.7,
    tags: ["vegetarian", "healthy"]
  },
  {
    productId: "00003",
    name: "BBQ Chicken Pizza",
    category: ["Pizza", "Chicken", "Smoky"],
    ingredients: ["Chicken", "BBQ Sauce", "Red Onions", "Cilantro", "Mozzarella"],
    price: 15.99,
    rating: 4.6,
    tags: ["chicken", "smoky"]
  },
  {
    productId: "00004",
    name: "Margherita Pizza",
    category: ["Pizza", "Vegetarian", "Classic"],
    ingredients: ["Tomato", "Mozzarella", "Basil"],
    price: 11.99,
    rating: 4.9,
    tags: ["vegetarian", "classic"]
  },
  {
    productId: "00005",
    name: "Mushroom Truffle Pizza",
    category: ["Pizza", "Luxury", "Earthy"],
    ingredients: ["Mushrooms", "Truffle Oil", "Mozzarella", "Parmesan"],
    price: 16.99,
    rating: 4.8,
    tags: ["luxury", "earthy"]
  }
]
export const burgerRecipes = [
  {
    productId: "01001",
    name: "Classic Cheeseburger",
    category: ["Burger", "Beef", "Classic"],
    ingredients: ["Beef Patty", "Cheddar", "Lettuce", "Tomato", "Pickles", "Burger Sauce"],
    price: 9.99,
    rating: 4.7,
    tags: ["classic", "beef"]
  },
  {
    productId: "01002",
    name: "BBQ Bacon Burger",
    category: ["Burger", "Beef", "BBQ"],
    ingredients: ["Beef Patty", "Bacon", "BBQ Sauce", "Cheddar", "Lettuce", "Tomato"],
    price: 11.49,
    rating: 4.8,
    tags: ["bbq", "bacon"]
  },
  {
    productId: "01003",
    name: "Veggie Burger",
    category: ["Burger", "Vegetarian", "Healthy"],
    ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Onions", "Pickles", "Avocado"],
    price: 10.49,
    rating: 4.6,
    tags: ["vegetarian", "healthy"]
  },
  {
    productId: "01004",
    name: "Mushroom Swiss Burger",
    category: ["Burger", "Beef", "Cheese"],
    ingredients: ["Beef Patty", "Swiss Cheese", "Mushrooms", "Lettuce", "Tomato"],
    price: 12.49,
    rating: 4.7,
    tags: ["cheese", "mushrooms"]
  },
  {
    productId: "01005",
    name: "Spicy Jalapeño Burger",
    category: ["Burger", "Spicy", "Beef"],
    ingredients: ["Beef Patty", "Jalapeños", "Cheddar", "Lettuce", "Tomato", "Spicy Mayo"],
    price: 11.99,
    rating: 4.8,
    tags: ["spicy", "jalapeno"]
  }
]
export const saladRecipes = [
  {
    productId: "02001",
    name: "Caesar Salad",
    category: ["Salad", "Vegetarian", "Classic"],
    ingredients: ["Romaine Lettuce", "Parmesan", "Croutons", "Caesar Dressing"],
    price: 8.99,
    rating: 4.5,
    tags: ["vegetarian", "classic"]
  },
  {
    productId: "02002",
    name: "Greek Salad",
    category: ["Salad", "Vegetarian", "Fresh"],
    ingredients: ["Cucumber", "Tomato", "Olives", "Feta Cheese", "Red Onion", "Oregano", "Olive Oil"],
    price: 9.99,
    rating: 4.6,
    tags: ["vegetarian", "fresh"]
  },
  {
    productId: "02003",
    name: "Quinoa Salad",
    category: ["Salad", "Healthy", "Protein"],
    ingredients: ["Quinoa", "Spinach", "Chickpeas", "Avocado", "Lemon Vinaigrette"],
    price: 10.99,
    rating: 4.7,
    tags: ["healthy", "protein"]
  },
  {
    productId: "02004",
    name: "Caprese Salad",
    category: ["Salad", "Vegetarian", "Fresh"],
    ingredients: ["Tomatoes", "Mozzarella", "Basil", "Olive Oil", "Balsamic Glaze"],
    price: 11.49,
    rating: 4.8,
    tags: ["vegetarian", "fresh"]
  },
  {
    productId: "02005",
    name: "Chicken Avocado Salad",
    category: ["Salad", "Chicken", "Healthy"],
    ingredients: ["Grilled Chicken", "Avocado", "Mixed Greens", "Cherry Tomatoes", "Lemon Vinaigrette"],
    price: 12.49,
    rating: 4.9,
    tags: ["chicken", "healthy"]
  }
]
export const drinkRecipes = [
  {
    productId: "03001",
    name: "Classic Lemonade",
    category: ["Drink", "Fresh", "Sweet"],
    ingredients: ["Lemon", "Sugar", "Water", "Ice"],
    price: 3.49,
    rating: 4.7,
    tags: ["fresh", "sweet"]
  },
  {
    productId: "03002",
    name: "Iced Coffee",
    category: ["Drink", "Caffeinated", "Chilled"],
    ingredients: ["Coffee", "Ice", "Milk", "Sugar"],
    price: 4.49,
    rating: 4.6,
    tags: ["coffee", "chilled"]
  },
  {
    productId: "03003",
    name: "Fresh Fruit Smoothie",
    category: ["Drink", "Healthy", "Smoothie"],
    ingredients: ["Banana", "Strawberries", "Greek Yogurt", "Honey", "Ice"],
    price: 5.99,
    rating: 4.8,
    tags: ["healthy", "smoothie"]
  },
  {
    productId: "03004",
    name: "Coca Cola",
    category: ["Drink", "Soda", "Classic"],
    ingredients: ["Coca-Cola"],
    price: 2.99,
    rating: 4.5,
    tags: ["soda", "classic"]
  },
  {
    productId: "03005",
    name: "Iced Green Tea",
    category: ["Drink", "Fresh", "Caffeinated"],
    ingredients: ["Green Tea", "Ice", "Lemon", "Honey"],
    price: 3.99,
    rating: 4.6,
    tags: ["green tea", "fresh"]
  }
]

