import React, { useState, useMemo } from 'react';
import { RecipeCard } from './RecipeCard';
import { RecipeDetails } from './RecipeDetails';
import { MealPlanModal } from '../meal-plan/MealPlanModal';
import { Recipe } from '../../types';
import { mockRecipes, recipeCategories } from '../../data/mockData';

interface RecipeListProps {
  searchQuery: string;
}

export const RecipeList: React.FC<RecipeListProps> = ({ searchQuery }) => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showMealPlanModal, setShowMealPlanModal] = useState(false);
  const [recipeToAdd, setRecipeToAdd] = useState<Recipe | null>(null);

  const filteredRecipes = useMemo(() => {
    return mockRecipes.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           recipe.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleAddToMealPlan = (recipe: Recipe) => {
    setRecipeToAdd(recipe);
    setSelectedRecipe(null);
    setShowMealPlanModal(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {recipeCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600">
          {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''} found
          {searchQuery && ` for "${searchQuery}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map(recipe => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onViewDetails={setSelectedRecipe}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No recipes found</p>
          <p className="text-gray-400">Try adjusting your search or filters</p>
        </div>
      )}

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