import React, { useState } from 'react';
import { Calendar, Plus, Trash2, ChefHat } from 'lucide-react';
import { RecipeDetails } from '../recipes/RecipeDetails';
import { Recipe } from '../../types';
import { useApp } from '../../contexts/AppContext';
import { daysOfWeek } from '../../data/mockData';

interface MealPlanViewProps {
  onTabChange: (tab: string) => void;
}

export const MealPlanView: React.FC<MealPlanViewProps> = ({ onTabChange }) => {
  const { mealPlan, removeFromMealPlan, generateShoppingList } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const meals = ['breakfast', 'lunch', 'dinner'];

  const handleGenerateShoppingList = () => {
    const allRecipes: Recipe[] = [];
    
    daysOfWeek.forEach(day => {
      const dayPlan = mealPlan[day];
      if (dayPlan) {
        meals.forEach(meal => {
          const recipe = dayPlan[meal as keyof typeof dayPlan];
          if (recipe) {
            allRecipes.push(recipe);
          }
        });
      }
    });

    generateShoppingList(allRecipes);
  };

  const getMealName = (meal: string) => {
    return meal.charAt(0).toUpperCase() + meal.slice(1);
  };

  const hasAnyMeals = Object.values(mealPlan).some(dayPlan => 
    Object.keys(dayPlan).length > 0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Weekly Meal Plan</h2>
          <p className="text-gray-600">Plan your meals for the week ahead</p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={() => onTabChange('recipes')}
            className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Recipe
          </button>
          
          {hasAnyMeals && (
            <button
              onClick={handleGenerateShoppingList}
              className="flex items-center px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Generate Shopping List
            </button>
          )}
        </div>
      </div>

      {!hasAnyMeals ? (
        <div className="text-center py-12">
          <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Meals Planned Yet</h3>
          <p className="text-gray-600 mb-6">
            Start planning your week by adding recipes to your meal plan
          </p>
          <button
            onClick={() => onTabChange('recipes')}
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your First Recipe
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {daysOfWeek.map(day => (
            <div key={day} className="bg-white rounded-xl shadow-sm border">
              <div className="px-6 py-4 border-b bg-gray-50 rounded-t-xl">
                <h3 className="text-lg font-semibold text-gray-900">{day}</h3>
              </div>
              
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {meals.map(meal => {
                    const recipe = mealPlan[day]?.[meal as keyof typeof mealPlan[string]];
                    
                    return (
                      <div key={meal} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{getMealName(meal)}</h4>
                          {recipe && (
                            <button
                              onClick={() => removeFromMealPlan(day, meal)}
                              className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                        
                        {recipe ? (
                          <div 
                            className="cursor-pointer group"
                            onClick={() => setSelectedRecipe(recipe)}
                          >
                            <img
                              src={recipe.image}
                              alt={recipe.name}
                              className="w-full h-32 object-cover rounded-lg mb-2 group-hover:scale-105 transition-transform"
                            />
                            <h5 className="font-medium text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">
                              {recipe.name}
                            </h5>
                            <p className="text-xs text-gray-500 mt-1">
                              {recipe.cookTime}m • {recipe.servings} servings
                            </p>
                          </div>
                        ) : (
                          <div 
                            className="h-32 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-emerald-300 hover:bg-emerald-50 transition-colors group"
                            onClick={() => onTabChange('recipes')}
                          >
                            <div className="text-center">
                              <Plus className="w-6 h-6 text-gray-400 group-hover:text-emerald-500 mx-auto mb-1" />
                              <span className="text-sm text-gray-500 group-hover:text-emerald-600">Add recipe</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onAddToMealPlan={() => onTabChange('recipes')}
        />
      )}
    </div>
  );
};