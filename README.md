# Recipe Meal Planner

A modern web application built with React, TypeScript, and Vite for managing recipes, meal planning, and generating shopping lists.

## Features

- **Recipe Management**: Browse and search through a curated list of recipes with detailed information including ingredients, instructions, cook time, servings, difficulty level, and nutrition facts.
- **Authentication**: User login and signup with email/password. Includes a demo account for testing.
- **Favorites System**: Mark recipes as favorites and view them in a dedicated section.
- **Meal Planning**: Add recipes to a weekly meal plan organized by day (Monday-Sunday) and meal type (breakfast, lunch, dinner).
- **Shopping List Generation**: Automatically generates a shopping list by aggregating ingredients from recipes in the meal plan, with progress tracking and check-off functionality.
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS.

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context (AuthContext for authentication, AppContext for application state)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/brightenvb-creator/RECIPER-FINDER-MEAL-PLANNER.git
   cd RECIPER-FINDER-MEAL-PLANNER
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5174/`

### Demo Account

- Email: `demo@example.com`
- Password: `password`

## Project Structure

```
src/
├── components/
│   ├── auth/          # Authentication components (LoginForm, SignupForm)
│   ├── favorites/      # Favorites list component
│   ├── layout/        # Header component
│   ├── meal-plan/     # Meal planning components
│   ├── recipes/       # Recipe-related components
│   └── shopping/      # Shopping list component
├── contexts/          # React context providers (AuthContext, AppContext)
├── data/             # Mock data files
├── types/            # TypeScript type definitions
└── main.tsx          # Application entry point
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
