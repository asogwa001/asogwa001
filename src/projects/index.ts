// Import all project components here
// import ECommerceApp from './ECommerceApp';
// import TaskManager from './TaskManager';
// import WeatherDashboard from './WeatherDashboard';
// import ChatApplication from './ChatApplication';

import uCoreOS from './uCoreOS'
import YOLO11Cam from './YOLO11Cam';
import CtcController from './CtcController';
import EnergyUsageProfiler from './EnergyUsageProfiler';
import AutomatedEcgProcessing from './AutomatedEcgProcessing';
import WirelessLocalization from './WirelessLocalization';
import WorkshopDigitalTwin from './WorkshopDigitalTwin';
import MicroPrompts from './MicroPrompts';
import InternedStrings from './InternedStrings';
import JAMBAgent from './JAMBAgent';
import GeoGenerator from './GeoGenerator';
// Export all projects in a single object
// This makes it easy to add new projects - just import above and add to this object
export const projects = {
  'ucore-os': uCoreOS,
  'geo-generator': GeoGenerator,
  'jamb-ai-agent': JAMBAgent,
  'yolo-v11-camera': YOLO11Cam,
  'ctc-controller': CtcController,
  'energy-usage-profiler': EnergyUsageProfiler,
  'automated-ecg-processing': AutomatedEcgProcessing,
  'wireless-localization': WirelessLocalization,
  'workshop-digital-twin': WorkshopDigitalTwin,
  'micro-prompts': MicroPrompts,
  'interned-strings': InternedStrings,
  // 'ecommerce-app': ECommerceApp,
  // 'task-manager': TaskManager,
  // 'weather-dashboard': WeatherDashboard,
  // 'chat-application': ChatApplication,
};

// To add a new project:
// 1. Create a new component file in this folder
// 2. Import it above
// 3. Add it to the projects object with a unique key
// 4. Your project will automatically appear in the sidebar!