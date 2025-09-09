import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipe, MealPlan, ShoppingListItem } from '../types';

interface AppContextType {
  favoriteRecipes: string[];
  mealPlan: MealPlan;
  shoppingList: ShoppingListItem[];
  addToFavorites: (recipeId: string) => void;
  removeFromFavorites: (recipeId: string) => void;
  addToMealPlan: (day: string, meal: string, recipe: Recipe) => void;
  removeFromMealPlan: (day: string, meal: string) => void;
  generateShoppingList: (recipes: Recipe[]) => void;
  toggleShoppingItem: (itemId: string) => void;
  clearShoppingList: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState<string[]>(['1', '2']);
  const [mealPlan, setMealPlan] = useState<MealPlan>({});
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);

  const addToFavorites = (recipeId: string) => {
    setFavoriteRecipes(prev => [...prev, recipeId]);
  };

  const removeFromFavorites = (recipeId: string) => {
    setFavoriteRecipes(prev => prev.filter(id => id !== recipeId));
  };

  const addToMealPlan = (day: string, meal: string, recipe: Recipe) => {
    setMealPlan(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [meal]: recipe
      }
    }));
  };

  const removeFromMealPlan = (day: string, meal: string) => {
    setMealPlan(prev => {
      const dayPlan = { ...prev[day] };
      delete dayPlan[meal as keyof typeof dayPlan];
      return {
        ...prev,
        [day]: dayPlan
      };
    });
  };

  const generateShoppingList = (recipes: Recipe[]) => {
    const ingredientMap = new Map<string, ShoppingListItem>();

    recipes.forEach(recipe => {
      recipe.ingredients.forEach(ingredient => {
        const key = ingredient.name.toLowerCase();
        
        if (ingredientMap.has(key)) {
          const existing = ingredientMap.get(key)!;
          existing.recipeNames.push(recipe.name);
        } else {
          ingredientMap.set(key, {
            id: ingredient.id,
            name: ingredient.name,
            amount: ingredient.amount,
            unit: ingredient.unit,
            checked: false,
            recipeNames: [recipe.name]
          });
        }
      });
    });

    setShoppingList(Array.from(ingredientMap.values()));
  };

  const toggleShoppingItem = (itemId: string) => {
    setShoppingList(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  const value: AppContextType = {
    favoriteRecipes,
    mealPlan,
    shoppingList,
    addToFavorites,
    removeFromFavorites,
    addToMealPlan,
    removeFromMealPlan,
    generateShoppingList,
    toggleShoppingItem,
    clearShoppingList
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};