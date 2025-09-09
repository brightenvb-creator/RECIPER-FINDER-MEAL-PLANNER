import React from 'react';
import { X, Clock, Users, ChefHat, Heart, Plus } from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../contexts/AppContext';

interface RecipeDetailsProps {
  recipe: Recipe;
  onClose: () => void;
  onAddToMealPlan: (recipe: Recipe) => void;
}

export const RecipeDetails: React.FC<RecipeDetailsProps> = ({ 
  recipe, 
  onClose, 
  onAddToMealPlan 
}) => {
  const { favoriteRecipes, addToFavorites, removeFromFavorites } = useApp();
  const isFavorite = favoriteRecipes.includes(recipe.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe.id);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{recipe.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  {recipe.category}
                </span>
              </div>

              <p className="text-gray-600 mb-6">{recipe.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="font-medium text-gray-900">{recipe.cookTime} minutes</div>
                    <div className="text-sm text-gray-500">Cook time</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-gray-400 mr-2" />
                  <div>
                    <div className="font-medium text-gray-900">{recipe.servings} servings</div>
                    <div className="text-sm text-gray-500">Serves</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Nutrition (per serving)</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Calories: <span className="font-medium">{recipe.nutrition.calories}</span></div>
                  <div>Protein: <span className="font-medium">{recipe.nutrition.protein}g</span></div>
                  <div>Carbs: <span className="font-medium">{recipe.nutrition.carbs}g</span></div>
                  <div>Fat: <span className="font-medium">{recipe.nutrition.fat}g</span></div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleFavoriteClick}
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
                    isFavorite
                      ? 'bg-red-50 text-red-600 hover:bg-red-100'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                  {isFavorite ? 'Favorited' : 'Add to Favorites'}
                </button>
                <button
                  onClick={() => onAddToMealPlan(recipe)}
                  className="flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Meal Plan
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 border-t">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-700">{ingredient.name}</span>
                      <span className="text-sm text-gray-500 font-medium">
                        {ingredient.amount} {ingredient.unit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h3>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};