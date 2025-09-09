export interface Recipe {
  id: string;
  name: string;
  description: string;
  category: string;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image: string;
  ingredients: Ingredient[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  favoriteRecipes: string[];
}

export interface MealPlan {
  [day: string]: {
    breakfast?: Recipe;
    lunch?: Recipe;
    dinner?: Recipe;
  };
}

export interface ShoppingListItem {
  id: string;
  name: string;
  amount: string;
  unit: string;
  checked: boolean;
  recipeNames: string[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}