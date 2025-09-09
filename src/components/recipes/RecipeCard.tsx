import React from 'react';
import { Clock, Users, ChefHat, Heart } from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../contexts/AppContext';

interface RecipeCardProps {
  recipe: Recipe;
  onViewDetails: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onViewDetails }) => {
  const { favoriteRecipes, addToFavorites, removeFromFavorites } = useApp();
  const isFavorite = favoriteRecipes.includes(recipe.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
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
    <div
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden group"
      onClick={() => onViewDetails(recipe)}
    >
      <div className="relative">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`}
          />
        </button>
        <div className="absolute bottom-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
            {recipe.name}
          </h3>
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full ml-2 shrink-0">
            {recipe.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{recipe.cookTime}m</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{recipe.servings}</span>
            </div>
          </div>
          <div className="flex items-center">
            <ChefHat className="w-4 h-4 mr-1" />
            <span>{recipe.nutrition.calories} cal</span>
          </div>
        </div>
      </div>
    </div>
  );
};