import React from 'react';
import { Check, ShoppingCart, Trash2 } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';

export const ShoppingList: React.FC = () => {
  const { shoppingList, toggleShoppingItem, clearShoppingList } = useApp();

  const checkedItems = shoppingList.filter(item => item.checked);
  const uncheckedItems = shoppingList.filter(item => !item.checked);

  if (shoppingList.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Shopping List Yet</h2>
          <p className="text-gray-600 mb-8">
            Add recipes to your meal plan and generate a shopping list automatically
          </p>
        </div>
      </div>
    );
  }

  const completionPercentage = Math.round((checkedItems.length / shoppingList.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Shopping List</h2>
          <p className="text-gray-600">
            {shoppingList.length} items • {completionPercentage}% complete
          </p>
        </div>
        
        <button
          onClick={clearShoppingList}
          className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear List
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Unchecked Items */}
        {uncheckedItems.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              To Buy ({uncheckedItems.length})
            </h3>
            <div className="bg-white rounded-lg border divide-y">
              {uncheckedItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-center p-4 hover:bg-gray-50 transition-colors"
                >
                  <button
                    onClick={() => toggleShoppingItem(item.id)}
                    className="flex-shrink-0 w-6 h-6 border-2 border-gray-300 rounded-full hover:border-emerald-500 transition-colors mr-4 flex items-center justify-center"
                  >
                    {item.checked && (
                      <Check className="w-4 h-4 text-emerald-600" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500 font-medium">
                        {item.amount} {item.unit}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      For: {item.recipeNames.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Checked Items */}
        {checkedItems.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Completed ({checkedItems.length})
            </h3>
            <div className="bg-white rounded-lg border divide-y">
              {checkedItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-center p-4 hover:bg-gray-50 transition-colors opacity-75"
                >
                  <button
                    onClick={() => toggleShoppingItem(item.id)}
                    className="flex-shrink-0 w-6 h-6 bg-emerald-500 border-2 border-emerald-500 rounded-full hover:bg-emerald-600 transition-colors mr-4 flex items-center justify-center"
                  >
                    <Check className="w-4 h-4 text-white" />
                  </button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-500 line-through">{item.name}</span>
                      <span className="text-sm text-gray-400 font-medium">
                        {item.amount} {item.unit}
                      </span>
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      For: {item.recipeNames.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};