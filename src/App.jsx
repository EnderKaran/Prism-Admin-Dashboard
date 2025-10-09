import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // 1. Routing için gerekli bileşenleri import et
import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import DashboardContent from './pages/DashboardContent';
import CalendarPage from './pages/CalendarPage'; // 2. Yeni takvim sayfasını import et
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // Tema yönetimi (localStorage ile kalıcı hale getirildi)
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
    // Arkaplan rengi artık index.css'ten yönetiliyor
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
          
          {/* 3. Sayfa içeriği artık URL'e göre dinamik olarak değişecek */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              {/* Ana sayfa ve /dashboard için DashboardContent'i göster */}
              <Route path="/" element={<DashboardContent theme={theme} />} />
              <Route path="/dashboard" element={<DashboardContent theme={theme} />} />
              
              {/* /calendar için CalendarPage'i göster */}
              <Route path="/calendar" element={<CalendarPage theme={theme} />} />

              {/* Diğer sayfalar için örnekler (henüz oluşturulmadı) */}
              <Route path="/customers" element={<div>Customers Page</div>} />
              <Route path="/orders" element={<div>Orders Page</div>} />
              <Route path="/analytics" element={<div>Analytics Page</div>} />
              <Route path="/settings" element={<div>Settings Page</div>} />
            </Routes>
          </main>
          
        </div>
      </div>
    </div>
  );
}

export default App;