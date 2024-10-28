import React, { useState } from 'react';
import { User, FolderOpen } from 'lucide-react';
import MeTab from './components/MeTab';
import ProjectsTab from './components/ProjectsTab';

function App() {
  const [activeTab, setActiveTab] = useState<'me' | 'projects'>('me');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Portfolio</h1>
          <p className="text-slate-600">Welcome to my digital space</p>
        </header>

        {/* Tab Navigation */}
        <nav className="mb-8">
          <div className="flex space-x-1 bg-white p-1 rounded-lg shadow-sm border border-slate-200 inline-flex">
            <button
              onClick={() => setActiveTab('me')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'me'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              <User size={20} />
              <span>Me</span>
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-800 hover:bg-slate-100'
              }`}
            >
              <FolderOpen size={20} />
              <span>Directory</span>
            </button>
          </div>
        </nav>

        {/* Tab Content */}
        <main className="transition-opacity duration-300">
          {activeTab === 'me' && <MeTab />}
          {activeTab === 'projects' && <ProjectsTab />}
        </main>
      </div>
    </div>
  );
}

export default App;