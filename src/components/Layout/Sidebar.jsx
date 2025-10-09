import React from 'react';

import { Zap, LayoutDashboard, Users, ShoppingCart, BarChart3, Settings, LogOut, Calendar , User} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const navItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Calendar', icon: Calendar, href: '/calendar'},
  { name: 'Profile', icon: User, href: '/profile' },
  { name: 'Customers', icon: Users, href: '/customers' },
  { name: 'Orders', icon: ShoppingCart, href: '/orders' },
  { name: 'Analytics', icon: BarChart3, href: '/analytics' },
];

const bottomNavItems = [
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Logout', icon: LogOut, href: '/logout' }, 
];


function Sidebar({ isSidebarOpen, theme }) {
  const isDark = theme === 'dark';
  const location = useLocation(); 
  const NavLink = ({ item }) => {
    
    const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
    return (
      <li>
        <Link
          to={item.href}
          className={`
            flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200
            ${isActive
              ? 'bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700'
              : isDark 
                ? 'text-slate-300 hover:bg-slate-800/50' 
                : 'text-slate-600 hover:bg-slate-100'
            }
          `}
        >
          <item.icon className='w-5 h-5' />
          <span>{item.name}</span>
        </Link>
      </li>
    );
  };

  return (
    <aside 
      className={`
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        fixed inset-y-0 left-0 z-30 w-64
        flex flex-col
        border-r backdrop-blur-xl 
        transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isDark 
          ? 'bg-[#212B36] border-slate-700/50' 
          : 'bg-white/80 border-slate-200/50'
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

      {/* Alt Kısım */}
      <div className={`p-4 border-t ${isDark ? 'border-slate-700/50' : 'border-slate-200/50'}`}>
        <ul className='space-y-2'>
          {bottomNavItems.map((item) => (
            <NavLink key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;