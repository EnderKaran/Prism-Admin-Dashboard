import React from 'react';
import { User, Settings, Info, LogOut } from 'lucide-react';

const menuItems = [
  { icon: User, text: 'Edit profile', href: '#' },
  { icon: Settings, text: 'Account settings', href: '#' },
  { icon: Info, text: 'Support', href: '#' },
];

function ProfileDropdown({ isOpen, onClose, theme }) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`
        absolute top-full right-0 mt-2 w-64 z-20
        rounded-lg shadow-xl border
        transition-all duration-300 ease-in-out origin-top-right
        ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}
      `}
    >
      {/* Kullanıcı Bilgisi Bölümü */}
      <div className={`p-4 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <p className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>Terry Franci</p>
        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>randomuser@prism.com</p>
      </div>

     

      {/* Menü Linkleri */}
      <div className="p-2">
        <nav>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    isDark ? 'text-slate-300 hover:bg-slate-700/50' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Ayırıcı Çizgi */}
        <hr className={`my-2 ${isDark ? 'border-slate-700' : 'border-slate-200'}`} />
        
        {/* Çıkış Yap Butonu */}
        <button
          className={`flex items-center w-full space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
            isDark ? 'text-red-400 hover:bg-slate-700/50' : 'text-red-500 hover:bg-red-50'
          }`}
        >
          <LogOut className="w-4 h-4" />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown;