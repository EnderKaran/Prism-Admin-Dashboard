import React, { useState, useRef, useEffect } from 'react';
import { Bell, Menu, Search, Sun, Moon } from 'lucide-react';
import NotificationDropdown from '../Dropdowns/NotificationDropdown';

function Header({ setSidebarOpen, theme, toggleTheme }) {
  const isDark = theme === 'dark';

  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notificationRef]);

  return (
    <div className={`backdrop-blur-xl border-b px-6 py-4 sticky top-0 z-20 transition-all duration-300 ${
      isDark 
        ? 'bg-slate-900/80 border-slate-700/50' 
        : 'bg-white/80 border-slate-200/50'
    }`}>
      <div className='flex items-center justify-between'>
        {/* Sol Bölüm  */}
        <div className='flex items-center space-x-4'>
          <button 
            onClick={() => setSidebarOpen(true)} 
            className={`p-2 rounded-lg transition-colors md:hidden ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            <Menu className='w-6 h-6' />
          </button>
          <h1 className={`hidden md:block text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
            Dashboard
          </h1>
        </div>

        {/* Sağ Bölüm */}
        <div className='flex items-center space-x-2 sm:space-x-4'>
          <div className='relative hidden sm:block'>
            <Search className={`w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-slate-500' : 'text-slate-400'
            }`} />
            <input 
              type="text" 
              placeholder="Search..." 
              className={`w-full max-w-xs pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                isDark 
                  ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500' 
                  : 'bg-slate-100 border-transparent text-slate-800 placeholder-slate-400'
              }`}
            />
          </div>

          {/* Tema Değiştirme Butonu  */}
          <button 
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className='w-5 h-5' /> : <Sun className='w-5 h-5' />}
          </button>

          {/* Bildirimler Butonu ve Açılır Menü  */}
          <div ref={notificationRef} className="relative">
            <button 
              onClick={() => setNotificationOpen(prev => !prev)}
              className={`relative p-2.5 rounded-xl transition-colors ${isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Bell className='w-5 h-5' />
              <span className='absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full'></span>
            </button>
            <NotificationDropdown 
              isOpen={isNotificationOpen} 
              onClose={() => setNotificationOpen(false)}
              theme={theme}
            />
          </div>

          {/* Kullanıcı Profili */}
          <div className='pl-2'>
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs-tinysrgb&w=1600" 
              alt="User" 
              className='w-9 h-9 rounded-full cursor-pointer border-2 border-transparent hover:border-indigo-500 transition-colors' 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;