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
export const sampleFavorite = [
  {
    productId: "00001",
    name: "Veggie Pizza",
    category: "Pizza",
    ingredients: ["Tomato", "Cheese", "Basil"],
    price: 12.99,
    rating: 4.5,
    imageUrl: "",
    tags: ["vegetarian", "bestseller"]
  },
  {
    productId: "00002",
    name: "Spicy Chicken Burger",
    category: "Burger",
    ingredients: ["Chicken", "Lettuce", "Spicy Sauce", "Bun"],
    price: 10.49,
    rating: 4.3,
    imageUrl: "",
    tags: ["spicy", "non-veg"]
  },
  {
    productId: "00003",
    name: "Greek Salad",
    category: "Salad",
    ingredients: ["Feta", "Olives", "Cucumber", "Tomato"],
    price: 8.99,
    rating: 4.7,
    imageUrl: "",
    tags: ["vegetarian", "healthy", "gluten-free"]
  },
  {
    productId: "00004",
    name: "BBQ Chicken Pizza",
    category: "Pizza",
    ingredients: ["Chicken", "BBQ Sauce", "Cheese", "Onion"],
    price: 13.99,
    rating: 4.4,
    imageUrl: "",
    tags: ["non-veg", "smoky"]
  },
  {
    productId: "00005",
    name: "Cheeseburger",
    category: "Burger",
    ingredients: ["Beef", "Cheese", "Pickles", "Bun"],
    price: 11.49,
    rating: 4.2,
    imageUrl: "",
    tags: ["classic", "juicy"]
  },
  {
    productId: "00006",
    name: "Caprese Salad",
    category: "Salad",
    ingredients: ["Tomato", "Mozzarella", "Basil", "Olive Oil"],
    price: 9.25,
    rating: 4.6,
    imageUrl: "",
    tags: ["vegetarian", "fresh"]
  },
  {
    productId: "00007",
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    ingredients: ["Paneer", "Onion", "Capsicum", "Tikka Sauce"],
    price: 13.49,
    rating: 4.8,
    imageUrl: "",
    tags: ["spicy", "vegetarian", "indian"]
  },
  {
    productId: "00008",
    name: "Falafel Salad",
    category: "Salad",
    ingredients: ["Falafel", "Lettuce", "Tomato", "Tahini"],
    price: 9.75,
    rating: 4.5,
    imageUrl: "",
    tags: ["vegan", "protein-rich"]
  },
  {
    productId: "00009",
    name: "Double Patty Burger",
    category: "Burger",
    ingredients: ["Beef", "Cheese", "Onion Rings", "Bun"],
    price: 12.75,
    imageUrl: "",
    rating: 4.1,
    tags: ["heavy", "meaty"]
  },
  {
    productId: "00010",
    name: "Margherita Pizza",
    category: "Pizza",
    ingredients: ["Tomato", "Mozzarella", "Basil"],
    price: 11.99,
    rating: 4.9,
    tags:["vegetarian", "classic"],
  }

]