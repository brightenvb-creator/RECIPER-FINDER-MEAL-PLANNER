import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Recipe } from '../../types';
import { useApp } from '../../contexts/AppContext';
import { daysOfWeek } from '../../data/mockData';

interface MealPlanModalProps {
  recipe: Recipe;
  onClose: () => void;
}

export const MealPlanModal: React.FC<MealPlanModalProps> = ({ recipe, onClose }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('');
  const { addToMealPlan } = useApp();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDay && selectedMeal) {
      addToMealPlan(selectedDay, selectedMeal, recipe);
      onClose();
    }
  };

  const meals = ['breakfast', 'lunch', 'dinner'];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-900">Add to Meal Plan</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex items-center mb-6">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-12 h-12 rounded-lg object-cover mr-3"
            />
            <div>
              <h4 className="font-medium text-gray-900">{recipe.name}</h4>
              <p className="text-sm text-gray-500">{recipe.category}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Day
              </label>
              <select
                value={selectedDay}
                onChange={(e) => setSelectedDay(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                required
              >
                <option value="">Choose a day</option>
                {daysOfWeek.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Meal
              </label>
              <div className="grid grid-cols-3 gap-2">
                {meals.map(meal => (
                  <button
                    key={meal}
                    type="button"
                    onClick={() => setSelectedMeal(meal)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedMeal === meal
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedDay || !selectedMeal}
              className="flex-1 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Add to Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};