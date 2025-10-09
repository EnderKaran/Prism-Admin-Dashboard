import React from 'react';
import { X } from 'lucide-react';

const notifications = [
    // ... (veri kısmı aynı, değişiklik yok) ...
  {
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Terry Franci',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    category: 'Project',
    time: '5 min ago',
    status: 'online',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Alena Franci',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    category: 'Project',
    time: '8 min ago',
    status: 'online',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/women/67.jpg',
    name: 'Jocelyn Kenter',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    category: 'Project',
    time: '15 min ago',
    status: 'online',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'Brandon Philips',
    action: 'requests permission to change',
    project: 'Project - Nganter App',
    category: 'Project',
    time: '1 hr ago',
    status: 'offline',
  },
];

// DEĞİŞİKLİK 1: 'theme' prop'unu alıyoruz
function NotificationDropdown({ isOpen, onClose, theme }) {
  // DEĞİŞİKLİK 2: Tema durumuna göre isDark değişkeni oluşturuyoruz
  const isDark = theme === 'dark';

  return (
    <div 
      className={`
        absolute top-full right-0 mt-2 w-80 z-20
        rounded-lg shadow-xl
        transition-all duration-300 ease-in-out origin-top-right
        ${isOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}
        ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}
      `}
    >
      {/* Başlık Bölümü */}
      <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <h3 className={`font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Notification</h3>
        <button onClick={onClose} className={`transition-colors ${isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600'}`}>
          <X size={20} />
        </button>
      </div>

      {/* Bildirim Listesi */}
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notif, index) => (
          <a href="#" key={index} className={`flex items-start space-x-4 p-4 transition-colors ${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-slate-50'}`}>
            <div className="relative">
              <img src={notif.avatar} alt={notif.name} className="w-10 h-10 rounded-full" />
              <span className={`
                absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2
                ${isDark ? 'border-slate-800' : 'border-white'}
                ${notif.status === 'online' ? 'bg-green-500' : 'bg-red-500'}
              `}></span>
            </div>
            <div className="flex-1">
              <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>{notif.name}</strong> {notif.action} <strong className={isDark ? 'text-white' : 'text-slate-900'}>{notif.project}</strong>
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                {notif.category} • {notif.time}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Alt Kısım Butonu */}
      <div className={`p-2 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
        <button className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${isDark ? 'text-indigo-400 hover:bg-slate-700/50' : 'text-indigo-600 hover:bg-slate-100'}`}>
          View All Notifications
        </button>
      </div>
    </div>
  );
}

export default NotificationDropdown;