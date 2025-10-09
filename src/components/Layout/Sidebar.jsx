import React from 'react';
import { Zap, LayoutDashboard, Users, ShoppingCart, BarChart3, Settings, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { name: 'Customers', icon: Users, href: '#' },
  { name: 'Orders', icon: ShoppingCart, href: '#' },
  { name: 'Analytics', icon: BarChart3, href: '#' },
];

const bottomNavItems = [
  { name: 'Settings', icon: Settings, href: '#' },
  { name: 'Logout', icon: LogOut, href: '#' },
];

function Sidebar({ isSidebarOpen, activeItem, setActiveItem, isDark }) {
  const NavLink = ({ item }) => (
    <li>
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault();
          setActiveItem(item.name);
        }}
        className={`
          flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200
          ${activeItem === item.name
            ? 'bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700'
            : isDark 
              ? 'text-slate-300 hover:bg-slate-800/50' 
              : 'text-slate-600 hover:bg-slate-100'
          }
        `}
      >
        <item.icon className='w-5 h-5' />
        <span>{item.name}</span>
      </a>
    </li>
  );

  return (
    <div 
      className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed inset-y-0 left-0 z-30 w-64
        backdrop-blur-xl 
        border-r
        flex flex-col
        transition-all duration-300 ease-in-out md:relative md:translate-x-0
        ${isDark 
          ? 'bg-slate-900 border-slate-700/50' 
          : 'bg-white border-slate-200/50'
        }
      `}
    >
      {/* Logo */}
      <div className={`p-6 border-b ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
            <Zap className='w-6 h-6 text-white'/>
          </div>
          <div>
            <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Prism</h1>
            <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>
        <ul className='space-y-2'>
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </ul>
      </nav>

      {/* Alt Kısım: Ayarlar ve Çıkış Yap */}
      <div className={`p-4 border-t ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
        <ul className='space-y-2'>
          {bottomNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;