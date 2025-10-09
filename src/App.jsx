import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardContent from './pages/DashboardContent';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          isDark={isDark}
        />
        
        {isSidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)} 
            className="fixed inset-0 bg-black/50 z-20 md:hidden"
          ></div>
        )}

        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header 
            setSidebarOpen={setSidebarOpen} 
            theme={theme} 
            toggleTheme={toggleTheme}
            isDark={isDark}
          />
          <DashboardContent theme={theme} isDark={isDark} />
        </div>
      </div>
    </div>
  );
}

export default App;