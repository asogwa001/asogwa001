// Import all project components here
import ECommerceApp from './ECommerceApp';
import TaskManager from './TaskManager';
import WeatherDashboard from './WeatherDashboard';
import ChatApplication from './ChatApplication';

// Export all projects in a single object
// This makes it easy to add new projects - just import above and add to this object
export const projects = {
  'ecommerce-app': ECommerceApp,
  'task-manager': TaskManager,
  'weather-dashboard': WeatherDashboard,
  'chat-application': ChatApplication,
};

// To add a new project:
// 1. Create a new component file in this folder
// 2. Import it above
// 3. Add it to the projects object with a unique key
// 4. Your project will automatically appear in the sidebar!