import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';
import { LoginForm } from './components/auth/LoginForm';
import { SignupForm } from './components/auth/SignupForm';
import { Header } from './components/layout/Header';
import { RecipeList } from './components/recipes/RecipeList';
import { FavoritesList } from './components/favorites/FavoritesList';
import { MealPlanView } from './components/meal-plan/MealPlanView';
import { ShoppingList } from './components/shopping/ShoppingList';

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [activeTab, setActiveTab] = useState('recipes');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isAuthenticated) {
    return isLoginMode ? (
      <LoginForm onToggleMode={() => setIsLoginMode(false)} />
    ) : (
      <SignupForm onToggleMode={() => setIsLoginMode(true)} />
    );
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'recipes':
        return <RecipeList searchQuery={searchQuery} />;
      case 'favorites':
        return <FavoritesList />;
      case 'meal-plan':
        return <MealPlanView onTabChange={setActiveTab} />;
      case 'shopping':
        return <ShoppingList />;
      default:
        return <RecipeList searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeTab={activeTab}
        onTabChange={setActiveTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <main className="pb-safe">
        {renderActiveTab()}
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </AuthProvider>
  );
}

export default App;