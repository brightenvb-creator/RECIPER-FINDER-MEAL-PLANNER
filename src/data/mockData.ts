import { Recipe } from '../types';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Creamy Tuscan Chicken',
    description: 'Succulent chicken breast in a rich, creamy sauce with sun-dried tomatoes and spinach',
    category: 'Main Course',
    cookTime: 30,
    servings: 4,
    difficulty: 'Medium',
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '1', name: 'Chicken breast', amount: '4', unit: 'pieces' },
      { id: '2', name: 'Heavy cream', amount: '1', unit: 'cup' },
      { id: '3', name: 'Sun-dried tomatoes', amount: '1/2', unit: 'cup' },
      { id: '4', name: 'Fresh spinach', amount: '2', unit: 'cups' },
      { id: '5', name: 'Garlic', amount: '3', unit: 'cloves' },
      { id: '6', name: 'Olive oil', amount: '2', unit: 'tbsp' },
      { id: '7', name: 'Italian seasoning', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      'Season chicken breasts with salt, pepper, and Italian seasoning',
      'Heat olive oil in a large skillet over medium-high heat',
      'Cook chicken until golden brown and cooked through, about 6-7 minutes per side',
      'Remove chicken and set aside',
      'Add garlic to the same pan and sauté for 1 minute',
      'Add sun-dried tomatoes and cook for 2 minutes',
      'Pour in heavy cream and bring to a simmer',
      'Add spinach and cook until wilted',
      'Return chicken to the pan and simmer for 2-3 minutes',
      'Serve immediately with your favorite sides'
    ],
    nutrition: { calories: 420, protein: 35, carbs: 8, fat: 28 }
  },
  {
    id: '2',
    name: 'Mediterranean Quinoa Bowl',
    description: 'A nutritious and colorful bowl with quinoa, fresh vegetables, and tahini dressing',
    category: 'Healthy',
    cookTime: 25,
    servings: 2,
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '8', name: 'Quinoa', amount: '1', unit: 'cup' },
      { id: '9', name: 'Cherry tomatoes', amount: '1', unit: 'cup' },
      { id: '10', name: 'Cucumber', amount: '1', unit: 'medium' },
      { id: '11', name: 'Red onion', amount: '1/4', unit: 'cup' },
      { id: '12', name: 'Feta cheese', amount: '1/2', unit: 'cup' },
      { id: '13', name: 'Tahini', amount: '3', unit: 'tbsp' },
      { id: '14', name: 'Lemon juice', amount: '2', unit: 'tbsp' }
    ],
    instructions: [
      'Rinse quinoa and cook according to package directions',
      'Let quinoa cool to room temperature',
      'Dice cucumber and red onion',
      'Halve cherry tomatoes',
      'Whisk together tahini, lemon juice, and a pinch of salt',
      'Combine quinoa with vegetables',
      'Top with feta cheese',
      'Drizzle with tahini dressing before serving'
    ],
    nutrition: { calories: 380, protein: 15, carbs: 45, fat: 18 }
  },
  {
    id: '3',
    name: 'Classic Beef Stir Fry',
    description: 'Quick and flavorful beef stir fry with crisp vegetables in a savory sauce',
    category: 'Main Course',
    cookTime: 20,
    servings: 4,
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '15', name: 'Beef sirloin', amount: '1', unit: 'lb' },
      { id: '16', name: 'Bell peppers', amount: '2', unit: 'pieces' },
      { id: '17', name: 'Broccoli florets', amount: '2', unit: 'cups' },
      { id: '18', name: 'Soy sauce', amount: '3', unit: 'tbsp' },
      { id: '19', name: 'Ginger', amount: '1', unit: 'tbsp' },
      { id: '20', name: 'Sesame oil', amount: '2', unit: 'tsp' },
      { id: '21', name: 'Cornstarch', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Slice beef into thin strips',
      'Toss beef with cornstarch and 1 tbsp soy sauce',
      'Heat oil in a wok or large skillet over high heat',
      'Stir-fry beef until browned, about 3-4 minutes',
      'Add vegetables and stir-fry for 3-4 minutes',
      'Add remaining soy sauce, ginger, and sesame oil',
      'Stir-fry for another 1-2 minutes until heated through',
      'Serve over rice'
    ],
    nutrition: { calories: 320, protein: 28, carbs: 12, fat: 18 }
  },
  {
    id: '4',
    name: 'Avocado Toast Supreme',
    description: 'Elevated avocado toast with poached egg, cherry tomatoes, and everything bagel seasoning',
    category: 'Breakfast',
    cookTime: 10,
    servings: 2,
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '22', name: 'Sourdough bread', amount: '2', unit: 'slices' },
      { id: '23', name: 'Avocado', amount: '1', unit: 'large' },
      { id: '24', name: 'Eggs', amount: '2', unit: 'pieces' },
      { id: '25', name: 'Cherry tomatoes', amount: '1/2', unit: 'cup' },
      { id: '26', name: 'Everything bagel seasoning', amount: '1', unit: 'tsp' },
      { id: '27', name: 'Lime juice', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Toast sourdough bread slices until golden',
      'Poach eggs in simmering water for 3-4 minutes',
      'Mash avocado with lime juice and salt',
      'Spread avocado mixture on toast',
      'Top with poached egg',
      'Add halved cherry tomatoes',
      'Sprinkle with everything bagel seasoning'
    ],
    nutrition: { calories: 340, protein: 16, carbs: 28, fat: 22 }
  },
  {
    id: '5',
    name: 'Thai Coconut Curry',
    description: 'Aromatic coconut curry with vegetables and fragrant herbs',
    category: 'Main Course',
    cookTime: 35,
    servings: 4,
    difficulty: 'Medium',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '28', name: 'Coconut milk', amount: '1', unit: 'can' },
      { id: '29', name: 'Red curry paste', amount: '2', unit: 'tbsp' },
      { id: '30', name: 'Sweet potato', amount: '1', unit: 'large' },
      { id: '31', name: 'Bell pepper', amount: '1', unit: 'piece' },
      { id: '32', name: 'Thai basil', amount: '1/4', unit: 'cup' },
      { id: '33', name: 'Fish sauce', amount: '2', unit: 'tbsp' },
      { id: '34', name: 'Brown sugar', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Cube sweet potato and bell pepper',
      'Heat 1/4 cup coconut milk in a large pan',
      'Add curry paste and cook until fragrant',
      'Add remaining coconut milk and bring to a simmer',
      'Add sweet potato and cook for 10 minutes',
      'Add bell pepper and cook for 5 minutes',
      'Season with fish sauce and brown sugar',
      'Garnish with Thai basil and serve over rice'
    ],
    nutrition: { calories: 280, protein: 8, carbs: 35, fat: 15 }
  },
  {
    id: '6',
    name: 'Chocolate Chip Cookies',
    description: 'Classic homemade chocolate chip cookies with the perfect chewy texture',
    category: 'Dessert',
    cookTime: 25,
    servings: 24,
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=800',
    ingredients: [
      { id: '35', name: 'All-purpose flour', amount: '2.25', unit: 'cups' },
      { id: '36', name: 'Butter', amount: '1', unit: 'cup' },
      { id: '37', name: 'Brown sugar', amount: '3/4', unit: 'cup' },
      { id: '38', name: 'White sugar', amount: '3/4', unit: 'cup' },
      { id: '39', name: 'Eggs', amount: '2', unit: 'pieces' },
      { id: '40', name: 'Chocolate chips', amount: '2', unit: 'cups' },
      { id: '41', name: 'Vanilla extract', amount: '2', unit: 'tsp' }
    ],
    instructions: [
      'Preheat oven to 375°F (190°C)',
      'Cream butter and both sugars until fluffy',
      'Beat in eggs and vanilla',
      'Gradually add flour and mix until combined',
      'Fold in chocolate chips',
      'Drop rounded tablespoons onto baking sheets',
      'Bake for 9-11 minutes until golden brown',
      'Cool on baking sheet for 5 minutes before transferring'
    ],
    nutrition: { calories: 180, protein: 2, carbs: 24, fat: 9 }
  }
];

export const mockUser = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  favoriteRecipes: ['1', '2']
};

export const recipeCategories = [
  'All',
  'Breakfast',
  'Main Course',
  'Healthy',
  'Dessert',
  'Appetizer',
  'Vegetarian',
  'Quick & Easy'
];

export const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];