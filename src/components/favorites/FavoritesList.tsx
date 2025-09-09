import React, { useState, useMemo } from 'react';
import { Heart } from 'lucide-react';
import { RecipeCard } from '../recipes/RecipeCard';
import { RecipeDetails } from '../recipes/RecipeDetails';
import { MealPlanModal } from '../meal-plan/MealPlanModal';
import { Recipe } from '../../types';
import { useApp } from '../../contexts/AppContext';
import { mockRecipes } from '../../data/mockData';

export const FavoritesList: React.FC = () => {
  const { favoriteRecipes } = useApp();
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showMealPlanModal, setShowMealPlanModal] = useState(false);
  const [recipeToAdd, setRecipeToAdd] = useState<Recipe | null>(null);

  const favoriteRecipeObjects = useMemo(() => {
    return mockRecipes.filter(recipe => favoriteRecipes.includes(recipe.id));
  }, [favoriteRecipes]);

  const handleAddToMealPlan = (recipe: Recipe) => {
    setRecipeToAdd(recipe);
    setSelectedRecipe(null);
    setShowMealPlanModal(true);
  };

  if (favoriteRecipeObjects.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Favorite Recipes Yet</h2>
          <p className="text-gray-600 mb-8">
            Start exploring recipes and save your favorites by clicking the heart icon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Favorite Recipes</h2>
        <p className="text-gray-600">
          {favoriteRecipeObjects.length} recipe{favoriteRecipeObjects.length !== 1 ? 's' : ''} saved
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteRecipeObjects.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onViewDetails={setSelectedRecipe}
          />
        ))}
      </div>

      {/* Recipe Details Modal */}
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onAddToMealPlan={handleAddToMealPlan}
        />
      )}

      {/* Meal Plan Modal */}
      {showMealPlanModal && recipeToAdd && (
        <MealPlanModal
          recipe={recipeToAdd}
          onClose={() => {
            setShowMealPlanModal(false);
            setRecipeToAdd(null);
          }}
        />
      )}
    </div>
  );
};