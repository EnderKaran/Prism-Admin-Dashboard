import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';

// Oluşturulan sayfaları import et
import DashboardContent from './pages/DashboardContent';
import CalendarPage from './pages/CalendarPage';
import ProfilePage from './pages/ProfilePage';
import CustomersPage from './pages/CustomersPage'; 
import OrdersPage from './pages/OrdersPage';     
import AnalyticsPage from './pages/AnalyticsPage'; 

import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
 
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  
  // isDark değişkenini burada da tanımla
  const isDark = theme === 'dark';

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
            className="fixed inset-0 z-20 bg-black/50 md:hidden"
          ></div>
        )}

        <div className='flex flex-col flex-1 overflow-hidden'>
          <Header 
            setSidebarOpen={setSidebarOpen} 
            theme={theme} 
            toggleTheme={toggleTheme}
          />
          
         
          {/* GÜNCELLENDİ: Ana <main> etiketi artık arka plan rengini ve padding'i buradan alıyor */}
          <main className={`flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 transition-colors duration-300 ${
            isDark ? 'bg-slate-900' : 'bg-slate-50'
          }`}>
            <Routes>
              <Route path="/" element={<DashboardContent theme={theme} />} />
              <Route path="/dashboard" element={<DashboardContent theme={theme} />} />
              <Route path="/calendar" element={<CalendarPage theme={theme} />} />
              <Route path="/customers" element={<CustomersPage theme={theme} />} />
              <Route path="/orders" element={<OrdersPage theme={theme} />} />
              <Route path="/analytics" element={<AnalyticsPage theme={theme} />} />
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

