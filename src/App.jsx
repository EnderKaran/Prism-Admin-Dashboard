import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardContent from './pages/DashboardContent';
import CalendarPage from './pages/CalendarPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
 
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    
    <div className='min-h-screen'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar isSidebarOpen={isSidebarOpen} theme={theme} toggleTheme={toggleTheme} />
        
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
          />
          
         
          <main className="flex-1 overflow-y-auto">
            <Routes>
              
              <Route path="/" element={<DashboardContent theme={theme} />} />
              <Route path="/dashboard" element={<DashboardContent theme={theme} />} />
              
              <Route path="/calendar" element={<CalendarPage theme={theme} />} />
              <Route path="/customers" element={<div>Customers Page</div>} />
              <Route path="/orders" element={<div>Orders Page</div>} />
              <Route path="/analytics" element={<div>Analytics Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
              <Route path="/profile" element={<ProfilePage theme={theme} />} />
            </Routes>
          </main>
          
        </div>
      </div>
    </div>
  );
}

export default App;